import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class hero{
  id:number;
  name:string;
}
export class AppComponent {
  title = 'Tour of Heroes';
  hero= 'Windstorm';
}
