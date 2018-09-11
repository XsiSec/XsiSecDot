import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var Typed:any;


@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() 
  {
  

    
      $(document).ready(function () {
        $('.contentbody').fadeIn(2000);


        var terminalTyped = new Typed("#terminalType", {
          strings: ['^1000Uncompressing Linux... done, booting the kernel.<br>`[    0.000000] Booting Linux on physical CPU 0x0<br>[    0.000000] Initializing cgroup subsys cpu<br>[    0.000000] Linux version 9.18.10+ (compiled by gcc version 4.8.3)<br>`^500 [    0.001931] Mount-cache hash table entries: 1024 (order: 0, 4096 bytes)^1000 <br>`[    0.001997] Mountpoint-cache hash table entries: 1024 (order: 0, 4096 bytes)<br>[    0.003000] Initializing cgroup subsys memory<br>[    0.003093] Initializing cgroup subsys devices<br>[    0.003151] Initializing cgroup subsys freezer<br>[    0.003204] Initializing cgroup subsys net_cls<br>[    0.003254] Initializing cgroup subsys blkio<br>`^500 [ 2.509409] devtmpfs: mounted <br>Mounting Huge Pages File System...<br>`[ OK ] Listening on LVM2 metadata daemon socket.<br>Starting LVM2 metadata daemon...<br>[ OK ] Listening on Device-mapper event daemon FIFOs.<br>Starting Device-mapper event daemon...<br>`Expecting device dev-disk-by\x2duuid-b8736234\x2d9b90\x2d461b\x2da9db\x2ddd7146428838.device...<br>`[ OK ] Started Collect Read-Ahead Data.^1000<br>[ OK ] Started Rule generator for /dev/root symlink.<br>[ OK ] Started LVM2 metadata daemon.<br>[ OK ] Started Device-mapper event daemon.<br>[  OK  ] Started Authorization Manager.<br><br>`^1000Welcome User...'],
          typeSpeed: 0, // typing speed
          backDelay: 3000, // pause before backspacing
          loop: false, // loop on or off (true or false)
          loopCount: false, // number of loops, false = infinite
          callbacks: function () {
            $(this).stop();
          } // call function after typing is done
        });
      })
      $(document).ready(function () {

        $('.contentbody').delay(7000).fadeOut(2000)
        $(this).remove();
      })

          

    }
  }
  

