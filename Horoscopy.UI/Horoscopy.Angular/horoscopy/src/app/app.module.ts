import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BirthdatePickerComponent } from '../birthdate-picker/birthdate-picker.component';
import { ChineseZodiacComponent } from '../chinese-zodiac/chinese-zodiac.component';
import { WesternZodiacComponent } from '../western-zodiac/western-zodiac.component';
import { WesternHoroscopeComponent } from '../western-horoscope/western-horoscope.component';

import { ConfigurationService } from '../configuration/configuration.service';
import { HoroscopyApiService } from '../horoscopy-api/horoscopy-api.service';
import { BirthdateNotifierService } from '../birthdate-notifier-service/birthdate-notifier.service';

export function loadConfig(configSvc: ConfigurationService) {
  return () => configSvc.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    BirthdatePickerComponent,
    ChineseZodiacComponent,
    WesternZodiacComponent,
    WesternHoroscopeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HoroscopyApiService,
    BirthdateNotifierService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfig,
      multi: true,
      deps: [ ConfigurationService ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
