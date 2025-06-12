import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateItem = () => {

    // 1. Create a state for the form
      const { id } = useParams();
      const [item, setItem] = useState(null);
      const [name, setName] = useState("");
      const [status, setStatus] = useState("");
      const [message, setMessage] = useState("");

    // 2. Create a function to handle the form submission
    // 3. Create a function to handle the form input changes

    // your code here

  useEffect(() => {
    fetch(`http://${import.meta.env.VITE_API_URI}/doors/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setName(data.name);
        setStatus(data.status);
      })
      .catch((err) => console.error("Failed to fetch item", err));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://${import.meta.env.VITE_API_URI}/doors/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, status }),
      });

      const updated = await res.json();
      setMessage("Updated successfully!");
      setItem(updated);
    } catch (err) {
      setMessage("Error updating item");
      console.error(err);
    }
  };

  if (!item) return <div>Loading...</div>;

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold text-gray-700 mt-7">Edit Door #{id}</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-b-4 border-gray-500 p-2 w-full font bg-gray-100 text-stone-600"
        />
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-b-4 border-gray-500 p-2 mt-5 p-2 w-full font-semibold bg-gray-100 text-stone-600"
        />
        <div className="flex justify-center">          
          <button type="submit" className="bg-gray-500 text-white px-4 py-2 rounded mt-3">Update</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );};

export default UpdateItem;

