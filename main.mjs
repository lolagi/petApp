//import {Pet} from './pet.mjs'


const readline = require('readline-sync');

let name = readline.question("What do you want to name your pet?   ");

let gender;
while(gender!=='male'&& gender!=='female')
{
gender = readline.question('What gender is '+ name + '? (male/female)  ');

}




let colour = readline.question('What colour does '+ name +' have?   ');


console.log(name + '  ' + gender + '  '+ colour);
//const myPet=new Pet('Fluffy','Green','male');

//myPet.giveWater();
