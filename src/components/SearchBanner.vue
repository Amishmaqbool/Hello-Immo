<template>
    <div class="max-w-[1640px] mx-auto bg-white rounded-[20px] py-9 px-10 shadow-md">
        <div class="sm:flex items-center justify-between xl:gap-[24px] 2xl:gap-[40px]">
            <ToggleSwitch class="w-[230px] lg:w-[24%] xl:w-[22%] 2xl:w-[15%]" />
            <select
                v-model="selectedOption"
                class="hidden xl:block rounded-[30px] border-[1.5px] border-darkblue pl-5 py-2 w-[22%] xl:w-[25%] custom-select font-[500] text-xl text-darkblue"
                @change="addTag">
                <option disabled value="">Gemeente of postcode</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
            </select>

            <select
                v-model="selectedOption2"
                class="hidden xl:block custom-select rounded-[30px] border-[1.5px] border-darkblue px-5 py-2 w-[11%] xl:w-[13%] font-[500] text-xl text-darkblue"
                @change="addTag">
                <option disabled value="">Huis</option>
                <option value="huis">huis</option>
                <option value="Option 2">Option 2</option>
            </select>

            <select
                v-model="selectedOption3"
                class="hidden xl:block custom-select rounded-[30px] border-[1.5px] sm:mt-0 mt-5 border-darkblue px-5 py-2 w-[11%] xl:w-[13%] font-[500] text-xl text-darkblue"
                @change="addTag">
                <option disabled value="">Prijis</option>
                <option value="2x parkeer">2x parkeer</option>
                <option value="Option 2">Option 2</option>
            </select>

            <p
                class="hidden xl:block text-xl text-darkblue w-[15%] xl:w-[10%] sm:mt-0 mt-5 sm:text-left text-center underline cursor-pointer">
                Meer filters
            </p>

            <div class="sm:flex items-center gap-[24px]">
                <p
                    class="block xl:hidden text-xl text-darkblue w-[110px] xl:w-[9%] sm:mt-0 mt-5 sm:text-left text-center underline cursor-pointer">
                    Meer filters
                </p>

                <div class="mt-5 sm:mt-0 xl:w-[17%]">
                    <button
                        class="w-[196px] bg-blue text-white font-medium text-sm rounded-[25px] px-6 py-2 flex gap-4 items-center">
                        Zoek pand
                        <img src="/Search.svg" alt="MortageFamily" />
                    </button>
                </div>
            </div>
        </div>

        <div>
            <select
                v-model="selectedOption"
                class="mt-5 block xl:hidden custom-select rounded-[30px] border-[1.5px] border-darkblue px-5 py-2 w-[100%] sm:w-[70%] xl:w-[25%] font-[500] text-xl text-darkblue">
                <option disabled value="">Gemeente of postcode</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
                <option value="Option 5">Option 5</option>
            </select>

            <select
                v-model="selectedOption2"
                class="mt-5 block xl:hidden custom-select rounded-[30px] border-[1.5px] border-darkblue px-5 py-2 w-[100%] sm:w-[70%] font-[500] text-xl text-darkblue">
                <option disabled value="">Huis</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
            </select>

            <select
                v-model="selectedOption3"
                class="block xl:hidden custom-select rounded-[30px] border-[1.5px] mt-5 border-darkblue px-5 py-2 w-[100%] sm:w-[70%] font-[500] text-xl text-darkblue">
                <option disabled value="">Prijis</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
            </select>
        </div>
    </div>
    <div class="flex flex-wrap gap-2 mt-[28px]">
        <div v-if="tags.length > 0" class="flex flex-wrap gap-2">
            <div
                v-for="(tag, index) in tags"
                :key="index"
                class="flex gap-1 items-center bg-SilverSmoke font-medium text-darkblue text-lg px-3 py-1 rounded-[20px] border-[1.5px] border-darkblue"
                @click="removeTag(index)">
                <img class="h-4 w-4 cursor-pointer" src="/CloseIcon.svg" alt="Close" />
                {{ tag }}
            </div>
        </div>
        <div
            class="flex gap-2 items-center bg-blue font-medium text-white text-lg px-3 py-1 rounded-[20px] border-[1.5px] border-darkblue cursor-pointer"
            @click="toggleHeart">
            <img v-if="!isHeartActive" src="../assets/heart-outline.svg" alt="heart" class="h-4 w-4" />
            <img v-else src="../assets/heart-outlineRed.svg" alt="heart" class="h-4 w-4" />
            <p>Bewaar zoekactie</p>
        </div>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import ToggleSwitch from './ToggleSwitch.vue';

const selectedOption = ref('');
const selectedOption2 = ref('');
const selectedOption3 = ref('');
const tags = ref([]);
const isHeartActive = ref(false);

watch(selectedOption, (newValue) => {
    if (newValue) {
        tags.value.push(newValue);
        selectedOption.value = '';
    }
});
watch(selectedOption2, (newValue) => {
    if (newValue) {
        tags.value.push(newValue);
        selectedOption2.value = '';
    }
});
watch(selectedOption3, (newValue) => {
    if (newValue) {
        tags.value.push(newValue);
        selectedOption3.value = '';
    }
});

function removeTag(index) {
    tags.value.splice(index, 1);
}

function toggleHeart() {
    isHeartActive.value = !isHeartActive.value;
}
</script>

<style>
select:focus {
    outline: none;
}
</style>
