import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Rand0mService } from '../rand0m.service';
import { AuthService } from '../../core/auth.service';
import { Rand0m } from '../rand0m';
declare var editing: boolean;
@Component({
  selector: 'app-rand0m-detail',
  templateUrl: './rand0m-detail.component.html',
  styleUrls: ['./rand0m-detail.component.css']
})
export class Rand0mDetailComponent implements OnInit {

  rand0m: Rand0m;
  editing: false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rand0mService: Rand0mService,
    public auth: AuthService
  ) {}


  ngOnInit() {
    this.getPost();
    console.log(this);
  }
  getPost() {
    const id = this.route.snapshot.paramMap.get('id');
    return this.rand0mService.rand0mGetData(id).subscribe(data => this.rand0m = data );
  }
  updatePost() {
    const formData = {
      title: this.rand0m.title,
      content: this.rand0m.content
    };
    const id = this.route.snapshot.paramMap.get('id');
    this.rand0mService.rand0mUpdatePost(id, formData);
    this.editing = false;
  }

  delete() {
    const id = this.route.snapshot.paramMap.get('id');
    this.rand0mService.rand0mDeletePost(id);
    this.router.navigate(['/rand0m']);
  }

}
