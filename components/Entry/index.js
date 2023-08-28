// Styles Imports
import {
  PositionRelativeDiv,
  StyledEditComponent,
  StyledSectionRightAlignAbsolute,
} from "./styled.Entry";
import { StyledCard } from "../StyledComponents/StyledCard";
import {
  StyledEditButtonDark,
  StyledEditButtonRed,
  StyledAddButton,
} from "../StyledComponents/StyledButtons";
import { LinkWithoutDecoration } from "../StyledComponents/Links";
import DeleteIcon from "@/assets/icons/DeleteIcon";
import CorrectIcon from "@/assets/icons/CorrectIcon";
import AddIcon from "@/assets/icons/AddIcon";
import EditIcon from "@/assets/icons/EditIcon";

// Components Imports
import EntryContent from "../EntryContent";
import { Spacer } from "../StyledComponents/MainContent";

// Functions and Dependencies Imports
import { deleteEntry } from "@/utils/deleteFunctions.js";
import { useRouter } from "next/router";

function Entry({
  entry,
  handleAddEntry,
  isEditMode,
  databaseMutate,
  handleDetailEditMode,
}) {
  const router = useRouter();
  const { _id, showAddButton, isDictionaryEntry } = entry;

  if (_id) {
    return (
      <PositionRelativeDiv>
        <LinkWithoutDecoration href={`/words/${_id}`}>
          <StyledCard>
            <EntryContent entry={entry} />
          </StyledCard>
        </LinkWithoutDecoration>
        {isEditMode && (
          <StyledEditComponent>
            <StyledEditButtonDark
              type="button"
              onClick={() => deleteEntry(_id, databaseMutate)}
            >
              <span role="img" aria-label="delete">
                <DeleteIcon width="16px" height="16px" />
              </span>
            </StyledEditButtonDark>
            <StyledEditButtonRed
              type="button"
              onClick={() => {
                handleDetailEditMode(true);
                router.push(`/words/${_id}`);
              }}
            >
              <span role="img" aria-label="edit">
                <EditIcon width="16px" height="16px" />
              </span>
            </StyledEditButtonRed>
          </StyledEditComponent>
        )}
      </PositionRelativeDiv>
    );
  }

  if (!_id) {
    return (
      <PositionRelativeDiv>
        <StyledCard>
          <StyledSectionRightAlignAbsolute>
            {showAddButton && (
              <StyledAddButton
                type="button"
                onClick={(event) => {
                  event.target.disabled = true;
                  handleAddEntry(entry);
                }}
              >
                <span role="img" aria-label="add to list">
                  <AddIcon height="16px" width="16px" />
                </span>
              </StyledAddButton>
            )}
            {!showAddButton && isDictionaryEntry && (
              <StyledAddButton type="button" disabled={true}>
                <span role="img" aria-label="in list already">
                  <CorrectIcon height="16px" width="16px" />
                </span>
              </StyledAddButton>
            )}
          </StyledSectionRightAlignAbsolute>
          <Spacer />
          <Spacer />
          <Spacer />
          <EntryContent entry={entry} />
        </StyledCard>
      </PositionRelativeDiv>
    );
  }
}

export default Entry;
