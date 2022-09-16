# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#   
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'open-uri'

ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  Spot.destroy_all
  User.destroy_all
  Booking.destroy_all
  Review.destroy_all
  Tag.destroy_all
  SpotTag.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('spots')
  ApplicationRecord.connection.reset_pk_sequence!('reviews')
  ApplicationRecord.connection.reset_pk_sequence!('bookings')
  ApplicationRecord.connection.reset_pk_sequence!('tags')
  ApplicationRecord.connection.reset_pk_sequence!('spot_tags')

  puts "Creating users..."
  # Create one user with an easy to remember email and password:
  User.create!(
    email: 'ari@ari.com', 
    password: 'password',
    first_name: 'Ari',
    last_name: 'Moshe'

  )

  User.create!(
    email: 'demo@demo.com', 
    password: '123456',
    first_name: "Demo",
    last_name: "User"
  )

    User.create!(
    email: 'user@user.com', 
    password: '123456',
    first_name: "John",
    last_name: "Doe"
  )

    User.create!(
    email: 'bat@man.com', 
    password: '123456',
    first_name: "Bruce",
    last_name: "Wane"
  )

    User.create!(
    email: 'goku@gmail.com', 
    password: '123456',
    first_name: "Goku",
    last_name: "Son"
  )

    User.create!(
    email: 'lady@gaga.com', 
    password: '123456',
    first_name: "Stefani",
    last_name: "Germanotta"
  )

    User.create!(
    email: 'president@usa.gov', 
    password: '123456',
    first_name: "Joe",
    last_name: "Biden"
  )

    User.create!(
    email: 'linux@open.com', 
    password: '123456',
    first_name: "Linus",
    last_name: "Torvalds"
  )

    User.create!(
    email: 'no@email.com', 
    password: '123456',
    first_name: "George",
    last_name: "Washington"
  )

    User.create!(
    email: 'mona@lisa.com', 
    password: '123456',
    first_name: "Leonardo",
    last_name: "DaVinci"
  )

Tag.create!(
    name: 'Biking',
    tag_type: 'Activities'
)

Tag.create!(
    name: 'Boating',
    tag_type: 'Activities'
)

Tag.create!(
    name: 'Fishing',
    tag_type: 'Activities'
)

Tag.create!(
    name: 'Hiking',
    tag_type: 'Activities'
)

Tag.create!(
    name: 'Paddling',
    tag_type: 'Activities'
)

Tag.create!(
    name: 'Surfing',
    tag_type: 'Activities'
)

Tag.create!(
    name: 'Swimming',
    tag_type: 'Activities'
)

Tag.create!(
    name: 'Wildlife watching',
    tag_type: 'Activities'
)

Tag.create!(
    name: 'Redwoods',
    tag_type: 'Natural features'
)

Tag.create!(
    name: 'River, stream, or creek',
    tag_type: 'Natural features'
)


spot = Spot.create!(
    name: 'Yosemite',
    address1: '6107 Big Oak Flat Rd',
    city: 'Groveland',
    state: 'California',
    zipcode: 95321,
    latitude: 37.80009018741985,
    longitude: -119.87529410959473,
    price: 100,
    acres: 90,
    about: 'Yosemite National Park is in California\'s Sierra Nevada mountains. It\'s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome. In Yosemite Village are shops, restaurants, lodging, the Yosemite Museum and the Ansel Adams Gallery, with prints of the photographer\'s renowned black-and-white landscapes of the area.',
    capacity: 5 ,
    lodgings: 3,
    rvs: 0,
    tents: 2,
    high_demand: true,
    owner_id: User.all.ids.sample
)


Spot.create!(
    name: 'Tilden',
    address1: '2501 Grizzly Peak Blvd',
    city: 'Orinda',
    state: 'California',
    zipcode: 94563,
    latitude: 37.8977077324365, 
    longitude: -122.2452468,
    price: 85,
    acres: 15,
    about: 'A 2,000+ acre park with a carousel, botanic garden, lake swimming, picnic areas & steam train ride.',
    capacity: 8 ,
    lodgings: 2,
    rvs: 1,
    tents: 3,
    high_demand: true,
    owner_id: User.all.ids.sample   
)

Spot.create!(
    name: 'Muir Woods',
    address1: '1 Muir Woods Rd',
    city: 'Mill Valley',
    state: 'California',
    zipcode: 94941,
    latitude: 37.89280356364286,
    longitude:  -122.57266337755513,
    price: 125,
    acres: 35,
    about: 'Muir Woods National Monument is part of California\'s Golden Gate National Recreation Area, north of San Francisco. It\'s known for its towering old-growth redwood trees. Trails wind among the trees to Cathedral Grove and Bohemian Grove, and along Redwood Creek. The Ben Johnson and Dipsea trails climb a hillside for views of the treetops, the Pacific Ocean and Mount Tamalpais in adjacent Mount Tamalpais State Park',
    capacity: 3 ,
    lodgings: 1,
    rvs: 0,
    tents: 1,
    high_demand: true,
    owner_id: User.all.ids.sample   
)

