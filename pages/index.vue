<template>
  <div class="bg-gray-200 min-h-screen p-6">
    {{ $t("Lorem Ipsum") }}
  </div>
</template>

<script>
export default {
  name: "Index",
  head() {
    return {
      title: "Home",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "Contact",
          name: "Contact",
          content: "My custom description",
        },
      ],
    };
  },
};
</script>

