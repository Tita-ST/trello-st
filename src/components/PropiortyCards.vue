<template>
    <div class="flex justify-center">
        <div class="w-[80%] border rounded-xl p-4 m-2">
            <div class=" border-b-2 flex items-center justify-between">
                <p> Name of carte </p>
                <Icon class="w-4 h-4 ml-2 cursor-pointer" icon="si:more-vert-fill" />
            </div>
    
            <div class="flex justify-between p-4">
                <div class="w-full">
                    <div class="w-[50%] items-center flex my-10">
                        <p class="font-bold">Assigner à</p>
                        <div class="mx-4 flex items-center">
                            <div class="cursor-pointer w-6 h-6 bg-green-500 rounded-full border">
                            </div>
                            <Icon class="w-6 h-6 ml-2 cursor-pointer" icon="simple-line-icons:plus" />
                            <div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="font-bold">Date</p>
                        <div class="flex my-2 items-center ">
                            <p class="">Début:</p>
                            <input
                                class=" ml-4 border-gray-300 rounded-lg  text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                type="date">
                        </div>
                        <div class="mt-1 flex items-center ">
                            <p class="">Fin:</p>
                            <input
                                class=" ml-10 border-gray-300 rounded-lg  text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                type="date">
                        </div>
                    </div>
                    <div class="my-10">
                        <p>Priorité</p>
                        <select
                            class="p-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            <option value="" disabled selected>Sélectionnez</option>
                            <option value="option1">Tres important</option>
                            <option value="option3">Moin important</option>
                            <option value="option2">Pas important</option>
                        </select>
                    </div>
                </div>
                <div class="w-[75%]">
                    <textarea
                        class=" w-full h-80 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Commentaire ici...">
                    </textarea>
                </div>
            </div>
            <div>
                <CheckList/>
            </div>
            <div class="w-[98%] my-4 p-4 border cursor-pointer rounded-xl">
                <p>Ajouter une pièce jointe oü link </p>
            </div>
            <div>

            </div>
        </div>
    </div>
</template>
<script setup>
import { Icon } from '@iconify/vue';
import CheckList from './CheckList.vue';

</script>
<style lang="">

</style>