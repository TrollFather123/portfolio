/* eslint-disable no-console */

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";

import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";

import { HeaderWrap } from "@/styles/StyledComponents/HeaderWrapper";
import UpArrIcon from "@/ui/Icons/UpArrIcon";
import { Container } from "@mui/system";
import Link from "next/link";

// const CustomButton = dynamic(() => import("@/ui/Buttons/CustomButton"));

// const drawerWidth = 240;

export default function Header() {
  // const navItems = [
  //   {
  //     name: "Clinical studies",
  //     route: "javascript:void(0)"
  //   },
  //   {
  //     name: "The science",
  //     route: "javascript:void(0)"
  //   },
  //   {
  //     name: "Shop",
  //     route: "javascript:void(0)"
  //   },
  //   {
  //     name: "Contact us",
  //     route: "javascript:void(0)"
  //   }
  // ];

  // const { window } = props;
  // const [mobileOpen, setMobileOpen] = React.useState(false);
  // const { userData, isLoggedIn } = useAppSelector((state) => state.userSlice);
  // const dispatch = useAppDispatch();
  // const router = useRouter();

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };

  // const handleLogout = () => {
  //   dispatch(logout());
  //   router.push("/login");
  // };

  // const drawer = (
  //   <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       MUI
  //     </Typography>
  //     <Divider />
  //     <List>
  //       {navItems.map((item) => (
  //         <Link href={item?.route} key={item.name}>
  //           <ListItem disablePadding>
  //             <ListItemButton sx={{ textAlign: "center" }}>
  //               <ListItemText primary={item.name} />
  //             </ListItemButton>
  //           </ListItem>
  //         </Link>
  //       ))}
  //     </List>
  //   </Box>
  // );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  //for adding class to header while scroll
  // const [scroll, setScroll] = React.useState(false);

  // const detectScroll = React.useCallback(() => {
  //   setScroll(window.scrollY > 100);
  // }, []);

  // React.useEffect(() => {
  //   window.addEventListener("scroll", detectScroll);
  //   return () => {
  //     window.removeEventListener("scroll", detectScroll);
  //   };
  // }, []);

  return (
    <HeaderWrap sx={{ display: "flex" }} className="main_head">
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        className="headerContainer"
      >
        <Container fixed>
          <Toolbar>
            {/* <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton> */}
            <Link href="/" className="headerLogo">
              Web Developer
            </Link>

            <Box className="hdr_rgt">
              <CustomButtonPrimary
                type="button"
                variant="contained"
                color="primary"
                endIcon={<UpArrIcon />}
              >
                Contact
              </CustomButtonPrimary>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box> */}
      <Toolbar />
    </HeaderWrap>
  );
}
