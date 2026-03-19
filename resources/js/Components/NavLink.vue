<script setup lang="ts">
import { route } from '../../../vendor/tightenco/ziggy';

interface IProps {
    routeName: string;
    componentName?: string;
}

const props = defineProps<IProps>();
</script>

<template>
    <Link
        :href="route(routeName)"
        class="px-3 py-2 rounded-lg hover:bg-slate-700"
        :class="{ 'bg-slate-700': $page.component === componentName }"
    >
        <slot />
    </Link>
</template>