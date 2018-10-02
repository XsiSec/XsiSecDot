import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;
@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadMyParticles();
  }
  loadMyParticles() {
    particlesJS.load('particles-js', '../../../assets/json/particles.json', null);
  }
}
