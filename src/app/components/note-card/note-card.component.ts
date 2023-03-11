import {Component, Input} from '@angular/core';
import {Note} from 'src/app/models/note';
import {NoteService} from "../../services/note.service";

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent {

  @Input() note: Note = new Note(-1,"", "", [""]);

  isReadOnly: boolean = true;

  constructor(private noteService: NoteService) {
  }

  setEditTitle() {
    this.isReadOnly = !this.isReadOnly;
  }

  selectNote() {
    console.log("saddsa");

  }

  removeNote() {
  this.noteService.removeNote(this.note.id);
  }
}
