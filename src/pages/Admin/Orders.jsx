import React from "react";
import OrdersHistory from "../../components/Profile/OrdersHistory";
import Title from "../../components/ui/Title";

const Orders = () => {
  return (
    <div className="w-[50%] mx-auto ">
      <Title title={"Orders"} />
      <OrdersHistory isForAdmin={true} />
    </div>
  );
};

export default Orders;
