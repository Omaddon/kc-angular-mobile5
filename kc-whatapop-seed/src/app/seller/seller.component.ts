import { ActivatedRoute } from '@angular/router';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  seller: User;

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.data.forEach((data: { seller: User }) => this.seller = data.seller);
  }


  goBack(): void {
    window.history.back();
  }

}
