import { useState } from "react";
import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";
import styles from "./Avatar.module.css";
import Modal from "../Modal/Modal";
import { Sidebar } from "../../organisms/Sidebar/Sidebar";

const Avatar = () => {
  const user = "Robert";
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenSidebar = () => {
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={styles.avatarContainer}>
      <Image src="user.png" alt="User Avatar" size="small" />
      <Text
        role="button"
        tabIndex={0}
        onClick={handleOpenSidebar}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleOpenSidebar();
            e.preventDefault();
          }
        }}
        weight="bold"
        type="caption"
        tag="p"
        className={styles.avatarName}
      >
        Hi, {user}!
      </Text>
      <div className={styles.sidebarMobile}>
        {isOpen && (
          <Modal
            type="sidebar"
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <Sidebar isOpen={isOpen} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Avatar;
