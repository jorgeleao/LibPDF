import React from "react";
import * as S from "./progressbar.css";

const ProgressBar = ({ progress }) => {
  return (
    <S.ProgressBarContainer>
      <S.ProgressBar progress={progress} />
    </S.ProgressBarContainer>
  );
};

export default ProgressBar;
