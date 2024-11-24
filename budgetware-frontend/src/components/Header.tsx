export default function Header() {
    return (
        <header class="bg-blue-500 text-white p-4">
            <nav class="flex justify-between items-center">
                <div class="text-lg font-bold">BudgetWise</div>
                <ul class="flex gap-4">
                    <li><a href="/" class="hover:underline">Home</a></li>
                    <li><a href="/categories" class="hover:underline">Categories</a></li>
                    <li><a href="/transactions" class="hover:underline">Transactions</a></li>
                    <li><a href="/analytics" class="hover:underline">Analytics</a></li>
                    <li><a href="/profile" class="hover:underline">Profile</a></li>
                </ul>
            </nav>
        </header>
    );
}
