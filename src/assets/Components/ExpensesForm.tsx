import React from "react";
import { category } from "./category";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  description: z.string().min(4).max(40),
  amount: z.number().min(0.01).max(100_000),
  category: z.enum(category),
});

type ExpensFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpensFormData) => void;
}

const ExpensesForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpensFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <label htmlFor="description">Description</label>
      <input {...register("description")} type="text" id="description" />
      {errors.description && <p>please write good</p>}
      <label htmlFor="amount">Amount</label>
      <input
        {...register("amount", { valueAsNumber: true })}
        id="amount"
        type="number"
      />
      {errors.amount && errors.amount.message}
      <label htmlFor="category">Category</label>

      <select {...register("category")}>
        <option value="">Select Category</option>
        {category.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      {errors.category && <p>please write good</p>}

      <button>Add row</button>
    </form>
  );
};

export default ExpensesForm;
