import React from 'react';

import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionsContainerSyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderStyles = styled.div`
  height: 70px;
  width: 93%;
  margin: auto auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 15px;
`;
export const TitleContainer = styled.div`
  height: 100%;
  color: #808282;
  margin-left: 250px;
`;

export const OptionLink = styled(Link)`
  ${OptionsContainerSyles}
`;

export const OptionDiv = styled.div`
  ${OptionsContainerSyles}
`;
