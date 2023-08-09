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

function Entry({ entry, handleAddEntry, isEditMode, databaseMutate }) {
  const { _id } = entry;

  if (_id) {
    return (
      <LinkWithoutDecoration href={`/words/${_id}`}>
        <EntryContent
          isEditMode={isEditMode}
          key={entry._id}
          entry={entry}
          handleAddEntry={handleAddEntry}
          databaseMutate={databaseMutate}
        />
      </LinkWithoutDecoration>
    );
  }

  if (!_id) {
    return (
      <EntryContent
        isEditMode={isEditMode}
        key={entry._id}
        entry={entry}
        handleAddEntry={handleAddEntry}
        databaseMutate={databaseMutate}
      />
    );
  }
}

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
