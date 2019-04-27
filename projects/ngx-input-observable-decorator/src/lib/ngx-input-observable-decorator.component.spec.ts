import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInputObservableDecoratorComponent } from './ngx-input-observable-decorator.component';

describe('NgxInputObservableDecoratorComponent', () => {
  let component: NgxInputObservableDecoratorComponent;
  let fixture: ComponentFixture<NgxInputObservableDecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxInputObservableDecoratorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxInputObservableDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
