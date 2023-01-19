import SearchIcon from "../Vectors/SearchIcon";
import "./Input-Styled.css";

const Input = () => {
  return (
    <div className="flex items-center bg-[#333333] py-4 pr-4 pl-8 rounded-[6.25rem] gap-x-2">
      <SearchIcon color="rgb(153, 153, 153)" />{" "}
      <input type="text" placeholder="Search" className="text-white" />
    </div>
  );
};

export default Input;
