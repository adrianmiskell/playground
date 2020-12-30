import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styles: []
})
export class FavoriteComponent implements OnInit {
  @Input('is-fav') isSelected: boolean;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(): void {
    this.isSelected = !this.isSelected;
    this.change.emit(this.isSelected); // raise publish an event, notify others that something has happened
  }
}
