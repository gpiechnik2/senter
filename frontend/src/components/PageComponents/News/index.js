import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getnews } from '../../../actions/getNews';

import NewsList from './NewsList';

import { NewsContainer } from './NewsElements';
import { ColumnContainerBasic } from '../../Common/ContainerElements';

const News = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getnews());
  }, [dispatch]);

  return (
    <>
      <NewsContainer>
        <ColumnContainerBasic>
          <NewsList />
        </ColumnContainerBasic>
      </NewsContainer>
    </>
  );
};

export default News;
