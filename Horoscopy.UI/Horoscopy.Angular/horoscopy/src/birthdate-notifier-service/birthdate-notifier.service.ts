import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BirthdateNotifierService {

  private birthdateSubject = new BehaviorSubject<string>(null);
  private dateSelectedSubject = new BehaviorSubject<boolean>(false);

  constructor() {

  }

  getBirthdateSubject(): BehaviorSubject<string> {
    return this.birthdateSubject;
  }

  getDateSelectionSubject(): BehaviorSubject<boolean> {
    return this.dateSelectedSubject;
  }

  publishBirthdate(date: string) {

    if (date != null && date !== "")
      this.dateSelectedSubject.next(true);
    else
      this.dateSelectedSubject.next(false);

    this.birthdateSubject.next(this.quoteDelimitDate(date));
  }

  private quoteDelimitDate(date: string) {
    if (!date.startsWith("\""))
      date = "\"" + date;

    if (!date.endsWith("\""))
      date = date + "\"";

    return date;
  }
}
