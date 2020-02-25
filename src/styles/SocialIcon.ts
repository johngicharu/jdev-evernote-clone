import styled from "styled-components";

const SocialIcon = styled.a<{large?: boolean; rounded?: boolean}>`
  height: ${({large}) => large ? "2em" : "1.2em"};
  width: ${({large}) => large ? "2em" : "1.2em"};
  padding: .2em;
  overflow: hidden;
  border-radius: ${({rounded}) => rounded ? "50%" : "0"}

  svg, img {
    height: 100%;
    width: 100%;
    fill: ${({theme}) => theme.colors.textLightColor};
  }
`;

export default SocialIcon;