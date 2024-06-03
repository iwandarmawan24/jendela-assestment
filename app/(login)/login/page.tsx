'use client';

import { z } from 'zod';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

//form import
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(20),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

export default function Home() {
  const [isLoadingSubmit, setIsLoadingSubmit] = useState<boolean>(false);
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: 'user@admin.com',
      password: 'root',
    },
  });
  function onSubmit(values: z.infer<typeof LoginSchema>) {
    console.log(values);
    setIsLoadingSubmit(true);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 p-24">
      <p className="text-2xl text-blue-500 font-bold">Login</p>
      <Image src={'/illustration/spons.jpg'} height={200} width={200} alt="" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => onSubmit(data))}
          className="space-y-8 min-w-[300px] flex flex-col justify-start "
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} type="password" />
                </FormControl>
                <FormDescription>
                  *(this demo application) dont change for login
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoadingSubmit}>
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
}
