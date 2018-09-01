import { Component, OnInit } from '@angular/core';
import { BirthdateNotifierService } from '../birthdate-notifier-service/birthdate-notifier.service';

@Component({
  selector: 'birthdate-picker',
  templateUrl: './birthdate-picker.component.html',
  styleUrls: ['./birthdate-picker.component.css']
})
export class BirthdatePickerComponent implements OnInit {

  birthdate: any;
  dateSelected: boolean;

  constructor(private birthdateNotifierService: BirthdateNotifierService) {
    this.dateSelected = false;
  }

  ngOnInit() {
  }

  processSelectedDate(date) {

    if (date == null || date === "") {
      this.birthdate = null;
      this.dateSelected = false;
      this.birthdateNotifierService.publishBirthdate(this.birthdate as string); //we want an immediate clear
    }
    else {
      this.birthdate = date;
      this.dateSelected = true;
    }
  }

  callHoroscopyService() {
    this.birthdateNotifierService.publishBirthdate(this.birthdate as string);
  }
}
