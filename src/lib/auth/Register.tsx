import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const formSchema = z.object({
  email: z.string().email({
    message: 'Email is invalid.',
  }),
  name: z.string().min(4, {
    message: 'Password must be at least 4 characters.',
  }),
  password: z.string().min(12, {
    message: 'Password must be at least 12 characters.',
  }),
});

const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });
  const navigate = useNavigate();
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Card className="w-[80vw]  border-0 backdrop-filter backdrop-blur-lg bg-card bg-opacity-heavy   text-card-foreground p-5 rounded-xl">
      <CardHeader>
        <CardTitle>
          <h1 className="text-4xl font-extrabold tracking-tight leading-none text-transparent uppercase bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 transition-all lg:text-5xl">
            Register
          </h1>
        </CardTitle>
        <CardDescription>Register to your account</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormDescription>This is your registering name.</FormDescription>
                  <FormMessage className="text-red-500 dark:text-red-400" />
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
                    <Input placeholder="me@email.com" {...field} />
                  </FormControl>
                  <FormDescription>This is your registering email.</FormDescription>
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
                    <Input placeholder="°°°°°°°°°°°°" {...field} />
                  </FormControl>
                  <FormDescription>This is your registering password.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full btn-wrapper">
              <Button
                type="submit"
                className="pr-3 pl-3 m-auto w-full border-0 bg-card bg-opacity-medium text-card-foreground"
              >
                Register
              </Button>
              <div className="w-1/2 btn-bg"></div>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <div className="w-full btn-wrapper">
          <Button
            onClick={() => navigate('/Login')}
            type="submit"
            className="pr-3 pl-3 m-auto w-full border-0 bg-card bg-opacity-medium text-card-foreground"
          >
            Login
          </Button>
          <div className="w-1/2 btn-bg"></div>
        </div>
      </CardFooter>
    </Card>
  );
};
export default Register;
