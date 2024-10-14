<template>
    <Layout>
        <div class="w-[85%]  justify-center">
            <div>
                <div class=" flex justify-between items-center w-full border-b-2 border-t-2  h-14 ">
                    <p class="font-bold">Simplimmo</p>
                    <div class="flex cursor-pointer">
                        <div class=" cursor-pointer w-5 h-5 rounded-full bg-green-500 mx-[1px]"></div>
                        <div class=" cursor-pointer w-5 h-5 rounded-full bg-green-500 mx-[1px]"></div>
                        <div class=" cursor-pointer w-5 h-5 rounded-full bg-green-500 mx-[1px]"></div>
                        <div class=" cursor-pointer w-5 h-5 rounded-full bg-green-500 mx-[1px]"></div>
                    </div>
                    <div class="flex items-center">
                        <Icon @click="ShowDel = !ShowDel" class="relative cursor-pointer w-6 h-6 mr-8 text-end" icon="mynaui:delete" />
                        <div v-if="ShowDel === true " class=" absolute top-[111px] right-[170px] border p-1 rounded-xl bg-green-500 z-50">
                            <div class="p-1 hover:bg-green-600 rounded-xl flex justify-between ">
                                <p class="mx-1">finaritratita@gmail.com</p>
                                <Icon class=" cursor-pointer text-black w-6 h-6   text-end"
                                icon="octicon:diff-removed-24" />
                            </div>
                            <div class="p-1 hover:bg-green-600 rounded-xl flex justify-between ">
                                <p class="mx-1">finaritratita@gmail.com</p>
                                <Icon class=" cursor-pointer text-black w-6 h-6   text-end"
                                icon="octicon:diff-removed-24" />
                            </div>
                            <div class="p-1 hover:bg-green-600 rounded-xl flex justify-between ">
                                <p class="mx-1">finaritratita@gmail.com</p>
                                <Icon class=" cursor-pointer text-black w-6 h-6   text-end"
                                icon="octicon:diff-removed-24" />
                            </div>
                        </div>
                        <button @click="ShowInvit = !ShowInvit " class=" border rounded p-2 bg-green-500 hover:bg-green-600">+ Inviter</button>
                        <div v-if="ShowInvit === true " class=" absolute top-[120px] right-[65px] border p-2 rounded-xl bg-green-500 z-50">
                            <input class="Rehercher rounded-xl mb-1" type="mail">
                            <div class="p-1 hover:bg-green-600 rounded-xl flex justify-between ">
                                <p class="mx-1">finaritratita@gmail.com</p>
                            </div>
                            <div class="p-1 hover:bg-green-600 rounded-xl flex justify-between ">
                                <p class="mx-1">finaritratita@gmail.com</p>
                                
                            </div>
                            <div class="p-1 hover:bg-green-600 rounded-xl flex justify-between ">
                                <p class="mx-1">finaritratita@gmail.com</p>
                               
                            </div>
                        </div>
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
import { ref } from 'vue';
const ShowInvit = ref(false)
const ShowDel = ref(false)
</script>
<style></style>