import styled from '@emotion/styled';

export const Form = styled.form`
  width: ${p => p.theme.space[7] * 3}px;

  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;

  border: 1px solid ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.space[2]}px;
`;
