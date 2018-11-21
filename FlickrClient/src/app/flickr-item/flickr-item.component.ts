import { Component, OnInit, Input } from '@angular/core';

import { Item } from './../flickr-images/flickr.model';

@Component({
  selector: 'app-flickr-item',
  templateUrl: './flickr-item.component.html',
  styleUrls: ['./flickr-item.component.css']
})
export class FlickrItemComponent implements OnInit {
  @Input() item: Item;
  @Input() showDescription: boolean;

  constructor() { }

  ngOnInit() {
  }

}
