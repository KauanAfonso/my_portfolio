import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { PresentSection } from './components/present-section/present-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, PresentSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}
