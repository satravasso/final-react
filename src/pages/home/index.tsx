import { ButtonComponent } from "../../components/button";
import { StyledHome, Wrapper, Typing } from "./styles";

export const HomePage = (props: any) => {
  return (
    <StyledHome>
      <Wrapper>
        <Typing>
          Eu sou uma desenvolvedora Front-End que adora Abelhinhas.
        </Typing>
      </Wrapper>
      <ButtonComponent setSelectedTheme={props.setSelectedTheme}>
        Mude a cor aqui
      </ButtonComponent>
    </StyledHome>
  );
};
