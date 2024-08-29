<script lang="ts" setup>
import { ref } from 'vue';

const isEditing = ref(false);
const listName = ref('Non de la liste');
const showModal = ref(false);

const toggleEdit = () => {
    isEditing.value = !isEditing.value;
};

const confirmDelete = () => {
    showModal.value = true;
};

const cancelDelete = () => {
    showModal.value = false;
};

const deleteList = () => {
   
    showModal.value = false;
    console.log("Liste supprimée");
};
</script>

<template>
    <main class="border-2 p-2 w-[340px] rounded">
        <div class="flex items-center justify-between mb-4">
            <div>
                
                <template v-if="isEditing">
                    <input v-model="listName" @blur="toggleEdit"
                        class="border border-green-500 outline-none rounded p-2 w-full" :placeholder="listName" />
                </template>
                <template v-else>
                    <p @click="toggleEdit">{{ listName }}</p>
                </template>
            </div>
            <div class="flex items-center">
                <svg @click="toggleEdit" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 20h2.586a1 1 0 00.707-.293l10-10a1 1 0 000-1.414L14.707 6.293a1 1 0 00-1.414 0l-10 10A1 1 0 003 17.414V20zM15.293 7.707l2-2a1 1 
                    0 011.414 0l2.586 2.586a1 1 0 010 1.414l-2 2M14 9l2 2M7 16l2 2" />
                </svg>
                <p @click="confirmDelete" class="font-bold ml-4 cursor-pointer">
                  x
                </p>
            </div>
        </div>
        <div>
            <button class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-1 px-8 rounded">
                <div class="flex items-center">
                    <p class="text-xl mr-2 ">+</p> Add card
                </div>
            </button>
        </div>

        <!-- Modale de confirmation -->
        <div v-if="showModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div class="bg-white p-4 rounded">
                <p class="mb-4">Voulez-vous vraiment supprimer cette liste ?</p>
                <div class="flex justify-end">
                    <button @click="cancelDelete"
                        class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2">
                        Non
                    </button>
                    <button @click="deleteList"
                        class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                        Oui
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="postcss" scoped></style>
