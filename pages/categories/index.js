// Import Styles
import CorrectIcon from "@/assets/icons/CorrectIcon";
import EditIcon from "@/assets/icons/EditIcon";
import {
  StyledBackButton,
  StyledSecondaryButtonRight,
} from "@/components/StyledComponents/StyledButtons";
import {
  StyledCenterAlign,
  StyledSection,
  StyledSectionTopBetween,
} from "@/components/StyledComponents/StyledSection";

// Import Components
import AddCategoryForm from "@/components/AddCategoryForm";
import Category from "@/components/Category";
import Heading from "@/components/PageHeading";

// Import Functions and Dependencies
import { hasToken } from "@/utils/checkUser";
import { useState } from "react";

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

export default function Categories({
  handleAddCategory,
  categoryData,
  categoryMutate,
  wordList,
  activeUser,
  databaseMutate,
}) {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <>
      <Heading id="add-form-title">Your Categories</Heading>
      <StyledSectionTopBetween>
        <StyledBackButton href="/words"></StyledBackButton>
        <StyledSecondaryButtonRight
          type="button"
          onClick={() => setIsEditMode(!isEditMode)}
        >
          {!isEditMode ? (
            <span
              className="inherit-background-color"
              role="img"
              aria-label="edit"
            >
              <EditIcon height="20px" width="20px" />
            </span>
          ) : (
            <span
              className="inherit-background-color"
              role="img"
              aria-label="done editing"
            >
              <CorrectIcon height="16px" width="16px" />
            </span>
          )}
        </StyledSecondaryButtonRight>
      </StyledSectionTopBetween>

      <AddCategoryForm
        handleAddCategory={handleAddCategory}
        activeUser={activeUser}
      />
      <StyledSection>
        <h2>Your Categories</h2>
        <StyledCenterAlign>
          {categoryData?.map((category) => {
            return (
              <Category
                key={category._id}
                category={category}
                isEditMode={isEditMode}
                categoryMutate={categoryMutate}
                wordList={wordList}
                databaseMutate={databaseMutate}
              />
            );
          })}
        </StyledCenterAlign>
      </StyledSection>
    </>
  );
}
