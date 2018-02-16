import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleComponent } from './people.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [{
  path: '',
  component: PeopleComponent,
  children: [{
    path: 'person',
    component: PersonComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class PeopleRoutingModule {

}

export const routedComponents = [
  PeopleComponent,
  PersonComponent,
];
