import React from "react";
import { Button, Form } from "react-bootstrap";

const AddItem = () => {
  return (
    <div>
      <Form className="w-50 m-auto">
        <Form.Group className="hidden w-full lg:flex items-center text-sm leading-6 bg-slate-200 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-3 pl-3 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700">
          <Form.Control type="email" placeholder="Enter email" />          
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Supplier" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Quantity" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Address" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="price" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Image URL" />
        </Form.Group>

        <Button className="w-100" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddItem;
