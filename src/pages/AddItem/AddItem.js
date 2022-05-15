import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
    console.log(data);
    const url = `http://localhost:5000/product`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result=>{
      console.log(result);
    });
   
  };
  return (
    <div className="w-50 mx-auto">
       <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
      <input Placeholder='Name' className='mb-2' {...register("name",)} />
      <input Placeholder='Image url' className='mb-2' {...register("img",)} />
      <input Placeholder='Email' className='mb-2' {...register("email",)} />
      <input Placeholder='Supplier' className='mb-2' {...register("supplier",)} />
      <input Placeholder='Description' className='mb-2' {...register("content",)} />
      <input Placeholder='Price' className='mb-2' {...register("price",)} />
      <input Placeholder='Quantity' className='mb-2' type="number" {...register("quantity")} />
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
};

export default AddItem;
