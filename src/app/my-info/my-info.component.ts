import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./my-info.component.scss'],
})
export class MyInfoComponent {}
