import { Component } from '@angular/core';
import { AuthService } from '../service/authi.service';
import { CvService } from '../service/cv.service';
import { SpecialiteService } from '../service/specialite.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {
  nbuser:number;
  nbcv:number;
  nbspe:number;
  constructor(private cvserve:CvService,private speserve:SpecialiteService,private authserver:AuthService){
    this.nbcv=this.cvserve.getnb();
    this.nbspe=this.speserve.getnb();
    this.nbuser=this.authserver.getnb();
  }
}
