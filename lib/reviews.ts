// Customer reviews from the Red Carpet Plumbing Google Business Profile.
// Review text is customer data and is rendered exactly as written. Do not
// trim, reformat, or correct it. No dates, ratings, star counts, or avatars
// are stored on purpose.

export type Review = {
  id: string;
  displayName: string;
  text: string;
  topics: string[];
  carouselOrder?: number; // present only for the 24 homepage carousel reviews
};

// Google "write a review" URL, supplied by the owner. While empty, the
// "Leave a Google review" button and the footer write-a-review link do not render.
export const GOOGLE_REVIEW_URL: string = "https://g.page/r/CY85V5YRvnXGEAE/review";

// Existing Google Business Profile URL, the same one used in sameAs on the site.
export const GOOGLE_PROFILE_URL: string = "https://share.google/oY5LcfC0lhWJXVjJj";

export const reviews: Review[] = [
  { id: "chrissy-t", displayName: "Chrissy T.", carouselOrder: 1, topics: ["water-heater", "emergency"],
    text: `We had an excellent experience when our hot water heater went out. They responded immediately to get it replaced and offered us wonderful customer service. We would use them again!` },
  { id: "lou-r", displayName: "Lou R.", carouselOrder: 2, topics: ["leak", "slab-leak"],
    text: `My wife and I experienced a leak in our plumbing that was coming from the foundation. After not getting any help from our insurance, we called Red Carpet Plumbing and got our pipes routed. Excellent service, and most importantly my wife was home at the time and their operation couldn’t have been any smoother. Totally respectful in every way possible. Could not recommend them enough!` },
  { id: "tim-h", displayName: "Tim H.", carouselOrder: 3, topics: ["general"],
    text: `Fantastic plumbing. They come and fix the problem. They told us exactly what we needed to do and were not concerned about upselling us or charging for things we didn't need. Great service.` },
  { id: "jason-k", displayName: "Jason K.", topics: ["slab-leak", "water-heater", "faucet-sink"],
    text: `I have been using Red Carpet Plumbing for almost 20 years. They have helped with all of my plumbing needs, big and small. Everything from rerouting my hot water because of a slab foundation leak, to replacing my hot water heater, to fixing leaking sinks and showers and everything in between. They have always been knowledgeable and friendly. I have been satisfied with the work done, as well as the prices. I have recommended them to my family and friends throughout the years and will continue to call them when I need help.` },
  { id: "victoria-k", displayName: "Victoria K.", carouselOrder: 6, topics: ["water-heater"],
    text: `Had a great experience with Red Carpet Plumbing, they truly live up to their name. Came back from a trip to an empty water heater. Mind you not I live in a condo and the water heater is installed in a guest closet. With speedy service and great pricing we had our water heater installed in no time and back to warm showers. Thank you Red Carpet Plumbing you were awesome!` },
  { id: "monica-p", displayName: "Monica P.", carouselOrder: 8, topics: ["general"],
    text: `Quick friendly efficient also a human answers the phone` },
  { id: "barbara-h", displayName: "Barbara H.", topics: ["drain", "toilet", "water-heater", "leak"],
    text: `I’ve used Red Carpet Plumbing for years whenever I have any plumbing issues. Most recently, I had a drain issue causing problems with my dishwasher not draining properly. I called and they sent someone out right away- he found and fixed the problem then patiently waited for my dishwasher to reach the emptying stage to make sure it was working properly. Over the years I’ve also had them install new toilets, install a water heater , and even fix a water main leak. Their technicians have always been professional, efficient, and friendly, and I’ve never had a mess to clean up after they left. If you have a plumbing issue, large or small, I highly recommend this company.` },
  { id: "william-b", displayName: "William B.", carouselOrder: 11, topics: ["general"],
    text: `This was my first time using Red Carpet Plumbing and I couldn’t be happier. I was able to get a same day appointment and the technician arrived on time. He listened to the problem I was having and took care of it quickly. After he completed the job he explained exact what he did and what I could do as preventative maintenance. I’m thoroughly satisfied with Red Carpet Plumbing and would recommend them to anyone. Thank you!` },
  { id: "gina-y", displayName: "Gina Y.", carouselOrder: 13, topics: ["leak", "outdoor-faucet"],
    text: `Red Carpet Plumbing serviced an exterior hose bib in our front entryway, and several months later it started leaking. We asked them to come back out to check and fix the issue and they did. Thank you for standing behind your work!` },
  { id: "rick-k", displayName: "Rick K.", carouselOrder: 14, topics: ["gas-line"],
    text: `The gentleman came to our house and was able to complete the conversion to attach my new gas grill to the house gas line.` },
  { id: "marcel-k", displayName: "Marcel K.", carouselOrder: 16, topics: ["general"],
    text: `Excellent plumbing work at fair prices. Communication was very clear and consistent. They let you know what they can do, when they can do it, and then deliver as promised. Great family-owned business.` },
  { id: "jose-g", displayName: "Jose G.", carouselOrder: 20, topics: ["general"],
    text: `When we have plumbing needs, we always use Red Carpet Plumbing. They get to us in a timely manner and do excellent work. They give you honest pricing and don't nickel and dime you. They give you everything up front and we appreciate that. I highly recommend using Red Carpet Plumbing for all your plumbing issues and needs.` },

  { id: "sheila-c", displayName: "Sheila C.", carouselOrder: 23, topics: ["faucet-sink"],
    text: `Red Carpet hooked up two new bathroom faucets with expert professionalism. They were courteous, professional and arrived exactly when they said. Their fees were more than reasonable and the work was done super fast! Will definitely use Red Carpet Plumbing again!!!` },
  { id: "jessica-r", displayName: "Jessica R.", carouselOrder: 4, topics: ["leak", "emergency"],
    text: `Saved me from another water disaster this week!! Love these guys for getting to our problems as quickly as possible!!` },
  { id: "steve-b", displayName: "Steve B.", carouselOrder: 7, topics: ["emergency"],
    text: `Very professional company who answered the call when I had a plumbing emergency on a Saturday evening.` },
  { id: "tasha-r", displayName: "Tasha R.", carouselOrder: 12, topics: ["emergency"],
    text: `These guys came to the rescue after business hours. There was 100% communication and when it was said and done, a super fair price. We hope to continue to use their business moving forward with upcoming projects. Thank you Red Carpet!` },
  { id: "dean-o", displayName: "Dean O.", topics: ["water-heater", "emergency"],
    text: `We started are morning off with a river of water in the garage. Immediately looked for a plumber online and found Red Carpet. Clint came right out and addressed the situation and replaced the water tank. A five star review from our house .Fast, Friendly, and excellent customer service. Very Professional you won't be disappointed. Thank you Clint!` },
  { id: "brooke-h", displayName: "Brooke H.", carouselOrder: 10, topics: ["water-heater"],
    text: `My hot water heater died and I needed service right away. Red Carpet Plumbing was able to come out that afternoon and replace it. The staff was great to deal with and they left the area clean. I would definitely use their service again. Thank you!` },
  { id: "yolanda-d", displayName: "Yolanda D.", carouselOrder: 24, topics: ["water-heater"],
    text: `I had my water heater replaced years ago.Excellent job Fast,dependable and professional Definitely recommend and will call them again in the future when it’s time to change my water heater.` },
  { id: "jackie-m", displayName: "Jackie M.", carouselOrder: 15, topics: ["water-heater", "accessible-bathroom"],
    text: `We have used Red Carpet for 20 years and they never disappoint. Water heaters, plumbing repair, and they helped in the conversion of our guest bathroom into a handicapped equipped bathroom. Always great work.` },
  { id: "douglas-w", displayName: "Douglas W.", topics: ["water-softener"],
    text: `Bobby was professional and did a stunning job installing our water softener! I would recommend Bobby any time!` },
  { id: "gabriel-h-barbershop", displayName: "Gabriel H.", carouselOrder: 18, topics: ["leak", "commercial"],
    text: `I had a leak underneath a sink in my barbershop and didn’t hesitate to call Red Carpet. The part needed was a hard to get part but the tech got us up and running until we got the part needed. They have yet to disappoint whether for our home, friends or business !` },
  { id: "tom-p", displayName: "Tom P.", carouselOrder: 21, topics: ["toilet", "faucet-sink", "leak", "water-heater"],
    text: `We have used Red Carpet for many years for all different purposes. From changing out toilets, sink faucets, leak fixes and water heaters. Always prompt with great service and very reasonable pricing. Everything is explained as they work. Great company. Will use them for anything needed in the years to come.` },
  { id: "john-r", displayName: "John R.", carouselOrder: 17, topics: ["outdoor-faucet", "general"],
    text: `We have used Red Carpet plumbing for numerous projects for two homes and for more than 12 years. They respond quickly and keep us informed throughout the projects. The plumbers and techs are always professional and knowledgeable. The completion of the latest project in replacing an outdoor faucet is an excellent example of their work. Call them!` },
  { id: "jordan-b", displayName: "Jordan B.", topics: ["toilet"],
    text: `We've had our home for 20 years now. Any time we have needed plumbing work done, we've called Red Carpet. Tina, who answers the phone, is always super nice and helpful. And Jorge, the technician, has been to our home various times and is great to work with. This time around I needed two toilets fixed and he got the work done super quickly and professionally in less than an hour. Call Red Carpet plumbing with confidence that you'll get great service and a fair price.` },
  { id: "rondaelizabeth1", displayName: "Rondaelizabeth1", topics: ["general"],
    text: `Honestly I’ve used Red Carpet plumbing for the past 5 years! We’ve recently moved and have used them again in our new home! Fair, trustworthy and family owned! I cannot say enough about the level of customer service we’ve received from RCP! Great to know that there are still honest companies out there to provide service with honest workers and fair pricing! Thank you to the owners and staff at Red Carpet Plumbing! Keep doing what you do!!!` },
  { id: "doris-l", displayName: "Doris L.", carouselOrder: 19, topics: ["general"],
    text: `Had a great experience with Red Carpet Plumbing. They showed up on time, were friendly and professional, and got the job done quickly. Everything was explained clearly and the pricing was fair. Super easy to work with and the quality of work was solid. Would definitely use them again and recommend them to anyone needing a plumber!` },
  { id: "jasmyne-c", displayName: "Jasmyne C.", topics: ["general"],
    text: `Red Carpet Plumbing was great to work with! They were quick, professional, and made everything super easy. They showed up when they said they would and got the job done without any hassle. Ms. Tina is seriously the best! She was so sweet, helpful, and made sure everything went smoothly. You can tell she really cares about the customers. Definitely recommend them if you need plumbing work done!` },
  { id: "samantha-c", displayName: "Samantha C.", topics: ["general"],
    text: `Red Carpet Plumbing is simply the BEST! They are honest, arrive on time, they do the work right the first time and kept my home clean while they worked. The prices are by far the best in all of Vegas! I highly recommend Red Carpet Plumbing!` },
  { id: "donna-s", displayName: "Donna S.", topics: ["general"],
    text: `Great company really nice people . Bobby , Clint and all Carpet Plumbing staff has provided us with exceptional service for many many years. They are professional, knowledgeable and genuinely care about getting your issues resolved as quickly as possible.` },
  { id: "bobs", displayName: "Bobs", topics: ["general"],
    text: `We have used Red carpet Plumbing for several years for all our plumbing needs. They are very experienced, very quick response time and extremely trust worthy. Highly recommend Red Carpet Plumbing for all plumbing issues !` },
  { id: "chuckpod", displayName: "ChuckPod", topics: ["general"],
    text: `Red Carpet is definitely a throw-back company. I mean that in the best way possible. They aren't a part of a big corporation, trying to nickel and dime you any way they can. Their service is personable, up-front and honest. They are like having a neighbor in the business. RCP is my plumber because of a referral I got from a friend - not because they had the fanciest ads or the most ostentatious trucks.` },
  { id: "jerylann-g", displayName: "Jerylann G.", carouselOrder: 9, topics: ["general"],
    text: `Wonderful company. They have the utmost integrity and endeavour to do the best job for each customer. I highly recommend them. They have never disappointed me. Wish that all small businesses were as conscientious as they are.` },
  { id: "rina-s", displayName: "Rina S.", topics: ["general"],
    text: `Clint was super nice & helped with any questions. The service was quick & easy! Pricing also fit to what we had researched due to cost of supplies & labor. We will definitely be using them for future plumbing needs. Thanks again Clint & Red Carpet Plumbing!` },
  { id: "claudia-h", displayName: "Claudia H.", carouselOrder: 5, topics: ["general"],
    text: `I’ve used this company for a few different repairs. Always on time, very professional. And always fair price. Thank you for many years of service!!!` },
  { id: "diane-c", displayName: "Diane C.", topics: ["emergency"],
    text: `My "go to" plumbing company for my listings. Their experienced and professional team has bailed me out of emergency situations quite a few times.` },
  { id: "gabriel-h-2022", displayName: "Gabriel H.", topics: ["general"],
    text: `This was the 4th time we used Red Carpet Plumbing and every time has been a great experience no matter which tech they send. Colby was a rockstar! I feel they are an HONEST business and genuinely want to help.` },
  { id: "jonas-l", displayName: "Jonas L.", topics: ["general"],
    text: `Highly recommend... This plumbing company deserves more than a 5 STAR. Laurie is phenomenal. Red Carpet is definitely the perfect fit for this company. You guys are awesome!` },
  { id: "jenette-m", displayName: "Jenette M.", topics: ["general"],
    text: `Mike was assigned to service my place and he is very detailed about the cause of the problem.He just didn't look at the cause of the problem but he uses his bare hand to exactly look and feel where the root of the problem is coming from and he answers every detailed questions thrown at him.Very nice and hard working guy..Red carpet had the best, best price ever, answered your call right away and service you asap..thank you mike.` },
  { id: "edward-g", displayName: "Edward G.", topics: ["general"],
    text: `Excellent in every way!Hand's down the most professional group of people I've dealt with in many year's.Use this family owned company for your plumbing need's and you will be very happy.Thank's again,guy's!` },
  { id: "patrick-j", displayName: "Patrick J.", carouselOrder: 22, topics: ["emergency"],
    text: `Called them, showed up in 30 minutes, fixed my plumbing issues right away. Just awesome.` },
  { id: "kimberly-g", displayName: "Kimberly G.", topics: ["general"],
    text: `Excellent service, service techs are amazing have been using the company for years. The owners are amazing.` },
  { id: "mario-e", displayName: "Mario E.", topics: ["general"],
    text: `Excellent service and got the job done QUICK!! Thanks a bunch. Highly recommend` },
  { id: "tina-h", displayName: "Tina H.", topics: ["general"],
    text: `These guys are amazing. Will be using them for all my needs. Staff is very knowledgeable.` },
  { id: "conrad-l", displayName: "Conrad L.", topics: ["general"],
    text: `Great customer service Clint knew exactly what to do and got it done quickly he and his apprentice were very friendly` },
  { id: "donny-d", displayName: "Donny D.", topics: ["general"],
    text: `Very happy with their work and prices.` },
  { id: "maria-y", displayName: "Maria Y.", topics: ["general"],
    text: `The best, very neat and clean job` },
  { id: "judith-p", displayName: "Judith P.", topics: ["general"],
    text: `Competent, efficient, reliable and on time.` },
  { id: "virginia-d", displayName: "Virginia D.", topics: ["general"],
    text: `Responsive and efficient. Highly recommend` },
  { id: "gary-l", displayName: "Gary L.", topics: ["general"],
    text: `Fair prices. Quick service, great people and local.` },
  { id: "willow-b", displayName: "Willow B.", topics: ["general"],
    text: `Red Carpet Plumbing goes above and beyond to do a great job! Allen has been a true joy to work with. Highly recommend!` },
  { id: "aromanova", displayName: "aromanova", topics: ["general"],
    text: `Great job! Friendly fast on time` },
  { id: "larry-t", displayName: "Larry T.", topics: ["general"],
    text: `Great company to work with, very honest and the staff is very professional. Thanks Bobby and Selma` },
];

// Homepage carousel order. Reviews without carouselOrder are not included.
export const carouselReviews: Review[] = reviews
  .filter((r) => r.carouselOrder !== undefined)
  .sort((a, b) => (a.carouselOrder as number) - (b.carouselOrder as number));
