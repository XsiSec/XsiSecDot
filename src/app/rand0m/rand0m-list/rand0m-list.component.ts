import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Rand0mService } from '../../rand0m/rand0m.service';
import { AuthService } from '../../core/auth.service';
import { Rand0m } from '../rand0m';
@Component({
  selector: 'app-rand0m-list',
  templateUrl: './rand0m-list.component.html',
  styleUrls: ['./rand0m-list.component.css']
})
export class Rand0mListComponent implements OnInit {
  rand0ms: Observable<Rand0m[]>;
  constructor(private rand0mService: Rand0mService, public auth: AuthService) {}

  ngOnInit() {
    this.rand0ms = this.rand0mService.getRand0mPosts();
    // console.log(this);
  }
  delete(id: string) {
    this.rand0mService.rand0mDeletePost(id);
  }



}
