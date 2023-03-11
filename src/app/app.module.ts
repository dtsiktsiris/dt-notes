import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { TagItemComponent } from './components/tag-item/tag-item.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { LeftSidebarComponent } from './layout/left-sidebar/left-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteCardComponent,
    NoteListComponent,
    TagItemComponent,
    TagListComponent,
    LeftSidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
