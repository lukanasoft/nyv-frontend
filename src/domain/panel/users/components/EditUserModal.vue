<template>
    <div class="modal-card" style="max-width: 600px">
        <header class="modal-card-head border-0" style="background-color: #0992CD;">
            <p class="modal-card-title has-text-left has-text-white" style="font-weight: 600">Editar usuario</p>
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
            <b-field label="Rol" class="has-text-left">
                <b-select
                    expanded
                    custom-class="has-background-gray"
                    type="is-info"
                    v-model="user.role_id"
                    placeholder="Rol"
                    ref="role"
                    required
                > 
                    <option v-for="(rol, index) in roles" :value="rol.id" :key="index">{{rol.name}}</option>
                </b-select>
            </b-field>
            <b-field class="is-flex is-align-items-start">
                <b-checkbox v-model="checkbox" type="is-info">
                    ¿Desea modificar la contraseña? 
                </b-checkbox>
            </b-field>
            <transition name="fade">
                <div v-if="checkbox">
                    <b-field label="Nueva Contraseña" class="has-text-left">
                    <b-input
                        custom-class="has-background-gray"
                        type="password"
                        v-model="user.password"
                        placeholder="Contraseña"
                        ref="password"
                        required
                        password-reveal
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
                            password-reveal
                        />
                    </b-field>
                </div>
            </transition>
        </section>
        <footer class="modal-card-foot has-background-white is-flex is-align-items-center is-justify-content-end">
            <b-button class="button-blue-dashboard is-primary" @click="addCategory">Editar</b-button>
        </footer>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'EditUserModal',
    data() {
        return {
            user: {},
            checkbox: false,
        }
    },
    computed: {
        ...mapState({
            userState: state => state.UsersStore.user,
            roles: state => state.UsersStore.roles,
        }),
    },
    async created() {
        this.user = JSON.parse(JSON.stringify(this.userState))
        this.user.password = ''
        this.user.confirmPassword = ''
        await this.$store.dispatch('UsersStore/getRoles')
    },
    methods: {
        closeModal() {
            this.$emit('close')
        },
        validateForm(){
            const email = this.$refs.email.checkHtml5Validity()
            const name = this.$refs.name.checkHtml5Validity()
            const role = this.$refs.role.checkHtml5Validity()
            if(this.checkbox) {
                const password = this.$refs.password.checkHtml5Validity()
                const confirmPassword = this.$refs.confirmPassword.checkHtml5Validity()
                return  email && password && confirmPassword && name && 
                        this.user.password === this.user.confirmPassword && role
            }
            return email && name && role
        },
        async addCategory() {
            if(!this.validateForm()){
                return
            }
            await this.$store.dispatch('UsersStore/editUser', this.user)
            this.closeModal()
        },
    },
    watch: {
        checkbox(value) {
            if(value){
                this.user.password = ''
                this.user.confirmPassword = ''
            }
        }
    }
}
</script>

<style scoped>
.modal-card-head, .modal-card-foot {
    border: none;
}
</style>