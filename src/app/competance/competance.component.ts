import { Component,OnInit } from '@angular/core';
import { langue } from '../model/cv.model';
import { CompetenceService } from '../service/competence.service';

@Component({
  selector: 'app-competance',
  templateUrl: './competance.component.html',
  styleUrls: ['./competance.component.css']
})
export class CompetanceComponent implements OnInit{
  comp:langue= new langue;
  comps:langue[];
  ajouter_comp(){
    if(!this.comp.id){
      this.compservice.ajouter_temp(this.comp);
    }else{
      this.compservice.modefier_temp(this.comp);
    }
    this.comp=new langue;
  }
  edit_comp(id:number){
   let x=this.compservice.get_temp(id);
   if(x){
     this.comp=x;
   }
  }
  supp_comp(id:number){
    this.compservice.delete_temp(id);
  }
  constructor(private compservice:CompetenceService){
    this.comps=this.compservice.get_temps();
  }
  ngOnInit(){

  }
}
