import { Component } from '@angular/core';
import {NoteService} from "../../services/note.service";

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent {

  constructor(private noteService: NoteService) {
  }
  addNote() {
    this.noteService.addNote();

  }
}
