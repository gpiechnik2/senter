import { HelpdeskItems } from './HelpdeskData';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { HelpContainer, ColumnContainerHelpdesk } from './HelpElements';
import {
  ExpandableAnalysisContainer,
  AnalysisElementWrapper,
  AnalysisElement,
  ElementText,
} from '../../Common/AnalysisElements';
import { GraphicContainer, GraphicImg } from '../../Common/ContainerElements';

import graphic from '../../../images/helpdesk.jpg';

export const Help = () => {
  return (
    <>
      <HelpContainer>
        <ColumnContainerHelpdesk>
          <GraphicContainer>
            <GraphicImg src={graphic} />
          </GraphicContainer>
          <ExpandableAnalysisContainer>
            <Accordion
              allowMultipleExpanded={true}
              allowZeroExpanded={true}
              preExpanded={[0]}>
              {HelpdeskItems.map((item, i) => (
                <AccordionItem uuid={i} key={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className='accordion__button--analysis'>
                      {item.title}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className='accordion__panel--analysis'>
                    <AnalysisElementWrapper>
                      <AnalysisElement>
                        <ElementText>{item.text}</ElementText>
                      </AnalysisElement>
                    </AnalysisElementWrapper>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </ExpandableAnalysisContainer>
        </ColumnContainerHelpdesk>
      </HelpContainer>
    </>
  );
};

export default Help;
