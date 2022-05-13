import React from "react";
import { Button, Form, Placeholder } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="w-50 mx-auto">
       <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
      <input Placeholder='name' className='mb-2' {...register("name",)} />
      <input Placeholder='img url' className='mb-2' {...register("img",)} />
      <input Placeholder='email' className='mb-2' {...register("email",)} />
      <input Placeholder='supplier' className='mb-2' {...register("supplier",)} />
      <input Placeholder='price' className='mb-2' {...register("price",)} />
      <input Placeholder='content' className='mb-2' {...register("content",)} />
      <input Placeholder='price' className='mb-2' type="number" {...register("price")} />
      <input Placeholder='quantity' className='mb-2' type="number" {...register("quantity")} />
      <input Placeholder='sold' className='mb-2' type="number" {...register("sold")} />
      <input type="submit" />
    </form>
    </div>
  );
};

export default AddItem;
