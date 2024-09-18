import { Injectable } from '@angular/core';
import { specialite } from '../model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {
  specialite:specialite[];

  get(){
    return this.specialite;
  }
  getspe(id:number){
    let s= this.specialite.find(e=> e.id==id);
    return s ;

  }


  getnb(){return this.specialite.length}
  constructor() { 
    this.specialite=[
      {"id":1,"titre":"developper web"},
      {"id":2,"titre":"developper mobile"},
      {"id":3,"titre":"developper desktop"},
      {"id":4,"titre":"digital marketing"},
      {"id":5,"titre":"designer"},
    ]
  }
}
