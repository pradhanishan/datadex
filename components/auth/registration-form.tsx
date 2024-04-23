'use client';

import { register } from '@/actions';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RegisterSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircledIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { useState, useTransition } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

export function RegistrationForm() {
  const [registrationFormResponse, setRegistrationFormResponse] = useState<{
    error: string | undefined;
    success: string | undefined;
  }>({ error: undefined, success: undefined });
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    defaultValues: { username: '', email: '', password: '' },
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof RegisterSchema>> = (formData) => {
    startTransition(() => {
      register(formData).then((formResponse) => {
        setRegistrationFormResponse({ error: formResponse.error, success: formResponse.success });
      });
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
                <Input
                  placeholder="eg: johndoe@gmail.com"
                  {...field}
                  type="text"
                  autoComplete="off"
                  disabled={isPending}
                />
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
                <Input
                  placeholder="eg: johndoe@gmail.com"
                  {...field}
                  type="email"
                  autoComplete="off"
                  disabled={isPending}
                />
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
                <Input
                  placeholder="******"
                  {...field}
                  type="password"
                  autoComplete="new-password"
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Form Response - Error */}
        {registrationFormResponse.error && (
          <FormMessage className="bg-destructive/15 p-2 rounded-sm flex gap-4 items-center text-xs text-destructive">
            <ExclamationTriangleIcon />
            {registrationFormResponse.error}
          </FormMessage>
        )}
        {/* Form Response - Success */}
        {registrationFormResponse.success && (
          <FormMessage className="bg-emerald-300/20 p-2 rounded-sm flex gap-4 items-center text-xs text-emerald-800">
            <CheckCircledIcon />
            {registrationFormResponse.success}
          </FormMessage>
        )}
        {/* Submit Button */}
        <Button type="submit" className="w-full">
          register
        </Button>
      </form>
    </Form>
  );
}
