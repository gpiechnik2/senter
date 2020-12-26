import { useState } from 'react';

import {
  CornerMenuContainer,
  CornerMenuWrap,
  IconWrap,
  IconGrid,
} from './CornerMenuElements';

import UserPanelPrivate from '../UserPanelPrivate/index';

const CornerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <CornerMenuContainer>
        <CornerMenuWrap>
          <IconWrap onClick={toggle}>
            <IconGrid />
          </IconWrap>
          <UserPanelPrivate isOpen={isOpen} />
        </CornerMenuWrap>
      </CornerMenuContainer>
    </>
  );
};

export default CornerMenu;
