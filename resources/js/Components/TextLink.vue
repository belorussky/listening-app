<script setup lang="ts">
import { route } from '../../../vendor/tightenco/ziggy';

interface IProps {
    routeName: string;
    label?: string;
}

const props = defineProps<IProps>();
</script>
<template>
    <Link
        :href="route(routeName)"
        class="text-indigo-500 hover:text-indigo-600 font-medium underline dark:text-indigo-400 dark:hover:text-indigo-500"
        >{{ label }}</Link
    >
</template>