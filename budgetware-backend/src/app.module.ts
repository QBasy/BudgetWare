import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BudgetController } from './budget/budget.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TransactionsController } from './transactions/transactions.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'japierdole',
      database: 'budgetware',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController, BudgetController, TransactionsController],
  providers: [AppService],
})
export class AppModule {}