Spot.create!(
    name: 'Mt. Tamalpais',
    address1: '3801 Panoramic Hwy',
    city: 'Mill Valley',
    state: 'California',
    zipcode: 94941,
    latitude: 37.90459936598793, 
    longitude:  -122.60370743190974,
    price: 60,
    acres: 55,
    about: 'Scenic, well-networked mountain with stunning views & featuring over 100 miles of hiking & cycling.',
    capacity: 10 ,
    lodgings:2,
    rvs: 3,
    tents: 4,
    high_demand: true,
    owner_id: User.all.ids.sample   
)

Spot.create!(
    name: 'Mare Island',
    address1: '167 O\'Hara Ct',
    city: 'Vallejo',
    state: 'California',
    zipcode: 94592,
    latitude: 38.07586151096557, 
    longitude:  -122.25662227413711 ,
    price: 45,
    acres: 10,
    about: 'Nature preserve overlooking Carquinez Bay featuring stunning landscape with native grasses & views.',
    capacity: 4,
    lodgings: 3,
    rvs: 1,
    tents: 1,
    high_demand: false,
    owner_id: User.all.ids.sample   
)

Spot.create!(
    name: 'Alamere Falls',
    address1: 'Point Reyes National Seashore',
    city: 'Bolinas',
    state: 'California',
    zipcode: 94924,
    latitude: 37.95369451085538, 
    longitude:  -122.78351361444363,
    price: 70,
    acres: 3,
    about: 'Alamere Falls is a waterfall in Point Reyes National Seashore, Marin County, California. Alamere Falls is a rare "tidefall", a waterfall that flows directly into the ocean. It is one of only two known tidefalls in California, the other being McWay Falls.',
    capacity: 4,
    lodgings: 0,
    rvs: 0,
    tents: 4,
    high_demand: true,
    owner_id: User.all.ids.sample    
)

Spot.create!(
    name: 'Ocean Beach',
    address1: '1001 Great Highway',
    city: 'San Francisco',
    state: 'California',
    zipcode: 94121,
    latitude: 37.769703122877765, 
    longitude:  -122.51231441807336,
    price: 25,
    acres: 30,
    about: '3.5-mile white sand beach with fire pits & restrooms, a popular spot for flying kites & windsurfing.',
    capacity: 10,
    lodgings: 0,
    rvs: 3,
    tents: 8,
    high_demand: true,
    owner_id: User.all.ids.sample    
)

Spot.create!(
    name: 'Golden Gate Park',
    address1: '1320 Bowling Green Dr',
    city: 'San Francisco',
    state: 'California',
    zipcode: 94118,
    latitude: 37.769091597312304, 
    longitude:  -122.4579957882446,
    price: 40,
    acres: 100,
    about: 'Golden Gate Park, located in San Francisco, California, United States, is a large urban park consisting of many acres of public grounds. It is administered by the San Francisco Recreation & Parks Department, which began in 1871 to oversee the development of Golden Gate Park.',
    capacity: 6,
    lodgings: 2,
    rvs: 3,
    tents: 1,
    high_demand: true,
    owner_id: User.all.ids.sample    
)

Spot.create!(
    name: 'Fallen Leaf Campground',
    address1: '2165 Fallen Leaf Rd',
    city: 'South Lake Tahoe',
    state: 'California',
    zipcode: 96150,
    latitude: 38.92565637500775, 
    longitude:  -120.05071564353577,
    price: 120,
    acres: 22,
    about: 'Campground among towering trees, including six yurts, plus coin-operated showers.',
    capacity: 10,
    lodgings: 6,
    rvs: 0,
    tents: 4,
    high_demand: false,
    owner_id: User.all.ids.sample    
)

