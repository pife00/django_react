import { useState, useEffect } from "react";
import { Tasks } from "../models/tasks";
import get_all_tasks from "../api/get/get_all_tasks";
import List from "../components/list";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tasks, setTasks] = useState<Tasks[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await get_all_tasks();
    setTasks(data);
  };
  return (
    <>
      <h1 className="text-2xl text-gray-900 font-semibold text-center py-6">
        {" "}
        My Tasks{" "}
      </h1>
      <br />
      {
        tasks.length > 0 ? <List myList={tasks!} /> : <div></div>
      }
      
    </>
  );
}
