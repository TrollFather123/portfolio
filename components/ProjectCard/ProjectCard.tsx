/* eslint-disable mui-path-imports/mui-path-imports */
import { ProjectCardWrap } from "@/styles/StyledComponents/ProjectCardWrap";
import BigArrowIcon from "@/ui/Icons/BigArrowIcon";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

interface ProjectCard {
  title: string;
  image: any;
  sub: string;
  // Add other project card properties here
}
const ProjectCard = ({ image, sub, title }: ProjectCard) => {
  return (
    <ProjectCardWrap>
      <Box className="innerWrap">
        <figure>
          <Image width={333} height={501} alt="" src={image} />
        </figure>
        <Box className="floatingBox">
          <Typography variant="h3">{title}</Typography>
          <Stack direction="row" alignItems="baseline" >
            <Typography variant="body1">{sub}</Typography>
            <Button>
                <BigArrowIcon/>
            </Button>
          </Stack>
        </Box>
      </Box>
    </ProjectCardWrap>
  );
};

export default ProjectCard;
