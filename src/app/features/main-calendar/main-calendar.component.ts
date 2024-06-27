import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeComponent } from "ng-zorro-antd/badge";
import { en_US, NZ_I18N } from "ng-zorro-antd/i18n";
import { CommonModule, registerLocaleData } from "@angular/common";
import en from '@angular/common/locales/en';
import { CalendarService } from '../../service/calendar/calendar.service';
import {NzDrawerComponent} from "ng-zorro-antd/drawer";
import {DrawerComponent} from "../drawer/drawer.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

registerLocaleData(en);

interface ListData {
  type: string;
  content: string;
}

@Component({
  selector: 'main-calendar',
  standalone: true,
  imports: [NzCalendarModule, NzBadgeComponent, CommonModule, NzDrawerComponent, DrawerComponent, FaIconComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  templateUrl: './main-calendar.component.html',
  styleUrls: ['./main-calendar.component.scss']
})
export class MainCalendarComponent implements OnInit {
  @ViewChild('drawerComponent') drawerComponent!: DrawerComponent;
  @Output() newAppointment = new EventEmitter<any>();

  listDataMap: { [key: number]: ListData[] } = {};
  appointments: any[] = [];

  currentDate: Date = new Date();

  constructor(private calendarService: CalendarService) {}

  ngOnInit() {
    this.calendarService.currentDate.subscribe(date => {
      this.currentDate = date;
      this.updateCalendar();
    });
  }

  updateCalendar() {
    // Lógica para atualizar o calendário com base na data atualizada
    console.log(`Calendar updated to: ${this.currentDate}`);
    this.updateListDataMap();
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

  openModal() {
    this.drawerComponent.openModal();
  }

  handleNewAppointment(appointment: any) {
    this.appointments.push(appointment);
    this.newAppointment.emit(this.appointments); // Emitindo novo compromisso para o HomeComponent
    this.updateListDataMap();
  }

  updateListDataMap() {

    // Agrupa compromissos por dia
    this.appointments.forEach(appointment => {
      const appointmentDate = new Date(appointment.appointmentDate);
      const day = appointmentDate.getUTCDate();

      if (!this.listDataMap[day]) {
        this.listDataMap[day] = [];
      }

      let type: string;
      switch (appointment.appointmentType.toLowerCase()) {
        case 'emergency':
          type = 'error';
          break;
        case 'appointment':
          type = 'success';
          break;
        case 'daycare':
          type = 'warning';
          break;
        default:
          type = 'success';
          break;
      }

      this.listDataMap[day].push({
        type: type,
        content: appointment.appointmentType
      });
    });
  }

}
