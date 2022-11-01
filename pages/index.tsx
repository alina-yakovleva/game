import { useState } from "react";

import {
  BackBorderBox,
  BackgroundContainer,
  Button,
  ButtonPlay,
  Buttons,
  Container,
  Content,
  FrontBox,
  Title,
} from "../styles/styles";

import Range from "../components/Range";

function Home() {
  const [value, setValue] = useState(2);
  const [range, setRange] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleChangeRange = (e) => {
    setRange(e.target.value);
  };
  const itemsNumber = [2, 3, 4, 5];
  const values = [0, 9, 19, 50, 99, 999];

  return (
    <BackgroundContainer>
      <BackBorderBox>
        <FrontBox>
          <Content>
            <Container>
              <Title>Кол-во предметов</Title>
              <Range
                value={value}
                handleChange={handleChange}
                min={2}
                step={1}
                max={5}
                countRange={itemsNumber}
              />
            </Container>
            <Container>
              <Title>Значение</Title>
              <Range
                value={range}
                handleChange={handleChangeRange}
                min={0}
                step={1}
                max={5}
                countRange={values}
              />
            </Container>
            <Container>
              <Buttons>
                <Button>По возрастанию</Button>
                <Button>По убыванию</Button>
              </Buttons>
            </Container>
            <Container>
              <ButtonPlay>Играть</ButtonPlay>
            </Container>
          </Content>
        </FrontBox>
      </BackBorderBox>
    </BackgroundContainer>
  );
}
export default Home;
