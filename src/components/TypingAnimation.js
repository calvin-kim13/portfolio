import { memo, useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["MSCS Student", "Developer"], // Strings to display
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <span
      className="ah-words-wrapper"
      style={{ width: "206.288px", overflow: "hidden" }}
    >
      <b className="is-visible" ref={el}></b>
    </span>
  );
};
export default memo(TypingAnimation);
