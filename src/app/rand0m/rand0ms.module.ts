import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Rand0mDashboardComponent } from './rand0m-dashboard/rand0m-dashboard.component';
import { Rand0mDetailComponent } from './rand0m-detail/rand0m-detail.component';
import { Rand0mListComponent } from './rand0m-list/rand0m-list.component';
import { Rand0mService } from '../rand0m/rand0m.service';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [
  { path: 'rand0m', component: Rand0mListComponent },
  { path: 'rand0m/:id', component: Rand0mDetailComponent },
  { path: 'rand0mdb', component: Rand0mDashboardComponent },



];
@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [Rand0mDashboardComponent, Rand0mDetailComponent, Rand0mListComponent],
  providers: [Rand0mService]
})
export class Rand0msModule { }
