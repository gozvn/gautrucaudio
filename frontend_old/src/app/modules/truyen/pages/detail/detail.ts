import { Component, OnInit } from '@angular/core';
import { Footer } from '../../../../layouts/default/footer/footer';
import { Header } from '../../../../layouts/default/header/header';
import { Sidebar } from '../../../../layouts/default/sidebar/sidebar';
import { TruyenService } from '../../services/truyen.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  imports: [Header, Footer, Sidebar, CommonModule],
  templateUrl: './detail.html',
  styleUrl: './detail.scss'
})

export class DetailTruyen implements OnInit {
    constructor(private truyenService: TruyenService,private route: ActivatedRoute,) {
    
    }

    detailTruyen:any = []
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        const truyenID = parseInt(id, 10) // parse id sang integer để truyền vào getDetail()
        this.truyenService.getDetail(truyenID).subscribe((data:any) =>{
            // console.log(data)
            this.detailTruyen = data;
        })
      }
    }

}