Spot.create!(
    name: 'Pyramid Creek Trailhead',
    address1: '17471 Lincoln Hwy',
    city: 'Twin Bridges',
    state: 'California',
    zipcode: 95735,
    latitude: 38.81166566013857, 
    longitude:  -120.12383128465765,
    price: 145,
    acres: 111,
    about: 'The Twin Bridges trailhead or Pyramid Creek trailhead is located off U.S. Route 50 a couple miles east of Strawberry, California, west of Echo Pass. Some of the destinations most accessed by the trailhead are Horsetail Falls and Ropi Lake or Lake of the Woods as well as the rest of the Desolation Wilderness.',
    capacity: 7,
    lodgings: 2,
    rvs: 0,
    tents: 3,
    high_demand: false,
    owner_id: User.all.ids.sample    
)
users = User.all.ids
parks = ['Acadia','American Samoa','Arches','Badlands','Big Bend','Biscayne','Black Canyon of the Gunnison','Bryce Canyon','Canyonlands','Capitol Reef','Carlsbad Caverns','Channel Islands','Congaree','Crater Lake','Cuyahoga Valley','Death Valley','Denali','Dry Tortugas','Everglades','Gates of the Arctic','Gateway Arch','Glacier','Glacier Bay','Grand Canyon','Grand Teton','Great Basin','Great Sand Dunes','Great Smoky Mountains','Guadalupe Mountains','Haleakalā','Hawaii Volcanoes','Hot Springs','Indiana Dunes','Isle Royale','Joshua Tree','Katmai','Kenai Fjords','Kings Canyon','Kobuk Valley','Lake Clark','Lassen Volcanic','Mammoth Cave','Mesa Verde','Mount Rainier','New River Gorge','North Cascades','Olympic','Petrified Forest','Pinnacles','Redwood','Rocky Mountain','Saguaro','Sequoia','Shenandoah','Theodore Roosevelt','Virgin Islands','Voyageurs','White Sands','Wind Cave','Wrangell-St. Elias','Yellowstone','Zion']
states =["Maine","American Samoa","Utah","South Dakota","Texas","Florida","Colorado","Utah","Utah","Utah","New Mexico","California","South Carolina","Oregon","Ohio","California","Alaska","Florida","Florida","Alaska","Missouri","Montana","Alaska","Arizona","Wyoming","Nevada","Colorado","North Carolina","Texas","Hawaii","Hawaii","Arkansas","Indiana","Michigan","California","Alaska","Alaska","California","Alaska","Alaska","California","Kentucky","Colorado","Washington","West Virginia","Washington","Washington","Arizona","California","California","Colorado","Arizona","California","Virginia","North Dakota","U.S. Virgin Islands","Minnesota","New Mexico","South Dakota","Alaska","Wyoming","Utah"]
lats = [ 44.35, 14.25, 38.68, 43.75, 29.25, 25.65, 38.57, 37.57, 38.2, 38.20, 32.17, 34.01, 33.78, 42.94, 41.24, 36.24, 63.33, 24.63, 25.32, 67.78, 38.63, 48.80, 58.50, 36.06, 43.73, 38.98, 37.73, 35.68, 31.92, 20.72, 19.38, 34.51, 41.6533, 48.10, 33.79, 58.50, 59.92, 36.80, 67.55, 60.97, 40.49, 37.18, 37.18, 46.85, 38.07, 48.70, 47.97, 35.07, 36.48, 41.30, 40.40, 32.25, 36.43, 38.53, 46.97, 18.33, 48.50, 32.78, 43.57, 61.00, 44.60, 37.30]
lngs = [-68.21,-170.68,-109.57,-102.50,-103.25,-80.08,-107.72,-112.18,-109.93,-111.17,-104.44,-119.42,-80.78,-122.1,-81.55,-116.82,-150.50,-82.87,-80.93,-153.30,-90.19,-114.00,-137.00,-112.14,-110.80,-114.30,-105.51,-83.53,-104.87,-156.17,-155.20,-93.05,-87.0524,-88.55,-115.90,-155.00,-149.65,-118.55,-159.28,-153.42,-121.51,-86.10,-108.49,-121.75,-81.08,-121.20,-123.50,-109.78,-121.16,-124.00,-105.58,-110.50,-118.68,-78.35,-103.45,-64.73,-92.88,-106.17,-103.48,-142.00,-110.50,-113.05]
abouts = ['Covering most of Mount Desert Island and other coastal islands, Acadia features the tallest mountain on the Atlantic coast of the United States, granite peaks, ocean shoreline, woodlands, and lakes. There are freshwater, estuary, forest, and intertidal habitats.','The southernmost national park is on three Samoan islands in the South Pacific. It protects coral reefs, rainforests, volcanic mountains, and white beaches. The area is also home to flying foxes, brown boobies, sea turtles, and 900 species of fish.','This site features more than 2,000 natural sandstone arches, with some of the most popular arches in the park being Delicate Arch, Landscape Arch and Double Arch. Millions of years of erosion have created these structures in a desert climate where the arid ground has life-sustaining biological soil crusts and potholes that serve as natural water-collecting basins. Other geologic formations include stone pinnacles, fins, and balancing rocks.','The Badlands are a collection of buttes, pinnacles, spires, and mixed-grass prairies within the drainage basin of the White River, in southwestern South Dakota. They contain the largest known assemblage of late Eocene and Oligocene mammal fossils. Wildlife includes bison, bighorn sheep, black-footed ferrets, and prairie dogs.','Named for the prominent bend in the Rio Grande along the U.S.-Mexico border, this park encompasses a large and remote part of the Chihuahuan Desert. Its main attraction is backcountry recreation in the arid Chisos Mountains and in canyons along the river. A wide variety of Cretaceous and Tertiary fossils as well as cultural artifacts of Native Americans also exist within its borders. ','The central part of Biscayne Bay, this mostly underwater park at the north end of the Florida Keys has four interrelated marine ecosystems: mangrove forest, the Bay, the Keys, and coral reefs. Threatened animals include the West Indian manatee, American crocodile, various sea turtles, and the peregrine falcon.','The park protects a quarter of the Gunnison River, which slices sheer canyon walls from dark Precambrian-era rock. The canyon features some of the steepest cliffs and oldest rock in North America, and is a popular site for river rafting and rock climbing. The deep, narrow canyon is composed of gneiss and schist, which appears black when in shadow.','Bryce Canyon is a geological amphitheater on southern Utah\'s Paunsaugunt Plateau with hundreds of tall, multicolored sandstone hoodoos formed by erosion. The region was originally settled by Native Americans and later by Mormon pioneers.','This landscape was eroded into a maze of canyons, buttes, and mesas by the combined efforts of the Colorado River, Green River, and their tributaries, which divide the park into three districts. The park contains thousands of rock pinnacles and arches, as well as artifacts from Ancient Pueblo peoples.','The park\'s Waterpocket Fold is a 100-mile (160 km) monocline that exhibits the earth\'s diverse geologic layers. Other natural features include monoliths, eroded buttes, and sandstone domes, including one shaped like the United States Capitol.','Carlsbad Caverns has 117 caves, the longest of which is over 120 miles (190 km) long. The Big Room is almost 4,000 feet (1,200 m) long, and the caves are home to over 400,000 Mexican free-tailed bats and sixteen other species. Above ground are the Chihuahuan Desert and Rattlesnake Springs. ','Five of the eight Channel Islands are protected, with half of the park\'s area underwater. The islands have a unique Mediterranean ecosystem originally settled by the Chumash people. They are home to over 2,000 species of land plants and animals, 145 endemic to them, including the island fox. Ferry services offer transportation to the islands from the mainland. ','On the Congaree River, this park is the largest portion of old-growth floodplain forest left in North America. Some of the trees are the tallest in the eastern United States. An elevated walkway called the Boardwalk Loop guides visitors through the swamp. ','Crater Lake lies in the caldera of an ancient volcano called Mount Mazama that collapsed 7,700 years ago. The lake is the deepest in the United States and is noted for its vivid blue color and water clarity. Wizard Island and the Phantom Ship are more recent volcanic formations within the caldera. As the lake has no inlets or outlets, it is replenished only by precipitation.','This park along the Cuyahoga River has waterfalls, hills, trails, and exhibits on early rural living. The Ohio and Erie Canal Towpath Trail follows the Ohio and Erie Canal, where mules towed canal boats. The park has numerous historic homes, bridges, and structures, and also offers a scenic train ride.','Death Valley is the hottest, lowest, and driest place in the United States, with daytime temperatures that have exceeded 130 °F (54 °C). The park protects Badwater Basin and its vast salt flats at the lowest elevation in North America, -282 ft (-86 m), This geologic graben also protects numerous canyons, badlands, sand dunes, mountain ranges, historic mines, springs, and more than 1,000 species of plants that grow. ','Centered on Denali, the tallest and most prominent mountain in North America, the park is serviced by a single road leading to Wonder Lake, most of which can only be accessed via scheduled tour buses. Denali and other peaks of the Alaska Range are covered with long glaciers and boreal forest. Wildlife includes grizzly bears, Dall sheep, moose, caribou, and wolves. ','The islands of the Dry Tortugas, at the westernmost end of the Florida Keys, are the site of Fort Jefferson, a Civil War-era fort that is the largest masonry structure in the Western Hemisphere. The park is home to undisturbed coral reefs and shipwrecks, and is only accessible by plane or boat. ','The Everglades are the largest tropical wilderness in the United States. This mangrove and tropical rainforest ecosystem and marine estuary is home to 36 protected species, including the Florida panther, American crocodile, and West Indian manatee. Some areas have been drained and developed; restoration projects aim to restore the ecology.  ','The country\'s northernmost park protects an expanse of pure wilderness in Alaska\'s Brooks Range and has no park facilities. The land is home to Alaska Natives who have relied on the land and caribou for 11,000 years.','The Gateway Arch is a 630-foot (192 m) (both high and wide) catenary arch built in the 1960s to commemorate the Lewis and Clark Expedition, initiated by Thomas Jefferson, and the subsequent westward expansion of the country. The nearby Old Courthouse, across a greenway to the west of the arch, was the original site of the landmark Dred Scott case about slavery. An underground museum describes the arch\'s construction and the country\'s westward expansion.','The U.S. half of Waterton-Glacier International Peace Park, this park includes 26 rapidly receding glaciers and 130 named lakes surrounded by Rocky Mountain peaks. Historic hotels and the landmark Going-to-the-Sun Road accommodate visitors. The local mountains, formed by an overthrust, expose Paleozoic fossils including trilobites, mollusks, giant ferns and dinosaurs. The park is also home to Triple Divide Peak, which forms the boundary between the watersheds of the Atlantic, Pacific, and Arctic Oceans.  ','Glacier Bay contains tidewater glaciers, mountains, fjords, and a temperate rainforest, and is home to large populations of grizzly bears, mountain goats, whales, seals, and eagles. When discovered in 1794 by George Vancouver, the entire bay was covered by ice, but the glaciers have since receded more than 65 miles (105 km).  ','The Grand Canyon, carved by the mighty Colorado River, is 277 miles (446 km) long, up to 1 mile (1.6 km) deep, and up to 15 miles (24 km) wide. Millions of years of erosion have resulted in a massive three-tiered canyon, exposing the multicolored layers of the Colorado Plateau in mesas and canyon walls, visible from trails that descend into the canyon from the north and south rims. ','Grand Teton is the tallest mountain in the scenic Teton Range. The park\'s historic Jackson Hole and reflective piedmont lakes teem with endemic wildlife, with a backdrop of craggy mountains that rise abruptly from the sage-covered valley below. [6]','Based around Nevada\'s second tallest mountain, Wheeler Peak, Great Basin National Park protects 5,000-year-old bristlecone pines, a rock glacier, and the limestone Lehman Caves. Due to its remote location, the park is home to some of the country\'s darkest night skies. Wildlife includes the Townsend\'s big-eared bat, pronghorn, and Bonneville cutthroat trout.','The tallest sand dunes in North America, up to 750 feet (230 m) tall, were formed by deposits of the ancient Rio Grande in the San Luis Valley. Abutting a variety of grasslands, shrublands, and wetlands, the park also features alpine lakes, six 13,000-foot mountains, and old-growth forests.','The Great Smoky Mountains, part of the Appalachian Mountains, span a wide range of elevations, making them home to over 400 vertebrate species, 100 tree species, and 5,000 plant species. Hiking is the park\'s main attraction, with over 800 miles (1,300 km) of trails, including 70 miles (110 km) of the Appalachian Trail. Other activities include fishing, horseback riding, and touring nearly 80 historic structures.  ','This park contains Guadalupe Peak, the highest point in Texas, as well as the scenic McKittrick Canyon filled with bigtooth maples, a corner of the arid Chihuahuan Desert, and a fossilized coral reef from the Permian era.','The Haleakalā volcano on Maui features a very large crater with numerous cinder cones, a grove of non-native trees, the Kipahulu section\'s scenic pools of freshwater fish, and the endemic Hawaiian goose. The park protects the greatest number of endangered species within a U.S. national park. ','This park on the Big Island protects the Kīlauea and Mauna Loa volcanoes, two of the world\'s most active geological features. Diverse ecosystems range from tropical forests at sea level to barren lava beds at more than 13,000 feet (4,000 m).  ','Hot Springs was originally established by Congress as a federal reserve on April 20, 1832, making it the oldest area managed by the National Park Service. Natural thermal springs flow out of the Ouachita Mountains, providing opportunities for relaxation in a historic setting. Bathhouse Row preserves examples of 19th-century architecture. Hot Springs is the first national park within a city and was the smallest national park until 2018.','Previously designated a national lakeshore, parts of this 20-mile (32 km) stretch of the southern shore of Lake Michigan have sandy beaches and tall dunes. The park includes grassy prairies, peat bogs, and marsh wetlands home to over 2,000 species.','The largest island in Lake Superior is a place of isolation and wilderness. Along with its many shipwrecks, waterways, and hiking trails, the park also includes over 400 smaller islands within 4.5 miles (7.2 km) of its shores. There are only 20 mammal species on the island, though the relationship between its wolf and moose populations is especially unique. ','Covering large areas of the Colorado and Mojave Deserts and the Little San Bernardino Mountains, this desert landscape is populated by vast stands of Joshua trees. Large changes in elevation reveal various contrasting environments including bleached sand dunes, dry lakes, rugged mountains, and maze-like clusters of monzogranite monoliths. ','This park on the Alaska Peninsula protects the Valley of Ten Thousand Smokes, an ash flow formed by the 1912 eruption of Novarupta, and the stratovolcano Mount Katmai. Over 2,000 grizzly bears come here each year to catch spawning salmon. Other wildlife includes caribou, wolves, moose, and wolverines.','Near Seward on the Kenai Peninsula, this park protects the Harding Icefield and at least 38 glaciers and fjords stemming from it. The only area accessible to the public by road is the rapidly shrinking Exit Glacier. Boat and kayak tours offer views of tidewater glaciers, whales, sea lions, and marine birds.','Home to several giant sequoia groves and the General Grant Tree, the world\'s second largest measured tree, this park also features part of the Kings River, sculptor of the dramatic granite canyon that is its namesake, and the San Joaquin River, as well as Boyden Cave. Although Kings Canyon National Park was designated as such in 1940, it subsumed General Grant National Park, which had been established on October 1, 1890, as the United States\' fourth national park. ','Kobuk Valley protects 61 miles (98 km) of the Kobuk River and three regions of sand dunes. Created by glaciers, the Great Kobuk, Little Kobuk, and Hunt River Sand Dunes can reach 100 feet (30 m) high and 100 °F (38 °C), and they are the largest dunes in the Arctic. Twice a year, half a million caribou migrate through the dunes and across river bluffs that expose well-preserved ice age fossils.','The region around Lake Clark features four active volcanoes, including Mount Redoubt, as well as an abundance of rivers, glaciers, and waterfalls. Temperate rainforests, a tundra plateau, and three mountain ranges complete the landscape.','Lassen Peak, the largest lava dome volcano in the world, is joined by all three other types of volcanoes in this park: shield, cinder cone, and composite. Though Lassen itself last erupted in 1915, most of the rest of the park is continuously active. Numerous hydrothermal features, including fumaroles, boiling pools, and bubbling mud pots, are heated by molten rock from beneath the peak.','With more than 400 miles (640 km) of passageways explored, Mammoth Cave is the world\'s longest known cave system. Subterranean wildlife includes eight bat species, Kentucky cave shrimp, Northern cavefish, and cave salamanders. Above ground, the park provides recreation on the Green River, 70 miles of hiking trails, and plenty of sinkholes and springs.  ','This area constitutes over 4,000 archaeological sites of the Ancestral Puebloan people, who lived here and elsewhere in the Four Corners region for at least 700 years. Cliff dwellings built in the 12th and 13th centuries include Cliff Palace, which has 150 rooms and 23 kivas, and the Balcony House, with its many passages and tunnels. ','Mount Rainier, an active stratovolcano, is the most prominent peak in the Cascades and is covered by 26 named glaciers including Carbon Glacier and Emmons Glacier, the longest and largest in the contiguous United States respectively. The mountain is popular for climbing, and more than half of the park is covered by subalpine and alpine forests and meadows seasonally in bloom with wildflowers. Paradise on the south slope is among the snowiest places on Earth. The Longmire visitor center is the start of the Wonderland Trail, which encircles the mountain.','The New River Gorge is the deepest river gorge east of the Mississippi River. The park primarily covers the lower gorge area around the New River Gorge Bridge, which features some of the country\'s best whitewater rafting. Smaller noncontiguous sections showcase the ghost town of Thurmond, the scenic Grandview vista, and Sandstone Falls. The other 65,165 acres (263.71 km2) of the redesignated national river is now a national preserve, spanning 53 mi (85 km) of the New River.','The highly glaciated mountains of the North Cascades Range exhibit a spectacular and complex geologic history. Between the river valleys and high peaks there are eight diverse life zones with 75 mammal and 1,600 vascular plant species. Popular hiking and climbing areas of the Stephen Mather Wilderness include Cascade Pass, Mount Shuksan, Mount Triumph, and Eldorado Peak. Ross Lake and Lake Chelan National Recreation Areas adjoin the two segments of the park and are all administered together.','This park on the Olympic Peninsula includes a wide range of ecosystems from Pacific shoreline to temperate rainforests to the glaciated alpine peaks of the Olympic Mountains, the tallest of which is Mount Olympus. The Hoh and Quinault Rainforests are the wettest areas in the contiguous United States, with the Hoh receiving an average of almost 12 ft (3.7 m) of rain every year.  ','This portion of the Chinle Formation has a large concentration of 225-million-year-old petrified wood. The surrounding Painted Desert features eroded cliffs of red-hued volcanic rock called bentonite. Dinosaur fossils and over 350 Native American sites are also protected in this park.','Named for the eroded leftovers of a portion of an extinct volcano, the park\'s massive black and gold monoliths of andesite and rhyolite are a popular destination for rock climbers. Hikers have access to trails crossing the Coast Range wilderness. The park is one of the few locations where the endangered California condor can be seen in the wild. Pinnacles also supports a dense population of prairie falcons and more than 13 species of bat that populate its talus caves.','This park and the co-managed state parks protect almost half of all remaining coastal redwoods, the tallest trees on earth. There are three large river systems in this very seismically active area, and 37 miles (60 km) of protected coastline reveal tide pools and seastacks. The prairie, estuary, coast, river, and forest ecosystems contain a wide variety of animal and plant species. ','Bisected north to south by the Continental Divide, this portion of the Rockies has ecosystems varying from over 150 riparian lakes to montane and subalpine forests to treeless alpine tundra. Wildlife including elk, moose, mule deer, bighorn sheep, black bears, and cougars inhabit its igneous mountains and glacial valleys. Longs Peak, a classic Colorado fourteener, and the scenic Bear Lake are popular destinations, as well as the historic Trail Ridge Road, which reaches an elevation of more than 12,000 feet (3,700 m). ','Split into the separate Rincon Mountain and Tucson Mountain districts, this park is evidence that the dry Sonoran Desert is still home to a great variety of life spanning six biotic communities. Beyond the namesake giant saguaro cacti, there are barrel cacti, chollas, and prickly pears, as well as lesser long-nosed bats, spotted owls, and javelinas.','This park protects the Giant Forest, which boasts some of the world\'s largest trees, the General Sherman being the largest measured tree in the park. Other features include over 240 caves, a long segment of the Sierra Nevada including the tallest mountain in the contiguous United States, and Moro Rock, a large granite dome. ','Shenandoah\'s Blue Ridge Mountains are covered by hardwood forests that teem with a wide variety of wildlife. The Skyline Drive and Appalachian Trail run the entire length of this narrow park, along with more than 500 miles (800 km) of hiking trails passing scenic overlooks and cataracts of the Shenandoah River.','This region that enticed and influenced President Theodore Roosevelt consists of a park of three units in the northern badlands. Besides Roosevelt\'s historic cabin, there are numerous scenic drives and backcountry hiking opportunities. Wildlife includes American bison, pronghorn, bighorn sheep, and wild horses.','This island park on Saint John preserves pristine beaches surrounded by mangrove forests, seagrass beds, and coral reefs. It also has Taíno archaeological sites and the ruins of sugar plantations from Columbus\'s time.','This park protecting four lakes near the Canada-US border is a site for canoeing, kayaking, and fishing. The park also preserves a history populated by Ojibwe Native Americans, French fur traders called voyageurs, and gold miners. Formed by glaciers, the region features tall bluffs, rock gardens, islands, bays, and several historic buildings.','Located in the mountain-ringed Tularosa Basin, White Sands consists of the southern part of a 275-square-mile (710 km2) field of white sand dunes composed of gypsum crystals—the world\'s largest gypsum dunefield. The park is completely within the White Sands Missile Range and is subject to closure when tests are conducted.','Wind Cave is distinctive for its calcite fin formations called boxwork, a unique formation rarely found elsewhere, and needle-like growths called frostwork. It is one of the longest caves in the world and creates a wind as air pressure changes. Above ground is a mixed-grass prairie with animals such as bison, black-footed ferrets, and prairie dogs and ponderosa pine forests home to cougars and elk. The cave is culturally significant to the Lakota people as a creation site.','The largest national park in the system protects the convergence of the Alaska, Chugach, Wrangell, and Saint Elias Ranges, which include many of the continent\'s tallest mountains and volcanoes, including the 18,008-foot Mount Saint Elias. More than a quarter of the park is covered with glaciers, including the tidewater Hubbard Glacier, piedmont Malaspina Glacier, and valley Nabesna Glacier. ','Situated on the Yellowstone Caldera, the park has an expansive network of geothermal areas including boiling mud pots, vividly colored hot springs such as Grand Prismatic Spring, and regularly erupting geysers, the best-known being Old Faithful. The yellow-hued Grand Canyon of the Yellowstone River contains several high waterfalls, and four mountain ranges traverse the park. More than 60 mammal species including timber wolves, grizzly bears, black bears, lynxes, bison, and elk make this park one of the best wildlife viewing spots in the country.  ','Yosemite features sheer granite cliffs, exceptionally tall waterfalls, and old-growth forests at a unique intersection of geology and hydrology. Half Dome and El Capitan rise from the park\'s centerpiece, the glacier-carved Yosemite Valley, and from its vertical walls drop Yosemite Falls, one of North America\'s tallest waterfalls at 2,425 feet (739 m) high. Three giant sequoia groves, along with a pristine wilderness in the heart of the Sierra Nevada, are home to a wide variety of rare plant and animal species. ','Located at the junction of the Colorado Plateau, Great Basin, and Mojave Desert, this park contains sandstone features such as mesas, rock towers, and canyons, including the Virgin River Narrows. The various sandstone formations and the forks of the Virgin River create a wilderness divided into four ecosystems: desert, riparian, woodland, and coniferous forest.']
acres = [49071, 8256, 76678, 242755, 801163, 172971, 30779, 35835, 337597, 241904, 46766, 249561, 26692, 183224, 32571, 3408395, 4740911, 64701, 1508938, 7523897, 91, 1013126, 3223383, 1201647, 310044, 77180, 107345, 522426, 86367, 33264, 325605, 5554, 15349, 571790, 795155, 3674529, 669650, 461901, 1750716, 2619816, 106589, 54016, 52485, 236381, 7021, 504780, 922649, 221390, 26685, 138999, 265807, 92867, 404062, 200192, 70446, 15052, 218222, 146344, 33970, 8323146, 2219790, 147242]

