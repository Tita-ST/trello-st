<template>
  <!-- <div class="mx-auto w-[98%]">
    <header>
      <div class="w-[100%] border text-white font-semibold bg-green-500 rounded-lg">
        <div class="flex justify beetween">
          <div class="flex justify-between items-center m-2 w-[30%]">
            <span> Logo </span>
            <div>
              <nav class="">
                <RouterLink class=" bg-green-600 rounded p-1" to="/">Home</RouterLink>
                <RouterLink class="ml-4" to="/">Home</RouterLink>
                <RouterLink class="ml-4" to="/">Home</RouterLink>
                <RouterLink class="ml-4" to="/about">About</RouterLink>
              </nav>
            </div>
          </div>
          <div class="w-[70%] flex items-center justify-end">
            <div>
              <button
                class="w-[80px] font-semibold text-gray-500 text-center rounded bg-white text-black">
                + New
              </button>
            </div>

            <div class="flex justify-center">
              <input
                class="rounded-lg text-gray-400 w-[600px] ml-4 text-center"
                type="text"
                placeholder="Find project"
              />
            </div>
            <div class="border ml-10 w-[23px] h-[23px] rounded-full"></div>
            <div class="border ml-4 mr-2 w-[30px] h-[23px] rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
      <slot />
    <footer>footer</footer>
  </div> -->

  <!-- component -->
  <!-- <script defer src="https://unpkg.com/alpinejs@3.10.2/dist/cdn.min.js"></script> -->

  <!-- page -->
  <main class="min-h-screen w-full bg-gray-100 text-gray-700" x-data="layout">
    <!-- header page -->
    <header
      class="flex w-full items-center bg-green-500 font-semibold justify-between  border-b-2 border-gray-200  p-2">
      <!-- logo -->
      <div class="flex items-center space-x-2">
        <button type="button" class="text-3xl" @click="showSideBar = !showSideBar">
          <i class="bx bx-menu"></i>
        </button>
        <div>Logo</div>
      </div>
      <div class="flex justify-around">
        <!-- <router-link class="w-[80px] max-sm:hidden font-semibold text-gray-500 text-center rounded bg-white text-gray-400"
          
          >+ New</router-link> -->
        <div @click="isOpenModal = true"
          class="w-[80px] cursor-pointer max-sm:hidden font-semibold text-gray-500 text-center rounded bg-white text-gray-400">
          +New
        </div>
        <div @click="isOpenNewTable = true"
          class="cursor-pointer mx-4 w-[100px] max-sm:hidden font-semibold text-gray-500 text-center rounded bg-white text-gray-400">
          + Tableaux
        </div>
        <Modal :isOpen="isOpenNewTable">
          <template #content>
            <div>
              <div>
                <div class=" my-4 ">
                  <h2 class=" text-gray-700 font-semibold my-3">Nom</h2>
                  <input class=" text-center rounded-lg   h-[30px] w-full" placeholder="" type="text">
                </div>
              </div>
              <div class="my-10">
                <p>Visibilité</p>
                <select
                  class="p-3 w-full border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="" disabled selected>Sélectionnez</option>
                  <option value="option1">Privée</option>
                  <option value="option3">Espace de travail </option>
                </select>
              </div>
            </div>
          </template>
          <template #footer>
            <div>
              <button @click="isOpenNewTable = false">fermer</button>
            </div>
          </template>
        </Modal>
        <div>
          <div @click="ShowListEspace = !ShowListEspace"
            class="relative cursor-pointer w-[150px] max-sm:hidden font-semibold text-gray-500 text-center rounded bg-white text-gray-400">
            <p>Espace de travail</p>
          </div>
          <div v-if="ShowListEspace === true"
            class=" bg-green-500 text-white absolute mt-2 w-[300px] w-[200px] p-2 border rounded-md">
            <div>
              <p>Esapace de travail actuel </p>
              <div class=" hover:bg-green-600 rounded-md p-1 cursor-pointer flex items-center">
                <Icon icon="ic:twotone-dashboard" />
                <p class="ml-2"> ST-DEV</p>
              </div>

            </div>
            <div>
              <p>Vos espace de travail </p>
              <div class="hover:bg-green-600 rounded-md p-1 cursor-pointer flex items-center">
                <Icon icon="ic:twotone-dashboard" />
                <p class="ml-2"> ST-DEV</p>
              </div>

            </div>
            <div>
              <p>espace de travail d'invités </p>
              <div class="hover:bg-green-600 rounded-md p-1 cursor-pointer flex items-center">
                <Icon icon="ic:twotone-dashboard" />
                <p class="ml-2"> ST-DEV</p>
              </div>
            </div>
          </div>

        </div>

        <Modal :isOpen="isOpenModal">
          <template #content>
            <div>
              <NewProjectView />
            </div>
          </template>
          <template #footer>
            <div>
              <button @click="isOpenModal = false">fermer</button>
            </div>
          </template>
        </Modal>
      </div>
      <input class="rounded-lg text-gray-400 lg:w-[500px] ml-4 text-center" placeholder="Find project" type="text">
      <!-- button profile -->
      <div>
        <div class="flex justify-center items-center">
          <div class="border  w-[23px] h-[23px] mr-4 rounded-full"></div>
          <button @click="showCompte = !showCompte" type="button" class="h-9 w-9 overflow-hidden rounded-full">
            <img src="https://plchldr.co/i/40x40?bg=111111" alt="plchldr.co" />
          </button>
        </div>
        <div v-if="showCompte === true"
          class="absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md"
          x-show="profileOpen" x-transition>
          <div class="flex items-center space-x-2 p-2">
            <img src="https://plchldr.co/i/40x40?bg=111111" alt="plchldr.co" class="h-9 w-9 rounded-full" />
            <div class="font-medium">Andrianarivelo</div>
          </div>

          <div class="flex flex-col space-y-3 p-2">
            <router-link class="transition hover:text-green-600 cursor-pointer" to="/profil">My Profile </router-link>
            <router-link class="transition hover:text-green-600" to="/">Settings</router-link>
          </div>
          <div class="p-2">
            <button class="flex items-center space-x-2 transition hover:text-green-600">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
              <router-link class="transition hover:text-green-600" to="/login">Log Out</router-link>
              <div></div>
            </button>
          </div>
        </div>
      </div>
    </header>

    <div class="flex">
      <!-- aside -->
      <aside v-if="showSideBar === true" class="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2"
        style="height: 90.5vh" x-show="asideOpen">
        <router-link to="/dashboard"
          class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-200 hover:text-green-600">
          <span class="text-2xl">
            <Icon icon="ic:twotone-dashboard" />
          </span>
          <span>Dashboard</span>
        </router-link>
        <router-link to="EspaceDeTravail"
          class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-200 hover:text-green-600">
          <span class="text-2xl"><i class="bx bx-cart"></i></span>
          <span>Espace de travail</span>
        </router-link>

        <!-- <a href="#" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-200 hover:text-green-600">
          <span class="text-2xl"><i class="bx bx-shopping-bag"></i></span>
          <span>Shopping</span>
        </a> -->

        <router-link to="AllProject" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-200 hover:text-green-600">
          <span class="text-2xl"><i class="bx bx-heart"></i></span>
          <span>Projet</span>
        </router-link>

        <!-- <a href="#" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-200 hover:text-green-600">
          <span class="text-2xl"><i class="bx bx-user"></i></span>
          <span>Profile</span>
        </a> -->
      </aside>

      <!-- main content page -->
      <div class="w-full p-4">
        <slot />


      </div>
    </div>
  </main>

  <!-- <script>
    document.addEventListener("alpine:init", () => {
      Alpine.data("layout", () => ({
        profileOpen: false,
        asideOpen: true,
      }));
    });
  </script> -->
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import Modal from '../components/Modal.vue';
import NewProjectView from '@/views/NewProjectView.vue';

const showSideBar = ref(true)
const showCompte = ref(false)
const isOpenModal = ref(false)
const ShowListEspace = ref(false)

const isOpenNewTable = ref(false)
</script>
<style lang=""></style>
