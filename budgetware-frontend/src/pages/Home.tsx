export default function Home() {
    return (
        <div class="text-center py-12">
            <h1 class="text-4xl font-bold text-blue-500">Welcome to BudgetWise</h1>
            <p class="mt-4 text-lg text-gray-600">
                Track your expenses, manage your categories, and analyze your spending.
            </p>
            <div class="mt-8">
                <a
                    href="/categories"
                    class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                >
                    Get Started
                </a>
            </div>
        </div>
    );
}
