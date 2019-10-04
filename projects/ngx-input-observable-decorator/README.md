# ngx-input-observable-decorator
Typescript Decorator @InputObservable for observing @Input properties

### Prerequisites
- Angular (min. 7.0.0)
- RxJS (min. 6.0.0)

## Install
```bash
npm install ngx-input-observable-decorator
```

## Usage

```javascript
import { Input } from '@angular/core';
import { InputObservable } from 'ngx-input-observable-decorator'
import { Observable } from 'rxjs';

class AComponent {
  @Input()
  @InputObservable()
  textValue: string;
  textValue$: Observable<string>; // generated observable of textValue
}
```

## Demo
[Stackblitz](https://stackblitz.com/edit/demo-ngx-input-observable-decorator)