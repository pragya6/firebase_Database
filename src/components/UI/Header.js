import { Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import BookIcon from '@mui/icons-material/Book';

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <BookIcon />
        <Typography>Student DashBoard</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