50.times do |i|
    
    Spot.create!({
    name: parks[i],
    address1: "Not Available",
    city:  parks[i],
    state: states[i],
    zipcode:  "00000",
    latitude: lats[i],
    longitude: lngs[i],
    price: [*10..150].sample,
    acres: acres[i],
    about: abouts[i],
    capacity: [*3..12].sample ,
    lodgings: [*0..4].sample,
    rvs: [*0..4].sample,
    tents: [*0..4].sample,
    high_demand: [true, false].sample,
    owner_id: users.sample 
    })

    if [true,false].sample 
    SpotTag.create!(
    spot_id: Spot.find_by(name: parks[i]).id,
    tag_id: Tag.find_by(name: 'Biking').id
    )
    end
    if [true,false].sample 
    SpotTag.create!(
        spot_id: Spot.find_by(name: parks[i]).id,
        tag_id: Tag.find_by(name: 'Boating').id
    )
    end
    if [true,false].sample 
    SpotTag.create!(
        spot_id: Spot.find_by(name: parks[i]).id,
        tag_id: Tag.find_by(name: 'Fishing').id
    )
    end
    if [true,false].sample 
    SpotTag.create!(
        spot_id: Spot.find_by(name: parks[i]).id,
        tag_id: Tag.find_by(name: 'Hiking').id
    )
    end
    if [true,false].sample 
    SpotTag.create!(
        spot_id: Spot.find_by(name: parks[i]).id,
        tag_id: Tag.find_by(name: 'Surfing').id
    )
    end
    if [true,false].sample 
    SpotTag.create!(
        spot_id: Spot.find_by(name: parks[i]).id,
        tag_id: Tag.find_by(name: 'Swimming').id
    )
    end
    if [true,false].sample 
    SpotTag.create!(
        spot_id: Spot.find_by(name: parks[i]).id,
        tag_id: Tag.find_by(name: 'Wildlife watching').id
    )
    end
    if [true,false].sample 
    SpotTag.create!(
        spot_id: Spot.find_by(name: parks[i]).id,
        tag_id: Tag.find_by(name: 'Redwoods').id
    )
    end
    if [true,false].sample 
    SpotTag.create!(
        spot_id: Spot.find_by(name: parks[i]).id,
        tag_id: Tag.find_by(name: 'River, stream, or creek').id
    )
    end
