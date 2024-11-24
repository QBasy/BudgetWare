import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';

@Injectable()
export class TransactionService {
    private supabase = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_KEY,
    );

    async getTransactions() {
        const { data, error } = await this.supabase
            .from('transactions')
            .select('*');
        if (error) throw error;
        return data;
    }
}
