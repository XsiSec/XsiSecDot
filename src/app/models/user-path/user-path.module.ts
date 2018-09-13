import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
declare var url:any;
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class UserPathModule {


  constructor(router: Router) { 
    router.events.subscribe((url) => console.log(url));
    console.log(router.url);  // to print only path eg:"/login"
 
}
  ngOnInit() {

  }
}


 