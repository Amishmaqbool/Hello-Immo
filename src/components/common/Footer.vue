<script setup>
import ToggleSwitch from "../ToggleSwitch.vue";
</script>

<template>
  <div>
    <div class="bg-[#F4F4F4] rounded-t-[60px]">
      <div class="px-5 md:px-6 lg:px-0 2xl:max-w-[1640px] mx-auto container">
        <div class="flex flex-col lg:flex-row justify-between">
          <div class="pt-[60px] lg:pt-[90px]">
            <a href="/">
              <img
                class="mb-8 cursor-pointer h-12 h-[60px] w-64 lg:w-full"
                src="/Logo.svg"
                alt="Logo"
              />
            </a>
            <ToggleSwitch />
          </div>
          <div
            class="flex flex-col sm:flex-row xl:grid gap-8 sm:gap-8 md:gap-24 lg:gap-[50px] xl:gap-[70px] grid-cols-3 pt-[35px] md:pt-[75px] lg:pt-[105px]"
          >
            <div class="text-[#023047] leading-tight">
              <h6 class="font-medium text-[20px] lg:text-[24px] text-[#023047]">
                Menu
              </h6>
              <p
                class="font-normal text-4 lg:text-[20px] pt-[15px] cursor-pointer text-[#023047] py-1"
              >
                Nieuws
              </p>
              <p
                class="font-normal text-4 lg:text-[20px] cursor-pointer text-[#023047] py-1"
              >
                Over ons
              </p>
              <p
                class="font-normal text-4 lg:text-[20px] cursor-pointer text-[#023047] py-1"
              >
                Contact
              </p>
            </div>

            <div class="text-[#023047] leading-tight">
              <h6 class="font-medium text-[20px] lg:text-[24px] text-[#023047]">
                Panden te koop
              </h6>
              <p
                class="font-normal text-4 lg:text-[20px] pt-[15px] cursor-pointer text-[#023047] py-1"
              >
                Huis
              </p>
              <p
                class="font-normal text-4 lg:text-[20px] cursor-pointer text-[#023047] py-1"
              >
                Appartement
              </p>
              <p
                class="font-normal text-4 lg:text-[20px] cursor-pointer text-[#023047] py-1"
              >
                Nieuwbouwproject
              </p>
              <p
                class="font-normal text-4 lg:text-[20px] cursor-pointer text-[#023047] py-1"
              >
                Kantoor
              </p>
            </div>

            <div class="text-[#023047]">
              <h6
                class="pr-0 lg:pr-[40px] font-medium text-[20px] lg:text-[24px]"
              >
                Hypotheeklening
              </h6>
            </div>
          </div>
        </div>
        <hr class="h-[2px] mb-5 bg-[#7f939e] mt-[100px] lg:mt-[150px] opacity-50" />
        <div class="pb-[20px] flex justify-between flex-wrap items-center">
          <div class="flex gap-[37px]">
            <p
              class="font-normal text-4 lg:text-[20px] text-[#023047] cursor-pointer opacity-[0.50]"
            >
              Privacy policy
            </p>
            <p
              class="font-normal text-4 lg:text-[20px] text-[#023047] cursor-pointer opacity-[0.50]"
            >
              Cookiestatement
            </p>
          </div>
          <p
            class="font-normal text-4 lg:text-[20px] text-[#023047] opacity-[0.50]"
          >
            Madeby
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>
