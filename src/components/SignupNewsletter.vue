<template>
  <div class="container mx-auto sm:mb-40 sm:px-0 px-5 xl:w-[1360px] pt-20">
    <div class="bg-blue rounded-[20px]">
      <div class="py-[80px] px-5 sm:px-10 lg:px-[220px] text-center">
        <div class="relative inline-block">
          <h1 class="text-white text-[36px] font-semibold font-[Cabin]">
            Wil jij graag op de hoogte blijven van ons laatste nieuws?
            <div class="2xl:block hidden">
              <img
                width="300"
                height="25"
                src="/HeadingUnderline.svg"
                alt="underline"
                class="xl:block absolute left-1 bottom-1 translate-y-[100%] translate-x-[100%] -translate-x-1/2"
                style="transform: translateX(calc(100% + 7em)) translateY(50%)"
              />
            </div>
          </h1>
        </div>
        <p class="text-[20px] text-white pt-[30px] sm:px-12">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <div class="pt-[40px] sm:flex items-center justify-center gap-[18px]">
          <input
            class="rounded-[30px] px-6 py-2 text-[20px] placeholder-darkblue font-semibold sm:w-[380px]"
            placeholder="E-mailadres"
          />
          <button
            class="text-[white] text-[20px] bg-red px-6 py-2 rounded-full sm:mt-0 mt-4"
          >
            Inschrijven
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
