const axios = require("axios");
const cheerio = require("cheerio");

const getNextWeekend = () => {
  const today = new Date();

  // Calculate the next Saturday with a time of 8:00 PM (20:00) in UTC+05:30
  const nextSaturday = new Date(
    today.getUTCFullYear(),
    today.getUTCMonth(),
    today.getUTCDate() + (6 - today.getUTCDay()),
    20, // 8:00 PM
    0, // Minutes
    0 // Seconds
  );

  // Calculate the next Sunday with a time of 8:00 AM (08:00) in UTC+05:30
  const nextSunday = new Date(
    today.getUTCFullYear(),
    today.getUTCMonth(),
    today.getUTCDate() + (7 - today.getUTCDay()),
    8, // 8:00 AM
    0, // Minutes
    0 // Seconds
  );

  // Set the time zone to UTC+05:30
  nextSaturday.setMinutes(nextSaturday.getMinutes());
  nextSunday.setMinutes(nextSunday.getMinutes());

  return [nextSaturday, nextSunday];
};

async function scrapeContestInfo() {
  try {
    const response = await axios.get("https://leetcode.com/contest/");
    const $ = cheerio.load(response.data);

    const contestInfo: any = [];

    // Select each contest card and extract information
    $(".swiper-slide").each((index: number, element: any) => {
      const title = $(element).find(".font-medium").text().trim();

      const date = getNextWeekend();

      if (index < 2) contestInfo.push({ title, date: date[index] });
    });

    return contestInfo.slice(0, 2);
  } catch (error) {
    console.error("Error scraping contest information:", error);
    return [];
  }
}

// // Call the scraper function
// scrapeContestInfo().then((contests) => {
//   console.log(contests);
// });

export async function GET(res: Response) {
  return Response.json(await scrapeContestInfo());
}
