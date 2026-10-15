# Canadian data sources for the province pages (scouted Oct 14, 2026)

No file was downloaded during scouting. Use these as primary sources; open each page before
citing it. Licence lines are what each source asks for.

## Lyme and other tick-borne disease
- **PHAC tick-borne annual report** (health-infobase.canada.ca/zoonoses/ticks/annual-report.html):
  province counts 2023-2024 only. 2024: Canada 5,809; ON 2,369; NS 2,350; QC 834; NB 111;
  MB 84; AB 31; BC 21; PE 4; NL 3; SK 2; territories 0. Incidence: Canada 14.1 (2024), 11.9
  (2023); NS 217 (2024). Anaplasmosis 673 in 2024 (NS 69%, ON 24%), babesiosis 10, Powassan 3.
  Confirmed + probable, travel cases included. Canada.ca terms: quote figures with a link.
- **PHAC Lyme monitoring page** (canada.ca .../surveillance-lyme-disease.html, modified
  2026-07-27): national 2009-2024 and "preliminary 2025: 7,105".
- **History:** CCDR 48(5) Table A2, province by year 2009-2019 (CC BY 4.0); PHAC annual
  editions 2020-2022 with incidence per 100,000.
- **Nova Scotia's lab-only case definition from 2023** makes NS 2023+ not comparable with
  earlier years (CCDR 52(1/2), CC BY).
- **Nova Scotia open data** (data.novascotia.ca/d/mdfn-jkdg; by zone /36ek-n7n8): annual
  2005-2024; Lyme 2024 2,350 (208.6/100k by NS's own denominator): Western 1,359, Central 571,
  Northern 382, Eastern 38; anaplasmosis 316 (2023), 466 (2024). Open Government Licence - NS.
- **Quebec** (quebec.ca MSSS tables; INSPQ): Lyme 2014-2025 (125 -> 1,021), 2026 to Oct 10: 850;
  2024: 728 acquired in Quebec (834 declared). No licence stated: quote with links.
- **BC** (BCCDC dashboard and 2026 report): 2025 = 42 cases, 12 acquired locally.
- Nationally notifiable: Lyme since 2009, West Nile since 2003, anaplasmosis / babesiosis /
  Powassan since January 2024.

## Risk areas (each province defines them differently; none is a tick-presence map)
- NS: county risk map PDF (labelled July 2023; file 2025-09-24); the page says all of NS is
  higher risk. Resolve the conflict in the text.
- NB: risk by health zone (map refreshed monthly); open tick dataset 2019-2025 (gnb.socrata.com
  kwzw-w4dh, OGL-NB): 947 ticks mailed in (the file has 1,767 rows, but rows 820-1639 repeat
  rows 0-819; found Oct 15), species, stage, 9 pathogens, health unit. The ticks were sent to
  Geneticks and Mount Allison University, so they are not provincial surveillance.
- QC: INSPQ endemic-zone municipal list (2026; next update 2029); widened in 2026, not
  comparable year on year. Historical CSV of municipalities with established ticks 2009-2021
  (Données Québec, CC BY).
- ON: Public Health Ontario's tool only. **PHO terms: personal non-commercial use; adapting
  needs written permission. Do not redraw PHO maps.** (Ontario links to our existing pages.)
- MB: "established throughout much of southern Manitoba". SK: none established, risk "very low,
  not zero"; ~95% of submitted ticks are American dog ticks. AB: 1,332 Alberta-acquired ticks to
  end of 2025, 167 Ixodes, 20 of 100 tested positive; 184 Lyme cases 1991-2023, all acquired
  outside Alberta. NL: not endemic; 12 travel cases 1996-2023. PEI: page behind a check; "low
  risk"; eTick 2025: 76 submissions, 51 I. scapularis.

## eTick
etick.ca: photo identification, no testing; no export or API. **Scraping and bulk retrieval
are barred; derived maps or tables need permission.** Quote individual published figures with
citation ("eTick. ... Bishop's University (Accessed: date)"). Counts reflect reporting effort.

## Tick species
PHAC CCDR 52(1/2) (CC BY 4.0): 2022 I. scapularis passive submissions ON 4,338, QC 1,629,
NS 657, NB 146, AB 126, MB 51, PE 51, SK 17, NL 12, BC 3; I. pacificus 911 (BC 909).
Lone star tick: adventitious only (INSPQ). PHO: 43 Ontario species (12 established).

## West Nile virus
PHAC mosquito-borne annual report (CSV by week and province): 2025: 319 (ON 181, QC 122, MB 4,
AB 4, BC 3, SK 3, NB 1, NS 1); 2024: 177; 2023: 98. SK counts neurological cases only.
History: CCDR 2016; PHAC editions 2016-2022; Quebec archive PDF 2002-2025; Manitoba pages
2003-2026 (2026: 20 cases, 432 positive pools).

## Mosquitoes
- Winnipeg Daily Adult Mosquito Trap Data (data.winnipeg.ca du7c-8488), 2015-2026, daily city
  average and quadrant traps. Open Government Licence - Winnipeg.
- Edmonton light-trap data 1990-2023 (species level) and CO2 traps 2021-2026 (data.edmonton.ca
  dg7f-ubac, uezh-cisn). Open Government Licence - Edmonton.
- Regina and Saskatoon: PDF / web tables only.
- Species: Canada 82 species (2007); ON 67; BC 50; NS 35 (2025, CC BY). No province-by-species
  list.

## Climate and population
- ECCC Canadian Climate Normals 1991-2020: bulk zip (1.69 MB) and per-station CSV; monthly
  mean = "Daily Average (°C)". Credit: "based on Environment and Climate Change Canada data".
- Statistics Canada boundary files 2021 (province lpr_000b21a_e, census division lcd_000b21a_e)
  and population Table 17-10-0009-01 (July 1, 2026). Credit: "Source / Adapted from Statistics
  Canada, <product>, <date>. This does not constitute an endorsement by Statistics Canada."

## Fix on our own site
`/lyme-disease-canada-statistics` headlines 2024 = 5,239; PHAC's current figure is 5,809
(preliminary 2025: 7,105). Update it.
