import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MarvelComponent } from './marvel/marvel.component';
import { DcComponent } from './dc/dc.component';
import { HomeComponent } from './home/home.component';

//import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  //{ path: '', component: AppComponent },
  { path: 'dc', component: DcComponent },
  { path: 'marvel', component: MarvelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
