import {
  CrumbNavContainer,
  CrumbNavWrap,
  CrumbNavList,
  CrumbNavElement,
  CrumbNavLink,
  CrumbNavBackWrap,
  CrumbNavBackLink,
  IconWrap,
  IconArrowLeft,
} from './CrumbNavElements';

const CrumbNav = () => {
  return (
    <>
      <CrumbNavContainer>
        <CrumbNavWrap>
          <CrumbNavList>
            <CrumbNavElement>
              <CrumbNavLink href=''>Dashboard</CrumbNavLink>
            </CrumbNavElement>
            <CrumbNavElement>
              <CrumbNavLink href=''>Analiza strony</CrumbNavLink>
            </CrumbNavElement>
            <CrumbNavElement>
              <CrumbNavLink href=''>52studio.co/about.html</CrumbNavLink>
            </CrumbNavElement>
          </CrumbNavList>
          <CrumbNavBackWrap>
            <CrumbNavBackLink href=''>
              <IconWrap>
                <IconArrowLeft />
              </IconWrap>
              Wróć
            </CrumbNavBackLink>
          </CrumbNavBackWrap>
        </CrumbNavWrap>
      </CrumbNavContainer>
    </>
  );
};

export default CrumbNav;
