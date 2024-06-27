import { Component, EventEmitter, Input, Output } from '@angular/core';
import {DatePipe} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'calendar-header',
  standalone: true,
  imports: [
    DatePipe,
    FontAwesomeModule
  ],
  templateUrl: 'calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss']
})
export class CalendarHeaderComponent {
  @Input() currentMonth: Date = new Date();
  @Output() monthChange = new EventEmitter<Date>();

  prevMonth() {
    const newDate = new Date(this.currentMonth);
    newDate.setMonth(newDate.getMonth() - 1);
    this.monthChange.emit(newDate);
  }

  nextMonth() {
    const newDate = new Date(this.currentMonth);
    newDate.setMonth(newDate.getMonth() + 1);
    this.monthChange.emit(newDate);
  }

  protected readonly faChevronLeft = faChevronLeft;
  protected readonly faChevronRight = faChevronRight;
}
