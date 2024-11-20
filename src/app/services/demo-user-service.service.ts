import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DemoUserServiceService {

  userList: User[] = [
    { id: 1, name: 'John', email: 'a@b.com',password: '123' },
    { id: 2, name: 'Mary', email: 'b@b.com',password: '456' },
    { id: 3, name: 'Peter', email: 'c@b.com',password: '789' },
    { id: 4, name: 'James', email: 'd@b.com', password: 'abc' },
    { id: 5, name: 'Harry', email: 'e@b.com', password: 'def' },
    { id: 6, name: 'Steve', email: 'f@b.com', password: 'ghi' },
    { id: 7, name: 'Patrick', email: 'g@b.com', password: 'jkl' },
    { id: 8, name: 'Virat', email: 'h@b.com', password: 'mno' },
    { id: 9, name: 'Rohit', email: 'i@b.com', password: 'pqr' },
  ]

  constructor() { }
}
