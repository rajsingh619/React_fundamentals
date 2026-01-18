export default function TaskStates({ taskList,onMoveTask }) {
  return (
    <div className="flex gap-80 ml-32 mt-8">
      <div>
        <button className="px-6 py-2 bg-blue-500 text-white rounded h-16 w-32 mt-4">
          Not Started
        </button>
        <ol>
          {taskList
            .filter((task) => task.place === 0)
            .map((task) => (
              <li key={task.id} className="flex gap-2 items-center my-2">
                {task.task}
                <button
                  onClick={() => onMoveTask(task.id)}
                  className="px-3 py-1 bg-green-500 text-white rounded text-sm"
                >
                  →
                </button>
              </li>
            ))}
        </ol>
      </div>
      <div>
        <button className="px-6 py-2 bg-blue-500 text-white rounded h-16 w-32 mt-4">
          In Progress
        </button>
         <ol>
          {taskList
            .filter((task) => task.place === 1)
            .map((task) => (
              <li key={task.id} className="flex gap-2 items-center my-2">
                {task.task}
                <button
                  onClick={() => onMoveTask(task.id)}
                  className="px-3 py-1 bg-green-500 text-white rounded text-sm"
                >
                  →
                </button>
              </li>
            ))}
        </ol>
      </div>
      <div>
        <button className="px-6 py-2 bg-blue-500 text-white rounded h-16 w-32 mt-4">
          Done
        </button>
         <ol>
          {taskList
            .filter((task) => task.place === 2)
            .map((task) => (
              <li key={task.id} className="flex gap-2 items-center my-2">
                {task.task}
                {/* <button
                  onClick={() => onMoveTask(task.id)}
                  className="px-3 py-1 bg-green-500 text-white rounded text-sm"
                >
                  →
                </button> */}
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}
