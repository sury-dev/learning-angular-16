import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Note } from 'src/app/interfaces/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit, OnChanges{
  noteForm !: FormGroup;
  @Input () selectedNote !: Note;
  isEdit!:boolean;
  constructor(private noteService: NoteService){
    this.noteService.getEditable().subscribe({
      next : (res) => this.isEdit = res
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['selectedNote']?.currentValue){
      const value = changes['selectedNote']?.currentValue
      this.noteForm.patchValue({
        id: value.id,
        title: value.title,
        content: value.content
      })
    }
  }
  ngOnInit(): void {
    this.noteForm= new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    })
  }

  onSubmit(): void {
    if(this.noteForm.invalid){
      return;
    }
    const note: Note = this.noteForm.value;
    if(this.isEdit){
      note.id = this.selectedNote.id
      this.noteService.updateNote(note)
      this.noteService.setEditable(false)
    } else {
      this.noteService.createNote(note);
    }
    this.noteForm.reset()
  }
}
