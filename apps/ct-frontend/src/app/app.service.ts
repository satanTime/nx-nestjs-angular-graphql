import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map, share} from 'rxjs/operators';

import {URL_API} from '../core/URL_API';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private readonly httpClient: HttpClient, @Inject(URL_API) private readonly urlApi: string) {}

  readonly greeting: Observable<string> = this.httpClient.get<{message: string}>(`${this.urlApi}`).pipe(
    map(body => body.message),
    share(),
  );
}
