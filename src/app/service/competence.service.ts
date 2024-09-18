import { Injectable } from '@angular/core';
import { langue } from '../model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  comps:langue[];
  comps_temp:langue[]=[];
  ajouter_temp(l:langue){
    l.id=this.comps_temp.length+1;
    this.comps_temp.push(l);
  }
  get_temp(id:number){
    return this.comps_temp.find(e=>e.id==id);
  }
  modefier_temp(c:langue){
    let comp=this.comps_temp.find(e=>e.id==c.id);
    comp!.labelle=c.labelle;
    comp!.niveau=c.niveau;
  }
  delete_temp(id:number){
    this.comps_temp.splice(this.comps_temp.findIndex(e=>e.id==id),1);
  }
  get_temps(){
    return this.comps_temp;
  }
  free_temps(){
    this.comps_temp=[];
  }

  //traitement sur tableau principale des competances 
  get_compe(id:number){
    const c=this.comps.filter(e=>e.cvid == id);
    return c;
  }
  ajouter_cmpe(c:langue[],id:number){
    for(let i=0 ; i<c.length ; i++){
      if (this.comps && this.comps.length > 0) {//id
        c[i].id = this.comps[this.comps.length - 1].id + 1;
      } else {
        c[i].id = 1;
      }
      c[i].cvid=id;
      this.comps.push(c[i]);
    }
    
  }
  delete_compe(id:number){
    this.comps.splice(this.comps.findIndex(e=>e.id==id),1)
  }
  delete_cvid(id:number){
    this.comps.forEach(e => {
      if (e.cvid == id) {
        this.delete_compe(e.id);
      }
    });
  }
  constructor() {
    this.comps=[
      { "id": 1,"labelle": "Compétence1", "niveau": 5 ,"cvid":1 },
      { "id": 2,"labelle": "Compétence2", "niveau": 4,"cvid":1 },
      { "id": 3,"labelle": "Compétence3", "niveau": 4,"cvid":2 },
      { "id": 4,"labelle": "Compétence4", "niveau": 3,"cvid":2 },
      { "id": 5,"labelle": "Compétence5", "niveau": 5,"cvid":3 },
      { "id": 6,"labelle": "Compétence6", "niveau": 4,"cvid":3 }
    ]
   }
}
