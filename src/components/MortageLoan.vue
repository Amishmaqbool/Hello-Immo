<template>
    <div class="bg-blue lg:rounded-br-[120px]">
        <div
            class="py-[60px] 2xl:max-w-[1640px] container mx-auto sm:px-0 px-5"
            :class="{
                'lg:py-0 2xl:max-w-full min-[2000px]:max-w-[1640px] pr-5': isSearchPage
            }">
            <div class="lg:flex items-center gap-32 2xl:gap-40">
                <div class="lg:w-[40%] 2xl:w-[800px]" :class="{ 'h-full 2xl:w-[950px] relative': isSearchPage }">
                    <div
                        :class="{
                            'opacity-110 absolute bg-gradient-to-r from-transparent via-neutral to-blue h-full w-full':
                                isSearchPage
                        }" />
                    <img
                        src="../assets/MortageFamily.png"
                        alt="MortageFamily"
                        :class="{ hidden: isSearchPage }"
                        width="800"
                        height="532" />
                    <img
                        src="../assets/MortageFamilyS.png"
                        alt="MortageFamily"
                        class="object-cover"
                        :class="{ hidden: !isSearchPage }"
                        width="950"
                        height="532" />
                </div>
                <div
                    class="lg:w-[520px] relative lg:pt-0 pt-5"
                    :class="{ 'py-[60px] lg:pt-[60px] pt-[65px] pr-5': isSearchPage }">
                    <h1 class="text-xlarge text-white font-[Cabin] font-extrabold leading-[50px] relative z-50">
                        Wij helpen je met jouw
                        <span class="z-50"> hypothecaire lening </span>
                    </h1>
                    <img
                        src="/MortageHeadingLine.png"
                        alt="underline"
                        class="w-[394px] mt-[-25px] ml-[-10px] z-0"
                        style="transform: translateY(10%)" />
                    <p class="text-white text-xl pt-[30px]">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea
                    </p>
                    <button
                        class="bg-white text-darkblue font-medium sm:text-sm rounded-[25px] px-6 py-2 mt-[60px] flex gap-2 items-center">
                        Vraag uw hypotheek lening aan
                        <img src="/ArrowRight.svg" alt="MortageFamily" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();
        const isSearchPage = computed(() => route.path === '/search');
        return {
            isSearchPage
        };
    }
};
</script>
