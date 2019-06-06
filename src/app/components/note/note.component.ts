import {Component, Inject, Input, OnInit} from '@angular/core';
import {Note} from '../../models/note';
import {NoteService} from '../../services/note.service';
import {log} from 'util';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  private pNote: Note = null;
  @Input() state: boolean;

  ngOnInit() {
  }

  set note(note: Note) {
    this.pNote = note;
  }

  get note(): Note {
    return this.pNote;
  }

  constructor(@Inject(NoteService) private noteService: NoteService) {
    this.noteService.getShowedNote().subscribe(message => {
      this.pNote = message;
    });
  }

  saveDoneNote(): void {
    const note = this.pNote;
    note.pState = this.state;
    console.log(note);
    this.noteService.updateState(note);
  }
}
