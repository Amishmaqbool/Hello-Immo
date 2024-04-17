<script setup>
import ToogleSwitch from "../components/ToggleSwitch.vue";
</script>
<template>
  <div>
    <div class="mt-[160px] bg-[#F4F4F4] rounded-t-[60px]">
      <div class="container mx-auto">
        <div class="flex justify-between">
        <div class="pt-[90px]">
          <img class="mb-8 cursor-pointer" src="/Logo.svg" alt="Logo" />
          <ToogleSwitch />
        </div>
          <div class="grid gap-[70px] grid-cols-3 pt-[105px]">
            <div class="text-[#023047] leading-tight">
              <h6 class="font-medium text-[24px]">Menu</h6>
              <p class="font-medium text-[20px] pt-[15px] cursor-pointer">
                Nieuws
              </p>
              <p class="font-medium text-[20px] cursor-pointer">Over ons</p>
              <p class="font-medium text-[20px] cursor-pointer">Contact</p>
            </div>

            <div class="text-[#023047] leading-tight">
              <h6 class="font-medium text-[24px]">Panden te koop</h6>
              <p class="font-medium text-[20px] pt-[15px] cursor-pointer">
                Huis
              </p>
              <p class="font-medium text-[20px] cursor-pointer">Appartement</p>
              <p class="font-medium text-[20px] cursor-pointer">
                Nieuwbouwproject
              </p>
              <p class="font-medium text-[20px] cursor-pointer">Kantoor</p>
            </div>

            <div class="text-[#023047]">
              <h6 class="pr-[40px] font-medium text-[24px]">Hypotheeklening</h6>
            </div>
          </div>
        </div>

        <div class="pt-[150px] pb-[30px] flex justify-between items-center">
          <div class="flex gap-[37px]">
            <p
              class="font-normal text-[20px] text-[#023047] cursor-pointer opacity-[0.50]"
            >
              Privacy policy
            </p>
            <p
              class="font-normal text-[20px] text-[#023047] cursor-pointer opacity-[0.50]"
            >
              Cookiestatement
            </p>
          </div>
          <p class="font-normal text-[20px] text-[#023047] opacity-[0.50]">
            Madeby
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
