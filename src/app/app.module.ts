import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire//storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PostsModule } from './posts/posts.module';
import { Rand0msModule } from './rand0m/rand0ms.module';
import { HomeComponent } from './shared/home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { GithubComponent } from './shared/github/github.component';
import { ContactComponent } from './shared/contact/contact.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'github', component: GithubComponent},
  { path: 'contact', component: ContactComponent},
  // { path: '**', component: PageNotFoundComponent},
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'blog/posts/', loadChildren: './posts/posts.module#PostsModule' },

];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FlexLayoutModule,
    CoreModule,
    SharedModule,
    PostsModule,
    Rand0msModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
