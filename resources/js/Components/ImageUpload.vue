<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
    (e: "image", file: File | null): void;
}>();

const props = defineProps<{ listingImage?: string }>();

const currentImage: string | null = props.listingImage
    ? `/storage/${props.listingImage}`
    : null;

const preview = ref<string | null>(currentImage);
const oversizedImage = ref<boolean>(false);
const showRevertBtn = ref<boolean>(false);

const imageSelected = (e: Event) => {
    const file = (e.target as HTMLInputElement).files![0];
    preview.value = URL.createObjectURL(file);
    oversizedImage.value = file.size > 3145728;
    showRevertBtn.value = true;
    emit("image", file);
};

const revertImageChange = () => {
    showRevertBtn.value = false;
    preview.value = currentImage;
    oversizedImage.value = false;
    emit("image", null);
};
</script>

<template>
    <div>
        <span
            class="block text-sm font-medium text-slate-700 dark:text-slate-300"
            :class="{ '!text-red-500': oversizedImage }"
        >
            {{
                oversizedImage
                    ? "The selected image exceeds 3Mb"
                    : "Image (Max size 3Mb)"
            }}
        </span>

        <label
            for="image"
            class="block rounded-md mt-1 bg-slate-300 h-[140px] overflow-hidden cursor-pointer border-slate-300 border relative"
            :class="{ '!border-red-500': oversizedImage }"
        >
            <img
                :src="preview ?? '/storage/images/listing/default.jpg'"
                class="object-cover object-center h-full w-full"
                alt=""
            />

            <button
                class="absolute top-2 right-2 bg-white/75 w-8 h-8 rounded-full grid place-items-center text-slate-700"
                v-if="showRevertBtn"
                @click.prevent="revertImageChange"
                type="button"
            >
                <Fa :icon="['fas', 'fa-rotate-left']" />
            </button>
        </label>

        <input
            @input="imageSelected"
            type="file"
            name="image"
            id="image"
            hidden
        />
    </div>
</template>