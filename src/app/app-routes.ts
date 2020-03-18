import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'index' },
            { path: 'index', loadChildren: () => import('@routes/index/index.module').then(m => m.IndexModule) }
        ]
    }

];
