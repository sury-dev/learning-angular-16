import { Component, OnInit } from '@angular/core';

import { MessagesService } from './services/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
  providers: [MessagesService]
})
export class AppComponent {
  title = '5.ApiIntegrationHTTPClient';
  posts : any[] = []
  constructor (private messageServices: MessagesService) {}
  ngOnInit() {
    // this.messageServices.getPosts().subscribe(res => {
    //   this.posts = res
    // }, (error) => {
    //   console.log("Error encountered while fetching the Api :", error);
      
    // })
    this.messageServices.getPosts().subscribe({
      next: (res) => {
        this.posts= res
      },
      error: (err) => {
        console.log("Error encountered while fetching the Api :", err);
      }
    })
  }
}
