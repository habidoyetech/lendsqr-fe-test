

export interface SideBarLinkObject {
  id: number;
  logo: HTMLElement & SVGAElement | any;
  linkName: string;
  arrow: boolean;
}

export interface SideBarCategoryObject {
  id: number;
  name: string;
  link: SideBarLinkObject[];
}

export interface UserCardModel {
  head: string;
  cardLogo: HTMLElement & SVGAElement | any;
  userNum: number;
}

