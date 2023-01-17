import clsx from "clsx";
import "./Button-Style.css";

const Button = ({ title, onClick, type }) => {
  return (
    <button
      className={clsx(
        "button",
        type === "outline" ? "outline-btn" : "primary-btn"
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
