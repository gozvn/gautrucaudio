import { Component } from '@angular/core';
import { Footer } from '../../../../layouts/default/footer/footer';
import { Header } from '../../../../layouts/default/header/header';

@Component({
  selector: 'app-login',
  imports: [Header,Footer],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

}
