import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoguesGalleryComponent } from './rogues-gallery/rogues-gallery.component';
import { RoguesProfileComponent } from './rogues-profile/rogues-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RoguesGalleryComponent,
    RoguesProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
