import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SongsComponent } from './pages/songs/songs.component';
import { BrowseCardComponent } from './components/browse-card/browse-card.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"login" , component:LoginComponent},
  {path:"song/:song_id" , component:SongsComponent},
  {path:"browse" , component:BrowseCardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
