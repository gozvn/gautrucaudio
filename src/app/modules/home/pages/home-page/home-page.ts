import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../../services/home-page.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage implements OnInit{
  records:any = []
  constructor (private homeservice: HomePageService){

  }

  ngOnInit(): void {
    this.homeservice.getRecords().subscribe((data:any)=>{
      // console.log(data)
    this.records = data;

    })
  }
}
