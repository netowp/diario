import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusService } from '../status.service';
import { StatusCardComponent } from './status-card/status-card.component';

@NgModule({
    declarations: [
        StatusCardComponent,
    ],
    imports: [
        CommonModule,
    ],
    providers: [
        StatusService,
    ],
    exports: [
        StatusCardComponent,
    ]
})
export class StatusModule { }
