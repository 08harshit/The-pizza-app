import { Body, Controller, Get, Post } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { Ingredient,IngredientModel } from 'src/core/models/ingredients';
import { IngredientsDTO } from './ingredients.dto';

@Controller('ingredients')
export class IngredientsController {
  constructor(private ingredientsService: IngredientsService) {}


  @Post('createIngredient')
  createIngredient(@Body() ingredient: IngredientsDTO)
  {
    return this.ingredientsService.createIngredients(ingredient)
  }


  @Get('getIngredients')
  getIngredients()
  {
    return this.ingredientsService.getIngredients();
  }
}
