import { Component,OnInit } from '@angular/core';
import { formation } from '../model/cv.model';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  annee:number[]=[];
  mois:string[]=["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  form:formation= new formation;
  forms:formation[];
  date_d_f_m:string='0';
  date_d_f_a:number=0;
  date_f_f_m:string='0';
  date_f_f_a:number=0;
  getdate(a:number,m:string){
    return m+'-'+a;
  }
  splitedate(d:string){
    return d.split('-')
  }
  ajoute_form(){
    this.form.date_d=this.getdate(this.date_d_f_a,this.date_d_f_m);
    this.form.date_f=this.getdate(this.date_f_f_a,this.date_f_f_m);
    if(!this.form.id){
      this.formservice.ajouter_temp(this.form);
    }else
    {
      this.formservice.modefier_temp(this.form);
    }
    this.form=new formation;
    this.date_d_f_m='0';
    this.date_d_f_a=0;
    this.date_f_f_m='0';
    this.date_f_f_a=0;
    
  }
  edit_form(id:number){
    const f=this.formservice.get_temp(id);
    if (f) {
      this.form=f;
      const  d=this.splitedate(f.date_d);
      const  df=this.splitedate(f.date_f);
      this.date_d_f_a=+d[1];
      this.date_d_f_m=d[0];
      this.date_f_f_a=+df[1];
      this.date_f_f_m=df[0];
    }
  }
  supp_form(id:number){
    this.formservice.delete_temp(id);
  }
  constructor(private formservice:FormationService){
    this.forms=this.formservice.get_temps();
  }

  ngOnInit(): void {
    for(let i=2023;i>2000;i--){
      this.annee.push(i);
    }
  }
}