import {
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconUserPlus,
  IconUser,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Inicio",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/dashboard/admin",
  },
  {
    navlabel: true,
    subheader: "Info",
  },
  {
    id: uniqueId(),
    title: "Usuarios",
    icon: IconUser,
    href: "/dashboard/admin/informacion/usuarios",
  },
  {
    navlabel: true,
    subheader: "Auth",
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/campus-virtual-login",
  },
  {
    id: uniqueId(),
    title: "Registrar",
    icon: IconUserPlus,
    href: "/dashboard/admin/action/crear-usuario",
  },
  {
    navlabel: true,
    subheader: "REGRESAR",
  },
  {
    id: uniqueId(),
    title: "Inicio",
    icon: IconMoodHappy,
    href: "/",
  },
];

export default Menuitems;
