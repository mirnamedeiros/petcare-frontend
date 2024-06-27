import { Component } from '@angular/core';
import {MainCalendarComponent} from "../features/main-calendar/main-calendar.component";
import {NavbarComponent} from "../layout/navbar/navbar.component";
import {FooterComponent} from "../layout/footer/footer.component";
import {SecondaryCalendarComponent} from "../features/secondary-calendar/secondary-calendar.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        MainCalendarComponent,
        NavbarComponent,
        FooterComponent,
        SecondaryCalendarComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
