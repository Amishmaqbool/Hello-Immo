<template>
  <div
    class="inline-flex rounded-full bg-white py-1 pl-1 pr-1 shadow-sm border-[#023047] border border-opacity-[.27]"
  >
    <button
      :class="
        isForSale
          ? 'bg-red-600 text-white'
          : 'text-gray-600 bg-white  opacity-[.30]font-medium text-[24px] text-[#023047] cursor-pointer'
      "
      class="px-4 py-[2px] lg:py-2 rounded-full focus:outline-none transition-colors"
      @click="toggle('forSale')"
    >
      TE KOOP
    </button>
    <button
      :class="
        !isForSale
          ? 'bg-red-600 text-white'
          : 'text-gray-600 bg-white  opacity-[.30]'
      "
      class="px-4 py-[2px] lg:py-2 rounded-full focus:outline-none transition-colors"
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

<style scoped></style>
