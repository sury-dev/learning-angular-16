import { Component } from '@angular/core';
import { MessagesService } from './services/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.scss'],
  providers: [MessagesService]
})
export class AppComponent {
  messages : string[] = []
  constructor(private messagesService : MessagesService){
    this.messages = messagesService.getMessages();
  }
  title = 'Services And Dependency Injection';
}
