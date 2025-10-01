import { Component, OnInit } from '@angular/core';
import { TruyenService } from '../../services/truyen.service';
import { CommonModule,isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { Footer } from '../../../../layouts/default/footer/footer';
import { Header } from '../../../../layouts/default/header/header';
import { Sidebar } from '../../../../layouts/default/sidebar/sidebar';


@Component({
  selector: 'app-list',
  imports: [CommonModule,Header,Footer,Sidebar],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})

export class List implements OnInit {
  isBrowser = false;

  listsNovel:any = []
  constructor(private truyenService: TruyenService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngOnInit(): void {
    if (this.isBrowser) {
      this.truyenService.getRecords().subscribe((data: any) => {
        // console.log(data)
        this.listsNovel = data;
      })
    }
  }
}

