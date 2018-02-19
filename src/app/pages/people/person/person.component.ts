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
        Id: 'guid1',
        FirstName: 'Naveed',
        LastName: 'Ahmad',
      },
      {
        Id: 'guid2',
        FirstName: 'Saima',
        LastName: 'Ahmad',
      },
    ];
  }

  editPerson(id: string) {
    window.confirm(id);
  }

  addPerson() {
  }
}
