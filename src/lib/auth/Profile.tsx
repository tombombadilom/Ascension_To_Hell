import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  email: z.string().email({
    message: 'Email is invalid.',
  }),
  password: z.string().min(12, {
    message: 'Password must be at least 12 characters.',
  }),
});
const Profile = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Card className=" w-[80vw] overflow-x-hidden border-0 p-5 rounded-xl backdrop-filter backdrop-blur-lg bg-card bg-opacity-medium text-card-foreground dark:bg-card dark:bg-opacity-medium dark:text-primary-foreground h-fit">
      <CardTitle className="flex flex-col gap-2 content-start items-center">
        <Avatar className="w-12 h-12">
          <AvatarImage src="../icon/favicon-32x32.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-extrabold tracking-tight leading-none text-transparent uppercase bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 transition-all lg:text-5xl">
          Profile
        </h1>
      </CardTitle>
      <div className="grid grid-cols-1 content-start md:grid-cols-2">
        <CardHeader className="flex flex-col md:flex-row md:items-center">
          <CardDescription className="flex flex-col items-center md:items-start">
            <Avatar className="mx-auto w-32 h-32 md:mx-0">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="text-xl font-bold text-center md:text-left">John Doe</h1>
          </CardDescription>
        </CardHeader>

        <CardContent className="w-[60vw]">
          <div className="pt-2 my-16 font-mono min-h-fit">
            <div className="container mx-auto">
              <div className="p-6 mx-auto max-w-2xl Input">
                <h2 className="text-2xl text-gray-900">Account Setting</h2>
                <form className="pt-4 mt-6 border-t border-gray-400">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="px-3 mb-6 w-full md:w-full">
                      <label
                        className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                        htmlFor="grid-text-1"
                      >
                        email address
                      </label>
                      <Input
                        className="block px-4 py-3 w-full leading-tight text-gray-700 bg-white rounded-md border border-gray-400 shadow-inner appearance-none focus:outline-none focus:border-gray-500"
                        id="grid-text-1"
                        type="text"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <div className="px-3 mb-6 w-full md:w-full">
                      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                        password
                      </label>
                      <div className="w-full btn-wrapper">
                        <Button
                          onClick={() => onSubmit(form.getValues())}
                          type="submit"
                          className="pr-3 pl-3 m-auto w-full border-0 bg-card bg-opacity-medium text-card-foreground"
                        >
                          Change your password
                        </Button>
                        <div className="w-1/2 btn-bg"></div>
                      </div>
                    </div>
                    <div className="px-3 mb-6 w-full md:w-full">
                      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                        pick your country
                      </label>
                      <div className="inline-block relative flex-shrink w-full">
                        <select className="block px-4 py-2 pr-8 w-full text-gray-600 bg-white rounded border border-gray-400 shadow-inner appearance-none">
                          <option>choose ...</option>
                          <option>USA</option>
                          <option>France</option>
                          <option>Spain</option>
                          <option>UK</option>
                        </select>
                        <div className="flex absolute top-0 right-0 items-center px-2 mt-3 text-gray-600 pointer-events-none">
                          <svg
                            className="w-4 h-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="px-3 mb-6 w-full md:w-full">
                      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                        fav language
                      </label>
                      <div className="inline-block relative flex-shrink w-full">
                        <select className="block px-4 py-2 pr-8 w-full text-gray-600 bg-white rounded border border-gray-400 shadow-inner appearance-none">
                          <option>choose ...</option>
                          <option>English</option>
                          <option>France</option>
                          <option>Spanish</option>
                        </select>
                        <div className="flex absolute top-0 right-0 items-center px-2 mt-3 text-gray-600 pointer-events-none">
                          <svg
                            className="w-4 h-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 w-full border-t border-gray-400 personal">
                      <h2 className="text-2xl text-gray-900">Personal info:</h2>
                      <div className="flex justify-between items-center mt-4">
                        <div className="px-3 mb-6 w-full md:w-1/2">
                          <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                            first name
                          </label>
                          <Input
                            className="block px-4 py-3 w-full leading-tight text-gray-700 bg-white rounded-md border border-gray-400 shadow-inner appearance-none focus:outline-none focus:border-gray-500"
                            type="text"
                            required
                          />
                        </div>
                        <div className="px-3 mb-6 w-full md:w-1/2">
                          <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                            last name
                          </label>
                          <Input
                            className="block px-4 py-3 w-full leading-tight text-gray-700 bg-white rounded-md border border-gray-400 shadow-inner appearance-none focus:outline-none focus:border-gray-500"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                      <div className="px-3 mb-6 w-full md:w-full">
                        <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                          user name
                        </label>
                        <Input
                          className="block px-4 py-3 w-full leading-tight text-gray-700 bg-white rounded-md border border-gray-400 shadow-inner appearance-none focus:outline-none focus:border-gray-500"
                          type="text"
                          required
                        />
                      </div>
                      <div className="px-3 mb-6 w-full md:w-full">
                        <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                          Bio
                        </label>
                        <textarea
                          className="px-3 py-2 w-full h-20 font-medium leading-normal placeholder-gray-700 bg-gray-100 rounded-md border border-gray-400 shadow-inner resize-none focus:outline-none focus:bg-white"
                          required
                        ></textarea>
                      </div>
                      <div className="flex justify-end">
                        <div className="w-full btn-wrapper">
                          <Button
                            onClick={() => onSubmit(form.getValues())}
                            type="submit"
                            className="pr-3 pl-3 m-auto w-full border-0 bg-card bg-opacity-medium text-card-foreground"
                          >
                            Save Change
                          </Button>
                          <div className="w-1/2 btn-bg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input className="w-full Input Input-bordered" type="email" {...field} />
                    </FormControl>
                    <FormDescription>We&apos;ll never share your email.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
      </div>
      <CardFooter className="flex flex-row justify-between w-full">
        <div className="w-full btn-wrapper">
          <Button
            onClick={() => onSubmit(form.getValues())}
            type="submit"
            className="pr-3 pl-3 m-auto w-full border-0 bg-card bg-opacity-medium text-card-foreground"
          >
            Save
          </Button>
          <div className="w-1/2 btn-bg"></div>
        </div>
        <div className="w-full btn-wrapper">
          <Button className="pr-3 pl-3 m-auto w-full border-0 bg-card bg-opacity-medium text-card-foreground">
            Forgot your login ?
          </Button>
          <div className="w-1/2 btn-bg"></div>
        </div>
      </CardFooter>
    </Card>
  );
};
export default Profile;
