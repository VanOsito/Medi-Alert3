import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [IonicModule, CommonModule, FormsModule],
  standalone: true,
})
export class CalendarioComponent  implements OnInit {
  public datetime: string | undefined;

  // isWeekday = (dateString: string) => {
  //   const date = new Date(dateString);
  //   const utcDay = date.getUTCDay();
    // return utcDay !== 0 && utcDay !== 6;};
  constructor() { }

  ngOnInit() {
    const date = new Date();

    // Set the value of the datetime to 2 days
    // before the current day
    let dayChange = -2;

    // If the day we are going to set the value to
    // is in the previous month then set the day 2 days
    // later instead so it remains in the same month
    if (date.getDate() + dayChange <= 0) {
      dayChange = -dayChange;
    }

    // Set the value of the datetime to the day
    // calculated above
    date.setDate(date.getDate() + dayChange);
    this.datetime = date.toISOString();
  }
}

