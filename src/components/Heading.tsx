import { useLocation, useNavigate } from "react-router-dom";
import "../styles/heading.css";
import Leftarrow from "../Icons/leftarrow";
const Heading = ({ heading }: { heading: string }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.split("/")[1];

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="heading">
      {path !== "" && (
        <div className="heading-button" onClick={handleBack}>
          <Leftarrow />
        </div>
      )}
      <div className="heading-title">{heading}</div>
    </div>
  );
};

export default Heading;
