import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { Landingpage } from './landingpage/landingpage';
import { CatsDataGridComponent } from 'cats-data-grid';

@NgModule({
  declarations: [],
  imports: [CommonModule, DashboardRoutingModule, Landingpage, CatsDataGridComponent],
})
export class DashboardModule {}
