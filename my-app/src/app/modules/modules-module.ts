import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from './modules-routing-module';
import { AuthModule } from './auth/auth-module';
import { DashboardModule } from './dashboard/dashboard-module';
import { ProductModule } from './product/product-module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [AuthModule,DashboardModule,ProductModule,CommonModule, ModulesRoutingModule,FormsModule,ReactiveFormsModule],
})
export class ModulesModule {}
