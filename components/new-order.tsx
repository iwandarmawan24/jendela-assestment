import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Order } from './data-table/order-management/column';
import { z } from 'zod';
import { HandlerSubmit } from '@/app/(main)/page';
import { useState } from 'react';

const NewOrderSchema = z.object({
  sumber_pesanan: z.string(),
  nama: z.string().min(3).max(20),
  email:z.string().email(),
  hp: z.string().min(3).max(20),
  jumlah_product: z.string(),
  keterangan: z.string().optional(),
});
type NewOrderSchemaType = z.infer<typeof NewOrderSchema>;

export function AddNewOrder({
  submitHandler,
}: {
  submitHandler: HandlerSubmit;
}) {
    const [open, setOpen] = useState(false);

  const form = useForm<NewOrderSchemaType>({
    resolver: zodResolver(NewOrderSchema),
  });
  function onSubmit(values: z.infer<typeof NewOrderSchema>) {
    const { sumber_pesanan, nama, hp, jumlah_product, keterangan,email } = values;
    submitHandler({
      data: {
        sumber_pesanan: sumber_pesanan,
        name: nama,
        hp: hp,
        jumlah_product: parseInt(jumlah_product),
        keterangan: keterangan ?? '',
        email:email
      },
    });
    setOpen(false)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Tambah Pesanan</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[85vh] overflow-scroll" >
        <DialogHeader>
          <DialogTitle>Tambah Pesanan</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => onSubmit(data))}
            className="space-y-8 min-w-[300px] flex flex-col justify-start "
          >
            <FormField
              control={form.control}
              name="sumber_pesanan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sumber Pesanan</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Sumber Pesanan" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="whatsapp">Whatsapp</SelectItem>
                      <SelectItem value="call">Call</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nama"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama</FormLabel>
                  <FormControl>
                    <Input placeholder="Nama" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomor HP</FormLabel>
                  <FormControl>
                    <Input placeholder="Nomor HP" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="jumlah_product"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jumlah Product</FormLabel>
                  <FormControl>
                    <Input placeholder="Jumlah Product" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="keterangan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Keterangan</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Keterangan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
