import styles from "./index.module.scss";
import { CloseIcon, MenuIcon } from "@/components/Atoms/Vectors";

export const BurgerMenu = ({ toggleMenu, onClick }) => {
  return (  
    <div className={`md:hidden flex items-center`}>
        <button 
        data-active={toggleMenu}
        className={`mobile-menu-button`}
        onClick={onClick}
        >
            {!toggleMenu == true ? <MenuIcon /> : <CloseIcon />}
        </button>
    </div>
  );
};
