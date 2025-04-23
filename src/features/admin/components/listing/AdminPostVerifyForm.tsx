import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ImageIcon } from "lucide-react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

//mock data
import { mockPosts } from "@/features/admin/data/postData";
import { users } from "@/features/admin/data/userData";

const verifyPostSchema = z.object({
  postID: z.string(),
  address: z.string(),
  price: z.number(),
  description: z.string(),
  image: z.array(z.string()),
  property_type: z.string(),
  area: z.string(),
  house_type: z.string(),
  documentation_list: z.array(z.string()),
  structural_material: z.number(),
  environmental_resistance: z.number(),
  maintenance_condition: z.number(),
  age_score: z.number(),
  verified_quality: z.number(),
  final_score: z.number(),
  township: z.string(),
  title: z.string(),
  user_id: z.number(),
  isActive: z.boolean(),
  isVerify: z.boolean(),
  tour_service: z.number(),
});

export default function AdminPostVerifyForm() {
  const form = useForm<z.infer<typeof verifyPostSchema>>({
    resolver: zodResolver(verifyPostSchema),
  });

  return (
    <ScrollArea className="border rounded-lg h-[40rem] shadow-sm bg-white p-5">
      <section>
        <Form {...form}>
          <form>
            <h1 className="font-bold text-lg">{mockPosts[0].postID}</h1>
            <h2 className="font-bold mt-5">Info</h2>
            <div className="grid grid-cols-2  gap-3 p-2 mt-2">
              <FormField
                control={form.control}
                name="user_id"
                render={({ field }) => (
                  <FormItem className="mb-4 bg-white rounded-lg border shadow-sm p-2">
                    <FormLabel className="text-gray-700">Owner</FormLabel>
                    <FormControl>
                      <Input
                        defaultValue={
                          users.find((user) => user.id === mockPosts[0].user_id)
                            ?.name
                        }
                        {...field}
                        className="border-gray-300"
                      />
                    </FormControl>
                    <div className="items-top flex p-2 space-x-2">
                      <Checkbox id="isVerify" />
                      <label
                        htmlFor="isVerify"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Verify
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="township"
                render={({ field }) => (
                  <FormItem className="mb-4 bg-white rounded-lg border shadow-sm p-2">
                    <FormLabel className="text-gray-700">Township</FormLabel>
                    <FormControl>
                      <Input defaultValue={mockPosts[0].township} {...field} />
                    </FormControl>
                    <div className="items-top flex p-2 space-x-2">
                      <Checkbox id="isVerify" />
                      <label
                        htmlFor="isVerify"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Verify
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="mb-4 bg-white rounded-lg border shadow-sm p-2">
                    <FormLabel className="text-gray-700">Address</FormLabel>
                    <FormControl>
                      <Textarea
                        defaultValue={mockPosts[0].address}
                        {...field}
                      />
                    </FormControl>
                    <div className="items-top flex p-2 space-x-2">
                      <Checkbox id="isVerify" />
                      <label
                        htmlFor="isVerify"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Verify
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="mb-4 bg-white rounded-lg border shadow-sm p-2">
                    <FormLabel className="text-gray-700">Description</FormLabel>
                    <FormControl>
                      <Textarea
                        defaultValue={mockPosts[0].description}
                        {...field}
                      />
                    </FormControl>
                    <div className="items-top flex p-2 space-x-2">
                      <Checkbox id="isVerify" />
                      <label
                        htmlFor="isVerify"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Verify
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="mb-4 bg-white rounded-lg border shadow-sm p-2">
                    <FormLabel className="text-gray-700">Title</FormLabel>
                    <FormControl>
                      <Input defaultValue={mockPosts[0].title} {...field} />
                    </FormControl>
                    <div className="items-top flex p-2 space-x-2">
                      <Checkbox id="isVerify" />
                      <label
                        htmlFor="isVerify"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Verify
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="mb-4 bg-white rounded-lg border shadow-sm p-2">
                    <FormLabel className="text-gray-700">Price</FormLabel>
                    <FormControl>
                      <Input
                        defaultValue={mockPosts[0].price}
                        type="number"
                        {...field}
                        className="border-gray-300"
                      />
                    </FormControl>
                    <div className="items-top flex p-2 space-x-2">
                      <Checkbox id="isVerify" />
                      <label
                        htmlFor="isVerify"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Verify
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="property_type"
                render={({ field }) => (
                  <FormItem className="mb-4 bg-white rounded-lg border shadow-sm p-2">
                    <FormLabel className="text-gray-700">
                      Property Type
                    </FormLabel>
                    <FormControl>
                      <Input
                        defaultValue={mockPosts[0].property_type}
                        {...field}
                        className="border-gray-300"
                      />
                    </FormControl>
                    <div className="items-top flex p-2 space-x-2">
                      <Checkbox id="isVerify" />
                      <label
                        htmlFor="isVerify"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Verify
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="house_type"
                render={({ field }) => (
                  <FormItem className="mb-4 bg-white rounded-lg border shadow-sm p-2">
                    <FormLabel className="text-gray-700">House Type</FormLabel>
                    <FormControl>
                      <Input
                        defaultValue={mockPosts[0].house_type}
                        {...field}
                      />
                    </FormControl>
                    <div className="items-top flex p-2 space-x-2">
                      <Checkbox id="isVerify" />
                      <label
                        htmlFor="isVerify"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Verify
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="area"
                render={({ field }) => (
                  <FormItem className="mb-4 bg-white rounded-lg border shadow-sm p-2">
                    <FormLabel className="text-gray-700">Area</FormLabel>
                    <FormControl>
                      <Input
                        defaultValue={mockPosts[0].area}
                        {...field}
                        className="border-gray-300"
                      />
                    </FormControl>
                    <div className="items-top flex p-2 space-x-2">
                      <Checkbox id="isVerify" />
                      <label
                        htmlFor="isVerify"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Verify
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <h2 className="font-bold mt-5">Documentation Verification</h2>
            <div className="border rounded-lg shadow-sm flex flex-col items-center justify-center bg-white p-5 mt-2">
              <div className="w-full h-[20rem] flex justify-center items-center mb-2 border rounded-lg shadow-sm">
                <ImageIcon size={50} className="text-gray-300" />
              </div>
              <Carousel className="w-full max-w-xs">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">
                              <ImageIcon size={20} className="text-gray-300" />
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <h2 className="font-bold my-5">Resistance Scores</h2>
            <div className="grid grid-cols-3 gap-3 p-2 mt-2">
              <FormField
                control={form.control}
                name="structural_material"
                render={({ field }) => (
                  <FormItem className="mb-4 bg-white rounded-lg border shadow-sm p-2">
                    <FormLabel className="text-gray-700">
                      Strutural Material
                    </FormLabel>
                    <FormControl>
                      <Input
                        defaultValue={mockPosts[0].structural_material}
                        type="number"
                        {...field}
                        className="border-gray-300"
                      />
                    </FormControl>
                    <FormDescription>Score</FormDescription>
                    <div className="items-top flex p-2 space-x-2">
                      <Checkbox id="isVerify" />
                      <label
                        htmlFor="isVerify"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Verify
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="environmental_resistance"
                render={({ field }) => (
                  <FormItem className="mb-4 bg-white rounded-lg border shadow-sm p-2">
                    <FormLabel className="text-gray-700">
                      Environmental
                    </FormLabel>
                    <FormControl>
                      <Input
                        defaultValue={mockPosts[0].environmental_resistance}
                        type="number"
                        {...field}
                        className="border-gray-300"
                      />
                    </FormControl>
                    <FormDescription>Score</FormDescription>
                    <div className="items-top flex p-2 space-x-2">
                      <Checkbox id="isVerify" />
                      <label
                        htmlFor="isVerify"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Verify
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="maintenance_condition"
                render={({ field }) => (
                  <FormItem className="mb-4 bg-white rounded-lg border shadow-sm p-2">
                    <FormLabel className="text-gray-700">
                      Maintenance Condition
                    </FormLabel>
                    <FormControl>
                      <Input
                        defaultValue={mockPosts[0].maintenance_condition}
                        type="number"
                        {...field}
                        className="border-gray-300"
                      />
                    </FormControl>
                    <FormDescription>Score</FormDescription>
                    <div className="items-top flex p-2 space-x-2">
                      <Checkbox id="isVerify" />
                      <label
                        htmlFor="isVerify"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Verify
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="age_score"
                render={({ field }) => (
                  <FormItem className="mb-4 bg-white rounded-lg border shadow-sm p-2">
                    <FormLabel className="text-gray-700">
                      Age Score
                    </FormLabel>
                    <FormControl>
                      <Input
                        defaultValue={mockPosts[0].age_score}
                        type="number"
                        {...field}
                        className="border-gray-300"
                      />
                    </FormControl>
                    <FormDescription>Score</FormDescription>
                    <div className="items-top flex p-2 space-x-2">
                      <Checkbox id="isVerify" />
                      <label
                        htmlFor="isVerify"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Verify
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="verified_quality"
                render={({ field }) => (
                  <FormItem className="mb-4 bg-white rounded-lg border shadow-sm p-2">
                    <FormLabel className="text-gray-700">
                      Verified Quality
                    </FormLabel>
                    <FormControl>
                      <Input
                        defaultValue={mockPosts[0].verified_quality}
                        type="number"
                        {...field}
                        className="border-gray-300"
                      />
                    </FormControl>
                    <FormDescription>Score</FormDescription>
                    <div className="items-top flex p-2 space-x-2">
                      <Checkbox id="isVerify" />
                      <label
                        htmlFor="isVerify"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Verify
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <h2 className="font-bold mt-5">Images</h2>
            <div className="border rounded-lg shadow-sm flex flex-col items-center justify-center bg-white p-5 mt-2">
              <div className="w-full h-[20rem] flex justify-center items-center mb-2 border rounded-lg shadow-sm">
                <ImageIcon size={50} className="text-gray-300" />
              </div>
              <Carousel className="w-full max-w-xs">
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-4xl font-semibold">
                              <ImageIcon size={20} className="text-gray-300" />
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </form>
          <Button className="bg-mint-julep-500 hover:bg-mint-julep-600 mt-5 w-full text-center">Comfirm Post</Button>
        </Form>
      </section>
    </ScrollArea>
  );
}
