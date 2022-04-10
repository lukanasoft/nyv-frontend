<template>
  <section>
        <div class="is-flex is-align-items-center is-justify-content-start mt-5">
            <b-button class="button-blue-dashboard" @click="openAddUser">Agregar usuario</b-button>
        </div>
        <b-modal
            v-model="addUserMoadalOpen"
            :has-modal-card="true"
            :can-cancel="['outside', 'escape', 'x']"
        > 
                <add-user-modal @close="addUserMoadalOpen = false"/>
        </b-modal>
        <users-table />
  </section>
</template>

<script>
import AddUserModal from "../components/AddUserModal.vue";
import UsersTable from "../components/UsersTable.vue";
export default {
    name: 'Users',
    components: {
        AddUserModal,
        UsersTable
    },
    created() {
        this.$store.commit("LayoutsStore/SET_LAYOUT", "PanelLayout");
    },
    data() {
        return {
            addUserMoadalOpen: false,
        }
    },
    methods: {
        openAddUser() {
            this.addUserMoadalOpen = true;
        },
    },

}
</script>

<style>

</style>