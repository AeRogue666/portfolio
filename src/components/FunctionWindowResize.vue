<script>
import { onMounted, ref, onUnmounted } from 'vue';
export function useWindowSize() {
    const width = ref(window.innerWidth), height = ref(window.innerHeight);
    const handler = () => {
        width.value = window.innerWidth, height.value = window.innerHeight;
    };

    onMounted(() => window.addEventListener('resize', handler));
    onUnmounted(() => window.addEventListener('resize', handler));
    return {
        width, height
    }
};
</script>