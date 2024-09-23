import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import * as bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { USER } from "@/user/user";

const formSchema = z.object({
  email: z.string().email().min(1, {
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const UserAuthForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isSubmitting } = form.formState;

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      const { data } = await axios.get("http://localhost:4000/users");

      const selectedUser: USER = data.find(
        (user: USER) => user.email === values.email
      );
      if (selectedUser) {
        const hashedPassword = await bcrypt.compare(
          values.password,
          selectedUser.password
        );
        if (hashedPassword) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { password, ...user } = selectedUser;
          localStorage.setItem("my-token", user.email);
          navigate("/");
          toast.success("user login successfully!");
        } else {
          toast.error("Password doesn't matched!");
        }
      } else {
        toast.error("Email doesn't exist!");
      }
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  }
  return (
    <div className='"grid gap-6"'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="name@example.com"
                    disabled={isSubmitting}
                    {...field}
                  />
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
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="*****"
                      disabled={isSubmitting}
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword((prev) => !prev)}
                      disabled={isSubmitting}
                    >
                      {showPassword && !isSubmitting ? (
                        <EyeIcon className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
                      )}
                      <span className="sr-only">
                        {showPassword ? "Hide password" : "Show password"}
                      </span>
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            {isSubmitting && <Loader2 className="animate-spin mr-2" />}Sign In
            with Email
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UserAuthForm;
