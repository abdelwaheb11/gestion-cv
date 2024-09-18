import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ViewCvComponent } from './view-cv/view-cv.component';
import { FormsModule } from '@angular/forms';
import { LangueComponent } from './langue/langue.component';
import { FormationComponent } from './formation/formation.component';
import { ExperienceComponent } from './experience/experience.component';
import { CompetanceComponent } from './competance/competance.component';
import { UpdateCvComponent } from './update-cv/update-cv.component';
import { RechercherProfileComponent } from './rechercher-profile/rechercher-profile.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { NotAcceseComponent } from './not-accese/not-accese.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddCvComponent,
    AcceuilComponent,
    ViewCvComponent,
    LangueComponent,
    FormationComponent,
    ExperienceComponent,
    CompetanceComponent,
    UpdateCvComponent,
    RechercherProfileComponent,
    DashbordComponent,
    LoginComponent,
    NotAcceseComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
