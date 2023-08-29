// Styles Imports
import DeleteIcon from "@/assets/icons/DeleteIcon";
import {
  PositionRelativeDiv,
  StyledEditComponent,
} from "../Entry/styled.Entry";
import { StyledEditButtonDark } from "../StyledComponents/StyledButtons";
import { StyledCard } from "../StyledComponents/StyledCard";

// Functions and Dependencies Imports
import { deleteCategory } from "@/utils/deleteFunctions";

function Category({
  category,
  isEditMode,
  categoryMutate,
  databaseMutate,
  wordList,
}) {
  const { name, _id } = category;

  const categoryWordList = wordList.filter((entry) => entry.category === _id);
  return (
    <PositionRelativeDiv>
      <StyledCard>
        <h2>{name}</h2>
        <p>
          {categoryWordList.length}{" "}
          {categoryWordList.length === 1 ? "entry" : "entries"}
        </p>
      </StyledCard>
      {isEditMode && (
        <StyledEditComponent>
          <StyledEditButtonDark
            type="button"
            onClick={() =>
              deleteCategory(_id, categoryMutate, wordList, databaseMutate)
            }
          >
            <span role="img" aria-label="delete">
              <DeleteIcon width="16px" height="16px" />
            </span>
          </StyledEditButtonDark>
        </StyledEditComponent>
      )}
    </PositionRelativeDiv>
  );
}

export default Category;
