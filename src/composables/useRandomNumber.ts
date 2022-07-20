import { computed } from 'vue';

export default (round: number) => {
    const randomNumber = computed(() => Math.floor(Math.random() * round));

    return randomNumber;
};
