import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageService } from '../../services/home-page.service'; 

@Component({
  selector: 'app-home-page-list',
  imports: [CommonModule],
  templateUrl: './home-page-list.html',
  styleUrl: './home-page-list.scss'
})
export class HomePageList implements OnInit {
  
  listsNovelHome:any = []
  constructor(private homePageService: HomePageService) {

  }
  ngOnInit(): void {

    this.homePageService.getRecords(6).subscribe((data: any) => {
      // console.log(data)
      this.listsNovelHome = data;
    })
  }
}
