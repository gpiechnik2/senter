import PrivateLayout from '../components/Layouts/PrivateLayout';
import Header from '../components/Common/Header';
import CornerPanel from '../components/Common/CornerPanel/index';
import SearchPanel from '../components/Common/SearchPanel/index';
import CrumbNav from '../components/Common/CrumbNav';

const PrivateLayoutPage = () => {
  return (
    <>
      <PrivateLayout>
        <Header>
          <SearchPanel />
        </Header>
        <CornerPanel />
        <CrumbNav />
      </PrivateLayout>
    </>
  );
};

export default PrivateLayoutPage;
