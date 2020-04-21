import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuComponent} from './menu/menu.component';
import { GallaryComponent } from './gallary/gallary.component';
import { FindUsComponent } from './find-us/find-us.component';
import { MealDetailComponent } from './menu/meal-detail.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu/:id', component: MealDetailComponent},
  { path: 'gallary', component: GallaryComponent},
  { path: 'find-us', component: FindUsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  //{ path: '**', component: PageNotFoundComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
