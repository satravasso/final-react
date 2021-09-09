import { useTheme } from "../../theme/useTheme";
import { getFromLS } from "../../utils/storage";
import { ButtonInterface } from "./interface";
import { ButtonStyled } from "./styles";

export const ButtonComponent = (props: ButtonInterface) => {
  const themesFromStore = getFromLS("all-themes");
  const localTheme = getFromLS("theme");
  const { setMode } = useTheme();

  const themeSwitcher = (selectedTheme: string) => {
    setMode(selectedTheme);
    props.setSelectedTheme(selectedTheme);
  };
  console.log(localTheme);
  return (
    <ButtonStyled
      onClick={() =>
        themeSwitcher(
          localTheme
            ? localTheme.name === "Pink"
              ? themesFromStore.yellow
              : themesFromStore.pink
            : themesFromStore.pink
        )
      }
    >
      {props.children}
    </ButtonStyled>
  );
};
