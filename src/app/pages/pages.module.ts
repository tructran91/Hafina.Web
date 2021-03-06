import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbDropdownModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FlatpickrModule } from 'angularx-flatpickr';

import { UIModule } from '../shared/ui/ui.module';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyComponent } from './company/company.component';

import { WidgetModule } from '../shared/widgets/widget.module';
import { UiModule } from './ui/ui.module';
import { AppsModule } from './apps/apps.module';
import { OtherModule } from './other/other.module';
import { IconsRoutingModule } from './ui/icons/icons-routing.module';
import { CompanyService } from './company/company.service';
import { EventService } from '../core/services/event.service';
import { ChartComponent } from './chart/chart.component';
import { CompoundInterestComponent } from './compound-interest/compound-interest.component';

@NgModule({
  declarations: [DashboardComponent, CompanyComponent, ChartComponent, CompoundInterestComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgbTabsetModule,
    NgApexchartsModule,
    FlatpickrModule.forRoot(),
    UIModule,
    WidgetModule,
    PagesRoutingModule,
    UiModule,
    AppsModule,
    OtherModule,
    IconsRoutingModule
  ],
  providers: [CompanyService, EventService]
})
export class PagesModule { }
