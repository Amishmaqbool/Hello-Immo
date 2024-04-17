<script setup>
import ToggleSwitch from './ToggleSwitch.vue';
</script>

<template>
    <div  class="container mx-auto pt-[38px]">
        <div class="flex justify-between">
            <div class="flex gap-[18px]">
                <img src="/Logo.svg" alt="">
                <ToggleSwitch />
            </div>

            <div class="z-50 flex items-center gap-[43px]">
                <p class="font-medium text-[24px] text-[#023047] cursor-pointer">Panden te koop</p>
                <p class="font-medium text-[24px] text-[#023047] cursor-pointer">Hypotheeklening</p>
                <div class="px-7 py-3 flex items-center gap-3 rounded-full cursor-pointer bg-[#034465]">
                    <p class="font-semibold text-[22px] text-white">Contacteer ons</p>
                    <img src="/ArrowRightWhite.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>