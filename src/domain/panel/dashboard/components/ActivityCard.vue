<template>
    <div style="max-width: 300px" class="activity-card">
        <p class="activity-card-title">
            {{title}}
        </p>
        <div class="is-flex is-align-items-end is-justify-content-space-between mt-4" style="width: 100%">
            <img :src="require(`@/assets/images/dashboard/${image}`)" alt="">
            
            <router-link
                :to="to"
                style="background: #0992CD; color: white; width: 50px !important; height: 50px !important; border-radius: 50%"
                class="is-flex is-align-items-center is-justify-content-center is-clickable"
            >
                <feather-icon
                    size="20"
                    icon="ChevronRightIcon"
                    class="cursor-pointer"
                />
            </router-link>


        </div>
    </div>
</template>

<script>
import FeatherIcon from "@/components/commons/FeatherIcon.vue"

export default {
    components: { FeatherIcon },
    name: 'ActivityCard',
    props: {
        title: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        to: {
            type: Object,
            required: true
        },  
    },
    data() {
        return {
            //
        }
    },
    computed: {
        //
    },
    methods: {
        //
    }

}
</script>

<style scoped>
.activity-card {
    background-color: white;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
}
.activity-card-title {
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    inline-size: 150px;
    overflow-wrap: break-word;
}
</style>