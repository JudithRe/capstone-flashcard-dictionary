import { styled } from "styled-components";
import { StyledCard } from "../StyledComponents/StyledCard";
import { StyledSection } from "../StyledComponents/StyledSection";
import Heading from "../PageHeading";
import * as wanakana from "wanakana";

function AddEntryForm({ handleAddEntry, createNewEntryList }) {
  function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newEntry = Object.fromEntries(formData);

    handleAddEntry({ newEntry });

    event.target.reset();
    event.target.enInput.focus();
  }

  return (
    <StyledSection>
      <Heading id="add-form-title" PageTitle="Add your Words" />
      <StyledCard>
        <StyledForm
          onSubmit={handleFormSubmit}
          aria-labelledby="add-form-title"
        >
          <label htmlFor="enInput">English</label>
          <input type="text" id="enInput" name="enInput" required />
          <label htmlFor="jpInput">Japanese</label>
          <input
            onChange={(event) => {
              event.target.value = wanakana.toKana(event.target.value); //To change input to JP Characters directly
            }}
            type="text"
            id="jpInput"
            name="jpInput"
            required
          />
          <label htmlFor="reading">Reading / Comment</label>
          <input type="text" id="reading" name="reading" />
          <StyledSubmitButton type="submit">Add</StyledSubmitButton>
        </StyledForm>
      </StyledCard>
    </StyledSection>
  );
}

const StyledForm = styled.form`
  background-color: inherit;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  & label {
    background-color: inherit;
    margin-bottom: -5px;
    font-weight: 500;
  }

  & input {
    background-color: inherit;
    padding: 10px;
    border: 1px solid var(--light-grey);
    border-radius: 5px;
    box-shadow: inset var(--inset-box-shadow);
  }
`;

const StyledSubmitButton = styled.button`
  align-self: flex-end;
  background-color: var(--highlight-red);
  color: var(--white);
  padding: 10px 15px;
  border: none;
  border-radius: 25px;
  box-shadow: var(--default-box-shadow);
  font-weight: 500;
`;

export default AddEntryForm;
