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
  @Input() public note: Note = null;
  @Input() state: boolean;

  ngOnInit() {
  }

  constructor(@Inject(NoteService) private noteService: NoteService) {
  }

  saveDoneNote(): void {
    const note = this.note;
    note.pState = this.state;
    this.noteService.updateState(note);
  }
}
