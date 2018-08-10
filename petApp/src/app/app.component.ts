import { Component } from '@angular/core';
import {Pet} from './pet';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'petApp';
  myPet= new Pet('Fluffy','grey','male');
}
