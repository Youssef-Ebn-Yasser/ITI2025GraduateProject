import { Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
    { path: '', component: FooterComponent },
  { path: 'product/:id', component: DetailsComponent },
  { path: '**', redirectTo: '' }
];
