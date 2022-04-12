export default [
    {
        title: 'Dashboard',
        icon: 'HomeIcon',
        to: {
            path: '/dashboard',
        }
    },
    {
        title: 'Productos',
        icon: 'BoxIcon',
        to: {
            path: '/dashboard/products',
        }
    },
    {
        title: 'Categorias',
        icon: 'ListIcon',
        to: {
            path: '/dashboard/categories',
        }
    },
    {
        title: 'Usuarios',
        icon: 'UserIcon',
        to: {
            path: '/dashboard/users',
        },
        rolesPermissions: [1],
    },
    {
        title: 'Marcas',
        icon: 'BookmarkIcon',
        to: {
            path: '/dashboard/brands',
        },
    }
]