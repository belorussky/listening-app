<script setup lang="ts">
interface Props {
    errors: Record<string, string>;
}

const props = defineProps<Props>();
</script>

<template>
    <div class="mb-4" v-if="props.errors && Object.keys(props.errors).length">
        <p class="text-sm text-red-500">Something went wrong!</p>
        <ul class="ml-4 list-disc list-inside">
            <li
                v-for="(error, i) in props.errors"
                :key="i"
                class="text-sm text-red-500"
            >
                {{ error }}
            </li>
        </ul>
    </div>
</template>