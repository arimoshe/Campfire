

# Campfire

## What is Campfire

[Campfire](https://campfire-aa.herokuapp.com/) is a full-stack, single-page demo application cloning the look and functionality of Hipcamp - a campsite booking website and application. 

The project utilizes a React-Redux front-end and a Ruby on Rails back-end with Postgresql and Amazon S3 used for database and storage. 

## Key Features

- Full User authentication 
- Search for campsites with paginated results and filtered by location and campsite capacity

![campfireSplash](https://user-images.githubusercontent.com/107275066/195417700-6be3a1b8-a4b5-4587-aa08-12ae7403057e.gif)

- Google Maps Javscript API map showing markers for search results and Places API to enable autocomplete location search

```javascript
useEffect(() => {
        Object.values(pins.current).forEach((pin) => {
            pin.setMap(null);
        });
        pins.current = {};                                                       
        setPinsDropped(false);                                                  
        if (spots && spots.length > 1) {
            const centerLat = (Math.max(...spots.map((spot) => spot.latitude)) 
            + Math.min(...spots.map((spot) => spot.latitude))) / 2;             
            const centerLng = (Math.max(...spots.map((spot) => spot.longitude)) 
            + Math.min(...spots.map((spot) => spot.longitude))) / 2;
            let googleMap;
            if (mapRef.current && !map) {
            googleMap = new window.google.maps.Map(mapRef.current, {
                    center: { lat: centerLat, lng: centerLng },
                    zoom:3,
                    disableDefaultUI: true,
                    zoomControl: true,
                    gestureHandling: 'cooperative'
                });
            setMap(googleMap);
            }

            const bounds = new window.google.maps.LatLngBounds();
            
            spots.forEach((spot) => {
                let marker;
                marker = new window.google.maps.Marker({
                position: { lat: spot.latitude, lng: spot.longitude },
                map: googleMap || map,
                animation: window.google.maps.Animation.DROP,
                icon: {
                    url: logoIcon,
                    scaledSize: new window.google.maps.Size(40, 40),
                    anchor: new window.google.maps.Point(20, 40)
                    }
                });
                pins.current[spot.id] = marker;
                let markerListeners;
                const handleHover = () => {
                    Array.from(document.getElementsByClassName('SpotSearchItemContainer')).map((element) => element.classList.remove("active"));
                    const domElement = document.getElementById("spot" + spot.id);
                    domElement.classList.add("active");
                    domElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                marker.addListener("mouseover", handleHover );
                bounds.extend(new window.google.maps.LatLng(spot.latitude, spot.longitude));
                googleMap ?  googleMap.fitBounds(bounds) : map.fitBounds(bounds);
            });
            
        
        } else {
            const centerLat = 39.35946822011334;
            const centerLng = -99.40333457735373;
            if (mapRef.current && !map) {
                setMap(new window.google.maps.Map(mapRef.current, {
                    center: { lat: centerLat, lng: centerLng },
                    zoom: 3,
                    disableDefaultUI: true,
                    zoomControl: true,
                    gestureHandling: 'cooperative'
                }));
            }
        } 
    }, [])
```

![campfireSearch](https://user-images.githubusercontent.com/107275066/195417785-835824d1-6d93-4ed1-abfc-0bcfcc2f7ba5.gif)

- Modals employed for information gathering including login, booking dates picker and booking guest pickers
- Reservation date picker prevents selection of dates already booked

```javascript
const [calValue, setCalValue] = useState(null);

    const tileDisabled = ({ date, view }) => {
        if (view === 'month') {
            if (spot && spot.bookings) {
                let disabledRanges=[]
                for (let booking of spot.bookings) {
                    disabledRanges.push([new Date(booking.start_date), new Date(booking.end_date)])
                }
                return isWithinRanges(date, disabledRanges)     
            }
        }
    }

    const isWithinRanges = (date, ranges) => {
       return ranges.some((range) => {
            return date >= range[0] && date < range[1]
        }) 
    }

    if (!spot) return null

    function onChange(nextValue) {
        if (spot && spot.bookings) {
            for (let booking of spot.bookings) {
                if (nextValue[0].getTime() < new Date(booking.end_date).getTime() && nextValue[1].getTime() > new Date(booking.start_date).getTime()) {
                     setCalValue(null);
                    return dispatch(updateStoreFilter({ startDate: null, endDate: null }));
                } else {
                    setCalValue(nextValue);
                } 
            }
        } 
        dispatch(updateStoreFilter({startDate: nextValue[0], endDate: nextValue[1]}));
    }
```

- Create, edit and cancel future reservations 

![CampfireChangeTripReview720](https://user-images.githubusercontent.com/107275066/195417870-ae487efe-969b-4e3a-96c9-058e4c5edace.gif)

- Leave "Recommended" and text reviews on past bookings including review edit and delete functionality


# Technologies, Libraries, APIs

## APIs:
- Google Maps Javascript API for displaying map of search results with pins corresponding to individual campsites
- Google Places API for autocompleting user location input and converting locations into latitude and longitude coordinates

## Libraries:
- React Calendar for a creating a customized date picker with booked dates not selectable

## Front-End:
- Javascript
- React
- Redux
- Node.js

## Backend:
- Ruby
- Ruby on Rails
- PostgresSQL
- jBuilder

## Cloud Hosting: 
- Heroku
- Amazon AWS S3 

## Module Building
- Webpack

