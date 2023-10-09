def getCurrentDateTime():
    from datetime import datetime
    now = datetime.now()
    formatted_date = now.strftime("%Y-%m-%d %H:%M:%S")
    return formatted_date

def getNextWeekend():
    from datetime import datetime, timedelta

    today = datetime.now()
    days_until_saturday = (5 - today.weekday()) % 7
    days_until_sunday = (6 - today.weekday()) % 7

    next_saturday = today + timedelta(days=days_until_saturday)
    next_sunday = today + timedelta(days=days_until_sunday)

    next_saturday = next_saturday.replace(hour=20, minute=0, second=0)
    next_sunday = next_sunday.replace(hour=8, minute=0, second=0)

    return [next_saturday, next_sunday]

def scrapeContestInfo():
    import requests
    from bs4 import BeautifulSoup

    try:
        url = "https://leetcode.com/contest/"
        response = requests.get(url)
        response.raise_for_status()

        soup = BeautifulSoup(response.text, 'html.parser')

        contestInfo = []

        # Select each contest card and extract information
        for index, element in enumerate(soup.select(".swiper-slide")):
            title = element.select_one(".font-medium").text.strip()
            date = getNextWeekend()

            if index < 2:
                contestInfo.append({"title": title, "date": date[index]})

        return {
            "last_updated": getCurrentDateTime(),
            "data": contestInfo[:2]
        }

    except Exception as error:
        print("Error scraping contest information:", error)
        return []