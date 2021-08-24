import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { BookReaderComponent } from './views/book-reader/book-reader.component';
import { BookMenuComponent } from './components/book-menu/book-menu.component';
import { BookFormatterComponent } from './components/book-formatter/book-formatter.component';
import { BookInfoComponent } from './components/book-info/book-info.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { BookViewComponent } from './components/book-view/book-view.component';
import { BookHighlightComponent } from './components/book-highlight/book-highlight.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { CommentsComponent } from './components/comments/comments.component';
import { BookNavigationComponent } from './components/book-navigation/book-navigation.component';
import { BookFontstyleComponent } from './components/book-fontstyle/book-fontstyle.component';
import { BookThemeComponent } from './components/book-theme/book-theme.component';
import { BookLayoutsComponent } from './components/book-layouts/book-layouts.component';


@NgModule({
  declarations: [
    BookComponent,
    BookReaderComponent,
    BookMenuComponent,
    BookFormatterComponent,
    BookInfoComponent,
    ProgressBarComponent,
    BookViewComponent,
    BookHighlightComponent,
    BookmarksComponent,
    CommentsComponent,
    BookNavigationComponent,
    BookFontstyleComponent,
    BookThemeComponent,
    BookLayoutsComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
