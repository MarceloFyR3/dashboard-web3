import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TradeBanusService {

  constructor(protected http: HttpClient) {}

  getGMX() {
    return this.http.get<any>('https://api.gmx.io/actions?account=0x58A39231D6A3A391B67200345f8Ee24b1fA3005B');
  }
}
