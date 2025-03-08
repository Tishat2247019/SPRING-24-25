function processUser(name, cdallback) {
  console.log("Processing user: " + name);
  cdallback();
}

processUser("Alice", () => {
  console.log("User processed successfully!");
});

function processUser(name, callback) {
  console.log("Processing user: " + name);
  callback();
}

// Callback 1: Show success message
processUser("Alice", () => {
  console.log("User processed successfully!");
});

// Callback 2: Send a welcome email
processUser("Bob", () => {
  console.log("Sending welcome email to Bob...");
});
