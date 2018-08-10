//import {Pet} from './pet.mjs'
/*Pet class

attributes
	User input
		name
		colour
		gender 
	

	program defined
		age
		health
			-> thirst
			-> hunger
			-> love
			-> cleaness
			-> sleep
			
		tricks
			-> available trick
			-> learned tricks
*/
/*
methods

User can call

get age
get health
get tricks
get thirst
get hunger 
get love
get cleaness
get ill


giveWater
feed
cuddle
clean
teachTrick
doTrick
play
wakeup


private

age
reduceHealth
die
live -> reducec live attributes
sleep


maybe add behavious functions later


*/




class Pet{
constructor(name,colour,gender)
{
	//User defined
	this._name=name;
	this._colour=colour;
	this._gender=gender;

	//stats
	this._age=0;
	this._health=100;
	this._thirst=90;
	this._hunger=70;
	this._love=80;
	this._cleaness=50;
	this._sleep=80;
	this._availableTricks=['jump','roll','speak'];
	this._learnedTricks= [''];

	//states
	this._asleep=true;
	this._alive=true;

	console.log('A new Pet has been born. Oh look ' +this._name + ' is sleeping.');
}

//getter functions



get name()
{
	console.log('Name = ' + this._name);
	return this._name;
};

get colour()
{
	console.log('Fur colour = ' + this._colour);
	return this._colour;
};

get gender()
{
	console.log('Gender = ' + this._gender );
	return this._gender;
};

get age()
{	console.log('here');
	console.log('Age = '+ this._age);
	
	return this._age;
};

get health()
{
	console.log('Health = '+ this._health);
	return this._health;
};
get thirst()
{
	console.log('Thirst = '+ this._thirst);
	return this._thirst;
};

get hunger()
{
	console.log('Hunger = '+ this._hunger);
	return this._hunger;
};

get thirst()
{
	console.log('Thirst = '+ this._thirst);
	return this._thirst;
};

get love()
{
	console.log('Love = '+ this._love);
	return this._love;
};

get cleaness()
{
	console.log('Cleaness = '+ this._cleaness);
	return this._cleaness;
};

get sleep()
{
	console.log('Sleep = '+ this._sleep);
	return this._sleep;
};

get learnedTricks()
{
	console.log('Trick learned = '+ this._learnedTricks);
	return this._learnedTricks;
};

get asleep()
{
	if (this._asleep)
	{
		console.log('Asleep');
	}
	else
	{
		console.log('Awake')
	}
	return this._asleep;
};

get alive()
{
	if (this._alive)
	{
		console.log('Alive');
	}
	else
	{
		console.log('Dead')
	}
	return this._alive;
};

get availableTricks()
{
	console.log(this._name + ' can learn:' + this._availableTricks.forEach(function(trick){console.log(trick)}) )
	return this._availableTricks;
}

//setter methods
set learnedTricks(trick)
{
	
	if (this._availableTricks.includes(trick))
	{	
		this._learnedTricks.push(trick);
		console.log(this._name + ' has learned ' + trick)
		return true;
	}

	else 
	{
		console.log(this._name + ' can\'t learn ' +trick)
		return false;
	}
}

// public methods

getStats()
{
	console.log('\nYour Pet\n')

	this.name;
	this.colour;
	this.gender;
	console.log('');
	this.age;
	this.health;
	this.thirst;
	this.hunger;
	this.love;
	this.cleaness;
	this.sleep;
	this.learnedTricks;

	console.log('')
	this.asleep;
	this.alive;

};



giveWater()
{
	if(this._asleep)
	{
		console.log(this._name +' is asleep you need to wake ' + this._name +' up first')
		return
	}

	if(this._thirst<=80)
	{

		this._thirst+=20;	
		console.log('Thirst level: ' + this._thirst)
	}
	else
	{
		this._thirst=100;
		console.log(this._name+ ' had enough water')
	}


}

feed()
{
	if(this._asleep)
	{
		console.log(this._name +' is asleep you need to wake ' + this._name +' up first')
		return
	}
	if(this._hunger<=70)
	{

		this._hunger+=30;	
		console.log('Hunger level: ' + this._hunger)
	}
	else
	{
		this._hunger=100;
		console.log(this._name+ ' had enough food')
	}


}

cuddle()
{
	if(this._asleep)
	{
		console.log(this._name +' is asleep you need to wake ' + this._name +' up first')
		return
	}

	if(this._love<=90)
	{

		this._love+=10;	
		console.log('Love level: ' + this._love)
	}
	else
	{
		this._love=100;
		console.log(this._name+ ' had enough cuddles. Give him some alone time gosh.')
	}


}

clean()
{
	if(this._asleep)
	{
		console.log(this._name +' is asleep you need to wake ' + this._name +' up first')
		return
	}

	if(this._cleaness<=50)
	{

		this._cleaness+=50;	
		console.log('Cleaness level: ' + this._cleaness)
	}
	else
	{
		this._cleaness=100;
		console.log(this._name+ ' is sparkling')
	}


}


play()
{
	if(this._asleep)
	{
		console.log(this._name +' is asleep you need to wake ' + this._name +' up first')
		return
	}

	if(this._hunger<=20 || this._sleep<=20 || this._thirst<=20)
	{
		console.log(this._name + ' does not want to play right now')
	}

	else
	{
		console.log('This was fun')

		this._cleaness-=20;
		this._thirst-=15;
		this._sleep-=20;
		this._hunger-=10
		if(this._love<85)
		{
			this._love+=15;
		}
		else
		{
			love=100;
		}
	}
}

teachTrick(trick)
{
	if(this._asleep)
	{
		console.log(this._name +' is asleep you need to wake ' + this._name +' up first')
		return
	}

	if(this._sleep<30)
	{
		console.log(this._name + ' is to tired to learn a trick right now');
		return;
	}

	this._sleep-=20;
	return this.learnedTricks=trick;

}



doTrick(trick)
{
	if(this._asleep)
	{
		console.log(this._name +' is asleep you need to wake ' + this._name +' up first')
		return
	}

		if(this._learnedTricks.includes(trick))
		{
			console.log(this._name + ' just did the trick ' + trick)
		}
		else
		{
			console.log(this._name + ' hasn\'t learned ' + trick)
		}
}

wakeup()
{
	if(this._sleep<50)
	{
		console.log(this._name + ' is still sleepy');
	}

	else
	{
		console.log(this._name + ' is feeling very rested');
	}

	this._asleep=false;
}

//not called by user

reduceHealth()
{
	if(this._water<=10 || this._thirst <=10 || this._cleaness <=5 || this._love <=5)
	{
		this._health-=10
	}
}

die()
{
	if(this._health<=0)
	{
		this._alive=false;
		console.log(this.name + ' died.')
	}
	else if(this._age>=100)
	{
		this._alive=false;
		console.log(this.name + ' died.')
	}
}

live()
{
//fix that it goes into minus

	this._thirst-=10;
	this._hunger-=5;
	this._cleaness-=2;
	this._love-=10;
	if(this._asleep)
	{
		this._sleep+=10;
	}
	else
	{
		this._sleep-=10;
	}

	this._age++;
	this.reduceHealth();
	this.sleep();
	this.die();

}

sleep()
{
	if(this._sleep<=10)
	{
		this._asleep=true;
	}
}

};



