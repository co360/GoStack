### Typescript

- Intellisence muito mais preciso e auxiliar

- Utilização das interfaces ou aplicação de "tipagem direta"

```
function doSomething(name: string, email: string) {
 // return ... 
}

```

* Interfaces

```
interface SomethingData {
  name?: string,  // name opcional
  email: string,
  techs: Array<string>
}

function doSomething({ name, string, techs}: SomethingData) {
 // return ... 
}

```
### Quando adicionar tipagem?

- Análise do contexto do arquivo

 * Definição de tipos

### Interface

- Definição de tipos de um conjunto de informações, principalmente objetos em Javascript.
- Sempre que precisamos definir um formato de um novo objeto, criamos uma interface
