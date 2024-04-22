'use client';

import { register } from '@/actions';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RegisterSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useTransition } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export function RegistrationForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    defaultValues: { username: '', email: '', password: '' },
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof RegisterSchema>> = (formData) => {
    startTransition(() => {
      register(formData);
    });
  };

  return (
    <Form {...form}>
      <form className="space-y-4 w-[310px]" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="eg: johndoe@gmail.com" {...field} type="text" autoComplete="off" />
              </FormControl>
              <FormDescription>Your username will be displayed publicly</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email Input */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="eg: johndoe@gmail.com" {...field} type="email" autoComplete="off" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Password Input */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="******" {...field} type="password" autoComplete="new-password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Submit Button */}
        <Button type="submit" className="w-full">
          register
        </Button>
      </form>
    </Form>
  );
}
