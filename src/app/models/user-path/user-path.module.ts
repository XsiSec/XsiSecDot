import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

declare var url:any;
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class UserPathModule {
 router:any;

  constructor(router: Router) { 
    router.events.subscribe((url) => console.log(url));
    //console.log(router.url[0]);  // to print only path eg:"/login"
 
}
  ngOnInit() {
    this.router.subscribe((url) => console.log(url));

  }
}


 