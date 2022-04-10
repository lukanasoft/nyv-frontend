<template>
    <section class="mt-5">
        <h2 style="font-size: 32px !important; font-weight: 700 !important" class="has-text-left">¿Qué actividad desea realizar?</h2>
        <div class="grid mt-3">
            <activity-card image="add-product.png" title="Ver productos" :to="{path: '/dashboard/products'}" />
            <activity-card image="edit-category.png" title="Ver categorias" :to="{path: '/dashboard/categories'}" />
            <activity-card image="list-categories.png" title="Gestion de usuarios" :to="{path: '/dashboard/users'}" />
        </div>
    </section>
</template>

<script>
import ActivityCard from './ActivityCard.vue';
export default {
    name: 'ActivitiesCards',
    components: {
        ActivityCard
    }
}
</script>

<style scoped>
.grid {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
}
</style>