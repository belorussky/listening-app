<script setup lang="ts">
const model = defineModel<boolean>();

defineProps<{
    name: string;
}>();
</script>

<template>
    <div class="flex items-center gap-2">
        <input
            type="checkbox"
            v-model="model"
            :id="name"
            class="sr-only peer"
        />
        <label
            :for="name"
            class="w-5 h-5 rounded-full border-2 border-indigo-500 peer-checked:bg-indigo-500 flex items-center justify-center cursor-pointer shrink-0"
        >
            <svg class="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 6l3 3 5-5"/>
            </svg>
        </label>
        <label
            :for="name"
            class="text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer"
        >
            <slot />
        </label>
    </div>
</template>