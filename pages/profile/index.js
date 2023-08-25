// Style Imports
import { StyledCardLarge } from "@/components/StyledComponents/StyledCard";
import { StyledWarningText } from "@/components/EditingForm";
import {
  StyledHeading2,
  StyledHeading3,
} from "@/components/StyledComponents/ParagraphsAndHeadings";

// Component Imports
import Heading from "@/components/PageHeading";
import { Spacer } from "@/components/StyledComponents/MainContent";
import BarDiagram from "@/components/BarDiagram";
import UserData from "@/components/UserData";
import SingleBarDiagram from "@/components/SingleBarDiagram";

// Function and Dependency Imports
import { hasToken } from "@/utils/checkUser";
import {
  getAnswerOverview,
  getJLPTStats,
  getStageOverview,
} from "@/utils/statistics";

export async function getServerSideProps(context) {
  const token = await hasToken(context.req);

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return { props: {} };
}

export default function ProfilePage({ wordList }) {
  const JLPTDistribution = getJLPTStats(wordList);

  const StageDistribution = getStageOverview(wordList);

  const AnswerOverview = getAnswerOverview(wordList);

  return (
    <>
      <Heading>Profile</Heading>
      <StyledCardLarge>
        <UserData />
      </StyledCardLarge>
      <StyledCardLarge>
        <StyledHeading2>JLPT Distribution</StyledHeading2>
        <BarDiagram inputArray={JLPTDistribution} />
        <StyledWarningText>
          *Words or phrases that have no JLPT classification.
        </StyledWarningText>
      </StyledCardLarge>
      <StyledCardLarge>
        <StyledHeading2>Study Info</StyledHeading2>
        <StyledHeading3>Stage Distribution</StyledHeading3>
        <SingleBarDiagram inputArray={StageDistribution} unit="entries" />
        <StyledHeading3>Answer Distribution</StyledHeading3>
        <SingleBarDiagram
          inputArray={AnswerOverview}
          unit="times"
          height="250"
        />
        <Spacer />
      </StyledCardLarge>
    </>
  );
}
