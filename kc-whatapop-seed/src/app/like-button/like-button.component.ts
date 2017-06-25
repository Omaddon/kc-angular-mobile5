import { Component, Input, OnInit } from '@angular/core';

import { Product } from './../product';


@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent implements OnInit {

  likes: String;

  @Input() product: Product;

  ngOnInit() {
    if (this.product) {
      this.likes = localStorage.getItem(`${this.product.id}`);
    } else {
      this.likes = 'dislike';
    }
  }

  clickMeGusta() {
    if (typeof (Storage) !== 'undefined') {
      if (this.likes === 'like') {
        localStorage.setItem(`${this.product.id}`, 'dislike');
      } else {
        localStorage.setItem(`${this.product.id}`, 'like');
      }
    }
    this.likes = localStorage.getItem(`${this.product.id}`);
  }

}
