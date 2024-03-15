<script setup lang="ts">
defineProps({
    id: {
        type: String,
        required: true,
    },
    label: {
        type: String,
    },
    placeholder: {
        type: String,
    },
    required: {
        type: Boolean,
        default: false,
    },
})
</script>

<template>
    <div>
        <label
            :for="id"
            class="block text-sm font-medium leading-6 dark:text-white"
        >
            {{ label }} <span v-if="required" class="text-red-500">*</span>
        </label>
        <textarea
            :name="id"
            :id
            :placeholder
            rows="5"
            class="mt-1 w-full rounded-md border px-3 py-2 outline-0 ring-0 transition-all duration-300 focus:border-blue-500 dark:border-[#353a52] dark:bg-[#10172d] dark:text-gray-200 dark:focus:border-blue-800"
            :required
        ></textarea>
    </div>
</template>

<style scoped></style>
