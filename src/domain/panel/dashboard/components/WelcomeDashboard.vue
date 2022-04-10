<template>
    <section class="has-background-white pt-4 is-flex is-align-items-center is-justify-content-space-around" style="border-radius: 20px">
        <div>
            <img
                :src="require('@/assets/images/dashboard/welcome.png')"
                alt="N&V logo"
                class="mr-3"
            />
        </div>
        <div>
            <h1 class="title has-text-left" style="font-size: 36px">¡Hola, {{user.name}}!</h1>
            <h2 class="subtitle has-text-left" style="max-width: 350px; font-size: 18px">
                Que hoy sea un día productivo. Hay mucho trabajo por hacer, así que ¡Empecemos! 💪
            </h2>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'WelcomeDashboard',
    computed: {
        ...mapState({
            user: state => state.AuthStore.user
        })
    }
}
</script>

<style scoped>

</style>