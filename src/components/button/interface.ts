import { ReactNode } from "react";

export interface ButtonInterface {
  children?: ReactNode;
  onClick?: (event: any) => void;
  setSelectedTheme: React.Dispatch<React.SetStateAction<string>>;
}
