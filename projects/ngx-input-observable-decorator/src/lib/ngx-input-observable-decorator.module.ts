import { BehaviorSubject } from 'rxjs';

const instancesMapofSubjects = new WeakMap<
  any,
  Map<string, BehaviorSubject<any>>
>();
const getInstanceSubject = (
  instance: any,
  observablePropertyName: string
): BehaviorSubject<any> => {
  let existingInstanceMap = instancesMapofSubjects.get(instance);
  if (!existingInstanceMap) {
    const createdSubjectsMap = new Map<string, BehaviorSubject<any>>();
    instancesMapofSubjects.set(instance, createdSubjectsMap);
    existingInstanceMap = createdSubjectsMap;
  }

  let foundSubject = existingInstanceMap.get(observablePropertyName);
  if (!foundSubject) {
    const createdSubject = new BehaviorSubject<any>(undefined);
    existingInstanceMap.set(observablePropertyName, createdSubject);
    foundSubject = createdSubject;
  }
  return foundSubject;
};

export function InputObservable<T>(options?: {
  propertyNameSuffix?: string;
}): any {
  return function(
    targetPrototype: T,
    propertyName: keyof T,
    descriptor: PropertyDescriptor
  ) {
    const observablePropertyName =
      propertyName + ((options && options.propertyNameSuffix) || '$');
    console.log(observablePropertyName);
    const getterFx = function(this: T) {
      return getInstanceSubject(this, observablePropertyName).getValue();
    };
    const setterFx = function(this: T, value: any): void {
      return getInstanceSubject(this, observablePropertyName).next(value);
    };

    Object.defineProperty(targetPrototype, observablePropertyName, {
      get: function(this: T) {
        return getInstanceSubject(this, observablePropertyName).asObservable();
      },
      enumerable: true
    });

    if (descriptor) {
      const originalSetter = descriptor.set;
      const originalGetter = descriptor.get;
      descriptor.get = getterFx;
      descriptor.set = function(this: T, value: any) {
        if (originalSetter) {
          originalSetter.call(this, value);
        }
        if (originalGetter) {
          value = originalGetter.call(this);
        }
        return setterFx.call(this, value);
      };
    } else {
      Object.defineProperty(targetPrototype, propertyName, {
        get: getterFx,
        set: setterFx,
        enumerable: true
      });
    }
  };
}
