import { useState, useEffect } from 'react';

import {
  CornerMenuContainer,
  CornerMenuWrap,
  IconWrap,
  IconGrid,
} from './CornerMenuElements';

import UserPanelPrivate from '../UserPanelPrivate/index';
import UserPanelPublic from '../UserPanelPublic/index';

const CornerMenu = ({ isPrivate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
            <UserPanelPrivate isOpen={isOpen} />
          ) : (
            <UserPanelPublic isOpen={isOpen} />
          )}
        </CornerMenuWrap>
      </CornerMenuContainer>
    </>
  );
};

export default CornerMenu;
