import React, { use, useEffect,  useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import Swal from "sweetalert2";
import { Link } from "react-router";
import Challenges from "./Challenges";


const MyActivictes = () => {
  
  
  const { user } = use(AuthContext);
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const userId = user?.uid;
  console.log(userId);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/challenges/join/${userId}`
        );
        const data = await res.json();
        setChallenges(data);
      } catch (err) {
        console.error("Error fetching challenges:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, [userId]);

  if (loading) return <p>Loading...</p>;

  

  const handleDelete = (id) => {
    console.log("delete data", id);
    fetch(`http://localhost:5000/my-activities/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after delete data", data);
        if (data.deletedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Deleted Done",
            showConfirmButton: false,
            timer: 1500,
          });
          const remainingData = challenges.filter((user) => user._id !== id);
          setChallenges(remainingData);
        }
        
      });
  };
  

  return (
    <section className="max-w-5xl mx-auto my-10 space-y-6 ">
      {challenges.length === 0 ? (
        <p className="text-center text-slate-600 dark:text-slate-400">
          No joined challenges found 😔
        </p>
      ) : (
        challenges.map((challenge) => (
          <article
            key={challenge._id}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-6 border border-slate-200 dark:border-slate-700"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                {challenge.title}
              </h2>
              <span
                className={`text-sm font-medium px-3 py-1 rounded-full ${
                  challenge.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : challenge.status === "In Progress"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {challenge.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              {challenge.description}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
              Category: {challenge.category}
            </p>

            {/* Progress Bar */}
            <div className="mb-4">
              <label className="block text-slate-800 dark:text-slate-200 font-medium mb-1">
                Progress: {challenge.progress}%
              </label>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${challenge.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-400 mb-5">
              <div>
                <p className="font-medium">Joined</p>
                <p>{new Date(challenge.joinDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="font-medium">Last Updated</p>
                <p>{new Date(challenge.lastUpdated).toLocaleDateString()}</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <Link to={`/my-activates/${challenge._id}`}
                
                className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                Update Progress
              </Link>
              <button
                onClick={() => handleDelete(challenge._id)}
                className="px-4 py-2 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition"
              >
                Leave Challenge
              </button>
            </div>
          </article>
        ))
      )}
     

      
    </section>
  );
};

export default MyActivictes;
