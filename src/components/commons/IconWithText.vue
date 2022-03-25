<template>
  <div class="is-flex is-align-items-center">
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
