import { Component, OnInit } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { map, catchError, debounceTime, publishReplay, shareReplay } from 'rxjs/operators';

import { FlickrImagesService } from './flickr-images.service';
import { Flickr } from './flickr.model';

@Component({
  selector: 'app-flickr-images',
  templateUrl: './flickr-images.component.html',
  styleUrls: ['./flickr-images.component.css']
})
export class FlickrImagesComponent implements OnInit {

  // public flickerItems: Observable<FlickerItem[]>;
  flickerItems$;
  searchTag: String = 'Flowers';
  dynamicCols: Number = 3;
  desktopCols: Number = 3;
  ipadCols: Number = 2;
  mobileCols: Number = 1;
  viewGrid = true;
  showDescription = false;

  constructor(private flickrService: FlickrImagesService) { }

  ngOnInit() {
    if (window.innerWidth <= 400) {
      this.dynamicCols = this.mobileCols;
    } else if (window.innerWidth <= 768) {
      this.dynamicCols = this.ipadCols;
    } else {
      this.dynamicCols = this.desktopCols;
    }
    this.retrieveImages(this.searchTag);
  }

  onResize(event) {
    if (event.target.innerWidth <= 400) {
      this.dynamicCols = this.mobileCols;
    } else if (event.target.innerWidth <= 768) {
      this.dynamicCols = this.ipadCols;
    } else {
      this.dynamicCols = this.desktopCols;
    }
  }

  retrieveImages(search: String) {
    this.flickerItems$ = this.flickrService.httpGetFlickrImages(search);
    this.flickerItems$.then((response) => { console.log(response); });
  }

}
