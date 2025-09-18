import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {
  
  listComics = [
    { title: 'Comic 1', author: 'Author 1' },
    { title: 'Comic 2', author: 'Author 2' },
    { title: 'Comic 3', author: 'Author 3' },
  ];
}
