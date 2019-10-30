import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrackingService } from './tracking.service';

@Directive({
  selector: '[appTracking]'
})
export class TrackingDirective  implements OnInit {

        private defaultEventType: string = 'CLICK_ANALYTICS';
        @Input('appTracking') daTrack: any;

        constructor(private elementRef: ElementRef, private trackingService: TrackingService, private activeRoute: ActivatedRoute) {
        }

        ngOnInit() {
          //console.log ('ngOnInit', this.daTrack);
        }


        @HostListener('click', ['$event']) onClick($event) {
                let dataToSend = {};
                if (this.daTrack !== undefined) {
                        let publishData = true;
                        // As of now we are handling only 'click' type of events
                        if (this.daTrack.indexOf("eventType:") < 0) {
                                dataToSend['eventType'] = this.defaultEventType;
                        }
                        let trackKeysVals = this.daTrack.split('|');
                        if (trackKeysVals.length > 0) {
                                for (let itr in trackKeysVals) {
                                        let keyValInfo = trackKeysVals[itr].split(':');
                                        if (keyValInfo[0] == "undefined" || keyValInfo[1] == "undefined" || keyValInfo[1] == "null") {
                                                publishData = false;
                                                break;
                                        } else {
                                                dataToSend[keyValInfo[0]] = keyValInfo[1];
                                        }
                                }
                        }
                        console.log ('Published - Click analytics data to end-point:', dataToSend, 'PublishData:', publishData);
                        if (publishData === true) {
                                this.trackingService.publishTrackAction(dataToSend);
                        }
                        //}
                }
        }

}
