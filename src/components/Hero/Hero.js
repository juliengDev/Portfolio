import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenue Sur
        <br />
        Mon Portfolio Personnel
      </SectionTitle>
      <SectionText>
        Mon objectif est de fournir des solutions de haute qualité, de
        contribuer à des équipes dynamiques, et de continuer à apprendre.
        Connectons-nous et créons ensemble des expériences web incroyables !
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        En savoir plus
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
