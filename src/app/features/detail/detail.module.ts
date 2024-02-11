import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: DetailComponent,
        children: [
            {
                path: 'main',
                loadChildren: () => import('./components/detail-main/detail-main.module').then(m => m.DetailMainModule)
            },
            {
                path: 'additional',
                loadChildren: () => import('./components/detail-additional/detail-additional.module').then(m => m.DetailAdditionalModule)
            },
            {
                path: '',
                redirectTo: 'main',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    declarations: [
        DetailComponent
    ],
    exports: [
        DetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class DetailModule {
}
