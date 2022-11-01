import styled from "styled-components";
import background from "../assets/background.png";

export const BackgroundContainer = styled.div`
  position: relative;

  background-image: url(${background.src});

  width: 100%;
  height: 100vh;
`;

export const BackBorderBox = styled.div`
  position: absolute;
  width: 699px;
  height: 660px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background: linear-gradient(198.7deg, #7f75f0 -40.02%, #101f32 96.22%),
    linear-gradient(0deg, #ffffff, #ffffff);
`;

export const FrontBox = styled.div`
  position: absolute;
  width: 659px;
  height: 630px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background: white;
  border-radius: 20px;
  padding: 57px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 60px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
  color: #423f45;
`;
export const Container = styled.div``;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const Button = styled.div`
  font-family: "Calibri";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  display: flex;
  align-items: center;

  color: #423f45;

  background: #ffd748;
  border-radius: 20px;

  padding: 5px 10px;
`;

export const ButtonPlay = styled.div`
  background: #38df7a;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  display: flex;
  align-items: center;

  color: #ffffff;
  padding: 5px 45px;
`;
