import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;

  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Input = styled.input`
  width: ${p => p.theme.space[7]}px;

  padding: ${p => p.theme.space[2]}px;

  font-size: ${p => p.theme.fontsSizes.s}px;

  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[1]}px;

  &:focus-within {
    border: 1px solid ${p => p.theme.colors.accent};
    filter: drop-shadow(0px 4px 4px ${p => p.theme.colors.accent});
    outline: none;
  }
`;

export const NameLabel = styled.span`
  font-size: ${p => p.theme.fontsSizes.m}px;
`;
