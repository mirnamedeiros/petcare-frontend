import { Component, OnInit } from '@angular/core';
import { NzCalendarComponent } from "ng-zorro-antd/calendar";
import { NgStyle, CommonModule } from "@angular/common";
import { CalendarService } from '../../service/calendar/calendar.service';
import { CalendarHeaderComponent } from '../calendar-header/calendar-header.component';

@Component({
  selector: 'secondary-calendar',
  standalone: true,
  imports: [
    NzCalendarComponent,
    NgStyle,
    CommonModule,
    CalendarHeaderComponent
  ],
  templateUrl: './secondary-calendar.component.html',
  styleUrls: ['./secondary-calendar.component.scss']
})
export class SecondaryCalendarComponent implements OnInit {
  currentDate: Date = new Date();

  constructor(private calendarService: CalendarService) {}

  ngOnInit() {
    this.calendarService.currentDate.subscribe(date => {
      this.currentDate = date;
    });
  }

  onValueChange(value: Date): void {
    console.log(`Current value: ${value}`);
    this.calendarService.changeDate(value);
  }

  onPanelChange(change: { date: Date; mode: string }): void {
    console.log(`Current value: ${change.date}`);
    console.log(`Current mode: ${change.mode}`);
  }

  onMonthChange(date: Date): void {
    this.currentDate = date;
    this.calendarService.changeDate(date);
  }
}
