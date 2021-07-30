import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],

    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class HeaderComponent implements OnInit {
    location: any;
    layoutClass: string;

    constructor(
        private router: Router,
        location: Location,
    ) {
        this.router.events.subscribe((ev) => {
            if (ev instanceof NavigationEnd) {
                this.location = location.path();
                if(this.location == '/demo-3'){
                    this.layoutClass = 'navbar-style-two';
                } else {
                    this.layoutClass = '';
                }
            }
        });
     }

    ngOnInit() {
    }

}
