<script setup>

</script>

<template>
    <div class="flex justify-center bg-gray-100 text-gray-400 items-center">
        <div class="border w-[50%] p-4 rounded-md  ">
            <div>
                <div class=" my-4 ">
                    <div class="flex justify-between mb-4">
                        <h1 class="text-gray-700 font-semibold">Create a space </h1>
                        <p>x</p>
                    </div>
                    <p> Lorem Lore bg-green-400m ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet
                        consectetur adipisicing elit. Ad, aperiam.</p>
                </div>
                <div class=" my-4 ">
                    <h2 class=" text-gray-700 font-semibold my-3">Name</h2>
                    <input class=" text-center rounded-lg   h-[30px] w-full" placeholder="Name Project" type="text">
                </div>
                <div class=" my-4 ">
                    <h2 class="text-gray-700 font-semibold  my-3">Description
                        <span class="font-thin">(Optional)</span>
                    </h2>
                    <input class="  text-center rounded-lg h-[100px] w-full" placeholder="description of project"
                        type="text">
                </div>
                <div class=" text-gray-700 font-semibold my-4 flex justify-between">
                    <p class="text-center my-3"> Private or public </p>
                    <div class="  border border-green-400  w-[35px] h-[23px] mr-4 rounded-full"></div>
                </div>
                <div class=" text-gray-700 font-semibold my-4 flex justify-between">
                    <p>Share only with:</p>
                    <div class="border border-green-400  w-[23px] h-[23px] mr-4 rounded-full"></div>
                </div>
                <div class="flex justify-end">
                    <Button
                        class="border text-white rounded-md bg-green-500  w-[120px] h-[35px] hover:bg-green-600">Suivant</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>