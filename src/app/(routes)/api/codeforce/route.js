
/* 
    The api returns an array oj objects containing the codeforces contest details

    Eg:
    [
        {
            "name": "Codeforces Round 895 (Div. 3)",
            "url": "https://codeforces.com/contestRegistration/1872",
            "start_time": "2023-09-07T14:35:00.000Z",
            "end_time": "2023-09-07T16:50:00.000Z",
            "duration": "8100",
            "in_24_hours": "No",
            "status": "BEFORE"
            },
    ]

*/

// Kontests api to fetch data for upcoming contests
const apiUrl = 'https://kontests.net/api/v1/codeforces';

//fetches the data and filters the contests and return the contests which are upcoming and the registrations are open 
async function getCodeforcesUpcomingContest() {

    try {
        const fetchContest = await fetch(apiUrl);
        const contestList = await fetchContest.json();
        const currentDate = new Date();
        const upcomingContest = contestList.filter(contest => new Date(contest.start_time) >= currentDate && contest.status === 'BEFORE');
        return upcomingContest;
    } catch (e) {
        console.error('failed to fetch contests');
    }


}

export default getCodeforcesUpcomingContest;