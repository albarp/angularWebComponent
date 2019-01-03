import { Component } from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularWebComponent';

  // Alla fine non è necessario, perchè lo stato
  // può essere esposto direttamente
  // get person() {
  //   return this.state.person;
  // }

  constructor(public state: StateService) {
  }

  onWebComponentprint(event: any) {
    console.log('clicked in angular');
    if (this.state.person) {
      this.state.fullname = '' +  event.person.Name + event.person.Surname;
    }
  }
}
