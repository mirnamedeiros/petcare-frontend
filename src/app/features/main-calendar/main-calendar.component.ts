// main-calendar.component.ts
import { Component, OnInit } from '@angular/core';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeComponent } from "ng-zorro-antd/badge";
import { en_US, NZ_I18N } from "ng-zorro-antd/i18n";
import { CommonModule, registerLocaleData } from "@angular/common";
import en from '@angular/common/locales/en';
import { CalendarService } from '../../service/calendar/calendar.service';

registerLocaleData(en);

interface ListData {
  type: string;
  content: string;
}

@Component({
  selector: 'main-calendar',
  standalone: true,
  imports: [NzCalendarModule, NzBadgeComponent, CommonModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  templateUrl: './main-calendar.component.html',
  styleUrls: ['./main-calendar.component.scss']
})
export class MainCalendarComponent implements OnInit {
  listDataMap: { [key: number]: ListData[] } = {
    8: [
      { type: 'error', content: 'Emergency' },
      { type: 'success', content: 'Appointment' }
    ],
    10: [
      { type: 'success', content: 'Appointment' }
    ],
    11: [
      { type: 'warning', content: 'Daycare' },
      { type: 'success', content: 'Appointment' }
    ]
  };

  currentDate: Date = new Date();

  constructor(private calendarService: CalendarService) {}

  ngOnInit() {
    this.calendarService.currentDate.subscribe(date => {
      this.currentDate = date;
      this.updateCalendar();
    });
  }

  updateCalendar() {
    // lógica para atualizar o calendário com base na data atualizada
    console.log(`Calendar updated to: ${this.currentDate}`);
  }

  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
}
