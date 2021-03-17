<template>
  <header class="block bg-white font-poppins">
    <div id="header" class="bg-white h-15 w-full border-b border-gray-200">
      <div
        class="container mx-auto sm:px-2 lg:px-24 py-5 mb-2 flex items-center justify-between border-b-default lg:border-none border-gray-300"
      >
        <!-- LOGO -->
        <div id="logo" class="flex w-32 lg:w-64 mx-8">
          <fa
            :icon="['fa', 'heart']"
            class="mt-1 mx-2 hidden sm:hidden md:hidden lg:flex"
          />
          <span>HomePage</span>
        </div>

        <div
          id="quickMenu2"
          class="lg:w-3/12 sm:w-full hidden sm:hidden md:hidden lg:block"
        >
          <div class="flex">
            <ul class="flex mt-1">
              <nuxt-link
                class="mx-2 text-indigo-600"
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
                >{{ locale.name }}</nuxt-link
              >
              <li v-for="item in menuItems" :key="item.id" class="mx-1">
                <a :href="item.slug" class="hover:text-indigo-500">{{
                  $t(item.title)
                }}</a>
              </li>
            </ul>

            <div
              v-if="user"
              @mouseover="showAuthUserMenu = true"
              class="flex bg-indigo-500 text-white rounded-lg px-2 py-1 mx-2"
            >
              <p>{{ user.email }}</p>
              <fa :icon="['fa', 'angle-down']" class="mx-1 w-8 h-6" />
            </div>

            <button
              v-else
              @click="showLoginModal = true"
              href="#"
              class="bg-primary text-white rounded-lg px-2 py-1 hover:bg-indigo-500 mx-2"
            >
              {{ $t("Login") }}
            </button>
          </div>
          <div
            class="block absolute ml-28 bg-gray-100 p-3 rounded-lg w-44"
            v-if="showAuthUserMenu"
            @mouseleave="showAuthUserMenu = false"
          >
            <a @click="logout">{{ $t("Logout") }}</a>
          </div>
        </div>

        <div id="mobile-hamburger" class="block sm:block md:block lg:hidden">
          <fa
            @click="isShowMobileMenu = true"
            :icon="['fa', 'bars']"
            class="w-10 h-10"
          />
        </div>
      </div>
    </div>

    <login-modal
      @closeLoginModal="closeLoginModal"
      :showModal="showLoginModal"
    />

    <mobile-menu
      @closeSideCart="closeMobileMenu"
      :showSidebar="isShowMobileMenu"
      :menuItems="menuItems"
    />
  </header>
</template>
<script>
import MobileMenu from "./header/MobileMenu.vue";
import LoginModal from "@/components/widgets/login-modal";

export default {
  name: "Header",
  components: {
    MobileMenu,
    LoginModal,
  },
  data() {
    return {
      isShowMobileMenu: false,
      showLoginModal: false,
      showAuthUserMenu: false,
      menuItems: [
        {
          id: 1,
          title: "Home",
          slug: "/",
        },
        {
          id: 2,
          title: "Contact",
          slug: "contact",
        },
      ],
    };
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },

  watch: {},
  methods: {
    click() {
      console.log("clicked");
    },
    closeLoginModal(e) {
      this.showLoginModal = e;
    },
    closeMobileMenu(e) {
      this.isShowMobileMenu = e;
    },
    logout() {
      const that = this;
      return this.$store.dispatch("auth/logout").then((response) => {
        that.$notiflix.Notify.Success(this.$i18n.t("Logout Successfull"), {
          timeout: 600,
          clickToClose: true,
        });
      });
    },
  },

  mounted() {},
  created() {},
};
</script>
