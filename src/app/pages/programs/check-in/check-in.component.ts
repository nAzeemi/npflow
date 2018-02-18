import { Component } from '@angular/core';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./check-in.component.scss'],
  templateUrl: './check-in.component.html',
})
export class CheckInComponent {

  programs = [
    { title: 'Playgroup and Learn', time: new Date() },
    { title: 'ESOL', time: new Date() },
    { title: 'STEP', time: new Date() },
  ];

  starRate = 2;
  heartRate = 4;
}
