import { Component, OnInit } from '@angular/core';
import { StatusService } from '../status.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import * as moment  from 'moment';

@Component({
    selector: 'app-status',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
    status: any = {
        account_id: '507f1f77bcf86cd799439011',
    };
    
    constructor(
        private readonly statusService: StatusService,
        private readonly route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const date = params.get('date');
            const accountId = params.get('account_id');

            this.status = {
                date: date,
                account_id: accountId,
            }

            this.getOne(date, accountId);
            

            // if (date) {
            //     this.status.date = date;
            // } else {
            //     this.status.date = moment(new Date).format('YYYY-MM-DD');
            // }
        })
    }

    createOne() {
        this.statusService.createOne(this.status).subscribe(
            (status: any) => this.status = status,
            err => alert(err.message),
        )
    }

    getOne(date, accountId) {
        this.statusService.getOne(date, accountId).subscribe(
            (status: any) => this.status = status,
            err => alert(err.message),
        )
    }

}
