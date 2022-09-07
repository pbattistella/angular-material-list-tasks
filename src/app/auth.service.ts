import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as auth0 from 'auth0-js';

(window as any).global = window

@Injectable ()

export class AuthService {
    auth0 = new auth0.WebAuth({
        clientID: 'ZqMYSND4FA6QlfMeQUIpAisq1fBhAKy0',
        domain: 'dev-1m5aqr19.us.auth0.com',
        responseType: 'token',
        redirectUri: 'http://localhost:4200/',
        scope: 'openid'
    })

    accessToken: String = '';
    expiresAt: Number = 0;

    constructor(public router: Router){}

    public login(): void {
        this.auth0.authorize()
    }

    public handleAuthentication(): void {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken){
                window.location.hash = ''
                this.accessToken = authResult.accessToken
                this.expiresAt = 1000 * new Date().getTime()
                this.router.navigate(['/dashboard'])
            } else if (err) {
                this.router.navigate(['/'])
                console.log(err);
            }
        })
    }

    public logout(): void {
        this.accessToken = ''
        this.expiresAt = 0
        this.router.navigate(['/'])
    }

    public isAuthenticated(): boolean {
        return new Date().getTime() < this.expiresAt
    }
}