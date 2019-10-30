import { Injectable } from '@angular/core';

@Injectable()
export class TrackingService {

  constructor() { }

  publishTrackAction(data: any): void {
    console.log ('Analytics data from service: ', data);
  }

}