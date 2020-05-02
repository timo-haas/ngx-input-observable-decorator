# ngx-input-observable-decorator

[![Build Status](https://travis-ci.com/timo-haas/ngx-input-observable-decorator.png?branch=master)](https://travis-ci.com/timo-haas/ngx-input-observable-decorator)

## Install

```bash
npm install ngx-input-observable-decorator
```

## Usage

```javascript
import { Input } from '@angular/core';
import { InputObservable } from 'ngx-input-observable-decorator';
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
