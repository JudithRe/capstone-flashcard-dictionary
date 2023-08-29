// Styles Imports
import { StyledCard } from "../StyledComponents/StyledCard";
import { StyledSection } from "../StyledComponents/StyledSection";
import { FixedCenteredPosition } from "../StyledComponents/Modal";

import {
  StyledDropDown,
  StyledForm,
  StyledFormInput,
  StyledFormLabel,
  StyledFormSubmitButton,
} from "./styled.AddEntryForm";
import { StyledResultDisplay } from "../SearchResults/styled.SearchResults";

// Functions and Dependencies Imports
import { getCategory } from "@/utils/getCategory";
import { convertToKana } from "@/utils/helperFunctions.js";
import { useState } from "react";

function AddEntryForm({
  handleAddEntry,
  handleAddCategory,
  activeUser,
  categoryData,
}) {
  const [needsNewCategory, setNeedsNewCategory] = useState(false);
  if (!categoryData) {
    return (
      <FixedCenteredPosition>
        <StyledResultDisplay>Loading...</StyledResultDisplay>
      </FixedCenteredPosition>
    );
  }

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

    const { japaneseInput, reading, englishInput, category } = newEntry;

    const categoryValues = category.split(",");

    if (newEntry.category === "create") {
      const newCategoryObject = {
        userId: activeUser._id,
        name: newEntry.newCategory,
      };

      await handleAddCategory(newCategoryObject);
      const newCategory = await getCategory(activeUser, newEntry.newCategory);

      if (newCategory) {
        const newEntryObject = {
          userId: activeUser._id,
          category: newCategory._id,
          categoryName: newCategory.name,
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
        setNeedsNewCategory(false);
        return;
      }
    }

    if (categoryValues[1] === "default") {
      const newEntryObject = {
        userId: activeUser._id,
        category: null,
        categoryName: "",
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
      setNeedsNewCategory(false);
      return;
    }
    const newEntryObject = {
      userId: activeUser._id,
      category: categoryValues[0],
      categoryName: categoryValues[1],
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
    setNeedsNewCategory(false);
  }

  return (
    <StyledSection>
      <StyledCard>
        <h2>Create your Entry</h2>
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
          <StyledDropDown
            name="category"
            onChange={(event) => handleDropdownChange(event)}
          >
            <option value={[null, "default"]} defaultValue>
              Choose a Category
            </option>
            {categoryData.map((category) => {
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
                placeholder="max. 35 characters"
              />
            </>
          )}
          <StyledFormSubmitButton type="submit">Add</StyledFormSubmitButton>
        </StyledForm>
      </StyledCard>
    </StyledSection>
  );
}

export default AddEntryForm;
