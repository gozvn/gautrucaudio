import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../../services/home-page.service';
import { CommonModule } from '@angular/common';
import { Footer } from '../../../../layouts/default/footer/footer';
import { Header } from '../../../../layouts/default/header/header';
import { HomePageList } from '../home-page-list/home-page-list';
import { HomePageTop } from '../home-page-top/home-page-top';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, Footer, Header, HomePageList, HomePageTop],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})

export class HomePage { 
}
