import { IconHome2 } from "@tabler/icons-react";

export type NavbarLinkProps = {
  icon: typeof IconHome2;
  label: string;
  to: string;
  active?: boolean;
  onClick?(): void;
};
