<template>
  <div class="box-icon">
    <object type="image/svg+xml" :data="svgData" class="icon-svg" />
    <span class="text-size">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "BoxIcon",
  props: {
    svgData: {
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.text-size {
  font-size: 14px !important;
  font-weight: 800 !important;
}
.box-icon {
  width: 130px;
  height: 120px;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: 600;
  transition: 0.5s;
  padding: 15px;
}
.icon-svg {
  margin-bottom: 10px;
  transition: 0.5s;
}
.box-icon:hover {
  color: white !important;
}
.box-icon:hover > .icon-svg {
  filter: invert(100%);
}
</style>
