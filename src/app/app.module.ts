import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TrackclickComponent } from './trackclick/trackclick.component';
import { TrackingDirective } from './tracking.directive';
import { TrackingService } from './tracking.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
      RouterModule.forRoot([
      { path: '', component: TrackclickComponent }
    ])
   ],
  declarations: [ AppComponent, HelloComponent, TrackclickComponent, TrackingDirective ],
  bootstrap:    [ AppComponent ],
  providers: [TrackingService]
})
export class AppModule { }
