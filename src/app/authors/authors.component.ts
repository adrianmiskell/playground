import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { Author, AuthorsService } from './authors.service';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styles: []
})
export class AuthorsComponent implements OnInit {
  authors: Author[];
  isActive = true;
  isSelected = true;
  email = 'adrian@gmail.com';
  movie = '';
  course = Course.courses;
  constructor(private authorsService: AuthorsService) { }

  ngOnInit(): void {
    this.authors = this.authorsService.getAuthors();
   // console.log(Course.courses);
  }
  onSave($event) { console.log('button clicked'); }
  onKeyUp() { console.log('enter presed ' + this.email); }
  onFavoriteChanged(isFav): void { console.log('fav changed' + isFav); }

}
