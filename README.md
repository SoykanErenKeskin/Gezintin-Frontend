# Gezintin: Personalized Place Recommender (Frontend)

This is the **frontend repository** of the _Gezinti Project_, a personalized location recommendation platform that suggests environments tailored to individual preferences. The web interface presents curated suggestions from 36 unique place clusters based on data-driven inference.

## Overview

**Gezintin** offers users a smooth interface to explore places that best fit their lifestyle and interests. After processing user data in the backend, the frontend renders the most relevant location clusters with intuitive UI components.

> This repository includes only the frontend implementation

## Tech Stack

- **Framework**: React.js with Next.js
- **Styling**: Tailwind CSS
- **Routing**: Next.js page-based routing
- **Component Structure**: Functional components using Hooks
- **Deployment-ready**: Optimized for Vercel or other static hosting platforms

## Folder Structure

````plaintext
/gezinti-frontend/src/app
├── assets/ # Icons and visuals for every page
├── components/
│ ├── comment.js # User comment section
│ ├── CTA.js # Call To Action button component
│ ├── description1.js # Description (photo on the left) component
│ ├── description2.js # Description (photo on the right) component
│ ├── Features.js # Features section component
│ ├── Footer.js # Footer section component
│ ├── Hero.jsx # Hero component
│ ├── Navbar.jsx # Navigation/header component
│ ├── scrollToTop.jsx # (x,y) -> (0,0) component
│ ├── tabs.jsx # "Gezinti Oluştur" tab component
│ └── toTop.jsx # To Top button (bottom-right)
├── constants/
│ └── index.js # User comment context
├── data/
│ └── venues.json # Example backend JSON file for places
├── gezinti-olustur/
│ ├── classic.js # Classic type search tab
│ ├── page.js # Main page for "Gezinti Oluştur"
│ ├── personalized.js # Personalized type search tab
│ └── popular.js # Popular type search tab
├── login/
│ ├── loginui.js # Login UI component
│ └── page.js # Main page for login
├── pages/
│ └── home.js # Landing page
├── personalizedPlaces/
│ └── page.js # Main page for personalized recommendations
├── signup/
│ ├── page.js # Main page for sign-up
│ └── signupui.js # Sign-up UI component
├── sss/
│ ├── Faqui.js # FAQ section component
│ └── page.js # Main page for FAQ
└── utils/ # Utility functions (if any)

## Data Flow

1. User visits the site and is welcomed on the homepage.
2. Backend sends predicted cluster preferences (via API).
3. The UI renders top-matching clusters via starts and with a title, image, and description.
4. Each cluster is mapped to a distinct list with place_type names.

## Example Place Clusters

- **Cluster 1**: historical_landmark, palace, archaeological_site
- **Cluster 5**: valley, hiking_area, canyon
- **Cluster 32**: lounge, rooftop_bar, cocktail_bar
- **Cluster 15**: children_museum, science_museum, science_center
- **Cluster 31**: night*club, bar, pub
  *(Full list includes 36 clusters)\_

## Deployment

To run locally:

```bash
npm install
npm run dev
````

To build for production:

```bash
npm run build
npm start
```

## Notes v0.1

This project assumes the backend sends cluster suggestions as a ranked list.

Each cluster has a unique keyword used to avoid duplication or ambiguity (Whole list included at the end of the file).

No personality test exists in this repo for now (I'll build a personality test and a user handling system for recommending personalized places).

## Cluster List

```plaintext
Category 1 – Art, Culture & History
├── Cluster 1 – History & Heritage: historical_landmark, palace, archaeological_site
├── Cluster 2 – Art & Performance: art_gallery, theater, opera_house
└── Cluster 3 – Culture & Knowledge: museum, library, cultural_center

Category 2 – Nature & Outdoors
├── Cluster 4 – Green Spaces: park, national_park, forest
├── Cluster 5 – Hiking & Scenic Views: valley, hiking_area, canyon
└── Cluster 6 – Water & Geological Formations: waterfall, lake, cave

Category 3 – Gastronomy
├── Cluster 7 – Main Courses: restaurant, local_cuisine, steakhouse
├── Cluster 8 – Cafes & Street Food: cafe, street_food, patisserie
└── Cluster 9 – Specialty Flavors: seafood_restaurant, traditional_turkish_restaurant, dessert_shop

Category 4 – Entertainment
├── Cluster 10 – Shows & Cinema: movie_theater, performing_arts_theater, music_venue
├── Cluster 11 – Active Fun: escape_room, bowling_alley, trampoline_park
└── Cluster 12 – Large Entertainment Venues: amusement_park, theme_park, karaoke

Category 5 – Family & Kids
├── Cluster 13 – Animal & Nature Experience: zoo, aquarium, farm_park
├── Cluster 14 – Play Areas: playground, indoor_play_area, fun_center
└── Cluster 15 – Education & Discovery: children_museum, science_museum, science_center

Category 6 – Shopping
├── Cluster 16 – Large Stores: shopping_mall, outlet_mall, electronics_store
├── Cluster 17 – Fashion & Accessories: clothing_store, jewelry_store, toy_store
└── Cluster 18 – Specialty Shops: book_store, gift_shop, antique_store

Category 7 – Sports & Adventure
├── Cluster 19 – Water Sports: scuba_diving, surfing_area, rafting_center
├── Cluster 20 – Air & Adrenaline: skydiving, paragliding, shooting_range
└── Cluster 21 – Land & Mountain Sports: rock_climbing_gym, ski_resort, karting_track

Category 8 – Health, Spa & Thermal
├── Cluster 22 – Spa & Massage: spa, massage_therapist, thalassotherapy_center
├── Cluster 23 – Fitness & Wellness: fitness_center, health_spa, wellness_center
└── Cluster 24 – Relaxation & Traditional: hot_spring, sauna, yoga_studio

Category 9 – Festivals & Events
├── Cluster 25 – Congress & Fairgrounds: event_venue, conference_center, fairground
├── Cluster 26 – Music & Performance: concert_hall, live_music_venue, seasonal_event
└── Cluster 27 – Festivals: food_festival, film_festival, cultural_festival

Category 10 – Sea & Coastal Leisure
├── Cluster 28 – Natural Coast: beach, coastal_view, water_sports_facility
├── Cluster 29 – Boat & Marina: marina, boat_rental, yacht_club
└── Cluster 30 – Sea Tours & Activities: diving_center, seafood_restaurant, cruise_terminal

Category 11 – Nightlife
├── Cluster 31 – Classic Nightlife: night_club, bar, pub
├── Cluster 32 – Modern & Trendy: lounge, rooftop_bar, cocktail_bar
└── Cluster 33 – Unique Experiences: wine_bar, karaoke_bar, jazz_club

Category 12 – Photography & Viewpoints
├── Cluster 34 – Natural Landscapes: scenic_lookout, panoramic_point, sunset_point
├── Cluster 35 – Urban & Architectural Beauty: viewpoint, landmark, iconic_structure
└── Cluster 36 – Unique Viewing Spots: observation_deck, bridge_view, night_sky_viewing
```
