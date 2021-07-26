import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function useNotAuth() {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("ACCESS_TOKEN")) {
      history.push("/");
    }
    // history.push('/login');
  }, [history]);
}
