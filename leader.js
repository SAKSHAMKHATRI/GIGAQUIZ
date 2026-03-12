
document.addEventListener('DOMContentLoaded', function() {
    const leaderboardData = [
        { name: '1. John Doe', score: 1500 },
        { name: '2. Jane Smith', score: 1400 },
        { name: '3. USER', score: 1300 },
        { name: '4. Emma Johnson', score: 1200 },
        { name: '5. Liam Brown', score: 1100 },
    ];

    const leaderboardList = document.getElementById('leaderboard');

    leaderboardData.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.score} points`;
        leaderboardList.appendChild(listItem);

        setTimeout(() => {
            listItem.classList.add('appear');
        }, index * 200);
    });
});
