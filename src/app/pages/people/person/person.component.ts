import { Component } from '@angular/core';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./person.component.scss'],
  templateUrl: './person.component.html',
})
export class PersonComponent {

  starRate = 2;
  heartRate = 4;

  searchResults = [];
  showNoneFound = false;
  showNewPerson = false;

  searchPerson() {
    this.showNoneFound = false;
    this.showNewPerson = false;
    this.searchResults = [
      {
        Id: 'guid1',
        Name: 'Naveed Ahmad',
        DateOfBirth: new Date('1972-07-20'),
        Address: {
          Street1: '39 Maurice St',
          Street2: '',
          City: 'Medford',
          State: 'MA',
          Zip: '02155',
        },
      },
      {
        Id: 'guid2',
        Name: 'Saima Ahmad',
        DateOfBirth: new Date('1975-01-02'),
        Address: {
          Street1: '39 Maurice St',
          Street2: '2nd Floor',
          City: 'Medford',
          State: 'MA',
          Zip: '02155',
        },
      },
    ];
    this.showNoneFound = this.searchResults.length === 0
  }

  editPerson(id: string) {
    window.confirm('Editing person with id ' + id);
  }

  addPerson() {
    this.showNoneFound = false;
    this.searchResults = [];
    this.showNewPerson = true;
  }
}
