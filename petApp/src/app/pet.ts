export class Pet {
	_name: string;
	_colour: string;
	_gender: string;
	_age=0;
	_health=100;
	_thirst=90;
	_hunger=70;
	_love=80;
	_cleaness=50;
	_sleep=80;
	_availableTricks=['jump','roll','speak'];
	_learnedTricks= [''];

	//states
	_asleep=true;
	_alive=true;
	_stateImageUrl="https://cdn.glitch.com/03b12a9f-25f3-4880-9570-833358aa085f%2FDogsSleeping.jpg?1533985707706";
	constructor(name,colour,gender)
{
	//User defined
	this._name=name;
	this._colour=colour;
	this._gender=gender;

	//stats
	

	
}
///////////////Setter////////////////

get name()
{
	
	return this._name;
}

get colour()
{
	return this._colour;
};

get gender()
{
	return this._gender;
};

get age()
{	
	return this._age;
};

get health()
{	
	return this._health;
};

get hunger()
{
	return this._hunger;
};

get thirst()
{
	return this._thirst;
};

get love()
{
	return this._love;
};

get cleaness()
{
	return this._cleaness;
};

get sleep()
{
	return this._sleep;
};

get learnedTricks()
{
	return this._learnedTricks;
};

get asleep()
{
	if(this._asleep)
		{
			return "Asleep";
		}
	else{
		return "Awake";
	};
	
};

get alive()
{
	return this._alive;
};

get availableTricks()
{
	return this._availableTricks;
};

get stateImageUrl
{
	console.log(this._stateImageUrl)
	return this._stateImageUrl;
}

changeName(name)
{
 this._name=name;
}

/////////////Public methods///////////////
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
			this._love=100;
		}
	}
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

wakeUp()
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
	this.imageChange()
}

//not called by user

reduceHealth()
{
	if(this._hunger<=10 || this._thirst <=10 || this._cleaness <=5 || this._love <=5)
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
	this.checkSleep();
	this.die();
	this.imageChange()

}

checkSleep()
{
	if(this._sleep<=10)
	{
		this._asleep=true;

	}
	this.imageChange()
}

imageChange()
{
	if(this._asleep)
	{
		this._stateImageUrl="https://cdn.glitch.com/03b12a9f-25f3-4880-9570-833358aa085f%2FDogsSleeping.jpg?1533985707706";
	}
	if(!this._alive)
	{
		this._stateImageUrl="https://cdn.glitch.com/03b12a9f-25f3-4880-9570-833358aa085f%2FDead.jpg?1533988870786";
	}
	else
	{
		this._stateImageUrl="https://cdn.glitch.com/03b12a9f-25f3-4880-9570-833358aa085f%2FDogs.jpg?1533499177995";
	}
}

}
