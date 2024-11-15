import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#f0f0f0",
  titleColor: "#333",
  toggleColor: "#333",
  inputBg: "#fff",
  inputColor: "#333",
  buttonBg: "#333",
  buttonColor: "#fff",
  taskBg: "#fff",
  taskColor: "#333",
  completedColor: "#999",
  deleteColor: "#ff4d4d",
  borderColor: "#ddd"
};

export const darkTheme = {
  body: "#333",
  titleColor: "#fff",
  toggleColor: "#f0f0f0",
  inputBg: "#555",
  inputColor: "#fff",
  buttonBg: "#fff",
  buttonColor: "#333",
  taskBg: "#444",
  taskColor: "#fff",
  completedColor: "#777",
  deleteColor: "#ff4d4d",
  borderColor: "#555"
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.titleColor};
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
`;
