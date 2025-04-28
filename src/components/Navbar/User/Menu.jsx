import MenuLink from "./MenuLink";
import { LogIn } from "lucide-react";
import HandshakeIcon from "@mui/icons-material/Handshake";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useSelector } from "react-redux";

const Menu = () => {
  const { token: isloggedIn, role } = useSelector((state) => state.user);
  const isAdmin = role === "admin";
  return (
    <div className="h-fit pt-15 px-5 box-border overflow-hidden ">
      <div className="text-white font-bold flex flex-col gap-2 text-2xl">
        {!isloggedIn && (
          <>
            <MenuLink to="/login" idx={0} label="Login" icon={<LogIn />} />
            <MenuLink
              to="/register"
              idx={1}
              label="Register"
              icon={<HandshakeIcon />}
            />
          </>
        )}
        {isloggedIn && (
          <>
            <MenuLink to="/profile" idx={0} label="Profile" />
            {isAdmin && (
              <MenuLink
                to="/admin"
                idx={1}
                label="Dashboard"
                // icon={<AdminPanelSettingsIcon />}
              />
            )}
            <MenuLink to="/Logout" idx={2} label="Logout" logout />
            {/** TODO: */}
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;
