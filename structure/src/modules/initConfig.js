console.log("⏳ Connecting to the remote server...");

// We are using 'await' OUTSIDE of any function!
const remoteData = await new Promise((resolve) => {
    setTimeout(() => {
        // After 2 seconds, we get the data
        resolve({ apiStatus: "Online", maxUsers: 5000 });
    }, 2000);
});

console.log("✅ Server connection established!");

// Export the data so the rest of the app can use it
export default remoteData;