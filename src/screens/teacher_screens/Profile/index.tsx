import { Typography, Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import UserContextType from "../../../@types/userContext";
import { UserContext } from "../../../contexts/userContext";
import Teacher from "../../common_screens/Teacher";

const Profile = () => {
  const { user } = useContext(UserContext) as UserContextType;

  return (
    <Box>
      <Typography variant="h3">Teacher Profile</Typography>
      <Teacher id={user._id} />
    </Box>
  );
};

export default Profile;