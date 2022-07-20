import { ref } from 'vue';
import { computed } from 'vue';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default (date: string | number | Date) => {
    const distanceToNow = computed(() => formatDistanceToNow(new Date(date)));

    return { distanceToNow };
};
