<template>
  <div
    id="side-cart"
    v-show="sidebarOpen"
    class="z-90 min-h-screen font-poppins bg-white bg-opacity-95 top-0 right-0 w-92 text-secondary absolute lg:fixed"
  >
    <div class="flex justify-between mt-4 px-3 border-b-1 border-gray-200">
      <button
        @click="sidebarOpen & $emit('closeSideCart', false)"
        classs="focus:outline-none focus:bg-black "
      >
        <fa
          :icon="['fas', 'window-close']"
          class="pb-2 text-8 hover:text-primary"
        />
      </button>
    </div>

    <div class="grid w-full px-8 my-6 font-poppins">
      <ul class="mt-1">
        <li v-for="item in menuItems" :key="item.id" class="mx-1">
          <a :href="item.slug" class="hover:text-indigo-500">{{
            item.title
          }}</a>
        </li>
        
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  props: {
    showSidebar: {
      type: Boolean,
      default: false,
    },
    menuItems: {
      type: Array,
      default: false,
    },
  },

  computed: {
    sidebarOpen() {
      return this.showSidebar;
    },
  },
  methods: {},
  data() {
    return {};
  },
};
</script>
<style>
</style>

