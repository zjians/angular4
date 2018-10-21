import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.router.navigate(['homepage2', { queryParams: {page: 1, name: 'test' }}]);
    // }, 4000);
  }

}
