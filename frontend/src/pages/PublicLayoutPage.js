import PublicLayout from '../components/Layouts/PublicLayout/index';
import Header from '../components/Common/Header';
import CornerMenu from '../components/Common/CornerMenu';

const PublicLayoutPage = () => {
  return (
    <>
      <PublicLayout>
        <Header></Header>
        <CornerMenu />
      </PublicLayout>
    </>
  );
};

export default PublicLayoutPage;
