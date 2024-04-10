import { Module } from '@nestjs/common';
import { PizzaController } from './pizza.controller';
import { PizzaService } from './pizza.service';
import { DatabaseModule } from 'src/core/db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PizzaController],
  providers: [PizzaService],
  exports: [PizzaService],
})
export class PizzaModule {}
