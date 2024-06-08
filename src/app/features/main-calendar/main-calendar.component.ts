import { Component } from '@angular/core';
import {NzCalendarModule} from 'ng-zorro-antd/calendar';
import {NzBadgeComponent} from "ng-zorro-antd/badge";
import {en_US, NZ_I18N} from "ng-zorro-antd/i18n";
import {CommonModule, registerLocaleData} from "@angular/common";
import en from '@angular/common/locales/en';

registerLocaleData(en);

@Component({
  selector: 'main-calendar',
  standalone: true,
  imports: [NzCalendarModule,
    NzBadgeComponent,
    CommonModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  templateUrl: './main-calendar.component.html',
  styleUrl: './main-calendar.component.scss'
})
export class MainCalendarComponent {
  listDataMap = {
    eight: [
      { type: 'error', content: 'Emergency' },
      { type: 'success', content: 'Appointment' }
    ],
    ten: [
      { type: 'success', content: 'Appointment' },
    ],
    eleven: [
      { type: 'warning', content: 'Daycare' },
      { type: 'success', content: 'Appointment' }
    ]
  };

  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }

}
