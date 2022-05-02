import React from "react";
import { useForm } from "react-hook-form";
import "./AddItem.css";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const url = `http://localhost:4000/inventory`;
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
        <div className="w-50 mx-auto py-5 additem">
            <h2 className="display-6 text-center">Add A New Item To Stock</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Product Name"
                    {...register("name", {
                        required: true,
                        maxLength: 20,
                    })}
                />
                <textarea
                    rows={5}
                    {...register("description")}
                    placeholder="Product Description"
                />

                <input
                    placeholder="Photo URL"
                    type="text"
                    {...register("img")}
                />
                <input
                    placeholder="Quantity"
                    type="number"
                    {...register("quantity")}
                />
                <input
                    placeholder="Supplier"
                    type="text"
                    {...register("supplier")}
                />
                <input
                    placeholder="Price"
                    type="number"
                    {...register("price")}
                />
                <input
                    type="submit"
                    value="Add Item"
                    className="btn btn-danger"
                />
            </form>
        </div>
    );
};

export default AddItem;
