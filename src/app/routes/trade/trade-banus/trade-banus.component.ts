import { Component, OnInit } from '@angular/core';
import { TradeBanusService } from '@shared/services/trade/trade-banus.service';

@Component({
  selector: 'app-trade-banus',
  templateUrl: './trade-banus.component.html',
  styleUrls: ['./trade-banus.component.scss']
})
export class TradeBanusComponent implements OnInit {


  constructor(private bannus: TradeBanusService) {}

  ngOnInit(): void {
    var tt = this.bannus.getGMX()

    this.bannus.getGMX().subscribe({
      next: (res) => console.log(res),
      error: (error) => {
        console.log(error);
      }
    });
  }
}
