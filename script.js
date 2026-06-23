const movies = [
  { id: 1, title: 'RRR', genres: ['Action', 'Drama', 'Period'], features: { adventure: 92, romance: 15, comedy: 20, intensity: 98 }, description: 'Two legendary revolutionaries journey far from home before they begin fighting for their country in the 1920s.', year: 2022 },
  { id: 2, title: '1: Nenokkadine', genres: ['Psychological Thriller', 'Action'], features: { adventure: 40, romance: 30, comedy: 10, intensity: 90 }, description: 'A rock star grappling with severe hallucinations must uncover the truth behind his parents\' murder.', year: 2014 },
  { id: 3, title: 'Eega', genres: ['Fantasy', 'Action', 'Comedy'], features: { adventure: 65, romance: 45, comedy: 70, intensity: 75 }, description: 'A murdered man is reincarnated as a housefly and sets out to protect his love and enact brutal revenge.', year: 2012 },
  { id: 4, title: 'C/o Kancharapalem', genres: ['Drama', 'Slice of Life'], features: { adventure: 10, romance: 85, comedy: 60, intensity: 45 }, description: 'Four unconventional love stories unfolding in the same town across different ages, religion, and status.', year: 2018 },
  { id: 5, title: 'Jersey', genres: ['Sports', 'Drama'], features: { adventure: 15, romance: 50, comedy: 25, intensity: 80 }, description: 'A failed cricketer in his late thirties decides to return to the pitch to fulfill his son\'s wish for a jersey.', year: 2019 },
  { id: 6, title: 'Mathu Vadalara', genres: ['Comedy', 'Thriller'], features: { adventure: 30, romance: 5, comedy: 95, intensity: 70 }, description: 'A delivery boy trying to make a quick buck gets entangled in a surreal murder mystery.', year: 2019 },
  { id: 7, title: 'Goodachari', genres: ['Action', 'Spy Thriller'], features: { adventure: 85, romance: 35, comedy: 15, intensity: 88 }, description: 'A young man recruited into a secret Indian intelligence agency is framed for the murder of his mentors.', year: 2018 },
  { id: 8, title: 'Kalki 2898 AD', genres: ['Sci-Fi', 'Action', 'Mythology'], features: { adventure: 95, romance: 10, comedy: 25, intensity: 85 }, description: 'In a dystopian future, a bounty hunter navigates a war-torn world where ancient mythology collides with advanced technology.', year: 2024 },
  { id: 9, title: 'Pelli Choopulu', genres: ['Romance', 'Comedy'], features: { adventure: 10, romance: 88, comedy: 90, intensity: 20 }, description: 'A lazy chef and a driven businesswoman meet during an arranged marriage setup and start a food truck.', year: 2016 },
  { id: 10, title: 'HIT: The First Case', genres: ['Crime', 'Mystery', 'Procedural'], features: { adventure: 35, romance: 20, comedy: 5, intensity: 92 }, description: 'A brilliant but trauma-ridden cop must overcome his past to solve a mysterious disappearance.', year: 2020 },
  { id: 11, title: 'Mahanati', genres: ['Biopic', 'Drama'], features: { adventure: 20, romance: 75, comedy: 30, intensity: 85 }, description: 'The sweeping, tragic life story of Savitri, one of the most iconic actresses in South Indian cinema history.', year: 2018 },
  { id: 12, title: 'Awe!', genres: ['Psychological', 'Experimental'], features: { adventure: 40, romance: 15, comedy: 45, intensity: 82 }, description: 'A diverse group of people deal with intertwining issues in a single restaurant.', year: 2018 },
  { id: 13, title: 'The Godfather', genres: ['Crime', 'Drama'], features: { adventure: 15, romance: 20, comedy: 5, intensity: 90 }, description: 'The aging patriarch of an organized crime dynasty transfers control to his reluctant son.', year: 1972 },
  { id: 14, title: 'Parasite', genres: ['Thriller', 'Dark Comedy'], features: { adventure: 20, romance: 10, comedy: 65, intensity: 95 }, description: 'Greed and class discrimination threaten the symbiotic relationship between a wealthy family and a destitute clan.', year: 2019 },
  { id: 15, title: 'Spirited Away', genres: ['Animation', 'Fantasy'], features: { adventure: 90, romance: 15, comedy: 35, intensity: 60 }, description: 'A sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits.', year: 2001 },
  { id: 16, title: 'The Matrix', genres: ['Sci-Fi', 'Action'], features: { adventure: 85, romance: 25, comedy: 10, intensity: 95 }, description: 'A computer hacker learns the true nature of his reality and his role in the war against its controllers.', year: 1999 },
  { id: 17, title: 'City of God', genres: ['Crime', 'Drama'], features: { adventure: 40, romance: 15, comedy: 10, intensity: 98 }, description: 'In the slums of Rio, two kids\' paths diverge as one becomes a photographer and the other a kingpin.', year: 2002 },
  { id: 18, title: 'Inception', genres: ['Sci-Fi', 'Thriller'], features: { adventure: 88, romance: 30, comedy: 10, intensity: 92 }, description: 'A thief is given the inverse task of planting an idea into the mind of a C.E.O.', year: 2010 },
  { id: 19, title: 'Seven Samurai', genres: ['Action', 'Drama'], features: { adventure: 85, romance: 10, comedy: 20, intensity: 88 }, description: 'A poor village under attack recruits seven unemployed samurai to help them defend themselves.', year: 1954 },
  { id: 20, title: 'Amélie', genres: ['Romance', 'Comedy'], features: { adventure: 30, romance: 85, comedy: 80, intensity: 20 }, description: 'An innocent girl in Paris decides to help those around her and discovers love.', year: 2001 },
  { id: 21, title: 'Pan\'s Labyrinth', genres: ['Fantasy', 'War'], features: { adventure: 75, romance: 5, comedy: 5, intensity: 90 }, description: 'In 1944 Spain, a bookish girl escapes into an eerie but captivating fantasy world.', year: 2006 },
  { id: 22, title: 'The Dark Knight', genres: ['Action', 'Crime'], features: { adventure: 80, romance: 15, comedy: 15, intensity: 98 }, description: 'Batman must accept one of the greatest psychological tests of his ability against the Joker.', year: 2008 },
  { id: 23, title: 'Interstellar', genres: ['Sci-Fi', 'Adventure'], features: { adventure: 95, romance: 25, comedy: 10, intensity: 88 }, description: 'Explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.', year: 2014 },
  { id: 24, title: 'Pulp Fiction', genres: ['Crime', 'Dark Comedy'], features: { adventure: 30, romance: 15, comedy: 75, intensity: 85 }, description: 'The lives of mob hitmen, a boxer, a gangster, and diner bandits intertwine.', year: 1994 },
  { id: 25, title: 'Dangal', genres: ['Biography', 'Sports'], features: { adventure: 20, romance: 5, comedy: 30, intensity: 85 }, description: 'A former wrestler and his daughters struggle towards glory at the Commonwealth Games.', year: 2016 },
  { id: 26, title: '3 Idiots', genres: ['Comedy', 'Drama'], features: { adventure: 40, romance: 45, comedy: 95, intensity: 50 }, description: 'Two friends revisit their college days and recall the memory of their friend who inspired them.', year: 2009 },
  { id: 27, title: 'Sholay', genres: ['Action', 'Adventure'], features: { adventure: 90, romance: 35, comedy: 45, intensity: 85 }, description: 'A former police officer enlists two outlaws to capture a notorious bandit.', year: 1975 },
  { id: 28, title: 'Oldboy', genres: ['Action', 'Mystery'], features: { adventure: 40, romance: 10, comedy: 5, intensity: 100 }, description: 'After being kidnapped for 15 years, a man must find his captor in five days.', year: 2003 },
  { id: 29, title: 'Crouching Tiger, Hidden Dragon', genres: ['Action', 'Fantasy'], features: { adventure: 85, romance: 65, comedy: 10, intensity: 80 }, description: 'A young Chinese warrior steals a sword and escapes into a world of romantic adventure.', year: 2000 },
  { id: 30, title: 'The Shawshank Redemption', genres: ['Drama'], features: { adventure: 20, romance: 5, comedy: 10, intensity: 85 }, description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption.', year: 1994 },
  { id: 31, title: 'Schindler\'s List', genres: ['Biography', 'War'], features: { adventure: 10, romance: 10, comedy: 0, intensity: 100 }, description: 'Industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce during WWII.', year: 1993 },
  { id: 32, title: 'Forrest Gump', genres: ['Drama', 'Romance'], features: { adventure: 65, romance: 80, comedy: 50, intensity: 40 }, description: 'The presidencies and historic events are seen through the eyes of an Alabama man with an IQ of 75.', year: 1994 },
  { id: 33, title: 'Goodfellas', genres: ['Biography', 'Crime'], features: { adventure: 25, romance: 15, comedy: 40, intensity: 90 }, description: 'The story of Henry Hill and his life in the mob.', year: 1990 },
  { id: 34, title: 'Fight Club', genres: ['Drama', 'Thriller'], features: { adventure: 30, romance: 10, comedy: 35, intensity: 95 }, description: 'An insomniac office worker and a soap maker form an underground fight club.', year: 1999 },
  { id: 35, title: 'The Lord of the Rings: Return of the King', genres: ['Action', 'Fantasy'], features: { adventure: 100, romance: 25, comedy: 15, intensity: 95 }, description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army.', year: 2003 },
  { id: 36, title: 'Star Wars: A New Hope', genres: ['Action', 'Sci-Fi'], features: { adventure: 98, romance: 20, comedy: 30, intensity: 75 }, description: 'Luke Skywalker joins forces with allies to save the galaxy from the Empire.', year: 1977 },
  { id: 37, title: 'The Intouchables', genres: ['Biography', 'Comedy'], features: { adventure: 15, romance: 5, comedy: 85, intensity: 30 }, description: 'An aristocrat hires a young man from the projects to be his caregiver.', year: 2011 },
  { id: 38, title: 'Titanic', genres: ['Drama', 'Romance'], features: { adventure: 50, romance: 100, comedy: 10, intensity: 85 }, description: 'A young aristocrat falls in love with a poor artist aboard the ill-fated R.M.S. Titanic.', year: 1997 },
  { id: 39, title: 'Avatar', genres: ['Action', 'Sci-Fi'], features: { adventure: 95, romance: 60, comedy: 15, intensity: 80 }, description: 'A paraplegic Marine on the moon Pandora becomes torn between orders and protecting his new home.', year: 2009 },
  { id: 40, title: 'Cinema Paradiso', genres: ['Drama', 'Romance'], features: { adventure: 15, romance: 75, comedy: 40, intensity: 50 }, description: 'A filmmaker recalls his childhood falling in love with the pictures at his village cinema.', year: 1988 },
  { id: 41, title: 'Life Is Beautiful', genres: ['Comedy', 'Drama'], features: { adventure: 10, romance: 60, comedy: 70, intensity: 85 }, description: 'A Jewish waiter uses humor and imagination to protect his son in a Holocaust camp.', year: 1997 },
  { id: 42, title: 'A Separation', genres: ['Drama'], features: { adventure: 5, romance: 30, comedy: 0, intensity: 88 }, description: 'A married couple faces the decision to leave Iran or stay to care for a deteriorating parent.', year: 2011 },
  { id: 43, title: 'Capernaum', genres: ['Drama'], features: { adventure: 20, romance: 0, comedy: 5, intensity: 98 }, description: 'A 12-year-old boy sues his parents for neglect while serving a sentence for a violent crime.', year: 2018 },
  { id: 44, title: 'In the Mood for Love', genres: ['Drama', 'Romance'], features: { adventure: 5, romance: 95, comedy: 5, intensity: 60 }, description: 'Two neighbors form a strong bond suspecting extramarital activities of their spouses.', year: 2000 },
  { id: 45, title: 'Chungking Express', genres: ['Comedy', 'Crime'], features: { adventure: 15, romance: 80, comedy: 45, intensity: 40 }, description: 'Two melancholy Hong Kong policemen fall in love with contrasting women.', year: 1994 },
  { id: 46, title: 'Hero', genres: ['Action', 'Adventure'], features: { adventure: 85, romance: 40, comedy: 5, intensity: 75 }, description: 'A defense officer is summoned by the King of Qin regarding his success against three warriors.', year: 2002 },
  { id: 47, title: 'Train to Busan', genres: ['Action', 'Horror'], features: { adventure: 75, romance: 10, comedy: 5, intensity: 98 }, description: 'Passengers struggle to survive a zombie outbreak on a train to Busan.', year: 2016 },
  { id: 48, title: 'The Host', genres: ['Horror', 'Sci-Fi'], features: { adventure: 65, romance: 5, comedy: 40, intensity: 85 }, description: 'A monster emerges from Seoul\'s Han River and a family tries to rescue their daughter.', year: 2006 },
  { id: 49, title: 'Your Name.', genres: ['Animation', 'Romance'], features: { adventure: 50, romance: 95, comedy: 60, intensity: 70 }, description: 'Two strangers find themselves mysteriously linked across space and time.', year: 2016 },
  { id: 50, title: 'Akira', genres: ['Animation', 'Action'], features: { adventure: 85, romance: 10, comedy: 5, intensity: 95 }, description: 'A secret military project turns a biker gang member into a rampaging psychic.', year: 1988 },
  { id: 51, title: 'Princess Mononoke', genres: ['Animation', 'Fantasy'], features: { adventure: 95, romance: 30, comedy: 15, intensity: 85 }, description: 'A young prince is caught in a war between forest gods and a mining colony.', year: 1997 },
  { id: 52, title: 'My Neighbor Totoro', genres: ['Animation', 'Family'], features: { adventure: 60, romance: 0, comedy: 70, intensity: 20 }, description: 'Two girls move to the country and have adventures with wondrous forest spirits.', year: 1988 },
  { id: 53, title: 'La Haine', genres: ['Crime', 'Drama'], features: { adventure: 20, romance: 5, comedy: 10, intensity: 92 }, description: '24 hours in the lives of three young men in the French suburbs after a violent riot.', year: 1995 },
  { id: 54, title: 'Portrait of a Lady on Fire', genres: ['Drama', 'Romance'], features: { adventure: 10, romance: 98, comedy: 5, intensity: 70 }, description: 'A female painter is obliged to paint a wedding portrait of a young woman on an isolated island.', year: 2019 },
  { id: 55, title: 'The Hunt', genres: ['Drama'], features: { adventure: 10, romance: 15, comedy: 5, intensity: 95 }, description: 'A teacher\'s life is shattered by an innocent lie in his close-knit community.', year: 2012 },
  { id: 56, title: 'Another Round', genres: ['Comedy', 'Drama'], features: { adventure: 20, romance: 25, comedy: 70, intensity: 65 }, description: 'Four high school teachers test a theory of maintaining a constant level of alcohol in their blood.', year: 2020 },
  { id: 57, title: 'The Secret in Their Eyes', genres: ['Drama', 'Mystery'], features: { adventure: 25, romance: 60, comedy: 15, intensity: 88 }, description: 'A retired counselor writes a novel to find closure for a past unresolved homicide.', year: 2009 },
  { id: 58, title: 'Amores Perros', genres: ['Drama', 'Thriller'], features: { adventure: 20, romance: 30, comedy: 5, intensity: 92 }, description: 'A horrific car accident connects three stories of loss and harsh realities in Mexico City.', year: 2000 },
  { id: 59, title: 'Y Tu Mamá También', genres: ['Drama', 'Romance'], features: { adventure: 65, romance: 80, comedy: 55, intensity: 50 }, description: 'Two teenage boys and an older woman embark on a road trip learning about life and friendship.', year: 2001 },
  { id: 60, title: 'Roma', genres: ['Drama'], features: { adventure: 10, romance: 20, comedy: 15, intensity: 70 }, description: 'A year in the life of a middle-class family\'s maid in 1970s Mexico City.', year: 2018 },
  { id: 61, title: 'Mad Max: Fury Road', genres: ['Action', 'Adventure'], features: { adventure: 100, romance: 10, comedy: 10, intensity: 100 }, description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrant with the help of a drifter.', year: 2015 },
  { id: 62, title: 'Gladiator', genres: ['Action', 'Drama'], features: { adventure: 85, romance: 25, comedy: 5, intensity: 90 }, description: 'A former Roman General sets out to exact vengeance against a corrupt emperor.', year: 2000 },
  { id: 63, title: 'Braveheart', genres: ['Biography', 'War'], features: { adventure: 88, romance: 40, comedy: 10, intensity: 92 }, description: 'Scottish warrior William Wallace leads a rebellion against King Edward I of England.', year: 1995 },
  { id: 64, title: 'The Silence of the Lambs', genres: ['Crime', 'Thriller'], features: { adventure: 25, romance: 5, comedy: 5, intensity: 98 }, description: 'An FBI cadet receives help from an incarcerated cannibal killer to catch another serial killer.', year: 1991 },
  { id: 65, title: 'Se7en', genres: ['Crime', 'Mystery'], features: { adventure: 20, romance: 10, comedy: 5, intensity: 99 }, description: 'Two detectives hunt a serial killer who uses the seven deadly sins as his motives.', year: 1995 },
  { id: 66, title: 'The Usual Suspects', genres: ['Crime', 'Mystery'], features: { adventure: 30, romance: 10, comedy: 20, intensity: 88 }, description: 'A sole survivor tells the twisty events leading to a horrific gun battle on a boat.', year: 1995 },
  { id: 67, title: 'Memento', genres: ['Mystery', 'Thriller'], features: { adventure: 20, romance: 15, comedy: 10, intensity: 95 }, description: 'A man with short-term memory loss attempts to track down his wife\'s murderer.', year: 2000 },
  { id: 68, title: 'The Prestige', genres: ['Drama', 'Sci-Fi'], features: { adventure: 35, romance: 25, comedy: 5, intensity: 88 }, description: 'Two stage magicians engage in a battle to create the ultimate illusion.', year: 2006 },
  { id: 69, title: 'Spider-Man: Into the Spider-Verse', genres: ['Animation', 'Action'], features: { adventure: 95, romance: 20, comedy: 80, intensity: 75 }, description: 'Teen Miles Morales must join with spider-powered individuals from other dimensions.', year: 2018 },
  { id: 70, title: 'Everything Everywhere All at Once', genres: ['Action', 'Comedy'], features: { adventure: 95, romance: 45, comedy: 90, intensity: 88 }, description: 'An immigrant must explore other universes to save the world.', year: 2022 },
  { id: 71, title: 'Whiplash', genres: ['Drama', 'Music'], features: { adventure: 10, romance: 15, comedy: 5, intensity: 98 }, description: 'A young drummer\'s dreams of greatness are mentored by a ruthless instructor.', year: 2014 },
  { id: 72, title: 'Black Swan', genres: ['Drama', 'Thriller'], features: { adventure: 10, romance: 20, comedy: 0, intensity: 95 }, description: 'A committed dancer struggles to maintain her sanity after winning the lead in Swan Lake.', year: 2010 },
  { id: 73, title: 'The Grand Budapest Hotel', genres: ['Adventure', 'Comedy'], features: { adventure: 75, romance: 30, comedy: 95, intensity: 40 }, description: 'A writer encounters the owner of an aging high-class hotel and hears his story.', year: 2014 },
  { id: 74, title: 'There Will Be Blood', genres: ['Drama'], features: { adventure: 20, romance: 5, comedy: 10, intensity: 95 }, description: 'A story of family, religion, hatred, and oil focusing on a turn-of-the-century prospector.', year: 2007 },
  { id: 75, title: 'No Country for Old Men', genres: ['Crime', 'Thriller'], features: { adventure: 30, romance: 5, comedy: 5, intensity: 98 }, description: 'Violence ensues after a hunter stumbles upon a drug deal gone wrong.', year: 2007 },
  { id: 76, title: 'The Big Lebowski', genres: ['Comedy', 'Crime'], features: { adventure: 40, romance: 10, comedy: 98, intensity: 30 }, description: 'The Dude seeks restitution for a ruined rug and enlists his bowling buddies.', year: 1998 },
  { id: 77, title: 'Fargo', genres: ['Crime', 'Thriller'], features: { adventure: 20, romance: 10, comedy: 70, intensity: 85 }, description: 'An inept crime falls apart due to bungling and persistent police work.', year: 1996 },
  { id: 78, title: 'Snatch', genres: ['Comedy', 'Crime'], features: { adventure: 35, romance: 5, comedy: 90, intensity: 80 }, description: 'Various criminals fight to track down a priceless stolen diamond.', year: 2000 },
  { id: 79, title: 'Lock, Stock and Two Smoking Barrels', genres: ['Action', 'Comedy'], features: { adventure: 40, romance: 5, comedy: 92, intensity: 75 }, description: 'A botched card game triggers criminals to collide in expected events.', year: 1998 },
  { id: 80, title: 'Trainspotting', genres: ['Drama'], features: { adventure: 30, romance: 15, comedy: 75, intensity: 85 }, description: 'A man immersed in the drug scene tries to clean up despite the influence of friends.', year: 1996 },
  { id: 81, title: 'Slumdog Millionaire', genres: ['Drama', 'Romance'], features: { adventure: 65, romance: 85, comedy: 30, intensity: 80 }, description: 'A Mumbai teenager reflects on his life after being accused of cheating on a game show.', year: 2008 },
  { id: 82, title: 'Lagaan', genres: ['Drama', 'Sports'], features: { adventure: 50, romance: 45, comedy: 20, intensity: 85 }, description: 'Villagers stake their future on a game of cricket against their ruthless British rulers.', year: 2001 },
  { id: 83, title: 'PK', genres: ['Comedy', 'Sci-Fi'], features: { adventure: 50, romance: 40, comedy: 95, intensity: 45 }, description: 'An alien\'s innocent questions force a country to evaluate the impact of religion.', year: 2014 },
  { id: 84, title: 'Swades', genres: ['Drama'], features: { adventure: 30, romance: 50, comedy: 20, intensity: 65 }, description: 'An Indian scientist returns to his village and rediscovers his roots.', year: 2004 },
  { id: 85, title: 'K.G.F: Chapter 1', genres: ['Action', 'Drama'], features: { adventure: 85, romance: 20, comedy: 10, intensity: 95 }, description: 'A gangster goes undercover as a slave to assassinate the owner of a notorious gold mine.', year: 2018 },
  { id: 86, title: 'Pushpa: The Rise', genres: ['Action', 'Crime'], features: { adventure: 80, romance: 35, comedy: 25, intensity: 90 }, description: 'A laborer rises through the ranks of a red sandalwood smuggling syndicate.', year: 2021 },
  { id: 87, title: 'Kantara', genres: ['Action', 'Thriller'], features: { adventure: 75, romance: 20, comedy: 30, intensity: 92 }, description: 'A young tribal seeks justice while navigating local folklore and betrayal.', year: 2022 },
  { id: 88, title: 'Drishyam', genres: ['Crime', 'Thriller'], features: { adventure: 15, romance: 20, comedy: 10, intensity: 95 }, description: 'A man goes to extreme lengths to save his family from punishment for an accidental crime.', year: 2013 },
  { id: 89, title: 'Super Deluxe', genres: ['Action', 'Comedy'], features: { adventure: 30, romance: 15, comedy: 85, intensity: 80 }, description: 'Four separate stories interweave over the course of one fateful day.', year: 2019 },
  { id: 90, title: 'Asuran', genres: ['Action', 'Drama'], features: { adventure: 40, romance: 10, comedy: 5, intensity: 98 }, description: 'A pacifist farmer must protect his hot-blooded son from the wrath of an upper-caste landlord.', year: 2019 },
  { id: 91, title: 'Vikram', genres: ['Action', 'Thriller'], features: { adventure: 85, romance: 5, comedy: 10, intensity: 95 }, description: 'A special investigator uncovers a massive conspiracy involving drug lords and rogue agents.', year: 2022 },
  { id: 92, title: 'The Good, the Bad and the Ugly', genres: ['Western'], features: { adventure: 90, romance: 5, comedy: 25, intensity: 88 }, description: 'Three gunslingers compete to find a fortune in buried gold.', year: 1966 },
  { id: 93, title: 'Once Upon a Time in the West', genres: ['Western'], features: { adventure: 80, romance: 15, comedy: 10, intensity: 90 }, description: 'A stranger with a harmonica protects a widow from a ruthless assassin.', year: 1968 },
  { id: 94, title: 'Apocalypto', genres: ['Action', 'Adventure'], features: { adventure: 95, romance: 20, comedy: 0, intensity: 98 }, description: 'A Mayan tribesman must escape captivity to save his family from human sacrifice.', year: 2006 },
  { id: 95, title: 'The Departed', genres: ['Crime', 'Thriller'], features: { adventure: 30, romance: 15, comedy: 15, intensity: 95 }, description: 'An undercover cop and a police mole attempt to identify each other.', year: 2006 },
  { id: 96, title: 'Taxi Driver', genres: ['Crime', 'Drama'], features: { adventure: 15, romance: 10, comedy: 5, intensity: 92 }, description: 'A mentally unstable veteran works as a taxi driver in a decaying New York City.', year: 1976 },
  { id: 97, title: 'Good Will Hunting', genres: ['Drama', 'Romance'], features: { adventure: 10, romance: 60, comedy: 30, intensity: 75 }, description: 'A brilliant but troubled janitor needs a psychologist\'s help to find direction.', year: 1997 },
  { id: 98, title: 'Dead Poets Society', genres: ['Comedy', 'Drama'], features: { adventure: 20, romance: 25, comedy: 40, intensity: 80 }, description: 'A maverick teacher uses poetry to embolden his boarding school students.', year: 1989 },
  { id: 99, title: 'The Truman Show', genres: ['Comedy', 'Drama'], features: { adventure: 30, romance: 35, comedy: 70, intensity: 75 }, description: 'An insurance salesman discovers his whole life is a reality TV show.', year: 1998 },
  { id: 100, title: 'Eternal Sunshine of the Spotless Mind', genres: ['Drama', 'Sci-Fi'], features: { adventure: 20, romance: 95, comedy: 45, intensity: 85 }, description: 'A couple undergoes a medical procedure to have each other erased from their memories.', year: 2004 },
  { id: 101, title: 'Her', genres: ['Drama', 'Romance'], features: { adventure: 5, romance: 90, comedy: 30, intensity: 70 }, description: 'A lonely writer develops a relationship with an advanced operating system.', year: 2013 },
  { id: 102, title: 'Ex Machina', genres: ['Drama', 'Sci-Fi'], features: { adventure: 15, romance: 20, comedy: 5, intensity: 90 }, description: 'A programmer evaluates the human qualities of a highly advanced humanoid AI.', year: 2014 },
  { id: 103, title: 'Blade Runner 2049', genres: ['Action', 'Sci-Fi'], features: { adventure: 75, romance: 30, comedy: 5, intensity: 85 }, description: 'A new blade runner uncovers a secret that leads him to Rick Deckard.', year: 2017 },
  { id: 104, title: 'Blade Runner', genres: ['Action', 'Sci-Fi'], features: { adventure: 65, romance: 25, comedy: 5, intensity: 80 }, description: 'A blade runner must pursue and terminate four replicants in dystopian Los Angeles.', year: 1982 },
  { id: 105, title: 'The Terminator', genres: ['Action', 'Sci-Fi'], features: { adventure: 85, romance: 30, comedy: 5, intensity: 95 }, description: 'A cyborg is sent from the future to assassinate the mother of the resistance leader.', year: 1984 },
  { id: 106, title: 'Terminator 2: Judgment Day', genres: ['Action', 'Sci-Fi'], features: { adventure: 95, romance: 10, comedy: 15, intensity: 98 }, description: 'A reprogrammed cyborg protects a boy from a more advanced liquid metal assassin.', year: 1991 },
  { id: 107, title: 'Alien', genres: ['Horror', 'Sci-Fi'], features: { adventure: 65, romance: 5, comedy: 5, intensity: 98 }, description: 'A commercial spaceship crew encounters a deadly lifeform.', year: 1979 },
  { id: 108, title: 'Aliens', genres: ['Action', 'Sci-Fi'], features: { adventure: 95, romance: 10, comedy: 15, intensity: 98 }, description: 'Ripley returns to the alien planet with a squad of colonial marines.', year: 1986 },
  { id: 109, title: 'Jurassic Park', genres: ['Action', 'Adventure'], features: { adventure: 98, romance: 10, comedy: 20, intensity: 90 }, description: 'A theme park with cloned dinosaurs suffers a catastrophic security breakdown.', year: 1993 },
  { id: 110, title: 'The Lion King', genres: ['Animation', 'Drama'], features: { adventure: 85, romance: 20, comedy: 45, intensity: 75 }, description: 'A young lion prince is cast out by his cruel uncle and must find his way back.', year: 1994 },
  { id: 111, title: 'Toy Story', genres: ['Animation', 'Comedy'], features: { adventure: 75, romance: 10, comedy: 95, intensity: 45 }, description: 'A cowboy doll is threatened by the arrival of a new spaceman action figure.', year: 1995 },
  { id: 112, title: 'WALL·E', genres: ['Animation', 'Sci-Fi'], features: { adventure: 80, romance: 85, comedy: 60, intensity: 40 }, description: 'A lonely waste-collecting robot embarks on a journey that changes humanity\'s fate.', year: 2008 },
  { id: 113, title: 'Baahubali: The Beginning', genres: ['Action', 'Epic'], features: { adventure: 95, romance: 40, comedy: 15, intensity: 90 }, description: 'An adventurous man becomes involved in a decades-old feud between two warring people.', year: 2015 },
  { id: 114, title: 'Baahubali 2: The Conclusion', genres: ['Action', 'Epic'], features: { adventure: 98, romance: 45, comedy: 10, intensity: 95 }, description: 'Shiva learns his heritage and past events of the Mahishmati Kingdom.', year: 2017 },
  { id: 115, title: 'Mayabazar', genres: ['Fantasy', 'Comedy'], features: { adventure: 75, romance: 60, comedy: 85, intensity: 30 }, description: 'Lord Krishna intervenes to help lovers unite amidst familial betrayals.', year: 1957 },
  { id: 116, title: 'Siva', genres: ['Action', 'Crime'], features: { adventure: 30, romance: 20, comedy: 5, intensity: 95 }, description: 'A student turns vigilante to rid his campus of a mobster\'s influence.', year: 1989 },
  { id: 117, title: 'Athadu', genres: ['Action', 'Thriller'], features: { adventure: 50, romance: 30, comedy: 60, intensity: 85 }, description: 'A framed assassin assumes the identity of a dead man in a rural village.', year: 2005 },
  { id: 118, title: 'Pokiri', genres: ['Action', 'Crime'], features: { adventure: 45, romance: 35, comedy: 50, intensity: 90 }, description: 'A ruthless killer for hire joins a mafia gang, hiding his true motives.', year: 2006 },
  { id: 119, title: 'Rangasthalam', genres: ['Action', 'Drama'], features: { adventure: 60, romance: 40, comedy: 25, intensity: 92 }, description: 'A deaf villager and his brother decide to overthrow a tyrannical local president.', year: 2018 },
  { id: 120, title: 'Arjun Reddy', genres: ['Drama', 'Romance'], features: { adventure: 10, romance: 90, comedy: 15, intensity: 88 }, description: 'A hot-headed surgeon spirals into self-destruction after heartbreak.', year: 2017 },
  { id: 121, title: 'Bommarillu', genres: ['Romance', 'Comedy'], features: { adventure: 15, romance: 85, comedy: 80, intensity: 40 }, description: 'A micromanaged young man fights for independence after falling in love.', year: 2006 },
  { id: 122, title: 'Okkadu', genres: ['Action', 'Romance'], features: { adventure: 70, romance: 75, comedy: 40, intensity: 85 }, description: 'A Kabaddi player rescues a woman from a dangerous faction leader.', year: 2003 },
  { id: 123, title: 'Manam', genres: ['Drama', 'Fantasy'], features: { adventure: 20, romance: 80, comedy: 65, intensity: 50 }, description: 'A multi-generational tale bringing together reincarnations of family members.', year: 2014 },
  { id: 124, title: 'Geethanjali', genres: ['Romance', 'Drama'], features: { adventure: 15, romance: 95, comedy: 30, intensity: 60 }, description: 'Two terminally ill young people fall in deeply in love.', year: 1989 },
  { id: 125, title: 'Sankarabharanam', genres: ['Musical', 'Drama'], features: { adventure: 10, romance: 10, comedy: 15, intensity: 75 }, description: 'A musician struggles to maintain the sanctity of Indian classical music.', year: 1980 },
  { id: 126, title: 'Agent Sai Srinivasa Athreya', genres: ['Mystery', 'Comedy'], features: { adventure: 40, romance: 10, comedy: 85, intensity: 80 }, description: 'A brilliant detective stumbles upon a chilling conspiracy in Nellore.', year: 2019 },
  { id: 127, title: 'Sita Ramam', genres: ['Romance', 'War'], features: { adventure: 35, romance: 98, comedy: 20, intensity: 70 }, description: 'An orphaned soldier sets out to find a mysterious girl who wrote him a letter.', year: 2022 },
  { id: 128, title: 'Magadheera', genres: ['Action', 'Fantasy'], features: { adventure: 85, romance: 80, comedy: 30, intensity: 90 }, description: 'A warrior reincarnates 400 years later to save his love and fulfill his destiny.', year: 2009 },
  { id: 129, title: 'Kshana Kshanam', genres: ['Thriller', 'Comedy'], features: { adventure: 75, romance: 30, comedy: 85, intensity: 70 }, description: 'A woman and a thief are chased after accidentally acquiring stolen money.', year: 1991 },
  { id: 130, title: 'Swati Mutyam', genres: ['Drama', 'Family'], features: { adventure: 10, romance: 65, comedy: 40, intensity: 60 }, description: 'An autistic man marries a young widow to protect her from societal scorn.', year: 1986 },
  { id: 131, title: 'Happy Days', genres: ['Drama', 'Coming-of-Age'], features: { adventure: 20, romance: 70, comedy: 80, intensity: 35 }, description: 'Four years in the lives of eight engineering students navigating college life.', year: 2007 },
  { id: 132, title: 'Ala Vaikunthapurramuloo', genres: ['Action', 'Comedy'], features: { adventure: 45, romance: 50, comedy: 90, intensity: 70 }, description: 'Swapped at birth, a clever young man eventually discovers his wealthy heritage.', year: 2020 },
  { id: 133, title: 'Arya', genres: ['Romance', 'Comedy'], features: { adventure: 30, romance: 95, comedy: 75, intensity: 65 }, description: 'A free-spirited guy aggressively pursues a girl under the concept of "one-side love."', year: 2004 },
  { id: 134, title: 'Chatrapathi', genres: ['Action', 'Drama'], features: { adventure: 70, romance: 35, comedy: 25, intensity: 95 }, description: 'A refugee rises to become a powerful savior while searching for his lost mother.', year: 2005 },
  { id: 135, title: 'Cinemabandi', genres: ['Comedy', 'Indie'], features: { adventure: 20, romance: 5, comedy: 85, intensity: 20 }, description: 'An auto driver finds a camera and decides to make a blockbuster film.', year: 2021 },
  { id: 136, title: 'Evaru', genres: ['Crime', 'Thriller'], features: { adventure: 15, romance: 10, comedy: 5, intensity: 92 }, description: 'A corrupt cop is hired by a woman accused of murder, unraveling dark secrets.', year: 2019 },
  { id: 137, title: 'Kshanam', genres: ['Mystery', 'Thriller'], features: { adventure: 30, romance: 25, comedy: 10, intensity: 88 }, description: 'A man returns to India to help his ex-girlfriend find her kidnapped daughter.', year: 2016 },
  { id: 138, title: 'K.G.F: Chapter 2', genres: ['Action', 'Drama'], features: { adventure: 90, romance: 15, comedy: 5, intensity: 98 }, description: 'Rocky assumes control of the KGF empire, facing new enemies and political threats.', year: 2022 },
  { id: 139, title: 'Salaar: Part 1 – Ceasefire', genres: ['Action', 'Thriller'], features: { adventure: 85, romance: 10, comedy: 5, intensity: 95 }, description: 'A gang leader makes a promise to his dying friend to take on criminal cartels.', year: 2023 },
  { id: 140, title: 'Jawan', genres: ['Action', 'Thriller'], features: { adventure: 88, romance: 20, comedy: 15, intensity: 92 }, description: 'A man driven by a personal vendetta rectifies societal wrongs while keeping a promise.', year: 2023 },
  { id: 141, title: 'Pathaan', genres: ['Action', 'Spy'], features: { adventure: 95, romance: 25, comedy: 20, intensity: 85 }, description: 'An Indian spy races against time to stop a rogue agent from launching a deadly attack.', year: 2023 },
  { id: 142, title: 'Animal', genres: ['Action', 'Crime'], features: { adventure: 40, romance: 30, comedy: 10, intensity: 100 }, description: 'The complex relationship between a father and son spirals into extreme violence.', year: 2023 },
  { id: 143, title: 'Leo', genres: ['Action', 'Thriller'], features: { adventure: 80, romance: 15, comedy: 10, intensity: 92 }, description: 'A mild-mannered cafe owner is forced to confront a dangerous drug cartel from his past.', year: 2023 },
  { id: 144, title: 'Jailer', genres: ['Action', 'Comedy'], features: { adventure: 70, romance: 5, comedy: 60, intensity: 85 }, description: 'A retired jailer goes on a ruthless manhunt to find his son\'s killers.', year: 2023 },
  { id: 145, title: '2.0', genres: ['Sci-Fi', 'Action'], features: { adventure: 85, romance: 10, comedy: 15, intensity: 80 }, description: 'An ornithologist seeking vengeance uses supernatural powers against mobile phone users.', year: 2018 },
  { id: 146, title: 'Saaho', genres: ['Action', 'Thriller'], features: { adventure: 88, romance: 30, comedy: 15, intensity: 85 }, description: 'An undercover cop gets embroiled in a battle with warring criminals over a massive fortune.', year: 2019 },
  { id: 147, title: 'Ponniyin Selvan: I', genres: ['Period', 'Drama'], features: { adventure: 80, romance: 40, comedy: 10, intensity: 75 }, description: 'Vandiyathevan sets out to cross the Chola land to deliver a message to the King.', year: 2022 },
  { id: 148, title: 'Ponniyin Selvan: II', genres: ['Period', 'Drama'], features: { adventure: 85, romance: 45, comedy: 5, intensity: 80 }, description: 'The Chola princes must fight against conspiracies to protect their kingdom.', year: 2023 },
  { id: 149, title: 'Brahmāstra: Part One – Shiva', genres: ['Action', 'Fantasy'], features: { adventure: 90, romance: 50, comedy: 15, intensity: 75 }, description: 'A young man discovers he has the power of fire and a connection to a secret society.', year: 2022 },
  { id: 150, title: 'Hanu-Man', genres: ['Superhero', 'Action'], features: { adventure: 85, romance: 20, comedy: 45, intensity: 70 }, description: 'An ordinary guy in a remote village gains superpowers blessed by Lord Hanuman.', year: 2024 },
  { id: 151, title: 'Kabali', genres: ['Action', 'Crime'], features: { adventure: 60, romance: 20, comedy: 10, intensity: 85 }, description: 'A reformed gangster is released from prison and seeks revenge while searching for his family.', year: 2016 },
  { id: 152, title: 'Master', genres: ['Action', 'Thriller'], features: { adventure: 75, romance: 10, comedy: 20, intensity: 88 }, description: 'An alcoholic professor is sent to a juvenile school, where he clashes with a gangster.', year: 2021 },
  { id: 153, title: 'Kaithi', genres: ['Action', 'Thriller'], features: { adventure: 80, romance: 5, comedy: 10, intensity: 95 }, description: 'An ex-convict on his way to meet his daughter must drive poisoned cops to a hospital.', year: 2019 },
  { id: 154, title: 'Devara: Part 1', genres: ['Action', 'Drama'], features: { adventure: 85, romance: 25, comedy: 15, intensity: 90 }, description: 'A protector of a coastal realm takes on smugglers and internal betrayals.', year: 2024 },
  { id: 155, title: 'Indian 2', genres: ['Vigilante', 'Action'], features: { adventure: 70, romance: 10, comedy: 15, intensity: 85 }, description: 'Senapathy returns to combat a new wave of corruption across the country.', year: 2024 },
  { id: 156, title: 'Thunivu', genres: ['Heist', 'Action'], features: { adventure: 80, romance: 5, comedy: 20, intensity: 85 }, description: 'A mysterious mastermind and his team orchestrate a massive bank heist.', year: 2023 },
  { id: 157, title: 'Varisu', genres: ['Drama', 'Action'], features: { adventure: 50, romance: 30, comedy: 35, intensity: 65 }, description: 'A business tycoon\'s youngest son takes over the empire to protect it from rivals.', year: 2023 },
  { id: 158, title: 'Gadar 2', genres: ['Action', 'Drama'], features: { adventure: 75, romance: 25, comedy: 10, intensity: 85 }, description: 'Tara Singh returns to Pakistan to rescue his son during the 1971 war.', year: 2023 },
  { id: 159, title: 'Tiger Zinda Hai', genres: ['Action', 'Spy'], features: { adventure: 90, romance: 20, comedy: 10, intensity: 88 }, description: 'Indian and Pakistani spies team up to rescue nurses held hostage by terrorists.', year: 2017 },
  { id: 160, title: 'War', genres: ['Action', 'Spy'], features: { adventure: 95, romance: 15, comedy: 15, intensity: 90 }, description: 'An Indian soldier is assigned to eliminate his former mentor who has gone rogue.', year: 2019 },
  { id: 161, title: 'Krrish 3', genres: ['Superhero', 'Action'], features: { adventure: 85, romance: 25, comedy: 15, intensity: 75 }, description: 'A superhero must defeat an evil geneticist intent on destroying the world.', year: 2013 },
  { id: 162, title: 'Enthiran (Robot)', genres: ['Sci-Fi', 'Action'], features: { adventure: 80, romance: 35, comedy: 30, intensity: 75 }, description: 'An advanced robot falls in love with his creator\'s girlfriend and turns destructive.', year: 2010 },
  { id: 163, title: 'Singham', genres: ['Action', 'Cop Drama'], features: { adventure: 75, romance: 20, comedy: 25, intensity: 85 }, description: 'An honest cop fights against a powerful and corrupt politician in a rural town.', year: 2011 },
  { id: 164, title: 'Bhool Bhulaiyaa 2', genres: ['Horror', 'Comedy'], features: { adventure: 40, romance: 25, comedy: 85, intensity: 50 }, description: 'Two strangers pretend to be married and accidentally awaken an evil spirit.', year: 2022 },
  { id: 165, title: 'Drishyam 2', genres: ['Crime', 'Thriller'], features: { adventure: 20, romance: 15, comedy: 10, intensity: 95 }, description: 'Years after the original crime, a family is investigated again when new evidence emerges.', year: 2022 },
  { id: 166, title: 'Munjya', genres: ['Horror', 'Comedy'], features: { adventure: 50, romance: 15, comedy: 80, intensity: 60 }, description: 'A young man accidentally releases a mischievous and obsessive spirit.', year: 2024 },
  { id: 167, title: 'Karthikeya 2', genres: ['Adventure', 'Mystery'], features: { adventure: 85, romance: 15, comedy: 25, intensity: 75 }, description: 'A doctor goes on a quest to find the lost anklet of Lord Krishna.', year: 2022 },
  { id: 168, title: 'Sita', genres: ['Romance', 'Drama'], features: { adventure: 20, romance: 80, comedy: 40, intensity: 50 }, description: 'A ruthless businesswoman is forced to take care of an innocent man to inherit wealth.', year: 2019 },
  { id: 169, title: 'Maharshi', genres: ['Drama', 'Action'], features: { adventure: 30, romance: 25, comedy: 20, intensity: 75 }, description: 'A successful CEO returns to India to help his friend and becomes a champion for farmers.', year: 2019 },
  { id: 170, title: 'Sarileru Neekevvaru', genres: ['Action', 'Comedy'], features: { adventure: 60, romance: 30, comedy: 80, intensity: 70 }, description: 'An army officer goes to Kurnool to deliver a message and ends up saving a family.', year: 2020 },
  { id: 171, title: 'Bimbisara', genres: ['Fantasy', 'Action'], features: { adventure: 85, romance: 15, comedy: 20, intensity: 80 }, description: 'A ruthless ancient king time-travels to the modern world.', year: 2022 },
  { id: 172, title: 'Waltair Veerayya', genres: ['Action', 'Comedy'], features: { adventure: 70, romance: 20, comedy: 75, intensity: 75 }, description: 'A smuggler helps a cop catch a notorious criminal to clear his own name.', year: 2023 },
  { id: 173, title: 'Dasara', genres: ['Action', 'Drama'], features: { adventure: 60, romance: 30, comedy: 15, intensity: 90 }, description: 'A rugged man seeks revenge against the political powers that destroyed his life.', year: 2023 },
  { id: 174, title: 'Sarkaru Vaari Paata', genres: ['Action', 'Comedy'], features: { adventure: 50, romance: 35, comedy: 65, intensity: 70 }, description: 'A money lender travels to India to retrieve a debt and exposes a massive financial scam.', year: 2022 },
  { id: 175, title: 'Vakeel Saab', genres: ['Drama', 'Legal'], features: { adventure: 15, romance: 10, comedy: 10, intensity: 90 }, description: 'An alcoholic lawyer comes out of retirement to defend three women wrongly accused of murder.', year: 2021 },
  { id: 176, title: 'Avengers: Endgame', genres: ['Action', 'Sci-Fi'], features: { adventure: 100, romance: 15, comedy: 30, intensity: 95 }, description: 'The remaining Avengers assemble once more to reverse Thanos\' actions and restore balance.', year: 2019 },
  { id: 177, title: 'Avengers: Infinity War', genres: ['Action', 'Sci-Fi'], features: { adventure: 98, romance: 10, comedy: 25, intensity: 98 }, description: 'The Avengers must stop Thanos from collecting all six Infinity Stones.', year: 2018 },
  { id: 178, title: 'The Avengers', genres: ['Action', 'Sci-Fi'], features: { adventure: 90, romance: 10, comedy: 40, intensity: 85 }, description: 'Earth\'s mightiest heroes must come together to stop Loki and an alien army.', year: 2012 },
  { id: 179, title: 'Iron Man', genres: ['Action', 'Sci-Fi'], features: { adventure: 85, romance: 20, comedy: 45, intensity: 80 }, description: 'A billionaire engineer builds a high-tech suit of armor to fight evil.', year: 2008 },
  { id: 180, title: 'Captain America: The Winter Soldier', genres: ['Action', 'Spy'], features: { adventure: 85, romance: 10, comedy: 15, intensity: 92 }, description: 'Steve Rogers battles an assassin known as the Winter Soldier while uncovering a conspiracy.', year: 2014 },
  { id: 181, title: 'Guardians of the Galaxy', genres: ['Action', 'Comedy'], features: { adventure: 95, romance: 20, comedy: 90, intensity: 75 }, description: 'A group of intergalactic criminals must pull together to stop a fanatical warrior.', year: 2014 },
  { id: 182, title: 'Spider-Man: No Way Home', genres: ['Action', 'Fantasy'], features: { adventure: 90, romance: 30, comedy: 45, intensity: 88 }, description: 'Peter Parker seeks Doctor Strange\'s help to make people forget his identity, fracturing the multiverse.', year: 2021 },
  { id: 183, title: 'Oppenheimer', genres: ['Biography', 'Drama'], features: { adventure: 20, romance: 15, comedy: 5, intensity: 95 }, description: 'The story of J. Robert Oppenheimer and his role in the development of the atomic bomb.', year: 2023 },
  { id: 184, title: 'Dune: Part One', genres: ['Sci-Fi', 'Adventure'], features: { adventure: 95, romance: 15, comedy: 5, intensity: 88 }, description: 'A noble family becomes embroiled in a war for control over the galaxy\'s most valuable asset.', year: 2021 },
  { id: 185, title: 'Dune: Part Two', genres: ['Sci-Fi', 'Adventure'], features: { adventure: 98, romance: 25, comedy: 5, intensity: 95 }, description: 'Paul Atreides unites with the Fremen on a warpath of revenge against the conspirators.', year: 2024 },
  { id: 186, title: 'Top Gun: Maverick', genres: ['Action', 'Drama'], features: { adventure: 90, romance: 30, comedy: 20, intensity: 92 }, description: 'Pete Mitchell is forced to train a detachment of graduates for a highly dangerous mission.', year: 2022 },
  { id: 187, title: 'Barbie', genres: ['Comedy', 'Fantasy'], features: { adventure: 75, romance: 20, comedy: 95, intensity: 40 }, description: 'Barbie suffers a crisis that leads her to question her world and her existence.', year: 2023 },
  { id: 188, title: 'John Wick', genres: ['Action', 'Thriller'], features: { adventure: 85, romance: 5, comedy: 10, intensity: 98 }, description: 'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog.', year: 2014 },
  { id: 189, title: 'John Wick: Chapter 4', genres: ['Action', 'Thriller'], features: { adventure: 95, romance: 5, comedy: 10, intensity: 100 }, description: 'John Wick uncovers a path to defeating The High Table, but faces lethal new enemies.', year: 2023 },
  { id: 190, title: 'Mission: Impossible - Fallout', genres: ['Action', 'Spy'], features: { adventure: 98, romance: 15, comedy: 15, intensity: 95 }, description: 'Ethan Hunt and his team race against time after a mission goes wrong.', year: 2018 },
  { id: 191, title: 'The Batman', genres: ['Action', 'Crime'], features: { adventure: 75, romance: 15, comedy: 5, intensity: 92 }, description: 'Batman pursues the Riddler, a serial killer targeting elite Gotham City citizens.', year: 2022 },
  { id: 192, title: 'Joker', genres: ['Crime', 'Drama'], features: { adventure: 15, romance: 5, comedy: 5, intensity: 98 }, description: 'A mentally troubled comedian embarks on a downward spiral of revolution and bloody crime.', year: 2019 },
  { id: 193, title: 'The Wolf of Wall Street', genres: ['Biography', 'Comedy'], features: { adventure: 40, romance: 15, comedy: 95, intensity: 80 }, description: 'The true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall.', year: 2013 },
  { id: 194, title: 'Django Unchained', genres: ['Western', 'Action'], features: { adventure: 85, romance: 20, comedy: 40, intensity: 92 }, description: 'A freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.', year: 2012 },
  { id: 195, title: 'Inglourious Basterds', genres: ['War', 'Action'], features: { adventure: 75, romance: 15, comedy: 35, intensity: 90 }, description: 'A group of Jewish U.S. soldiers plan to assassinate Nazi leaders in occupied France.', year: 2009 },
  { id: 196, title: 'Knives Out', genres: ['Mystery', 'Comedy'], features: { adventure: 30, romance: 10, comedy: 85, intensity: 70 }, description: 'A detective investigates the death of a patriarch of an eccentric, combative family.', year: 2019 },
  { id: 197, title: 'Glass Onion', genres: ['Mystery', 'Comedy'], features: { adventure: 35, romance: 10, comedy: 88, intensity: 65 }, description: 'Tech billionaire Miles Bron invites his friends for a getaway that turns murderous.', year: 2022 },
  { id: 198, title: 'Catch Me If You Can', genres: ['Biography', 'Crime'], features: { adventure: 70, romance: 20, comedy: 60, intensity: 75 }, description: 'A seasoned FBI agent pursues Frank Abagnale Jr. who forged millions of dollars in checks.', year: 2002 },
  { id: 199, title: 'The Social Network', genres: ['Biography', 'Drama'], features: { adventure: 10, romance: 15, comedy: 20, intensity: 85 }, description: 'As Harvard student Mark Zuckerberg creates Facebook, he is sued by the twins who claimed he stole their idea.', year: 2010 },
  { id: 200, title: 'Zodiac', genres: ['Crime', 'Mystery'], features: { adventure: 20, romance: 10, comedy: 5, intensity: 92 }, description: 'Detectives and reporters hunt down a serial killer terrorizing the San Francisco Bay Area.', year: 2007 },
  { id: 201, title: 'Prisoners', genres: ['Crime', 'Drama'], features: { adventure: 25, romance: 5, comedy: 0, intensity: 98 }, description: 'When his daughter is abducted, a desperate father takes matters into his own hands.', year: 2013 },
  { id: 202, title: 'Sicario', genres: ['Action', 'Thriller'], features: { adventure: 60, romance: 5, comedy: 5, intensity: 95 }, description: 'An idealistic FBI agent is enlisted to aid in the escalating war against drugs at the border.', year: 2015 },
  { id: 203, title: 'Arrival', genres: ['Sci-Fi', 'Drama'], features: { adventure: 50, romance: 15, comedy: 5, intensity: 85 }, description: 'A linguist works with the military to communicate with alien lifeforms after massive spaceships touch down.', year: 2016 },
  { id: 204, title: 'Logan', genres: ['Action', 'Drama'], features: { adventure: 80, romance: 10, comedy: 10, intensity: 95 }, description: 'In a future where mutants are nearly extinct, an aging Wolverine must protect a young girl.', year: 2017 },
  { id: 205, title: 'Deadpool', genres: ['Action', 'Comedy'], features: { adventure: 85, romance: 35, comedy: 100, intensity: 80 }, description: 'A wisecracking mercenary gets experimented on and becomes immortal but ugly.', year: 2016 },
  { id: 206, title: 'Black Panther', genres: ['Action', 'Sci-Fi'], features: { adventure: 90, romance: 20, comedy: 25, intensity: 85 }, description: 'T\'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people.', year: 2018 },
  { id: 207, title: 'A Quiet Place', genres: ['Horror', 'Sci-Fi'], features: { adventure: 40, romance: 15, comedy: 5, intensity: 95 }, description: 'A family must navigate their lives in silence to hide from blind but hearing-sensitive creatures.', year: 2018 },
  { id: 208, title: 'Get Out', genres: ['Horror', 'Mystery'], features: { adventure: 30, romance: 20, comedy: 25, intensity: 92 }, description: 'A young African-American visits his white girlfriend\'s parents for the weekend, where his simmering uneasiness reaches a boiling point.', year: 2017 },
  { id: 209, title: 'Hereditary', genres: ['Horror', 'Drama'], features: { adventure: 15, romance: 5, comedy: 0, intensity: 100 }, description: 'A grieving family is haunted by tragic and disturbing occurrences after the death of their secretive grandmother.', year: 2018 },
  { id: 210, title: 'Midsommar', genres: ['Horror', 'Drama'], features: { adventure: 20, romance: 30, comedy: 15, intensity: 95 }, description: 'A couple travels to Sweden to visit a rural hometown\'s fabled midsummer festival, which becomes a violent competition.', year: 2019 },
  { id: 211, title: 'The Martian', genres: ['Sci-Fi', 'Adventure'], features: { adventure: 90, romance: 10, comedy: 45, intensity: 85 }, description: 'An astronaut becomes stranded on Mars after his team assumes him dead, and must rely on his ingenuity to find a way to signal to Earth.', year: 2015 },
  { id: 212, title: 'Gravity', genres: ['Sci-Fi', 'Thriller'], features: { adventure: 85, romance: 5, comedy: 5, intensity: 95 }, description: 'Two astronauts work together to survive after an accident leaves them stranded in space.', year: 2013 },
  { id: 213, title: 'Ford v Ferrari', genres: ['Biography', 'Sports'], features: { adventure: 60, romance: 15, comedy: 35, intensity: 85 }, description: 'American car designer Carroll Shelby and driver Ken Miles battle corporate interference to build a revolutionary race car for Ford.', year: 2019 },
  { id: 214, title: 'The Revenant', genres: ['Action', 'Adventure'], features: { adventure: 95, romance: 5, comedy: 5, intensity: 98 }, description: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.', year: 2015 },
  { id: 215, title: '1917', genres: ['War', 'Drama'], features: { adventure: 85, romance: 5, comedy: 5, intensity: 98 }, description: 'Two young British soldiers during the First World War are given an impossible mission: deliver a message deep in enemy territory.', year: 2019 },
  { id: 216, title: 'Dunkirk', genres: ['War', 'Action'], features: { adventure: 80, romance: 5, comedy: 5, intensity: 95 }, description: 'Allied soldiers from Belgium, the British Commonwealth and Empire, and France are surrounded by the German Army.', year: 2017 },
  { id: 217, title: 'Saving Private Ryan', genres: ['War', 'Drama'], features: { adventure: 85, romance: 10, comedy: 10, intensity: 98 }, description: 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.', year: 1998 },
  { id: 218, title: 'Gladiator', genres: ['Action', 'Drama'], features: { adventure: 85, romance: 20, comedy: 5, intensity: 95 }, description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.', year: 2000 },
  { id: 219, title: 'The Matrix Reloaded', genres: ['Action', 'Sci-Fi'], features: { adventure: 90, romance: 30, comedy: 10, intensity: 88 }, description: 'Neo and the rebel leaders estimate that they have 72 hours until 250,000 probes discover Zion and destroy it.', year: 2003 },
  { id: 220, title: 'Pirates of the Caribbean: The Curse of the Black Pearl', genres: ['Action', 'Adventure'], features: { adventure: 95, romance: 35, comedy: 75, intensity: 80 }, description: 'Blacksmith Will Turner teams up with eccentric pirate "Captain" Jack Sparrow to save his love.', year: 2003 },
  { id: 221, title: 'Casino Royale', genres: ['Action', 'Spy'], features: { adventure: 85, romance: 35, comedy: 15, intensity: 92 }, description: 'After earning 00 status and a licence to kill, Secret Agent James Bond sets out on his first mission.', year: 2006 },
  { id: 222, title: 'Skyfall', genres: ['Action', 'Spy'], features: { adventure: 88, romance: 15, comedy: 15, intensity: 90 }, description: 'James Bond\'s loyalty to M is tested when her past comes back to haunt her.', year: 2012 },
  { id: 223, title: 'The Bourne Identity', genres: ['Action', 'Mystery'], features: { adventure: 85, romance: 20, comedy: 10, intensity: 90 }, description: 'A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins.', year: 2002 },
  { id: 224, title: 'Die Hard', genres: ['Action', 'Thriller'], features: { adventure: 85, romance: 15, comedy: 30, intensity: 95 }, description: 'An NYPD officer tries to save his wife and several others taken hostage by German terrorists.', year: 1988 },
  { id: 225, title: 'Lethal Weapon', genres: ['Action', 'Comedy'], features: { adventure: 80, romance: 10, comedy: 65, intensity: 85 }, description: 'Two newly paired cops who are complete opposites must put aside their differences to catch a gang of drug smugglers.', year: 1987 },
  { id: 226, title: 'The Terminator', genres: ['Action', 'Sci-Fi'], features: { adventure: 85, romance: 25, comedy: 5, intensity: 95 }, description: 'A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg.', year: 1984 },
  { id: 227, title: 'E.T. the Extra-Terrestrial', genres: ['Family', 'Sci-Fi'], features: { adventure: 85, romance: 10, comedy: 35, intensity: 65 }, description: 'A troubled child summons the courage to help a friendly alien escape Earth.', year: 1982 },
  { id: 228, title: 'Back to the Future', genres: ['Adventure', 'Comedy'], features: { adventure: 95, romance: 30, comedy: 85, intensity: 75 }, description: 'A 17-year-old high school student is accidentally sent thirty years into the past in a time-traveling DeLorean.', year: 1985 },
  { id: 229, title: 'Indiana Jones and the Raiders of the Lost Ark', genres: ['Action', 'Adventure'], features: { adventure: 100, romance: 30, comedy: 40, intensity: 88 }, description: 'In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant.', year: 1981 },
  { id: 230, title: 'Jaws', genres: ['Thriller', 'Horror'], features: { adventure: 75, romance: 10, comedy: 15, intensity: 95 }, description: 'When a killer shark unleashes chaos on a beach community off Cape Cod, it\'s up to a local sheriff to hunt it down.', year: 1975 },
  { id: 231, title: 'Rocky', genres: ['Drama', 'Sports'], features: { adventure: 40, romance: 55, comedy: 20, intensity: 85 }, description: 'A small-time Philadelphia boxer gets a supremely rare chance to fight the world heavyweight champion.', year: 1976 },
  { id: 232, title: 'The Shining', genres: ['Horror', 'Drama'], features: { adventure: 20, romance: 10, comedy: 5, intensity: 98 }, description: 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence.', year: 1980 },
  { id: 233, title: 'Psycho', genres: ['Horror', 'Mystery'], features: { adventure: 15, romance: 15, comedy: 5, intensity: 95 }, description: 'A Phoenix secretary embezzles $40,000 from her employer\'s client, goes on the run, and checks into a remote motel.', year: 1960 },
  { id: 234, title: 'Casablanca', genres: ['Drama', 'Romance'], features: { adventure: 30, romance: 95, comedy: 15, intensity: 75 }, description: 'A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband.', year: 1942 },
  { id: 235, title: 'Citizen Kane', genres: ['Drama', 'Mystery'], features: { adventure: 15, romance: 20, comedy: 10, intensity: 70 }, description: 'Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance.', year: 1941 },
  { id: 236, title: '2001: A Space Odyssey', genres: ['Sci-Fi', 'Adventure'], features: { adventure: 85, romance: 5, comedy: 5, intensity: 80 }, description: 'After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins.', year: 1968 },
  { id: 237, title: 'A Clockwork Orange', genres: ['Crime', 'Sci-Fi'], features: { adventure: 30, romance: 10, comedy: 25, intensity: 90 }, description: 'In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment.', year: 1971 },
  { id: 238, title: 'Blade Runner', genres: ['Sci-Fi', 'Thriller'], features: { adventure: 65, romance: 35, comedy: 5, intensity: 85 }, description: 'A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth.', year: 1982 },
  { id: 239, title: 'The Thing', genres: ['Horror', 'Sci-Fi'], features: { adventure: 50, romance: 5, comedy: 5, intensity: 98 }, description: 'A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.', year: 1982 },
  { id: 240, title: 'Aliens', genres: ['Action', 'Sci-Fi'], features: { adventure: 90, romance: 10, comedy: 15, intensity: 95 }, description: 'Ellen Ripley is rescued after 57 years in stasis and joins colonial marines to investigate a colony\'s silence.', year: 1986 },
  { id: 241, title: 'Predator', genres: ['Action', 'Sci-Fi'], features: { adventure: 85, romance: 5, comedy: 20, intensity: 90 }, description: 'A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.', year: 1987 },
  { id: 242, title: 'RoboCop', genres: ['Action', 'Sci-Fi'], features: { adventure: 75, romance: 15, comedy: 35, intensity: 88 }, description: 'In a dystopic and crime-ridden Detroit, a terminally wounded cop returns to the force as a powerful cyborg haunted by submerged memories.', year: 1987 },
  { id: 243, title: 'Total Recall', genres: ['Action', 'Sci-Fi'], features: { adventure: 85, romance: 25, comedy: 40, intensity: 85 }, description: 'When a man goes for virtual vacation memories of the planet Mars, an unexpected and harrowing series of events forces him to go to the planet for real.', year: 1990 },
  { id: 244, title: 'The Fifth Element', genres: ['Action', 'Sci-Fi'], features: { adventure: 90, romance: 40, comedy: 70, intensity: 75 }, description: 'In the colorful future, a cab driver unwittingly becomes the central figure in the search for a legendary cosmic weapon.', year: 1997 },
  { id: 245, title: 'Men in Black', genres: ['Action', 'Comedy'], features: { adventure: 80, romance: 15, comedy: 95, intensity: 70 }, description: 'A police officer joins a secret organization that polices and monitors extraterrestrial interactions on Earth.', year: 1997 },
  { id: 246, title: 'Independence Day', genres: ['Action', 'Sci-Fi'], features: { adventure: 95, romance: 30, comedy: 50, intensity: 85 }, description: 'The aliens are coming and their goal is to invade and destroy Earth.', year: 1996 },
  { id: 247, title: 'The Truman Show', genres: ['Comedy', 'Drama'], features: { adventure: 30, romance: 40, comedy: 75, intensity: 65 }, description: 'An insurance salesman discovers his whole life is actually a reality TV show.', year: 1998 },
  { id: 248, title: 'Good Will Hunting', genres: ['Drama', 'Romance'], features: { adventure: 15, romance: 65, comedy: 35, intensity: 75 }, description: 'Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.', year: 1997 },
  { id: 249, title: 'Dead Poets Society', genres: ['Drama', 'Comedy'], features: { adventure: 20, romance: 20, comedy: 40, intensity: 80 }, description: 'Maverick teacher John Keating uses poetry to embolden his boarding school students to new heights of self-expression.', year: 1989 },
  { id: 250, title: 'Titanic', genres: ['Drama', 'Romance'], features: { adventure: 60, romance: 100, comedy: 15, intensity: 85 }, description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.', year: 1997 }
];

const demoUsers = [
  { name: "Aisha", ratings: { 1: 5, 2: 3, 3: 4, 107: 5, 209: 4 } },
  { name: "Rahul", ratings: { 1: 3, 2: 4, 3: 5, 176: 5, 180: 4 } },
  { name: "Meera", ratings: { 1: 2, 2: 5, 3: 4, 9: 5, 38: 4 } },
  { name: "Jon", ratings: { 1: 4, 2: 5, 3: 2, 224: 5, 226: 4 } },
  { name: "Lina", ratings: { 1: 4, 2: 3, 3: 5, 111: 5, 112: 4 } }
];

const users = demoUsers.map(u => u.name);

// Inject demo user ratings directly into the movies array
movies.forEach(movie => {
  movie.ratings = {};
  demoUsers.forEach(user => {
    if (user.ratings[movie.id] !== undefined) {
      movie.ratings[user.name] = user.ratings[movie.id];
    }
  });
});

const genres = [...new Set(movies.flatMap(movie => movie.genres))].sort();

const state = {
  selectedGenres: new Set(),
  sliders: { adventure: 70, romance: 20, comedy: 45, intensity: 60 },
  userRatings: { 1: 5, 2: 3, 5: 4, 8: 2 },
  theme: document.documentElement.getAttribute("data-theme") || "dark"
};

const genreGrid = document.getElementById("genre-grid");
const pickedList = document.getElementById("picked-list");
const recommendationsEl = document.getElementById("recommendations");
const similarUsersEl = document.getElementById("similar-users");
const catalogList = document.getElementById("catalog-list");
const statusLine = document.getElementById("status-line");

const sliderMap = [
  { key: "adventure", input: document.getElementById("adventure-range"), value: document.getElementById("adventure-value") },
  { key: "romance", input: document.getElementById("romance-range"), value: document.getElementById("romance-value") },
  { key: "comedy", input: document.getElementById("comedy-range"), value: document.getElementById("comedy-value") },
  { key: "intensity", input: document.getElementById("intensity-range"), value: document.getElementById("intensity-value") }
];

// Debounce helper for real-time slider updates
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => { clearTimeout(timeout); func(...args); };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debouncedRecommend = debounce(renderRecommendations, 250);

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  const button = document.querySelector("[data-theme-toggle]");
  button.innerHTML = theme === "dark"
    ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
    : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg>`;
}

function renderGenres() {
  genreGrid.innerHTML = genres.map((genre) => {
    const active = state.selectedGenres.has(genre) ? "active" : "";
    return `<button class="genre-chip ${active}" type="button" data-genre="${genre}">${genre}</button>`;
  }).join("");
}

function updateSliderFill(input) {
  const percent = ((+input.value - +input.min) / (+input.max - +input.min)) * 100;
  input.style.setProperty("--range-fill", `${percent}%`);
}

function bumpValue(el, value) {
  el.textContent = value;
  el.classList.remove("bump");
  void el.offsetWidth;
  el.classList.add("bump");
}

function renderPickedList() {
  const featured = movies.slice(0, 8);
  pickedList.innerHTML = featured.map((movie) => {
    const ratingButtons = [1, 2, 3, 4, 5].map((rating) => {
      const active = state.userRatings[movie.id] === rating ? "active" : "";
      return `<button type="button" class="rating-btn ${active}" data-movie-id="${movie.id}" data-rating="${rating}">${rating}</button>`;
    }).join("");
    return `
      <article class="movie-item">
        <div class="movie-head">
          <div class="movie-title">${movie.title}</div>
          <div class="meta-line">${movie.genres.join(" · ")}</div>
        </div>
        <div class="rating-row">${ratingButtons}</div>
      </article>`;
  }).join("");
}

function renderCatalog() {
  catalogList.innerHTML = movies.map((movie) => `
    <article class="catalog-card"><strong>${movie.title}</strong><span>${movie.genres.join(" · ")}</span></article>
  `).join("");
}

// ------------------------------------------------------------------
// CORE RECOMMENDATION MATH (COMPLETELY REWRITTEN FOR ACCURACY)
// ------------------------------------------------------------------

// 1. Inverse Mean Absolute Error for precise slider matching
function calculateContentMatch(sliders, features) {
  let diffSum = 0;
  const maxDiff = 100 * 4; // 4 categories, max difference is 100 each
  
  diffSum += Math.abs(sliders.adventure - features.adventure);
  diffSum += Math.abs(sliders.romance - features.romance);
  diffSum += Math.abs(sliders.comedy - features.comedy);
  diffSum += Math.abs(sliders.intensity - features.intensity);
  
  // Returns a percentage (0 to 1) where 1 means sliders match features exactly
  return 1 - (diffSum / maxDiff);
}

// 2. Strict Filter (Passes if it has AT LEAST ONE selected genre, or if none selected)
function passesGenreFilter(movie) {
  if (state.selectedGenres.size === 0) return true;
  return movie.genres.some(g => state.selectedGenres.has(g));
}

// 3. Proportional Genre Score (Bonus for hitting MULTIPLE selected genres)
function getGenreMatchScore(movie) {
  if (state.selectedGenres.size === 0) return 1; // Neutral if no genres picked
  
  let matchCount = 0;
  movie.genres.forEach(g => {
    if (state.selectedGenres.has(g)) matchCount++;
  });
  
  return matchCount / state.selectedGenres.size;
}

// 4. Standard Cosine Similarity for finding similar users based on ratings
function cosineSimilarity(a, b) {
  const keys = Object.keys(a);
  let dot = 0, magA = 0, magB = 0;
  for (const key of keys) {
    dot += a[key] * b[key];
    magA += a[key] * a[key];
    magB += b[key] * b[key];
  }
  return (!magA || !magB) ? 0 : dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

function getUserVector(name) {
  const vector = {};
  movies.forEach(movie => { vector[movie.id] = movie.ratings[name] || 0; });
  return vector;
}

function getCurrentUserVector() {
  const vector = {};
  movies.forEach(movie => { vector[movie.id] = state.userRatings[movie.id] || 0; });
  return vector;
}

function getSimilarUsers() {
  const currentUser = getCurrentUserVector();
  return users
    .map(name => ({ name, similarity: cosineSimilarity(currentUser, getUserVector(name)) }))
    .sort((a, b) => b.similarity - a.similarity);
}

// 5. Smarter Collaborative Scoring (Only counts users who ACTUALLY rated the movie)
function getCollaborativeScore(movie, similarUsers) {
  const raters = similarUsers.filter(u => movie.ratings[u.name] > 0).slice(0, 5);
  
  if (raters.length === 0) return 0;

  let weightedSum = 0;
  let similaritySum = 0;

  raters.forEach(user => {
    // Normalize rating to 0-1 range (e.g., 5 stars = 1.0, 3 stars = 0.6)
    weightedSum += (movie.ratings[user.name] / 5) * user.similarity; 
    similaritySum += user.similarity;
  });

  return similaritySum > 0 ? (weightedSum / similaritySum) : 0;
}

// ------------------------------------------------------------------

function renderRecommendations() {
  const similarUsers = getSimilarUsers();
  
  let filteredMovies = movies.filter(movie => !state.userRatings[movie.id] && passesGenreFilter(movie));

  if (filteredMovies.length === 0) {
    recommendationsEl.innerHTML = `<div class="empty-state">No matching titles found. Try adjusting genres.</div>`;
    statusLine.textContent = "Awaiting input...";
    return;
  }

  const ranked = filteredMovies
    .map(movie => {
      const content = calculateContentMatch(state.sliders, movie.features);
      const collaborative = getCollaborativeScore(movie, similarUsers);
      const genreScore = getGenreMatchScore(movie);
      
      let finalScore;
      
      if (collaborative > 0) {
        // Hybrid blending: Content 45%, Collab 35%, Genre Overlap 20%
        finalScore = (content * 0.45) + (collaborative * 0.35) + (genreScore * 0.20);
      } else {
        // Content heavily weighted, genre acts as a booster
        finalScore = (content * 0.70) + (genreScore * 0.30);
      }

      return { ...movie, content, collaborative, finalScore };
    })
    .sort((a, b) => b.finalScore - a.finalScore)
    .slice(0, 5);

  recommendationsEl.innerHTML = ranked.map((movie, index) => {
    const scorePercent = Math.round(movie.finalScore * 100);
    const contentPercent = Math.round(movie.content * 100);
    // Display N/A if there was no collaborative data, rather than misleading the user with 0%
    const collabText = movie.collaborative > 0 ? `${Math.round(movie.collaborative * 100)}%` : 'N/A';
    
    return `
      <article class="recommendation-card" style="animation-delay:${index * 70}ms;">
        <div class="recommendation-head">
          <div><div class="rec-title">${movie.title}</div><div class="rec-meta">${movie.genres.join(" · ")}</div></div>
          <span class="score-badge">${scorePercent}%</span>
        </div>
        <div class="match-bar"><div class="match-fill" style="--target-width:${scorePercent}%"></div></div>
        <div class="rec-meta">Content: ${contentPercent}% · Collab: ${collabText}</div>
      </article>`;
  }).join("");

  similarUsersEl.innerHTML = similarUsers.slice(0, 4).map((user) => `
    <article class="similar-user-card">
      <div class="similar-user-head">
        <div><div class="user-name">${user.name}</div><div class="user-meta">Preference overlap</div></div>
        <div class="user-score">${Math.round(user.similarity * 100)}%</div>
      </div>
    </article>
  `).join("");

  statusLine.textContent = `Top match generated: ${ranked[0].title}.`;
  
  // Animate the widths
  setTimeout(() => {
    document.querySelectorAll('.match-fill').forEach(el => {
      el.style.width = el.style.getPropertyValue('--target-width');
    });
  }, 50);
}

// Event Listeners for real-time UI updates
genreGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-genre]");
  if (!button) return;
  const genre = button.dataset.genre;
  state.selectedGenres.has(genre) ? state.selectedGenres.delete(genre) : state.selectedGenres.add(genre);
  renderGenres();
  debouncedRecommend(); 
});

pickedList.addEventListener("click", (event) => {
  const button = event.target.closest(".rating-btn");
  if (!button) return;
  const movieId = Number(button.dataset.movieId);
  const rating = Number(button.dataset.rating);
  state.userRatings[movieId] === rating ? delete state.userRatings[movieId] : state.userRatings[movieId] = rating;
  renderPickedList();
  debouncedRecommend(); 
});

sliderMap.forEach(({ key, input, value }) => {
  input.addEventListener("input", () => {
    state.sliders[key] = Number(input.value);
    bumpValue(value, input.value);
    updateSliderFill(input);
    debouncedRecommend(); 
  });
});

document.getElementById("recommend-btn").addEventListener("click", () => {
  renderRecommendations();
  
  // Find the recommendations panel and smoothly scroll it into view
  const recPanel = document.getElementById("recommendations").closest(".panel");
  if (recPanel) {
    recPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

document.getElementById("reset-btn").addEventListener("click", () => {
  state.selectedGenres.clear();
  state.sliders = { adventure: 65, romance: 20, comedy: 35, intensity: 65 };
  state.userRatings = {};
  sliderMap.forEach(({ key, input, value }) => {
    input.value = state.sliders[key];
    bumpValue(value, state.sliders[key]);
    updateSliderFill(input);
  });
  renderGenres();
  renderPickedList();
  renderRecommendations();
});

document.querySelector("[data-theme-toggle]").addEventListener("click", () => {
  setTheme(state.theme === "dark" ? "light" : "dark");
});

function init() {
  setTheme(state.theme);
  sliderMap.forEach(({ input }) => updateSliderFill(input));
  renderGenres();
  renderPickedList();
  renderCatalog();
  renderRecommendations();
}

init();