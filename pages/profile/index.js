import Heading from "@/components/PageHeading";
import { MainContent, Spacer } from "@/components/StyledComponents/MainContent";
import { hasToken } from "@/utils/checkUser";
import {
  getAnswerOverview,
  getJLPTStats,
  getStageOverview,
} from "@/utils/statistics";
import BarDiagram from "@/components/BarDiagram";
import UserData from "@/components/UserData";
import { StyledCardLarge } from "@/components/StyledComponents/StyledCard";
import { StyledWarningText } from "@/components/EditingForm";
import SingleBarDiagram from "@/components/SingleBarDiagram";
import { StyledHeading2, StyledHeading3 } from "../words/[id]";
import PieChart from "@/components/PieChart";

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
  console.log("stages", AnswerOverview);
  return (
    <MainContent>
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
    </MainContent>
  );
}
