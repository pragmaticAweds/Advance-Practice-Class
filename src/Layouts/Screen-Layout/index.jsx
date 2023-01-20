import NavBar from "../../Components/Organisms/NavBar";
import "./Screen-Layout.css";

const ScreenLayout = ({ children }) => {
  return (
    <div className="screen-layout" id="content">
      <NavBar />
      <div className="flex-1">{children}</div>
      <footer>footer</footer>
    </div>
  );
};

export default ScreenLayout;
