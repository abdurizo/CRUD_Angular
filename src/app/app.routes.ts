import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component/admin.component';
import { ClientComponent } from './client.component/client.component';
import { App } from './app';
import { NotFoundComponent } from './components/not-found.comonents';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'client'
    },
    {
        path: 'admin',
        component: AdminComponent,
        title:'Admin'
    },
    {
        path: 'client',
        component: ClientComponent,
        title:'Client'
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
]
