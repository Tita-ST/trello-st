<script setup>
import Layout from '@/layouts/layout.vue';

</script>
<template>
    <Layout>
        <div class="font-semibold">
            <div class="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 md:space-x-4">
                <p class="text-2xl md:text-4xl text-center md:text-left">My profile</p>
                <img class="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full"
                    src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="">
            </div>
            <div>
                <div class="flex flex-col space-y-4">
                    <label class="flex flex-col">
                        Name
                        <input type="text" class="text-gray-500  mt-1 p-2 border rounded-md">
                    </label>
                    <label class="flex flex-col">
                        Surname
                        <input type="text" class="text-gray-500  mt-1 p-2 border rounded-md">
                    </label>
                    <label class="flex flex-col" type="email">
                        Email
                        <input type="email" class="text-gray-500  mt-1 p-2 border rounded-md">
                    </label>
                    <label class="flex flex-col">
                        Biographie
                        <textarea class="text-gray-500 mt-1 p-2 border rounded-md"></textarea>
                    </label>
                </div>
                <div class="flex justify-center md:justify-end">
                    <button
                        class="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-8 rounded mt-4 flex items-center">
                        <p class="text-xl mr-2">SAVE</p>
                    </button>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
<style scoped></style>