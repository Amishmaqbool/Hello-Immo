<template>
  <div class="bg-white">
    <div>
      <Navbar />
    </div>
    <div class="flex items-center justify-between">
      <div class="max-w-[700px] mx-auto pl-20">
        <h1
          class="text-[56px] text-[#023047] font-[Cabin] font-semibold leading-[60px] w-[70%]"
        >
          Wij helpen je een thuis vinden én financieren
        </h1>
        <p class="text-[#023047] text-[20px] pt-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>
        <div class="bg-[#F4F4F4] rounded-[20px] py-[40px] px-[32px] mt-[55px]">
          <ToggleSwitch />
          <div class="pt-5">
            <select
              class="rounded-[30px] border-[1.5px] border-[#023047] px-5 py-3 w-full font-[500] text-[20px] text-[#023047]"
              v-model="selected"
            >
              <option disabled value="">Gemeente of postcode</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
              <option value="Option 5">Option 5</option>
            </select>

            <div class="flex gap-x-[32px] items-center pt-8">
              <select
                class="rounded-[30px] border-[1.5px] border-[#023047] px-5 py-3 w-[200px] font-[500] text-[20px] text-[#023047]"
                v-model="selected"
              >
                <option disabled value="">Type</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
              </select>

              <select
                class="rounded-[30px] border-[1.5px] border-[#023047] px-5 py-3 w-[200px] font-[500] text-[20px] text-[#023047]"
                v-model="selected"
              >
                <option disabled value="">Prijis</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
              </select>

              <p class="text-[20px] text-[#023047]">Meer filters</p>
            </div>

            <button
              class="bg-[#034465] text-white font-medium text-[22px] rounded-[25px] px-7 py-2 mt-8 flex gap-3 items-center"
            >
              Zoek pand
              <img src="/Search.svg" alt="MortageFamily" />
            </button>
          </div>
        </div>
      </div>

      <div class="mt-[-97px] w-[1000px]">
        <img class="bg-transparent" src="/LuxuryHouse.png" alt="LuxuryHouse" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ToggleSwitch from "./ToggleSwitch.vue";
import Navbar from "./Navbar.vue";
import { ref } from "vue";

const selected = ref("");
</script>

<style>
/* Styles specific to this component */
</style>
