export interface NavLinkSet {
  parentLink:NavLink;
  childLinks: NavLink[] | null;
}

interface NavLink{
  value :string;
  icon:string;
  path:string;
}
