import { HeaderInterface } from "./interface";
import {
  StyledChildren,
  StyledHeader,
  StyledListChildren,
  StyledLogo,
  StyledMenu,
} from "./styles";

export const HeaderComponent = (props: HeaderInterface) => {
  return (
    <StyledHeader>
      {props.logo && <StyledLogo src={props.logo} />}
      <StyledListChildren>
        {props.items.map((item) => {
          return <StyledChildren href={item.link}>{item.name}</StyledChildren>;
        })}
      </StyledListChildren>
      {props.menu && <StyledMenu src="assets/menu.png" />}
    </StyledHeader>
  );
};
