import styled from "styled-components";

export const Label = styled.label`
  display: block;
  margin: 0 0 2.5rem;
`;

export const Input = styled.input`
  appearance: none;
  background: #ffd748;
  border-radius: 10px;
  height: 21px;
  outline: none;
  width: 366px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #104987;
    border: 0;
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
    cursor: pointer;
  }
`;

export const Output = styled.div`
  position: relative;
`;

export const CountRangeContainer = styled.div`
  position: absolute;
  top: -55px;

  color: #104987;
  display: flex;
`;

export const Counts = styled.div`
  font-family: "Calibri";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  color: #4f4b61;
`;
