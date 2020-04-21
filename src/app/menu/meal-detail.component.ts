import { Component, OnInit } from '@angular/core';
import { IMeal } from './meal';

@Component({
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit {
  pageTitle: string = 'Meal Detail';
  meal: IMeal;

  constructor() { }

  ngOnInit(): void {
  }

}
