<template>
    <div
        :class="{
            '2xl:max-w-[1640px] container px-5 sm:px-0 sm:mx-auto': true,
            'pt-[30px]': !isSearchPage,
            'py-[20px]': isSearchPage
        }">
        <nav>
            <div class="xl:flex justify-between">
                <div class="flex justify-between xl:gap-[18px] items-center">
                    <router-link :to="{ name: 'home', params: '/' }">
                        <img src="/Logo.svg" alt="" class="sm:w-auto w-[200px]" />
                    </router-link>

                    <div class="z-50 flex gap-2 items-center">
                        <div class="sm:block hidden">
                            <ToggleSwitch />
                        </div>
                        <div class="xl:hidden">
                            <button class="p-2" @click="toggleMobileMenu">
                                <img class="h-6 w-6" src="/menu.png" alt="Menu" />
                            </button>
                        </div>
                    </div>
                </div>

                <div class="z-50 xl:block hidden my-auto">
                    <div class="flex items-center gap-4 2xl:gap-[43px]">
                        <router-link
                            class="font-medium text-base hover:border-b-[3px] hover:border-red text-darkblue cursor-pointer"
                            :class="{ 'border-b-[3px] border-red': isSearchPage }"
                            :to="{ name: 'search', params: '/search' }">
                            Panden te koop
                        </router-link>
                        <p
                            class="font-medium text-base hover:border-b-[3px] hover:border-red text-darkblue cursor-pointer">
                            Hypotheeklening
                        </p>
                        <div class="px-6 py-2 flex items-center gap-3 rounded-full cursor-pointer bg-blue">
                            <p class="font-semibold text-sm text-white">Contacteer ons</p>
                            <img src="/ArrowRightWhite.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <div
            class="fixed inset-y-0 left-0 z-40 w-64 transform bg-white overflow-auto transition-transform duration-300 ease-in-out"
            :class="{
                '-translate-x-full': !isMobileMenuOpen,
                'translate-x-0': isMobileMenuOpen
            }">
            <button class="absolute top-2 right-4 p-2 rounded-full border border-black mb-5" @click="toggleMobileMenu">
                <img class="h-4 w-4" src="/CloseIcon.svg" alt="Close" />
            </button>
            <ul class="mt-16 space-y-4">
                <div class="px-5">
                    <img src="/Logo.svg" alt="" />
                </div>
                <li>
                    <router-link to="/search" class="block px-4 py-2 text-xs font-medium text-darkblue">
                        Panden te koop
                    </router-link>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 text-xs font-medium text-darkblue">Hypotheeklening</a>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 text-xs font-medium text-darkblue">Contacteer ons</a>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 text-xs font-medium text-darkblue">Nieuws</a>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 text-xs font-medium text-darkblue">Over ons</a>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 text-xs font-medium text-darkblue flex gap-2 items-center">
                        <img src="/FeatherUser.svg" width="20" height="20" alt="stars" />
                        Inloggen
                    </a>
                </li>
                <div class="md:flex p-4 items-center">
                    <h1 class="text-xsm text-darkblue font-bold opacity-70">4,8</h1>
                    <p class="text-darkblue font-normal opacity-70 sm:pt-0 pt-2">(Google reviews)</p>
                    <div class="md:pl-4 sm:pt-0 pt-2">
                        <img src="/BannerStars.svg" width="50" height="30" alt="stars" />
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import ToggleSwitch from './ToggleSwitch.vue';

export default {
    name: 'AppNavbar',
    components: {
        ToggleSwitch
    },
    setup() {
        const isMobileMenuOpen = ref(false);
        const route = useRoute();
        const isSearchPage = computed(() => route.path === '/search');

        const toggleMobileMenu = () => {
            isMobileMenuOpen.value = !isMobileMenuOpen.value;
            document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : 'visible';
        };

        return {
            isMobileMenuOpen,
            toggleMobileMenu,
            isSearchPage
        };
    }
};
</script>

<style scoped>
nav {
    background-color: #fff;
}

.dropdown {
    transition: transform 0.3s ease-in-out;
}
</style>
