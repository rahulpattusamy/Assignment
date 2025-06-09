import axios from "axios";
import { useEffect, useState } from "react";

interface user {
  id: number;
  name: string;
}

const FetchUser = () => {
  const [users, setUser] = useState<user[]>([]);
  useEffect(() => {
    axios
      .get<user[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUser(res.data));
  },[]);
  return <div>{users.map(user=><li key={user.id}>{user.name}</li>)}</div>;
};

export default FetchUser;
