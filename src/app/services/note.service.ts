import {Injectable} from '@angular/core';
import {Note} from '../models/note';
import {forEach} from '@angular/router/src/utils/collection';
import {Observable, Subject} from 'rxjs';

const NOTE_STORAGE_NAME = 'notes';


@Injectable()
export class NoteService {

  private pNotes: Array<Note> = [];
  private pShowedNote = new Subject<Note>();


  constructor() {
    const n = window.localStorage.getItem(NOTE_STORAGE_NAME);
    if (n) {
      const noteArr = JSON.parse(n) as Array<any>;
      this.pNotes = noteArr.map(note => Note.fromJson(note));
    }
  }

  public setShowedNote(note: Note): void {
    this.pShowedNote.next(note);
  }

  public getShowedNote(): Observable<Note> {
    return this.pShowedNote.asObservable();
  }

  get notes(): Array<Note> {
    return this.pNotes;
  }

  public addNote(note: Note): void {
    this.pNotes.push(note);
    this.save();
  }

  public updateState(note: Note): void {
    this.pNotes.forEach((n) => {
      if (n.name === note.pName) {
        n.state = note.pState;
      }
    });
    this.save();
  }

  private save() {
    window.localStorage.setItem(NOTE_STORAGE_NAME, JSON.stringify(this.pNotes.map(n => n.toJson())));
  }

  del(note: Note) {
    this.pNotes = this.pNotes.filter(n => n !== note);
    this.save();
  }
}
