import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, Subject, takeUntil } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit, OnDestroy {

    @ViewChild(MatDrawer) matDrawer!: MatDrawer;

    id$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
    count: number = 0;

    private destroy$: Subject<void> = new Subject<void>();

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.router.events
            .pipe(
                filter(x => x instanceof NavigationEnd),
                takeUntil(this.destroy$)
            )
            .subscribe(() => {
                console.log('-> NavigationEnd');

                const id = this.route.firstChild?.snapshot.params['id'];

                if (id) {
                    this.id$.next(id);
                }
            });
    }

    ngAfterViewInit() {
        this.id$
            .pipe(takeUntil(this.destroy$))
            .subscribe((id) => setTimeout(() => id ? this.matDrawer.open() : this.matDrawer.close()));
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    onOpenedChange(x: boolean) {
        if (!x) {
            this.router.navigate([this.route.snapshot.url]);
        }
    }

    onPlus() {
        this.count++;
    }
}
