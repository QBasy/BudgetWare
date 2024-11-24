import { createSignal, onMount } from 'solid-js';

export default function Transactions() {
    const [transactions, setTransactions] = createSignal([]);

    interface Transaction {
        id: number;
        category: string;
        amount: number;
        date: string;
    }
    onMount(async () => {
        const response = await fetch('/assets/data/transactions.json');
        const data = await response.json();
        setTransactions(data);
    });

    return (
        <div class="p-4">
            <h1 class="text-2xl font-bold text-gray-800">Transactions</h1>
            <div class="mt-4">
                <table class="w-full table-auto">
                    <thead>
                    <tr>
                        <th class="border px-4 py-2">Category</th>
                        <th class="border px-4 py-2">Amount</th>
                        <th class="border px-4 py-2">Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions().map((transaction: Transaction) => (
                        <tr id={transaction.id.toString()}>
                            <td class="border px-4 py-2">{transaction.category}</td>
                            <td class="border px-4 py-2">${transaction.amount}</td>
                            <td class="border px-4 py-2">{transaction.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
