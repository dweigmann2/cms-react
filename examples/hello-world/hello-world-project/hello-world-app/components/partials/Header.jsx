import headerStyles from '../../styles/header.module.css';

function Header({
  brandColor = {
    opacity: 100,
    color: '#FF7A59',
  },
  text = 'Hello from React!',
}) {
  const navLinks = [
    {
      href: '/hello-world-home',
      label: 'Home',
    },
    {
      href: '/hello-world-todo',
      label: 'Todo',
    },
    {
      href: '/hello-world-cars',
      label: 'Cars',
    },
  ];

  return (
    <header className={headerStyles.header}>

    </header>
  );
}

export default Header;
