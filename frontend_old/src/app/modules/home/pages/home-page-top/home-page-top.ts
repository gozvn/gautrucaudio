import { Component } from '@angular/core';
import { HomePageService } from '../../services/home-page.service';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../../../pipes/TruncatePipe.pipe';

@Component({
  selector: 'app-home-page-top',
  imports: [CommonModule, TruncatePipe],
  templateUrl: './home-page-top.html',
  styleUrl: './home-page-top.scss'
})
export class HomePageTop {
  
  listTopNovel:any = []
  constructor(private homePageService: HomePageService) {

  }
  
  ngOnInit(): void {
    this.homePageService.getRecords(6).subscribe((data: any) => {
    this.listTopNovel = data;
    })
  }

}
