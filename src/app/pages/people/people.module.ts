import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { PeopleRoutingModule, routedComponents } from './people-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    PeopleRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class PeopleModule { }
