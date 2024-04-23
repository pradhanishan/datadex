'use client';

import { login } from '@/actions';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { LoginSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { useState, useTransition } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export function LoginForm() {
  const [loginFormResponseError, setLoginFormResponseError] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit: SubmitHandler<z.infer<typeof LoginSchema>> = (formData) => {
    startTransition(() => {
      login(formData).then((response) => {
        setLoginFormResponseError(response?.error);
      });
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-[310px]">
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
        {loginFormResponseError && (
          <FormMessage className="bg-destructive/15 p-2 rounded-sm flex gap-4 items-center text-xs text-destructive">
            <ExclamationTriangleIcon />
            {loginFormResponseError}
          </FormMessage>
        )}
        {/* Submit Button */}
        <Button type="submit" className="w-full">
          login
        </Button>
      </form>
    </Form>
  );
}
