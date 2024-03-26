import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { stepOneSchema, stepTwoSchema } from '../schemas';

interface StepOneProps {
  defaultValues: {
    email: string;
  };
  onSubmit: (data: any) => void;
}


export const StepTwo: React.FC<StepOneProps> = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(stepTwoSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register("email")} placeholder="Last Name" />
      {errors.email && <p>{errors.email?.message}</p>}

      <button type="submit">Next</button>
    </form>
  );
};
