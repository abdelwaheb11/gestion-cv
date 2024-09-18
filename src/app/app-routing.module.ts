import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { guard } from './guard.guard';

import { LoginComponent } from './login/login.component';
import { NotAcceseComponent } from './not-accese/not-accese.component';
import { RechercherProfileComponent } from './rechercher-profile/rechercher-profile.component';
import { UpdateCvComponent } from './update-cv/update-cv.component';
import { ViewCvComponent } from './view-cv/view-cv.component';


const routes: Routes = [
  {path:'',component:DashbordComponent},
  {path:'login',component:LoginComponent},
  {path:'acceuil',component:AcceuilComponent},
  {path:'add-cv',component:AddCvComponent, canActivate:[guard]},
  {path:'view-cv/:id',component:ViewCvComponent},
  {path:'update-cv/:id',component:UpdateCvComponent , canActivate:[guard]},
  {path:'search-profile',component:RechercherProfileComponent},
  {path:'not-accese',component:NotAcceseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
