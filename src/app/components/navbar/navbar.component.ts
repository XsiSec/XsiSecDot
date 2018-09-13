import { Component, OnInit } from '@angular/core';
import { delay } from 'q';
import {UserPathModule} from '../../models/user-path/user-path.module';

declare var $:any;
declare var baffle:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	public mypath="";


	constructor() {
    this.mypath= window.location.href;
	
	

	} // make variable private so that it would be accessible through out the component

	ngOnInit() {

	


	function FadeInTerm()
    {
      $(document).delay(0).queue(function()
      {
        $('.mainMenu').fadeIn(0);
      })
	}
	


	//UNCOMENT the real function below:
	// 	function FadeInTerm()
    // {
    //   $(document).delay(10000).queue(function()
    //   {
    //     $('.mainMenu').fadeIn(3000);
    //   })
    // }

		function myBaffle(){
		var b = baffle('.baffle', {
			characters: [
				'\u2588',
				'\u2593',
				'\u2592',
				'\u2591',
				'\u2588',
				'\u2593',
				'\u2592',
				'\u2591',
				'\u2588',
				'\u2593',
				'\u2592',
				'\u2591',
				'\u003c',
				'\u003e',
				'\u002f'],
			}
		).start()
			b.char
			setTimeout(() => {
			b.reveal(3000)
			}, 1000)
		}
		
			$(document).ready(function()
		{
		slide("#sliding-navigation", 25, 15, 150, .8);
		});
	
		function slide(navigation_id, pad_out, pad_in, time, multiplier) {
		// creates the target paths
		var list_elements = navigation_id + " li.sliding-element";
		var link_elements = list_elements + " a";
	
		// initiates the timer used for the sliding animation
		var timer = 0;
	
		// creates the slide animation for all list elements 
		$(list_elements).each(function (i) {
			// margin left = - ([width of element] + [total vertical padding of element])
			$(this).css("margin-left", "-180px");
			// updates timer
			timer = (timer * multiplier + time);
			$(this).animate({
			marginLeft: "0"
			}, timer);
			$(this).animate({
			marginLeft: "15px"
			}, timer);
			$(this).animate({
			marginLeft: "0"
			}, timer);
		});
	
		// creates the hover-slide effect for all link elements 		
		$(link_elements).each(function (i) {
			$(this).hover(
			function () {
				$(this).animate({
				paddingLeft: pad_out
				}, 150);
			},
			function () {
				$(this).animate({
				paddingLeft: pad_in
				}, 150);
			});
		});
		}
		//fade in the menu
		FadeInTerm();
		// a timeout before baffle effect starts
		setTimeout(myBaffle,10000);
		}
	}
	