import React, { useState } from "react";
import Form from "./Form";
import { Box } from "@mui/material";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

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
      />
    </Box>
  );
};

export default Register;
