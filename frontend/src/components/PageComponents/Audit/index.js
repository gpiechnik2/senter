import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getaudit } from '../../../actions/auditCheck';
import { createaudit } from '../../../actions/createAudit';

import AuditData from './AuditData';

import toast from 'react-hot-toast';

import { AuditContainer } from './AuditElements';
import {
  FormContainer,
  FormTitle,
  FormText,
  FormWrap,
  FormInput,
  FormBtnWrap,
  SaveButtonWrap,
} from '../../Common/FormElements';
import {
  ColumnContainerBasic,
  GraphicImg,
} from '../../Common/ContainerElements';
import { ButtonBasic } from '../../Common/ButtonElements';
import { GraphicWrap } from '../../Common/UserContentElements';

import graphic from '../../../images/myaudits.jpg';

const initialState = {
  url: '',
};
const auditSaveInitialState = {
  url: '',
  audit: null,
};

const Audit = () => {
  const { auditCheckData, isLoading } = useSelector(
    (state) => state.auditCheckReducer
  );
  const { createAuditData, isLoadingSave, isErrorSave } = useSelector(
    (state) => state.createAuditReducer
  );
  const { isChecking } = useSelector((state) => state.auditsReducer);
  const [formData, setFormData] = useState(initialState);
  const [saveData, setSaveData] = useState(auditSaveInitialState);
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

  const handleSave = () => {
    dispatch(createaudit(saveData));
    setSaveData({ ...saveData, url: '', audit: null });
  };

  const isDisabled = isLoading || auditCheckData?.analysis.length === 0;

  useEffect(() => {
    if (auditCheckData?.analysis.length) {
      setSaveData({
        url: auditCheckData.analysis[0].url,
        audit: auditCheckData.analysis,
      });
    }
  }, [auditCheckData]);

  useEffect(() => {
    if (createAuditData && !isErrorSave) {
      toast.success('Audit saved successfully!');
    } else if (isErrorSave) {
      toast.error(`We couldn't save that one.`);
    }
  }, [createAuditData, isErrorSave]);

  return (
    <>
      <AuditContainer>
        <FormContainer>
          <GraphicWrap>
            <GraphicImg src={graphic} />
          </GraphicWrap>
          <FormTitle>Website audit</FormTitle>
          <FormText>
            Audit analyzes the entire domain for SEO and provides you detailed
            analysis and improvement opportunities. This is an extended web
            analysis.
          </FormText>
          <FormWrap onSubmit={onSubmit}>
            <FormInput
              required
              type='url'
              name='url'
              aria-describedby='Enter url'
              placeholder='Url'
              value={formData.url}
              onChange={handleChange}
            />
            <FormBtnWrap>
              <ButtonBasic
                onClick={() => dispatch({ type: 'CLEAR_AUDIT_CHECK' })}
                type='submit'
                disabled={isDisabled}>
                Check
              </ButtonBasic>
            </FormBtnWrap>
          </FormWrap>
        </FormContainer>
        <AuditData />
        {isChecking ? null : (
          <>
            {auditCheckData?.analysis.length ? (
              <ColumnContainerBasic>
                <SaveButtonWrap>
                  <ButtonBasic onClick={handleSave} disabled={isLoadingSave}>
                    Save
                  </ButtonBasic>
                </SaveButtonWrap>
              </ColumnContainerBasic>
            ) : null}
          </>
        )}
      </AuditContainer>
    </>
  );
};

export default Audit;
