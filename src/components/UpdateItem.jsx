import { useState } from "react";

const UpdateItem = ({ item }) => {
    // 1. Create a state for the form
    // 2. Create a function to handle the form submission
    // 3. Create a function to handle the form input changes
    // your code here


    const [updatedValue, setUpdatedValue] = useState(item?.name || "");
    const handleUpdate = async (e)=>{
        e.preventDefault();
        try{

            const response = await fetch(``,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({name:updatedValue}),
            });


            if (!response.ok) {
                console.error("Failed to update item")
            }
            else{
                console.log("Item updated successfully!")};
        }
        catch (error){
            console.error("Error updating item:",error);
                }
    };

    const handleInputChange = (e)=>{
        setUpdatedValue(e.target.value);
    }

    return (
        <form onSubmit={handleUpdate}>
            <h3>Update Item</h3>
            <input 
                type="text"
                value={updatedValue}
                onChange={handleInputChange}
                placeholder="Enter the New Name"

            />
            <button type="submit">Update</button>
        </form>
    );
};

export default UpdateItem;

