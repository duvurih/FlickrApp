import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickrImagesComponent } from './flickr-images.component';

describe('FlickrImagesComponent', () => {
  let component: FlickrImagesComponent;
  let fixture: ComponentFixture<FlickrImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlickrImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
