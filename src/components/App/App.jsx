import Profile from "../Profile/Profile.jsx";
import FriendList from "../FriendsList/FriendList.jsx";
import TransactionHistory from "../TransactionHistory/TransactionHistory.jsx"
import "./App.css";

import userData from "../../userData.json";
import friends from "../../friends.json"
import transaction from "../../transactions.json"

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </>
  );
};

export default App;
