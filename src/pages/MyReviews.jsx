import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [editingReview, setEditingReview] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/reviews?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your review has been deleted.", "success");
              setReviews(reviews.filter((r) => r._id !== id));
            }
          });
      }
    });
  };

  const handleEdit = (review) => {
    setEditingReview(review);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    const rating = form.rating.value;

    fetch(`http://localhost:5000/reviews/${editingReview._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment, rating }),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Updated!", "Your review has been updated.", "success");
        const updated = reviews.map((r) =>
          r._id === editingReview._id ? { ...r, comment, rating } : r
        );
        setReviews(updated);
        setEditingReview(null);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Reviews</h2>

      {reviews.length === 0 ? (
        <p>No reviews found.</p>
      ) : (
        <ul className="space-y-4">
          {reviews.map((review) => (
            <li
              key={review._id}
              className="p-4 border rounded shadow bg-base-100 space-y-1"
            >
              <p className="font-semibold">{review.resourceName}</p>
              <p>{review.comment}</p>
              <p className="text-sm text-gray-500">Rating: {review.rating}</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleEdit(review)}
                  className="btn btn-sm btn-warning"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(review._id)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Edit Modal */}
      {editingReview && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded shadow max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Edit Review</h3>
            <form onSubmit={handleUpdate} className="space-y-3">
              <div>
                <label className="block text-sm font-medium">Comment</label>
                <input
                  type="text"
                  name="comment"
                  defaultValue={editingReview.comment}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Rating</label>
                <input
                  type="number"
                  name="rating"
                  defaultValue={editingReview.rating}
                  min="1"
                  max="5"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button type="submit" className="btn btn-success btn-sm">
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => setEditingReview(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
