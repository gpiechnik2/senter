import PrivateLayout from '../components/Layouts/PrivateLayout';
import Aside from '../components/Common/Aside/index';
import Header from '../components/Common/Header';
import CornerMenu from '../components/Common/CornerMenu/index';
import SearchPanel from '../components/Common/SearchPanel/index';
import CrumbNav from '../components/Common/CrumbNav';

const PrivateLayoutPage = () => {
  return (
    <>
      <PrivateLayout>
        <Aside />
        <Header>
          <SearchPanel />
        </Header>
        <CornerMenu />
        <CrumbNav />
      </PrivateLayout>
    </>
  );
};

export default PrivateLayoutPage;
