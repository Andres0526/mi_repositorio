// programacion funcional todo el codigo en las mismas lineas 
var numeroUno = 5;
var numeroDos =25;
var numeroTres= 0;
var numeroCuatro = 0;

numeroTres= numeroUno+ numeroDos;
//function suma (x,x){
// return x + y;
//}
//numeroTres= suma (numeroUno,numeroDos);
console.log(numeroTres);

function suma (X,Y){
 return X + Y;
}
numeroCuatro= suma (numeroUno,numeroDos);
console.log(numeroCuatro)


// ejemplo de objeto
//creating an object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true 
virtualPet.nap()
console.log(virtualPet.sleepy) // false


// otro ejemplo de paradigma
function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum 
}

addTwoNums(getNumber(), getNumber())