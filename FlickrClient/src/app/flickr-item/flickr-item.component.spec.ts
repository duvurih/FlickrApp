import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickrItemComponent } from './flickr-item.component';

describe('FlickrItemComponent', () => {
  let component: FlickrItemComponent;
  let fixture: ComponentFixture<FlickrItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlickrItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
