import { WebsiteInfoContainer } from './WebsiteInfoElements';

import {
  FormContainer,
  FormTitle,
  FormText,
  FormWrap,
  FormInput,
  FormBtnWrap,
} from '../../Common/FormElements';
import { ButtonBasic } from '../../Common/ButtonElements';

import { ColumnContainerBasic } from '../../Common/ContainerElements';

import {
  TableLargeContainer,
  TableIconWrapper,
  TableTextWrapper,
  TableTextTitle,
  TableTextContentWrap,
  TableText,
  TableIcon,
  TableSmallContainer,
  SmallTableWrapper,
} from '../../Common/AnalysisElements';

const WebsiteInfo = () => {
  const InfoTables = [
    {
      id: 1,
      icon: <TableIcon />,
      title: 'Url',
      text: 'http://simple-domain.com/faq/module_01/',
    },
    {
      id: 2,
      icon: <TableIcon />,
      title: 'Title',
      text: 'Lorem ipsum dolor sit mit amet.',
    },
    {
      id: 3,
      icon: <TableIcon />,
      title: 'Description',
      text: 'Lorem ipsum dolor sit mit amet.',
    },
    {
      id: 4,
      icon: <TableIcon />,
      title: 'Url title',
      text: 'Lorem ipsum dolor sit mit amet.',
    },
    {
      id: 5,
      icon: <TableIcon />,
      title: 'Keyword',
      text: 'Lorem ipsum dolor sit mit amet.',
    },
    {
      id: 6,
      icon: <TableIcon />,
      title: 'H1',
      text: 'Lorem ipsum dolor sit mit amet.',
    },
    {
      id: 7,
      icon: <TableIcon />,
      title: 'H1',
      text: 'Lorem ipsum dolor sit mit amet.',
    },
  ];
  return (
    <>
      <WebsiteInfoContainer>
        <FormContainer>
          <FormTitle>Website info</FormTitle>
          <FormText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </FormText>
          <FormWrap>
            <FormInput placeholder='Url' />
            <FormBtnWrap>
              <ButtonBasic>Check</ButtonBasic>
            </FormBtnWrap>
          </FormWrap>
        </FormContainer>
        <ColumnContainerBasic>
          {InfoTables.map((table) => (
            <TableLargeContainer key={table.id}>
              <TableIconWrapper>{table.icon}</TableIconWrapper>
              <TableTextWrapper>
                <TableTextTitle>{table.title}</TableTextTitle>
                <TableTextContentWrap>
                  <TableText>{table.text}</TableText>
                  <TableText>{table.text}</TableText>
                </TableTextContentWrap>
              </TableTextWrapper>
            </TableLargeContainer>
          ))}
          <TableSmallContainer>
            <SmallTableWrapper>ASD</SmallTableWrapper>
            <SmallTableWrapper>ASD</SmallTableWrapper>
          </TableSmallContainer>
        </ColumnContainerBasic>
      </WebsiteInfoContainer>
    </>
  );
};

export default WebsiteInfo;
