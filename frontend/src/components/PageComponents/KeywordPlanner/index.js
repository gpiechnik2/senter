import Select from 'react-select';

import { KeywordPlannerContainer } from './KeywordPlannerElements';

import {
  FormContainer,
  FormTitle,
  FormText,
  FormWrap,
  FormInput,
  FormBtnWrap,
  FormSelectContainer,
} from '../../Common/FormElements';

import { ButtonBasic } from '../../Common/ButtonElements';

const KeywordPlanner = () => {
  const options1 = [
    { label: 'Polish', value: 'polish' },
    { label: 'English', value: 'english' },
  ];
  return (
    <>
      <KeywordPlannerContainer>
        <FormContainer>
          <FormTitle>Keyword planner</FormTitle>
          <FormText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </FormText>
          <FormWrap>
            <FormInput placeholder='Keyword' />
            <FormSelectContainer>
              <Select
                isSearchable={false}
                className='react-select-container'
                classNamePrefix='react-select'
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary: 'rgba(107, 126, 172, 0.05)',
                  },
                })}
                options={options1}
                placeholder='Language'
              />
            </FormSelectContainer>
            <FormBtnWrap>
              <ButtonBasic>Get keyword</ButtonBasic>
            </FormBtnWrap>
          </FormWrap>
        </FormContainer>
      </KeywordPlannerContainer>
    </>
  );
};

export default KeywordPlanner;
