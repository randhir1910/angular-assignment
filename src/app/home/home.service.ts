
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get('https://www.googleapis.com/youtube/v3/search' +
      '?order=date&part=snippet&channelId=UCP4g5qGeUSY7OokXfim1QCQ&key=AIzaSyCmedFZ2QVVzQ1cElmU6kPM2PV5YEaQwhY')
      .pipe(catchError(err => {
        return this.handleError(err);
      }));
  }

  private handleError(err: HttpErrorResponse): Observable<any> {
    return Observable.throw('not able to get data.');
  }
}
