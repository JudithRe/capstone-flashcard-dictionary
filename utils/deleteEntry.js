import { useRouter } from "next/router";

// Delete entry from database

export async function deleteEntry(_id, databaseMutate) {
  const response = await fetch(`/api/word-list/${_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    databaseMutate();
  } else {
    console.log("There was a problem ", response.status);
  }
}
