import { Injectable } from '@angular/core';
import { cv, cvModel } from '../model/cv.model';
import { CompetenceService } from './competence.service';
import { ExperienceService } from './experience.service';
import { FormationService } from './formation.service';
import { LangueService } from './langue.service';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  CVs:cv[];
  cv!:cvModel;

  get_CVs() {
    return this.CVs;
  }
  delete_cv(id:number){
    this.CVs.splice(this.CVs.findIndex(e=>e.id==id),1);
    this.langservice.delete_cvid(id);
    this.compservice.delete_cvid(id);
    this.formservice.delete_cvid(id);
    this.langservice.delete_cvid(id);

  }
  get_cv(id: number): cvModel | undefined {
    const infocv = this.CVs.find(e => e.id == id);
    const cv: cvModel = {
      info: infocv!.info,
      competances: this.compservice.get_compe(id),
      experiences: this.expservice.get_exp(id),
      formations: this.formservice.get_form(id),
      langues: this.langservice.get_lang(id),
    };
    return cv;
  }
  modefier_cv(cv:cv,id:number){
    
  }
  ajouter_cv(cv:cv){

  if (this.CVs && this.CVs.length > 0) {
    cv.id = this.CVs[this.CVs.length - 1].id + 1;
  } else {
    cv.id = 1;
  }
 this.langservice.ajouter_lang(this.langservice.get_temps(),cv.id);
   this.langservice.free_temps();
   this.compservice.ajouter_cmpe(this.compservice.get_temps(),cv.id);
   this.compservice.free_temps();
   this.expservice.ajouter_exp(this.expservice.get_temps(),cv.id);
   this.expservice.free_temps();
   this.formservice.ajouter_from(this.formservice.get_temps(),cv.id);
   this.formservice.free_temps();
   this.CVs.push(cv);
  }
  getinfo(id:number){
    let cv= this.CVs.find(e=>e.id==id);
    return cv!.info;
  }
  edit_cv(id:number){
    let cv=this.get_cv(id);
    this.langservice.lang_temp=cv!.langues;
    this.compservice.comps_temp=cv!.competances;
    this.formservice.forms_temps=cv!.formations;
    this.expservice.exp_temps=cv!.experiences;
    
  }
  getnb(){return this.CVs.length}
  constructor(private langservice:LangueService,private formservice:FormationService,
    private expservice:ExperienceService,private compservice:CompetenceService,) {
   this.CVs=[
    {
      "id": 1,
      "info": {
        "nom": "Nom1",
        "pre": "Prenom1",
        "spe": {"id":2,"titre":"developper mobile"},
        "mail": "email1@example.com",
        "adr": "Adresse1",
        "tele": "123-456-7890",
        "desc": "Description1"
      },
    },
    {
      "id": 2,
      "info": {
        "nom": "Nom2",
        "pre": "Prenom2",
        "spe": {"id":5,"titre":"designer"},
        "mail": "email2@example.com",
        "adr": "Adresse2",
        "tele": "987-654-3210",
        "desc": "Description2"
      }},
      
    {
        "id": 3,
        "info": {
          "nom": "Nom3",
          "pre": "Prenom3",
          "spe": {"id":1,"titre":"developper web"},
          "mail": "email1@example.com",
          "adr": "Adresse3",
          "tele": "123-456-7890",
          "desc": "Description3"
        }
      },
]
  
}}
