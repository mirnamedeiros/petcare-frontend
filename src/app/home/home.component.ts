import { Component } from '@angular/core';
import {MainCalendarComponent} from "../features/main-calendar/main-calendar.component";
import {NavbarComponent} from "../layout/navbar/navbar.component";
import {FooterComponent} from "../layout/footer/footer.component";
import {SecondaryCalendarComponent} from "../features/secondary-calendar/secondary-calendar.component";
import {ListAppointmentsComponent} from "../features/list-appointments/list-appointments.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        MainCalendarComponent,
        NavbarComponent,
        FooterComponent,
        SecondaryCalendarComponent,
        ListAppointmentsComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    appointments: any[] = [];

    receiveNewAppointment(appointments: any[]) {
        this.appointments = appointments;
    }
}
