import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formschema = z.object({
  name: z.string().min(1),
});

const CreateCommunity: React.FC = () => {
  const form = useForm<z.infer<typeof formschema>>({
    resolver: zodResolver(formschema),
    defaultValues: {
      name: "",
    },
  });

  return (
    <div className=" w-full h-full pt-3 flex justify-center">
      <div className=" lg:w-[52%] bg-white border border-gray-200 rounded-md flex flex-col p-4 h-fit gap-y-2">
        {/* Heading */}
        <div className=" pb-4 border-b border-gray-200">
          <h1 className=" text-2xl font-bold">Create a Community</h1>
        </div>
        {/* form */}
        <Form {...form}>
          <form className=" pt-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-lg">
                    Name{" "}
                    <p className=" text-sm text-black/70">
                      Community names including capitalization cannot be changed.
                    </p>
                  </FormLabel>
                  <div className=" relative">
                    <p className=" absolute text-sm left-0 w-8 inset-y-0 grid place-items-center text-zinc-400">r/</p>
                    <FormControl>
                      <Input {...field} className=" pl-6 lg:text-base" autoComplete="off" />
                    </FormControl>
                  </div>
                </FormItem>
              )}
            />
            {/* Button  */}
            <div className=" pt-6 space-x-2 flex items-center justify-end w-full">
              <Button variant="secondary">Cancel</Button>
              <Button type="submit" disabled={!form.formState.isValid}>
                Create Community
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateCommunity;
