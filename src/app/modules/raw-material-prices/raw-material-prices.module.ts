import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RawMaterialPricesComponent } from './raw-material-prices/raw-material-prices.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: RawMaterialPricesComponent
}]

@NgModule({
  declarations: [
    RawMaterialPricesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    
  ]
})
export class RawMaterialPricesModule { }
