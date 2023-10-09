from datetime import datetime
import time
from fastapi import FastAPI, Request
from contestScrap  import scrapeContestInfo

result = scrapeContestInfo()

app = FastAPI()

# sever response time


@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    return response


# add log middleware
@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time

    # log
    log = f"{datetime.now()} {request.method} {request.url} {response.status_code} {process_time}"
    with open("log.txt", "a") as f:
        f.write(log + "\n")

    return response


@app.get("/")
async def root():
    return {"Server": "Api Server is running",
            "status": "200",
            "routes": ["/api/v1/leetcode", "/api/v1/codeforces", "/api/v1/codechef"],
            "message": "Success",
            "time": datetime.now(),
            }
    
    
@app.get("/api/v1/leetcode")
async def leetcode():
    return scrapeContestInfo

@app.get("/api/v1/codeforces")
async def codeforces():
    return scrapeContestInfo

@app.get("/api/v1/codechef")
async def codechef():
    return scrapeContestInfo

