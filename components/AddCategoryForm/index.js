import { StyledCard } from "../StyledComponents/StyledCard";
import { StyledSection } from "../StyledComponents/StyledSection";
import {
  StyledForm,
  StyledFormInput,
  StyledFormLabel,
  StyledFormSubmitButton,
} from "../AddEntryForm";

function AddCategoryForm({ handleAddCategory, activeUser }) {
  function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const newCategory = Object.fromEntries(formData);

    const { categoryName } = newCategory;

    const newCategoryObject = {
      userId: activeUser._id,
      name: categoryName,
    };

    handleAddCategory(newCategoryObject);

    form.reset();
  }

  return (
    <StyledSection>
      <StyledCard>
        <h2 id="category-form">Create a Category</h2>
        <StyledForm onSubmit={handleFormSubmit} aria-labelledby="category-form">
          <StyledFormLabel htmlFor="category-name">
            Category Title
          </StyledFormLabel>
          <StyledFormInput
            type="text"
            id="category-name"
            name="categoryName"
            required
          />

          <StyledFormSubmitButton type="submit">Add</StyledFormSubmitButton>
        </StyledForm>
      </StyledCard>
    </StyledSection>
  );
}

export default AddCategoryForm;
