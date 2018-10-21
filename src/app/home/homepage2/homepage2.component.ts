import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-homepage2',
  templateUrl: './homepage2.component.html',
  styleUrls: ['./homepage2.component.less']
})
export class Homepage2Component implements OnInit {

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      console.log('$$$$$');
      console.log(params);
    });
  }
  public manualNav(): void {
    // this.router.navigateByUrl("/jokes");
    // navigate方法不支持矩阵式参数
    // this.router.navigate(['/home'], { queryParams: { page: 1, name: 222 } });
  }

}
