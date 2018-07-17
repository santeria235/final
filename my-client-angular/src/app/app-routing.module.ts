import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './section/card/card.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { JoonjaComponent } from './joonja/joonja.component';
import { EditorComponent } from './joonja/editor/editor.component';
import { RecomendedAreaComponent } from './joonja/recomended-area/recomended-area.component';
import { PostareaComponent } from './joonja/postarea/postarea.component';
import { CommentComponent } from './joonja/comment/comment.component';
import { SigninComponent } from './signin/signin.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'joonja/:pageNo', component: JoonjaComponent  },
  { path: 'signin', component: SigninComponent },
  { path: 'editor', component: EditorComponent },
  { path: 'fileupload', component: FileUploadComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
