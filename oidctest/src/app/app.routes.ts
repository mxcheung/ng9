import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

export const routing = RouterModule.forRoot(appRoutes);