import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  name = 'Gior';

  person = {
    givenName: 'GIOR',
    surName: 'Kara',
    age:42,
    email:'kara@aueb.gr'
  }
}
