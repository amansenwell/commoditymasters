import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './modules/login/forget-password/forget-password.component';
import { PurchaseInterlligenceComponent } from './modules/services/purchase-interlligence/purchase-interlligence.component';
import { PurchasePriceVarianceComponent } from './modules/services/purchase-price-variance/purchase-price-variance.component';
import { SourcingServicesComponent } from './modules/services/sourcing-services/sourcing-services.component';

const routes: Routes = [{

  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'home',
  loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
},
{
  path: 'rawmaterialprices',
  loadChildren: () => import('./modules/raw-material-prices/raw-material-prices.module').then(m => m.RawMaterialPricesModule)
},
{
  path: 'targetprices',
  loadChildren: () => import('./modules/target-price-analysis/target-price-analysis.module').then(m => m.TargetPriceAnalysisModule)
},
{
  path: 'spendanalysis',
  loadChildren: () => import('./modules/spend-analysis/spend-analysis.module').then(m => m.SpendAnalysisModule)
},

{
  path: 'subscribe',
  loadChildren: () => import('./modules/subscribe/subscribe.module').then(m => m.SubscribeModule)
},
{
  path: 'login',
  loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
},

{ path: 'forget-password', component: ForgetPasswordComponent },
{ path: 'purchase-intelligence', component: PurchaseInterlligenceComponent },
{ path: 'sourcing-services', component: SourcingServicesComponent },
{ path: 'purchase-price-variance', component: PurchasePriceVarianceComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
