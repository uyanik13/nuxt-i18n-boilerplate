<template>
  <div class="bg-gray-200 p-2 flex items-start justify-center">
    <div class="w-4/12 py-10 px-5 md:px-10">
      <div class="text-center mb-10">
        <h1 class="font-bold text-3xl text-gray-900">
          {{ $t("Contact Form") }}
        </h1>
      </div>
      <div>
        <div class="flex -mx-3">
          <div class="w-full px-3 mb-5">
            <label for="" class="text-xs font-semibold px-1">{{
              $t("Name")
            }}</label>
            <div class="flex">
              <div
                class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
              >
                <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
              </div>
              <input
                v-model="form.name"
                type="text"
                class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="ogur"
              />
            </div>
          </div>
        </div>
        <div class="flex -mx-3">
          <div class="w-full px-3 mb-5">
            <label for="" class="text-xs font-semibold px-1">{{
              $t("Email")
            }}</label>
            <div class="flex">
              <div
                class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
              >
                <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
              </div>
              <input
                v-model="form.email"
                type="email"
                class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="johnsmith@example.com"
              />
            </div>
            <span class="text-3 text-red-600">{{ this.msg["email"] }}</span>
          </div>
        </div>
        <div class="flex -mx-3">
          <div class="w-full px-3 mb-6">
            <label for="" class="text-xs font-semibold px-1">{{
              $t("Phone")
            }}</label>
            <div class="flex">
              <div
                class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
              >
                <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
              </div>
              <input
                v-model="form.phoneNumber"
                type="text"
                class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="0545xxxxxxxx"
              />
            </div>
            <span class="text-3 text-red-600">{{ this.msg["phone"] }}</span>
          </div>
        </div>
        <div class="flex -mx-3">
          <div class="w-full px-3 mb-6">
            <label for="" class="text-xs font-semibold px-1">{{
              $t("Country")
            }}</label>
            <div class="flex">
              <v-select
                v-model="form.country_code"
                class="w-full bg-white"
                :autocomplete="`on`"
                :options="countryList"
                :reduce="(option) => option.id"
                :getOptionLabel="(option) => option.name"
              >
              </v-select>
            </div>
          </div>
        </div>
        <div class="flex -mx-3">
          <div class="w-full px-3 mb-6">
            <label for="" class="text-xs font-semibold px-1">{{
              $t("Description")
            }}</label>
            <div class="flex">
              <textarea
                v-model="form.description"
                class="w-full bg-white rounded-lg p-2"
              />
            </div>
          </div>
        </div>
        <div class="flex -mx-3">
          <div class="w-full px-3 mb-5">
            <button
              @click="sendForm"
              class="block w-full max-w-xs mx-auto bg-secondary hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
            >
              {{ $t("Send") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: null,
        email: null,
        phoneNumber: null,
        country_code: null,
        description: null,
      },
      msg: [],
      countryList: [
        { id: "TR", name: this.$i18n.t("Turkey") },
        { id: "US", name: this.$i18n.t("United States of America") },
        { id: "GB", name: this.$i18n.t("United Kingdom") },
        { id: "DE", name: this.$i18n.t("Germany") },
        { id: "SE", name: this.$i18n.t("Sweden") },
        { id: "KE", name: this.$i18n.t("Kenya") },
        { id: "BR", name: this.$i18n.t("Brazil") },
        { id: "ZW", name: this.$i18n.t("Zimbabwe") },
      ],
    };
  },
  methods: {
    validateEmail(value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "Invalid Email Address";
      }
    },
    validatePhone(value) {
      if (value.length < 10 || value.length > 11) {
        //simpe condition
        this.msg["phone"] = "Invalid Phone Number";
      } else {
        this.msg["phone"] = "";
      }
    },
    sendForm() {
      console.log(this.form);
    },
  },
  watch: {
    "form.email"(value) {
      this.form.email = value;
      this.validateEmail(value);
    },
    "form.phoneNumber"(value) {
      this.form.phoneNumber = value;
      this.validatePhone(value);
    },
  },
  head() {
    return {
      title: "Contact",
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

