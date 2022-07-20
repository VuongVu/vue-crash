<script setup lang="ts">
    import { onMounted, Teleport, ref } from 'vue';
    import usePost from '@/composables/usePost';
    import PostItem from '@/components/post/PostItem.vue';
    import AddPost from '@/components/post/AddPost.vue';

    const { posts, noData, error, clear, getPosts } = usePost();

    onMounted(() => {
        getPosts();
    });

    const openAddModal = ref(false);

    const onCloseAddModal = () => {
        openAddModal.value = false;
    };
</script>

<template>
    <div class="pt-20">
        <div class="mb-5 text-lg text-center font-semibold">Post List</div>

        <div class="grid grid-flow-row gap-y-5 m-auto w-1/2 p-10">
            <div class="flex justify-between">
                <button
                    class="bg-blue-500 w-44 px-4 py-2 rounded-md text-white hover:bg-blue-400 focus:ring-2 focus:ring-blue-300"
                    @click="openAddModal = true">
                    Add Post
                </button>
                <button
                    class="bg-red-500 w-44 px-4 py-2 rounded-md text-white hover:bg-red-400 focus:ring-2 focus:ring-blue-300"
                    @click="clear">
                    Clear
                </button>
            </div>

            <div v-if="error" class="px-4 py-6">
                <p class="text-red-600">{{ error }}</p>
            </div>

            <div
                v-for="post in posts"
                :key="post.id"
                class="flex flex-col bg-white ring-1 ring-slate-300 rounded-lg max-w-md md:max-w-2xl hover:ring-2 hover:shadow-md">
                <div class="flex items-start px-4 py-6 w-full my-2">
                    <PostItem :post="post" />
                </div>
            </div>

            <div v-if="noData" class="px-4 py-6">
                <p>No Post found</p>
            </div>
        </div>
    </div>

    <Teleport to="body">
        <div v-if="openAddModal">
            <AddPost @on-close="onCloseAddModal" />
        </div>
    </Teleport>
</template>
