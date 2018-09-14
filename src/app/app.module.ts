import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { AnimationComponent } from './components/animation/animation.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule }   from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { UserPathModule } from './models/user-path/user-path.module';
import { ContactComponent} from './components/contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';
import { BlogComponent } from './components/blog/blog.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    AnimationComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    FooterComponent,
    ResumeComponent,
    BlogComponent,
    PortfolioComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    UserPathModule
    
    

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}
