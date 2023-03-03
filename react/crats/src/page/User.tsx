import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useState } from "react";
import { getData } from "../store/user";

const User = () => {
  const user = useSelector((state: RootState) => state.user.isLoading);
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <div>user Info : {user}</div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => dispatch(getData(username))}>fetch</button>
    </div>
  );
};

export default User;
