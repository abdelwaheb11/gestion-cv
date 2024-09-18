import { Injectable } from '@angular/core';
import { formation } from '../model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  forms:formation[];
  forms_temps:formation[]=[];
  ajouter_temp(l:formation){
    l.id=this.forms_temps.length+1;
    this.forms_temps.push(l);
  }
  get_temp(id:number){
    return this.forms_temps.find(e=>e.id==id);
  }
  modefier_temp(f:formation){
    let from=this.forms_temps.find(e=>e.id==f.id);
    from=f;
  }
  delete_temp(id:number){
    this.forms_temps.splice(this.forms_temps.findIndex(e=>e.id==id),1);
  }
  get_temps(){
    return this.forms_temps;
  }
  free_temps(){
    this.forms_temps=[];
  }
  //-----------------------------------------------------
  get_form(id:number){
    return this.forms.filter(e=>e.cvid==id);
  }
  ajouter_from(c:formation[],id:number){
    for(let i=0 ; i<c.length ; i++){
      if (this.forms && this.forms.length > 0) {
        c[i].id = this.forms[this.forms.length - 1].id + 1;
      } else {
        c[i].id = 1;
      }
      c[i].cvid=id;
      this.forms.push(c[i]);
    }
  }
  delete_form(id:number){
    this.forms.splice(this.forms.findIndex(e=>e.id==id),1)
  }
  delete_cvid(id:number){
    this.forms.forEach(e => {
      if (e.cvid == id) {
        this.delete_form(e.id);
      }
    });
  }
  constructor() { 
    this.forms=[
      { "id":1,"titre": "Formation1", "eta": "Etablissement1", "date_d": "01/2010", "date_f": "12/2012","cvid":1 },
      { "id":2,"titre": "Formation2", "eta": "Etablissement2", "date_d": "01/2010", "date_f": "12/2012","cvid":2 },
      { "id":3,"titre": "Formation3", "eta": "Etablissement3", "date_d": "01/2010", "date_f": "12/2012","cvid":3 },

    ]
  }
}
