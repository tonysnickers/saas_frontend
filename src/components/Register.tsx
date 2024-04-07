import React, { useState } from "react";
import Form from "./Form";
import { Box } from "@mui/material";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userName, setUsername] = useState<string>("");

  const handleSubmit = async () => {
    console.log("regitred");
  };
  return (
    <Box>
      <Form
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        userName={userName}
        setUsername={setUsername}
      />
    </Box>
  );
};

export default Register;
