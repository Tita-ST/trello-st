<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';


</script>
<template>
    <div class="border-2 p-2 rounded-t-lg w-[98%]">
        <div>
            <div class=" flex items-center  my-4">
                <p>Checklist <span class="font-thin">(0/0)</span></p>
            </div>


            <div class="flex justify-between items-center border-b p-3 border mb-1">
                <div class="flex items-center  ">
                    <input type="checkbox" id="example"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
                    <label for="example" class="ml-2 text-sm font-medium text-gray-900">Option 1</label>
                </div>
                <Icon icon="mingcute:user-add-fill" />
            </div>
          
            




            <div class=" justify-between p-3 flex items-center border-t ">
                <Icon icon="gala:add" />
                <input class="!border-none w-[92%] ml-2" type="text" placeholder="New element of checklist">
                <Icon icon="mingcute:user-add-fill" />
            </div>
        </div>
    </div>
</template>
<style scoped></style>