<template>
  <div class="bg-gray-200 min-h-screen p-6">
    <div
      class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans"
    >
      <div class="bg-white rounded-lg shadow p-6 m-4 w-full lg:w-6/12">
        <div class="mb-4">
          <h1 class="text-grey-darkest">{{ $t("Todo List") }}</h1>
          <div class="flex mt-4">
            <input
              v-model="name"
              class="shadow appearance-none border-1 rounded-lg border-primary w-full py-2 px-3 mr-4 text-grey-darker"
              :placeholder="$t('Add Todo')"
            />
            <button
              @click="add"
              class="flex-no-shrink p-2 bg-indigo-400 rounded-lg text-white hover:bg-primary transition duration-250 ease-in-out"
            >
              {{ $t("Add") }}
            </button>
          </div>
        </div>
        <div>
          <div
            class="flex mb-4 items-center"
            v-for="item in todos"
            :key="item.id"
          >
            <p
              class="w-full text-grey-darkest"
              v-bind:class="{
                'line-through': item.status == 'done' ? true : false,
              }"
            >
              {{ item.name }}
            </p>
            <button
              v-if="item.status == 'active'"
              @click="updateStatus(item.id, 'done')"
              class="flex-no-shrink p-2 bg-green-600 rounded-lg text-white hover:bg-indigo-600 transition duration-250 ease-in-out mr-1"
            >
              {{ $t("Done") }}
            </button>
            <button
              v-if="item.status == 'done'"
              @click="updateStatus(item.id, 'active')"
              class="flex-no-shrink p-2 bg-indigo-600 rounded-lg text-white hover:bg-green-600 transition duration-250 ease-in-out mr-1"
            >
              {{ $t("Active") }}
            </button>
            <button
              @click="remove(item.id)"
              class="flex-no-shrink p-2 bg-red-600 rounded-lg text-white hover:bg-primary transition duration-250 ease-in-out"
            >
              {{ $t("Remove") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  useMeta,
  computed,
  ref,
} from "@nuxtjs/composition-api";

export default defineComponent({
  head: {},
  setup() {
    const name = ref(null);
    const todos = ref([
      {
        id: 1,
        name: "Teach how to use composition api with nuxt ",
        status: "done",
      },
      {
        id: 2,
        name: "Took a vide about compostion api ",
        status: "active",
      },
    ]);

    const updateStatus = (id, status) => {
      let itemIndex = todos.value.findIndex((p) => p.id === id);
      todos.value[itemIndex].status = status;
    };

    const remove = (id) => {
      let itemIndex = todos.value.findIndex((p) => p.id === id);
      todos.value.splice(itemIndex, 1);
    };

    const add = () => {
      let obj = {
        id: todos.value.length + 1,
        name: name.value,
        status: "active",
      };
      console.log(obj);
      todos.value.push(obj);
    };

    return {
      todos,
      updateStatus,
      remove,
      add,
      name,
    };
  },
});
</script>

