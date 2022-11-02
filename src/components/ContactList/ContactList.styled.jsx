import styled from '@emotion/styled';
import { MdPermContactCalendar } from 'react-icons/md';

export const ContactsList = styled.ul`
  width: ${p => p.theme.space[7] * 3}px;

  padding-left: ${p => p.theme.space[5]}px;
`;

export const ContactItem = styled.li`
  display: grid;
  grid-template-columns:
    ${p => p.theme.space[4]}px
    1fr
    ${p => p.theme.space[6]}px;
  grid-template-rows: ${p => p.theme.space[5]}px;
  grid-column-gap: ${p => p.theme.space[5]}px;
  justify-content: space-between;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;

  font-size: ${p => p.theme.fontsSizes.m}px;

  padding-bottom: ${p => p.theme.space[3]}px;
`;

export const NameContact = styled.div`
  text-align: start;
`;

export const Icon = styled(MdPermContactCalendar)`
  width: ${p => p.theme.space[4]}px;
  height: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.accentSecondary};
`;
