import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TrackclickComponent } from './trackclick/trackclick.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
      RouterModule.forRoot([
      { path: '', component: TrackclickComponent }
    ])
   ],
  declarations: [ AppComponent, HelloComponent, TrackclickComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
