import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cv, cvModel } from '../model/cv.model';
import { CvService } from '../service/cv.service';

@Component({
  selector: 'app-view-cv',
  templateUrl: './view-cv.component.html',
  styleUrls: ['./view-cv.component.css']
})
export class ViewCvComponent implements OnInit {
  cv:cvModel = new cvModel();
  constructor(
    private cvservice:CvService , private actRoute:ActivatedRoute,private rout:Router,
    ) { }
  ngOnInit(): void {
    const id = +this.actRoute.snapshot.params['id'];
    const cv = this.cvservice.get_cv(id);
    if (cv) {
      this.cv = cv; 
    } else {
      this.rout.navigate(['/']);
    }
  }
}
