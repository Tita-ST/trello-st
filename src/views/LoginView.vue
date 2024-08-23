<script setup>
</script>


<template>
    <div class="relative min-h-screen bg-cover bg-center bg-[url(@/assets/bglogin.jpg)]"> 
        <!-- component -->
        <div class="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <div class="relative z-10">
            <body class="font-mono bg-gray-400">
                <!-- Container -->
                    
                 <div>
                     <div class="container mx-auto">
                         <div class="flex justify-center px-6 ">
                             <!-- Row -->
                             <div class="w-full xl:w-3/4 lg:w-11/12 flex justify-center items-center min-h-screen ">
                                 <!-- Col -->
                                 <!-- <div class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                                     style="background-image: url('https://source.unsplash.com/K4mSJ7kc0As/600x800')"></div> -->
                                 <!-- Col -->
                                 <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg ">
                                     <h3 class="pt-4 text-2xl text-green-500 text-center">Welcome Back!</h3>
                                     <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                         <div class="mb-4">
                                             <label class="block mb-2 text-sm font-bold text-gray-700" for="username">
                                                 Username
                                             </label>
                                             <input
                                                 class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                 id="username" type="text" placeholder="Username" />
                                         </div>
                                         <div class="mb-4">
                                             <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                                                 Password
                                             </label>
                                             <input
                                                 class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                 id="password" type="password" placeholder="******************" />
                                             <p class="text-xs italic text-red-500">Please choose a password.</p>
                                         </div>
                                         <div class="mb-4">
                                             <input class="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                                             <label class="text-sm" for="checkbox_id">
                                                 Remember Me
                                             </label>
                                         </div>
                                         <div class="mb-6 text-center">
                                             <button
                                                 class="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                                 type="button">
                                                 Sign In
                                             </button>
                                         </div>
                                         <hr class="mb-6 border-t" />
                                         <div class="text-center">
                                             <a class="inline-block text-sm text-gray-500 align-baseline hover:text-green-400"
                                                 href="#">
                                                 Create an Account!
                                             </a>
                                         </div>
                                         <div class="text-center">
                                             <a class="inline-block text-sm text-gray-500 align-baseline hover:text-green-400"
                                                 href="#">
                                                 Forgot Password?
                                             </a>
                                         </div>
                                     </form>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
            </body>
        </div>
    </div>
</template>


<style scoped></style>
