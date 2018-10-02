import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '..//material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BackgroundComponent } from './background/background.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { GithubComponent } from './github/github.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, RouterModule],
  exports: [CommonModule, FormsModule, MaterialModule, RouterModule,
    NavbarComponent, FooterComponent, BackgroundComponent, HomeComponent, GithubComponent,
    PageNotFoundComponent, ContactComponent ], // export all components
  declarations: [NavbarComponent, FooterComponent, HomeComponent, BackgroundComponent, GithubComponent,
    PageNotFoundComponent, ContactComponent]
})
export class SharedModule { }
