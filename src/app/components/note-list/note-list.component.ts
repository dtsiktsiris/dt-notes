import {Component} from '@angular/core';
import {Note} from 'src/app/models/note';
import {NoteService} from "../../services/note.service";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {

  noteList: Note[] = []

  constructor(private noteService: NoteService) {
  }

  ngOnInit(): void {
    this.listNote();
  }

  listNote() {
    this.noteService.getNoteList().subscribe(
      data => {
        this.noteList = data;
      }
    )
  }
}
