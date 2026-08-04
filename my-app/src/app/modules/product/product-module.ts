import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing-module';
import { Homecomponent } from './homecomponent/homecomponent';

@NgModule({
  declarations: [],
  imports: [CommonModule, ProductRoutingModule, Homecomponent],
})
export class ProductModule {}
