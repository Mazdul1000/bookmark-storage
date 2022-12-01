import React from 'react';
import { Link } from "react-router-dom";
import BlankAvatar from "../../assets/blank_link.png";
import { Box, height } from "@mui/system";
import styled from "@emotion/styled";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import YouTubeIcon from '@mui/icons-material/YouTube';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Item = styled(ListItem)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontWeight: "bold",
    textAlign: "left",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    padding:'15px',
    textTransform:'none',
    "&:hover": {
      color: '#2175E2',
    },
  }));

const MenuDrawer = () => {
    return (
        <>
          <Grid container justifyContent="flex-end" alignItems="center">
        <Grid item>
          <Drawer
            anchor="left"
            variant="temporary"
            open={open}
            onClose={() => setOpen(false)}
            sx={{ zIndex: "1100" }}
            position="relative"
          >
            <Box
              component="div"
              sx={{
                width: "300px",
                paddingTop: "110px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box component="div">
                <Box
                  component="div"
                  sx={{ backgroundColor: "#FDFBFF", padding: "0 0 12px 16px" }}
                >
                  <Avatar
                    alt="user avatar"
                    src={BlankAvatar}
                    sx={{ height: "79px", width: "79px" }}
                  />
                  <Typography
                    variant="h3"
                    fontSize="20px"
                    color="text.primary"
                    sx={{ marginTop: "12px" }}
                  >
                    Mazedul Hasan
                  </Typography>
                  <Typography paragraph fontSize="14px" color="text.secondary">
                    mazedul.hasan@southindus.com
                  </Typography>
                </Box>
                <Divider />
                <Box component="div">
                  <List
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "300px",
                      alignItems: "flex-start",
                    }}
                  >
                    <Item>
                      <Link to="/">
                        <BookmarkBorderIcon sx={{ marginRight: "30px" }} />
                        Bookmarks
                      </Link>
                    </Item>
                    <Item>
                      <Link to="/videos">
                        <YouTubeIcon sx={{ marginRight: "30px" }}/> 
                         Video Streaming APP
                         </Link>{" "}
                    </Item>
                    <Item>
                      <Link to="/login">
                        <QuestionAnswerIcon sx={{ marginRight: "30px" }}/> Chatting APP
                      </Link>{" "}
                    </Item>
                    <Item>
                      <Link to="/expense-tracker">
                        <AccountBalanceIcon sx={{ marginRight: "30px" }}/> Expense Tracker
                      </Link>{" "}
                    </Item>
                    <Item>
                      <Link to="/todo"><AssignmentIcon sx={{ marginRight: "30px" }}/> Todo APP</Link>
                    </Item>
                  </List>
                </Box>
              </Box>
              <Box
                component="div"
                position="absolute"
                sx={{ bottom: "15px", left: "0", width:'100%' }}
              >
                <Item button>
                      <Link to=""><SettingsOutlinedIcon sx={{ marginRight: "30px" }}/> Settings</Link>
                    </Item>
              </Box>
            </Box>
          </Drawer>
        </Grid>
      </Grid>
        </>
    );
};

export default MenuDrawer;