import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'destinations', component: DestinationsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
