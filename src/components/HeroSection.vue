<template>
  <div class="bg-white">
    <div>
      <Navbar />
    </div>
    <div class="lg:flex items-center gap-20 2xl:justify-between mt-20 2xl:mt-0">
      <div
        class="2xl:max-w-[700px] px-5 container sm:mx-auto lg:pl-20 2xl:pl-10"
      >
        <h1
          class="text-large sm:text-xxlarge text-darkblue font-[Cabin] leading-[60px] 2xl:w-[100%]"
        >
          Wij helpen je een <br />
          thuis vinden én financieren
        </h1>
        <p class="text-darkblue text-xl pt-10 2xl:w-[720px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>
        <div
          class="bg-primary rounded-[20px] py-[40px] px-[32px] mt-[55px] mb-10 2xl:mb-0"
        >
          <ToggleSwitch />
          <div class="pt-5">
            <select
              v-model="selected"
              class="custom-select rounded-[30px] border-[1.5px] border-darkblue px-5 py-3 w-full font-[500] text-xl text-darkblue"
            >
              <option disabled value="">Gemeente of postcode</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
              <option value="Option 5">Option 5</option>
            </select>

            <div class="sm:flex gap-x-[32px] items-center pt-8">
              <select
                v-model="selected2"
                class="custom-select rounded-[30px] border-[1.5px] border-darkblue px-5 py-3 w-full font-[500] text-xl text-darkblue"
              >
                <option disabled value="">Type</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
              </select>

              <select
                v-model="selected3"
                class="custom-select rounded-[30px] border-[1.5px] sm:mt-0 mt-5 border-darkblue px-5 py-3 w-full font-[500] text-xl text-darkblue"
              >
                <option disabled value="">Prijis</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
              </select>

              <p
                class="text-xl text-darkblue w-full sm:mt-0 mt-5 sm:text-left text-center underline cursor-pointer"
              >
                Meer filters
              </p>
            </div>

            <div class="flex justify-center sm:justify-start">
              <button
                class="bg-blue text-white font-medium text-small rounded-[25px] px-5 py-2 mt-8 flex gap-4 items-center"
              >
                Zoek pand
                <img src="/Search.svg" alt="MortageFamily" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="image-correction lg:mt-[-295px] xl:mt-[-200px] 2xl:mt-[-90px] lg:block hidden w-[940px]"
      >
        <img
          class="bg-transparent lg:max-w-lg xl:max-w-2xl 2xl:max-w-full 2xl:h-auto h-[800px]"
          src="/LuxuryHouse.webp"
          alt="LuxuryHouse"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ToggleSwitch from "./ToggleSwitch.vue";
import Navbar from "./Navbar.vue";
import { ref } from "vue";

const selected = ref("");
const selected2 = ref("");
const selected3 = ref("");
</script>
