<script setup lang="ts">
import Card from "../Components/Card.vue";
import PaginationLinks from "../Components/PaginationLinks.vue";
import type { PaginatedListings, RouteParams } from "../types/listing";
import InputField from "../Components/InputField.vue";
import { router, useForm } from "@inertiajs/vue3";
import { route } from '../../../vendor/tightenco/ziggy';

const params = route().params as RouteParams;

const props = defineProps<{
    listings: PaginatedListings,
    searchTerm?: string,
}>();

const username: string | null | undefined = params.user_id
    ? props.listings.data.find(i => i.user.id === Number(params.user_id))?.user.name
    : null;

const form = useForm({
    search: props.searchTerm ?? '',
});

const search = (): void => {
    router.get(route("home"), {
        search: form.search,
        user_id: params.user_id,
        tag: params.tag
    });
};
</script>

<template>
    <Head title="- Latest Listings" />

    <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
            <Link
                class="px-2 py-1 rounded-md bg-indigo-500 text-white flex items-center gap-2"
                v-if="params.tag"
                :href="route('home', { ...params, tag: null, page: null })"
            >
                {{ params.tag }}
                <Fa :icon="['fas', 'fa-xmark']" />
            </Link>

            <Link
                class="px-2 py-1 rounded-md bg-indigo-500 text-white flex items-center gap-2"
                v-if="params.search"
                :href="route('home', { ...params, search: null, page: null })"
            >
                {{ params.search }}
                <Fa :icon="['fas', 'fa-xmark']" />
            </Link>

            <Link
                class="px-2 py-1 rounded-md bg-indigo-500 text-white flex items-center gap-2"
                v-if="params.user_id"
                :href="route('home', { ...params, user_id: null, page: null })"
            >
                {{ username }}
                <Fa :icon="['fas', 'fa-xmark']" />
            </Link>
        </div>

        <div class="w-1/4">
            <form @submit.prevent="search">
                <InputField
                    type="search"
                    label=""
                    icon="magnifying-glass"
                    placeholder="Search..."
                    v-model="form.search"
                />
            </form>
        </div>
    </div>

    <div v-if="Object.keys(listings.data).length">
        <div class="grid grid-cols-3 gap-4">
            <div v-for="listing in listings.data" :key="listing.id">
                <Card :listing="listing" />
            </div>
        </div>
        <div class="mt-8">
            <PaginationLinks :paginator="listings" />
        </div>
    </div>
    <div v-else>There are no listings</div>
</template>