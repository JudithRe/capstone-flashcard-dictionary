// Style Imports
import {
  StyledCenteredCard,
  StyledFormButtonRight,
  StyledFormTitle,
  StyledSubmitButtonRight,
  StyledWarningText,
} from "./styled.EditingForm";
import {
  StyledDropDown,
  StyledForm,
  StyledFormInput,
  StyledFormLabel,
} from "../AddEntryForm/styled.AddEntryForm";
import WrongIcon from "@/assets/icons/WrongIcon";

// Components Imports
import { Modal } from "../StyledComponents/Modal";

// Functions and Dependencies Imports
import { convertToKana } from "@/utils/helperFunctions.js";
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
        <StyledFormButtonRight
          type="button"
          onClick={() => handleDetailEditMode(false)}
        >
          <span role="img" aria-label="close">
            <WrongIcon height="16px" width="16px" />
          </span>
        </StyledFormButtonRight>
        <StyledFormTitle id="edit-form-title">Edit your Entry</StyledFormTitle>

        <StyledForm
          onSubmit={handleFormSubmit}
          aria-labelledby="edit-form-title"
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
            <option value={[previousCategory, previousCategoryName]} selected>
              {previousCategoryName ? previousCategoryName : "no category"}
            </option>
            {categoryData
              .filter((category) => previousCategory !== category._id)
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
                maxLength={35}
              />
            </>
          )}
          <StyledSubmitButtonRight type="submit">Save</StyledSubmitButtonRight>
          <StyledWarningText>
            Saving will cause your study progress to be reset to 0.
          </StyledWarningText>
        </StyledForm>
      </StyledCenteredCard>
    </Modal>
  );
}

export default EditingForm;
