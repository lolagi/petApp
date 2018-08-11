import { Component,OnInit } from '@angular/core';


import {Pet} from './pet';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'petApp';
  myPet= new Pet('Fluffy','grey','male');
  ngOnInit()
  {
  	setInterval( () =>{this.myPet.live()},8000)
  }
}
