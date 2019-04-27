import { BehaviorSubject } from 'rxjs';

const subjectInstanceMap = new WeakMap<any, BehaviorSubject<any>>();
const getInstanceSubject = (instance: any): BehaviorSubject<any> => {
  const existingSubject = subjectInstanceMap.get(instance);
  if (existingSubject) {
    return existingSubject;
  }
  const instanceSubject = new BehaviorSubject<any>(undefined);
  subjectInstanceMap.set(instance, instanceSubject);
  return instanceSubject;
};

export function InputObservable<T>(options?: {
  bindingObservablePropertyName?: string;
}): any {
  return function(
    targetPrototype: T,
    propertyName: keyof T,
    descriptor: PropertyDescriptor
  ) {
    const observablePropertyName =
      (options && options.bindingObservablePropertyName) || propertyName + '$';
    const getterFx = function(this: T) {
      return getInstanceSubject(this).getValue();
    };
    const setterFx = function(this: T, value: any): void {
      return getInstanceSubject(this).next(value);
    };

    Object.defineProperty(targetPrototype, observablePropertyName, {
      get: function(this: T) {
        return getInstanceSubject(this).asObservable();
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