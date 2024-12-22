import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";
import styles from "./Avatar.module.css";

const Avatar = () => {
  const user = "Robert";
  return (
    <div className={styles.avatarContainer}>
      <Image src="user.png" alt="User Avatar" size="small" />
      <Text weight="bold" type="caption" tag="h6">
        Hi, {user}!
      </Text>
    </div>
  );
};

export default Avatar;
