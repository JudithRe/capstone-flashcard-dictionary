// Delete entry from database

export async function deleteEntry(_id, databaseMutate) {
  const response = await fetch(`/api/word-list/${_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    databaseMutate();
    router.push("/words"); //to use the same function for deletion on detail page.
  } else {
    console.log("There was a problem ", response.status);
  }
}
