import generateName from "sillyname"
import {randomSuperhero} from 'superheroes';

var sillyName = generateName();
var superhero = randomSuperhero();

console.log(`meu nome é ${sillyName}`);
console.log(`Eu sou o ${superhero}`);