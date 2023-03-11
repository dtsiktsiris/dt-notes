import { Component, Input } from '@angular/core';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent {


  @Input() note: Note = new Note("", "", [""]);

  isReadOnly: boolean = true;

  setEditTitle() {
    this.isReadOnly = !this.isReadOnly;
  }

  selectNote() {
    console.log("saddsa");
    
  }
}
