import styled from "styled-components";
import { StyledCard } from "../StyledComponents/StyledCard";
import { StyledSection } from "../StyledComponents/StyledSection";
import { convertToKana } from "@/utils/helperFunctions.js";

function AddEntryForm({ handleAddEntry }) {
  function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const newEntry = Object.fromEntries(formData);

    const { japaneseInput, reading, englishInput } = newEntry;
    const newEntryObject = {
      isDictionaryEntry: false,
      slug: japaneseInput,
      japanese: {
        word: japaneseInput,
        reading: reading,
      },
      english: englishInput.split(", "),

      study: {
        lastReview: "new",
        stage: 0,
        lastWasWrongAnswer: false,
        wrongAnswerCount: 0,
        rightAnswerCount: 0,
        streak: 0,
      },
    };

    handleAddEntry(newEntryObject);

    form.reset();
    form.englishInput.focus();
  }

  return (
    <StyledSection>
      <StyledCard>
        <h2 className="inherit-background-color">Create your Entry</h2>
        <StyledForm
          onSubmit={handleFormSubmit}
          aria-labelledby="add-form-title"
        >
          <StyledFormLabel htmlFor="english-input">English</StyledFormLabel>
          <StyledFormInput
            type="text"
            id="english-input"
            name="englishInput"
            required
          />
          <StyledFormLabel htmlFor="japanese-input">Japanese</StyledFormLabel>
          <StyledFormInput
            onChange={(event) =>
              (event.target.value = convertToKana(event.target.value))
            }
            type="text"
            id="japanese-input"
            name="japaneseInput"
            required
          />
          <StyledFormLabel htmlFor="reading">Reading</StyledFormLabel>
          <StyledFormInput
            onChange={(event) =>
              (event.target.value = convertToKana(event.target.value))
            }
            type="text"
            id="reading"
            name="reading"
          />
          <StyledFormSubmitButton type="submit">Add</StyledFormSubmitButton>
        </StyledForm>
      </StyledCard>
    </StyledSection>
  );
}

export const StyledForm = styled.form`
  background-color: inherit;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const StyledFormLabel = styled.label`
  background-color: inherit;
  margin-bottom: -5px;
  font-weight: 500;
`;

export const StyledFormInput = styled.input`
  background-color: inherit;
  padding: 10px;
  border: 1px solid var(--light-grey);
  border-radius: 5px;
  box-shadow: inset var(--inset-box-shadow);
`;

export const StyledFormSubmitButton = styled.button`
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
