<template>
  <div>
    <div v-if="!isLink" class="is-flex is-align-items-center">
      <feather-icon
        :style="{ color: iconColor }"
        :icon="icon"
        class="mr-2"
        :size="iconSize"
      />
      <span
        class="font-size-14 is-flex is-align-items-center is-justify-content-center"
      >
        {{ text }}
      </span>
    </div>
    <a v-else :href="linkTo" class="is-flex is-align-items-center">
      <feather-icon
        :style="{ color: iconColor }"
        :icon="icon"
        class="mr-2"
        :size="iconSize"
      />
      <span
        :style="{ color: linkColor }"
        class="font-size-14 is-flex is-align-items-center is-justify-content-center"
      >
        {{ text }}
      </span>
    </a>
  </div>
</template>

<script>
import FeatherIcon from "@/components/commons/FeatherIcon";
export default {
  name: "IconWithText",
  props: {
    icon: {
      type: String,
      required: true,
    },
    iconColor: {
      type: String,
      required: false,
      default: "",
    },
    text: {
      type: String,
      required: true,
    },
    iconSize: {
      type: String,
      required: false,
      default: "14",
    },
    isLink: {
      type: Boolean,
      required: false,
      default: false,
    },
    linkTo: {
      type: String,
      required: false,
      default: "",
    },
    linkColor: {
      type: String,
      required: false,
      default: "",
    },
  },
  components: {
    FeatherIcon,
  },
};
</script>

<style scoped>
.font-size-14 {
  font-size: 14px !important;
}
</style>
