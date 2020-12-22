import PublicLayout from '../components/Layouts/PublicLayout/index';
import Header from '../components/Common/Header';
import CornerPanel from '../components/Common/CornerPanel';

const PublicLayoutPage = () => {
  return (
    <>
      <PublicLayout>
        <Header></Header>
        <CornerPanel />
      </PublicLayout>
    </>
  );
};

export default PublicLayoutPage;
