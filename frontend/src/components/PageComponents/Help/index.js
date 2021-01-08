import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import './Accordion.css';

import {
  HelpContainer,
  CollapsibleWrap,
  CollapsibleTitle,
  CollapsibleText,
  CollapsibleLink,
} from './HelpElements';

export const Help = () => {
  return (
    <>
      <HelpContainer>
        <CollapsibleWrap>
          <Accordion allowZeroExpanded={true}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Content Analysis</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <CollapsibleTitle>Po co?</CollapsibleTitle>
                <CollapsibleText>
                  User Experience is much wider than User Interface and refers
                  to designing apps in a way that optimizes usability and
                  accessibility. The overriding aim of a good UX is customer
                  delight, or delivering maximum possible pleasure to the users
                  interacting with the app. UI is delivering a good UX through a
                  good interface. UI may be regarded as one element,
                </CollapsibleText>
                <CollapsibleLink>Read more</CollapsibleLink>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Content Analysis</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <CollapsibleTitle>Po co?</CollapsibleTitle>
                <CollapsibleText>
                  User Experience is much wider than User Interface and refers
                  to designing apps in a way that optimizes usability and
                  accessibility. The overriding aim of a good UX is customer
                  delight, or delivering maximum possible pleasure to the users
                  interacting with the app. UI is delivering a good UX through a
                  good interface. UI may be regarded as one element,
                </CollapsibleText>
                <CollapsibleLink>Read more</CollapsibleLink>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Content Analysis</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <CollapsibleTitle>Po co?</CollapsibleTitle>
                <CollapsibleText>
                  User Experience is much wider than User Interface and refers
                  to designing apps in a way that optimizes usability and
                  accessibility. The overriding aim of a good UX is customer
                  delight, or delivering maximum possible pleasure to the users
                  interacting with the app. UI is delivering a good UX through a
                  good interface. UI may be regarded as one element,
                </CollapsibleText>
                <CollapsibleLink>Read more</CollapsibleLink>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Content Analysis</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <CollapsibleTitle>Po co?</CollapsibleTitle>
                <CollapsibleText>
                  User Experience is much wider than User Interface and refers
                  to designing apps in a way that optimizes usability and
                  accessibility. The overriding aim of a good UX is customer
                  delight, or delivering maximum possible pleasure to the users
                  interacting with the app. UI is delivering a good UX through a
                  good interface. UI may be regarded as one element,
                </CollapsibleText>
                <CollapsibleLink>Read more</CollapsibleLink>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </CollapsibleWrap>
      </HelpContainer>
    </>
  );
};

export default Help;
