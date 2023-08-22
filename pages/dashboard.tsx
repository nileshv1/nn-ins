import { getSession, signIn } from "next-auth/react";
import React, { useEffect } from "react";

const dashboard = () => {
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
      }
    };
    securePage();
  }, []);
  return <div>dashboard</div>;
};

export default dashboard;
