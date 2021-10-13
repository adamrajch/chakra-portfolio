import { Heading } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import TechBox from "./TechBox";
import { Wrapper } from "./Wrapper";
export default function Tech(): ReactElement {
  const data = [
    {
      title: "Front End",
      summary:
        "What I use, but not limited to, to create responsive and fluid UI and experience",
      images: [
        { url: "/html_logo.png", name: "HTML" },
        { url: "/js_logo.png", name: "Javascript" },
        { url: "/typescript_logo.png", name: "Typescript" },
        { url: "/react_logo.png", name: "React" },
        { url: "/next_logo.png", name: "NextJS" },
        { url: "/tailwind_logo.png", name: "Tailwind CSS" },
        { url: "/chakra_logo.png", name: "Chakra UI" },
      ],
    },
    {
      title: "Back End",
      summary: "Serverside made scalable and performative",
      images: [
        { url: "/node_logo.png", name: "Node" },
        { url: "/fb_logo.png", name: "Firebase" },
        { url: "/aws_logo.png", name: "AWS" },
        { url: "/gql_logo.png", name: "GraphQL" },
        { url: "/sql_logo.png", name: "SQL" },
        { url: "/mongo_logo.png", name: "MongoDB" },
      ],
    },
    {
      title: "Tools & Other",
      summary: "To complete the developer experience...",
      images: [
        { url: "/git_logo.png", name: "Git" },
        { url: "/github_logo.png", name: "Github" },
        { url: "/vscode_logo.png", name: "VS Code" },
        { url: "/npm_logo.png", name: "npm" },
        { url: "/figma_logo.png", name: "figma" },
      ],
    },
  ];
  return (
    <Wrapper maxW={["", "container.md", "container.lg"]} id="tech">
      <Heading>Tech Stack</Heading>
      {data.map(({ summary, title, images }, i) => (
        <TechBox summary={summary} title={title} images={images} i={i} />
      ))}
    </Wrapper>
  );
}
