<template>
  <div
    class="inline-flex rounded-full bg-white py-[3px] pl-[2px] pr-[2px] shadow-sm border-darkblue border-[1.5px] border-opacity-[.34]"
  >
    <button
      :class="
        isForSale
          ? 'bg-red text-white text-xl font-bold'
          : 'text-gray-600 bg-white opacity-[.30] font-medium text-darkblue cursor-pointer'
      "
      class="px-4 py-[2px] lg:py-[.25rem] rounded-full focus:outline-none transition-colors"
      @click="toggle('forSale')"
    >
      TE KOOP
    </button>
    <button
      :class="
        !isForSale
          ? 'bg-red text-white text-xl font-bold'
          : 'text-gray-600 bg-white opacity-[.30] font-medium text-darkblue cursor-pointer'
      "
      class="px-4 py-[2px] lg:py-[.25rem] rounded-full focus:outline-none transition-colors"
      @click="toggle('forRent')"
    >
      TE HUUR
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isForSale: true,
    };
  },
  methods: {
    toggle(type) {
      this.isForSale = type === "forSale";
    },
  },
};
</script>
