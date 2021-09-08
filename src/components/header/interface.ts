export type ItemsMenu = {
  name: string;
  link: string;
};
export interface HeaderInterface {
  items: ItemsMenu[];
  menu?: boolean;
  logo?: string;
}
