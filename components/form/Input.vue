<script setup lang="ts">
defineProps({
    id: {
        type: String,
        required: true,
    },
    label: {
        type: String,
    },
    type: {
        type: String,
        default: 'text',
    },
    placeholder: {
        type: String,
    },
    required: {
        type: Boolean,
        default: false,
    }
})
</script>

<template>
    <div>
        <label :for="id" class="block text-sm font-medium leading-6 dark:text-white">
            {{ label }} <span v-if="required" class="text-red-500">*</span>
        </label>
        <div class="relative mt-1 rounded-md shadow-sm">
            <input
                :type
                :name="id"
                :id
                class="dark:text-gray-200 dark:bg-[#10172d] w-full border rounded-md dark:border-[#353a52] focus:border-blue-500 dark:focus:border-blue-800 ring-0 outline-0 transition-all duration-300 px-3 py-2"
                :placeholder
                :required
            >
        </div>
    </div>
</template>

<style scoped>

</style>
