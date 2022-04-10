<template>
    <div>
        <welcome-dashboard />
        <activities-cards />
    </div>
</template>

<script>
import WelcomeDashboard from '../components/WelcomeDashboard.vue'
import ActivitiesCards from '../components/ActivitiesCards.vue'
export default {
    name: 'Dashboard',
    components: {
        WelcomeDashboard,
        ActivitiesCards
    },
    created() {
        this.$store.commit("LayoutsStore/SET_LAYOUT", "PanelLayout");
    },

}
</script>

<style>

</style>