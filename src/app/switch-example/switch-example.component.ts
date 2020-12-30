import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-example',
  templateUrl: './switch-example.component.html',
  styles: []
})
export class SwitchExampleComponent implements OnInit {
  viewMode = 'nothing selected';
  constructor() { }

  ngOnInit(): void {
  }

}
