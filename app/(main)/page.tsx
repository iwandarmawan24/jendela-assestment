'use client';
import {
  Order,
  columns,
} from '@/components/data-table/order-management/column';
import { DataTable } from '@/components/data-table/order-management/data-table';
import { useState } from 'react';
import { AddNewOrder } from '@/components/new-order';

export interface HandlerSubmit {
  (params: { data: Order }): void;
}

export default function Home() {
  const [data, setData] = useState<Order[] | []>([]);
  const handlerSubmit: HandlerSubmit = ({ data: newOrder }) => {
    setData((prevData) => [...prevData, newOrder]);
  };
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <AddNewOrder submitHandler={handlerSubmit} />
      <DataTable columns={columns} data={data} />
    </main>
  );
}
