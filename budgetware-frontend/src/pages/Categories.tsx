import Modal from "~/components/Modal";
import {createSignal} from "solid-js";

export default function Categories() {
    const [categories, setCategories] = createSignal([]);
    const [filter, setFilter] = createSignal('');
    const [isModalOpen, setModalOpen] = createSignal(false);

    interface Category {
        name: string;
        id: number;
    }

    const handleAddCategory = async (name: string) => {
        const newCategory = { id: categories().length + 1, name };
        // @ts-ignore
        setCategories([...categories(), newCategory]);
    };

    const filteredCategories = () => {
        return categories().filter((category: Category) =>
            category.name.toLowerCase().includes(filter().toLowerCase())
        );
    };

    return (
        <div class="p-4">
            <h1 class="text-2xl font-bold text-gray-800">Categories</h1>
            <input
                type="text"
                placeholder="Filter categories"
                value={filter()}
                onInput={(e) => setFilter(e.target.value)}
                class="mt-4 w-full p-2 border border-gray-300 rounded-lg"
            />
            <button
                onClick={() => setModalOpen(true)}
                class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
                Add Category
            </button>
            <ul class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCategories().map((category: Category) => (
                    <li
                        class="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow-lg text-center font-medium"
                        id={category.id.toString()}
                    >
                        {category.name}
                    </li>
                ))}
            </ul>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleAddCategory}
            />
        </div>
    );
}
