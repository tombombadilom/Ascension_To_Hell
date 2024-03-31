import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
interface Link {
  name: string;
  link: string;
}

const links: Link[] = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Profile',
    link: '/Profile',
  },
  {
    name: 'Login',
    link: '/Login',
  },
  {
    name: 'Register',
    link: '/Register',
  },
  {
    name: 'Logout',
    link: '/logout',
  },
  {
    name: 'Dashboard',
    link: '/Dashboard',
  },
  {
    name: 'OffresReçues',
    link: '/OffresReçues',
  },
  {
    name: 'Traitement',
    link: '/Traitement',
  },
  {
    name: 'Préférences',
    link: '/Préférences',
  },
  {
    name: 'Upload',
    link: '/Upload',
  },
  {
    name: 'Profile',
    link: '/Profile',
  },
];

/**
 * Renders the menu component.
 *
 * @returns {ReactElement} The rendered menu component.
 */
const Menu = (): ReactElement => (
  <div className="flex flex-col space-y-4 w-full bg-transparent text-secondary-foreground dark:bg-secondary dark:text-secondary-foreground">
    {links.map(
      (l: Link, index: number): ReactElement => (
        <Link
          className="p-2 w-full text-left hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground"
          key={'menu-item-' + index}
          to={l.link}
        >
          {l.name}
        </Link>
      ),
    )}
  </div>
);

export default Menu;
