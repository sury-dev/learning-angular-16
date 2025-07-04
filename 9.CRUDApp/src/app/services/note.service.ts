import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[] = [];
  private notesSubject = new BehaviorSubject<Note[]>([])
  private isEdit = new BehaviorSubject<boolean>(false);

  constructor() { }

  getEditable() {
    return this.isEdit.asObservable();
  }

  setEditable(value: boolean) {
    this.isEdit.next(value)
  }

  createNote(note: Note): void {
    note.id = new Date().getTime();
    this.notes.push(note)
    this.notesSubject.next(this.notes)
  }

  getNotesObservable(): Observable<Note[]> {
    return this.notesSubject.asObservable();
  }

  updateNote(updatedNote: Note): void {
    const index = this.notes.findIndex(note => note.id === updatedNote.id);
    console.log(updatedNote);
    
    
    if (index !== -1) {
      this.notes[index] = updatedNote;
      this.notesSubject.next(this.notes)
    } else {
      console.warn(`Note with id ${updatedNote.id} not found.`);
    }
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter(note => note.id !== id)
    this.notesSubject.next(this.notes)
  }
}
