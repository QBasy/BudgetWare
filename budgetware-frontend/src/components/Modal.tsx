import { createSignal } from 'solid-js';

// @ts-ignore
export default function Modal({ isOpen, onClose, onSubmit }) {
    const [name, setName] = createSignal('');

    const handleSubmit = () => {
        onSubmit(name());
        setName('');
        onClose();
    };

    return isOpen() ? (
        <div class="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div class="bg-white p-6 rounded-lg w-96">
                <h2 class="text-xl font-bold mb-4">Add New Category</h2>
                <input
                    type="text"
                    value={name()}
                    onInput={(e) => setName(e.target.value)}
                    class="w-full p-2 border border-gray-300 rounded-lg mb-4"
                    placeholder="Category Name"
                />
                <div class="flex justify-between">
                    <button
                        onClick={handleSubmit}
                        class="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                        Submit
                    </button>
                    <button
                        onClick={onClose}
                        class="bg-gray-300 text-black px-4 py-2 rounded-lg"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    ) : null;
}
