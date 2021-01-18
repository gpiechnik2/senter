import { useState, useEffect } from 'react';
import onClickOutside from 'react-onclickoutside';

import {
  CornerMenuContainer,
  CornerMenuWrap,
  IconWrap,
  IconGrid,
} from './CornerMenuElements';

import UserPanelPrivate from '../UserPanelPrivate/index';
import UserPanelPublic from '../UserPanelPublic/index';

function CornerMenu({ isPrivate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  CornerMenu.handleClickOutside = () => setIsOpen(false);

  const changeHeader = () => {
    if (window.scrollY > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeHeader);

    return () => {
      window.removeEventListener('scroll', changeHeader);
    };
  }, []);

  return (
    <>
      <CornerMenuContainer isScroll={isScroll}>
        <CornerMenuWrap>
          <IconWrap onClick={toggle}>
            <IconGrid />
          </IconWrap>
          {isPrivate ? (
            <UserPanelPrivate setIsOpen={setIsOpen} isOpen={isOpen} />
          ) : (
            <UserPanelPublic setIsOpen={setIsOpen} isOpen={isOpen} />
          )}
        </CornerMenuWrap>
      </CornerMenuContainer>
    </>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => CornerMenu.handleClickOutside,
};

export default onClickOutside(CornerMenu, clickOutsideConfig);
