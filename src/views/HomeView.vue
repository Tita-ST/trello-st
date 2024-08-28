<script setup>
import Layout from '@/layouts/layout.vue';
// import { AdjustmentsIcon } from "@vue-hero-icons/outline"
</script>
<template>
    <Layout>
        <div>
            <div class=" border border-gray-200 rounded-t-lg p-3 flex w-full items-center justify-between">
                <div class="flex w-[50%] items-center justify-between">
                    <p class="text-sm">Name Project</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#9CA3AF" width="24" height="24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15M7.5 4.5h9a2.25 2.25 0 012.25 2.25v11.25a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 017.5 4.5z" />
                    </svg>
                </div>
                <div class="w-[] rounded text-sm border p-2">
                    Partager
                </div>
            </div>
            <div class="flex justify-around">
                <div class="flex   justify-center border-b mb-1 w-[50%] mt-2">
                    <div class="mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 4.5h16.5M3.75 19.5h16.5m-14.25-6h5.25m-5.25 0h.008v.008H5.25V13.5zM14.25 13.5h5.25m-5.25 0h.008v.008H14.25V13.5zM5.25 10.5h5.25m-5.25 0h.008v.008H5.25V10.5zM14.25 10.5h5.25m-5.25 0h.008v.008H14.25V10.5z" />
                        </svg>
                    </div>
                    <p class="mb-3 w-[60px] border-b-4 border-green-500">Tableau</p>
                </div>
                <div class="flex w-[50%] flex justify-center border-b mb-1 mt-2">
                    <div class="mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" width="22" height="22">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                        </svg>
                    </div>
                    <p class="mb-3 w-[25px] border-b-4 ">list</p>
                </div>
            </div>
        </div>
    </Layout>
</template>
