import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: []
})
export class UserPathModule {
    router: any;
    url: any;

    constructor(router: Router) {
        router.events.subscribe((url) => console.log(url));
        // console.log(router.url[0]);  // to print only path eg:"/login"

    }
    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.router.subscribe((url) => console.log(url));

    }
}


