import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const CartWrapper = styled(StyledLink).attrs(() => ({
  to: '/cart',
}))`
  display: flex;
  color: black;
 position : absolute;
 right : 10px;

  text-decoration: none;
  padding-right: 20px;
  padding-top: 25px;
  
  > svg {
    margin: auto 0;
  }

  > div:last-child {
    padding-left: 8px;
    margin: auto 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;
