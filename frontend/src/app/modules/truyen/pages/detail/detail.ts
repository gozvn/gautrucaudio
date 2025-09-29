import { Component, OnInit } from '@angular/core';
import { Footer } from '../../../../layouts/default/footer/footer';
import { Header } from '../../../../layouts/default/header/header';
import { Sidebar } from '../../../../layouts/default/sidebar/sidebar';
import { TruyenService } from '../../services/truyen.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  imports: [Header, Footer, Sidebar, CommonModule],
  templateUrl: './detail.html',
  styleUrl: './detail.scss'
})

export class DetailTruyen implements OnInit {
    constructor(private truyenService: TruyenService) {

    }

    detailTruyen:any = []
    ngOnInit(): void {
      this.truyenService.getDetail().subscribe((data:any) =>{
          // console.log(data)
          this.detailTruyen = data;
      })
    }

}
