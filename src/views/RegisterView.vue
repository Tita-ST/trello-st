<template>
    <div class="relative min-h-screen bg-cover bg-center" :style="{ backgroundImage: `url(${bgImage})` }">
        <!-- Couche de flou sur l'image de fond -->
        <div class="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

        <div class="relative h-screen flex justify-center items-center">
            <div class="lg:w-2/5 md:w-1/2 w-2/3">
                <form class="bg-white p-10 rounded-lg shadow-lg min-w-full">
                    <h1 class="text-center text-2xl mb-6  font-bold text-green-500 font-sans">Register</h1>
                    <div class="mb-4">
                                             <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
                                                 Username
                                             </label>
                                             <input
                                                 class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                 id="username" type="text" placeholder="Username" />
                                         </div>
                    <div class="my-3">
                        <label class="block mb-2 text-sm font-bold text-gray-700" for="email">Email</label>
                        <input
                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            type="text" name="email" id="email" placeholder="@email" />
                    </div>
                    <div class="my-3">
                        <label class="block mb-2 text-sm font-bold text-gray-700" for="password">Password</label>
                        <input
                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="password" type="password" placeholder="******************" />
                        <p class="text-xs italic text-red-500">Please choose a password.</p>
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-bold text-gray-700" for="confirm">Confirm password</label>
                        <input
                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            type="text" name="confirm" id="confirm" placeholder="confirm password" />
                    </div>
                    <button type="submit"
                        class="w-full mt-6 bg-green-500 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans hover:bg-green-600">
                        Register
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import bgImage from '@/assets/bgregister.jpg'
</script>

<style scoped>
</style>