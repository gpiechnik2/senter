import { useSelector } from 'react-redux';

import {
  ObjectMappingWrap,
  MessageAnalysisElementWrap,
  StatusElement,
  StatusBar,
  StatusText,
  MessageElement,
  MessageText,
} from '../../Common/AnalysisElements';
import { StyledSpinner } from '../../Common/StyledSpinner';

const CheckData = () => {
  const { checkData, isLoading, isError } = useSelector(
    (state) => state.contentCheckReducer
  );

  const statusColor = (status) => {
    switch (status) {
      case 'Valid':
        return '#72BC39';
      case 'Invalid':
        return '#D35454';
      case 'Undefined':
        return '#D3C954';
      default:
        return '#72BC39';
    }
  };

  if (isError) return <span>Sorry, something went wrong</span>;

  return isLoading ? (
    <StyledSpinner viewBox='0 0 50 50'>
      <circle
        className='path'
        cx='25'
        cy='25'
        r='20'
        fill='none'
        strokeWidth='4'
      />
    </StyledSpinner>
  ) : checkData ? (
    <>
      <MessageAnalysisElementWrap>
        <StatusElement>
          <StatusBar />
          <StatusText style={{ fontWeight: 'bold' }}>Status</StatusText>
        </StatusElement>
        <MessageElement>
          <MessageText style={{ fontWeight: 'bold' }}>Message</MessageText>
        </MessageElement>
      </MessageAnalysisElementWrap>

      {Object.entries(checkData.analysis).map(([key, item], i) => (
        <ObjectMappingWrap key={i}>
          {item.analysis.map((analysis, i) => (
            <MessageAnalysisElementWrap key={i}>
              <StatusElement>
                <StatusBar
                  style={{ borderColor: `${statusColor(analysis.status)}` }}
                />
                <StatusText style={{ color: 'rgba(104,104,104,.8)' }}>
                  {analysis.status}
                </StatusText>
              </StatusElement>
              <MessageElement>
                <MessageText style={{ color: 'rgba(104,104,104,.8)' }}>
                  {analysis.message ? analysis.message : null}
                  {analysis.message_h1_exists
                    ? analysis.message_h1_exists
                    : null}
                  {analysis.message_h2_exists
                    ? analysis.message_h2_exists
                    : null}
                  {analysis.message_links_exists
                    ? analysis.message_links_exists
                    : null}
                  {analysis.message_image_exists
                    ? analysis.message_image_exists
                    : null}
                </MessageText>
              </MessageElement>
            </MessageAnalysisElementWrap>
          ))}
        </ObjectMappingWrap>
      ))}
    </>
  ) : null;
};

export default CheckData;
