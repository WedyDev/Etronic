import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/Landingpage/home/home.component';
import { AboutusComponent } from './views/Landingpage/aboutus/aboutus.component';
import { PlayComponent } from './views/Landingpage/play/play.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'Home', pathMatch: 'full'
  },
  {
    path: 'Home',component: HomeComponent
   },
   {
    path:'AboutUs',component:AboutusComponent
   },
   {
    path:'Play',component:PlayComponent

   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
