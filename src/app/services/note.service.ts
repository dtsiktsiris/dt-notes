import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Note} from "../models/note";

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  noteList: Note[] = [
    new Note("First note", "first content", ["tag1", "tag2"]),
    new Note("second note", "second content", ["tag2", "tag3"]),
    new Note("third note", "third content", ["tag2", "tag4"]),
    new Note("forth note", "forth content", ["tag1", "tag4"]),
    new Note("fifth note", "fifth content", ["tag3", "tag4"]),
  ]
  constructor() { }

  getNoteList(): Observable<Note[]>{
    return of(this.noteList);
  }
}
