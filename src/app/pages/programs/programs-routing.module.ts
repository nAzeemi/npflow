import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramsComponent } from './programs.component';
import { CheckInComponent } from './check-in/check-in.component';

const routes: Routes = [{
  path: '',
  component: ProgramsComponent,
  children: [{
    path: 'check-in',
    component: CheckInComponent,
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
export class ProgramsRoutingModule {

}

export const routedComponents = [
  ProgramsComponent,
  CheckInComponent,
];
