import { Injectable } from '@nestjs/common';
import { Ingredient, IngredientModel } from 'src/core/models/ingredients';
import { IngredientsDTO } from './ingredients.dto';

@Injectable()
export class IngredientsService {
  constructor() {}
  createIngredients(ingredient: IngredientsDTO) {
    return Ingredient.create(ingredient);
  }

  getIngredients() {
    return Ingredient.findAll();
  }
}
