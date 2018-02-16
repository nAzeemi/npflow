import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ProgramsRoutingModule, routedComponents } from './programs-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    ProgramsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ProgramsModule { }
