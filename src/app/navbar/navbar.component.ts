import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/authi.service';
import { UsersService } from '../service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public authserve:AuthService ,public http:UsersService ){
  }
  deconncter(){
    this.authserve.disconnect()
  }
  isConnected:boolean=false;
  role!:string;
  user!:string;

  
  ngOnInit(): void {
   this.user=this.authserve.getusercourant()
   this.role=this.authserve.getrolecourant()
  }
}
