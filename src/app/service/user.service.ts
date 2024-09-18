import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from 
'@angular/common/http';
import { Observable } from 'rxjs';
import { compte } from '../model/cv.model';
const httpOptions = {
 headers: new HttpHeaders({
 'Content-Type': 'application/json',
 })
}
@Injectable({
 providedIn: 'root'
})
export class UsersService {
 private usersUrl: string = '../../assets/users.json';
 constructor(private http: HttpClient) { }
 getUsers(): Observable<compte[]> {
    let x= this.http.get<compte[]>(this.usersUrl);
    console.log(x);
    return x;
 }
 isConnected:boolean=localStorage.getItem('verif')=="1";

 getconn(){
   return localStorage.getItem('verif')=='1'
  }

 testerAdmin(){
    return localStorage.getItem('role')=='ADMIN';
 }
}