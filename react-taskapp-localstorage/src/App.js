import { useState, useEffect } from "react";
import "./App.css";

import TaskCreator from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";
import { Container } from "./components/Container";
import { TaskBanner } from "./components/TaskBanner";


function App() {
  const [userName, setUserName] = useState("Daniel");
  const [taskItems, setTaskItem] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function createTask(taskName) {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItem([...taskItems, { name: taskName, done: false }]);
    }
  }

  const toogleTask = (task) => {
    setTaskItem(
      taskItems.map((tsk) =>
        task.name === tsk.name ? { ...tsk, done: !tsk.done } : tsk
      )
    );
  };

  useEffect(() => {
    const data = localStorage.getItem("tasks");
    if (data) {
      setTaskItem(JSON.parse(data));
    }
  }, []);

  const cleanTask = () => {
    setTaskItem(taskItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <main className="bg-dark vh-100 text-white">
      <TaskBanner userName={userName} taskItems={taskItems} />
      <Container>
        <TaskCreator createTask={createTask} number={30} />
        <TaskTable tasks={taskItems} toogleTask={toogleTask} />
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTask={cleanTask}
        />

        {showCompleted && (
          <TaskTable
            tasks={taskItems}
            toogleTask={toogleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
}

export default App;
