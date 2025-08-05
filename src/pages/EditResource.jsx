import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditResource = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resource, setResource] = useState(null);

  useEffect(() => {
    fetch(`https://your-backend-api.com/resources/${id}`)
      .then(res => res.json())
      .then(data => setResource(data));
  }, [id]);

  const handleUpdate = e => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const photo = form.photo.value;

    const updated = { title, category, photo };

    fetch(`https://your-backend-api.com/resources/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updated),
    })
      .then(res => res.json())
      .then(data => {
        Swal.fire("Updated!", "Your resource has been updated.", "success");
        navigate("/");
      });
  };

  if (!resource) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded">
      <h2 className="text-2xl font-bold mb-4">Edit Resource</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          name="title"
          defaultValue={resource.title}
          placeholder="Title"
          className="w-full border p-2"
        />
        <input
          type="text"
          name="category"
          defaultValue={resource.category}
          placeholder="Category"
          className="w-full border p-2"
        />
        <input
          type="text"
          name="photo"
          defaultValue={resource.photo}
          placeholder="Photo URL"
          className="w-full border p-2"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Update Resource
        </button>
      </form>
    </div>
  );
};

export default EditResource;
