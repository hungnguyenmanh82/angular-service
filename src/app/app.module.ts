import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { LoggerService } from './logger.service';
import { UserComponent } from './user/user.component';
import { OutputRxService } from './output-rx.service';
import { OutputRxComponent } from './output-rx/output-rx.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    OutputRxComponent,

  ],

  imports: [
    BrowserModule
  ],

  /**
   * tất cả services khai báo ở đây sẽ đc khởi tạo và duy trì cùng Module này luôn.
   * tất cả các service = singleton
   */
  providers: [
    LoggerService,
    UserService,
    OutputRxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
