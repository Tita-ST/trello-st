<template>
    <Layout>
        <div>
            <p class="text-center text-[40px]">Espace de travail <span>(Team1)</span> </p>
            <p class="font-bold text-center my-10">Déscription</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex aliquid odit sapiente praesentium sequi
                quasi, quia dolorem quidem ea laboriosam cumque voluptatum delectus amet deleniti fugiat sint! Commodi
                voluptate, vero pariatur tempore molestiae sint eos fugit amet omnis delectus, dicta, earum animi. Enim
                sed eum, aliquam distinctio a illum dolorum.</p>
            <div class="flex justify-around my-20 border-b-2 border-t-2 items-center p-2 ">
                <p class="cursor-pointer hover:text-green-500">INVITER........</p>
                <div class="relative">
                    <input type="text"
                        class=" block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="recherche">
                    <ul class="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg">
                        <li class="px-4 py-2 hover:bg-gray-200 cursor-pointer">finaritratita@gmail.com</li>
                        <li class="px-4 py-2 hover:bg-gray-200 cursor-pointer">finaritratita@gmail.com</li>
                        <li class="px-4 py-2 hover:bg-gray-200 cursor-pointer">finaritratita@gmail.com</li>
                        <li class="px-4 py-2 hover:bg-gray-200 cursor-pointer">finaritratita@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <p class="ml-20 my-2 font-bold">Mes Collaborateurs <span>(0/20)</span></p>
                <div class="flex items-center justify-start ml-20">
                    <ul class=" mx-10">
                        <li class="cursor-pointer">test@gmail.com</li>
                    </ul>
                    <button class="hover:bg-green-600 rounded-xl p-1 text-[15px]">Retirer</button>
                </div>
                <div class="flex items-center justify-start ml-20">
                    <ul class=" mx-10">
                        <li class="cursor-pointer">test@gmail.com</li>
                    </ul>
                    <button class="hover:bg-green-600 rounded-xl p-1 text-[15px]">Retirer</button>
                </div>
                <div class="flex items-center justify-start ml-20">
                    <ul class=" mx-10">
                        <li class="cursor-pointer">test@gmail.com</li>
                    </ul>
                    <button class="hover:bg-green-600 rounded-xl p-1 text-[15px]">Retirer</button>
                </div>
                <div class="flex items-center justify-start ml-20">
                    <ul class=" mx-10">
                        <li class="cursor-pointer">test@gmail.com</li>
                    </ul>
                    <button class="hover:bg-green-600 rounded-xl p-1 text-[15px]">Retirer</button>
                </div>
            </div>
            <div class="ml-20 my-2 font-bold">
                Mes tableaux
            </div>
            <div class="ml-24 my-10  ">
                <div class="flex flex-wrap gap-4 items-center text-white font-semibold">
                    <div
                        class="cursor-pointer flex justify-center items-center rounded-md w-[250px] h-[115px] bg-[url('https://img.freepik.com/photos-gratuite/sommet-montagne-enneige-sous-ia-generative-majeste-galaxie-etoilee_188544-9650.jpg?size=626&ext=jpg&ga=GA1.1.1936261018.1724333182&semt=ais_hybrid')]">
                        <p> project</p>
                    </div>
                    <div
                        class="cursor-pointer flex justify-center items-center border rounded-md w-[250px] h-[115px] bg-[url('https://img.freepik.com/photos-gratuite/sommet-montagne-enneige-sous-ia-generative-majeste-galaxie-etoilee_188544-9650.jpg?size=626&ext=jpg&ga=GA1.1.1936261018.1724333182&semt=ais_hybrid')]">
                        <p>projet</p>
                    </div>
                    <div
                        class="cursor-pointer flex justify-center items-center border rounded-md w-[250px] h-[115px] bg-[url('https://img.freepik.com/photos-gratuite/sommet-montagne-enneige-sous-ia-generative-majeste-galaxie-etoilee_188544-9650.jpg?size=626&ext=jpg&ga=GA1.1.1936261018.1724333182&semt=ais_hybrid')]">
                        <p>projet</p>
                    </div>
                    <div
                        class="cursor-pointer flex justify-center items-center border rounded-md w-[250px] h-[115px] bg-[url('https://img.freepik.com/photos-gratuite/sommet-montagne-enneige-sous-ia-generative-majeste-galaxie-etoilee_188544-9650.jpg?size=626&ext=jpg&ga=GA1.1.1936261018.1724333182&semt=ais_hybrid')]">
                        <p>Create</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
<script setup>
import Layout from '@/layouts/layout.vue';
</script>
<style scoped></style>