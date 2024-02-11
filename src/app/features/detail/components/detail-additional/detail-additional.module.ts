import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailAdditionalComponent } from './detail-additional.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: DetailAdditionalComponent
    }
];

@NgModule({
    declarations: [
        DetailAdditionalComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class DetailAdditionalModule {
}
