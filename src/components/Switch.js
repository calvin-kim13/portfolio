import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Switch() {
  const [isOn, setIsOn] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  useEffect(() => {
    setDark(document.querySelector("body").classList.contains("dark"));
  }, []);

  const moodChange = (value) => {
    if (value === "dark") {
      document.querySelector("body").classList.add("dark");
      document.querySelector("body").classList.remove("light");
    } else {
      document.querySelector("body").classList.add("light");
      document.querySelector("body").classList.remove("dark");
    }
  };

  const toggleDarkMode = () => {
    if (dark) {
      moodChange("light");
      setDark(!dark);
    }
    if (!dark) {
      moodChange("dark");
      setDark(!dark);
    }
  };

  const toggle = () => {
    toggleSwitch();
    toggleDarkMode();
  };

  return (
    <div id="switch-button">
      <div className="switch" data-ison={isOn} onClick={toggle}>
        <img src="images/light2.png" alt="Light" id="light-mode" />
        <motion.div className="handle" layout transition={spring} />
        <img src="images/dark2.png" alt="Dark" id="dark-mode" />
      </div>
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
