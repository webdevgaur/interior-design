import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './landing-page/navigation-bar/navigation-bar.component';
import { HomePageComponent } from './home-page/home-page.component';

import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MessageModule,
    TabMenuModule,
    RouterModule.forRoot([
      {path:'',component: AppComponent},
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
