import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ListComponent,
        children: [
            {
                path: ':id',
                loadChildren: () => import('../detail/detail.module').then(m => m.DetailModule)
            }
        ]
    }
];

@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        CommonModule,
        MatSidenavModule,
        RouterModule.forChild(routes)
    ]
})
export class ListModule {
}
