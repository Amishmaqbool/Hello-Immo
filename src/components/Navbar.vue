<template>
    <div  class="2xl:max-w-[1640px] container mx-auto  pt-[38px]">
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
  
        <div class="z-50 flex items-center gap-[43px]">
          <!-- Desktop Menu Items -->
          <p class="font-medium text-[24px] text-[#023047] cursor-pointer hidden xl:block">Panden te koop</p>
          <p class="font-medium text-[24px] text-[#023047] cursor-pointer hidden xl:block">Hypotheeklening</p>
          <div class="px-7 py-3 xl:flex items-center gap-3 rounded-full cursor-pointer bg-[#034465] hidden xl:block">
            <p class="font-semibold text-[22px] text-white">Contacteer ons</p>
            <img src="/ArrowRightWhite.svg" alt="">
          </div>
  
          <!-- Mobile Menu Button -->
          <div class="mb-12 md:mb-0 block xl:hidden flex justify-center items-center w-14 h-14 border border-black cursor-pointer rounded-full" @click="toggleMobileMenu">
            <img class="h-8 w-8" src="/menu.png" alt="">
          </div>
        </div>
      </nav>
  
      <!-- Mobile Menu -->
      <div class="dropdown z-50" :class="{ 'dropdown-after' : isMobileMenuOpen }">
        <ul class="navlist">
          <li class="navlistitem">
            <a href="#">Panden te koop</a>
          </li>
          <li class="navlistitem">
            <a href="#">Hypotheeklening</a>
          </li>
          <li class="navlistitem">
            <a href="#">Contacteer ons</a>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ToggleSwitch from './ToggleSwitch.vue';
  
  const isMobileMenuOpen = ref(false);
  
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
    // Prevent scrolling on the body when the mobile menu is open
    if (isMobileMenuOpen.value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };
  </script>
  
  <style scoped>
  /* Your existing styles */
  .navbar {
    height: 50px;
    background-color: Lightgrey;
    display: flex;
    border-radius: 0px;
  }
  
  .logo,
  .hamburger-wrap {
    width: 100px;
    height: 100%;
    margin-left: 50px;
    margin-right: 50px;
    display: flex;
    align-items: center;
  }
  
  .hamburger-wrap {
    float: right;
    justify-content: flex-end;
  }
  
  .hamburger {
    width: 45px;
    height: 45px;
    background-color: black;
    border-radius: 4px;
  }
  
  .hamburger:focus {
    outline: none;
  }
  
  .hamburger__line,
  .hamburger__middle {
    display: block;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #FFFFFF;
    margin-top: 7px;
    margin-bottom: 7px;
  }
  
  .hamburger__middle {
    width: 20px;
    margin-left: 10px;
  }
  
  .dropdown {
    width: 25%;
    height: 0px;
    background-color: lightgreen;
    transition: height 0.2s ease;
    display: flex;
    justify-content: right;
    overflow: hidden;
  }
  
  .dropdown-after {
    height: calc(50vh - 50px);
    transition: height 0.2s ease;
    display: flex;
    float: right;
  }
  
  .navlist {
    list-style: none;
  }
  
  .navlistitem {
    text-transform: uppercase;
    padding: 20px;
  }
  
  .navlistitem a {
    color: #FFFFFF;
  }
  </style>
  