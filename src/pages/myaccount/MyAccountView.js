import {
  Box,
  Collapse,
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SecurityIcon from "@mui/icons-material/Security";
import DeleteIcon from "@mui/icons-material/Delete";
import PasswordIcon from "@mui/icons-material/Password";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function MyAccountView() {
  useDocumentTitle("Account Settings");
  // IS NOT INSTANT NEEDS TIME TO COMPLETE
  const user = useSelector((state) => state.user.value);

  const [response, setResponse] = useState("");

  const deleteUser = async () => {
    return await fetch("http://localhost:8080/api/v1/user/delete-user", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    }).then((response) => {
      setResponse(response);
      return response.json();
    });
  };

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  
  if (user === undefined) {
    return <Box>Loading...</Box>; // Render a loading state
  }

  return (
    <Container className="test" maxWidth={"sm"}>
      <Paper>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5">
              Hello
              {/* {user.fullName} */}
            </Typography>
          </Grid>
          <Grid>
            <List
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Account Settings
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <NotificationsIcon />
                </ListItemIcon>
                <ListItemText primary="Notifications" />
              </ListItemButton>
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <SecurityIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <PasswordIcon />
                    </ListItemIcon>
                    <ListItemText primary="Change Password" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Delete Account" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
