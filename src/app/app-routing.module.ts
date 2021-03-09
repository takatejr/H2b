import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './components/photos/photos.component';
import { HomeComponent } from './components/home/home.component';
import { PhotosTitleResolver } from './resolvers/photos-title/photos-title.resolver';

const routes: Routes = [{
  component: PhotosComponent,
  path: "photos/:title",
  resolve: {
    data: PhotosTitleResolver
  }
},
{
  component: HomeComponent,
  path: "",
  pathMatch: 'full'
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
