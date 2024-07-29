import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'shows/:id',component:ShowDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
