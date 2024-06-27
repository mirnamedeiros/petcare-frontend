import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { faChevronLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  imports: [
    FaIconComponent,
    FormsModule
  ],
  standalone: true
})
export class DrawerComponent {
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;
  @Output() newAppointment = new EventEmitter<any>();

  closeModal() {
    this.dialog.nativeElement.close();
    this.dialog.nativeElement.classList.remove('opened');
  }

  openModal() {
    this.dialog.nativeElement.showModal();
    this.dialog.nativeElement.classList.add('opened');
  }

  onSubmit() {
    const form = this.dialog.nativeElement.querySelector('.appointment-form') as HTMLFormElement;
    const appointment = {
      responsibleName: form['responsibleName'].value,
      petName: form['petName'].value,
      petAge: form['petAge'].value,
      petObservations: form['petObservations'].value,
      appointmentDate: form['appointmentDate'].value,
      appointmentTime: form['appointmentTime'].value,
      appointmentType: form['appointmentType'].value,
      employee: form['employee'].value
    };
    this.newAppointment.emit(appointment);
    this.closeModal();
  }

  protected readonly faXmark = faXmark;
}
