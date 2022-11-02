import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  padding-top: ${p => p.theme.space[1]}px;
  padding-right: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  padding-left: ${p => p.theme.space[3]}px;

  background-color: ${p => p.theme.colors.mainBg};

  font-size: ${p => p.theme.fontsSizes.s}px;

  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[2]}px;

  &&:active {
    background-color: ${p => p.theme.colors.accentSecondary};
  }
`;
