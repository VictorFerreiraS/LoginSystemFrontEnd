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
import "./myaccount.css";

export default function MyAccountView({ firstName, lastName }) {
  useDocumentTitle("Account Settings");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box className="myaccount-box-wrapper">
      <Container maxWidth={"sm"}>
        <Paper className="myaccount-form-wrapper">
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5">
                Hello
                {" " + firstName + " " + lastName}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <List
                subheader={
                  <ListSubheader component="" id="nested-list-subheader">
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
                  <ListItemText primary="Security" />
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
    </Box>
  );
}
