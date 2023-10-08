const axios = require("axios");
const { format, parseISO } = require("date-fns");

//function to get the current time
const getCurrentDateTime = () => {
  const now = new Date();
  // Format the date as "YYYY-MM-DD HH:mm:ss"
  const formattedDate = now.toISOString().slice(0, 19).replace("T", " ");
  return formattedDate;
};

// function to format the date string to the desired form
function formatDateString(inputString) {
  const parsedDate = parseISO(inputString);
  return format(parsedDate, "MMM dd, yyyy, h:mm a");
}

// function to fetch the contest data from the codechef
async function scrapeContestInfo() {
  try {
    const res = await axios.get(
      "https://www.codechef.com/api/list/contests/all?sort_by=START&sorting_order=asc&offset=0&mode=premium"
    );
    const futureContest = res.data.future_contests;
    const contestInfo = [];
    futureContest.forEach((element) => {
      const contest = {
        contest_name: element.contest_name,
        contest_start_date: formatDateString(element.contest_start_date_iso),
        contest_end_date: formatDateString(element.contest_end_date_iso),
      };
      contestInfo.push(contest);
    });
    return {
      last_updated: getCurrentDateTime(),
      data: contestInfo,
    };
  } catch (error) {
    console.error("Error scraping contest information:", error);
    return [];
  }
}

export async function GET() {
  return Response.json(await scrapeContestInfo());
}
