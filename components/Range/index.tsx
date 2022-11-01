import React, { FC } from "react";
import { CountRangeContainer, Counts, Input, Output } from "./styles";
interface IRange {
  value: number;
  handleChange: (arg: any) => void;
  min: number;
  max: number;
  step: number;
  countRange: any;
}
const ItemsRange: FC<IRange> = ({
  value,

  handleChange,
  min,
  max,
  step,
  countRange,
}) => {
  return (
    <>
      <Input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        style={{ width: min == 2 ? "366px" : "531px" }}
      />
      <Output>
        <CountRangeContainer
          style={{
            gap: min == 2 ? "103px" : "84px",
          }}
        >
          {countRange.map((i) => (
            <Counts>{i}</Counts>
          ))}
        </CountRangeContainer>
      </Output>
    </>
  );
};
export default ItemsRange;
