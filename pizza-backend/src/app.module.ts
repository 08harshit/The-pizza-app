import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzaModule } from './modules/pizza/pizza.module';
import { AuthModule } from './modules/auth/auth.module';
import { IngredientsModule } from './modules/ingredients/ingredients.module';
import { OrderPizzaingredientsModule } from './modules/order-pizzaingredients/order-pizzaingredients.module';
import { OrderModule } from './modules/order/order.module';

@Module({
  imports: [
    PizzaModule,
    AuthModule,
    IngredientsModule,
    OrderModule,
    OrderPizzaingredientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
