import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  isActive=false;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isActive=!this.isActive;
  }

}
