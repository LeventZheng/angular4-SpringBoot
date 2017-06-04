import { MyAlbumComponent } from './components/my-album/my-album.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'login', component: LoginComponent},
      { path: 'my-album', component: MyAlbumComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
