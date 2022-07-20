<script setup lang="ts">
    import { ref } from 'vue';
    import { XIcon } from '@heroicons/vue/outline';
    import usePost from '@/composables/usePost';
    import { CreatePost } from '@/stores/usePostStore';

    const { addPost } = usePost();

    defineProps({
        open: Boolean,
    });

    const emit = defineEmits<{
        (event: 'onClose'): void;
    }>();

    const post = ref<CreatePost>({
        author: '',
        title: '',
        content: '',
        image: '',
    });

    const submitHandler = () => {
        // skip validation :)
        addPost(post.value);
        emit('onClose');
    };
</script>

<template>
    <div
        class="fixed flex items-center py-12 bg-gray-700 transition duration-150 ease-in-out z-10 top-0 right-0 bottom-0 left-0">
        <div class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <form
                class="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400"
                @submit.prevent="submitHandler">
                <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Enter Post Details</h1>
                <label for="author" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Owner</label>
                <input
                    id="author"
                    v-model="post.author"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />

                <label for="title" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Title</label>
                <input
                    id="title"
                    v-model="post.title"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />

                <label for="content" class="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                    >Content</label
                >
                <textarea
                    id="content"
                    v-model="post.content"
                    class="mb-5 mt-2 h-40 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full flex items-center pl-3 text-sm border-gray-300 rounded border" />

                <label for="image" class="text-gray-800 text-sm font-bold leading-tight tracking-normal">Image</label>
                <input
                    id="image"
                    v-model="post.image"
                    class="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />

                <div class="flex items-center justify-start w-full">
                    <button
                        class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                        Submit
                    </button>
                    <button
                        class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                        @click="emit('onClose')">
                        Cancel
                    </button>
                </div>
                <button
                    class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                    @click="emit('onClose')">
                    <XIcon class="h-5" />
                </button>
            </form>
        </div>
    </div>
</template>
