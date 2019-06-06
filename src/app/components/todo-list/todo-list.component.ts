import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Note} from '../../models/note';
import {NoteService} from '../../services/note.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  newNote = new Note('', '');
  notes: Array<Note>;

  @Output() public outToParent: EventEmitter<Note> = new EventEmitter<Note>();

  constructor(@Inject(NoteService) private noteService: NoteService) {
    this.notes = noteService.notes;
  }

  ngOnInit() {
  }

  addNote() {
    this.noteService.addNote(this.newNote);
    this.newNote = new Note('', '');
  }

  deleteNote(note: Note) {
    this.noteService.del(note);
    this.notes = this.noteService.notes;
  }

  showNote(note: Note) {
    this.noteService.setShowedNote(note);
  }

}
