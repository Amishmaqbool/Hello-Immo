<template>
  <div class="max-w-[1640px] mx-auto bg-white rounded-[20px] py-9 px-10">
    <div>
      <ToggleSwitch />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import ToggleSwitch from "./ToggleSwitch.vue"; // Ensure the path is correct

export default {
  name: "SearchBanner",
  components: {
    ToggleSwitch,
  },
};
</script>
