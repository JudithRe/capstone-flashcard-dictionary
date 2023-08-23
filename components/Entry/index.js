import styled from "styled-components";
import { StyledCard } from "../StyledComponents/StyledCard";
import {
  StyledSecondaryButtonRight,
  StyledEditButtonDark,
  StyledEditButtonRed,
  StyledAddButton,
} from "../StyledComponents/StyledButtons";
import { StyledSectionRightAlign } from "../StyledComponents/StyledSection";
import { deleteEntry } from "@/utils/deleteFunctions.js";

import { LinkWithoutDecoration } from "../StyledComponents/LinkWithoutDecoration";
import EntryContent from "../EntryContent";
import DeleteIcon from "@/assets/icons/DeleteIcon";
import CorrectIcon from "@/assets/icons/CorrectIcon";
import AddIcon from "@/assets/icons/AddIcon";
import EditIcon from "@/assets/icons/EditIcon";
import { useRouter } from "next/router";
import { device } from "@/utils/globalValues";
import { Spacer } from "../StyledComponents/MainContent";

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
              <span
                className="inherit-background-color"
                role="img"
                aria-label="delete"
              >
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
              <span
                className="inherit-background-color"
                role="img"
                aria-label="edit"
              >
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
              <span
                className="inherit-background-color"
                role="img"
                aria-label="add to list"
              >
                <AddIcon height="16px" width="16px" />
              </span>
            </StyledAddButton>
          )}
          {!showAddButton && isDictionaryEntry && (
            <StyledAddButton type="button" disabled={true}>
              <span
                className="inherit-background-color"
                role="img"
                aria-label="in list already"
              >
                <CorrectIcon height="16px" width="16px" />
              </span>
            </StyledAddButton>
          )}
          {isEditMode && (
            <StyledSecondaryButtonRight
              type="button"
              onClick={() => deleteEntry(_id, databaseMutate)}
            >
              <span
                className="inherit-background-color"
                role="img"
                aria-label="delete"
              >
                <DeleteIcon width="16px" height="16px" />
              </span>
            </StyledSecondaryButtonRight>
          )}
        </StyledSectionRightAlignAbsolute>
        <Spacer />
        <Spacer />
        <Spacer />
        <EntryContent entry={entry} />
      </StyledCard>
    );
  }
}

const StyledSectionRightAlignAbsolute = styled.div`
  position: absolute;
  right: 0;
  top: 1rem;
  padding: none;
`;

export const StyledEditComponent = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 10px 0;
  z-index: 3;
  margin-left: -15px;
`;

export const PositionRelativeDiv = styled.div`
  display: flex;
`;

export const StyledJPDefinition = styled.h2`
  background-color: inherit;
  font-size: 1.5rem;
  margin: 0px;
`;

export const StyledDefinition = styled.li`
  display: inline-block;
  background-color: inherit;
  list-style-type: none;
  font-size: 1rem;
  &:not(:last-child)::after {
    content: " ⦁ ";
    background-color: inherit;
  }
  &:not(:first-child) {
    padding-left: 0.3rem;
  }
`;
export const StyledUl = styled.ul`
  background-color: inherit;
  padding: 0;
  text-align: center;
  margin: 0;
`;

export default Entry;
