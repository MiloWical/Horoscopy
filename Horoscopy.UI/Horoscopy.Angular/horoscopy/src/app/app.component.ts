import { Component } from '@angular/core';
//import { BirthdatePickerComponent } from '../birthdate-picker/birthdate-picker.component';
//import { ChineseZodiacComponent } from '../chinese-zodiac/chinese-zodiac.component';
//import { WesternZodiacComponent } from '../western-zodiac/western-zodiac.component';
//import { WesternHoroscopeComponent } from '../western-horoscope/western-horoscope.component';

import { HoroscopyApiService } from '../horoscopy-api/horoscopy-api.service';
import { BirthdateNotifierService } from '../birthdate-notifier-service/birthdate-notifier.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  componentsVisible = false;

  constructor(private birthdateNotifierService: BirthdateNotifierService) {
    birthdateNotifierService.getDateSelectionSubject().subscribe(dateSelected => this.componentsVisible = dateSelected);
  }
}
