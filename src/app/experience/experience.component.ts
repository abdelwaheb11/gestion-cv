import { Component,OnInit } from '@angular/core';
import { experience } from '../model/cv.model';
import { ExperienceService } from '../service/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  annee:number[]=[];
  mois:string[]=["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  date_d_e_m:string='0';
  date_d_e_a:number=0;
  date_f_e_m:string='0';
  date_f_e_a:number=0;
  exp:experience=new experience;
  exps:experience[];
  getdate(a:number,m:string){
    return m+'-'+a;
  }
  splitedate(d:string){
    return d.split('-')
  }
  ajoute_exp(){
    this.exp.date_d=this.getdate(this.date_d_e_a,this.date_d_e_m);
    this.exp.date_f=this.getdate(this.date_f_e_a,this.date_f_e_m);
    if(!this.exp.id){
      this.expservice.ajouter_temp(this.exp);
    }else{
      this.expservice.modefier_temp(this.exp);

    }
    this.exp=new experience;
    this.date_d_e_m='0';
    this.date_d_e_a=0;
    this.date_f_e_m='0';
    this.date_f_e_a=0;
    
  }
  edit_exp(id:number){
    const e=this.expservice.get_temp(id);
    if (e) {
      this.exp=e;
      const  d=this.splitedate(e.date_d);
      const  df=this.splitedate(e.date_f);
      this.date_d_e_a=+d[1];
      this.date_d_e_m=d[0];
      this.date_f_e_a=+df[1];
      this.date_f_e_m=df[0];
    }
  }
  supp_exp(id:number){
    this.expservice.delete_temp(id);
  }
  constructor(private expservice:ExperienceService){
    this.exps=this.expservice.get_temps();
  }
  ngOnInit(){
    for(let i=2023;i>2000;i--){
      this.annee.push(i);
    }
  }
}
