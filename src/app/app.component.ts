import {Component, Input} from '@angular/core';
import {Note} from './models/note';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">


      <div class="panel">
        <app-todo-list (outToParent)="receiveFromChild($event)">
        </app-todo-list>
      </div>
      <div class="panel">
        <app-note [note]="showedNote"></app-note>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private pShowedNote: Note = null;
  title = 'ng01';


  get showedNote(): Note {
    return this.pShowedNote;
  }

  receiveFromChild(note: Note) {
    this.pShowedNote = note;
  }
}
