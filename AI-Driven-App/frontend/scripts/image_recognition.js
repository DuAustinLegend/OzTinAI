async function analyzeImage() {
    const imageUpload = document.getElementById("imageUpload").files[0];
    const formData = new FormData();
    formData.append("image", imageUpload);
    
    const response = await fetch("/image_recognition", {
        method: "POST",
        body: formData
    });
    const data = await response.json();
    document.getElementById("imageResult").innerText = data.result;
}