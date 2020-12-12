import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Author {
  name: string;
  id: number;
}
export class AuthorsService {
  readonly authors: Author[] = [{name: 'adrian', id: 3}, {name: 'luke', id: 53}, {name: 'pamela', id: 6}];
  constructor() { }

  getAuthors() {

    return this.authors;
  }
}
