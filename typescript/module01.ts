function addNumbers(x: number, y: number):number {
    return x + y;
}

function Nome(nome:string, sobrenome:string):string {
    return `${nome} ${sobrenome}`;
}

interface Usuario {
    nome:string,
    idade:number
}

function UsuarioShow(nome:string, idade:number):Usuario {
    var user:Usuario =  {
        nome:nome,
        idade:idade

    }
    return user;
}
let value: number | string | Usuario = addNumbers(3, 6);
// value = Nome('Welinton', 'Jesus');
value = UsuarioShow('Welinton', 19);
console.log(value.idade);