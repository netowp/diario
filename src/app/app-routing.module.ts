import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusComponent } from './status/status.component';
import { StatusListComponent } from './status-list/status-list.component';

const routes: Routes = [
    {
        path: 'status/:date',
        component: StatusListComponent,
    },
    {
        path: 'status/:date/:account_id',
        component: StatusComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
