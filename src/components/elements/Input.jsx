import styled from "styled-components";
import StyledTheme from "../StyledComponents/StyledTheme";

const Input = styled(StyledTheme)`
  font-size: 14px;
  padding: 16px 30px 16px 30px;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  color: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: 0 0 0 0 rgb(108 41 245 / 0.05);
  outline: 0;
  transition: border-color 0.3s, box-shadow 0.3s ease;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  &:hover {
    border-color: #cbd5e1;
  }
  &:focus {
    border-color: ${(props) => props.theme.colors.success};
    box-shadow: 0 0 0 4px rgb(108 41 245 / 0.05);
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.primary};
    opacity: 0.8;
  }
`;
Input.defaultProps = {
  as: "input",
};
export default Input;
