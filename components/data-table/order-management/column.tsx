'use client';

import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Order = {
  name: string;
  sumber_pesanan: string;
  email: string;
  hp: string;
  jumlah_product: number;
  keterangan: string;
  [property: string]: any;
};

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: 'name',
    header: 'Nama',
  },
  {
    accessorKey: 'sumber_pesanan',
    header: 'Sumber Pesanan',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'hp',
    header: 'HP',
  },
  {
    accessorKey: 'keterangan',
    header: 'Keterangan',
  },
];
