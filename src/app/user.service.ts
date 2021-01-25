import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClientServiceService, User } from './http-client-service.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    user: User;

    constructor(private http: HttpClientServiceService) {
    }

    getLoggedInUser() {
        if (!this.user) {
            return this.http.getUser(sessionStorage.getItem('id')).pipe(
                tap((res) => {
                    this.user = res;
                })
            )
        } else {
            return new Observable<User>((o) => {
                o.next(this.user);
            });
        }
    }

    logout() {
        this.user = null;
    }
}