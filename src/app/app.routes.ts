import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component/admin.component';
import { ClientComponent } from './client.component/client.component';
import { App } from './app';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'client'
    },
    {
        path: 'andmin',
        component: AdminComponent,
    },
    {
        path: 'client',
        component: ClientComponent,
    },
]
