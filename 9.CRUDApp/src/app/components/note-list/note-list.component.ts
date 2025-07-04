import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Note } from 'src/app/interfaces/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];
  isEditableMode : boolean = false;
  @Output() selectedNote = new EventEmitter<Note>();

  constructor(private noteService: NoteService){}
  ngOnInit(): void {
    this.noteService.getNotesObservable().subscribe(notes => {
      this.notes = notes
    })
  }

  editNote(note: Note): void {
    this.selectedNote.emit(note)
    this.noteService.setEditable(true);

  }
  deleteNote(id : number): void{
    this.noteService.deleteNote(id);
  }
}
