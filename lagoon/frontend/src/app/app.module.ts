import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MyAlbumComponent } from './components/my-album/my-album.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';
import { ImageCommentsComponent } from './components/image-comments/image-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoListComponent,
    SidePanelComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    MyAlbumComponent,
    AddPhotoComponent,
    ImageDetailComponent,
    ImageCommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
