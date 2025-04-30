import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

import Empty from "./Empty";
import Title from "../ui/Title";

const CartItems = () => {
  const { items } = useSelector((state) => state.cart);
  if (items.length == 0) return <Empty />;
  return (
    <div className="mt-25">
      <Title title="Cart Items" />
      {items.length > 0 && (
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <CartItem key={item.book._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartItems;
