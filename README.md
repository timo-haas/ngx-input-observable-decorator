# ngx-input-observable-decorator

[![Build Status](https://travis-ci.com/timo-haas/ngx-input-observable-decorator.png?branch=master)](https://travis-ci.com/timo-haas/ngx-input-observable-decorator)


## Usage

```javascript
class AComponent {
  @Input()
  @InputObservable()
  textValue: string;
  textValue$: Observable<string>; // generated observable of textValue
}
```

## Install
```bash
npm install ngx-input-observable-decorator --save-dev
```