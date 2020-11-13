import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  constructor() { }

  public stringVar = new Subject<string>();

  setValue(val:string){
    this.stringVar.next(val);
  }
  getObservable(): Subject<string>{
    return this.stringVar;
  }
}
