import css from "styled-jsx/css";
import { breakpoints } from "../../styles/theme";

export default css`
  div {
    height: 100vh;
    display: grid;
    place-items: center;
  }
  main {
    background: hsl(0, 0%, 100%);
    border-radius: 10px;
    box-shadow: 0 10px 25px hsla(0, 0%, 0%, 0.1);
    height: 100%;
    width: 100%;
  }
  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  }
`;
