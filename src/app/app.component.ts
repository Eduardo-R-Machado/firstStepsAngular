import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = 'Eduardo';

  userData = {
    email: 'eduardo@gmail.com',
    years: 21,
    sex: 'Masculino',
    espec: 'Front-End'
  }

  title = 'firstStepsAngular';
}
