import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { CompanyComponent } from './company/company.component';
import { CompoundInterestComponent } from './compound-interest/compound-interest.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'do-thi', component: ChartComponent },
  { path: 'lai-suat-kep', component: CompoundInterestComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
  { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
  { path: 'other', loadChildren: () => import('./other/other.module').then(m => m.OtherModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
