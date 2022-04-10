<template>
    <div class="modal-card" style="max-width: 600px">
        <header class="modal-card-head border-0" style="background-color: #0992CD;">
            <p class="modal-card-title has-text-left has-text-white" style="font-weight: 600">Registrar usuario</p>
        </header>
        <section class="modal-card-body">
            <b-field label="Nombre" class="has-text-left">
                <b-input
                    custom-class="has-background-gray"
                    type="text"
                    v-model="user.name"
                    placeholder="Nombre"
                    ref="name"
                    required
                />
            </b-field>
            <b-field label="Email" class="has-text-left">
                <b-input
                    custom-class="has-background-gray"
                    type="email"
                    v-model="user.email"
                    placeholder="Email"
                    ref="email"
                    required
                />
            </b-field>
            <b-field label="Contraseña" class="has-text-left">
                <b-input
                    custom-class="has-background-gray"
                    type="password"
                    v-model="user.password"
                    placeholder="Contraseña"
                    ref="password"
                    required
                />
            </b-field>
            <b-field label="Confirmar contraseña" class="has-text-left">
                <b-input
                    type="password"
                    v-model="user.confirmPassword"
                    custom-class="has-background-gray"
                    placeholder="Password"
                    ref="confirmPassword"
                    required
                />
            </b-field>
        </section>
        <footer class="modal-card-foot has-background-white is-flex is-align-items-center is-justify-content-end">
            <b-button class="button-blue-dashboard is-primary" @click="addCategory">Registrar</b-button>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'AddUserModal',
    data() {
        return {
            user: {
                email: '',
                password: '',
                name: '',
                confirmPassword: '',
            },
        }
    },
    methods: {
        closeModal() {
            this.$emit('close')
        },
        validateForm(){
            //checkHtml5Validity
            const email = this.$refs.email.checkHtml5Validity()
            const password = this.$refs.password.checkHtml5Validity()
            const confirmPassword = this.$refs.confirmPassword.checkHtml5Validity()
            const name = this.$refs.name.checkHtml5Validity()
            if(email && password && confirmPassword && name && this.user.password === this.user.confirmPassword){
                return true
            }
            return false
        },
        async addCategory() {
            if(!this.validateForm()){
                return
            }
            await this.$store.dispatch('UsersStore/register', this.user)
            this.closeModal()
        },
    },
}
</script>

<style scoped>
.modal-card-head, .modal-card-foot {
    border: none;
}
</style>