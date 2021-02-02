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

export const Help = () => {
  return (
    <>
      <HelpContainer>
        <ColumnContainerHelpdesk>
          <ExpandableAnalysisContainer>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className='accordion__button--analysis'>
                    Lorem ipsum 1
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordion__panel--analysis'>
                  <AnalysisElementWrapper>
                    <AnalysisElement>
                      <ElementText>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy.
                      </ElementText>
                    </AnalysisElement>
                  </AnalysisElementWrapper>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </ExpandableAnalysisContainer>
        </ColumnContainerHelpdesk>
        <ColumnContainerHelpdesk>
          <ExpandableAnalysisContainer>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className='accordion__button--analysis'>
                    Lorem ipsum 2
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordion__panel--analysis'>
                  <AnalysisElementWrapper>
                    <AnalysisElement>
                      <ElementText>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy.
                      </ElementText>
                    </AnalysisElement>
                  </AnalysisElementWrapper>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </ExpandableAnalysisContainer>
        </ColumnContainerHelpdesk>
        <ColumnContainerHelpdesk>
          <ExpandableAnalysisContainer>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton className='accordion__button--analysis'>
                    Lorem ipsum 3
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='accordion__panel--analysis'>
                  <AnalysisElementWrapper>
                    <AnalysisElement>
                      <ElementText>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy.
                      </ElementText>
                    </AnalysisElement>
                  </AnalysisElementWrapper>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </ExpandableAnalysisContainer>
        </ColumnContainerHelpdesk>
      </HelpContainer>
    </>
  );
};

export default Help;
