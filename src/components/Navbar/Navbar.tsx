import { useState } from "react";
import { Center, Tooltip, UnstyledButton, Stack, rem } from "@mantine/core";
import {
  IconHome2,
  IconCoinBitcoin,
  IconLogout,
  IconSwitchHorizontal,
} from "@tabler/icons-react";
import classes from "./Navbar.module.css";
import { NavbarLinkProps } from "./types";
import { NavLink } from "react-router-dom";

const navData = [
  { icon: IconHome2, label: "Home", to: "/" },
  { icon: IconCoinBitcoin, label: "Coins", to: "/coins" },
];

function NavbarLink({
  icon: Icon,
  label,
  to,
  active,
  onClick,
}: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <NavLink to={to}>
          <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        </NavLink>
      </UnstyledButton>
    </Tooltip>
  );
}

export const Navbar = () => {
  const [active, setActive] = useState(2);

  return (
    <nav className={classes.navbar}>
      <Center>
        <p>NR</p>
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={20}>
          {navData.map((link, index) => (
            <NavbarLink
              {...link}
              key={link.label}
              active={index === active}
              onClick={() => setActive(index)}
            />
          ))}
        </Stack>
      </div>
    </nav>
  );
};
