<script setup>
import ToggleSwitch from './ToggleSwitch.vue';
</script>

<template>
    <div  class="container mx-auto">
        <div class="flex justify-between">
            <div class="flex gap-[18px]">
                <img src="/Logo.svg" alt="">
                <ToggleSwitch />
            </div>

            <div class="flex items-center gap-[43px]">
                <p>Panden te koop</p>
                <p>Hypotheeklening</p>
                <div class="px-6 py-3 flex items-center gap-3 rounded-3xl bg-[#034465]">
                    <p class="text-white">Contacteer ons</p>
                    <img src="/ArrowRightWhite.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>