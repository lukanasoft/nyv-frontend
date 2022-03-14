import Contact from "@/domain/contact/views/Contact";
export default {
  name: "contact",
  path: "/contacto",
  meta: {
    headerTitle: "Contacto",
    headerImage: require("@/assets/images/header/contacto.png"),
  },
  component: Contact,
};
