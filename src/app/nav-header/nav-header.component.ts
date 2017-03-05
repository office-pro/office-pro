import { Component, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css'],
  outputs: ['navHeader']
})
export class NavHeaderComponent implements OnInit {
  navHeader = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onChange(value: string) {
    console.log(this.navHeader.emit(value))
    this.navHeader.emit(value);
  }
}
