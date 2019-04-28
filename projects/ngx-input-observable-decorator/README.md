# ngx-input-observable-decorator

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