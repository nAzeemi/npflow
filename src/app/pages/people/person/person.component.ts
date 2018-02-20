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

  searchPerson() {
    this.showNoneFound = false;
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
    this.showNoneFound = this.searchResults.length === 0
  }

  editPerson(id: string) {
    window.confirm('Editing person with id ' + id);
  }

  addPerson() {
    this.showNoneFound = false;
    this.searchResults = [];
  }
}
