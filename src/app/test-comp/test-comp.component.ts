import { Component, Input, OnInit } from '@angular/core';
import { InputObservable } from 'ngx-input-observable-decorator';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {
  @Input()
  @InputObservable()
  stringInput!: string | undefined;
  stringInput$!: Observable<string | undefined>;

  @Input()
  @InputObservable({ propertyNameSuffix: 'Obs' })
  stringInput2!: string | undefined;
  stringInput2Obs!: Observable<string | undefined>;

  @Input('ngxStringInput')
  @InputObservable()
  renamedStringInput!: string | undefined;
  renamedStringInput$!: Observable<string | undefined>;

  @Input('ngxStringInput2')
  @InputObservable({ propertyNameSuffix: 'Obs' })
  renamedStringInput2!: string | undefined;
  renamedStringInput2Obs!: Observable<string | undefined>;

  constructor() {}
  ngOnInit() {
    console.log(this);
  }
}
