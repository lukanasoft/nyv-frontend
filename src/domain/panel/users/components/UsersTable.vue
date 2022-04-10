<template>
  <section class="has-background-white p-3 mt-6" style="border-radius: 20px">
      <div class="p-4">
          <div class="grid-table grid-table-header">
              <span>
                  Nombre
              </span>
              <span>
                  Email
              </span>
              <span style="justify-self: center">
                  Acciones
              </span>
          </div>
          <div v-for="(user, index) in users" :key="index" class="grid-table has-background-gray mb-2 grid-table-row" style="border-radius: 10px">
                <span>{{user.name}}</span>
                <span>{{user.email}}</span>
                <div style="justify-self: center" class="is-flex is-align-items-center">
                    <feather-icon icon="Edit2Icon" size="18" class="has-text-info is-clickable"/>
                     <feather-icon v-if="user.id !== currentUser.id" @click="deleteUser(user)" icon="Trash2Icon" size="18" class="ml-4 has-text-danger is-clickable"/>
                </div>
          </div>

      </div>
  </section>
</template>

<script>
import FeatherIcon from '@/components/commons/FeatherIcon.vue'
import {mapState} from 'vuex'
export default {
  components: { FeatherIcon }, 
    name: 'UsersTable',
    computed: {
        ...mapState({
            users: state => state.UsersStore.users,
            currentUser: state => state.AuthStore.user
        })
    },
    created() {
        this.$store.dispatch('UsersStore/getAllUsers')
    },
    methods: {
        async deleteUser(user) {
            const result = await this.$swal({
                title: '¿Estás seguro que desea eliminar este usuario?',
                text: "¡No podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si',
                cancelButtonText: 'No',
            })
            if (result.isConfirmed) {
                this.$store.dispatch('UsersStore/deleteUser', user)
                this.$store.dispatch('UsersStore/getAllUsers')
            }
        }
    }
}
</script>

<style scoped>
.grid-table {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    padding: 10px;
    justify-items: flex-start;

}
.grid-table-header span {
    font-weight: bold;
    font-size: 20px;
}
.grid-table-row span {
    font-size: 16px;
    font-weight: 500;
}
</style>