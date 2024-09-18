import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { compte } from '../model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
users: compte[] = [
  {
    nom: 'abdelwaheb',
    mail: 'abdelwaheb@gmail.com',
    mot: '123',
    role: 'AGENT'
  },
  {
    nom: 'Administrateur',
    mail: 'admin@gmail.com',
    mot: 'azerty',
    role: 'ADMIN'
  }
];
usercourant : string=localStorage.getItem('user') || "";
rolecourant : string =localStorage.getItem('role') || "";
isConnected: boolean = localStorage.getItem('verif')=="1";

  constructor(private router: Router) {}
   connect(user : compte) : boolean {
    this.users.forEach((unUser) => {
    if( unUser.mail==user.mail && unUser.mot==user.mot ) { //vérifier email et mot de passe
    this.isConnected = true;
    this.usercourant = unUser.nom;
    this.rolecourant =unUser.role;
    console.log("Connexion de ",this.usercourant , " - role :", this.rolecourant)
    localStorage.setItem('user',this.usercourant);
    localStorage.setItem('role',this.rolecourant);
    localStorage.setItem('verif',"1");
    }
    });
    return this.isConnected;
    }
    disconnect() {
    this.isConnected = false;
    this.usercourant  ="";
    this.rolecourant = "";
    localStorage.removeItem('user'),
    localStorage.removeItem('verif');
    localStorage.removeItem('role')// supprimer isConnected de localStorage
    this.router.navigate(['/login']); // naviguer vers la page de connexion
    }
    testerAdmin(): boolean {
     return localStorage.getItem('role')=='ADMIN';
   }

   getconn(){
     return localStorage.getItem('verif')=='1'
    }
   
   getnb(): number {
     return this.users.length;
   }
   getusercourant(){
    return this.usercourant
   }
   getrolecourant(){
    return this.rolecourant
   }
   }