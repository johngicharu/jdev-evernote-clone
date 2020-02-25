import styled from "styled-components";

const Icon = styled.div<{large?: boolean; rounded?: boolean; onClick?: (e: React.MouseEvent<HTMLDivElement>) => void; className?: string;}>`
  height: ${({large}) => large ? "2em" : "1.2em"};
  width: ${({large}) => large ? "2em" : "1.2em"};
  padding: 0.2em;
  overflow: hidden;
  border-radius: ${({rounded}) => rounded ? "50%" : "0"};
  cursor: pointer;

  svg, img {
    height: 100%;
    width: 100%;
    fill: ${({theme}) => theme.colors.textLightColor};
  }
`;

export default Icon;