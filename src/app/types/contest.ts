// name	Contest name.
// url	Contest link.
// start_time	Start time of the contest in UTC (Format: %Y-%m-%dT%H:%M:%S.%LZ) if exists, - otherwise.
// end_time	End time of the contest in UTC (Format: %Y-%m-%dT%H:%M:%S.%LZ) if exists, - otherwise.
// duration	Contest duration in seconds if exists, - otherwise.
// rated_range	The rating limit for rated participation in the contest.
// in_24_hours	Yes if the contest starts within the next 24 hours, No otherwise.
// status	CODING if the contest is running, BEFORE otherwise.

export interface Contest {
  name: string;
  url: string;
  start_time: string;
  end_time: string;
  duration: number;
  rated_range: string;
  in_24_hours: string;
  status: string;
}
