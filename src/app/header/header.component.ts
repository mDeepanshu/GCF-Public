import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private mainService: MainServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  indiThread() {
    // this.router.navigate()
  }
}
