import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="w-50 mx-auto">
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input Placeholder="Email" value={user?.email} className="mb-2 form-control" {...register("email")} readonly disabled />
        <input Placeholder="Name" className="mb-2 form-control" {...register("name")} />
        <input Placeholder="Image url" className="mb-2 form-control" {...register("img")} />
        <input
          Placeholder="Supplier"
          className="mb-2 form-control"
          {...register("supplier")}
        />
        <input
          Placeholder="Description"
          className="mb-2 form-control"
          {...register("content")}
        />
        <input Placeholder="Price" className="mb-2 form-control" {...register("price")} />
        <input
          Placeholder="Quantity"
          className="mb-2 form-control"
          type="number"
          {...register("quantity")}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddItem;
