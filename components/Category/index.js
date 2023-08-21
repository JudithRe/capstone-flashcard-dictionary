import DeleteIcon from "@/assets/icons/DeleteIcon";
import { StyledEditComponent } from "../Entry";
import { StyledSecondaryButtonRight } from "../StyledComponents/StyledButtons";
import { StyledCard } from "../StyledComponents/StyledCard";
import { deleteCategory } from "@/utils/deleteFunctions";

function Category({
  category,
  isEditMode,
  categoryMutate,
  databaseMutate,
  wordList,
}) {
  const { name, _id } = category;
  return (
    <StyledCard>
      {isEditMode && (
        <StyledEditComponent>
          <StyledSecondaryButtonRight
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
          </StyledSecondaryButtonRight>
        </StyledEditComponent>
      )}
      <h2 className="inherit-background-color">{name}</h2>
    </StyledCard>
  );
}

export default Category;
