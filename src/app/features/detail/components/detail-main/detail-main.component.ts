import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-detail-main',
    templateUrl: './detail-main.component.html',
    styleUrls: ['./detail-main.component.css']
})
export class DetailMainComponent implements OnInit, OnDestroy {

    private destroy$: Subject<void> = new Subject<void>();

    constructor(
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.route.params
            .pipe(takeUntil(this.destroy$))
            .subscribe((p) => console.log('[DetailMainComponent] ID: ', p?.['id']));
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

}
