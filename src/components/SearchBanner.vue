<template>
  <div class="max-w-[1640px] mx-auto bg-white rounded-[20px] py-9 px-10">
    <div class="sm:flex items-center justify-between xl:gap-[24px] 2xl:gap-[50px]">
      <ToggleSwitch class="w-[210px] lg:w-[24%] xl:w-[20%] 2xl:w-[18%]" />
            <select
              class="hidden xl:block custom-select rounded-[30px] border-[1.5px] border-[#023047] px-5 py-2 w-[22%] xl:w-[25%] font-[500] text-[20px] text-[#023047]"
              v-model="selected"
            >
              <option disabled value="Gemeente of postcode">Gemeente of postcode</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
              <option value="Option 5">Option 5</option>
            </select>

              <select
                class="hidden xl:block custom-select rounded-[30px] border-[1.5px] border-[#023047] px-5 py-2 w-[11%] xl:w-[13%] font-[500] text-[20px] text-[#023047]"
                v-model="selected2"
              >
                <option disabled value="Huis">Huis</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
              </select>

              <select
                class="hidden xl:block custom-select rounded-[30px] border-[1.5px] sm:mt-0 mt-5 border-[#023047] px-5 py-2 w-[11%] xl:w-[13%] font-[500] text-[20px] text-[#023047]"
                v-model="selected3"
              >
                <option disabled value="Prijis">Prijis</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
              </select>

              <p
                class="hidden xl:block text-[20px] text-[#023047] w-[15%] xl:w-[9%] sm:mt-0 mt-5 sm:text-left text-center"
              >
                Meer filters
              </p>

              <div class="sm:flex items-center gap-[24px]">
                <p
                class="block xl:hidden text-[20px] text-[#023047] w-[95px] xl:w-[9%] sm:mt-0 mt-5 sm:text-left text-center"
              >
                Meer filters
              </p>

              <div class="mt-5 sm:mt-0 xl:w-[17%]">
                <button
                  class="w-[175px] bg-[#034465] text-white font-medium text-[22px] rounded-[25px] px-5 py-2 flex gap-4 items-center"
                >
                  Zoek pand
                  <img src="/Search.svg" alt="MortageFamily" />
                </button>
              </div>
            </div>
    </div>

    <div>
            <select
              class="mt-5 block xl:hidden custom-select rounded-[30px] border-[1.5px] border-[#023047] px-5 py-2 w-[100%] sm:w-[70%] xl:w-[25%] font-[500] text-[20px] text-[#023047]"
              v-model="selectedOption"
            >
              <option disabled value="Gemeente of postcode">Gemeente of postcode</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
              <option value="Option 5">Option 5</option>
            </select>

              <select
                class="mt-5 block xl:hidden custom-select rounded-[30px] border-[1.5px] border-[#023047] px-5 py-2 w-[100%] sm:w-[70%] font-[500] text-[20px] text-[#023047]"
                v-model="selectedOption2"
              >
                <option disabled value="Huis">Huis</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
              </select>

              <select
                class="block xl:hidden custom-select rounded-[30px] border-[1.5px] mt-5 border-[#023047] px-5 py-2 w-[100%] sm:w-[70%] font-[500] text-[20px] text-[#023047]"
                v-model="selectedOption3"
              >
                <option disabled value="Prijis">Prijis</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
              </select>
            </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ToggleSwitch from "./ToggleSwitch.vue"; 

export default {
  name: "SearchBanner",
  components: {
    ToggleSwitch,
  },
};

const selectedOption = ref("");
const selectedOption2 = ref("");
const selectedOption3 = ref("");
</script>
