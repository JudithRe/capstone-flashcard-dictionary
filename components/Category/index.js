// Styles Imports
import DeleteIcon from "@/assets/icons/DeleteIcon";
import { PositionRelativeDiv, StyledEditComponent } from "../Entry";
import { StyledEditButtonDark } from "../StyledComponents/StyledButtons";
import { StyledCard } from "../StyledComponents/StyledCard";

// Functions and Dependencies Imports
import { deleteCategory } from "@/utils/deleteFunctions";
import { StyledSectionRightAlign } from "../StyledComponents/StyledSection";

function Category({
  category,
  isEditMode,
  categoryMutate,
  databaseMutate,
  wordList,
}) {
  const { name, _id } = category;
  return (
    <PositionRelativeDiv>
      <StyledCard>
        <h2 className="inherit-background-color">{name}</h2>
      </StyledCard>
      {isEditMode && (
        <StyledEditComponent>
          <StyledEditButtonDark
            type="button"
            onClick={() =>
              deleteCategory(_id, categoryMutate, wordList, databaseMutate)
            }
          >
            <span
              className="inherit-background-color"
              role="img"
              aria-label="delete"
            >
              <DeleteIcon width="16px" height="16px" />
            </span>
          </StyledEditButtonDark>
        </StyledEditComponent>
      )}
    </PositionRelativeDiv>
  );
}

export default Category;
