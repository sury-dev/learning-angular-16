import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title : string = '8.ComponentCommunication';
  taskList : string[] = ["Task 1","Task 2","Task 3"]

  deleteTask(taskName : string , str : string){
    this.taskList = this.taskList.filter((task) => task !== taskName)
    console.log(str)
  }
}