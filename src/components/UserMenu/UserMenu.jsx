import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { token } from "services/usersApi";
import { logoutAction } from "redux/auth/slice";
import UserProfile from "./UserProfile";

const UserMenu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogOut = () => {
        dispatch(logoutAction());
        token.unset();
        navigate('/', { replace: true });
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <UserProfile />
            <Button type="button" variant="contained" color="inherit" onClick={onLogOut}>
                <span>Log Out</span>
            </Button>
        </div>
    );
};

export default UserMenu;
