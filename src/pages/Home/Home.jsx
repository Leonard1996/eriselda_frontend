import { useEffect, useState } from "react";
import WithLoader from "../../globals/components/WithLoader";
import { homeService } from "./home.service";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  let { state } = useLocation();

  const callLogin = async () => {
    setIsLoading(true);
    const user = await homeService.login(state);
    localStorage.setItem("authData", JSON.stringify(user.data));
    window.history.replaceState({}, document.title);
    setIsLoading(false);
  };
  useEffect(() => {
    if (state) {
      callLogin();
    }
  }, []);

  return (
    <WithLoader isLoading={isLoading}>
      <div>welcome to home</div>
    </WithLoader>
  );
}
