import { Injectable } from '@angular/core';
import { langue } from '../model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class LangueService {
  langs:langue[];
  lang_temp:langue[]=[];
  ajouter_temp(l:langue){
    l.id=this.lang_temp.length+1;
    this.lang_temp.push(l);
  }
  get_temp(id:number){
    return this.lang_temp.find(e=>e.id==id);
  }
  modefier_temp(c:langue){
    let comp=this.lang_temp.find(e=>e.id==c.id);
    comp!.labelle=c.labelle;
    comp!.niveau=c.niveau;
  }
  delete_temp(id:number){
    this.lang_temp.splice(this.lang_temp.findIndex(e=>e.id==id),1);
  }
  get_temps(){
    return this.lang_temp;
  }
  free_temps(){
    this.lang_temp=[];
  }
  //-----------------------------
  get_lang(id:number){
    const c=this.langs.filter(e=>e.cvid==id);
    return c;
  }
  ajouter_lang(c:langue[],id:number){
    for(let i=0 ; i<c.length ; i++){
      if (this.langs && this.langs.length > 0) {
        c[i].id = this.langs[this.langs.length - 1].id + 1;
      } else {
        c[i].id = 1;
      }
      c[i].cvid=id;
      this.langs.push(c[i]);
    }
  }
  delete_lang(id:number){
    this.langs.splice(this.langs.findIndex(e=>e.id==id),1)
  }

  delete_cvid(id:number){
    this.langs.forEach(e => {
      if (e.cvid == id) {
        this.delete_lang(e.id);
      }
    });
    
  }
  constructor() { 
    this.langs=[
      {"id":1, "labelle": "Langue1", "niveau": 3,"cvid":1 },
      { "id":2,"labelle": "Langue2", "niveau": 4,"cvid":1 },
      { "id":3,"labelle": "Langue3", "niveau": 3,"cvid":2 },
      { "id":4,"labelle": "Langue4", "niveau": 4,"cvid":2 },
      { "id":5,"labelle": "Langue5", "niveau": 3,"cvid":3 },
      { "id":6,"labelle": "Langue6", "niveau": 4 ,"cvid":3},
    ]
  }
} 
