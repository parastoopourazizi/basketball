import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { getCookie } from "../utils/cooki";
import { getNewToken } from "../utils/token";
function Home() {
  const [user, setUser] = useState({});
  const [refresh, setRefresh] = useState(false);

  const token = getCookie("accessToken");

  const getUser = async () => {
    const res = await fetch(
      "https://bushehrbasketball.pythonanywhere.com/auth/me/",
      { headers: { Authorization: token } }
    );
    const user = await res.json();
    if (user.error) {
      getNewToken(refresh, setRefresh);
    } else {
      setUser(user);
    }
  };

  useEffect(() => {
    getUser();
  }, [refresh]);
  console.log(user);
  return (
    <div>
      <Navbar />
      <p>firstName : {user.first_name} </p>
      <p>lastName : {user.last_name} </p>
    </div>
  );
}
export default Home;
