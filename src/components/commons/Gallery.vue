<template>
    <b-carousel :indicator-inside="false">
        <b-carousel-item v-for="(item, i) in images" :key="i">
            <b-image class="image" :src="getImgUrl(i)" responsive custom-class="ga"></b-image>
        </b-carousel-item>
        <template #indicators="props">
            <b-image class="al image" :src="getImgUrl(props.i)" :title="props.i"></b-image>
        </template>
    </b-carousel>
</template>

<script>
export default {
    props: {
        images: {
            type: Array,
            required: true
        }
    },
    methods: {
      getImgUrl(value) {
          return this.images[value].url;
      }
    }
}
</script>

<style>
.is-active .al img {
    filter: grayscale(0%);
}
.al img {
    filter: grayscale(100%);
}
.ga {
    height: 100px;
    width: 100px;
}
</style>