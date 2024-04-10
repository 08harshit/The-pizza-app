import { Module } from '@nestjs/common';
import { OrderPizzaingredientsService } from './order-pizzaingredients.service';
import { OrderPizzaingredientsController } from './order-pizzaingredients.controller';
import { DatabaseModule } from 'src/core/db/database.module';

@Module({
  imports:[DatabaseModule],
  providers: [OrderPizzaingredientsService],
  controllers: [OrderPizzaingredientsController]
})
export class OrderPizzaingredientsModule {
  
}
