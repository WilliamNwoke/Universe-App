import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CreatePostPageComponent } from './create-post-page/create-post-page.component'; 
import { ViewPostPageComponent } from './view-post-page/view-post-page.component'; 

const routes: Routes = [
  {path: 'createpost', component: CreatePostPageComponent},
  {path: 'viewpost', component: ViewPostPageComponent},  
  {path: 'home', component: HomePageComponent}, 
  {path: '', component: HomePageComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }