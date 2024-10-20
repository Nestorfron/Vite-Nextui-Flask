import { useTheme } from "next-themes";
import { useEffect, useState, useContext} from "react";
import { Context } from "../../store/appContext.jsx";
import { Button } from "@nextui-org/react";

export const Home = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { store, actions } = useContext(Context);

  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const envFile = import.meta.env.VITE_ENV_FILE;

  console.log("API URL:", apiUrl);
  console.log("API Key:", apiKey);
  console.log("Vite name env file:", envFile);
  console.log("store:", store);

  useEffect(() => {
    actions.hello();
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <div>
        <h1>Variables de entorno en Vite</h1>
        <ul>
          <li>API URL: {apiUrl}</li>
          <li>API Key: {apiKey}</li>
          <li>ENV file: {envFile}</li>
        </ul>
      </div>
      The current theme is: {theme}
      <Button color="primary" onClick={() => setTheme("light")}>Light Mode</Button>
      <Button color="primary" onClick={() => setTheme("dark")}>Dark Mode</Button>
    </div>
  );
}
