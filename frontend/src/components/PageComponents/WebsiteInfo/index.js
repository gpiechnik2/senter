import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getwebsiteinfo } from '../../../actions/websiteInfo';

import WebsiteData from './WebsiteData';

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
import {
  ColumnContainerBasic,
  GraphicImg,
} from '../../Common/ContainerElements';
import { GraphicWrap } from '../../Common/UserContentElements';

import graphic from '../../../images/website_info.jpg';

const initialState = {
  url: '',
};

const WebsiteInfo = () => {
  const { isLoading } = useSelector((state) => state.websiteInfoReducer);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getwebsiteinfo(formData));

    setFormData({
      ...formData,
      url: '',
    });
  };

  return (
    <>
      <WebsiteInfoContainer>
        <FormContainer>
          <GraphicWrap>
            <GraphicImg src={graphic} />
          </GraphicWrap>
          <FormTitle>Website info</FormTitle>
          <FormText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </FormText>
          <FormWrap onSubmit={onSubmit}>
            <FormInput
              required
              type='text'
              name='url'
              aria-describedby='Enter url'
              placeholder='Url'
              value={formData.url}
              onChange={handleChange}
            />
            <FormBtnWrap>
              <ButtonBasic type='submit' disabled={isLoading}>
                Check
              </ButtonBasic>
            </FormBtnWrap>
          </FormWrap>
        </FormContainer>
        <ColumnContainerBasic>
          <WebsiteData />
        </ColumnContainerBasic>
      </WebsiteInfoContainer>
    </>
  );
};

export default WebsiteInfo;
