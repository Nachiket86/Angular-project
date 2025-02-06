import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  http: HttpClient = inject(HttpClient);

  constructor() { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://angularhttp-2c07e-default-rtdb.firebaseio.com/users.json');
  }

  /**
   * Adds a new user to the list of users after signing in. This method
   * is used to update the user list on the server.
   * @param user The user to be added to the list of users.
   * @returns An Observable of the response from the server.
   */
  addUserAfterSignIn(user: User): Observable<any> {
    // Add the signin header to the request to indicate that this is a signin request.
    return this.http.post('https://angularhttp-2c07e-default-rtdb.firebaseio.com/users.json', user);
  }
}
