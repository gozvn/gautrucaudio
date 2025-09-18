import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layouts/header/header';
import { Footer } from './layouts/footer/footer';
import { CurrencyPipe } from './pipes/CurrencyPipe.pipe';
import { Homepage } from './homepage/homepage';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Homepage, Header, Footer ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('novel');
  data = { title: this.title() };
}
