<template>
    <div class="inline-flex rounded-full shadow-sm">
      <button
        :class="isForSale ? 'bg-red-600 text-white' : 'text-gray-600 bg-white'"
        class="px-4 py-2 rounded-l-full focus:outline-none transition-colors"
        @click="toggle('forSale')"
      >
        TE KOOP
      </button>
      <button
        :class="!isForSale ? 'bg-red-600 text-white' : 'text-gray-600 bg-white'"
        class="px-4 py-2 rounded-r-full focus:outline-none transition-colors"
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
        this.isForSale = type === 'forSale';
      },
    },
  };
  </script>
  
  <style scoped>
</style>
  