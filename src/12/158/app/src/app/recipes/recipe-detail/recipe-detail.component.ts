import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  public onAddToShoppingList() {
    // Max comments on two viable approaches in the video:
    // 1: Directly access the shopping list service as is done here
    // 2: Access the recipe service here (which seems natural as we are in the recipe
    //    detail component) and inject the shopping list service into the recipe service
    //    He takes this approach in the video and it leads to a whole lot more code! Also
    //    I don't like it as it creates an unnecessary dependency for the recipe service.
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}