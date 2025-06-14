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