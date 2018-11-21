import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlickrImagesComponent } from './flickr-images/flickr-images.component';

const routes: Routes = [
  { path: '', component: FlickrImagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
