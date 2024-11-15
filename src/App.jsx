import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [theme, setTheme] = useState("light");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <Header>
          <Title>TODO</Title>
          <ThemeToggle onClick={toggleTheme}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </ThemeToggle>
        </Header>
        <InputContainer>
          <Input
            type="text"
            placeholder="Currently typing..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <AddButton onClick={addTask}>Add</AddButton>
        </InputContainer>
        <TaskList>
          {tasks.map((task, index) => (
            <Task key={index} completed={task.completed}>
              <Checkbox onClick={() => toggleTask(index)}>
                {task.completed ? "✓" : ""}
              </Checkbox>
              <TaskText>{task.text}</TaskText>
              <DeleteButton onClick={() => deleteTask(index)}>×</DeleteButton>
            </Task>
          ))}
        </TaskList>
      </Container>
    </ThemeProvider>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.titleColor};
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.toggleColor};
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.inputBg};
  color: ${({ theme }) => theme.inputColor};
  outline: none;
`;

const AddButton = styled.button`
  padding: 10px;
  margin-left: 10px;
  background-color: ${({ theme }) => theme.buttonBg};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.buttonColor};
  cursor: pointer;
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  width: 100%;
`;

const Task = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.taskBg};
  color: ${({ theme, completed }) => (completed ? theme.completedColor : theme.taskColor)};
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  border-radius: 4px;
`;

const Checkbox = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
  width: 20px;
`;

const TaskText = styled.span`
  flex: 1;
  margin: 0 10px;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.deleteColor};
  cursor: pointer;
  font-size: 1.2rem;
`;
