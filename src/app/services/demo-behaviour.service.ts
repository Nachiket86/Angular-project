import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoBehaviourService {

  behaviourSubject = new BehaviorSubject<string>('hi');
  
  constructor() { }

  emitBehaviourSubjectEvent(){
    this.behaviourSubject.next('Hello World');
  }
}
