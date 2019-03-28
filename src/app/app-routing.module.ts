import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
    {
        path: 'status',
        component: StatusComponent,
    },
    {
        path: 'status/:date',
        component: StatusComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
