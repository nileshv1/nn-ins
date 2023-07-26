import React from "react";
import { useRouter } from "next/router";
import { Container } from "@mui/material";
import { ROUTE_PATHS } from "@/constants/constants";

const Car: React.FC = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push(ROUTE_PATHS.MOTOR);
  };

  return (
    <Container>
      <h1>Page 1</h1>
      <button onClick={handleContinue}>Continue</button>
    </Container>
  );
};

export default Car;
