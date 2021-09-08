import { pageInterface } from "./interface";
import { StyledMainPage } from "./styles";

export const Container = (props: pageInterface) => {
  return <StyledMainPage>{props.children}</StyledMainPage>;
};
