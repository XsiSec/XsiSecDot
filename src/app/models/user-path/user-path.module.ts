import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class UserPathModule {

   
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => console.log(params) );
}

  ngOnInit() {
   
  }

  

 }


 