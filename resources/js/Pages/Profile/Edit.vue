<script setup lang="ts">
import UpdateInfo from "./Sections/UpdateInfo.vue";
import UpdatePassword from "./Sections/UpdatePassword.vue";
import DeleteAccount from "./Sections/DeleteAccount.vue";

interface User {
    name: string;
    email: string;
    email_verified_at: string | null;
}

defineProps<{
    user: User;
    status?: string;
}>();
</script>

<template>
    <Head title="- Profile" />
    <UpdateInfo :user="user" :status="status" />
    <UpdatePassword />
    <DeleteAccount />
</template>