import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeuseragent } from '../../../../actions/changeUserAgent';

import toast from 'react-hot-toast';

import { WebScrapingPageContainer } from './WebScrapingPageElements';
import {
  FormContainer,
  FormTitle,
  FormText,
  FormWrap,
  FormInput,
  FormBtnWrap,
} from '../../../Common/FormElements';
import { ButtonBasic } from '../../../Common/ButtonElements';
import { StyledProperWidth } from '../../../Common/ContainerElements';

const initialState = {
  user_agent: '',
};

let changeToast;

const WebScrapingPage = () => {
  const { userAgentChangeData, isLoading, isError } = useSelector(
    (state) => state.changeUserAgentReducer
  );
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(changeuseragent(formData));
    setFormData({ ...formData, user_agent: '' });

    changeToast = toast.loading('Changing user agent...');
  };

  useEffect(() => {
    if (userAgentChangeData?.user_agent) {
      toast.success(userAgentChangeData.user_agent, {
        id: changeToast,
      });
    } else if (userAgentChangeData?.User && isError) {
      toast.error(userAgentChangeData.User, {
        id: changeToast,
      });
    } else if (isError) {
      toast.error('Unable to change user agent.', {
        id: changeToast,
      });
    }
  }, [userAgentChangeData, isError]);

  return (
    <>
      <WebScrapingPageContainer>
        <StyledProperWidth>
          <FormContainer>
            <FormTitle>User agent</FormTitle>
            <FormText>
              Change your user agent to connect website with different headers.
            </FormText>
            <FormWrap onSubmit={onSubmit}>
              <FormInput
                required
                type='text'
                name='user_agent'
                placeholder='Mozilla/43s/320 - 32 cddd'
                aria-describedby='Enter user agent'
                value={formData.user_agent}
                onChange={handleChange}
              />
              <FormBtnWrap>
                <ButtonBasic type='submit' disabled={isLoading}>
                  Change
                </ButtonBasic>
              </FormBtnWrap>
            </FormWrap>
          </FormContainer>
        </StyledProperWidth>
      </WebScrapingPageContainer>
    </>
  );
};

export default WebScrapingPage;
