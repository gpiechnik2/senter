import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getaudit } from '../../../actions/auditCheck';

import AuditData from './AuditData';

import { AuditContainer } from './AuditElements';
import {
  FormContainer,
  FormTitle,
  FormText,
  FormWrap,
  FormInput,
  FormBtnWrap,
} from '../../Common/FormElements';
import { ButtonBasic } from '../../Common/ButtonElements';

const initialState = {
  url: '',
};

const Audit = () => {
  const { isLoading } = useSelector((state) => state.auditCheckReducer);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getaudit(formData));

    setFormData({
      ...formData,
      url: '',
    });
  };

  return (
    <>
      <AuditContainer>
        <FormContainer>
          <FormTitle>Website audit</FormTitle>
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
        <AuditData />
      </AuditContainer>
    </>
  );
};

export default Audit;
