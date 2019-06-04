import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FirstModule } from './first/first.module';
import { SecondModule } from './second/second.module';
import { SomeService } from './some.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FirstModule.forRoot({
      test: 'Hello'
    }),
    SecondModule
  ],
  providers: [
    {
      provide: SomeService,
      useClass: SomeService
    },
    {
      provide: 'MY SUPER SERVICE',
      useValue: { value: 'value from AppModule' },
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
