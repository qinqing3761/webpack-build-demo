import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {
  now = moment().format('YYYY-MM-DD');

  constructor() {
  }

  ngOnInit(): void {
  }

}
