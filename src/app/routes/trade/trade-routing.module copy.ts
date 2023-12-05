import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeBanusComponent } from './trade-banus/trade-banus.component';


const routes: Routes = [
  { path: 'trade-banus', component: TradeBanusComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradeRoutingModule {}
