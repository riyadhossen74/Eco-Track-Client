import { Link, useLoaderData, useNavigate } from "react-router";
import useAxios from "./useAxios";
import Swal from "sweetalert2";




const UpdateProgroess = () => {
  const axiosInstance = useAxios();
  const data = useLoaderData();
  console.log(data);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateProgress = {
      status: e.target.status.value,
      progress: e.target.progress.value,
    };
    console.log(updateProgress);
    axiosInstance
      .patch(`/my-activities/${data._id}`, updateProgress)

      .then((data) => {
        if (data.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Update Done",
            showConfirmButton: false,
            timer: 1500,
          });

         
        }
         goBack();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="my-35">
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md space-y-4"
      >
        {/* Status */}
        <div>
          <label className="block text-slate-800 dark:text-slate-200 font-medium mb-1">
            Category *
          </label>
          <select
            name="status"
            className="w-full p-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
            required
          >
            <option value="">Select a Status</option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
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
            required
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <Link
            to="my-activates"
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
