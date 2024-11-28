import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import MenuItems from "./menu-items/MenuItems";
import menuItems from "@/content/data/header/menu-items";

const Navbar = ({ isMenuOpen, onCloseMenu }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile(); // Initial mobile check
    window.addEventListener("resize", checkMobile); // Listen for window resize

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleSubmenuToggle = (e, item) => {
    e.preventDefault();
    setOpenSubmenu(openSubmenu === item.label ? null : item.label);
  };

  const handleMenuClick = (href) => {
    onCloseMenu(); // Close the menu after a link is clicked
    setOpenSubmenu(null); // Reset submenu state
  };

  return (
    <nav aria-label="Main navigation" className={styles.nav}>
      <ul
        className={`${styles.list} ${isMenuOpen ? styles.show : ""}`}
      >
        {menuItems.map((item) => (
          <MenuItems
            key={item.href}
            item={item}
            isMobile={isMobile}
            openSubmenu={openSubmenu}
            setOpenSubmenu={setOpenSubmenu}
            handleSubmenuToggle={handleSubmenuToggle}
            handleMenuClick={handleMenuClick}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;