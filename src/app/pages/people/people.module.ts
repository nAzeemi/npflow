import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { PeopleRoutingModule, routedComponents } from './people-routing.module';
import { PersonDetailsComponent } from './person/person-details/person-details.component';

@NgModule({
  imports: [
    ThemeModule,
    PeopleRoutingModule,
  ],
  declarations: [
    ...routedComponents,
    PersonDetailsComponent,
  ],
})
export class PeopleModule { }
