import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoSubjectService {

  subject = new Subject<string>();

  constructor() { }

  emitEvent(value: string){
    this.subject.next(value);
  }
}
