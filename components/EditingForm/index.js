import styled from "styled-components";
import { StyledCard } from "../StyledComponents/StyledCard";
import { convertToKana } from "@/utils/helperFunctions.js";
import { Modal } from "../StyledComponents/Modal";
import {
  StyledDropDown,
  StyledForm,
  StyledFormInput,
  StyledFormLabel,
} from "../AddEntryForm";
import {
  StyledSecondaryButton,
  StyledSubmitButton,
} from "../StyledComponents/StyledButtons";
import WrongIcon from "@/assets/icons/WrongIcon";
import { useState } from "react";
import { getCategory } from "@/utils/getCategory";

function EditingForm({
  handleDetailEditMode,
  previousEnglish,
  previousJapanese,
  previousReading,
  entry,
  _id,
  databaseMutate,
  handleAddCategory,
  activeUser,
  categoryData,
  previousCategory,
  previousCategoryName,
}) {
  const [needsNewCategory, setNeedsNewCategory] = useState(false);

  function handleDropdownChange(event) {
    if (event.target.value === "create") {
      setNeedsNewCategory(true);
    }
  }
  async function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const newEntry = Object.fromEntries(formData);

    if (newEntry.category === "create") {
      const newCategoryObject = {
        userId: activeUser._id,
        name: newEntry.newCategory,
      };
      await handleAddCategory(newCategoryObject);
      const newCategory = await getCategory(activeUser, newEntry.newCategory);

      if (newCategory) {
        const newEntryWithNewCategory = {
          ...newEntry,
          category: newCategory._id,
          categoryName: newCategory.name,
        };

        updateEntry(newEntryWithNewCategory, entry);
        handleDetailEditMode(false);

        form.reset();
        form.englishInput.focus();
        return;
      }
    }

    const categoryInfo = newEntry.category.split(",");

    const newEntryWithCategory = {
      ...newEntry,
      category: categoryInfo[0],
      categoryName: categoryInfo[1],
    };
    updateEntry(newEntryWithCategory, entry);
    handleDetailEditMode(false);

    form.reset();
    form.englishInput.focus();
  }

  async function updateEntry(newData, previousEntry) {
    const { japaneseInput, reading, englishInput, category, categoryName } =
      newData;

    const updatedEntry = {
      ...previousEntry,
      category: category,
      categoryName: categoryName,
      japanese: {
        word: japaneseInput,
        reading: reading,
      },
      english: englishInput.split(","),
      study: {
        ...previousEntry.study,
        stage: 0,
        streak: 0,
      },
    };

    // Update entry in database
    const response = await fetch(`/api/word-list/item/${_id}`, {
      method: "PUT",
      body: JSON.stringify(updatedEntry),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      databaseMutate();
    }
  }

  return (
    <Modal>
      <StyledCenteredCard>
        <StyledSecondaryButton
          type="button"
          onClick={() => handleDetailEditMode(false)}
        >
          <span
            className="inherit-background-color"
            role="img"
            aria-label="exit"
          >
            <WrongIcon height="16px" width="16px" />
          </span>
        </StyledSecondaryButton>
        <h2 className="inherit-background-color">Edit your Entry</h2>

        <StyledForm
          onSubmit={handleFormSubmit}
          aria-labelledby="add-form-title"
        >
          <StyledFormLabel htmlFor="english-input">English</StyledFormLabel>
          <StyledFormInput
            type="text"
            id="english-input"
            name="englishInput"
            defaultValue={previousEnglish}
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
            defaultValue={previousJapanese}
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
            defaultValue={previousReading}
          />
          <StyledFormLabel htmlFor="category">Category</StyledFormLabel>
          <StyledDropDown
            name="category"
            id="category"
            onChange={(event) => handleDropdownChange(event)}
          >
            <option defaultValue={previousCategory}>
              {previousCategoryName ? previousCategoryName : "no category"}
            </option>
            {categoryData
              .filter((category) => !previousCategory === category._id)
              .map((category) => {
                return (
                  <option
                    key={`select${category._id}`}
                    value={[category._id, category.name]}
                  >
                    {category.name}
                  </option>
                );
              })}
            <option value="create">... Create a new category</option>
          </StyledDropDown>
          {needsNewCategory && (
            <>
              <StyledFormLabel htmlFor="new-category">
                New Category Title
              </StyledFormLabel>
              <StyledFormInput
                type="text"
                id="new-category"
                name="newCategory"
              />
            </>
          )}
          <StyledSubmitButton type="submit">Save</StyledSubmitButton>
          <p className="inherit-background-color">
            Saving will cause your study progress to be reset to 0.
          </p>
        </StyledForm>
      </StyledCenteredCard>
    </Modal>
  );
}

const StyledCenteredCard = styled(StyledCard)`
  position: fixed;
  transform: translate(50%, -50%);
  top: 50%;
  right: 50%;
`;

export default EditingForm;
