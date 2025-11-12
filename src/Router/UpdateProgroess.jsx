import React, { useRef } from 'react';
import { Link, useLoaderData, useNavigate,  } from 'react-router';
import Swal from 'sweetalert2';

const UpdateProgroess = () => {
    const UpdateRef = useRef();
    const data = useLoaderData()
    console.log(data)
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
    e.preventDefault();
    const updateProgress = {
      status: e.target.status.value,
      progress: e.target.progress.value,
    };
    console.log(updateProgress);
    fetch(`http://localhost:5000/my-activities/${data._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProgress),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Update Done",
              showConfirmButton: false,
              timer: 1500
            });
            
                goBack()
        }
        
       
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const goBack = () => {
    navigate(-1);
  };
    return (
         <div className='my-35'>
            <form
            onSubmit={handleSubmit}
            className="max-w-sm mx-auto p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md space-y-4"
          >
            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                Status
              </label>
              <input
                type="text"
                name="status"
                className="mt-1 w-full px-3 py-2 border rounded bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-100"
              />
            </div>

            {/* Progress */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                Progress (%)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                name="progress"
                className="mt-1 w-full px-3 py-2 border rounded bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-slate-100"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <Link to='my-activates'
                type="button"
                onClick={goBack}
                className="px-4 py-2 rounded-xl bg-gray-400 text-white hover:bg-gray-500 transition"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Save Changes
              </button>
            </div>
          </form>
         </div>
    );
};

export default UpdateProgroess;