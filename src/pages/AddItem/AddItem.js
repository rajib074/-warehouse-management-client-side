import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://rajib-enterprice.herokuapp.com/products`;
    const newData = { ...data, sold: 0 };
    console.log(newData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="w-50 mx-auto my-5">
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Email"
          value={user?.email}
          className="mb-2 form-control"
          {...register("email")}
          readOnly
        />
        <input
          placeholder="Name"
          className="mb-2 form-control"
          {...register("name")}
        />
        <input
          placeholder="Image url"
          className="mb-2 form-control"
          {...register("img")}
        />
        <input
          placeholder="Supplier"
          className="mb-2 form-control"
          {...register("supplier")}
        />
        <input
          placeholder="Description"
          className="mb-2 form-control"
          {...register("content")}
        />
        <input
          placeholder="Price"
          className="mb-2 form-control"
          {...register("price")}
        />
        <input
          placeholder="Quantity"
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
