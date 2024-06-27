import {Component, Input} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'list-appointments',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './list-appointments.component.html',
  styleUrl: './list-appointments.component.scss'
})
export class ListAppointmentsComponent {
  @Input() appointments: any[] = [];
}
