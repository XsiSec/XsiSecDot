import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { AnimationComponent } from './components/animation/animation.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule }   from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';






const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    AnimationComponent,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponent

    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
    
    

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}
