import React from "react";
import { useGetUserAccountDetailsQuery } from "../../app/features/usersApi";
import Input from "./Input";
import AccountDetailsSkeleton from "./AccountDetailsSkeleton";

const AccountDetails = () => {
  const { data, isLoading, isFetching, error } =
    useGetUserAccountDetailsQuery();
  if (isLoading || isFetching) return <AccountDetailsSkeleton />;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <div className="flex flex-col gap-4">
        <Input label="Name" name="name" value={data.name} />
        <Input
          label="Email"
          name="email"
          value={data.email}
          editable={false}
          isVerified={data.isVerified}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Input label="Address" name="address" value={data.address} />
        <Input label="Phone" name="phone" value={data.phone} />
      </div>
    </div>
  );
};

export default AccountDetails;
