import { Link } from "react-router-dom";

const ToDashButton = () => {
  return (
    <div>
      <Link
        style={{
          padding: "1rem 2rem",
          backgroundColor: "royalblue",
          color: "white",
          position: "absolute",
          top: "40%",
          left: "45%",
          borderRadius: "10px",
        }}
        to={"/admin/dashboard"}
      >
        To Dashboard
      </Link>
    </div>
  );
};

export default ToDashButton;
