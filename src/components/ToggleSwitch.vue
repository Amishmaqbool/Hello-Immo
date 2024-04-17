<template>
    <div class="inline-flex rounded-full bg-white py-1 pl-1 pr-1 shadow-sm">
      <button
        :class="isForSale ? 'bg-red-600 text-white' : 'text-gray-600 bg-white'"
        class="px-4 py-2 rounded-full focus:outline-none transition-colors"
        @click="toggle('forSale')"
      >
        TE KOOP
      </button>
      <button
        :class="!isForSale ? 'bg-red-600 text-white' : 'text-gray-600 bg-white'"
        class="px-4 py-2 rounded-full focus:outline-none transition-colors"
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
  