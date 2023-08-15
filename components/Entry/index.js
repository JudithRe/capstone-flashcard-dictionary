import { device } from "@/utils/globalValues";
import styled from "styled-components";
import { StyledCard } from "../StyledComponents/StyledCard";
import {
  StyledSecondaryButton,
  StyledSubmitButton,
} from "../StyledComponents/StyledButtons";
import { StyledSectionRightAlign } from "../StyledComponents/StyledSection";
import { deleteEntry } from "@/utils/deleteEntry";

import { LinkWithoutDecoration } from "../StyledComponents/LinkWithoutDecoration";
import EntryContent from "../EntryContent";
import DeleteIcon from "@/assets/icons/DeleteIcon";
import CorrectIcon from "@/assets/icons/CorrectIcon";
import AddIcon from "@/assets/icons/AddIcon";
import EditIcon from "@/assets/icons/EditIcon";
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
            <StyledSecondaryButton
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
            </StyledSecondaryButton>
            <StyledSubmitButton
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
            </StyledSubmitButton>
          </StyledEditComponent>
        )}
      </PositionRelativeDiv>
    );
  }

  if (!_id) {
    return (
      <StyledCard>
        <StyledSectionRightAlign>
          {showAddButton && (
            <StyledSubmitButton
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
            </StyledSubmitButton>
          )}
          {!showAddButton && isDictionaryEntry && (
            <StyledSubmitButton type="button" disabled={true}>
              <span
                className="inherit-background-color"
                role="img"
                aria-label="in list already"
              >
                <CorrectIcon height="16px" width="16px" />
              </span>
            </StyledSubmitButton>
          )}
          {isEditMode && (
            <StyledSecondaryButton
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
            </StyledSecondaryButton>
          )}
        </StyledSectionRightAlign>
        <EntryContent entry={entry} />
      </StyledCard>
    );
  }
}

const StyledEditComponent = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  position: absolute;
  gap: 0.3rem;
  top: 0;
  padding: 10px;
  right: -30px;
  z-index: 3;

  @media ${device.tablet} {
    margin-left: -35px;
  }
`;

const PositionRelativeDiv = styled.div`
  position: relative;
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
