import { Component, OnInit } from '@angular/core';
import { StatusService } from '../status.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-status-list',
    templateUrl: './status-list.component.html',
    styleUrls: ['./status-list.component.scss']
})
export class StatusListComponent implements OnInit {
    list = [];

    constructor(
        private readonly statusService: StatusService,
        private readonly route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const date = params.get('date');

            this.getAll(date);
            

            // if (date) {
            //     this.status.date = date;
            // } else {
            //     this.status.date = moment(new Date).format('YYYY-MM-DD');
            // }
        })
    }

    getAll(date) {
        this.statusService.getAll(date).subscribe(
            list => this.list = list,
            err => alert(err.message),
        )
    }

}
