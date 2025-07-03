import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '1.Introduction';

  //ngModel
  inputText : string = "Default Text"

  //ngClass
  message : string = "This is a dangerous message."
  classes: string = 'danger text-size'

  //ngStyle
  selectedColor: string = 'red'
}
