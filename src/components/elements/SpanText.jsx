import styled from "styled-components";
import StyledTheme from "../StyledComponents/StyledTheme";

const ThemeSize = ({ theme, size }) => {
  switch (size) {
    case "sm":
      return `${theme.fontsize.sm}`;
    case "md":
      return `${theme.fontsize.md}`;
    case "lg":
      return `${theme.fontsize.lg}`;
    case "xl":
      return `${theme.fontsize.xl}`;
    default:
      return `${theme.fontsize.sm}`;
  }
};

const StyledText = styled(StyledTheme)`
  font-size: ${(props) => ThemeSize(props)};
`;
StyledText.defaultProps = {
  fontcolor: "true",
  as: "span",
};
export default StyledText;
