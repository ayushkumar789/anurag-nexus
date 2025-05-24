let chapterCount = 0;

function addChapter() {
    chapterCount++;

    const chaptersContainer = document.getElementById("chaptersContainer");
    const chapterDiv = document.createElement("div");
    chapterDiv.id = `chapter_${chapterCount}`;
    chapterDiv.innerHTML = `
        <div class="accordion__item">
            <a href="#"
               class="accordion__toggle"
               data-toggle="collapse"
               data-target="#chapter_${chapterCount}_collapse"
               data-parent="#chaptersContainer">
                <span class="flex">Chapter ${chapterCount}</span>
                <span class="accordion__toggle-icon material-icons">keyboard_arrow_down</span>
            </a>
            <div class="accordion__menu collapse" id="chapter_${chapterCount}_collapse">
                <div class="form-group">
                    <label class="form-label">Chapter Title</label>
                    <input type="text" class="form-control" name="chapterTitle_${chapterCount}" required>
                </div>
                <div class="form-group">
                    <label class="form-label">Description</label>
                    <textarea class="form-control" name="chapterDescription_${chapterCount}" required></textarea>
                </div>
                <div id="videosContainer_${chapterCount}">
                    <label>Videos:</label>
                    <input type="file" name="video_${chapterCount}_1" class="form-control video-input" accept="video/*" required>
                </div>
                <button type="button" class="btn btn-outline-secondary mt-2" onclick="addVideo(${chapterCount})">Add More Videos</button>
            </div>
        </div>
    `;
    chaptersContainer.appendChild(chapterDiv);
}

function addVideo(chapterId) {
    const videosContainer = document.getElementById(`videosContainer_${chapterId}`);
    const videoCount = videosContainer.querySelectorAll("input.video-input").length + 1;
    
    const videoInput = document.createElement("input");
    videoInput.type = "file";
    videoInput.name = `video_${chapterId}_${videoCount}`;
    videoInput.className = "form-control mt-2 video-input";
    videoInput.accept = "video/*"; // Ensuring only video files are selected
    videosContainer.appendChild(videoInput);
}

// ✅ Handle Form Submission
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let formData = new FormData(this); // Get existing form data

    // Collect dynamically added video files
    document.querySelectorAll("input.video-input").forEach(input => {
        if (input.files.length > 0) {
            formData.append(input.name, input.files[0]); // Append each video file
        }
    });

    // ✅ Debugging: Print all form data to console
    for (let [key, value] of formData.entries()) {
        console.log(`FormData: ${key} -> ${value.name || value}`);
    }

    // ✅ Send the form using AJAX
    fetch(this.action, {
        method: this.method,
        body: formData
    }).then(response => {
        if (response.redirected) {
            window.location.href = response.url; // Redirect if needed
        } else {
            return response.text(); // Debugging purpose
        }
    }).then(data => {
        console.log("Server Response:", data); // Log the response for debugging
    }).catch(error => {
        console.error("Error submitting form:", error);
    });
});
