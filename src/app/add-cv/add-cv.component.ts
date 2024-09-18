import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { experience, formation, info, langue,cv, cvModel, specialite } from '../model/cv.model';
import { CvService } from '../service/cv.service';
import { SpecialiteService } from '../service/specialite.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {
 
  visibility: { [key: string]: boolean } = {
    voirinfo: false,
    voirdesc: false,
    voirlangues: false,
    voirformation: false,
    voirexperience: false,
    voircompetences: false
  };
  info:info=new info;

  spes:specialite[];

  idspe:number=0;

  constructor(private cvservice:CvService,private rout:Router,private speserve:SpecialiteService) { 
    this.spes=this.speserve.get();
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
    let x=this.speserve.getspe(this.idspe)
    if(x){
      this.info.spe=x;
    }
    let cv:cv={id:0,info:this.info};
    this.cvservice.ajouter_cv(cv);
    console.log(cv.info);
    this.rout.navigate(['/acceuil']);
   }


  toggleVisibility(section: string) {
    this.visibility[section] = !this.visibility[section];
  }

  ngOnInit(){

  }
}
