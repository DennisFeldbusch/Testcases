/**
 * Fetches user data from a public API and logs it to the console.
 * Uses async/await for cleaner, readable asynchronous code.
 */
async function getUserData(userId) {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

  try {
    // 1. Start the network request
    const response = await fetch(url);

    // 2. Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // 3. Parse the response body as JSON
    const data = await response.json();

    // 4. Handle the successful data
    console.log("User Data Received:", data);
    return data;

  } catch (error) {
    // 5. Handle network errors or parsing errors
    console.error("Could not fetch data:", error.message);
  }
}

// Execute the function
getUserData(1);
