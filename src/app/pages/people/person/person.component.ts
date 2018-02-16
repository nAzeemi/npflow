import { Component } from '@angular/core';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./person.component.scss'],
  templateUrl: './person.component.html',
})
export class PersonComponent {

  starRate = 2;
  heartRate = 4;

  searchResults = []

  searchPerson() {
    this.searchResults = [
      {
        FirstName: 'Naveed',
        LastName: 'Ahmad',
      },
      {
        FirstName: 'Saima',
        LastName: 'Ahmad',
      },
    ];
  }
}
