// import React from "react";

// import {
//   BlogCard,
//   CardInfo,
//   ExternalLinks,
//   GridContainer,
//   HeaderThree,
//   Hr,
//   Tag,
//   TagList,
//   TitleContent,
//   UtilityList,
//   Img,
// } from "./ProjectsStyles";
// import {
//   Section,
//   SectionDivider,
//   SectionTitle,
// } from "../../styles/GlobalComponents";
// import { projects } from "../../constants/constants";

// const Projects = () => (
//   <Section nopadding id="projects">
//     <SectionDivider />
//     <SectionTitle main>Projects</SectionTitle>
//     <GridContainer>
//       {projects.map(({ image, title, description, visit, source, tags }, i) => {
//         return (
//           <BlogCard key={i}>
//             <Img src={image} />
//             <TitleContent>
//               <HeaderThree title>{title}</HeaderThree>
//               <Hr />
//             </TitleContent>
//             <CardInfo className="card-info">{description}</CardInfo>
//             <div>
//               <TitleContent>Stack</TitleContent>
//               <TagList>
//                 {tags.map((t, i) => {
//                   return <Tag key={i}>{t}</Tag>;
//                 })}
//               </TagList>
//             </div>
//             <UtilityList>
//               <ExternalLinks href={visit}>Code</ExternalLinks>
//               <ExternalLinks href={source}>Live version</ExternalLinks>
//             </UtilityList>
//           </BlogCard>
//         );
//       })}
//     </GridContainer>
//   </Section>
// );

// export default Projects;

import React, { useState } from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  ViewMoreLink,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const MAX_DESCRIPTION_LENGTH = 330;

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ image, title, description, visit, source, tags }, i) => (
        <ProjectCard
          key={i}
          image={image}
          title={title}
          description={description}
          visit={visit}
          source={source}
          tags={tags}
        />
      ))}
    </GridContainer>
  </Section>
);

const ProjectCard = ({ image, title, description, visit, source, tags }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedDescription = isExpanded
    ? description
    : description.slice(0, MAX_DESCRIPTION_LENGTH);

  const showViewMore = description.length > MAX_DESCRIPTION_LENGTH;

  return (
    <BlogCard>
      <Img src={image} />
      <TitleContent>
        <HeaderThree title>{title}</HeaderThree>
        <Hr />
      </TitleContent>
      <CardInfo className="card-info">
        {displayedDescription}
        {showViewMore && (
          <>
            {!isExpanded && "..."}
            <ViewMoreLink onClick={toggleDescription}>
              {isExpanded ? "View Less" : "View More"}
            </ViewMoreLink>
          </>
        )}
      </CardInfo>
      <Hr />
      <div>
        <TitleContent>Stack</TitleContent>
        <TagList>
          {tags.map((t, i) => (
            <Tag key={i}>{t}</Tag>
          ))}
        </TagList>
      </div>
      <UtilityList>
        <ExternalLinks href={source} target="_blank">
          Code
        </ExternalLinks>
        <ExternalLinks href={visit} target="_blank">
          Live version
        </ExternalLinks>
      </UtilityList>
    </BlogCard>
  );
};

export default Projects;
