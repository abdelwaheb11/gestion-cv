import { Component,OnInit } from '@angular/core';
import { langue } from '../model/cv.model';
import { LangueService } from '../service/langue.service';

@Component({
  selector: 'app-langue',
  templateUrl: './langue.component.html',
  styleUrls: ['./langue.component.css']
})
export class LangueComponent implements OnInit {
  lang:langue= new langue;
  langs:langue[];
  ajouter_lange(){
    if(!this.lang.id){
      this.langservice.ajouter_temp(this.lang);
    }else{
     this.langservice.modefier_temp(this.lang);
    }
    this.lang=new langue;
  }
  edit_lang(id:number){
    const x=this.langservice.get_temp(id);
    if (x) {
      this.lang=x;
    }
  }
  supp_lang(id:number){
    this.langservice.delete_temp(id);
  }

  constructor(private langservice: LangueService){
    this.langs=this.langservice.get_temps();
  }
  ngOnInit():void {}
}
