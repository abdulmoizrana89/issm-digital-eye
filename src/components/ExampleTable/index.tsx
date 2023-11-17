import { z } from "zod";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
// import { UserNav } from "./components/user-nav";
import { taskSchema } from "./data/schema";

import mockTasks from "./data/mockdata";
// import { mockEmpData } from "@/constants/Columns/EmployeeData/mockdata";

// Simulate a database read for tasks.
function getTasks() {
  //   const tasks = JSON.parse(mockTasks.toString())

  return z.array(taskSchema).parse(mockTasks);
}

export default function TaskPage() {
  const tasks = getTasks();

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
        <DataTable
          data={tasks}
          columns={columns}
          onRowSelect={(row) => {
            console.log(row);
          }}
        />
      </div>
    </>
  );
}
