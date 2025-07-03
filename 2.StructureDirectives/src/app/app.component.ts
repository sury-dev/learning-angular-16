import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '2.StructureDirectives';
  isLoggedIn : boolean = !true;
  username : string = "Suryansh"

  names: string[] = ["Me", "and", "my","buddy","will", "meet", "soon"]

  grade : string = "H";
}
