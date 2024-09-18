import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { compte } from '../model/cv.model';
import { AuthService } from '../service/authi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authServ : AuthService, private router: Router) { }
  user:compte=new compte;
  erreur:boolean=false;
  connected(){
    let permission: boolean = this.authServ.connect(this.user) // on se connecte avec user
    console.log("Tentative de connexion :" +this.user.mail);
    if (permission)
    this.router.navigate([""]); // on navigue vers la liste des étudiants
    else
    this.erreur = true; // on a une erreur
    }
    reset() {
      this.erreur = false; // on n’a plus d’erreur
    } 

    ngOnInit(): void {
      if(localStorage.getItem('verif')=='1'){
        this.router.navigate(['/']);
      }
    }
}
