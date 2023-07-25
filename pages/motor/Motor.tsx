import React from "react";
import { useRouter } from "next/router";
import { Container } from "@mui/material";

const Motor: React.FC = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/page3");
  };

  return (
    <Container>
      <h1>Page 2</h1>
      <button onClick={handleContinue}>Continue</button>
    </Container>
  );
};

export default Motor;
