import clsx from "clsx";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = clsx(styles.status, isOnline && styles.online);
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
      <p className={status}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
export default FriendListItem;
