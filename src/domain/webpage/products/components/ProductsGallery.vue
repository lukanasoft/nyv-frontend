<template>
    <b-carousel
        :autoplay="false"
        :indicator="false"
    >
        <b-carousel-item v-for="(item, i) in items" :key="i">
             <ZoomingImage  :src="item.url"></ZoomingImage >
        </b-carousel-item>
    </b-carousel>
</template>

<script>
import ZoomingImage from 'vue-zooming-image'
export default {
    components: {
      ZoomingImage
    },
    props: {
        items: {
            type: Array,
            required: true
        }
    }
}
</script>