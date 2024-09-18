import { Injectable } from '@angular/core';
import { experience } from '../model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  exps:experience[];
  exp_temps:experience[]=[];
  ajouter_temp(l:experience){
    l.id=this.exp_temps.length+1;
    this.exp_temps.push(l);
  }
  get_temp(id:number){
    return this.exp_temps.find(e=>e.id==id);
  }
  modefier_temp(f:experience){
    let from=this.exp_temps.find(e=>e.id==f.id);
    from=f;
  }
  delete_temp(id:number){
    this.exp_temps.splice(this.exp_temps.findIndex(e=>e.id==id),1);
  }
  get_temps(){
    return this.exp_temps;
  }
  free_temps(){
    this.exp_temps=[];
  }

  //-------------------------------------
  get_exp(id:number){
    return this.exps.filter(e=>e.cvid==id);
  }
  ajouter_exp(c:experience[],id:number){
    for(let i=0 ; i<c.length ; i++){
      if (this.exps && this.exps.length > 0) {
        c[i].id = this.exps[this.exps.length - 1].id + 1;
      } else {
        c[i].id = 1;
      }
      c[i].cvid=id;
      this.exps.push(c[i]);
    }
  }
  delete_exp(id:number){
    this.exps.splice(this.exps.findIndex(e=>e.id==id),1)
  }
  delete_cvid(id:number){
    this.exps.forEach(e => {
      if (e.cvid == id) {
        this.delete_exp(e.id);
      }
    });
  }
  constructor() {
    this.exps=[
      {"id":1, "post": "Poste1", "eta": "Entreprise1", "date_d": "01/2013", "date_f": "12/2015", "desc": "Description1","cvid":1 },
      {"id":2, "post": "Poste2", "eta": "Entreprise2", "date_d": "01/2013", "date_f": "12/2015", "desc": "Description2","cvid":2 },
      {"id":3, "post": "Poste3", "eta": "Entreprise3", "date_d": "01/2013", "date_f": "12/2015", "desc": "Description3","cvid":3 },

    ]
   }
}
