import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cv, info, specialite } from '../model/cv.model';
import { CvService } from '../service/cv.service';
import { SpecialiteService } from '../service/specialite.service';

@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.css']
})
export class UpdateCvComponent implements OnInit {
  visibility: { [key: string]: boolean } = {
    voirinfo: false,
    voirdesc: false,
    voirlangues: false,
    voirformation: false,
    voirexperience: false,
    voircompetences: false
  };
  toggleVisibility(section: string) {
    this.visibility[section] = !this.visibility[section];
  }
  info:info=new info;
  id =this.actRoute.snapshot.params['id'];

  idspe!:number;
  spes:specialite[]

  constructor(private speserce:SpecialiteService,private cvservice:CvService,private rout:Router,private actRoute:ActivatedRoute) {
    this.info=this.cvservice.getinfo(this.id);
    this.cvservice.edit_cv(this.id);
    this.spes=this.speserce.get();
    this.idspe=this.info.spe.id;
   }

  style_vesible={
    'visibility': 'visible',
    'height': 'auto',
  }
  style_hidden={
    'visibility':'hidden',
    'height': '0px',
    'opacity':'0'
    
  }
  ajouter(){
    this.cvservice.delete_cv(this.id);
    
    let x=this.speserce.getspe(this.idspe);
    if(x){
      this.info.spe=x;
    }
    let cv:cv={id:0,info:this.info};
    this.cvservice.ajouter_cv(cv);
    this.rout.navigate(['/acceuil']);
  }

  ngOnInit(): void {
    
  }
}
