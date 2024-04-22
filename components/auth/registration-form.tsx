'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RegisterSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export function RegistrationForm() {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    defaultValues: { username: '', email: '', password: '' },
    resolver: zodResolver(RegisterSchema),
  });
  return (
    <Form {...form}>
      <form className="space-y-4 w-[310px]">
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
                <Input placeholder="******" {...field} type="email" autoComplete="new-password" />
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
