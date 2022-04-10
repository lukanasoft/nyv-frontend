<template>
  <section class="is-flex is-align-items-center is-justify-content-center login-section">
      <div style="max-width: 336px; overflow: hidden">
        <div
            class="column is-flex is-align-items-center is-justify-content-center mb-4"
        >
            <img
              :src="require('@/assets/logo.png')"
              alt="N&V logo"
              class="mr-3"
            />
            <h3 class="logo">MULTIMARCAS</h3>
        </div>
        <div>
            <b-field
                class="has-text-left"
                label="Email"
            >
                <b-input
                    custom-class="has-background-gray"
                    type="email" 
                    placeholder="Email"
                    v-model="email"
                    required
                    :disabled="loading"
                    ref="email"
                />
            </b-field>
            <b-field
                class="has-text-left" 
                label="Password"
            >
                <b-input
                    custom-class="has-background-gray"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                    :disabled="loading"
                    required
                    ref="password"
                />
            </b-field>

            <b-button 
                class="button-red w-100"
                style="width: 100%"
                :disabled="loading"
                @click="login"
            >
                Iniciar sesion
            </b-button>
        </div>
      </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    computed: {
        ...mapState({
            loading: state => state.AuthStore.loading,
            error: state => state.AuthStore.error,
        }),
    },
    created() {
        this.$store.commit("LayoutsStore/SET_LAYOUT", "LoginLayout");
    },
    methods: {
        async login() {
            const emailValid = this.$refs.email.checkHtml5Validity();
            const passwordValid = this.$refs.password.checkHtml5Validity();
            if (emailValid && passwordValid) {
                try {
                    const response = await this.$store.dispatch("AuthStore/login", {
                        email: this.email,
                        password: this.password,
                    });
                    if (response instanceof Error) {
                        this.$buefy.toast.open({
                            duration: 5000,
                            message: this.error,
                            position: 'is-bottom',
                            type: 'is-danger'
                        })
                    } else if(response.status === 200) {
                        this.$router.push({ name: 'Dashboard' });
                    }
                } catch(error) {
                    throw error;
                }
            }
        },
    },
}
</script>

<style scoped>
.logo {
    font-size: 36px;
    font-weight: 600;
}
.login-section {
    height: 100vh;
    overflow-y: hidden;
}
</style>
<style> 
.has-background-gray {
    background: #EBF3F6 !important;
}
</style>