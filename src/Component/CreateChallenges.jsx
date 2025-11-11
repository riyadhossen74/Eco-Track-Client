import React, { use } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const CreateChallenges = () => {
  const { user } = use(AuthContext);
  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const challengeData = {
      title: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
      duration: e.target.duration.value,
      impactMetric: e.target.impactMetric.value,
      target: e.target.target.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      imageUrl: e.target.imageUrl.value,
      createdBy: user.email,
    };
    fetch('http://localhost:5000/challenges', {
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(challengeData)
    })
    .then(res => res.json())
    .then(data => {
      console.log('after data', data)
    })
    .catch(err =>{
      console.log(err)
    })
  };
  return (
    <div className="max-w-3xl mx-auto my-10 p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">
        Create New Challenge
      </h2>
      <p className="text-slate-600 dark:text-slate-300 mb-4">
        Share a sustainability challenge with the community
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Challenge Title */}
        <div>
          <label className="block text-slate-800 dark:text-slate-200 font-medium mb-1">
            Challenge Title *
          </label>
          <input
            type="text"
            name="title"
            placeholder="Challenge Title"
            // value={formData.title}
            // onChange={handleChange}
            className="w-full p-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-slate-800 dark:text-slate-200 font-medium mb-1">
            Category *
          </label>
          <select
            name="category"
            // value={formData.category}
            // onChange={handleChange}
            className="w-full p-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
            required
          >
            <option value="">Select a category</option>
            <option value="Waste Reduction">Waste Reduction</option>
            <option value="Energy Conservation">Energy Conservation</option>
            <option value="Water Conservation">Water Conservation</option>
            <option value="Sustainable Transport">Sustainable Transport</option>
            <option value="Green Living">Green Living</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-slate-800 dark:text-slate-200 font-medium mb-1">
            Description *
          </label>
          <textarea
            name="description"
            placeholder="Describe the challenge and its goals..."
            // value={formData.description}
            // onChange={handleChange}
            className="w-full p-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
            rows={4}
            required
          />
        </div>

        {/* Duration & Impact Metric */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-800 dark:text-slate-200 font-medium mb-1">
              Duration (days) *
            </label>
            <input
              type="number"
              name="duration"
              placeholder="30"
              //   value={formData.duration}
              //   onChange={handleChange}
              className="w-full p-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
              required
            />
          </div>
          <div>
            <label className="block text-slate-800 dark:text-slate-200 font-medium mb-1">
              Impact Metric *
            </label>
            <input
              type="text"
              name="impactMetric"
              placeholder="kg plastic saved"
              //   value={formData.impactMetric}
              //   onChange={handleChange}
              className="w-full p-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
              required
            />
          </div>
        </div>

        {/* Target */}
        <div>
          <label className="block text-slate-800 dark:text-slate-200 font-medium mb-1">
            Target *
          </label>
          <input
            type="text"
            name="target"
            placeholder="Reduce plastic waste by 50%"
            // value={formData.target}
            // onChange={handleChange}
            className="w-full p-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
            required
          />
        </div>

        {/* Start & End Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-slate-800 dark:text-slate-200 font-medium mb-1">
              Start Date *
            </label>
            <input
              type="date"
              name="startDate"
              //   value={formData.startDate}
              //   onChange={handleChange}
              className="w-full p-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
              required
            />
          </div>
          <div>
            <label className="block text-slate-800 dark:text-slate-200 font-medium mb-1">
              End Date *
            </label>
            <input
              type="date"
              name="endDate"
              //   value={formData.endDate}
              //   onChange={handleChange}
              className="w-full p-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
              required
            />
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-slate-800 dark:text-slate-200 font-medium mb-1">
            Image URL (optional)
          </label>
          <input
            type="text"
            name="imageUrl"
            placeholder="https://example.com/image.jpg"
            // value={formData.imageUrl}
            // onChange={handleChange}
            className="w-full p-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            type="submit"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Create Challenge
          </button>
          <button className="px-6 py-3 bg-gray-300 dark:bg-slate-600 text-slate-900 dark:text-slate-100 rounded-lg hover:bg-gray-400 dark:hover:bg-slate-500 transition">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateChallenges;
