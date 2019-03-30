import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './constants';

@Injectable({
    providedIn: 'root'
})
export class StatusService {

    constructor(
        private readonly http: HttpClient,
    ) { }

    createOne(status) {
        return this.http.post(`${API_URL}/status/${status.date}/${status.account_id}`, status);
    }

    getOne(date, accountId) {
        return this.http.get(`${API_URL}/status/${date}/${accountId}`);
    }

    getAll(date) {
        return this.http.get<any[]>(`${API_URL}/status/${date}`);
    }
}
