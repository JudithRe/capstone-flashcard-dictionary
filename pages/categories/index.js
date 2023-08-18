import CorrectIcon from "@/assets/icons/CorrectIcon";
import EditIcon from "@/assets/icons/EditIcon";
import AddCategoryForm from "@/components/AddCategoryForm";
import Category from "@/components/Category";
import Heading from "@/components/PageHeading";
import { MainContent } from "@/components/StyledComponents/MainContent";
import { StyledSecondaryButton } from "@/components/StyledComponents/StyledButtons";
import {
  StyledCenterAlign,
  StyledSection,
  StyledSectionRightAlign,
} from "@/components/StyledComponents/StyledSection";
import { hasToken } from "@/utils/checkUser";
import { useRouter } from "next/router";
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
  const [isEditMode, setIsEditMode] = useState();
  const router = useRouter();
  return (
    <MainContent>
      <Heading id="add-form-title" PageTitle="Your Categories" />
      <StyledSectionRightAlign>
        <StyledSecondaryButton type="button" onClick={() => router.back()}>
          Back
        </StyledSecondaryButton>
        <StyledSecondaryButton
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
        </StyledSecondaryButton>
      </StyledSectionRightAlign>
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
    </MainContent>
  );
}
