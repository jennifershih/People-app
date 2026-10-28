import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {
  IgxIconModule,
  IgxAvatarModule,
  IgxButtonModule,
  IgxListModule,
  IgxInputGroupModule,
  IgxSelectModule,
} from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { MyInfoComponent } from './my-info/my-info.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MyInfoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxListModule,
    FormsModule,
    IgxInputGroupModule,
    IgxSelectModule,
  ],
  providers: [provideZoneChangeDetection({ eventCoalescing: true })],
  bootstrap: [AppComponent],
})
export class AppModule {}
