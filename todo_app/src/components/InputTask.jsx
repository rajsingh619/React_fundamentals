
export default function InputTask({onAddTask,onChangeInput, taskName}) {
  
  return (
    <>
      <div className="bg-slate-500 h-20 w-1/2 ml-80 mt-4 flex gap-2 justify-center">
        <input
          value={taskName}
          onChange={onChangeInput}
          type="text"
          placeholder="Add new task"
          className="h-12 w-1/2 mt-4 px-4 py-2 border rounded"
        />
        <button
          onClick={onAddTask}
          className="px-6 py-2 bg-blue-500 text-white rounded h-12 w-32 mt-4"
        >
          + Add
        </button>
      </div>
    </>
  );
}
