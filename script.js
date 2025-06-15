const allStories = {
    story1: [
        { name: "Gram", profile: "img/img1.jpeg", image: "img/img1.jpeg" }
    ],
    story2: [
        { name: "iran", profile: "img/flag1.png", image: "img/flag1.png" }
    ],
    story3: [
        { name: "eskelet", profile: "img/emoji.png", image: "img/emoji.png" }
    ]
};
let current = 0;

function openStory(storyList) {
    stories = storyList;
    current = 0;
    document.getElementById("storyContainer").style.display = "block";
    renderStory();
}
function renderStory() {
    document.getElementById("storyImage").src = stories[current].profile;
    document.getElementById("storyProfile").src = stories[current].image;
    document.getElementById("storyName").innerText = stories[current].name;

    const strip = document.getElementById("storyStrip");
    strip.innerHTML = "";
    stories.forEach((_, index) => {
        const div = document.createElement("div");
        if (index === current) div.classList.add("active");
        strip.appendChild(div);
    });
}
function nextStory() {
    if (current <stories.length - 1) {
        current++;
        renderStory();
    } else {
        closeStory();
    }
}
function prevStory() {
    if (current > 0) {
        current--;
        renderStory();
    }
}
function closeStory() {
    document.getElementById("storyContainer").style.display = "none";
    current = 0;
}

document.getElementById('menuSuggestedPageBtn').addEventListener('click', function () {
    document.getElementById('menuSuggestedPageDiv').style.display = 'block';
})
const menuSuggestedPageDiv = document.getElementById('menuSuggestedPageDiv');
const menuSuggestedPageDivDiv = document.getElementById('menuSuggestedPageDivDiv');
menuSuggestedPageDivDiv.addEventListener('click', function (event) {
    event.stopPropagation();
})
menuSuggestedPageDiv.addEventListener('click', function () {
    menuSuggestedPageDiv.style.display = 'none';
})
document.getElementById('reportSuggestedPage').addEventListener('click', function () {
    const reportPostQuestion = prompt("Add details about why you're reporting this post .");
    if (reportPostQuestion === null || reportPostQuestion.trim() === "") {
        alert("Error submitting report");
    } else {
        alert("Your report has been submitted .");
    }
})

document.getElementById('followSuggestedPageBtn').addEventListener('click', function () {
    if (followSuggestedPageBtn.innerHTML === 'Follow') {
        followSuggestedPageBtn.innerHTML = 'Following';
    } else {
        followSuggestedPageBtn.innerHTML = 'Follow';
    }
})

const likeBtn = document.getElementById('likeBtn');
const saveBtn = document.getElementById('saveBtn');
const likeIcon = document.getElementById('likeIcon');
const saveIcon = document.getElementById('saveIcon');
likeBtn.addEventListener('click', function () {
    likeIcon.classList.toggle('fa-regular'); // حالت خالی
    likeIcon.classList.toggle('fa-solid');   // حالت پر
});
saveBtn.addEventListener('click', function () {
    saveIcon.classList.toggle('fa-regular'); // حالت خالی
    saveIcon.classList.toggle('fa-solid');   // حالت پر
});

function getRelativeTime(pastDate) {
    const now = new Date();
    const diff = now - pastDate;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7)
    const months = Math.floor(days / 30)
    if (seconds < 60) {
        return `${seconds} seconds ago`;
    } else if (minutes < 60) {
        return `${minutes} minutes ago`;
    } else if (hours < 24) {
        return `${hours} hours ago`;
    } else if (days < 7) {
        return `${days} days ago`;
    } else if (days < 30) {
        const remainingDays = days % 7;
        let result = `${weeks} weeks`;
        if (remainingDays > 0) {
            result += ` and ${remainingDays} days`;
        }
        return result + ' ago';
    } else {
        const remainingDays = days % 30;
        const remainingWeeks = Math.floor(remainingDays / 7);
        const remainingDaysLeft = remainingDays % 7;
        let result = `${months} months`;
        if (remainingWeeks > 0) {
            result += ` and ${remainingWeeks} weeks`;
        }
        if (remainingDaysLeft > 0) {
            result += ` and ${remainingDaysLeft} days`;
        }
      
        return result + ' ago';
    }
}
  
document.querySelectorAll('.suggestes-posts-post-description-date').forEach(el => {
    const timeStr = el.getAttribute('data-time');
    const pastDate = new Date(timeStr);
    el.innerText = getRelativeTime(pastDate);
});