import Contact from "../views/Contact.vue";
export default {
  name: "contact",
  path: "/contacto",
  meta: {
    headerTitle: "Contacto",
    headerImage: require("@/assets/images/header/contacto.png"),
  },
  component: Contact,
};
