<script lang="ts" setup>
import { ref } from "vue";

const addActive = ref(0);
interface optionType {
  title: string;
}

defineProps<{
  options: optionType[];
}>();
</script>

<template>
  <button
    type="button"
    tabindex="-1"
    class="btn dropdown-toggle btn-light"
    data-bs-toggle="dropdown"
    role="combobox"
    aria-owns="bs-select-2"
    aria-haspopup="listbox"
    aria-expanded="true"
    title="India"
  >
    <div class="filter-option">
      <div class="filter-option-inner">
        <div class="filter-option-inner-inner">{{ options[addActive].title }}</div>
      </div>
    </div>
  </button>
  <div
    class="dropdown-menu"
    style="
      max-height: 158.031px;
      overflow: hidden;
      min-height: 133px;
      position: absolute;
      inset: 0px auto auto 0px;
      margin: 0px;
      transform: translate(0px, 50px);
    "
    data-popper-placement="bottom-start"
  >
    <div
      class="inner show"
      role="listbox"
      id="bs-select-2"
      tabindex="-1"
      aria-activedescendant="bs-select-2-0"
      style="max-height: 138.031px; overflow-y: auto; min-height: 113px"
    >
      <ul class="dropdown-menu inner show" role="presentation" style="margin-top: 0px; margin-bottom: 0px">
        <li :class="addActive == ind ? 'selected active' : ''" v-for="({ title }, ind) in options" :key="ind" @click="addActive = ind">
          <RouterLink
            to="#"
            @click.prevent
            role="option"
            :class="`dropdown-item ${addActive == ind ? 'active selected' : ''}`"
            id="bs-select-2-0"
            tabindex="0"
            aria-setsize="4"
            aria-posinset="1"
            aria-selected="true"
            ><span class="text">{{ title }}</span></RouterLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>
