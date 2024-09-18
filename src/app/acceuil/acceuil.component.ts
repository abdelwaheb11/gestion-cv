import { Component,OnInit } from '@angular/core';
import { CvService } from '../service/cv.service';
import { cv, specialite } from '../model/cv.model';
import { SpecialiteService } from '../service/specialite.service';
import { AuthService } from '../service/authi.service';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  CVs!:cv[];
  type:number=0;
  specialite!:specialite[];
  search=false;
  nom!:string;
  spe:string="0";
  rechercher_nom(){
    this.get_tous()
    this.CVs=this.CVs.filter(e => e.info.nom.toLowerCase().includes(this.nom.toLowerCase()) || 
      e.info.pre.toLowerCase().includes(this.nom.toLowerCase()) ||
      e.info.mail.toLowerCase().includes(this.nom.toLowerCase())
  );
  this.search=true
  }
  rechercher_spe(){
    if(this.spe !== '0'){
      this.get_tous()
      this.CVs=this.CVs.filter(e => e.info.spe.id== +this.spe);
      this.search=true;
    }
  }
  get_tous(){
    this.CVs=this.cvservice.get_CVs();
  }
  voir_tous(){
    this.get_tous()
    this.search=false;
    this.nom="";
    this.spe="0";
  }
  suppremer(id:number){
    let e=this.cvservice.get_cv(id);
    let rep = confirm("Etes-vous sûr de vouloir supprimer cet cv ?"+e!.info.nom+" "+e!.info.pre);
    if(rep){this.cvservice.delete_cv(id);}
    
  }
  
  constructor(private cvservice:CvService, private speserver:SpecialiteService,public authserve:AuthService) {
    
   }

   
  ngOnInit(): void {
    this.get_tous();
    this.specialite=this.speserver.get();
  }
}