/////////////////////////////////////////////////////////////////////////////////

function passTime()
{
	console.log('Time is passing\n')
	myPet.live();
	//myPet.getStats();
	timer++;
}


const readline = require('readline-sync');

let name = readline.question("What do you want to name your pet?   ");

let gender;
while(gender!=='male'&& gender!=='female')
{
gender = readline.question('What gender is '+ name + '? (male/female)  ');

}

let colour = readline.question('What colour does '+ name +' have?   ');

const myPet= new Pet(name,colour,gender);


const choices=['1','2','3','4','5','6','7','8','9','10'];
let choice ;

let timer =0;


setTimeout(passTime,5000);


quit=false
while(!quit)
{ 

	choice ='0';


	while(!choices.includes(choice))
{
	
	choice = readline.question('What would you like to do?\n1. Get Stats\n2. Give Water \n3. Feed\n4. Cuddle\n5. Clean\n6. Teach Trick\n7. Do Trick\n8. Play\n9. Wakeup\n10. Quit\n')
	setTimeout(passTime,5000);
}


switch(choice)
{
	case '1':
		myPet.getStats()
		break;
	case '2':
		myPet.giveWater()
		break;
	case '3':
		myPet.feed()
		break;
	case '4':
		myPet.cuddle()
		break;
	case '5':
		myPet.clean()
		break;
	case '6': 
		myPet.availableTricks;
		trick= readline.question('What trick would you like to teach '+name)
		myPet.teachTrick(trick);
		break;
	case '7':
		myPet.learnedTricks;
		trick= readline.question('What trick would you '+name + ' to do?')
		myPet.doTrick(trick);
		break;
	case '8':
		myPet.play();
		break;
	case '9':
		myPet.wakeup();
		break;
	case '10':
		quit=true;
}
}


