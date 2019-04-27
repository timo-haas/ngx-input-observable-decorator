import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompComponent } from './test-comp.component';

describe('TestCompComponent', () => {
  let component: TestCompComponent;
  let fixture: ComponentFixture<TestCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestCompComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind normal input', () => {
    component.stringInput = 'test';
    expect(component.stringInput).toEqual('test');
  });

  it('should bind normal input observable', (done: DoneFn) => {
    component.stringInput = 'test';
    expect(component.stringInput$).toBeTruthy();
    component.stringInput$.subscribe(value => {
      expect(value).toEqual('test');
      done();
    });
  });

  it('should bind normal input observable with custom suffix', (done: DoneFn) => {
    component.stringInput2 = 'test';
    expect(component.stringInput2Obs).toBeTruthy();
    component.stringInput2Obs.subscribe(value => {
      expect(value).toEqual('test');
      done();
    });
  });

  it('should bind renamed input observable', (done: DoneFn) => {
    component.renamedStringInput = 'test';
    expect(component.renamedStringInput$).toBeTruthy();
    component.renamedStringInput$.subscribe(value => {
      expect(value).toEqual('test');
      done();
    });
  });

  it('should bind renamed input observable with custom suffix', (done: DoneFn) => {
    component.renamedStringInput2 = 'test';
    expect(component.renamedStringInput2Obs).toBeTruthy();
    component.renamedStringInput2Obs.subscribe(value => {
      expect(value).toEqual('test');
      done();
    });
  });

  it('should differ between two input properties', () => {
    component.stringInput = 'test0';
    component.stringInput2 = 'test1';
    expect(component.stringInput).not.toEqual(component.stringInput2);
  });
});
