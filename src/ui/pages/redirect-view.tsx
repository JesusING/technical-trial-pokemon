import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../app-config/routes";

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(ROUTES.home);
  }, []);
  
  return <></>;
};

export default Redirect;
