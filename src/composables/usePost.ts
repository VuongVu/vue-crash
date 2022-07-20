import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import { usePostStore } from '@/stores/usePostStore';

export default () => {
    const postStore = usePostStore();

    const { posts, error } = storeToRefs(postStore);
    const { getPosts, addPost, clear } = postStore;

    const noData = computed(() => !posts.value.length);
    const totalCount = computed(() => posts.value.length);

    return { posts, noData, totalCount, error, getPosts, addPost, clear };
};
