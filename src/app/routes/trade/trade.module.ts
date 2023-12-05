import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { TradeRoutingModule } from './trade-routing.module copy';
import { TradeBanusComponent } from './trade-banus/trade-banus.component';

const COMPONENTS: any[] = [TradeBanusComponent];

@NgModule({
  imports: [SharedModule, TradeRoutingModule],
  declarations: [...COMPONENTS],
})

export class TradeModule { }
