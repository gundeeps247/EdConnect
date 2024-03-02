import { useEffect } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import "./App.css";

function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey:
          "BAwD4axvKAgQLAGbKeAMmM4lutQpl99hXuRQgvRsvTlIH6-d4OIkgzPo33zuXrKJSGy8x0VKYUgn2mpghkZwm0Q",
      });

      await fetch('https://push-notifications-3ls7.onrender.com/api/tokens/store', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });

      console.log("Token Gen", token);
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;