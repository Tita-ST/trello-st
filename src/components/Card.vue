<script lang="ts" setup>
import { ref } from 'vue';

const isEditing = ref(false);
const cardName = ref('Nom de la carte');

const toggleEdit = () => {
    isEditing.value = !isEditing.value;
};

const saveCardName = () => {
    isEditing.value = false;
    // Ajoutez ici la logique de sauvegarde si nécessaire (par exemple, une requête API).
};
</script>

<template>
    <div class="border-2 rounded-lg p-2 w-auto">
        <div class="flex justify-between items-center">
            <!-- Affichage du nom ou de l'input en mode édition -->
            <div>
                <template v-if="isEditing">
                    <input v-model="cardName" class="border border-green-500 outline-none rounded p-1" />
                </template>
                <template v-else>
                    <p>{{ cardName }}</p>
                </template>
            </div>
            <!-- Icône pour modifier -->
            <svg @click="toggleEdit" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#22c55e" class="w-6 h-6 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 3.487a2.25 2.25 0 113.182 3.182L8.318 18.395l-3.89 1.297 1.297-3.89L16.862 3.487z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 2.25l-2.25 2.25" />
            </svg>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#22c55e" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

        </div>

        <!-- Bouton de sauvegarde visible uniquement en mode édition -->
        <div v-if="isEditing" class="flex justify-end mt-2">
            <button @click="saveCardName" class="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded text-sm">
                Sauvegarder
            </button>
        </div>
    </div>
</template>

<style lang="css" scoped>
</style>
