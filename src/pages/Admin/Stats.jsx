import React from "react";
import { useGetStatisticsQuery } from "../../app/features/adminApi";
import {
  BookIcon,
  ShoppingCartIcon,
  DollarSignIcon,
  UsersIcon,
  AlertCircleIcon,
  PackageIcon,
} from "lucide-react";
import Title from "../../components/ui/Title";

const StatCard = ({ icon, title, value, color }) => (
  <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4 border border-gray-100">
    <div className={`p-3 rounded-full ${color} text-white`}>{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-semibold text-gray-900">{value}</p>
    </div>
  </div>
);

const Stats = () => {
  const { data, isLoading, isFetching, isError } = useGetStatisticsQuery();

  if (isLoading || isFetching) {
    return (
      <div className="text-center py-10 text-lg text-gray-600">Loading...</div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-10 text-red-500 font-semibold">
        Error fetching data.
      </div>
    );
  }

  return (
    <div className=" ">
      <Title title={"Dashboard Stats"} />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          icon={<BookIcon />}
          title="Total Books"
          value={data.books?.totalBooks}
          color="bg-blue-500"
        />
        <StatCard
          icon={<PackageIcon />}
          title="Books Out of Stock"
          value={data.books?.booksOutOfStock}
          color="bg-red-500"
        />
        <StatCard
          icon={<AlertCircleIcon />}
          title="Books with Low Stock"
          value={data.books?.booksWithLowStock}
          color="bg-yellow-500"
        />

        {/* Sales Stats */}
        <StatCard
          icon={<ShoppingCartIcon />}
          title="Total Orders"
          value={data.sales?.totalOrders}
          color="bg-green-500"
        />
        <StatCard
          icon={<DollarSignIcon />}
          title="Total Payments"
          value={`${data.sales?.totalPayments}`}
          color="bg-indigo-500"
        />
        <StatCard
          icon={<DollarSignIcon />}
          title="Total Revenue"
          value={`$${data.sales?.totalRevenue}`}
          color="bg-purple-500"
        />

        {/* User Stats */}
        <StatCard
          icon={<UsersIcon />}
          title="Total Users"
          value={data.users?.totalUsers}
          color="bg-pink-500"
        />
      </div>
    </div>
  );
};

export default Stats;