end


# spot.photos.attach(
#     io: URI.open('https://campfire-aa-seeds.s3.us-west-1.amazonaws.com/CampfireImages/11.jpg'), 
#     filename:'11.jpg'
#     )

# spot.photos.attach(
# io: URI.open('https://campfire-aa-seeds.s3.us-west-1.amazonaws.com/CampfireImages/12.jpg'), 
# filename:'12.jpg'
# )


Review.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    author_id: User.first.id,
    recommended: true,
    body: "What an awesome place!"

)

Review.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    author_id: User.first.id,
    recommended: true,
    body: "Had a great time!"
)

Review.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    author_id: User.first.id,
    recommended: false,
    body: "I was attacked by a bear!"

)


SpotTag.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    tag_id: Tag.find_by(name: 'Biking').id
)

SpotTag.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    tag_id: Tag.find_by(name: 'Boating').id
)

SpotTag.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    tag_id: Tag.find_by(name: 'Fishing').id
)

SpotTag.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    tag_id: Tag.find_by(name: 'Hiking').id
)

SpotTag.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    tag_id: Tag.find_by(name: 'Boating').id
)

SpotTag.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    tag_id: Tag.find_by(name: 'Surfing').id
)

SpotTag.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    tag_id: Tag.find_by(name: 'Swimming').id
)

