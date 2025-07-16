import { FaGraduationCap, FaHome, FaStar } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

type MenuButton = {
  label: string;
  link: string;
  icon: React.ReactNode;
  desktop: boolean;
}

const MenuButtons: MenuButton[] = [
  {
    label: 'Home',
    link: '/',
    icon: <FaHome />,
    desktop: true
  },
  {
    label: 'Carreiras',
    link: '/carrears',
    icon: <FaGraduationCap />,
    desktop: true
  },
  {
    label: 'Cursos',
    link: '/courses',
    icon: <FaGraduationCap />,
    desktop: true
  },
  {
    label: 'Favoritos',
    link: '/favorites',
    icon: <FaStar />,
    desktop: true
  },
  {
    label: 'Perfil',
    link: '/profile',
    icon: <IoPerson />,
    desktop: false
  }
];

export default MenuButtons;