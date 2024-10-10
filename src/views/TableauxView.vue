<template>
    <Layout>
        <div class="w-[85%]  justify-center">
            <div>
                <div class=" flex justify-between items-center w-full border-b-2 border-t-2  h-14 ">
                    <p class="font-bold">Simplimmo</p>
                    <div class="flex items-center">
                        <Icon class=" cursor-pointer w-6 h-6 mr-8 text-end" icon="gg:profile" />
                        <button class="border rounded p-2 bg-green-500 hover:bg-green-600">+ Inviter</button>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="pt-4 pb-4  overflow-x-auto whitespace-nowrap flex justtify-start">
                        <List class="mx-8" />
                        <List class="mx-8" />
                        <List class="mx-8" />
                        <List class="mx-8" />
                        <div class="border mx-2 rounded-xl p-4">
                            + Ajouter une colonne
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
<script setup>
import List from '@/components/List.vue';
import Layout from '@/layouts/layout.vue';
import { Icon } from '@iconify/vue';


</script>
<style></style>