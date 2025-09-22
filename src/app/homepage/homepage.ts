import { Component } from '@angular/core';
import { Maincontent } from './maincontent/maincontent';

@Component({
  selector: 'app-homepage',
  imports: [Maincontent], // Khai báo child Component ngay trong Component cha ở đây.
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {
  // demo data
  listComics = [
    { id: 1, title: 'Comic 1', author: 'Author 1', description : 'Description 1' },
    { id: 2, title: 'Comic 2', author: 'Author 2', description : 'Description 2' },
    { id: 3, title: 'Comic 3', author: 'Author 3', description : 'Description 3' },
    { id: 4, title: 'Comic 4', author: 'Author 4', description : 'Description 4' },
    { id: 5, title: 'Comic 5', author: 'Author 5', description : 'Description 5' },
    { id: 6, title: 'Comic 6', author: 'Author 6', description : 'Description 6' },
  ];

  get firstSix() {
    return this.listComics.slice(0, 6); // Dùng.slice(0, 6) để lấy 6 phần tử đầu tiên. trong Model trước khi cho ra View
  }
  message = '';
  showDetail() {
    this.message = 'Hello World';
  }

}
