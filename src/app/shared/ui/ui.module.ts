import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// tslint:disable-next-line: max-line-length
import { NgbCollapseModule, NgbDatepickerModule, NgbTimepickerModule, NgbDropdownModule, NgbTooltipModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';

import { SlimscrollDirective } from './slimscroll.directive';

import { PreloaderComponent } from './preloader/preloader.component';
import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { FeatherIconDirective } from './feather-icon.directive';
import { NodataComponent } from './nodata/nodata.component';

@NgModule({
  declarations: [SlimscrollDirective, PreloaderComponent, PagetitleComponent, FeatherIconDirective, NodataComponent],
  imports: [
    CommonModule,
    FormsModule,
    ClickOutsideModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbTooltipModule,
    NgbDropdownModule,
    NgbAlertModule
  ],
  exports: [SlimscrollDirective, FeatherIconDirective, PreloaderComponent, PagetitleComponent, NodataComponent]
})
export class UIModule { }
