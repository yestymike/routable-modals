import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

    navs: { path: string, label: string }[] = [
        { path: './main', label: 'Main' },
        { path: './additional', label: 'Additional' }
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
