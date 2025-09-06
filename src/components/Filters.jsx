function Filters({ filter, setFilter }) {
  const buttons = ["All", "Pending", "In Progress", "Completed"];

  return (
    <div className="flex flex-wrap gap-2 mb-4 justify-center">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => setFilter(btn)}
          className={`px-4 py-2 rounded ${
            filter === btn ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

export default Filters;
