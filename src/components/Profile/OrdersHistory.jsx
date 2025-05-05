import React, { useState } from "react";
import { useGetOrdersQuery } from "../../app/features/ordersApi";
import Pagination from "../ui/Pagination";
import ZeroOrders from "./ZeroOrders";
import OrderRow from "../ui/OrderRow";
import OrderRowSkeleton from "../ui/OrderRowSkeleton";

const OrdersHistory = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, isError } = useGetOrdersQuery({
    page,
    limit: 5,
  });

  if (isLoading || isFetching)
    return (
      <>
        <OrderRowSkeleton />
        <OrderRowSkeleton />
        <OrderRowSkeleton />
        <OrderRowSkeleton />
        <OrderRowSkeleton />
        <Pagination
          page={page}
          totalPages={data?.totalPages || 1}
          onChange={(_, newPage) => {
            setPage(newPage);
          }}
        />
      </>
    );
  if (isError)
    return (
      <div className="text-red-500">
        Error loading orders. Please try again later.
      </div>
    );
  if (!data?.orders?.length) return <ZeroOrders />;

  return (
    <>
      <div className="mx-auto w-full">
        <ul className="space-y-4 w-full">
          {data?.orders?.map((order) => (
            <OrderRow key={order._id} order={order} />
          ))}
        </ul>
      </div>

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
