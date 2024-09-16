import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EbooksComponent } from './ebooks/ebooks.component';
import { EbookItemComponent } from './ebook-item/ebook-item.component';
import { LoginComponent } from './login/login.component';
import { AjoutEbookComponent } from './ajout-ebook/ajout-ebook.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'products', component: EbooksComponent },
    { path: 'product/:id', component: EbookItemComponent },
    { path: 'login', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'add', component: AjoutEbookComponent },

];