SpotTag.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    tag_id: Tag.find_by(name: 'Wildlife watching').id
)

SpotTag.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    tag_id: Tag.find_by(name: 'Redwoods').id
)

SpotTag.create!(
    spot_id: Spot.find_by(name: "Yosemite").id,
    tag_id: Tag.find_by(name: 'River, stream, or creek').id
)

Booking.create!(
    owner_id: User.first.id,
    customer_id: User.find_by(email: 'demo@demo.com').id,
    spot_id: Spot.find_by(name: "Yosemite").id,
    start_date: Date.new(2022, 9, 01),
    end_date: Date.new(2022, 9, 04),
    children: 1,
    adults: 2,
    price: 400
)


# 5.times do 
#     Spot.create!({
#     name: 'Yosemite',
#     address1: '6107 Big Oak Flat Rd',
#     city: 'Groveland',
#     state: 'CA',
#     zipcode: 95321,
#     latitude: 37.80009018741985,
#     longitude: -119.87529410959473,
#     price: 100,
#     acres: 15,
#     about: 'This is a park called Yosemite!',
#     capacity: 5 ,
#     lodgings: 3,
#     rvs: 0,
#     tents: 2,
#     high_demand: true,
#     owner_id: User.first.id 
#     })
# end




  # More users
#   10.times do 
#     User.create!({
#       email: Faker::Internet.unique.email,
#       password: 'password'
#     }) 
#   end

  puts "Done!"
end

Spot.all.each do |spot|
    5.times do
        photonum = [*1..69].sample
        spot.photos.attach({io: URI.open("https://campfire-aa-seeds.s3.us-west-1.amazonaws.com/#{photonum}.jpg"), filename:"#{photonum}.jpg"})
    end
end

# photo1 = {io: URI.open('https://campfire-aa-seeds.s3.us-west-1.amazonaws.com/1.jpg'), filename:'1.jpg'}
# photo2 = {io: URI.open('https://campfire-aa-seeds.s3.us-west-1.amazonaws.com/2.jpg'), filename:'2.jpg'}
# photo3 = {io: URI.open('https://campfire-aa-seeds.s3.us-west-1.amazonaws.com/3.jpg'), filename:'3.jpg'}
# photo4 = {io: URI.open('https://campfire-aa-seeds.s3.us-west-1.amazonaws.com/4.jpg'), filename:'4.jpg'}
# photo5 = {io: URI.open('https://campfire-aa-seeds.s3.us-west-1.amazonaws.com/5.jpg'), filename:'5.jpg'}



# Spot.find_by(name: 'Yosemite').photos.attach([photo1,photo2,photo3,photo4,photo5])