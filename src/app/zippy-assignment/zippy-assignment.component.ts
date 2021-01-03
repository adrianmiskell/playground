import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy-assignment',
  templateUrl: './zippy-assignment.component.html',
  styleUrls: ['./zippy-assignment.component.scss']
})
export class ZippyAssignmentComponent implements OnInit {
  @Input('title') title: string;
  selected: boolean;
  constructor() { }
  toggle() { this.selected = !this.selected; }
  ngOnInit(): void {
    this.selected = false;
  }

}
