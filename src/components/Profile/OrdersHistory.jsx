import React, { useState } from "react";
import { useGetOrdersQuery } from "../../app/features/ordersApi";
import Pagination from "../ui/Pagination";

const OrdersHistory = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, isError, error } = useGetOrdersQuery({
    page,
    limit: 5,
  });

  if (isLoading || isFetching) return <p>Loading...</p>;
  if (isError) return <p>Error: {error?.message}</p>;

  return (
    <>
      {/**TODO:UI */}
      <ul>
        {data?.orders?.map((order, index) => (
          <li key={index}>
            <strong>User:</strong> {order.user.name} <br />
            <strong>Book:</strong> {order.books[0].book.title} <br />
            <strong>Qty:</strong> {order.books[0].qty} <br />
            <strong>Status:</strong> {order.paymentStatus} <br />
            <strong>Total:</strong> ${order.totalAmount}
          </li>
        ))}
      </ul>

      <Pagination
        page={page}
        totalPages={data?.totalPages || 1}
        onChange={(_, newPage) => {
          setPage(newPage);
        }}
      />
    </>
  );
};

export default OrdersHistory;
