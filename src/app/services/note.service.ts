import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Note} from "../models/note";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  //temporary database :)

  noteList: Note[] = [
    new Note(1, "First note", "first content", ["tag1", "tag2"]),
    new Note(2, "second note", "second content", ["tag2", "tag3"]),
    new Note(3, "third note", "third content", ["tag2", "tag4"]),
    new Note(4, "forth note", "forth content", ["tag1", "tag4"]),
    new Note(5, "fifth note", "fifth content", ["tag3", "tag4"]),
  ]

  count: number = 6;

  constructor() {
  }

  getNoteList(): Observable<Note[]> {
    return of(this.noteList);
  }

  addNote() {
    this.noteList.splice(0, 0, new Note(this.count, "New note", "", []));
    this.count++;
  }

  removeNote(id: number) {
    let index = this.noteList.findIndex((note) => note.id == id);
    this.noteList.splice(index, 1);
  }
}
