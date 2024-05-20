# Validador-Cedulas-Nicaraguenses
Este repositorio contiene un pequeño objeto para validar cédulas nicaragüenses.

## Uso:

``` javascript
import validator from './validador.js';

const isValid = validator.validate('291-151194-1010A');
console.log(isValid); // false
```

## Nota:
No se realizó demostración con cedula real por motivos de privacidad, pero es libre de probarlo con cualquier cédula.

## License:
[MIT](https://opensource.org/licenses/MIT)