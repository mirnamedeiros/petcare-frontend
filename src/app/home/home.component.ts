import { Component } from '@angular/core';
import {MainCalendarComponent} from "../features/main-calendar/main-calendar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainCalendarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
