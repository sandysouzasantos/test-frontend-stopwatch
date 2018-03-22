import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  timestamp = 0;
  running = false;
  timer = Observable.timer(0, 10);
  cart = 0;

  constructor() {
  }

  ngOnInit() {
    this.timer.subscribe((t) => {
      if (this.running) {
        this.timestamp += 10;
      }
    });

  }

  increment() {
    this.cart += 1;
  }

  start() {
    this.running = true;
  }

  pause() {
    this.running = false;
  }

  stop() {
    this.running = false;
    this.timestamp = 0;
  }

  format(timestamp) {
    const minutes = Math.floor(this.timestamp / (60 * 1000)).toString();
    const seconds = Math.floor((this.timestamp % 60000) / 1000).toString();
    const milliseconds = Math.floor(this.timestamp % 1000).toString();
    return '00'.substring(0, 2 - minutes.length) + minutes + ':' +
      '00'.substring(0, 2 - seconds.length) + seconds +
      '<small>' + '000'.substring(0, 3 - milliseconds.length) + milliseconds + '</small>';

  }
}
