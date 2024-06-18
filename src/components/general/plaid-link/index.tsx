"use client";

import { Button } from "@/components/ui/button";
import {
  createLinkToken,
  exchangePublicToken,
} from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
import React from "react";
import { PlaidLinkOptions, usePlaidLink } from "react-plaid-link";

const PlaidLink: React.FC<PlaidLinkProps> = ({
  user,
  variant,
  dwollaCustomerId,
}) => {
  const router = useRouter();
  const [token, setToken] = React.useState<string>("");

  React.useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);
      setToken(data?.linkToken);
    };

    getLinkToken();
  }, [user]);

  const onSuccess = React.useCallback(
    async (publicToken: string) => {
      await exchangePublicToken({
        publicToken,
        user,
      });

      router.push("/");
    },
    [user]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <>
      {variant === "primary" ? (
        <Button
          onClick={() => open()}
          disabled={!ready}
          className="plaidlink-primary"
        >
          Connect Bank
        </Button>
      ) : variant === "ghost" ? (
        <Button>Connect Bank</Button>
      ) : (
        <Button>Connect Bank</Button>
      )}
    </>
  );
};

export default PlaidLink;
