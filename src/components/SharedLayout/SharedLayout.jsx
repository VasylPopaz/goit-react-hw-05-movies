import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  Container,
  Loader,
  StyledHeader,
  StyledNav,
  StyledNavLink,
} from 'components';

export const SharedLayout = () => {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </StyledNav>
      </StyledHeader>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
