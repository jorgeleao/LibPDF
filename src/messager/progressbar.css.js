import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width:400px;
  height: 10px;
  background: rgba(0, 0, 0, 0.25);
`;

export const ProgressBar = styled.div`
  width: ${({ progress }) => `${progress}%`};
  height: 10px;
  background: dodgerblue;
`;
