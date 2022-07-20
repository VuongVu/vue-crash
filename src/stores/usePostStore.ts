import { defineStore } from 'pinia';

import { addPost, getAllPost } from '@/services/posts';
import getErrorMessage from '@/utils/getErrorMessage';

export interface Post {
    id: string;
    title: string;
    content: string;
    author: string;
    image: string;
    createdAt: string;
}

export type CreatePost = Omit<Post, 'id' | 'createdAt'>;

export const usePostStore = defineStore('posts', {
    state: () => ({
        posts: [] as Post[],
        post: null as Post | null,
        error: null as string | null,
    }),
    actions: {
        async getPosts() {
            try {
                const posts = await getAllPost();
                this.posts = posts;
            } catch (error) {
                this.error = getErrorMessage(error);
            }
        },
        async addPost(data: CreatePost) {
            try {
                const newPost = await addPost(data);

                this.post = newPost;
                this.posts.unshift(newPost);
            } catch (error) {
                this.error = getErrorMessage(error);
            }
        },
        clear() {
            this.posts = [];
            this.error = null;
        },
    },
});
