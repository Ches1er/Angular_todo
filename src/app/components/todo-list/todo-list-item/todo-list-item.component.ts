import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from '../../../models/note';

@Component({
    selector: 'app-todo-list-item',
    templateUrl: './todo-list-item.component.html',
    styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

    @Input() note: Note = null;
    @Output() onDeleteNote: EventEmitter<Note> = new EventEmitter();
    @Output() onShowNote: EventEmitter<Note> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    deleteNote() {
        this.onDeleteNote.emit(this.note);
    }

    showNote() {
        this.onShowNote.emit(this.note);
    }
}
