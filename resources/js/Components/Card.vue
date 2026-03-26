<script setup lang="ts">
import type { Listing, RouteParams } from "../types/listing";
import { router } from "@inertiajs/vue3";
import { route } from '../../../vendor/tightenco/ziggy';

const params = route().params as RouteParams;

defineProps<{
    listing: Listing;
}>();

const selectUser = (id: number): void => {
    router.get(route("home"), {
        user_id: id,
        search: params.search,
        tag: params.tag
    });
};

const selectTag = (tag: string): void => {
    router.get(route("home"), {
        user_id: params.user_id,
        search: params.search,
        tag: tag
    });
};
</script>

<template>
    <div
        class="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-slate-800 h-full flex flex-col justify-between"
    >
        <div>
            <!-- Image -->
            <Link href="">
                <img
                    :src="
                        listing.image
                            ? `/storage/${listing.image}`
                            : '/storage/images/listing/default.jpg'
                    "
                    class="w-full h-48 object-cover object-center bg-slate-300"
                    alt=""
                />
            </Link>

            <!-- Title & user -->
            <div class="p-4">
                <h3 class="font-bold text-xl mb-2">
                    {{ listing.title.substring(0, 40) }}...
                </h3>

                <p>
                    Listed on
                    {{ new Date(listing.created_at).toLocaleDateString() }} by
                    <button
                        class="text-link"
                        @click="selectUser(listing.user.id)"
                    >
                        {{ listing.user.name }}
                    </button>
                </p>
            </div>
        </div>
        <!-- Tags -->
        <div v-if="listing.tags" class="flex items-center gap-3 px-4 pb-4">
            <div v-for="tag in listing.tags.split(',')" :key="tag">
                <button
                    @click="selectTag(tag)"
                    class="bg-slate-500 text-white px-2 py-px rounded-full hover:bg-slate-700 dark:hover:bg-slate-900"
                >
                    {{ tag }}
                </button>
            </div>
        </div>
    </div>
</template>