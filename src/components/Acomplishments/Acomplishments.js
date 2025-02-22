import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 20, text: "Open Source Projects" },
  { number: 1000, text: "Students" },
  { number: 1900, text: "Github Followers" },
  { number: 5000, text: "Github Stars" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personnal Acomplishments</SectionTitle>
    <Boxes>
      {data.map(({ number, text }, index) => {
        return (
          <Box key={index}>
            <BoxNum>{number}+</BoxNum>
            <BoxText>{text}</BoxText>
          </Box>
        );
      })}
    </Boxes>
  </Section>
);
export default Acomplishments;
