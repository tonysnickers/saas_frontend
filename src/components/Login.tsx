import { Box } from "@mui/material";
import Form from "./Form";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const handleSubmit = () => {
    console.log("submit");
  };
  return (
    <Box sx={{}}>
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
