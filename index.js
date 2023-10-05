// JavaScript function to trigger the file download
function download() {
    // Create an anchor element
    const link = document.createElement('a');
    
    // Set the download link's attributes
    link.href = "Aarush's_Resume.pdf"; // file path
    link.download = 'Resume.pdf'; // desired file name
    
    // Simulate a click on the anchor element to trigger the download
    link.click();
}

// Add a click event listener to the button
document.getElementById('resume-button').addEventListener('click', download);