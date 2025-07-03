import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  getMessages() {
    return ["Message 1","Message 2","Message3"]
  }
}
