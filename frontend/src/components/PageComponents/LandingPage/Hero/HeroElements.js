import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const HeroContainer = styled(motion.div)`
  padding: 100px 30px 140px 30px;
  display: flex;
  justify-content: center;
`;
export const HeroContent = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const HeroH1 = styled.h1`
  margin-bottom: 10px;
  text-align: center;
  line-height: 56px;
  font-size: 42px;
  color: rgba(0, 0, 0, 0.87);
`;
export const HeroP = styled.p`
  margin-bottom: 16px;
  max-width: 400px;
  font-family: 'Aktiv Grotesk light';
  text-align: center;
  line-height: 30px;
  font-size: 22px;
  color: #212121;
`;
export const HeroButtonWrap = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LandingButton = styled(LinkRouter)`
  padding: 12px 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #5d38db;
  border-radius: 20px;
  font-size: 13px;
  background-color: #5d38db;
  color: #fff;
  cursor: pointer;
`;
export const HeroLinkWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeroLink = styled(LinkScroll)`
  margin-bottom: 140px;
  text-align: center;
  font-size: 13px;
  color: #5d38db;
  cursor: pointer;
`;
export const HeroLogosContainer = styled.div`
  max-width: 530px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const HeroLogoWrap = styled.div`
  margin-right: 20px;
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
`;
export const HeroLogoElement = styled.img`
  -o-object-fit: cover;
  object-fit: cover;
`;
