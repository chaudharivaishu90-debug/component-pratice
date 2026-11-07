import { Component } from '@angular/core';
import { Products } from './model/listinterface';
import { Productarr } from './const/list1';
import { CommonModule } from '@angular/common';
@Component({
  imports: [CommonModule],
  selector: 'app-lists',
  styleUrl: './lists.scss',
  templateUrl: './lists.html',
})
export class Lists {
list1: Array<Products> = [Productarr];
}
