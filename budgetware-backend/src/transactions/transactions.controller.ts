import { Controller, Get } from '@nestjs/common';
import { TransactionService } from '../service/transaction.service';

@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactionService: TransactionService) {}

    @Get()
    async getAll() {
        return this.transactionService.getTransactions();
    }
}
