import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detail-additional',
    templateUrl: './detail-additional.component.html',
    styleUrls: ['./detail-additional.component.css']
})
export class DetailAdditionalComponent implements OnInit, OnDestroy {

    private destroy$: Subject<void> = new Subject<void>();

    constructor(
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.route.params
            .pipe(takeUntil(this.destroy$))
            .subscribe((p) => console.log('[DetailAdditionalComponent] ID: ', p?.['id']));
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
