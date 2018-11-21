import { Injectable } from '@angular/core';
import { Observable, of, pipe, BehaviorSubject } from 'rxjs';
import { map, catchError, debounceTime, publishReplay } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Flickr } from './flickr.model';

@Injectable({
  providedIn: 'root'
})
export class FlickrImagesService {

  constructor(private http: HttpClient) { }

  async httpGetFlickrImages(search: String) {
    return await this.httpGetAsync('http://localhost:3000/flickrs', null, false, true);
  }

  async httpGetAsync(url: string, parameters?: Object[], secure: boolean = true, fullUrl: boolean = false) {
    let promise: any;
    const headers = new HttpHeaders();
    this.addContentTypeHeader(headers, 1);
    this.addAcceptHeader(headers, 2);
    this.addAccessControlHeader(headers);
    promise = await this.http.get(url, { headers: headers }).toPromise();
    return promise;
  }

  addContentTypeHeader(headers: any, type: number = 0) {
    headers.append('Content-Type', (type === 1 ? 'application/x-www-form-urlencoded' : 'application/json'));
    return headers;
  }

  addAcceptHeader(headers, type: number = 0) {
    headers.append('Accept', (type === 2 ? '*/*' : (type === 1 ? 'application/xml' : 'application/json')));
  }

  composeUrl(url: string): string {
    url = url.indexOf('http') === 0 ? url : `./${url}`;
    return url.replace(/(http?:\/\/)|(\/)+/g, '$1$2');
  }

  addAccessControlHeader(headers: any): any {
    headers.append('Access-Control-Allow-Origin', this.composeUrl(`${location.origin}/${location.pathname}`));
    return headers;
  }

}
