import httpRequest from '@/services/axiosInstance';
import { CreatePost } from '@/stores/usePostStore';

interface Post {
    id: string;
    title: string;
    content: string;
    author: string;
    image: string;
    createdAt: string;
}

export const getAllPost = async () => {
    const result = await httpRequest.get<Post[]>('/posts');

    return result.data;
};

export const addPost = async (data: CreatePost) => {
    const newPost = await httpRequest.post<Post>('/posts', data);

    return newPost.data;
};
