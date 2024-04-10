import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { DatabaseModule } from 'src/core/db/database.module';
@Module({
  imports:[DatabaseModule],
  providers: [IngredientsService],
  controllers: [IngredientsController]
})
export class IngredientsModule {}
