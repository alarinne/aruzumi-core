import { Component, signal } from '@angular/core';
import { NAME_BANNER } from './ascii/name-banner';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('aruzumi-core');
  readonly nameBanner = NAME_BANNER;
}
