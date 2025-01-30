
```ts
enum ContractStatus {
    Permanent = 1,
    Temp,
    Aprentice
}
let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);

```



<details><summary><b>Output</b></summary>

```ts
"use strict";
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Aprentice"] = 3] = "Aprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);

```


</details>


<details><summary><b>Compiler Options</b></summary>

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true,
    "strictBindCallApply": true,
    "noImplicitThis": true,
    "noImplicitReturns": true,
    "alwaysStrict": true,
    "esModuleInterop": true,
    "declaration": true,
    "target": "ES2017",
    "jsx": "react",
    "module": "ESNext",
    "moduleResolution": "node"
  }
}
```


</details>

**Playground Link:** [Provided](https://www.typescriptlang.org/play/?#code/KYOwrgtgBAwg9iALgJwIYGNEGVGsWAZygG8AoKCqABWGQlRFESgF4oBGAGnMoBVgIAB26UoAQUHImAS3TBSAX1IAbYMwGDlcAJ7BgOPIQBcsBCgzZc+Im3hI0mA9YB0-IQG5S6BATirnWgDmABQaWrr6VoQAlJ7eIL7+QcF25o5RBADaYTp6ToQAurGkQA)
      
