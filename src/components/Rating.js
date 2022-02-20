import React from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";

const Rating = ({ rate, count }) => {
  return (
    <RateBox>
      <IconContext.Provider value={{ color: "#FF9529" }}>
        <span>
          {rate < 0.5 ? <BsStar /> : rate < 1 ? <BsStarHalf /> : <BsStarFill />}
        </span>
        <span>
          {rate < 1.5 ? <BsStar /> : rate < 2 ? <BsStarHalf /> : <BsStarFill />}
        </span>
        <span>
          {rate < 2.5 ? <BsStar /> : rate < 3 ? <BsStarHalf /> : <BsStarFill />}
        </span>
        <span>
          {rate < 3.5 ? <BsStar /> : rate < 4 ? <BsStarHalf /> : <BsStarFill />}
        </span>
        <span>
          {rate < 4.5 ? <BsStar /> : rate < 5 ? <BsStarHalf /> : <BsStarFill />}
        </span>
      </IconContext.Provider>
      <span>({count} customer reviews)</span>
    </RateBox>
  );
};

export default Rating;

const RateBox = styled.div`
  display: flex;
  align-items: center;

  span {
    display: flex;

    &:last-child {
      margin-left: 0.5rem;
    }
  }
`;
