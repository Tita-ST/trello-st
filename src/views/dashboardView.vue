<script setup>
import Modal from '@/components/Modal.vue';
import Layout from '@/layouts/layout.vue';
</script>
<template>
    <Layout>
        <div>
            <div>
                <div class="mb-20">
                    <p class="mb-4">Espace d'invité</p>
                    <div class="flex flex-wrap gap-4 items-center text-white font-semibold">
                        <div
                            class="flex justify-center items-center rounded-md w-[250px] h-[115px] bg-[url('https://img.freepik.com/photos-gratuite/sommet-montagne-enneige-sous-ia-generative-majeste-galaxie-etoilee_188544-9650.jpg?size=626&ext=jpg&ga=GA1.1.1936261018.1724333182&semt=ais_hybrid')]">
                            <p>My project</p>
                        </div>
                        <div
                            class="flex justify-center items-center border rounded-md w-[250px] h-[115px] bg-[url('https://img.freepik.com/photos-gratuite/sommet-montagne-enneige-sous-ia-generative-majeste-galaxie-etoilee_188544-9650.jpg?size=626&ext=jpg&ga=GA1.1.1936261018.1724333182&semt=ais_hybrid')]">
                            <p>projet</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p class="mb-4">Espace de travail</p>
                    <div class="flex flex-wrap gap-4 text-white font-semibold">
                        <div
                            class="flex justify-center items-center border rounded-md w-[250px] h-[115px] bg-[url('https://img.freepik.com/photos-gratuite/sommet-montagne-enneige-sous-ia-generative-majeste-galaxie-etoilee_188544-9650.jpg?size=626&ext=jpg&ga=GA1.1.1936261018.1724333182&semt=ais_hybrid')]">
                            <p>simplimmo</p>
                        </div>
                        <div
                            class="flex justify-center items-center border rounded-md w-[250px] h-[115px] bg-[url('https://img.freepik.com/photos-gratuite/sommet-montagne-enneige-sous-ia-generative-majeste-galaxie-etoilee_188544-9650.jpg?size=626&ext=jpg&ga=GA1.1.1936261018.1724333182&semt=ais_hybrid')]">
                            <p>Port folio</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p class="mt-24 mb-4">Mes projet</p>
                    <div class="flex flex-wrap gap-4 text-white font-semibold">

                        <router-link to="/Tableaux"
                            class="flex justify-center items-center border rounded-md w-[250px] h-[115px] bg-[url('https://img.freepik.com/photos-gratuite/sommet-montagne-enneige-sous-ia-generative-majeste-galaxie-etoilee_188544-9650.jpg?size=626&ext=jpg&ga=GA1.1.1936261018.1724333182&semt=ais_hybrid')]">
                        <p>simplimmo</p>
                    </router-link>
                        <div
                            class="flex justify-center items-center border rounded-md w-[250px] h-[115px] bg-[url('https://img.freepik.com/photos-gratuite/sommet-montagne-enneige-sous-ia-generative-majeste-galaxie-etoilee_188544-9650.jpg?size=626&ext=jpg&ga=GA1.1.1936261018.1724333182&semt=ais_hybrid')]">
                            <p>Create</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </Layout>
</template>
<style scoped></style>