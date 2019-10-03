
// function scrollWtpHeader(){
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementById("wtp-header").style.height = "30px";
//         document.getElementById("wtp-header-h2").style.fontSize = "20px";
//         document.getElementById("cpl-logo-lg").style.display = "none";
//         document.getElementById("cpl-logo-text").style.display = "none";
//         document.getElementById("wtp-header-h3").style.display = "none";
//         document.getElementById("cpl-logo-sm").style.display = "inherit";
//     } else {
//         document.getElementById("wtp-header").style.height = "60px";
//         document.getElementById("wtp-header-h2").style.fontSize = "32px";
//         document.getElementById("cpl-logo-lg").style.display = "inherit";
//         document.getElementById("cpl-logo-text").style.display = "inherit";
//         document.getElementById("wtp-header-h3").style.display = "inherit";
//         document.getElementById("cpl-logo-sm").style.display = "none";
//     }
// }
// window.onscroll = function() {scrollWtpHeader()};
$( document ).ready(function() {
    $("#tagtitle").click(function() {
        $(this).children().toggle()
    });
});
function toggleMenu() {
    var x = document.getElementById("menu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function tagsearch(tag) {
    console.log(tag)
    var tagArray = allTags[tag];
    var tagHTML = '<div class="tagstuff"><h3>Blog Posts tagged "' + tag + '"</h3><ul class="taglist">';
    for (t in tagArray){
        tagHTML += '<li><a href="' + tagArray[t][1] + '">' + tagArray[t][0] + '</li>';
    }
    tagHTML += '</ul></div>'
    $('#maincontentcontainer').empty().append(tagHTML);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


var allData = [      
    {
    title    : "LEGO History",
    url      : "/lego-history/",
    tags     : ["chicago public schools", "chicago youth", "community", "community involvement", "youth"],
    },
    
    {
    title    : "A LEGO Store Adventure",
    url      : "/a-lego-store-adventure/",
    tags     : ["chicago public schools", "chicago youth", "community", "community involvement", "youth"],
    },
    
    {
    title    : "What is a Perfect Community?",
    url      : "/a-perfect-community-2/",
    tags     : ["chicago public schools", "chicago youth", "community involvement", "education", "youth"],
    },
    
    {
    title    : "A Perfect Community",
    url      : "/a-perfect-community/",
    tags     : ["Black History", "chicago public schools", "chicago youth", "community", "community involvement", "Malcolm X", "youth"],
    },
    
    {
    title    : "Christmas Toy Drive",
    url      : "/christmas-toy-drive/",
    tags     : ["chicago public schools", "chicago youth", "Christmas", "community", "community involvement", "youth"],
    },
    
    {
    title    : "How to Give Back To Your Community",
    url      : "/how-to-give-back-to-your-community/",
    tags     : ["chicago public schools", "chicago youth", "community", "community involvement", "youth"],
    },
    
    {
    title    : "Learning About the Holocaust",
    url      : "/learning-about-the-holocaust/",
    tags     : ["chicago public schools", "chicago youth", "community involvement", "U.S. Holocaust Museum", "youth"],
    },
    
    {
    title    : "We The People Media in the News",
    url      : "/we-the-people-media-in-the-news-5/",
    tags     : ["Chicago Mayor Rahm Emanuel", "Chicago Police Department", "Chicago public housing", "chicago public schools", "Jesus Chuy Garcia"],
    },
    
    {
    title    : "We The People Media on CAN TV Part II",
    url      : "/5820/",
    tags     : [""],
    },
    
    {
    title    : "We The People Media ED Guest Hosts Chicago Newsroom",
    url      : "/we-the-people-media-ed-guest-hosts-chicago-newsroom/",
    tags     : ["Chicago", "Chicago Mayor Rahm Emanuel", "Chicago Police Department", "Chicago politics", "Chicago public housing", "chicago youth", "Jesus Chuy Garcia"],
    },
    
    {
    title    : "CTA Changes Keep Riders On Their Toes",
    url      : "/cta-changes-keep-riders-on-their-toes/",
    tags     : ["Blue Line", "Chicago Transit Authority", "chicago youth", "City Colleges", "community involvement", "Red Line", "Ventra", "youth"],
    },
    
    {
    title    : "We The People Media In The News",
    url      : "/we-the-people-media-in-the-news-4/",
    tags     : ["CAN TV", "Chicago Mayor Rahm Emanuel", "Hillary Clinton", "Rahm Emanuel"],
    },
    
    {
    title    : "A Truce in the War on Drugs? Part II.",
    url      : "/a-truce-in-the-war-on-drugs-part-ii/",
    tags     : ["Chicago Police Department", "chicago youth", "crime", "Gary Indiana", "U.S. Attorney General Eric Holder", "war on drugs"],
    },
    
    {
    title    : "A Truce in the War on Drugs? Part I.",
    url      : "/5708/",
    tags     : ["community involvement", "crime", "federal courts", "U.S. Sen. Dick Durbin", "war on drugs", "wrongful imprisonment"],
    },
    
    {
    title    : "Am I Prepared for College?",
    url      : "/am-i-prepared-for-college/",
    tags     : ["chicago public schools", "chicago youth", "community", "community involvement", "Paul Robeson High School"],
    },
    
    {
    title    : "Louder Than a Bomb",
    url      : "/louder-than-a-bomb/",
    tags     : ["chicago public schools", "chicago youth", "Endless Words", "Louder than a Bomb", "Paul Robeson High School"],
    },
    
    {
    title    : "Do Athletes Have Special Privileges?",
    url      : "/do-athletes-have-special-privileges/",
    tags     : ["athletes", "chicago public schools", "chicago youth", "community", "community involvement", "school sports"],
    },
    
    {
    title    : "Experiencing the Holocaust at the Field Museum",
    url      : "/experiencing-the-holocaust-at-the-field-museum/",
    tags     : ["chicago public schools", "chicago youth", "community involvement", "U.S. Holocaust Museum"],
    },
    
    {
    title    : "The Holocaust",
    url      : "/5671/",
    tags     : ["chicago public schools", "chicago youth", "community involvement", "Field Musuem", "U.S. Holocaust Museum"],
    },
    
    {
    title    : "One Of The Greatest Men In History",
    url      : "/one-of-the-greatest-men-in-history/",
    tags     : ["chicago public schools", "chicago youth", "community involvement", "Dr. Martin Luther King", "I have a dream"],
    },
    
    {
    title    : "Do What You Need To So You Can Do What You Want To",
    url      : "/do-what-you-need-to-so-you-can-do-what-you-want-to/",
    tags     : ["chicago public schools", "chicago youth", "community involvement", "sports"],
    },
    
    {
    title    : "The Holocaust and Propaganda",
    url      : "/the-holocaust-and-propaganda/",
    tags     : ["chicago youth", "McCormick Foundation", "Propaganda", "U.S. Holocaust Museum", "youth"],
    },
    
    {
    title    : "Interview with an International Columnist",
    url      : "/5623/",
    tags     : ["chicago public schools", "chicago youth", "community", "community involvement", "McCormick Foundation", "youth"],
    },
    
    {
    title    : "ECO Youth Training Session",
    url      : "/eco-youth/",
    tags     : ["chicago public schools", "chicago youth", "community", "community involvement", "environmental issues", "McCormick Environmental Journalism Program", "McCormick Foundation", "youth"],
    },
    
    {
    title    : "Success through Self Determination",
    url      : "/success-through-self-determination/",
    tags     : ["chicago youth", "community involvement", "DCFS", "Englewood", "McCormick Foundation"],
    },
    
    {
    title    : "Racism in America",
    url      : "/racism-in-america/",
    tags     : ["Anne Frank", "chicago youth", "community involvement", "McCormick Foundation", "racism", "U.S. Holocaust Museum", "youth"],
    },
    
    {
    title    : "Chicago Gangs and Violence: Beyond Downtown",
    url      : "/chicago-gangs-and-violence-beyond-downtown/",
    tags     : ["Chicago Police Department", "chicago public schools", "chicago youth", "community involvement", "McCormick Foundation", "Paul Robeson High School", "violence", "youth"],
    },
    
    {
    title    : "Teenage Love: Is It Real?",
    url      : "/teenage-love-is-it-real/",
    tags     : ["chicago public schools", "chicago youth", "McCormick Foundation", "Paul Robeson High School"],
    },
    
    {
    title    : "What Can Drive a Person to Murder?",
    url      : "/what-can-drive-a-person-to-murder/",
    tags     : ["Chicago public housing", "chicago youth", "community", "community involvement", "crime", "education", "stress", "youth"],
    },
    
    {
    title    : "Eco Youth Reporters Visit Starved Rock",
    url      : "/eco-youth-reporters-visit-starved-rock/",
    tags     : ["chicago public schools", "chicago youth", "community involvement", "environmental issues", "McCormick Environmental Journalism Program", "McCormick Foundation", "Starved Rock State Park", "youth"],
    },
    
    {
    title    : "The New Resident Leadership",
    url      : "/the-new-resident-leadership/",
    tags     : ["Altgeld Gardens", "Cabrini-Green", "CHA", "Chicago", "Chicago public housing", "community involvement", "Plan for Transformation", "politics", "public housing", "public housing residents", "Robert Taylor Homes", "Section 8", "senior citizens"],
    },
    
    {
    title    : "CHA Chiefs Come and Go as Plan Stalls",
    url      : "/cha-chiefs-come-and-go-as-plan-stalls/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "Chicago Mayor Rahm Emanuel", "crime", "demolition", "HUD", "Mayor Richard M. Daley", "Plan for Transformation", "politics", "public housing", "public housing residents"],
    },
    
    {
    title    : "Remembering ABLA Homes' Deverra Beverly",
    url      : "/remembering-abla-homes-deverra-beverly/",
    tags     : ["ABLA", "CHA", "Chicago Housing Authority", "Chicago public housing", "national public housing museum", "politics", "public housing", "public housing residents"],
    },
    
    {
    title    : "My First Kayaking Trip",
    url      : "/my-first-kayaking-trip/",
    tags     : ["Chicago River", "chicago youth", "community involvement", "environmental issues", "McCormick Environmental Journalism Program", "McCormick Foundation", "youth"],
    },
    
    {
    title    : "A River Adventure",
    url      : "/a-river-adventure/",
    tags     : ["Chicago River", "chicago youth", "community involvement", "environmental issues", "McCormick Environmental Journalism Program", "youth"],
    },
    
    {
    title    : "Another CHA Chief Bows Out",
    url      : "/another-cha-chief-bows-out/",
    tags     : ["Cabrini-Green", "CHA", "Chicago", "Chicago Housing Authority", "Chicago Mayor Rahm Emanuel", "demolition", "eviction", "HUD", "Plan for Transformation", "politics", "public housing"],
    },
    
    {
    title    : "We The People Media in the News",
    url      : "/we-the-people-media-in-the-news-3/",
    tags     : ["Chicago Mayor Rahm Emanuel", "Chicago Police Department", "chicago public schools", "Democratic party", "gang violence", "Metra", "politics", "Republican Party"],
    },
    
    {
    title    : "The Invasion of the Great Lakes",
    url      : "/the-invasion-of-the-great-lakes/",
    tags     : ["Asian Carp", "community", "Great Lakes", "Knight Center for Environmental Journalism", "McCormick Environmental Journalism Program", "the enviornment", "youth"],
    },
    
    {
    title    : "Asian Carp is a Man-Made Issue",
    url      : "/asian-carp-is-a-man-made-issue/",
    tags     : ["Asian Carp", "chicago youth", "community", "community involvement", "environmental issues", "Great Lakes", "McCormick Environmental Journalism Program", "McCormick Foundation"],
    },
    
    {
    title    : "Chasing the “Blue Whale of Freshwater”",
    url      : "/chasing-the-blue-whale-of-freshwater/",
    tags     : ["Asian Carp", "chicago youth", "community", "community involvement", "environmental issues", "Great Lakes", "McCormick Foundation", "Notre Dame"],
    },
    
    {
    title    : "Oakwood Shores Update",
    url      : "/oakwood-shores-update/",
    tags     : ["CHA", "Chicago Housing Authority", "Chicago public housing", "community involvement", "Ida B. Wells", "Plan for Transformation", "politics", "public housing residents", "redevelopment", "relocation"],
    },
    
    {
    title    : "We The People Media in the News",
    url      : "/we-the-people-media-in-the-news-2/",
    tags     : ["Cabrini-Green", "CHA", "Chicago Housing Authority", "Chicago Police Department", "Chicago public housing", "chicago public schools", "community involvement", "crime", "Plan for Transformation", "politics", "public housing residents", "redevelopment", "relocation", "Section 8"],
    },
    
    {
    title    : "A Protest Success Story",
    url      : "/a-protest-success-story/",
    tags     : ["Altgeld Gardens", "CHA", "Chicago Housing Authority", "Chicago public housing", "food deserts"],
    },
    
    {
    title    : "What's So Great about Football?",
    url      : "/whats-so-great-about-football/",
    tags     : ["Englewood", "Englewood community", "football", "NFL", "Paul Robeson High School"],
    },
    
    {
    title    : "It's Time to Focus on Bullying",
    url      : "/its-time-to-focus-on-bullying/",
    tags     : ["Bullying", "Englewood community", "Paul Robeson High School"],
    },
    
    {
    title    : "Meet the Real Robeson High School",
    url      : "/meet-the-real-robeson-high-school/",
    tags     : ["chicago public schools", "chicago youth", "Chicago youth violence", "crime", "Englewood community", "gang violence", "Paul Robeson High School", "youth"],
    },
    
    {
    title    : "Frack Attack in Illinois",
    url      : "/frack-attack-in-illinois/",
    tags     : ["chicago youth", "environmental issues", "fracking", "Governor Pat Quinn", "McCormick Foundation", "Michigan State University"],
    },
    
    {
    title    : "The Altgeld Gardens Farmers Market: A Personal Perspective",
    url      : "/the-altgeld-gardens-farmers-market-a-personal-perspective/",
    tags     : ["Altgeld Gardens", "Chicago Housing Authority", "environmental issues", "farmers market", "organic food", "public housing residents"],
    },
    
    {
    title    : "Supreme Court Justice Sonia Sotomayor visits Chicago",
    url      : "/supreme-court-justice-sonia-sotomayor-visits-chicago/",
    tags     : ["public housing", "public housing residents", "Sonia Sotomayor", "U.S. Supreme Court", "youth"],
    },
    
    {
    title    : "Honoring Dr. King's Legacy",
    url      : "/honoring-dr-kings-legacy/",
    tags     : ["Chicago Freedom School", "Dr. Martin Luther King Jr.", "public housing", "youth"],
    },
    
    {
    title    : "Chicago’s Nuclear History",
    url      : "/chicagos-nuclear-history/",
    tags     : ["Henry Moore", "nuclear power", "University of Chicago", "youth"],
    },
    
    {
    title    : "We The People Media ED on Chicago Newsroom",
    url      : "/we-the-people-media-ed-on-chicago-newsroom/",
    tags     : ["Chicago Police Department", "Chicago politics", "crime", "gun-control", "politics", "public housing"],
    },
    
    {
    title    : "Tenants Protest CHA’s Plans for Lathrop",
    url      : "/tenants-protest-chas-plans-for-lathrop/",
    tags     : ["CHA", "Chicago", "Chicago public housing", "Plan for Transformation", "politics", "public housing", "public housing residents", "redevelopment", "relocation"],
    },
    
    {
    title    : "Pilsen Gets Environmental Justice",
    url      : "/pilsen-gets-environmental-justice/",
    tags     : ["environment", "environmental issues", "McCormick Environmental Journalism Program", "McCormick Foundation"],
    },
    
    {
    title    : "Preserving History and Ecology",
    url      : "/preserving-history-and-ecology/",
    tags     : ["McCormick Environmental Journalism Program", "McCormick Foundation", "the enviornment", "youth"],
    },
    
    {
    title    : "Sit In Against School Closings",
    url      : "/sit-in-against-school-closings/",
    tags     : ["chicago public schools", "youth"],
    },
    
    {
    title    : "Why It's So Hard to End Poverty",
    url      : "/why-its-so-hard-to-end-poverty/",
    tags     : ["national public housing museum", "politics", "poverty", "President Barak Obama", "President Clinton", "welfare reform", "youth"],
    },
    
    {
    title    : "We The People Media in the News",
    url      : "/we-the-people-media-in-the-news/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "Chicago Newsroom", "Chicago Police Department", "Chicago politics", "Chicago public housing", "Plan for Transformation", "politics", "redevelopment", "Section 8", "WBEZ"],
    },
    
    {
    title    : "Does TV Affect Children's Behavior?",
    url      : "/does-tv-affect-childrens-behavior/",
    tags     : ["chicago public schools", "education", "television", "youth", "youth violence"],
    },
    
    {
    title    : "Beyonce is My Role Model",
    url      : "/beyonce-is-my-role-model/",
    tags     : ["Beyonce", "chicago public schools", "chicago youth", "Jay-Z", "youth"],
    },
    
    {
    title    : "Hip Hop Star on the Rise",
    url      : "/hip-hop-star-on-the-rise/",
    tags     : ["chicago public schools", "chicago youth", "Englewood", "Hip Hop", "music", "youth"],
    },
    
    {
    title    : "The Many Talents of Tony Erwin",
    url      : "/the-many-talents-of-tony-erwin/",
    tags     : ["chicago public schools", "chicago youth", "community involvement", "Englewood", "violence"],
    },
    
    {
    title    : "Chicagoans Will Fish, Contamination or Not",
    url      : "/chicagoans-will-fish-contamination-or-not/",
    tags     : ["chicago youth", "environmental issues", "McCormick Environmental Journalism Program", "McCormick Foundation", "Pilsen", "the enviornment"],
    },
    
    {
    title    : "Inside the Teachers Strike",
    url      : "/inside-the-teachers-strike/",
    tags     : ["Chicago Mayor Rahm Emanuel", "chicago public schools", "chicago youth", "politics", "Rahm Emanuel"],
    },
    
    {
    title    : "CAC Releases Vision for the Future",
    url      : "/cac-releases-vision-for-the-future/",
    tags     : ["Cabrini-Green", "CHA", "Chicago Housing Authority", "Chicago public housing", "chicago public schools", "crime", "demolition", "education", "employment", "eviction", "HUD", "Ida B. Wells", "Plan for Transformation", "politics", "public housing", "public housing residents", "redevelopment", "relocation", "Robert Taylor Homes", "Section 8", "senior citizens", "youth"],
    },
    
    {
    title    : "Winners from the Resident Survey!",
    url      : "/winners-from-the-resident-survey/",
    tags     : ["Cabrini-Green", "CHA", "Chicago Housing Authority", "chicago youth", "community involvement", "crime", "demolition", "education", "employment", "eviction"],
    },
    
    {
    title    : "Stopping Elder Abuse",
    url      : "/stopping-elder-abuse/",
    tags     : ["jane adams senior caucus", "senior citizens"],
    },
    
    {
    title    : "Black Pioneers Honored",
    url      : "/black-pioneers-honored/",
    tags     : ["Chicago public housing", "Ida B Wells Homes", "Ida B. Wells"],
    },
    
    {
    title    : "CHA Opens Wait List in Lincoln Square",
    url      : "/cha-opens-wait-list-in-lincoln-square/",
    tags     : ["affordable housing", "CHA", "Chicago Housing Authority", "Chicago public housing", "Plan for Transformation", "public housing", "relocation", "waiting list"],
    },
    
    {
    title    : "Update on the Resident Survey",
    url      : "/update-on-the-resident-survey/",
    tags     : [""],
    },
    
    {
    title    : "Closing the CTA Red Line",
    url      : "/closing-the-cta-red-line/",
    tags     : ["CTA", "CTA President Forrest Claypool", "Englewood", "Red Line", "redevelopment", "Terry Peterson"],
    },
    
    {
    title    : "Stray Dogs in Englewood",
    url      : "/stray-dogs-in-englewood/",
    tags     : ["chicago youth", "crime", "dangerous dogs", "violence", "youth"],
    },
    
    {
    title    : "Exploring After-School Programs",
    url      : "/exploring-after-school-programs/",
    tags     : ["chicago public schools", "chicago youth", "community", "community involvement", "education"],
    },
    
    {
    title    : "CHA Opens Public Housing Wait List for South Side Neighborhoods",
    url      : "/cha-opens-public-housing-wait-list-for-specific-areas/",
    tags     : ["affordable housing", "CHA", "Chicago", "Chicago Housing Authority", "Douglas", "Fuller Park", "Kenwood", "New City", "Oakland", "waiting list"],
    },
    
    {
    title    : "Resident Survey Ends June 1!!! Click This Link Today!",
    url      : "/resident-survey-ends-june-1/",
    tags     : ["Altgeld Gardens", "Cabrini-Green", "CHA", "Chicago", "Chicago Housing Authority", "Dearborn Homes", "demolition", "eviction", "Harold Ickes Homes", "Hilliard Homes", "Plan for Transformation", "public housing", "public housing residents", "redevelopment", "relocation", "Robert Taylor Homes", "Section 8", "senior citizens", "Stateway Gardens", "Washington Park"],
    },
    
    {
    title    : "Rally against NATO, War and Poverty",
    url      : "/rally-against-nato-war-and-poverty/",
    tags     : ["Chicago Mayor Rahm Emanuel", "Chicago Police Department", "Grassroots Collaborative", "NATO", "politics", "protests"],
    },
    
    {
    title    : "Enter Survey, Win a Laptop Computer!",
    url      : "/enter-survey-win-a-laptop-computer/",
    tags     : ["Cabrini-Green", "CHA", "Chicago Housing Authority", "Chicago public housing", "Harold Ickes Homes", "housing", "Plan for Transformation", "public housing", "Robert Taylor Homes", "Section 8", "senior citizens", "youth"],
    },
    
    {
    title    : "Learning about the world on a youth retreat",
    url      : "/learning-about-the-world-on-a-youth-retreat/",
    tags     : ["chicago youth", "community involvement", "Illinois Teen Institute", "youth"],
    },
    
    {
    title    : "Making a college visit count",
    url      : "/making-a-college-visit-count/",
    tags     : ["education", "McCormick Environmental Journalism Program", "McCormick Foundation", "Michigan State University", "Urban Youth International Journalism Program", "Youth Journalism"],
    },
    
    {
    title    : "A Message from the Resident President",
    url      : "/a-message-from-the-resident-president/",
    tags     : ["CHA", "Chicago Housing Authority", "Chicago public housing", "HUD", "Plan for Transformation", "public housing", "public housing residents"],
    },
    
    {
    title    : "New Calendar For Public Housing Tenants",
    url      : "/new-calendar-for-public-housing-tenants/",
    tags     : ["Altgeld Gardens", "Cabrini-Green", "CHA", "Chicago Housing Authority", "Chicago public housing", "demolition", "eviction", "HUD", "leadership", "Plan for Transformation", "relocation", "Section 8", "senior citizens"],
    },
    
    {
    title    : "CHA's New Plan?",
    url      : "/chas-new-plan/",
    tags     : ["CHA", "Chicago Housing Authority", "Chicago public housing", "Ethan Michaeli", "Plan for Transformation", "Rahm Emanuel", "Robert Taylor Homes", "Section 8", "WBEZ"],
    },
    
    {
    title    : "Healthy Ways to Fight Lead Poisoning",
    url      : "/healthy-ways-to-fight-lead-poisoning/",
    tags     : ["chicago public schools", "chicago youth", "Englewood", "Englewood community", "Imagine Englewood If", "Lead poisoning", "youth"],
    },
    
    {
    title    : "Altgeld Tenants: Police, Cameras Not Improving Security",
    url      : "/altgeld-tenants-police-cameras-not-improving-security/",
    tags     : ["Altgeld Gardens", "CHA", "Chicago Housing Authority", "Chicago Police Department", "Chicago public housing", "housing", "politics"],
    },
    
    {
    title    : "John H. Johnson Honored with Black Heritage Forever Stamp",
    url      : "/john-h-johnson-honored-with-black-heritage-forever-stamp/",
    tags     : ["Black Heritage", "Black History", "Ebony Magazine", "Emmett Louis Till", "Jesse Jackson Jr", "Jet Magazine", "John H. Johnson", "Johnson Publishing Company", "politics", "U.S. Postal Service", "U.S. Rep.", "U.S. Rep. Bobby L. Rush", "U.S. Rep. Danny K. Davis"],
    },
    
    {
    title    : "Blackhawks Host CHA Kids",
    url      : "/blackhawks-host-cha-kids/",
    tags     : ["CHA", "Chicago Blackhawks", "Chicago Housing Authority", "Chicago public housing", "hockey"],
    },
    
    {
    title    : "Remembering the Servitude of Dr. King",
    url      : "/remembering-the-servitude-of-dr-king/",
    tags     : ["Dr. Martin Luther King Jr.", "Imagine Englewood If", "Sixth Grace Presbyterian Church", "WVON"],
    },
    
    {
    title    : "Fair Trade Clothing",
    url      : "/fair-trade-clothing/",
    tags     : ["Fair trade clothing", "Luke O'Toole Elementary School", "Mata Traders"],
    },
    
    {
    title    : "Group Carols to Save Mental Health Clinics",
    url      : "/group-carols-to-save-mental-health-clinics/",
    tags     : ["Chicago City Council", "Chicago Department of Public Health", "Chicago Mental Health Movement", "Mayor Rahm Emanuel", "news", "politics"],
    },
    
    {
    title    : "A Weekend of Firsts",
    url      : "/a-weekend-of-firsts/",
    tags     : ["4-H Children’s Garden", "environmental journalism", "McCormick Environmental Journalism Program", "Michigan State University", "Union Station", "WKAR"],
    },
    
    {
    title    : "Being emo",
    url      : "/being-emo/",
    tags     : ["Emo", "Imagine Englewood If", "Paul Robeson High School", "Three Days Grace"],
    },
    
    {
    title    : "Occupiers, Officials Try to Help Homeowners",
    url      : "/occupiers-officials-try-to-help-homeowners/",
    tags     : ["Bronzeville", "Cabrini-Green", "home foreclosure", "Illinois Attorney General's Office", "Illinois Institute of Technology", "Occupy Chicago", "Occupy Wall Street"],
    },
    
    {
    title    : "New Report: Homeless Being Criminalized",
    url      : "/new-report-homeless-being-criminalizing/",
    tags     : ["crime", "homelessness", "National Law Center on Homelessness and Poverty"],
    },
    
    {
    title    : "Parents Protest CPS Turn-Arounds",
    url      : "/parents-protest-cps-turn-arounds/",
    tags     : ["Altgeld Gardens", "CHA Altgeld Gardens", "Chicago Mayor Rahm Emanuel", "Chicago public housing", "chicago public schools", "Jean-Claude Brizard", "Kenwood Oakland Community Organization"],
    },
    
    {
    title    : "Local Pastor Camps out on Motel Roof to Highlight Area Violence",
    url      : "/local-pastor-camps-out-on-motel-roof-to-highlight-area-violence/",
    tags     : ["Chicago violence", "crime", "Englewood", "New Beginnings Church", "Super Motel", "Woodlawn"],
    },
    
    {
    title    : "Tenants' Lawyer: CHA Drug Testing Policy Will End Up in Court",
    url      : "/tenants-lawyer-cha-drug-testing-policy-will-end-up-in-court/",
    tags     : ["Central Advisory Council", "CHA Lakefront Properties", "CHA mixed income communites", "Chicago Housing Authority", "Chicago public housing", "drug testing residents", "Oakwood Shore"],
    },
    
    {
    title    : "New Mandates for Chicago Public Schools",
    url      : "/new-mandates-for-chicago-public-schools/",
    tags     : ["Ald. Pat Dowell", "chicago public schools", "Chicago Teachers' Union", "Grand Boulevard Federation", "U.S. Sen. Mattie Hunter"],
    },
    
    {
    title    : "CHA Reopens Landmark Senior Building",
    url      : "/cha-reopens-landmark-senior-building/",
    tags     : ["Ald. Harry Osterman", "CHA Plan for Transformation", "CHA Pomeroy Senior Apartments", "Chicago Housing Authority", "Chicago public housing", "Illinois Office of Public Housing Director Steven Meiss"],
    },
    
    {
    title    : "$1 Billion for CTA",
    url      : "/1-billion-for-cta/",
    tags     : ["Chicago Transit Authority", "CTA", "CTA President Forrest Claypool", "Forrest Claypool", "Gov. Pat Quinn", "Illinois Department of Transportation", "Mayor Rahm Emanuel", "Rahm Emanuel"],
    },
    
    {
    title    : "Some Lathrop Kids Get a Bus, But Not All",
    url      : "/some-lathrop-kids-get-a-bus-but-not-all/",
    tags     : ["CHA", "Chicago Housing Authority", "Chicago public housing", "Chicago public school students", "chicago public schools", "Fredrick Jahn Elementary School", "Lathrop Homes", "Prescott Elementary School"],
    },
    
    {
    title    : "Is CHA Holding Vacant Apartments?",
    url      : "/is-cha-holding-vacant-apartments/",
    tags     : ["Cabrini Rowhouses", "CHA", "Chicago Housing Authority", "Chicago Housing Initiative", "Chicago public housing", "Kenwood Oakland Community Organization", "KOCO", "Lake Parc Place", "Lathrop Homes", "North Lawndale"],
    },
    
    {
    title    : "New Grocery Stores to Open in Food Deserts",
    url      : "/new-grocery-stores-to-open-in-food-deserts/",
    tags     : ["Aldi's", "Austin", "Calument", "food deserts", "Grand Boulevard", "Mayor Rahm Emanuel", "Michelle Obama", "Near West Side", "Norgan Park", "North Lawndale", "Roseland", "Roundy's Supermarket", "Sav-a-lot", "Wal-Mart", "Walgreens", "West Publlman"],
    },
    
    {
    title    : "Ex-Offenders Strive For Better",
    url      : "/ex-offenders-strive-for-better/",
    tags     : ["Altgeld Gardens", "CHA", "Chicago Housing Authority", "Chicago public housing", "exoffenders"],
    },
    
    {
    title    : "Special Investigation: CHA Still Wants Kids’ Report Cards",
    url      : "/special-investigation-cha-still-wants-kids%e2%80%99-report-cards/",
    tags     : ["CHA", "Chicago Housing Authority", "Chicago public housing"],
    },
    
    {
    title    : "Ida B. Wells Revisited",
    url      : "/ida-b-wells-revisited-2/",
    tags     : ["CHA", "Chciago Housing Authority", "Chicago public housing", "Ida B. Wells", "Oakwood Shores"],
    },
    
    {
    title    : "THE BIG BAD BOLD BUD BILLIKEN PARADE",
    url      : "/the-big-bad-bold-bud-billiken-parade/",
    tags     : ["Bud Biliken Parade", "Chicago Bud Biliken Parade", "South Shore Drill Team"],
    },
    
    {
    title    : "Elementary School Students Suffer from CHA Relocations",
    url      : "/elementary-school-students-suffer-from-cha-relocations/",
    tags     : ["Chicago Housing Authority", "Chicago public houisng", "Latrhop Homes", "the CHA"],
    },
    
    {
    title    : "Protestors Rally to Keep Medicaid Services",
    url      : "/protestors-rally-to-keep-medicaid-services/",
    tags     : ["Access Living", "Congressional Super Committee", "Medicaid", "medicare", "people with disabilities", "U.S. Senator Dick Durbin", "U.S. Senator Mark Kirk", "US Congress"],
    },
    
    {
    title    : "Charlotte Housing Authority Chief takes CHA Position",
    url      : "/charlotte-housing-authority-chief-takes-cha-position/",
    tags     : ["CHA", "Charles Woodyard", "Chicago Housing Authority", "Chicago Mayor Rahm Emanuel", "Chicago public housing", "HUD", "Plan for Transformation", "public housing", "redevelopment", "relocation"],
    },
    
    {
    title    : "Forgotten History: Lecture on Black Aviators",
    url      : "/forgotten-history-lecture-on-black-aviators/",
    tags     : ["aviation", "Bessie Coleman", "DuSable Museum of African American History", "Robbins", "Tuskegee Airmen"],
    },
    
    {
    title    : "Altgeld’s New Library",
    url      : "/altgeld%e2%80%99s-new-library/",
    tags     : ["Altgeld Gardens", "CHA Altgeld Gardens", "Chicago Public Libraries", "chicago public schools", "chicago youth", "Phillis Wheatly Center", "public housing", "public housing residents"],
    },
    
    {
    title    : "Corporate Partnership Builds a Public School Playground",
    url      : "/corporate-partnership-builds-a-public-school-playground/",
    tags     : ["AUSA", "chicago public schools", "chicago youth", "Coca Cola", "community involvement", "education", "Howe Elementary School of Excellence", "playgrounds", "West Side", "youth"],
    },
    
    {
    title    : "Follow We The People Media/Residents' Journal on Twitter",
    url      : "/we-the-people-mediaresidents-journal-now-on-twitter/",
    tags     : [""],
    },
    
    {
    title    : "Cabrini Row House Tenants Prepare to Fight CHA",
    url      : "/cabrini-row-house-tenants-prepare-to-fight-cha/",
    tags     : ["Cabrini-Green", "CHA", "Chicago", "Chicago Housing Authority", "Chicago public housing", "crime", "demolition", "HUD", "Plan for Transformation", "public housing", "public housing residents", "redevelopment", "relocation", "Section 8"],
    },
    
    {
    title    : "Mayor Emanuel Booed at Budget Town Hall",
    url      : "/mayor-emanuel-booed-at-budget-townhall-meeting/",
    tags     : ["Chicago Budget", "chicago public schools", "crime", "Englewood", "Englewood community", "foreclosure", "Mayor Rahm Emanuel", "Rahm Emanuel", "townhall meeting", "violence"],
    },
    
    {
    title    : "Residents' Journal's Newly Accessible Online Archives",
    url      : "/residents-journals-newly-assessible-online-archives/",
    tags     : ["Cabrini-Green", "CHA", "CHA Youth", "Chicago", "Chicago public housing", "community involvement", "HUD", "public housing", "Residents Journal", "Robert Taylor Homes", "Section 8"],
    },
    
    {
    title    : "Residents' Journal Coverage of the Recent Demolition of the Last CHA Ida B. Wells Homes Buildings",
    url      : "/residents-journal-coverage-of-the-recent-demolition-of-the-last-cha-ida-b-wells-homes-buildings/",
    tags     : ["CHA", "Chicago Housing Authority", "Chicago public houisng", "Ida B. Wells", "youth"],
    },
    
    {
    title    : "Residents' Journal Editor and Publisher Discussing Youth Online Articles",
    url      : "/residents-journal-editor-and-publisher-discussing-youth-online-articles/",
    tags     : [""],
    },
    
    {
    title    : "Residents' Journal Publisher and Editor Discussing Recent CHA Issues",
    url      : "/residents-journal-publisher-and-editor-discussing-recent-cha-issues/",
    tags     : ["Chicago Housing Authority", "public houisng"],
    },
    
    {
    title    : "Residents' Journal Reporters talking about Current Youth Articles",
    url      : "/residents-journal-staff-member-talking-to-an-urban-youth-international-journalism-program-student-about-her-news-reports-this-summer/",
    tags     : ["CHA", "Chicago Housing Authority", "chicago youth", "community involvement", "McCormick Environmental Journalism Program", "McCormick Foundation", "Shedd Aquarium", "youth"],
    },
    
    {
    title    : "Discussing the Oakwood Shores Mixed-Income Community",
    url      : "/residents-journal-reporter-talking-about-opportunities-for-public-housing-tenants-at-the-cha-oakwood-shores-mixed-income-community/",
    tags     : ["Chicago Housing Authority", "mixed income", "Oakwood Shores", "public housing"],
    },
    
    {
    title    : "Altgeld Gardens Tries to Stay Cool",
    url      : "/altgeld-gardens-tries-to-stay-cool/",
    tags     : ["CHA", "Chicago Housing Authority", "Chicago Park District", "Chicago Public Library", "Cooling Centers", "Heat Wave", "youth"],
    },
    
    {
    title    : "How to Deal with the Next Heat Wave",
    url      : "/how-to-deal-with-the-next-heat-wave/",
    tags     : ["Altgeld Gardens", "CHA", "Chicago Housing Authority", "Heat Wave", "youth"],
    },
    
    {
    title    : "CHA Launches Initiative to House Women Ex-Offenders",
    url      : "/cha-launches-initiative-to-house-women-ex-offenders/",
    tags     : ["CHA", "Chicago Housing Authority", "Chicago public housing", "crime", "ex-offenders", "James Reynolds", "Near West Side", "Tax Increment Financing", "violence"],
    },
    
    {
    title    : "After The Dust",
    url      : "/after-the-dust/",
    tags     : ["CHA", "Chicago Housing Authority", "chicago youth", "community involvement", "demolition", "HUD", "public housing", "public housing residents", "Robert Taylor Homes", "Section 8", "youth"],
    },
    
    {
    title    : "Commissioner Fails to Show at Mental Health Town Hall Meeting",
    url      : "/commissioner-fails-to-show-at-mental-health-town-hall/",
    tags     : ["Chicago Mayor Rahm Emanuel", "Mental Health", "privatization", "Rahm Emanuel", "State Rep. Mary Flowers", "STOP", "violence", "youth violence"],
    },
    
    {
    title    : "Mayor Continues Search for New CHA Head",
    url      : "/mayor-continues-search-for-new-cha-head/",
    tags     : ["Cabrini Green Rowhouses", "Cabrini-Green", "Chicago Housing Authority", "Chicago pubic housing", "Rahm Emanuel"],
    },
    
    {
    title    : "Youth Activists: Juvenile Inmates Treated Like Animals.",
    url      : "/youth-activists-juvenile-inmates-treated-like-animals/",
    tags     : ["Audy Home", "chicago crime", "crime", "Juvenile Court", "Juvenile Justice", "youth violence"],
    },
    
    {
    title    : "A Toxic Tour of Little Village",
    url      : "/little-village-story/",
    tags     : ["Crawford Coal Plant", "environmental issues", "Little Village", "Little Village Environmental Justice Organization", "McCormick Environmental Journalism Program", "McCormick Foundation", "Toxic Tour", "youth"],
    },
    
    {
    title    : "A New Start for the Indiana Dunes",
    url      : "/a-new-start-for-the-indiana-dunes/",
    tags     : ["chicago youth", "community involvement", "environmental issues", "Indiana Dunes", "McCormick Environmental Journalism Program", "McCormick Foundation", "youth", "youth media"],
    },
    
    {
    title    : "Shedd Aquarium Showcases Invasive Species",
    url      : "/shedd-aquarium-showcases-invasive-species/",
    tags     : ["Asian Carp", "environmental issues", "Great Lakes", "Invasive Species", "Kari Lydersen", "Knight Center for Environmental Journalism", "McCormick Environmental Journalism Program", "McCormick Foundation", "Michigan State University", "Shedd Aquarium"],
    },
    
    {
    title    : "The Fish of Lake Michigan",
    url      : "/the-fish-of-lake-michigan/",
    tags     : ["chicago youth", "environmental issues", "McCormick Environmental Journalism Program", "McCormick Foundation", "Shedd Aquarium", "youth", "Youth Journalism"],
    },
    
    {
    title    : "Little Village Toxic Tour",
    url      : "/little-village-toxic-tour/",
    tags     : ["Crawford Coal Plant", "environment", "environmental issues", "journalism", "Kari Lydersen", "Knight Center for Environmental Journalism", "Little Village", "McCormick Environmental Journalism Program", "McCormick Foundation", "We The People Media"],
    },
    
    {
    title    : "Residents' Journal Publisher on WBEZ",
    url      : "/residents-journal-publisher-on-wbez/",
    tags     : ["Chicago Housing Authority", "Chicago Public Radio", "Mayor Rahm Emanuel", "WBEZ"],
    },
    
    {
    title    : "Former Youth Reporter, Now an Author!",
    url      : "/former-youth-reporter-now-an-author/",
    tags     : ["Chantell Suggs", "chicago youth", "community involvement", "youth"],
    },
    
    {
    title    : "Historical Gallery: Barack Obama",
    url      : "/historical-gallery-barack-obama/",
    tags     : ["Barack Obama", "Chicago", "Illinois", "politics", "Senate", "Youth Coverage of Barack Obama"],
    },
    
    {
    title    : "The Health Effects of Pollution in Pilsen",
    url      : "/the-health-effects-of-pollution-in-pilsen/",
    tags     : ["Eco Youth Reporters", "environmental issues", "journalism", "Kari Lydersen", "Knight Center for Environmental Journalism", "McCormick Environmental Journalism Program", "McCormick Foundation", "Michigan State University", "We The People Media", "Youth Journalism"],
    },
    
    {
    title    : "Lead and Coal Plants in Pilsen",
    url      : "/lead-and-coal-plants-in-pilsen/",
    tags     : ["chicago youth", "Coal-Fired Plants", "Eco Youth Reporters", "Knight Center for Environmental Journalism", "McCormick Environmental Journalism Program", "McCormick Foundation", "Michigan State University", "Pilsen"],
    },
    
    {
    title    : "Remembering Ms. Amey",
    url      : "/remembering-ms-amey/",
    tags     : ["CHA", "CHA Wentworth Gardens", "Chicago Housing Authority", "Hallie Amey", "public housing", "Wentworth Gardens"],
    },
    
    {
    title    : "Residents' Journal's Coverage of CHA Featured in Rise Magazine",
    url      : "/residents-journals-coverage-of-cha-featured-in-rise-magazine/",
    tags     : ["CHA", "Chicago Housing Authority", "drug testing", "Foster Parents", "Lewis Jordan", "public housing", "public housing residents", "Rise Magazine"],
    },
    
    {
    title    : "Environmental Journalism Program Image Gallery",
    url      : "/environmental-journalism-program-image-gallery/",
    tags     : ["Chicago", "chicago youth", "community involvement", "Eco Youth Reporters", "environmental issues", "journalism", "Kari Lydersen", "Knight Center for Environmental Journalism", "McCormick Environmental Journalism Program", "McCormick Foundation", "Michigan State University", "We The People Media"],
    },
    
    {
    title    : "USDA Contest to Celebrate Success in the Summer Food Service Program",
    url      : "/usda-contest-to-celebrate-success-in-the-summer-food-service-program/",
    tags     : ["nutrition assistance programs", "photo contest", "Summer Food Service Program", "USDA", "youth"],
    },
    
    {
    title    : "Residents' Journal Editor-in-chief talking about Summer Youth Employment",
    url      : "/residents-journal-editor-in-chief-talking-about-summer-youth-employment/",
    tags     : ["crime", "Gov. Pat Quinn", "Kenwood Oakland Community Organization", "politics", "summer jobs", "youth"],
    },
    
    {
    title    : "Residents' Journal Publisher talking about an Environmental Project for Youth",
    url      : "/residents-journal-publisher-talking-about-an-environmental-project-for-youth/",
    tags     : ["Chicago", "chicago youth", "education", "environment", "journalism", "McCormick Foundation", "Urban Youth International Journalism Youth Program", "youth"],
    },
    
    {
    title    : "Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell",
    url      : "/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell/",
    tags     : ["chicago youth", "Clean Air", "Coal", "environmental issues", "Fisk Coal Plant", "Greenpeace", "Kelly Mitchell", "McCormick Environmental Journalism Program", "Pilsen", "Protesting", "youth"],
    },
    
    {
    title    : "Honoring Sam Cooke",
    url      : "/honoring-sam-cooke/",
    tags     : ["Alderman Pat Dowell", "Alderman Will Burns", "Bronzeville","Cook County Commissioner Jerry Ice Man Butler", "Doolittle Elementary", "Gospel","Herb Kent The Cool Gent", "Sam Cooke", "Soul Music", "Toni Preckwinkle"],
    },
    
    {
    title    : "RJ Publisher on Chicago Newsroom",
    url      : "/rj-publisher-on-chicago-newsroom/",
    tags     : ["CHA", "Chicago Housing Authority", "Chicago Mayor Rahm Emanuel", "Chicago Police Department", "Chicago public housing", "chicago public schools", "crime", "housing", "politics", "public housing", "redevelopment", "relocation", "Taste of Chicago", "violence", "youth", "youth violence"],
    },
    
    {
    title    : "CHA Board Appoints One of Their Own Interim CEO",
    url      : "/cha-board-appoints-one-of-their-own-interim-ceo/",
    tags     : ["Carlos Ponce", "CHA", "CHA credit cards", "Chicago Housing Authority", "Chicago public housing", "chicago public schools", "drug testing", "James Reynolds", "Lewis Jordan", "politics", "public housing", "resident drug testing"],
    },
    
    {
    title    : "My trip to Paris",
    url      : "/my-trip-to-paris/",
    tags     : ["Altgeld Gardens", "CHA", "CHA Altgeld Gardens", "Chicago Housing Authority", "chicago youth", "France", "Paris", "People for Community Recovery", "youth", "youth media"],
    },
    
    {
    title    : "A Dream Come True",
    url      : "/a-dream-come-true/",
    tags     : ["Altgeld Gardens", "CHA", "Chicago Housing Authority", "France", "Paris", "People for Community Recovery", "Urban Youth International Journalism Program", "youth", "Youth Journalism", "Youth Writers"],
    },
    
    {
    title    : "CHA Land Remains Vacant for Over a Decade (Commentary)",
    url      : "/cha-land-remains-vacant-for-over-a-decade-commentary/",
    tags     : ["CHA", "Chicago Housing Authority", "Chicago public housing", "policits", "pulic housing"],
    },
    
    {
    title    : "Board Squashes CHA Drug Testing Plan",
    url      : "/board-squashes-cha-drug-testing-plan/",
    tags     : ["Chicago Housing Authority", "civil rights", "drug testing", "politics", "public housing tenants"],
    },
    
    {
    title    : "The Bow Campaign",
    url      : "/the-bow-campaign/",
    tags     : ["chicago youth", "Child Abuse", "Imagine Englewood If", "Parenting", "violence", "youth"],
    },
    
    {
    title    : "CHA Chief Steps Down",
    url      : "/cha-chief-steps-down-after-credit-card-fiasco/",
    tags     : ["CHA chief steps down", "CHA Chief steps down after Credit card fiasco", "Chicago Housing Authority", "politics"],
    },
    
    {
    title    : "Special Investigation: CHA Wanted Kids’ Report Cards",
    url      : "/special-investigation-cha-wanted-kids%e2%80%99-report-cards/",
    tags     : ["CHA", "Chicago public housing", "chicago public schools", "chicago youth", "drug testing", "housing", "privacy"],
    },
    
    {
    title    : "Tenants Protest CHA Drug Testing Plan",
    url      : "/public-hearing-on-cha-drug-test-proposal/",
    tags     : ["4th Amendment", "CHA", "CHA Tenants", "Chicago Housing Authority", "drug testing", "housing conditions", "One Strike", "protests", "public housing", "public housing residents"],
    },
    
    {
    title    : "Tenants Protest CHA Plans to Drug Test Them",
    url      : "/2644/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "drug testing", "politics", "protests", "public housing", "public housing residents", "rally"],
    },
    
    {
    title    : "Residents' Journal Editor Appearing on Vocalo Radio",
    url      : "/residents-journal-editor-appearing-on-vocalo-radio/",
    tags     : ["vocalo 89.5 FM"],
    },
    
    {
    title    : "The Garden",
    url      : "/the-garden/",
    tags     : ["Chicago", "chicago youth", "environmental issues", "gardening", "Growing Home", "Kilbourn Organic Garden", "South Side", "Urban Youth International Journalism Program", "UYIJP"],
    },
    
    {
    title    : "The Transformation of Jason Moy",
    url      : "/the-transformation-of-jason-moy/",
    tags     : ["Chicago", "chicago youth", "personal story", "transformation", "Urban Youth International Journalism Program", "UYIJP"],
    },
    
    {
    title    : "Boxing Keeps Dad's Memory Alive",
    url      : "/boxing-keeps-dads-memory-alive/",
    tags     : ["Boxing", "chicago youth"],
    },
    
    {
    title    : "New Mayor Emanuel’s Road Map for Chicago’s Future",
    url      : "/new-mayor-emanuel%e2%80%99s-road-map-for-chicago%e2%80%99s-future/",
    tags     : ["Chicago Mayor", "Chicago Mayor Rahm Emanuel", "Chicago politics", "Raham Emanuel", "Rahm Emauel Inaguration"],
    },
    
    {
    title    : "Battle Rages on for South Side Trauma Center",
    url      : "/battle-rages-on-for-south-side-trauma-center/",
    tags     : ["Fearless Leading by the Youth", "healthcare", "Southside Together Organizing for Power", "STOP", "Trauma Center", "University of Chicago Medical Center"],
    },
    
    {
    title    : "An Afternoon of Good Times",
    url      : "/an-afternoon-of-good-times/",
    tags     : ["Bern Nadette Stanis", "Cabrini-Green", "Cabrini-Green public housing", "Chicago Housing Authority", "Chicago public housing", "Good Times", "Harold Ickes Homes", "national public housing museum", "public housing", "Rueben Cannon"],
    },
    
    {
    title    : "Where are CHA’s Residents?",
    url      : "/where-are-cha%e2%80%99s-residents/",
    tags     : ["Cabrini-Green", "Chicago Housing Authority", "Chicago public housing", "crime", "housing", "public housing", "violence"],
    },
    
    {
    title    : "Youths and Sex Ed",
    url      : "/youths-and-sex-ed/",
    tags     : ["chicago public schools", "chicago youth", "healthcare", "Sexually Transmitted Disease", "STDs", "youth"],
    },
    
    {
    title    : "On the Campaign Trail with Che “Rhymefest” Smith",
    url      : "/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith/",
    tags     : ["Chicago 2011 Aldermanic Election", "Chicago 2011 Mayoral Election", "Chicago City Council", "chicago youth", "crime", "Englewood community", "Hip Hop", "Rhymefest", "Woodlawn", "youth", "youth violence"],
    },
    
    {
    title    : "Cabrini-Green Residents Say Goodbye",
    url      : "/cabrini-green-residents-say-goodbye/",
    tags     : ["Cabrini Rowhouses", "Cabrini-Green", "Cabrini-Green public housing", "Chicago Housing Authority", "chicago youth", "crime", "youth"],
    },
    
    {
    title    : "Housing Activists Take Action: An Update",
    url      : "/housing-activists-take-action-an-update/",
    tags     : ["Chicago Landlords and Tenants Ordinance", "Housing Activists Take Action: An Update", "HUD", "Metropolitian Tenants Organization", "Section 8 vouchers", "U.S. Department of Housiong and Urban Development"],
    },
    
    {
    title    : "Disability Advocates Target Troubled Nursing Home",
    url      : "/disability-advocates-target-troubled-nursing-home/",
    tags     : ["Access Living", "Alden Villiage Nroth Nursing Home", "Chicago ADAPT", "disabilities", "Power to the People Coalition", "Progress Center for Independent Living", "the ajne Addams Senior Causuc", "the Community renewal Society"],
    },
    
    {
    title    : "CHA Board Meeting Crashed with Concerns",
    url      : "/cha-board-meeting-crashed-with-concerns/",
    tags     : ["Cabrini Rowhouses", "Cabrini-Green", "Chicago Housing Authority", "Lathrop Homes", "Lathrop Leadership Team", "Logan Square Neighborhood Association"],
    },
    
    {
    title    : "Illinois Governor Applauded for Abolishing Death Penalty",
    url      : "/illinois-governor-applauded-for-abolishing-death-penalty/",
    tags     : ["Governor Pat Quinn", "Illinois Coalition to Abolish the Death Penalty", "Illniois Death Penalty", "Jewish Council on Urban Affairs"],
    },
    
    {
    title    : "Bronzeville Residents Aim for Police Substation on 47th Street",
    url      : "/bronzeville-residents-aim-for-police-substation-on-47th-street/",
    tags     : ["Chicago", "Chicago Bronzeville community", "Chicago police", "community involvement", "Concerned citizens of Bronzeville", "crime", "gang violence", "improvement plan", "local businesses", "police substation", "redevelopment", "South Side", "violence"],
    },
    
    {
    title    : "Disability Rights Advocates Protest, and Gov. Quinn Retreats",
    url      : "/disability-rights-advocates-protest-and-gov-quinn-retreats/",
    tags     : ["Gov. Pat Quinn", "Illinois Department of Health and Human Services", "people with disabilities"],
    },
    
    {
    title    : "We The People Media's Coverage of the Chicago Mayor's Race",
    url      : "/we-the-people-medias-coverage-of-the-chicago-mayors-race/",
    tags     : ["Carol Moseley Braun", "Chicago 2011 Mayoral Election", "Chicago Mayoral Candidates", "Chicago public housing", "gang violence", "Patriica Van Pelt Watkins", "Rahm Emanuel", "youth"],
    },
    
    {
    title    : "Watkins Warns Transport Jobs May Be Lost",
    url      : "/watkins-warns-transport-jobs-may-be-lost/",
    tags     : ["Chicago Mayoral Candidates", "chicago mayors race", "Patriica Van Pelt Watkins", "transportation"],
    },
    
    {
    title    : "Mayoral Candidates Views about Chicago Public Housing",
    url      : "/mayoral-candidates-views-about-chicago-public-housing/",
    tags     : ["Chicago Mayoral Candidates", "Chicago mayors election", "mayoral candidates views about chicago public houisng", "politics", "public housing"],
    },
    
    {
    title    : "Rahm Wants Urban Farms, Mobile Food Trucks",
    url      : "/rahm-wants-urban-farms-mobile-food-trucks/",
    tags     : ["agriculture", "Bronzeville", "Chicago", "Chicago Bronzeville community", "Chicago Mayoral Candidates", "community gardens", "environment", "environmental issues", "food industry", "food production", "health", "health issues", "low-income communities", "Rahm Emanuel"],
    },
    
    {
    title    : "Torture Victim Reflects on Burge Sentence",
    url      : "/torture-victim-reflects-on-burge-sentence/",
    tags     : ["Chicago Bronzeville community", "crime", "gang violence", "John Burge", "Torture", "violence"],
    },
    
    {
    title    : "Nuf Said: Will Violence Finally Stop?",
    url      : "/nuf-said-will-violence-finally-stop/",
    tags     : ["Chicago Police Department", "chicago public schools", "chicago youth", "community programs", "dropout rate", "violence"],
    },
    
    {
    title    : "Emanuel Removed From Ballot, Candidates’ Education Plans",
    url      : "/emanuel-removed-from-ballot-candidates%e2%80%99-education-plans/",
    tags     : ["Carol Moseley Braun", "Chicago Mayoral Candidates", "Gery Chico", "Mayoral Cadidates Education Plans", "Mayoral Candidates", "Mayoral Candidates on Education", "Miguel Del Valle", "Rahm Emanuel"],
    },
    
    {
    title    : "Mayoral Candidate’s Plans for Low-income people and Ex-offenders",
    url      : "/mayoral-candidate%e2%80%99s-plans-for-low-income-people-and-ex-offenders/",
    tags     : ["Chicago 2011 Mayor's Race", "Chicago mayoral candidate", "Chicago Mayoral Candidates", "Chicago Mayoral Election", "low-income issues", "Patriica Van Pelt Watkins"],
    },
    
    {
    title    : "Emanuel’s Anti-Crime Plan for Chicago if elected Mayor",
    url      : "/emanuel%e2%80%99s-anti-crime-plan-for-chicago-if-elected-mayor/",
    tags     : ["chicago crime", "Chicago Mayoral Candidates", "crime", "Mayor of Chicago Elections", "Rahm Emanuel"],
    },
    
    {
    title    : "Federal Housing Programs on the Chopping Block",
    url      : "/federal-housing-programs-on-the-chopping-block/",
    tags     : ["Center on Budget and Policy Priorites", "Federal Housing Programs"],
    },
    
    {
    title    : "Uranium: A Hidden Tragedy",
    url      : "/uranium-a-hidden-tragedy/",
    tags     : ["documentary", "health", "nuclear power", "radiation poisoning", "Uranium"],
    },
    
    {
    title    : "Bowling Excursion",
    url      : "/bowling-excursion/",
    tags     : ["Bowling", "chicago youth"],
    },
    
    {
    title    : "Under Pressure: Students and Teachers on Stress",
    url      : "/under-pressure-students-and-teachers-on-stress/",
    tags     : ["Chicago public school students", "health", "students", "Teachers"],
    },
    
    {
    title    : "Cabrini Rowhouses Update",
    url      : "/cabrini-rowhouses-update/",
    tags     : ["Cabrini", "Cabrini Rowhouses", "Cabrini Rowhouses Update", "Cabrini-Green", "Cabrini-Green public housing", "Chicago public housing"],
    },
    
    {
    title    : "Three Chicago Mayoral Candidates' Take on Public Housing",
    url      : "/1803/",
    tags     : ["Chicago mayoral candidate on public housing", "Chicago Mayoral Candidates", "Chicago public housing", "national public housing museum", "Three mayoral candidates' take on public housing"],
    },
    
    {
    title    : "We The People Media in the News/Holiday Appeal",
    url      : "/we-the-people-media-in-the-newsholiday-appeal/",
    tags     : [""],
    },
    
    {
    title    : "Chicago Mayoral Candidate Carol Moseley Braun on Low-income Issues",
    url      : "/chicago-mayoral-candidate-former-u-s-sen-carol-moseley-braun-on-low-income-issues/",
    tags     : ["Carol Moseley Braun", "Chicago 2011 Mayoral Election"],
    },
    
    {
    title    : "Parents File Discrimination Complaint against CPS Promotion Policy for Elementary Students",
    url      : "/parents-file-discrimination-complaint-against-cps-promotion-policy-for-elementary-students/",
    tags     : ["chicago public schools", "Chicago Teachers' Union", "CPS lawsuits", "PURE"],
    },
    
    {
    title    : "Cabrini rowhouses’ fate in jeopardy",
    url      : "/cabrini-rowhouses%e2%80%99-fate-in-jeopardy/",
    tags     : ["Cabrini Rowhouses", "Cabrini-Green", "Cabrini-Green public housing", "Chicago Housing Authority", "Chicago public housing", "housing"],
    },
    
    {
    title    : "A Salute to Women Veterans",
    url      : "/a-salute-to-women-veterans/",
    tags     : ["Chicago Bronzeville community", "chicago public schools", "JROTC", "Marching Bands", "Veterans Day Parade", "Women Soldiers", "Women Veterans"],
    },
    
    {
    title    : "A Third Generation’s Take on Relocation from Last Cabrini Building",
    url      : "/a-third-generation%e2%80%99s-take-on-relocation-from-last-cabrini-building/",
    tags     : ["Cabrini Rowhouses", "Cabrini-Green", "Cabrini-Green public housing", "Chicago Housing Authority", "Chicago public housing", "housing", "public housing"],
    },
    
    {
    title    : "Marching in Washington",
    url      : "/marching-in-washington/",
    tags     : ["Glenn Beck", "Imagine Englewood If", "immigration reform", "Lincoln Memorial", "One Nation Working Together Rally", "Rev. Jesse Jackson", "violence", "Washington Memorial"],
    },
    
    {
    title    : "Clinton: “It’s all about the Money”",
    url      : "/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d/",
    tags     : ["Alexi Giannoulias", "Dan Seals", "Gov. Pat Quinn", "Illinois 2010 candidates", "November 2010 Elections", "President Barak Obama", "President Clinton", "Rep. Debbie Halvorson", "Rep. Mark Kirk", "Robert Dold", "US Congressman Bill Foster"],
    },
    
    {
    title    : "Editor’s Note",
    url      : "/editor%e2%80%99s-note/",
    tags     : [""],
    },
    
    {
    title    : "Youths Speak Out on Violence",
    url      : "/youths-speak-out-on-violence/",
    tags     : ["chicago youth", "Englewood community", "Facebook", "Imagine Englewood If", "Nuf Said", "youth violence"],
    },
    
    {
    title    : "Do Students Trust Authority?",
    url      : "/do-students-trust-authority/",
    tags     : ["Altgeld Gardens", "Chicago youth violence", "Nuff Said", "youth media", "youth violence"],
    },
    
    {
    title    : "Pollution Affects Everyone",
    url      : "/pollution-affects-everyone/",
    tags     : ["Ald. Pat Dowell", "flooding", "Nuff Said", "pollution", "waste management"],
    },
    
    {
    title    : "Recycling on the South Side",
    url      : "/recycling-on-the-south-side/",
    tags     : ["Altgeld Gardens", "People for Community Recovery", "recycling", "the resource center", "waste management"],
    },
    
    {
    title    : "Resident's Journal Senior Reporter talking about an Historical Chicago Bronzeville Monument Project",
    url      : "/residents-journal-senior-reporter-talking-about-an-historical-chicago-bronzeville-monument-project/",
    tags     : ["Chicago Bronzeville community", "Chicago Bronzeville Merchants Association", "Chicago Historical Monuments", "Chicago Obelisks"],
    },
    
    {
    title    : "Residents' Journal Editor-in-Chief Discussing Chicago Mayoral Election and CPD Protest",
    url      : "/residents-journal-editor-in-chief-discussing-mayoral-election-and-cpd-protest/",
    tags     : ["Chicago 2011 Mayoral Election", "Chicago Police Department", "Chicago police union", "police rally", "Superintendant Jody Weis"],
    },
    
    {
    title    : "RJ Youth Instructor Discussing Teen Project with Youth Reporter",
    url      : "/rj-youth-instructor-discussing-teen-project-with-youth-reporter/",
    tags     : ["chicago public schools", "teen violence", "youth jobs", "youth violence"],
    },
    
    {
    title    : "Residents' Journal Publisher talking about Deficiencies in DCFS System",
    url      : "/residents-journal-publisher-talking-about-deficiencies-in-dcfs-system/",
    tags     : ["Child Abuse", "DCFS", "Family Defense Center"],
    },
    
    {
    title    : "CHA Youth Shopping Spree with Chicago Bears Player",
    url      : "/cha-youth-shopping-spree-with-chicago-bears-player/",
    tags     : ["CHA Youth", "Chicago Bears Football Player Devin Aromashodu", "Chicago Housing Authority"],
    },
    
    {
    title    : "Bronzeville Residents' Efforts to Ban Liquor Sales in their Community",
    url      : "/residents-journal-can-tv-show-about-bronzeville-residents-efforts-to-ban-liquor-sales-in-their-community/",
    tags     : ["BRCC", "the Bronzeville Movement"],
    },
    
    {
    title    : "A Teens View of a recent Chicago Youth Summit",
    url      : "/residents-journal-can-tv-show-on-a-recent-chicago-youth-summit/",
    tags     : ["chicago public schools", "chicago youth", "chicago youth summit", "youth", "youth employment", "youth violence"],
    },
    
    {
    title    : "Should Liquor Stores Be Banned in Bronzeville?",
    url      : "/should-liquor-stores-be-banned-in-bronzeville/",
    tags     : ["Bronzeville", "CAN TV", "Chicago Bronzeville community", "Liquor Stores"],
    },
    
    {
    title    : "Changes to Federal Affirmative Action Law Underway",
    url      : "/changes-to-federal-affirmative-action-law-underway/",
    tags     : ["Affirmative Action", "people with disabilities", "US Dept. of Labor"],
    },
    
    {
    title    : "Residents' Journal Senior Reporter Discussing a Bronzeville Family History Research Project",
    url      : "/residents-journal-senior-reporter-discussing-a-bronzeville-family-history-research-project/",
    tags     : ["Bronzeville", "Bronzeville Alliance", "family history", "Geneology research", "history", "Pat Bearden"],
    },
    
    {
    title    : "Residents' Journal Reporters Share Results of Youth Surveys",
    url      : "/residents-journal-reporters-share-results-of-youth-surveys/",
    tags     : ["crime", "employment", "gang violence", "health", "homelessness", "housing", "jobs", "pollution", "the enviornment", "youth violence"],
    },
    
    {
    title    : "RJ Reporter talking about Youth Media Project",
    url      : "/rj-reporter-talking-about-youth-media-project/",
    tags     : ["crime", "education", "employment", "health", "homelessness", "housing", "youth violence"],
    },
    
    {
    title    : "New Stories from our Youth Reporters",
    url      : "/new-stories-from-our-youth-reporters/",
    tags     : [""],
    },
    
    {
    title    : "Where I Come From",
    url      : "/where-i-come-from/",
    tags     : ["Chicago Housing Authority", "chicago public schools", "library", "youth violence"],
    },
    
    {
    title    : "What We Need Now",
    url      : "/what-we-need-now/",
    tags     : ["Altgeld Gardens", "gang violence", "public housing", "youth programs"],
    },
    
    {
    title    : "Stepping Onto the Stage",
    url      : "/stepping-onto-the-stage/",
    tags     : ["Acting", "Drama Club"],
    },
    
    {
    title    : "From the Inside Looking Out: Bullying",
    url      : "/from-the-inside-looking-out-bullying/",
    tags     : ["Bullying", "chicago youth", "youth issues"],
    },
    
    {
    title    : "Altgeld Youth Protest Lack of Library",
    url      : "/altgeld-youth-protest-lack-of-library/",
    tags     : ["CHA Altgeld Gardens", "Chicago public housing", "library"],
    },
    
    {
    title    : "Altgeld Gardens Dentist",
    url      : "/altgeld-garden%e2%80%99s-dentist/",
    tags     : ["Altgeld Gardens", "Dental concerns", "dental hygiene", "healthcare"],
    },
    
    {
    title    : "Is Chase Bank a Slumlord?",
    url      : "/is-chase-bank-a-slumlord/",
    tags     : ["Chase bank", "Chicago homelessness", "eviction", "foreclosure"],
    },
    
    {
    title    : "FCC Public Hearing on Comcast Merge with NBC",
    url      : "/fcc-public-hearing-on-comcast-merge-with-nbc/",
    tags     : ["Chicago media", "Comcast", "FCC", "merger", "NBC"],
    },
    
    {
    title    : "FCC Public Hearing on Comcast Merger with NBCU/GE",
    url      : "/fcc-public-hearing-on-comcast-merger-with-nbcuge/",
    tags     : ["Chicago media", "FCC", "merger", "NBC"],
    },
    
    {
    title    : "Low-income Tenants Rally at Chase Bank",
    url      : "/low-income-tenants-rally-at-chase-bank/",
    tags     : ["Chase bank", "eviction", "protest"],
    },
    
    {
    title    : "Residents' Journal CAN TV Show on the Opening of the Chicago Housing Authority's Family Housing Wait List",
    url      : "/1396/",
    tags     : ["CANTV", "CHA"],
    },
    
    {
    title    : "As CHA Wait List Closes, Are Low-Income Families Bridging the Digital Divide?",
    url      : "/as-cha-wait-list-closes-are-low-income-families-bridging-the-digital-divide/",
    tags     : ["CHA wait list", "digital divide", "internet usage"],
    },
    
    {
    title    : "Cong. Danny Davis proposes anti-police torture legislation",
    url      : "/cong-danny-davis-proposes-anti-police-torture-legislation/",
    tags     : ["Chicago Police Department", "legislation", "Torture"],
    },
    
    {
    title    : "Lawsuit Underway after Guilty Verdict in Burge Trial",
    url      : "/lawsuit-underway-after-guilty-verdict-in-burge-trial/",
    tags     : ["Chicago Police Department", "lawsuit", "Mayor Richard M. Daley", "Torture"],
    },
    
    {
    title    : "HUD Renews 19 States’ HIV/AIDS Supportive Housing Programs",
    url      : "/hud-renews-19-states%e2%80%99-hivaids-supportive-housing-programs/",
    tags     : ["HIV/AIDS", "homelessness", "HUD"],
    },
    
    {
    title    : "A new season of RJ TV",
    url      : "/a-new-season-of-rj-tv-2/",
    tags     : ["CANTV"],
    },
    
    {
    title    : "An Important Message from the Publisher",
    url      : "/an-important-message-from-the-publisher/",
    tags     : [""],
    },
    
    {
    title    : "Community Steps Up for Victim’s Family",
    url      : "/community-steps-up-for-victim%e2%80%99s-family/",
    tags     : [""],
    },
    
    {
    title    : "At CHA Mixed-Income Sites, Owners Exempt from Smoke-Free Zones",
    url      : "/at-cha-mixed-income-sites-owners-exempt-from-smoke-free-zones/",
    tags     : ["CHA", "counseling", "mixed-income housing", "smoke-free zones", "smoking"],
    },
    
    {
    title    : "Leaving High School for the Real World",
    url      : "/leaving-high-school-for-the-real-world/",
    tags     : [""],
    },
    
    {
    title    : "On-Line Dangers",
    url      : "/on-line-dangers/",
    tags     : [""],
    },
    
    {
    title    : "Thoughts of Suicide",
    url      : "/thoughts-of-suicide/",
    tags     : [""],
    },
    
    {
    title    : "Senioritis",
    url      : "/senioritis/",
    tags     : [""],
    },
    
    {
    title    : "Making It Harder for Students to Get a License",
    url      : "/making-it-harder-for-students-to-get-a-license/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "Who is Principal Martinez?",
    url      : "/who-is-principal-martinez/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "What people think about Little Village Lawndale High School?",
    url      : "/what-people-think-about-little-village-lawndale-high-school/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "Why is the Question I Ask",
    url      : "/why-is-the-question-i-ask/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "The Birth of Death",
    url      : "/the-birth-of-death/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "Truancy Fees",
    url      : "/truancy-fees/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "The Times We Hurt Most",
    url      : "/the-times-we-hurt-most/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "Teens Working In and Out of School",
    url      : "/teens-working-in-and-out-of-school/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "Are You Warm for the Holidays?",
    url      : "/are-you-warm-for-the-holidays/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "My Thoughts About Fatherhood",
    url      : "/my-thoughts-about-fatherhood/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "DCFS: Inside View",
    url      : "/dcfs-inside-view/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "Both Sides of Police Brutality",
    url      : "/both-sides-of-police-brutality/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "Phased Out",
    url      : "/phased-out/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "New Issue of Residents' Journal Now On Line",
    url      : "/new-issue-of-residents-journal-now-on-line/",
    tags     : [""],
    },
    
    {
    title    : "Dealing with the Digital Television Transition",
    url      : "/dealing-with-the-digital-television-transition/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "Are Illinois' Drug Laws Racially Biased?",
    url      : "/are-illinois-drug-laws-racially-biased/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "An Addiction to Self-Discovery",
    url      : "/an-addiction-to-self-discovery/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "Bronzeville Memorialized",
    url      : "/bronzeville-memorialized/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "Faith Leaders Call for School Reform",
    url      : "/faith-leaders-call-for-school-reform/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "Urban League Sues for School Equity",
    url      : "/urban-league-sues-for-school-equity/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "Budget Woes Nationwide",
    url      : "/budget-woes-nationwide/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "US Reps Issue New Call to Stop Demolitions",
    url      : "/us-reps-issue-new-call-to-stop-demolitions/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "Stepping Up",
    url      : "/stepping-up/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "Putting Animal Cruelty In Perspective",
    url      : "/putting-animal-cruelty-in-perspective/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "What's Love Got to Do With It?",
    url      : "/whats-love-got-to-do-with-it/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "Rethinking Abortion",
    url      : "/rethinking-abortion/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "A Facebook Addiction",
    url      : "/a-facebook-addiction/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "Danger Zone",
    url      : "/danger-zone/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "Mayor Daley Visits South Shore High School",
    url      : "/mayor-daley-visits-south-shore-high-school/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "Teen Pregnancy Hits Teens Hard",
    url      : "/teen-pregnancy-hits-teens-hard/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "Mohawks",
    url      : "/mohawks/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "Long John Shivers",
    url      : "/long-john-shivers/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "Germs",
    url      : "/germs/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "Personal Hygiene",
    url      : "/1114/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "Youth hearing on schools, jobs and justice",
    url      : "/youth-hearing-on-schools-jobs-and-justice/",
    tags     : [""],
    },
    
    {
    title    : "Town hall meeting on the human right to mental health services",
    url      : "/town-hall-meeting-on-the-human-right-to-mental-health-services/",
    tags     : [""],
    },
    
    {
    title    : "A Tale of Two Cities",
    url      : "/a-tale-of-two-cities/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "After Katrina, New Orleans Still Turbulent",
    url      : "/after-katrina-new-orleans-still-turbulent/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "Invasion of the Bedbugs",
    url      : "/invasion-of-the-bedbugs/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "Off The Edge",
    url      : "/off-the-edge/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "LeClaire Courts' Demise",
    url      : "/leclaire-courts-demise/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "Lathrop Tenants Object to CHA's Plan",
    url      : "/lathrop-tenants-object-to-chas-plan/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "Atgeld Residents: New School Will Curb Violence",
    url      : "/atgeld-residents-new-school-will-curb-violence/",
    tags     : ["spring 2010 issue"],
    },
    
    {
    title    : "Ickes Homes News: The Final Curtain?",
    url      : "/ickes-homes-news-the-final-curtain/",
    tags     : ["American Recovery and Rehabilitation Act", "CHA", "Chicago", "Chicago Housing Authority", "demolition", "Harold Ickes Homes", "HUD", "public housing", "Section 8", "spring 2010 issue"],
    },
    
    {
    title    : "Relocation Rights Duel",
    url      : "/relocation-rights-duel/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "negligence", "Plan for Transformation", "public housing", "public housing residents", "relocation", "Relocation Rights Contract", "spring 2010 issue"],
    },
    
    {
    title    : "Tenants Protest New CHA School Reporting Policy",
    url      : "/tenants-protest-new-cha-school-reporting-policy/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "community involvement", "education", "legislation", "public hearing", "public housing", "spring 2010 issue"],
    },
    
    {
    title    : "Robert Taylor On Line",
    url      : "/robert-taylor-on-line/",
    tags     : ["CHA", "Chicago Housing Authority", "chicago youth", "community involvement", "digital divide", "housing", "Plan for Transformation", "public housing", "redevelopment", "relocation", "Robert Taylor Homes", "Section 8", "spring 2010 issue"],
    },
    
    {
    title    : "CHA Holds Public Hearing: Only Two Residents Show",
    url      : "/cha-holds-public-hearing-only-two-residents-show/",
    tags     : [""],
    },
    
    {
    title    : "New Website Launched on Chicago Government Accountability",
    url      : "/new-website-launched-on-chicago-government-accountability/",
    tags     : [""],
    },
    
    {
    title    : "Chicago Defender Charities Feed the Homeless",
    url      : "/we-the-people-medias-new-video-site-2/",
    tags     : [""],
    },
    
    {
    title    : "We The People Media's New Video Site",
    url      : "/we-the-people-medias-new-video-site/",
    tags     : ["CANTV", "multimedia", "We The People Media", "Youtube"],
    },
    
    {
    title    : "A new season of RJ TV",
    url      : "/a-new-season-of-rj-tv/",
    tags     : ["CAN TV", "Chicago", "RJ TV", "We The People Media"],
    },
    
    {
    title    : "Youth Media Reporter",
    url      : "/youth-media-reporter/",
    tags     : ["journalism", "UYIJP", "Youth Media Reporter", "Youth Program"],
    },
    
    {
    title    : "An Inside Out Experience",
    url      : "/an-inside-out-experience/",
    tags     : ["CHA", "exhibition", "HUD", "Illinois Humanities Council.", "Jane Adams Homes", "national public housing museum", "public funding", "public housing"],
    },
    
    {
    title    : "CAN TV Devotes Entire Day Programming to “Stop the Violence” in the City of Chicago",
    url      : "/can-tv-devotes-entire-day-programming-to-stop-the-violence-in-the-city-of-chicago/",
    tags     : ["CAN TV", "Chicago violence", "chicago youth", "community involvement", "Stop the Violence"],
    },
    
    {
    title    : "Born Out of Struggle (Part 1)",
    url      : "/born-out-of-struggle-part-1/",
    tags     : ["chicago public schools", "education", "hunger strike", "social justice", "spring 2009 issue"],
    },
    
    {
    title    : "The Obama Cave",
    url      : "/the-obama-cave/",
    tags     : ["Barack Obama", "election", "political campaign", "politics", "spring 2009 issue", "voting", "Youth Coverage of Barack Obama"],
    },
    
    {
    title    : "Youths Take Charge",
    url      : "/youths-take-charge/",
    tags     : ["2008 presidential election", "Barack Obama", "spring 2009 issue", "youth voting"],
    },
    
    {
    title    : "The Scene",
    url      : "/the-scene/",
    tags     : ["2008 presidential election", "Early Voting", "spring 2009 issue"],
    },
    
    {
    title    : "Inauguration",
    url      : "/inauguration/",
    tags     : ["2008 presidential election", "Barack Obama", "presidential inauguration", "spring 2009 issue", "Youth Coverage of Barack Obama"],
    },
    
    {
    title    : "Is South Shore Clean?",
    url      : "/is-south-shore-clean/",
    tags     : ["chicago public schools", "education", "littering", "public sanitation", "South Shore", "spring 2009 issue"],
    },
    
    {
    title    : "Play Now, Pay Later",
    url      : "/play-now-pay-later/",
    tags     : ["education", "night school", "spring 2009 issue", "truancy"],
    },
    
    {
    title    : "Cafeteria Food",
    url      : "/cafeteria-food/",
    tags     : ["chicago public schools", "child obesity", "health", "South Shore High School", "spring 2009 issue"],
    },
    
    {
    title    : "Teacher of the Month",
    url      : "/teacher-of-the-month/",
    tags     : ["education", "spring 2009 issue", "teacher of the month"],
    },
    
    {
    title    : "Memories of R. Taylor",
    url      : "/memories-of-r-taylor/",
    tags     : ["community", "demolition", "public housing", "Robert Taylor Homes", "spring 2009 issue"],
    },
    
    {
    title    : "Voice of the Voiceless",
    url      : "/voice-of-the-voiceless/",
    tags     : ["in memoriam", "inspiration", "obituary", "spring 2009 issue"],
    },
    
    {
    title    : "Food Deserts",
    url      : "/food-deserts/",
    tags     : ["Food Desert", "food scarcity", "grocery shopping", "nutrition", "obesity", "spring 2009 issue", "Wentworth Gardens"],
    },
    
    {
    title    : "Where I'm Coming From",
    url      : "/where-im-coming-from/",
    tags     : ["Chicago teens", "spring 2009 issue", "teen issues"],
    },
    
    {
    title    : "A Day in the Life of a JROTC Cadet",
    url      : "/a-day-in-the-life-of-a-jrotc-cadet/",
    tags     : ["Bronzeville", "Chicago Military Academy", "JROTC", "spring 2009 issue"],
    },
    
    {
    title    : "CPS Fan Restrictions",
    url      : "/cps-fan-restrictions/",
    tags     : ["basketball", "chicago public schools", "Chicago violence", "sports administration", "spring 2009 issue"],
    },
    
    {
    title    : "A Stacked Deck",
    url      : "/a-stacked-deck/",
    tags     : ["spring 2009 issue"],
    },
    
    {
    title    : "The Spring 2009 Issue of Residents'  Journal is Now Online",
    url      : "/the-spring-2009-issue-of-residents-journal-is-now-online/",
    tags     : ["circulation", "online journalism", "We The People Media"],
    },
    
    {
    title    : "The CHA Plan Is Dead",
    url      : "/the-cha-plan-is-dead/",
    tags     : ["CHA Plan for Transformation", "drug testing", "federal funding", "Mayor Richard M. Daley", "mixed income communities", "Robert Taylor Homes", "Section 8", "spring 2009 issue"],
    },
    
    {
    title    : "Homeless Vets Speak Out",
    url      : "/homeless-vets-speak-out/",
    tags     : ["Barack Obama", "homelessness", "Project CHALENG", "spring 2009 issue", "Vetarans Administration", "veterans", "Volunteers of America"],
    },
    
    {
    title    : "The White House Agenda for the Poor",
    url      : "/the-white-house-agenda-for-the-poor/",
    tags     : ["federal funding", "federal policy", "HUD", "No Child Left Behind Program", "President Barack Obama", "senior citizens", "social security", "spring 2009 issue"],
    },
    
    {
    title    : "Harold Ickes Homes Update",
    url      : "/harold-ickes-homes-update/",
    tags     : ["CHA Plan for Transformation", "Harold Ickes Homes", "HUD", "spring 2009 issue"],
    },
    
    {
    title    : "Ickes Leader Challenges CHA CEO",
    url      : "/ickes-leader-challenges-cha-ceo/",
    tags     : ["CHA", "Dearborn Homes", "Harold Ickes Homes", "LAC", "Lewis Jordan", "spring 2009 issue"],
    },
    
    {
    title    : "CHA’s Safe Harbor Gets Bigger",
    url      : "/chas-safe-harbor-gets-bigger/",
    tags     : ["CAC", "CHA Plan for Transformation", "Safe Harbor", "spring 2009 issue"],
    },
    
    {
    title    : "Residents Blame CHA for School Closures",
    url      : "/residents-blame-cha-for-school-closures/",
    tags     : ["Cabrini-Green", "CHA Plan for Transformation", "chicago public schools", "education", "redevelopment", "Section 8", "spring 2009 issue"],
    },
    
    {
    title    : "Under Fire, Board Closes Schools Anyway",
    url      : "/under-fire-board-closes-schools-anyway/",
    tags     : ["Chicago Board of Education", "chicago public schools", "Chicago Teachers' Union", "education", "spring 2009 issue"],
    },
    
    {
    title    : "U. S. Citizens Decry Relatives’ Deportation",
    url      : "/u-s-citizens-decry-relatives-deportation/",
    tags     : ["deportation", "immigration reform", "spring 2009 issue"],
    },
    
    {
    title    : "Immigration Concerns",
    url      : "/immigration-concerns/",
    tags     : ["immigration", "Immigration and Customs Enforcement", "JCUA", "petition", "spring 2009 issue"],
    },
    
    {
    title    : "Burge Victims’ Attorneys Fight Transfers",
    url      : "/burge-victims-attorneys-fight-transfers/",
    tags     : ["Chicago Police Department", "lawsuits", "spring 2009 issue", "Torture"],
    },
    
    {
    title    : "Wrongfully Convicted Man Files New Petition for Justice",
    url      : "/wrongfully-convicted-man-files-new-petition-for-justice/",
    tags     : ["spring 2009 issue", "wrongful imprisonment"],
    },
    
    {
    title    : "Cops Fight Their Own Over Burge",
    url      : "/cops-fight-their-own-over-burge/",
    tags     : ["Chicago Police Department", "Fraternal Order of the Police", "lawsuits", "police funding", "spring 2009 issue", "Torture"],
    },
    
    {
    title    : "Grandparents Raising Grandchildren",
    url      : "/grandparents-raising-grandchildren/",
    tags     : ["DCFS", "fixed income", "Grandfamily Support Program", "grandparents", "spring 2009 issue"],
    },
    
    {
    title    : "Child Sex Abuse: The Hidden Holocaust",
    url      : "/child-sex-abuse-the-hidden-holocaust/",
    tags     : ["spring 2009 issue"],
    },
    
    {
    title    : "Protestors Target Clinic Closures",
    url      : "/protestors-target-clinic-closures/",
    tags     : ["spring 2009 issue"],
    },
    
    {
    title    : "A Health Report on Aneurysm",
    url      : "/a-health-report-on-aneurysm/",
    tags     : ["spring 2009 issue"],
    },
    
    {
    title    : "Black History Tour Marks Historical Undertaking",
    url      : "/black-history-tour-marks-historical-undertaking/",
    tags     : ["spring 2009 issue"],
    },
    
    {
    title    : "Longest Living ABLA Homes Resident Dies",
    url      : "/longest-living-abla-homes-resident-dies/",
    tags     : ["spring 2009 issue"],
    },
    
    {
    title    : "How Should Replacement U. S. Senators Be Chosen?",
    url      : "/how-should-replacement-u-s-senators-be-chosen/",
    tags     : ["spring 2009 issue"],
    },
    
    {
    title    : "House Passes Digital TV Delay",
    url      : "/house-passes-digital-tv-delay/",
    tags     : ["digital television", "media policy", "national legislation", "The Nielsen Company", "US House of Representatives"],
    },
    
    {
    title    : "Congress Still Trying for DTV Transition Delay",
    url      : "/congress-still-trying-for-dtv-transition-delay/",
    tags     : ["digital television", "media policy", "US House of Representatives"],
    },
    
    {
    title    : "Update: U. S. Senate Advances Digital TV Delay",
    url      : "/update-u-s-senate-advances-digital-tv-delay/",
    tags     : ["digital television", "DTV transition", "media policy", "The Nielsen Company"],
    },
    
    {
    title    : "Obama Urges Delay in Digital TV Shift",
    url      : "/obama-urges-delay-in-digital-tv-shift/",
    tags     : ["Barack Obama", "digital television", "DTV transition", "media policy", "US Congress"],
    },
    
    {
    title    : "Youths Testify for Alternative Schools",
    url      : "/youths-testify-for-alternative-schools/",
    tags     : ["Bronzeville", "Chicago Urban League", "chicago youth", "dropout rate", "education funding", "youth programs"],
    },
    
    {
    title    : "Roland Burris Tapped for Vacant U. S. Senate Seat",
    url      : "/roland-burris-tapped-for-vacant-u-s-senate-seat/",
    tags     : ["Governor Blagojevich", "investigation", "Roland Burris", "US senate appointment"],
    },
    
    {
    title    : "Obama: Bush Administration Automaker Plan a “Necessary Step.”",
    url      : "/obama-bush-administration-automaker-plan-a-necessary-step/",
    tags     : ["automotive industry", "Barack Obama", "bipartisanship", "financial crisis", "President George W. Bush"],
    },
    
    {
    title    : "President-Elect Obama Nominates Former Senator Secretary of Health and Human Services",
    url      : "/president-elect-obama-nominates-former-senator-secretary-of-health-and-human-services/",
    tags     : ["Barack Obama", "national healthcare", "White House Office of Health Reform"],
    },
    
    {
    title    : "Statement from President-elect Barack Obama on Human Rights Day",
    url      : "/statement-from-president-elect-barack-obama-on-human-rights-day/",
    tags     : ["Barack Obama", "Human Rights Day"],
    },
    
    {
    title    : "The Times They Are A’Changing",
    url      : "/the-times-they-are-achanging/",
    tags     : ["Chicago Police Department", "fall 2008 issue", "lawsuit", "Mayor Richard M. Daley", "political reform", "Torture"],
    },
    
    {
    title    : "‘Train Wreck’ Expected for TV Transition",
    url      : "/train-wreck-expected-for-tv-transition/",
    tags     : ["digital tv", "DTV transition", "fall 2008 issue"],
    },
    
    {
    title    : "CHA Seniors Keep Waiting to Return Home",
    url      : "/cha-seniors-keep-waiting-to-return-home/",
    tags     : ["CHA", "CHA Plan for Transformation", "fall 2008 issue", "HUD", "public housing", "relocation", "renovation", "senior citizens"],
    },
    
    {
    title    : "U.S. Reps Call For Moratorium On Public Housing Demolitions",
    url      : "/u-s-reps-call-for-moratorium-on-public-housing-demolitions/",
    tags     : ["fall 2008 issue", "HUD", "public housing demolition"],
    },
    
    {
    title    : "Harold L. Ickes Homes News",
    url      : "/harold-l-ickes-homes-news/",
    tags     : ["Chicago Police Department", "fall 2008 issue", "Harold Ickes Homes", "police harassment", "Section 8"],
    },
    
    {
    title    : "CHA Goes on the Defensive about Child's Death",
    url      : "/cha-goes-on-the-defensive-about-childs-death/",
    tags     : ["Cabrini-Green", "CHA", "fall 2008 issue", "unsafe living conditions", "youth danger"],
    },
    
    {
    title    : "Congress Accuses HUD of Mismanagement",
    url      : "/congress-accuses-hud-of-mismanagement/",
    tags     : ["fall 2008 issue", "HUD", "LAC", "Section 8"],
    },
    
    {
    title    : "New Funding for Chicago Rental Subsidies",
    url      : "/new-funding-for-chicago-rental-subsidies/",
    tags     : ["fall 2008 issue", "Low Income Housing Trust Fund"],
    },
    
    {
    title    : "The Fall 2008 Issue of Residents'  Journal is Now Online",
    url      : "/the-fall-2008-issue-of-residents-journal-is-now-online/",
    tags     : ["circulation", "online journalism"],
    },
    
    {
    title    : "Sisters Form a Brotherhood",
    url      : "/sisters-form-a-brotherhood/",
    tags     : ["chicago public schools", "fall 2008 issue", "non-profits", "Operation Brotherhood", "Women's History Month", "women's rights"],
    },
    
    {
    title    : "Lathrop Residents Want Vacant Units Occupied",
    url      : "/lathrop-residents-want-vacant-units-occupied/",
    tags     : ["CHA", "fall 2008 issue", "HUD", "Lathrop Homes", "One Strike Policy", "protestors"],
    },
    
    {
    title    : "The Audacity of Forgiveness",
    url      : "/the-audacity-of-forgiveness/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "Reports Finds Child Care More Expensive than Rent",
    url      : "/reports-finds-child-care-more-expensive-than-rent/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "One Man Giving Back to the Community",
    url      : "/one-man-giving-back-to-the-community/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "Stop The Violence",
    url      : "/stop-the-violence/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "Crystal Clear Views",
    url      : "/crystal-clear-views/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "Reforms Needed at Tamms Supermax Prison",
    url      : "/reforms-needed-at-tamms-supermax-prison/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "Sheriff Gets Safeguards for Evicted Tenants",
    url      : "/sheriff-gets-safeguards-for-evicted-tenants/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "Increasing Numbers of Homeless Seniors",
    url      : "/increasing-numbers-of-homeless-seniors/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "Saving A Piece of History in Cabrini Green",
    url      : "/saving-a-piece-of-history-in-cabrini-green/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "Illinois Gov. Rod Blagojevich and Top Aide Arrested on Federal Corruption Charges",
    url      : "/illinois-gov-rod-blagojevich-and-top-aide-arrested-on-federal-corruption-charges/",
    tags     : [""],
    },
    
    {
    title    : "A Statement from President-elect Barack Obama on Current Job Losses",
    url      : "/a-statement-from-president-elect-barack-obama-on-current-job-losses/",
    tags     : [""],
    },
    
    {
    title    : "President-Elect Obama Picks Former Democratic Challenger as Secretary of Commerce",
    url      : "/president-elect-obama-picks-former-democratic-challenger-as-secretary-of-commerce/",
    tags     : [""],
    },
    
    {
    title    : "CHA Report: Crime Rates Not Linked to CHA Relocatees",
    url      : "/cha-report-crime-rates-not-linked-to-cha-relocatees/",
    tags     : ["CHA", "Lewis Jordan", "Plan for Transformation"],
    },
    
    {
    title    : "The Wells",
    url      : "/the-wells/",
    tags     : ["poem", "The Wells", "winter 2008 issue"],
    },
    
    {
    title    : "Everyday Life",
    url      : "/everyday-life/",
    tags     : ["Ida B. Wells", "winter 2008 issue"],
    },
    
    {
    title    : "Stereotypes",
    url      : "/stereotypes/",
    tags     : ["Ida B. Wells", "public housing stereotypes", "winter 2008 issue"],
    },
    
    {
    title    : "A Year Later",
    url      : "/a-year-later/",
    tags     : ["Ida B. Wells", "Oakwood Shores", "winter 2008 issue"],
    },
    
    {
    title    : "Growing Up",
    url      : "/growing-up/",
    tags     : ["Chicago violence", "demolition", "Ida B. Wells", "winter 2008 issue"],
    },
    
    {
    title    : "This Ain't That",
    url      : "/this-aint-that/",
    tags     : ["Ida B. Wells", "Oakwood Shores", "winter 2008 issue"],
    },
    
    {
    title    : "Penalties",
    url      : "/penalties/",
    tags     : ["CHA", "Oakwood Shores", "One Strike Policy", "Section 8", "winter 2008 issue"],
    },
    
    {
    title    : "Me and My Hood",
    url      : "/me-and-my-hood/",
    tags     : ["Ida B. Wells", "poetry", "winter 2008 issue"],
    },
    
    {
    title    : "I Ain't...",
    url      : "/i-aint/",
    tags     : ["poetry", "winter 2008 issue"],
    },
    
    {
    title    : "Haters",
    url      : "/haters/",
    tags     : ["winter 2008 issue"],
    },
    
    {
    title    : "Bonnita's Autobiography",
    url      : "/bonnitas-autobiography/",
    tags     : ["winter 2008 issue"],
    },
    
    {
    title    : "Drug Addicts: A Childhood Life with a Mother on Drugs Part Two",
    url      : "/drug-addicts-a-childhood-life-with-a-mother-on-drugs-part-two/",
    tags     : ["DCFS", "drug use", "winter 2008 issue"],
    },
    
    {
    title    : "Shop Talk",
    url      : "/shop-talk/",
    tags     : ["winter 2008 issue"],
    },
    
    {
    title    : "Domestic Violence Awareness Report",
    url      : "/domestic-violence-awareness-report/",
    tags     : ["winter 2008 issue"],
    },
    
    {
    title    : "Genetic Testing and Personal Responsibility",
    url      : "/genetic-testing-and-personal-responsibility/",
    tags     : ["winter 2008 issue"],
    },
    
    {
    title    : "Crystal Clear Views",
    url      : "/homelessness-a-constant-american-tragedy/",
    tags     : ["winter 2008 issue"],
    },
    
    {
    title    : "The Aftermath of Relocation",
    url      : "/the-aftermath-of-relocation/",
    tags     : ["relocation", "winter 2008 issue"],
    },
    
    {
    title    : "The Pros and Cons of Relocation",
    url      : "/pros-and-cons-of-relocation/",
    tags     : ["relocation", "winter 2008 issue"],
    },
    
    {
    title    : "Lathrop Homes Targeted for Redevelopment",
    url      : "/lathrop-homes-targeted-for-redevelopment/",
    tags     : ["CHA", "Lathrop Homes", "winter 2008 issue"],
    },
    
    {
    title    : "Harold Ickes News",
    url      : "/harold-ickes-news/",
    tags     : ["Harold Ickes Homes", "winter 2008 issue"],
    },
    
    {
    title    : "Seniors Protest Rent Rise",
    url      : "/seniors-protest-rent-rise/",
    tags     : ["CHA", "rent prices", "winter 2008 issue"],
    },
    
    {
    title    : "Cook County Health Bureau News",
    url      : "/cook-county-health-bureau-news/",
    tags     : ["Cook County", "health department", "winter 2008 issue"],
    },
    
    {
    title    : "A Katrina Victim's Personal Ordeal",
    url      : "/a-katrina-victims-personal-ordeal-2/",
    tags     : ["Hurricane Katrina", "winter 2008 issue"],
    },
    
    {
    title    : "Tenants Council Battles To Represent Residents",
    url      : "/tenants-council-battles-to-represent-residents/",
    tags     : ["CHA", "winter 2008 issue"],
    },
    
    {
    title    : "Jackson Visits Ickes",
    url      : "/jackson-visits-ickes/",
    tags     : ["Harold Ickes Homes", "Rev. Jesse Jackson", "winter 2008 issue"],
    },
    
    {
    title    : "Are CPD Contact Cards Unconstitutional?",
    url      : "/are-cpd-contact-cards-unconstitutional/",
    tags     : ["Chicago Police Department", "winter 2008 issue"],
    },
    
    {
    title    : "CHA New Work Rule Questioned",
    url      : "/cha-new-work-rule-questioned/",
    tags     : ["CHA", "homelessness", "winter 2008 issue"],
    },
    
    {
    title    : "Who Could Miss The Hole?",
    url      : "/who-could-miss-the-hole/",
    tags     : ["CHA", "Chicago Housing Authority", "HUD", "Plan for Transformation", "public housing", "public housing residents", "redevelopment", "Robert Taylor Homes", "Stateway Gardens", "the Hole", "winter 2008 issue"],
    },
    
    {
    title    : "My Life, My Story, My Song",
    url      : "/my-life-my-story-my-song/",
    tags     : ["fall 2008 issue"],
    },
    
    {
    title    : "A Special Tribute",
    url      : "/a-special-tribute/",
    tags     : ["advocacy", "Chicago", "community involvement", "Izora Davis", "january 2007 issue", "living conditions", "McCormick Place", "public housing residents", "S. Lake Park", "tribute"],
    },
    
    {
    title    : "Crystal Clear Views",
    url      : "/crystal-clear-views-2/",
    tags     : ["advice", "asthma", "health issues", "january 2007 issue", "personal story", "symptoms"],
    },
    
    {
    title    : "Whose School Is It?",
    url      : "/whose-school-is-it/",
    tags     : ["attendance", "attendance boundaries", "Chicago", "Chicago Latino community", "chicago public schools", "education", "january 2007 issue", "Little Village High School", "referendum", "student population", "students"],
    },
    
    {
    title    : "Illegal Immigration: Cries For Justice",
    url      : "/illegal-immigration-cries-for-justice/",
    tags     : ["advocacy", "Chicago", "citizenship", "illegal immigration", "Illinois Coalition for Immigrant and Refugee Rights", "immigration", "january 2007 issue", "legalization", "legislation", "North American Free Trade Agreement", "rally", "reform", "social justice", "undocumented workers", "VOTE"],
    },
    
    {
    title    : "A Questionable Connection Update",
    url      : "/a-questionable-connection-update/",
    tags     : ["CHA donations", "january 2007 issue", "questionable practices"],
    },
    
    {
    title    : "Guard Recklessly Shoots CHA Youth",
    url      : "/guard-recklessly-shoots-cha-youth/",
    tags     : ["gun violence", "january 2007 issue"],
    },
    
    {
    title    : "Altgeld Gardens News",
    url      : "/altgeld-garden-news/",
    tags     : ["Altgeld Gardens", "CHA", "Chicago Housing Authority", "Chicago public housing", "january 2007 issue", "remodeling"],
    },
    
    {
    title    : "Ickes and Other CHA News",
    url      : "/ickes-and-other-cha-news/",
    tags     : ["CHA", "Harold Ickes Homes", "january 2007 issue"],
    },
    
    {
    title    : "Last Days At Ogden Courts",
    url      : "/last-days-at-ogden-courts/",
    tags     : ["january 2007 issue", "ogden courts"],
    },
    
    {
    title    : "Security Problems Continue for Residents",
    url      : "/security-problems-continue-for-residents/",
    tags     : ["january 2007 issue", "low income housing security"],
    },
    
    {
    title    : "Checking Chicago's War on Drugs",
    url      : "/checking-chicagos-war-on-drugs/",
    tags     : ["Chicago Police Department", "illegal drugs", "january 2007 issue"],
    },
    
    {
    title    : "House of Screams",
    url      : "/house-of-screams/",
    tags     : ["Chicago", "Chicago Police Department", "injustice", "january 2007 issue", "Jon Burge", "police brutality", "Torture","Ulysses U.S. Floyd"],
    },
    
    {
    title    : "Publisher's Box",
    url      : "/publishers-box/",
    tags     : ["Chicago", "Chicago Police Department", "Dearborn Homes", "freedom of the press", "january 2007 issue", "police mistreatment", "public housing"],
    },
    
    {
    title    : "Black History Through Performance",
    url      : "/black-history-through-performance/",
    tags     : ["Apostolic Church Choir of Chicago", "black history month", "Chicago", "Cliff Kelley", "entertainment", "February", "february march 2006 issue", "Frederick Douglass", "Harlan High School", "Kevin McIlvaine", "Positive Reinforcement through Identity Development and Education", "pride", "WVON"],
    },
    
    {
    title    : "Stop the Violence",
    url      : "/stop-the-violence-2/",
    tags     : ["Chicago", "employment", "ex-offenders", "february march 2006 issue", "Michael Barlow Center", "One Strike", "St. Leanord's Ministries", "West Side"],
    },
    
    {
    title    : "CHA Development News",
    url      : "/cha-development-news/",
    tags     : ["Altgeld Gardens", "Annual Low End Productions Basketball League", "CHA", "Chicago", "Chicago Housing Authority", "community involvement", "culture", "entertainment", "february march 2006 issue", "Harold Ickes Homes", "public housing", "public housing residents", "Sunday Night Steppers Set"],
    },
    
    {
    title    : "Pilsen Guards Against Gentrifyers",
    url      : "/pilsen-guards-against-gentrifyers/",
    tags     : ["Chicago", "community involvement", "february march 2006 issue", "Lipe Property Company", "neighborhood development", "Pilsen", "press conference", "protest"],
    },
    
    {
    title    : "CHA Contracting Woes",
    url      : "/cha-contracting-woes/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "february march 2006 issue", "HUD", "lawsuit", "Plan for Transformation", "public housing", "public housing residents", "Robert Taylor Homes", "William Moorehead and Associates"],
    },
    
    {
    title    : "State Passes Support for Renters",
    url      : "/state-passes-support-for-renters/",
    tags     : ["affordable housing", "Chicago", "february march 2006 issue", "funding", "homelessness", "Illinois", "legislation", "Rental Housing Support Program"],
    },
    
    {
    title    : "Bird Flu Pandemic Expected",
    url      : "/bird-flu-pandemic-expected/",
    tags     : ["bird flu", "february march 2006 issue", "health issues", "Influenza Preparedness", "national health", "pandemic", "Senate Bill 2112", "vaccines"],
    },
    
    {
    title    : "Jones vs. Tatum",
    url      : "/jones-vs-tatum/",
    tags     : ["campaign", "education", "february march 2006 issue", "Illinois", "Lovanna Jones", "politics", "primary election", "public housing", "Ranoule Tatum", "state representative"],
    },
    
    {
    title    : "Rush vs. Jackson",
    url      : "/rush-vs-jackson/",
    tags     : ["Bobby Rush", "CHA", "Chicago Housing Authority", "education", "ex-offenders", "february march 2006 issue", "Illinois", "Phillip Jackson", "politics", "primary election"],
    },
    
    {
    title    : "Cook County Presidential Race",
    url      : "/cook-county-presidential-race/",
    tags     : ["campaign", "contributions", "Cook County Board", "election", "february march 2006 issue", "Forrest Claypool", "John Stroger", "politics", "primary race"],
    },
    
    {
    title    : "Troubling Development Update",
    url      : "/troubling-development-update/",
    tags     : ["Chicago", "Dearborn Homes", "drug activity", "drug issues", "february march 2006 issue", "gang activity", "Harold Ickes Homes", "Ida B. Wells", "illegal drugs", "Leclaire Courts", "police protection", "public housing"],
    },
    
    {
    title    : "Deadly Moves II",
    url      : "/deadly-moves-ii/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "Chicago Police Department", "CPD", "crime", "february march 2006 issue", "investigation", "murder rate", "Plan for Transformation", "public housing", "violence"],
    },
    
    {
    title    : "Update: Questions Linger, Contributions Dwindle",
    url      : "/update-questions-linger-contributions-dwindle/",
    tags     : ["17th Ward Democratic Organization", "A Questionable Connection", "CHA", "Chicago", "Chicago Housing Authority", "donations", "february march 2006 issue", "funding", "investigation", "politics", "Terry Peterson"],
    },
    
    {
    title    : "Victory at Bridgeport Homes",
    url      : "/victory-at-bridgeport-homes/",
    tags     : ["A Questionable Connection", "Bridgeport Homes", "CHA", "Chicago", "Chicago public housing", "february march 2006 issue", "living conditions", "management", "public housing", "public housing residents", "South Side", "Terry Peterson"],
    },
    
    {
    title    : "Publisher's Box",
    url      : "/publishers-box-2/",
    tags     : ["awards", "CAN TV", "Chicago", "Deadly Moves", "february march 2006 issue", "funding", "hiatus", "journalism", "Media Collaboration", "relocation", "RJ TV", "Society of Professional Journalists"],
    },
    
    {
    title    : "Harold Ickes News",
    url      : "/harold-ickes-news-2/",
    tags     : ["Chicago", "community involvement", "education", "february march 2005 issue", "Harold Ickes Homes", "living conditions", "National Teachers' Academy", "public housing", "public housing residents"],
    },
    
    {
    title    : "Crystal Clear Views",
    url      : "/crystal-clear-views-3/",
    tags     : ["advice", "diet", "exercise", "february march 2005 issue", "health", "lifestyle"],
    },
    
    {
    title    : "Black Metropolis National Heritage Area Project",
    url      : "/black-metropolis-national-heritage-area-project/",
    tags     : ["Black Metropolis", "Bronzeville", "Chicago", "community involvement", "culture", "february march 2005 issue", "National Heritage Area", "National Park Service", "NHA"],
    },
    
    {
    title    : "Healthcare Justice Act Raises Hopes",
    url      : "/healthcare-justice-act-raises-hopes/",
    tags     : ["Campaign for Better Healthcare", "february march 2005 issue", "healthcare", "Healthcare Justice Act", "Illinois", "legislation"],
    },
    
    {
    title    : "Senior Services 2005 and Beyond",
    url      : "/senior-services-2005-and-beyond/",
    tags     : ["Access Living", "Chicago", "El Valor", "february march 2005 issue", "outreach", "senior citizens", "social services"],
    },
    
    {
    title    : "Tales of Lawndale Housing",
    url      : "/tales-of-lawndale-housing/",
    tags     : ["Chicago", "february march 2005 issue", "HUD", "Lawndale Housing", "living conditions", "maintenance", "public housing", "public housing residents", "Section 8", "Voices of the Ex-Offenders", "VOTE", "West Side"],
    },
    
    {
    title    : "The John Howard Association",
    url      : "/the-john-howard-association/",
    tags     : ["february march 2005 issue", "Illinois prisons", "John Howard Association", "prison reform"],
    },
    
    {
    title    : "Illinois Democrats Resist Social Security Privatization",
    url      : "/illinois-democrats-resist-social-security-privatization/",
    tags     : ["Barack Obama", "february march 2005 issue", "George W. Bush", "healthcare", "politics", "privatization", "reform", "social security"],
    },
    
    {
    title    : "Utility Problems Persist for Residents",
    url      : "/utility-problems-persist-for-residents/",
    tags     : ["CHA", "CHANCE", "Chicago", "Chicago Housing Authority", "electricity costs", "energy issues", "february march 2005 issue", "Housing Choice Voucher", "living conditions", "Low Income Housing Energy Assistance Program", "Plan for Transformation", "public housing", "public housing residents", "Robert Taylor Homes", "Section 8", "utilities"],
    },
    
    {
    title    : "There's H.O.P.E. for Gary Residents",
    url      : "/theres-h-o-p-e-for-gary-residents/",
    tags     : ["Duneland Village", "february march 2005 issue", "funding", "Gary Indiana", "HOPE VI", "HUD", "mixed income communities", "public housing"],
    },
    
    {
    title    : "A Questionable Connection",
    url      : "/a-questionable-connection/",
    tags     : ["17th War Democratic Organization", "Better Government Association", "CHA", "Chicago", "Chicago Housing Authority", "donations", "february march 2005 issue", "Hatch Act", "investigation", "Plan for Transformation", "politics", "Silver Shovel", "Terry Peterson"],
    },
    
    {
    title    : "Crystal Clear Views",
    url      : "/crystal-clear-views-4/",
    tags     : ["advice", "conflict", "housing", "Housing Choice Voucher", "housing conditions", "winter 2004 issue"],
    },
    
    {
    title    : "Stop The Violence",
    url      : "/stop-the-violence-3/",
    tags     : ["Chicago", "housing conditions", "LAC", "Latresha Green", "ogden courts", "public housing residents", "violence", "West Side", "winter 2004 issue"],
    },
    
    {
    title    : "Harold Ickes News",
    url      : "/harold-ickes-news-3/",
    tags     : ["Chicago", "community involvement", "Gospel Fest", "Harold Ickes Homes", "National Teachers' Academy", "outreach", "public housing", "spirituality", "winter 2004 issue"],
    },
    
    {
    title    : "Update: Zoning and Affordable Housing",
    url      : "/update-zoning-and-affordable-housing/",
    tags     : ["affordable housing", "Affordable Housing Ordinance", "Chicago", "inclusionary zoning", "low-income issues", "politics", "reform", "winter 2004 issue", "zoning"],
    },
    
    {
    title    : "Residents: What People Want",
    url      : "/residents-what-people-want/",
    tags     : ["advocacy", "CHA", "Chicago", "Chicago Housing Authority", "community involvement", "outreach", "Plan for Transformation", "public housing", "public housing residents", "redevelopment", "survey", "winter 2004 issue"],
    },
    
    {
    title    : "Presidential Election Notebook",
    url      : "/presidential-election-notebook/",
    tags     : ["apathy", "campaign", "CHA", "Chicago", "election", "Plan for Transformation", "politics", "presidential election", "United Power and Action!", "voter involvement", "voting", "winter 2004 issue", "youth"],
    },
    
    {
    title    : "Obama's Visit to Howard Alternative High School",
    url      : "/obamas-visit-to-howard-alternative-high-school/",
    tags     : ["Barack Obama", "chicago youth", "college funding", "Howard Area Alternative High School", "U.S. senate", "UYIJP", "Youth Coverage of Barack Obama"],
    },
    
    {
    title    : "Rockwell, LeClaire, ABLA Elections",
    url      : "/rockwell-leclaire-abla-elections/",
    tags     : ["ABLA", "CHA", "Chicago", "election", "LAC", "Leclaire Courts", "politics", "public housing", "public housing residents", "Rockwell Gardens", "voting", "winter 2004 issue"],
    },
    
    {
    title    : "A Taylor-Made Election",
    url      : "/a-taylor-made-election/",
    tags     : ["Chicago", "election", "politics", "public housing", "relocation", "Robert Taylor Homes", "voter participation", "voting", "winter 2004 issue"],
    },
    
    {
    title    : "More CHA Residents Voting Woes",
    url      : "/more-cha-residents-voting-woes/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "community involvement", "HUD", "politics", "public housing", "public housing residents", "Section 8", "Tenant Council Election", "United States Housing Act", "voter participation", "voting", "winter 2004 issue"],
    },
    
    {
    title    : "Wipe Out",
    url      : "/wipe-out/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "election", "leadership", "Madden Park Homes", "politics", "public housing", "public housing residents", "relocation", "South Side", "Tenant Council Election", "voter participation", "voting", "Washington Park", "winter 2004 issue"],
    },
    
    {
    title    : "Cabrini-Green Election",
    url      : "/cabrini-green-election/",
    tags     : ["Cabrini-Green", "Carol Steele", "Chicago", "Coalitiong to Protect Public Housing", "community involvement", "election", "Election Day", "Kelvin Cannon", "North Side", "politics", "public housing residents", "voter participation", "voting", "winter 2004 issue"],
    },
    
    {
    title    : "Election Report: Harold Ickes Homes",
    url      : "/election-report-harold-ickes-homes/",
    tags     : ["Black United Fund Institute", "Chicago", "community involvement", "election", "Harold Ickes Homes", "Institute for Government Research", "LAC", "Local Advisory Council", "politics", "voter participation", "winter 2004 issue"],
    },
    
    {
    title    : "Renaissance 2010: Sweeping Changes",
    url      : "/renaissance-2010-sweeping-changes/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "chicago public schools", "CPS", "education", "low-income communities", "mixed income communities", "Plan for Transformation", "Renaissance 2010", "winter 2004 issue"],
    },
    
    {
    title    : "Positive People",
    url      : "/positive-people/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "community involvement", "Parkway Gardens", "personal story", "public housing", "public housing residents", "Robert Taylor Homes", "Washington Park", "winter 2004 issue"],
    },
    
    {
    title    : "Senior Rehab Update",
    url      : "/senior-rehab-update/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "living conditions", "Pilsen", "public housing", "Racine Apartments", "restoration", "senior citizens", "winter 2004 issue"],
    },
    
    {
    title    : "Deadly Moves - an update",
    url      : "/deadly-moves-an-update/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "Chicago Police Department", "CPD", "Deadly Moves", "homicide", "investigation", "murder", "Plan for Transformation", "police protection", "public housing", "public housing residents", "redevelopment", "relocation", "violence", "winter 2004 issue"],
    },
    
    {
    title    : "Closure Razes Resident Hopes",
    url      : "/closure-razes-resident-hopes/",
    tags     : ["assistance", "CHA", "Chicago", "Chicago Housing Authority", "Housing Choice Voucher", "public housing", "public housing residents", "relocation", "Section 8", "winter 2004 issue"],
    },
    
    {
    title    : "The Compassionate Blues",
    url      : "/the-compassionate-blues/",
    tags     : ["Beauty Turner", "blues", "Chicago", "Clarence Scott", "culture", "entertainment", "juke joints", "Lee's Unleaded Blues", "low-income communities", "music", "night life", "winter 2004 issue"],
    },
    
    {
    title    : "Chaos at the Bank of Lawndale",
    url      : "/chaos-at-the-bank-of-lawndale/",
    tags     : ["august september 2004 issue", "business", "Chicago", "Community Bank of Lawndale", "controversy", "International Bank of Chicago", "Lawndale", "ownership", "protests", "South West Side"],
    },
    
    {
    title    : "Positive People",
    url      : "/positive-people-2/",
    tags     : ["appreciation", "august september 2004 issue", "Chicago", "community involvement", "Dearborn Homes", "Ida B. Wells", "leadership", "public housing", "public housing residents", "Robert Taylor Homes", "Youth Leadership Program"],
    },
    
    {
    title    : "Crystal Clear Views",
    url      : "/crystal-clear-views-6/",
    tags     : ["advice", "appreciation", "august september 2004 issue", "children", "family", "Mother's Day", "motherhood", "mothers"],
    },
    
    {
    title    : "CPS Violence",
    url      : "/cps-violence/",
    tags     : ["august september 2004 issue", "Chicago", "chicago public schools", "disciplinary issues", "education", "security", "violence"],
    },
    
    {
    title    : "Stop The Violence",
    url      : "/stop-the-violence-4/",
    tags     : ["august september 2004 issue", "Chicago", "Chicago prisons", "Enough is Enough", "Mayor Daley", "police brutality", "violence"],
    },
    
    {
    title    : "Ex Marks The Spot",
    url      : "/ex-marks-the-spot/",
    tags     : ["august september 2004 issue", "Automatic Expungement Act", "employment", "ex-offenders", "human rights", "job opportunities", "legislation", "Second Chance Act", "Voices of the Ex-Offenders", "VOTE"],
    },
    
    {
    title    : "2004 Election Focal Points",
    url      : "/2004-election-focal-points/",
    tags     : ["activism", "affordable housing", "august september 2004 issue", "community involvement", "election", "homelessness", "Housing Choice Voucher Program", "housing issues", "Illinois", "Illinois senator race", "legislation", "political involvement", "politics", "Section 8", "voters"],
    },
    
    {
    title    : "Medicare Prescription Drug Benefit",
    url      : "/medicare-prescription-drug-benefit/",
    tags     : ["august september 2004 issue", "George W. Bush", "health care", "health issues", "legislation", "medicare", "Medicare Modernization Act", "national healthcare", "prescriptions", "senior citizens"],
    },
    
    {
    title    : "Affordable Housing for Humboldt Park",
    url      : "/affordable-housing-for-humboldt-park/",
    tags     : ["affordable housing", "august september 2004 issue", "Chicago", "Federally Assisted Housing Preservation Act", "homelessness", "Humboldt Park", "IHDA", "Illinois Housing Development Authority", "Latino community", "legislation", "public housing", "public housing residents", "Section 8"],
    },
    
    {
    title    : "Archer Courts: A Model Rehab",
    url      : "/archer-courts-a-model-rehab/",
    tags     : ["city-state development", "Archer Courts", "august september 2004 issue", "CHA", "Chicago", "Chicago Housing Authority", "living conditions", "public housing", "public housing residents", "rehabilitation", "renovation"],
    },
    
    {
    title    : "Harold Ickes News",
    url      : "/harold-ickes-news-4/",
    tags     : ["august september 2004 issue", "centenarian", "Chicago", "communtiy involvement", "demolition", "Harold Ickes Homes", "public housing", "public housing residents", "relocation", "Section 8"],
    },
    
    {
    title    : "You Have Been Served",
    url      : "/you-have-been-served/",
    tags     : ["august september 2004 issue", "Cabrini-Green", "CHA", "Chicago", "Chicago Housing Authority", "eviction", "lawsuit", "public housing", "public housing residents", "relocation", "Section 8"],
    },
    
    {
    title    : "Bronzeville Community Alert",
    url      : "/bronzeville-community-alert/",
    tags     : ["august september 2004 issue", "Bronzeville", "CHA", "Chicago", "Chicago Housing Authority", "community involvement", "gentrification", "local businesses", "mixed income communities", "new housing", "public meeting", "redevelopment", "Renaissance Apartments"],
    },
    
    {
    title    : "No C.H.A.N.C.E. For Change?",
    url      : "/no-c-h-a-n-c-e-for-change/",
    tags     : ["august september 2004 issue", "C.H.A.N.C.E.", "CEDA", "CHA", "Chicago Housing Authority", "Commonwealth Edison", "Community Economic Development Agency", "electric bills", "electricity costs", "energy issues", "LIHEAP", "Low Income Housing Energy Assistance Program", "public housing", "public housing residents"],
    },
    
    {
    title    : "Deadly Moves: In Too Deep",
    url      : "/deadly-moves-in-too-deep/",
    tags     : ["august september 2004 issue", "Black Stone Rangers", "Chicago", "gang activity", "leadership", "personal story", "street gangs","Ulysses U.S. Floyd"],
    },
    
    {
    title    : "Deadly Moves: Lack of Force",
    url      : "/deadly-moves-lack-of-force/",
    tags     : ["august september 2004 issue", "CHA", "Chicago", "Chicago Housing Authority", "Chicago Police Department", "CPD", "low-income issues", "Plan for Transformation", "police protection", "public housing", "Stateway Gardens", "war on drugs"],
    },
    
    {
    title    : "Deadly Moves: Troubling Development",
    url      : "/deadly-moves-troubling-development/",
    tags     : ["august september 2004 issue", "CHA", "Chicago Housing Authority", "Chicago Police Department", "CPD", "Mayor Richard M. Daley", "mixed-income neighborhoods", "public housing", "security", "war on drugs"],
    },
    
    {
    title    : "Deadly Moves: Moving at Their Own Risk",
    url      : "/deadly-moves-moving-at-their-own-risk-2/",
    tags     : ["august september 2004 issue", "CHA", "Chicago Housing Authority", "community", "demolition", "displacement", "drug issues", "Englewood", "gang activity", "Plan for Transformation", "public housing", "redevelopment", "relocation", "Robert Taylor Homes", "violence"],
    },
    
    {
    title    : "Publishers' Introduction: Deadly Moves",
    url      : "/publishers-introduction-deadly-moves/",
    tags     : ["august september 2004 issue", "CHA", "Chicago", "Chicago Housing Authority", "homicide", "investigation", "journalism", "mixed-income neighborhoods", "Plan for Transformation", "public housing", "public housing residents", "relocation", "The chicago Reporter", "violence"],
    },
    
    {
    title    : "Stop The Violence",
    url      : "/stop-the-violence-5/",
    tags     : ["Aaron Patterson", "Chicago", "community involvement", "Fred Hampton", "gun violence", "gun-control", "march april 2004 issue", "POCC", "Prisoners of Consciousness Committee", "violence"],
    },
    
    {
    title    : "Crystal Clear Views",
    url      : "/crystal-clear-views-7/",
    tags     : ["advice", "Chicago", "election", "ignorance", "march april 2004 issue", "political involvement", "politics", "voting", "voting process"],
    },
    
    {
    title    : "Positive People",
    url      : "/positive-people-3/",
    tags     : ["Chicago", "community involvement", "Housing Choice Voucher", "march april 2004 issue", "public housing", "reconstruction", "relocation", "Robert Taylor Homes", "Wentworth Gardens"],
    },
    
    {
    title    : "Harold Ickes News",
    url      : "/harold-ickes-news-5/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "education", "Gloria Williams", "Harold Ickes Homes", "LAC", "living conditions", "Local Advisory Council", "maintenance", "management", "march april 2004 issue", "National Teachers' Academy", "public housing", "public housing residents"],
    },
    
    {
    title    : "If the Suit Fits, Who Wears It?",
    url      : "/if-the-suit-fits-who-wears-it/",
    tags     : ["Altgeld Gardens", "CHA", "Chicago Housing Authority", "Chicago Police Department", "CPD", "lawsuits", "legal issues", "march april 2004 issue", "public housing", "public housing residents"],
    },
    
    {
    title    : "A Championship Victory",
    url      : "/a-championship-victory/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "Chicago Police Department", "civil rights", "CPD", "lawsuits", "march april 2004 issue", "public housing", "public housing residents", "Stateway Gardens", "Williams v. Brown"],
    },
    
    {
    title    : "Sixth District Race Makes History",
    url      : "/sixth-district-race-makes-history/",
    tags     : ["Aaron Patterson", "Bridgeport", "Cook County", "death row", "election", "ex-offenders", "Illinois", "Illinois state Representative", "incarceration", "march april 2004 issue", "Patricia Bailey", "political platform", "politics"],
    },
    
    {
    title    : "2nd U.S. Congressional District Race",
    url      : "/2nd-u-s-congressional-district-race/",
    tags     : ["candidates", "election", "Everett Shumpert", "Illinois", "Jesse Jackson", "Jr.", "march april 2004 issue", "Mel Reynolds", "politics", "Rev. Anthony William"],
    },
    
    {
    title    : "U.S. Senate Candidate Joyce Washington",
    url      : "/u-s-senate-candidate-joyce-washington/",
    tags     : ["candidate", "election", "health care", "Illinois", "Joyce Washington", "march april 2004 issue", "political issues", "political platform", "politics"],
    },
    
    {
    title    : "U.S. Senate Candidate Gery Chico",
    url      : "/u-s-senate-candidate-gery-chico/",
    tags     : ["Board of Education", "candidate", "Gery Chico", "Illinois", "march april 2004 issue", "political issues", "political platform", "politics", "U.S. senate election"],
    },
    
    {
    title    : "U.S. Senate Candidate Daniel Hynes",
    url      : "/u-s-senate-candidate-daniel-hynes/",
    tags     : ["candidate", "comptroller", "Dan Hynes", "Illinois", "march april 2004 issue", "political issues", "political platform", "politics", "poverty", "U.S. senate election"],
    },
    
    {
    title    : "U.S. Senate Candidate Blair Hull",
    url      : "/u-s-senate-candidate-blair-hull/",
    tags     : ["Blair Hull", "candidate", "Illinois", "march april 2004 issue", "platforms", "political issues", "politics", "U.S. senate election"],
    },
    
    {
    title    : "U.S. Senate Candidate Barack Obama",
    url      : "/u-s-senate-candidate-barack-obama/",
    tags     : ["affordable housing", "Barack Obama", "candidate", "Illinois", "insurance", "march april 2004 issue", "U.S. senate election", "welfare"],
    },
    
    {
    title    : "The Sound of Silence",
    url      : "/the-sound-of-silence/",
    tags     : ["2004 presidential election", "Democratic party", "housing issues", "John Edwards", "John Kerry", "low-income communities", "march april 2004 issue", "politics", "presidential candidates", "presidential election"],
    },
    
    {
    title    : "Oops, They Did It Again",
    url      : "/oops-they-did-it-again/",
    tags     : ["advocacy", "CHA", "Chicago", "Chicago Housing Authority", "Henry Horner Homes", "HOPE VI", "lawsuit", "legal issues", "march april 2004 issue", "mixed income communities", "Plan for Transformation", "public housing", "public housing residents", "redevelopment", "Right to Return", "Service Connectors", "Supportive Services"],
    },
    
    {
    title    : "Crystal Clear Views",
    url      : "/crystal-clear-views-8/",
    tags     : ["advice", "happiness", "january february 2004 issue", "life lessons", "new year resolutions"],
    },
    
    {
    title    : "Stop The Violence",
    url      : "/stop-the-violence-6/",
    tags     : ["Chicago", "january february 2004 issue", "psychology", "RAINN", "rape", "sexual assault", "violence"],
    },
    
    {
    title    : "Harold Ickes News",
    url      : "/harold-ickes-news-6/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "Harold Ickes Homes", "HUD", "january february 2004 issue", "relocation", "remodeling", "violence"],
    },
    
    {
    title    : "Positive People",
    url      : "/positive-people-4/",
    tags     : ["activism", "Cabrini-Green", "Chicago", "community involvement", "january february 2004 issue", "leadership", "low-income housing", "relocation"],
    },
    
    {
    title    : "The Price of a Political Job",
    url      : "/the-price-of-a-political-job/",
    tags     : ["Chicago", "Chicago Park District", "employment", "history", "january february 2004 issue", "politicians", "politics", "presidential election"],
    },
    
    {
    title    : "Altgeld Gardens Lawsuit Settlement",
    url      : "/altgeld-gardens-lawsuit-settlement/",
    tags     : ["Altgeld Gardens", "CHA", "Chicago", "Chicago Housing Authority", "environmental issues", "january february 2004 issue", "lawsuits", "PCR", "People for Community Recovery", "settlement"],
    },
    
    {
    title    : "The True Face of Poverty",
    url      : "/the-true-face-of-poverty/",
    tags     : ["economy", "health issues", "january february 2004 issue", "poverty", "public housing", "transitional living", "unemployment"],
    },
    
    {
    title    : "Getting to Know Rockwell",
    url      : "/getting-to-know-rockwell/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "Housing Choice Vouchers", "HUD", "january february 2004 issue", "public housing", "redevelopment", "relocation", "Rockwell Gardens", "West Side"],
    },
    
    {
    title    : "Is It Doomsday For Public Housing?",
    url      : "/is-it-doomsday-for-public-housing/",
    tags     : ["CAC", "CHA", "Chicago", "Chicago Housing Authority", "january february 2004 issue", "mixed-income neighborhoods", "Plan for Transformation", "public housing", "redevelopment", "relocation", "Relocation Rights Contract"],
    },
    
    {
    title    : "Residents Turn up the Heat on CHA",
    url      : "/residents-turn-up-the-heat-on-cha/",
    tags     : ["Cabrini-Green", "CHA", "Chicago", "H.J. Russell", "heating", "january february 2004 issue", "living conditions", "management", "public housing", "public housing residents", "relocation"],
    },
    
    {
    title    : "Clock Ticking for HOPE VI Projects",
    url      : "/clock-ticking-for-hope-vi-projects/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "demolition", "funding", "HOPE VI", "HUD", "january february 2004 issue", "mixed-income neighborhoods", "public housing", "redevelopment"],
    },
    
    {
    title    : "Report: Residents Steered to Poor Areas",
    url      : "/report-residents-steered-to-poor-areas/",
    tags     : ["American Project", "CHA", "Chicago", "Chicago Housing Authority", "Commonwealth Edison", "Gautreaux", "january february 2004 issue", "low-income residents", "mixed income communities", "Plan for Transformation", "public housing", "redevelopment", "relocation", "Robert Taylor Homes", "Venkatesh"],
    },
    
    {
    title    : "Dear Resident",
    url      : "/dear-resident/",
    tags     : ["advice", "Chicago", "evolution", "history", "may june 2003 issue", "public housing", "public housing residents"],
    },
    
    {
    title    : "Stop The Violence",
    url      : "/stop-the-violence-7/",
    tags     : ["advocacy", "Beyond media", "Chicago Legal Advocacy for Incercerated Mothers", "Chicago violence", "CLAIM", "Cook County", "Cook County Jail Town Hall Meeting", "incarcerated mothers", "injustice", "may june 2003 issue", "Operation PUSH", "prison system", "prison violence"],
    },
    
    {
    title    : "A Report On Management at Ogden Courts",
    url      : "/a-report-on-management-at-ogden-courts/",
    tags     : ["damages", "Good Neighbor Workshop", "home management", "living conditions", "may june 2003 issue", "ogden courts", "relocation", "repairs", "seminar"],
    },
    
    {
    title    : "CHAC An Update: 2003",
    url      : "/chac-an-update-2003/",
    tags     : ["Certificate Program", "CHA", "CHAC", "Chicago Housing Authority", "eligibility", "Family Self Sufficieny Program", "FSS", "home ownership", "Home Ownership Program", "Housing Choice Voucher", "Housing Choice Voucher Program", "HUD", "may june 2003 issue", "re-structuring", "regulations", "Section 8", "Voucher Program"],
    },
    
    {
    title    : "War with Iraq: A Personal Perspective",
    url      : "/war-with-iraq-a-personal-perspective/",
    tags     : ["Armed Forces", "community involvement", "employment", "Iraq War", "may june 2003 issue", "military service", "ROTC", "U.S. Navy", "warfare", "welfare"],
    },
    
    {
    title    : "Harold Ickes News",
    url      : "/harold-ickes-news-7/",
    tags     : ["Chicago", "chicago youth", "E2", "Harold Ickes Homes", "may june 2003 issue", "public housing", "violence"],
    },
    
    {
    title    : "Debating Affordable Housing",
    url      : "/debating-affordable-housing/",
    tags     : ["affordable housing", "Chicago", "Chicago City Council", "Chicago public housing", "may june 2003 issue", "Mayor Richard M. Daley", "Toni Preckwinkle"],
    },
    
    {
    title    : "Lathrop Homes News",
    url      : "/lathrop-homes-news/",
    tags     : ["blackout", "CHA", "Chicago", "Chicago Housing Authority", "energy issues", "Lathrop Homes", "maintenance", "may june 2003 issue"],
    },
    
    {
    title    : "Thomas Sullivan Report Update",
    url      : "/thomas-sullivan-report-update/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "Housing Choice Vouchers", "may june 2003 issue", "Plan for Transformation", "public housing", "recommendations", "relocation", "Thomas Sullivan"],
    },
    
    {
    title    : "Making CHA Accessible",
    url      : "/making-cha-accessible/",
    tags     : ["Access Living", "accessibility", "advocacy", "CHA", "Chicago disabled", "Chicago Housing Authority", "empowerment", "fair housing act", "Henry Horner Homes", "housing requirements", "may june 2003 issue", "public housing"],
    },
    
    {
    title    : "The Shocking Truth about CHA",
    url      : "/the-shocking-truth-about-cha/",
    tags     : ["CHA electricty", "Chicago", "Chicago Housing Authority", "Chicago public housing", "Commonwealth Edison", "energy issues", "Housing Choice Voucher", "may june 2003 issue", "mixed income communities", "non-lease compliant", "public housing", "relocation", "Robert Taylor Homes"],
    },
    
    {
    title    : "Homeless Not Hopeless",
    url      : "/homeless-not-hopeless/",
    tags     : ["affordable housing", "CHA", "Chicago", "Chicago homelessness", "Chicago Housing Authority", "Housing Choice Vouchers", "may june 2003 issue", "Plan for Transformation", "public housing", "relocation", "Section 8", "unsubsidized tenants"],
    },
    
    {
    title    : "Dear Resident",
    url      : "/dear-resident-2/",
    tags     : ["black history month", "community", "history", "january february 2003 issue", "relationships", "slavery", "social justice"],
    },
    
    {
    title    : "Crystal Clear Views",
    url      : "/crystal-clear-views-9/",
    tags     : ["advice", "family", "homelessness", "january february 2003 issue", "Q&A", "relationships", "runaway"],
    },
    
    {
    title    : "Housing on State, City Agendas",
    url      : "/housing-on-state-city-agendas/",
    tags     : ["activism", "affordable housing", "Affordable Rents for Chicago", "ARC", "Chicago", "january february 2003 issue", "Mayor Richard M. Daley", "public housing", "Toni Preckwinkle", "zoning"],
    },
    
    {
    title    : "Stop The Violence",
    url      : "/stop-the-violence-8/",
    tags     : ["Chicago", "chicago youth", "health issues", "january february 2003 issue", "maintenance", "management", "Mt. sinai Hospital", "ogden courts", "renovations", "violence"],
    },
    
    {
    title    : "The New Cook County Hospital",
    url      : "/the-new-cook-county-hospital/",
    tags     : ["Cook County Hospital", "healthcare", "january february 2003 issue", "John H. Stroger Jr.", "new hospital", "renovation", "technology", "transition"],
    },
    
    {
    title    : "Traveling: From Therapy to Art",
    url      : "/traveling-from-therapy-to-art/",
    tags     : ["art", "Asia", "culture", "filmmaking", "january february 2003 issue", "Kathmandu", "personal story", "religious experience", "travel"],
    },
    
    {
    title    : "Representing Residents",
    url      : "/representing-residents/",
    tags     : ["feedback", "january february 2003 issue", "LAC", "leadership", "Local Advisory Council", "politics", "public housing", "public housing residents", "relationships"],
    },
    
    {
    title    : "Chicago's Hottest Elections",
    url      : "/chicagos-hottest-elections/",
    tags     : ["Bronzeville", "Cabrini-Green", "Dorothy Tillman", "Fourth Ward", "january february 2003 issue", "Mayor Richard M. Daley", "mayoral election", "Norman Bolden", "Pat Dowell", "platform", "political campaign", "politics", "public housing", "Rev. Paul L. Jakes", "Third Ward alderman", "Toni Preckwinkle"],
    },
    
    {
    title    : "Residents Sue CHA",
    url      : "/residents-sue-cha/",
    tags     : ["CHA", "Chicago Housing Authority", "Chicago public housing", "Civil Rights Act", "displacement", "HUD", "january february 2003 issue", "lawsuit", "Plan for Transformation", "public housing residents", "relocation", "Section 8"],
    },
    
    {
    title    : "Running Out of Gas",
    url      : "/running-out-of-gas/",
    tags     : ["budget", "electricity costs", "energy issues", "january february 2003 issue", "LIHEAP", "Low-Income Energy Home Assistance Program", "public housing", "public housing residents"],
    },
    
    {
    title    : "Seniors Complain About Renovations",
    url      : "/seniors-complain-about-renovations/",
    tags     : ["CHA", "Chicago Housing Authority", "community disturbance", "construction", "january february 2003 issue", "renovation", "senior citizens"],
    },
    
    {
    title    : "Report Criticizes CHA Relocations",
    url      : "/report-criticizes-cha-relocations/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "dissatisfaction", "Housing Choice Voucher", "january february 2003 issue", "mixed income communities", "Plan for Transformation", "public housing", "relocation", "Relocation Rights Contract", "Section 8", "Service Connector Program", "social service"],
    },
    
    {
    title    : "An Invasion of Privacy?",
    url      : "/an-invasion-of-privacy/",
    tags     : ["CHA", "Chicago Housing Authority", "drug testing", "Fourth Amendment violation", "Holston Realty", "invasion of privacy", "january february 2003 issue", "public housing residents", "Raymond Hilliard Homes"],
    },
    
    {
    title    : "Myths and Urban Legends",
    url      : "/myths-and-urban-legends/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "funding", "Housing Choice Voucher", "january february 2003 issue", "myths", "Plan for Transformation", "politics", "poverty", "public housing", "redevelopment", "Section 8"],
    },
    
    {
    title    : "Dear Resident",
    url      : "/dear-resident-3/",
    tags     : ["domestic abuse", "domestic violence", "familial issues", "november december 2002 issue", "victimization"],
    },
    
    {
    title    : "Positive Residents of the CHA",
    url      : "/positive-residents-of-the-cha/",
    tags     : ["CHA", "Chicago Housing Authority", "community involvement", "LAC", "leadership", "Local Advisory Council", "november december 2002 issue", "public housing residents", "Stateway Gardens"],
    },
    
    {
    title    : "Stop The Violence",
    url      : "/stop-the-violence-9/",
    tags     : ["Chicago violence", "gun violence", "law enforcement", "november december 2002 issue", "police violence", "Stop the Violence"],
    },
    
    {
    title    : "Seniors Graduate Police Class",
    url      : "/seniors-graduate-police-class/",
    tags     : ["CAPS", "Chicago", "Chicago Police Department", "community involvement", "CPD", "education", "graduation ceremony", "law enforcement", "november december 2002 issue", "safety", "senior citizens", "Sinai Health System"],
    },
    
    {
    title    : "National Housing Crisis",
    url      : "/national-housing-crisis/",
    tags     : ["advocacy", "affordable housing", "Center for Housing Policy", "CHA", "Chicago", "Chicago Housing Authority", "demolition", "homelessness", "housing shortage", "HUD", "mixed income communities", "National Alliance of HUD Tenants", "national housing", "november december 2002 issue", "Plan for Transformation", "public housing shortage", "relocation", "unemployment", "voucher"],
    },
    
    {
    title    : "HIV/AIDs Crisis",
    url      : "/hivaids-crisis/",
    tags     : ["African Americans", "awareness", "BET", "Bronzeville", "campaign", "CHA", "Chicago Housing Authority", "health care", "HIV/AIDS", "medical issues", "november december 2002 issue", "outreach", "sexual health", "STDs"],
    },
    
    {
    title    : "Operation ABLE",
    url      : "/operation-able/",
    tags     : ["ABLA", "ABLA Transitional Job Center", "CHA", "Chicago disabled", "Chicago Housing Authority", "employment", "HOPE VI", "non-profit organization", "october november 2001 issue", "One Stop Center", "Operation ABLE", "outreach", "public housing", "senior citizens", "Senior Community Service Employment program", "social service"],
    },
    
    {
    title    : "Harold Ickes Service Connectors",
    url      : "/harold-ickes-service-connectors/",
    tags     : ["CHA", "Chicago Housing Authority", "Chicago public housing", "Harold Ickes Homes", "november december 2002 issue", "outreach", "public housing", "Service Connector Program", "Woodlawn"],
    },
    
    {
    title    : "Harold Ickes News",
    url      : "/harold-ickes-news-8/",
    tags     : ["celebration", "CHA", "Chicago", "Chicago Housing Authority", "construction", "displacement", "Harold Ickes Homes", "National Teaching Academy of Chicago", "new school", "november december 2002 issue", "renovation", "water problem"],
    },
    
    {
    title    : "Choosing Between Food and Medicine",
    url      : "/choosing-between-food-and-medicine/",
    tags     : ["Chicago", "healthcare", "Legal Assistance Foundation", "Medicaid", "medication", "october november 2001 issue"],
    },
    
    {
    title    : "Residents Deny Security Improvements",
    url      : "/residents-deny-security-improvements/",
    tags     : ["CHA", "Chicago disabled", "CPD", "november december 2002 issue", "public housing security"],
    },
    
    {
    title    : "CHA Puts Resident In Storage",
    url      : "/cha-puts-resident-in-storage/",
    tags     : ["CHA", "Chicago Housing Authority", "homelessness", "Housing Choice Voucher", "november december 2002 issue", "Plan for Transformation", "relocation", "Robert Taylor Homes"],
    },
    
    {
    title    : "Stop The Violence",
    url      : "/stop-the-violence-11/",
    tags     : ["Chicago", "Dearborn Homes", "october november 2001 issue", "public housing", "redevelopment", "security", "September 11", "terrorism", "violence"],
    },
    
    {
    title    : "South Suburban Living",
    url      : "/south-suburban-living/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "november december 2002 issue", "Plan for Transformation", "public housing", "relocation", "suburban"],
    },
    
    {
    title    : "Electrically Charged",
    url      : "/electrically-charged/",
    tags     : ["CHA", "CHA electricity", "Chicago", "Chicago Housing Authority", "energy issues", "low-income residents", "november december 2002 issue", "Plan for Transformation", "relocation", "Relocation Rights Contract", "Robert Taylor Homes"],
    },
    
    {
    title    : "Last Day in 4525",
    url      : "/last-day-in-4525/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "demolition", "eviction", "homelessness", "Leclaire Courts", "november december 2002 issue", "One Strike", "public housing residents", "relocation", "Robert Taylor Homes"],
    },
    
    {
    title    : "Housing Crisis in Highland Park",
    url      : "/housing-crisis-in-highland-park/",
    tags     : ["affordable housing", "CHA", "Chicago Housing Authority", "demolition", "Highland Park", "Housing Choice Voucher", "housing crisis", "low-income families", "mixed-income neighborhoods", "november december 2002 issue", "Plan for Transformation", "public housing residents", "relocation", "Section 8"],
    },
    
    {
    title    : "It's Not OK to Corral at Cabrini",
    url      : "/its-not-ok-to-corral-at-cabrini/",
    tags     : ["Cabrini-Green", "CHA", "Chicago", "Chicago Housing Authority", "drug use", "gun violence", "june july 2002 issue", "North Side", "public housing", "public housing residents", "Section 8"],
    },
    
    {
    title    : "Youth Violence Prevention",
    url      : "/youth-violence-prevention/",
    tags     : ["chicago youth", "june july 2002 issue", "violence", "YouthPeace"],
    },
    
    {
    title    : "Harold Ickes News",
    url      : "/harold-ickes-news-9/",
    tags     : ["Chicago", "community involvement", "dissatisfaction", "gun violence", "Harold Ickes Homes", "june july 2002 issue", "leaseholder", "management", "One Strike", "public housing residents", "safety", "youth"],
    },
    
    {
    title    : "The High Cost of Medicine",
    url      : "/the-high-cost-of-medicine/",
    tags     : ["health care plan", "inflation", "june july 2002 issue", "Medicaid", "national healthcare", "prescriptions", "senior citizens"],
    },
    
    {
    title    : "Relocation Rights Contract",
    url      : "/relocation-rights-contract/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "Housing Choice Voucher", "HUD", "june july 2002 issue", "mixed income communities", "redevelopment", "relocation", "Relocation Rights Contract", "Section 8"],
    },
    
    {
    title    : "Welfare Reform: Lost In Space",
    url      : "/welfare-reform-lost-in-space/",
    tags     : ["1996 Welfare Reform Act", "advocacy", "dissatisfaction", "employment", "failure", "Joyce Foundation", "june july 2002 issue", "low-income families", "national welfare", "poverty", "public housing", "welfare reform"],
    },
    
    {
    title    : "Harold Ickes New School Update",
    url      : "/harold-ickes-new-school-update/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "Chicago public housing", "community involvement", "CPS", "curriculum", "demolition", "education", "eviction", "Harold Ickes Homes", "june july 2002 issue", "National Teaching Academy of Chicago", "public housing residents"],
    },
    
    {
    title    : "Maintenance Defects at Ogden Courts",
    url      : "/maintenance-defects-at-ogden-courts/",
    tags     : ["Chicago", "damages", "dissatisfaction", "june july 2002 issue", "management", "ogden courts", "public housing", "public housing maintenance", "relocation", "tenant meeting"],
    },
    
    {
    title    : "Who Speaks for Public Housing Residents?",
    url      : "/who-speaks-for-public-housing-residents/",
    tags     : ["Chicago", "Coalition to Protect Public Housing", "dissatisfaction", "HUD", "Ida B Wells Homes", "june july 2002 issue", "Juneteenth", "Lathrop Homes", "leadership", "Plan for Transformation", "public housing", "public housing residents"],
    },
    
    {
    title    : "Shocking Electric Bills Update",
    url      : "/shocking-electric-bills-update/",
    tags     : ["CHA", "CHA electricity", "Chicago", "Chicago Housing Authority", "Commonwealth Edison", "electric bills", "energy issues", "Housing Choice Voucher", "june july 2002 issue", "lease non-compliance", "public housing", "relocation", "Robert Taylor Homes"],
    },
    
    {
    title    : "Dear Resident",
    url      : "/dear-resident-4/",
    tags     : ["communication", "community language", "interaction", "letter", "march april 2002 issue", "power of words", "relationships", "speech", "word usage"],
    },
    
    {
    title    : "Lathrop News",
    url      : "/lathrop-news/",
    tags     : ["anti-violence", "Chicago", "Chicago violence", "Clean Day", "community involvement", "community update", "Lathrop Homes", "march", "march april 2002 issue", "public housing"],
    },
    
    {
    title    : "ABLA News",
    url      : "/abla-news/",
    tags     : ["ABLA", "CDHS", "community involvement", "HOPE VI", "Local Advisory Council", "march april 2002 issue", "mixed-income neighborhoods", "public housing", "Revitalization Plan"],
    },
    
    {
    title    : "Stop The Violence",
    url      : "/stop-the-violence-10/",
    tags     : ["Chicago violence", "CPD", "march april 2002 issue", "ogden courts", "reinvestigation", "trials", "wrongful conviction"],
    },
    
    {
    title    : "The Renowned Vernon Jordan",
    url      : "/the-renowned-vernon-jordan/",
    tags     : ["accomplishment", "activism", "business", "education", "march april 2002 issue", "National Urban League", "ROTC", "Vernon Jordan"],
    },
    
    {
    title    : "Harold Ickes News",
    url      : "/harold-ickes-news-10/",
    tags     : ["Chicago", "Chicago public housing", "demolition", "Harold Ickes Homes", "march april 2002 issue", "parking", "public housing", "renovation", "State Street", "vacated land"],
    },
    
    {
    title    : "Child of the Pack Saddle IX",
    url      : "/child-of-the-pack-saddle-ix/",
    tags     : ["march april 2002 issue"],
    },
    
    {
    title    : "African-American Male Suicides",
    url      : "/african-american-male-suicides/",
    tags     : ["African American communities", "community support", "development", "gun violence", "march april 2002 issue", "social services", "suicide", "youth violence"],
    },
    
    {
    title    : "Lathrop Homes Private Management",
    url      : "/lathrop-homes-private-management/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "Lathrop Homes", "maintenance", "march april 2002 issue", "private management", "public housing", "resident feedback"],
    },
    
    {
    title    : "Productive Men of the CHA",
    url      : "/productive-men-of-the-cha/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "community involvement", "LAC", "Lathrop Homes", "leadership", "Local Advisory Council", "march april 2002 issue", "public housing", "recognition"],
    },
    
    {
    title    : "CAC Prepares for Battle",
    url      : "/cac-prepares-for-battle/",
    tags     : ["CHA", "Chicago Housing Authority", "HUD", "leadership", "march april 2002 issue", "public housing", "redevelopment", "relocation", "replacement housing", "Section 8"],
    },
    
    {
    title    : "Squatters Worry About Homelessness",
    url      : "/squatters-worry-about-homelessness/",
    tags     : ["CHA", "Chicago homelessness", "Chicago Housing Authority", "Department of Human Services", "DHS", "eviction", "march april 2002 issue", "public housing", "Section 8", "squatting", "unemployment", "vouchers"],
    },
    
    {
    title    : "Girl X Reveals Tragic History",
    url      : "/girl-x-reveals-tragic-history/",
    tags     : ["accountability", "assault", "Cabrini-Green", "CHA", "Chicago", "Chicago Housing Authority", "Girl X", "HUD", "lawsuits", "liability", "march april 2002 issue", "ownership", "public housing", "public housing resodents", "redevelopment", "security services", "settlement", "violence"],
    },
    
    {
    title    : "Ickes' Homes New Managers",
    url      : "/ickes-homes-new-managers/",
    tags     : ["Chicago", "community", "financial security", "Harold Ickes Homes", "integration activity", "management", "march april 2002 issue", "public housing", "public services", "Service Connector Program", "The Woodlawn Organization", "TWO"],
    },
    
    {
    title    : "Shocking Electric Bills",
    url      : "/shocking-electric-bills/",
    tags     : ["CHA", "CHA electricity", "Chicago Housing Authority", "electricity costs", "energy issues", "Housing Choice Voucher", "march april 2002 issue", "non-lease compliant", "Plan for Transformation", "relocation", "Robert Taylor Homes"],
    },
    
    {
    title    : "A 'One Strike' Battle Planned",
    url      : "/a-one-strike-battle-planned/",
    tags     : ["Anti-Drug Abuse Act", "cases", "CHA", "Chicago", "civil forfeiture statute", "drug use", "eviction", "HUD", "innocent tenant defense", "march april 2002 issue", "One Strike", "Plan for Transformation", "public housing policy", "public housing residents"],
    },
    
    {
    title    : "Drug War Diagnosis",
    url      : "/drug-war-diagnosis/",
    tags     : ["brutalization", "CHA", "Chicago", "Chicago drug use", "Chicago Housing Authority", "Community Alternative Policing Strategy", "crime", "drug economy", "march april 2002 issue", "murder rate", "Plan for Transformation", "public health", "public housing maintenance", "public housing residents", "relocation", "safety", "solution", "treatment", "violence", "war on drugs"],
    },
    
    {
    title    : "Remembering Leroy Watkins",
    url      : "/remembering-leroy-watkins/",
    tags     : ["community involvement", "Leroy Watkins Day", "october november 2001 issue", "rememberance", "Robert Taylor Homes"],
    },
    
    {
    title    : "A Section 8 Recipient's Painful Reality",
    url      : "/a-section-8-recipients-painful-reality/",
    tags     : ["CHA", "CHAC", "demolition", "eviction", "october november 2001 issue", "reevaluation", "rent increase", "Robert Taylor Homes", "Section 8", "voucher"],
    },
    
    {
    title    : "Residents Look to the Hills",
    url      : "/residents-look-to-the-hills/",
    tags     : ["Chicago", "Harold Ickes Homes", "housing permanence", "infestation", "instability", "october november 2001 issue", "outreach", "public housing", "Service Connector Program", "sewer department", "Woodlawn Organization"],
    },
    
    {
    title    : "A Savory Survey",
    url      : "/a-savory-survey/",
    tags     : ["CHA", "Chicago public housing", "demolition", "informative", "mixed-income neighborhoods", "october november 2001 issue", "Plan for Transformation", "relocation", "study", "Urban Institute"],
    },
    
    {
    title    : "RMCs Aim to Please?",
    url      : "/rmcs-aim-to-please/",
    tags     : ["CHA", "improvement", "october november 2001 issue", "resident management", "Resident Management Corporations", "RMC"],
    },
    
    {
    title    : "A Smooth Transition For Section 8?",
    url      : "/a-smooth-transition-for-section-8/",
    tags     : ["CHAC", "Chicago", "federal-assissted housing", "homelessness", "Housing Choice Voucher", "housing options", "HUD", "low-income housing", "low-income residents", "october november 2001 issue", "relocation", "Section 8", "transition", "vouchers"],
    },
    
    {
    title    : "Homelessness: A Constant American Tragedy",
    url      : "/homelessness-a-constant-american-tragedy-2/",
    tags     : ["advocacy", "CHA", "Chicago homelessness", "Chicago Housing Authority", "condominiums", "conversions", "displacement", "eviction", "experiment", "homeless shelters", "housing crisis", "low-income housing", "mixed income communities", "october november 2001 issue", "One Strike Policy", "Plan for Transformation", "public housing", "redevelopment", "relocation", "Section 8", "squatting", "surge", "vouchers"],
    },
    
    {
    title    : "Dear Resident",
    url      : "/dear-resident-5/",
    tags     : ["American unity", "august september 2001 issue", "disunity", "low-income representation", "pride", "public housing residents", "retribution", "September 11", "vulnerability"],
    },
    
    {
    title    : "The Terror Within",
    url      : "/the-terror-within/",
    tags     : ["aftermath", "august september 2001 issue", "CHA", "families", "funding", "military service", "mothers", "public housing", "safe communities", "September 11", "sympathy", "terrorism", "U.S. Military", "War on Terrorism"],
    },
    
    {
    title    : "Child of the Pack Saddle Part VI",
    url      : "/child-of-the-pack-saddle-part-vi/",
    tags     : ["august september 2001 issue"],
    },
    
    {
    title    : "Stop the Violence",
    url      : "/stop-the-violence-12/",
    tags     : ["august september 2001 issue", "CHA", "Cook County", "freedom march", "Juneteenth", "Juvenile Court", "lawsuits", "testimony", "trial", "youth violence"],
    },
    
    {
    title    : "New Vincennes Plaza",
    url      : "/new-vincennes-plaza/",
    tags     : ["47th Street", "august september 2001 issue", "Chicago", "community", "Creative Desgisn", "improvement", "landmark", "low-income housing", "Section 8", "Vincennes Plaza", "voucher"],
    },
    
    {
    title    : "Housing For The Disabled",
    url      : "/housing-for-the-disabled/",
    tags     : ["activism", "affordable housing", "august september 2001 issue", "Chicago disabled", "Disability Rights Actions Coalition for Housing", "DRACH", "fair housing", "Fair Housing Amendments Act", "housing programs", "local housing boards"],
    },
    
    {
    title    : "Structural Justice",
    url      : "/structural-justice/",
    tags     : ["affordable public housing", "august september 2001 issue", "Chicago Rehab Network", "Chicago workshops", "conference", "management", "ownership", "property", "real estate", "Valuing Affordability"],
    },
    
    {
    title    : "Seniors Quality of Life On The Rise",
    url      : "/seniors-quality-of-life-on-the-rise/",
    tags     : ["august september 2001 issue", "CHA", "Chicago Housing Authority", "Chicago senior citizens", "reconstruction", "renovation"],
    },
    
    {
    title    : "CHA Seniors Protest Electric Bills",
    url      : "/cha-seniors-protest-electric-bills/",
    tags     : ["Affordable Power to the People", "august september 2001 issue", "CEDA", "CHA", "CHA electricity", "Chicago Housing Authority", "energy", "energy bills", "petition", "protest marches", "senior citizens", "summer cooling program"],
    },
    
    {
    title    : "In Search Of Scattered Site Housing",
    url      : "/in-search-of-scattered-site-housing/",
    tags     : ["august september 2001 issue", "CHA", "Chicago Housing Authority", "Chicago public housing", "Gautreaux", "Housing Choice Survey", "Plan for Transformation", "public housing residents", "redevelopment", "relocation", "scattered site units", "Section 8", "temporary relocation"],
    },
    
    {
    title    : "Squatters in CHA",
    url      : "/squatters-in-cha/",
    tags     : ["august september 2001 issue", "CHA", "CHA squatters", "Chicago", "Chicago Housing Authority", "eviction", "lease compliance", "public housing", "relocation", "vouchers"],
    },
    
    {
    title    : "ABLA News",
    url      : "/abla-news-2/",
    tags     : ["ABLA", "august september 2001 issue", "Chicago", "festival", "HOPE VI", "LAC", "Local Advisory Council", "public housing", "public housing stereotypes", "resident meetings"],
    },
    
    {
    title    : "Don't Rock The Boat",
    url      : "/dont-rock-the-boat/",
    tags     : ["august september 2001 issue", "Bill Clinton", "CHA", "Chicago", "Chicago Housing Authority", "demolition", "eviction", "Lakefront Community Organization", "LCO", "One Strike", "public housing residents", "relocation"],
    },
    
    {
    title    : "CHA Family Service Connectors",
    url      : "/cha-family-service-connectors/",
    tags     : ["advocacy", "august september 2001 issue", "CHA", "Chicago", "Chicago Housing Authority", "Chicago public service", "public housing residents", "Service Connector", "services"],
    },
    
    {
    title    : "Harold Ickes Homes News",
    url      : "/harold-ickes-homes-news/",
    tags     : ["august september 2001 issue", "Chicago", "fire devastation", "Harold Ickes Homes", "youth"],
    },
    
    {
    title    : "SPECIAL FEATURE: City Gets CHA Funds Update",
    url      : "/special-feature-city-gets-cha-funds-update/",
    tags     : ["august september 2001 issue", "CHA", "Chicago", "Chicago Housing Authority", "contract extension", "federal assistance program", "funding", "grant", "welfare"],
    },
    
    {
    title    : "Dear Resident",
    url      : "/dear-resident-6/",
    tags     : ["Cabrini-Green", "CHA. Chicago Housing Authority", "gentrification", "HOPE VI", "june july 2001 issue", "lawsuit", "public housing redevelopment", "urban development"],
    },
    
    {
    title    : "Sinai Health Services",
    url      : "/sinai-health-services/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "community", "health services", "healthcare", "june july 2001 issue", "low-income issues", "medical resources", "senior citizens", "Sinai Health System", "Sinair Senior services"],
    },
    
    {
    title    : "Stop The Violence",
    url      : "/stop-the-violence-13/",
    tags     : ["Chicago", "Chicago violence", "gun violence", "june july 2001 issue", "lawsuits", "police brutality", "trial"],
    },
    
    {
    title    : "Saluting Men of the CHA",
    url      : "/saluting-men-of-the-cha/",
    tags     : ["advocate", "CHA", "Chicago Housing Authority", "honor", "june july 2001 issue", "leaders", "profile"],
    },
    
    {
    title    : "Child of The Pack Saddle: Part V",
    url      : "/child-of-the-pack-saddle-part-v/",
    tags     : ["june july 2001 issue"],
    },
    
    {
    title    : "The State Of Section 8",
    url      : "/the-state-of-section-8/",
    tags     : ["activism", "affordable housing", "CHA", "CHAC", "Chicago", "Chicago Housing Authority", "conference", "conflict resolution", "displacement", "HUD", "interactive", "june july 2001 issue", "low-income issues", "Plan for Transformation", "public housing", "Section 8", "subsidized housing", "Tenants United For Housing", "vouchers", "workshops"],
    },
    
    {
    title    : "A Trip To The Future",
    url      : "/a-trip-to-the-future/",
    tags     : ["Brinshore-Michaels", "community", "developer", "housing", "human rights", "John Hay Homes", "june july 2001 issue", "lease compliant", "Madison Park Place Homes", "mistreatment", "new development", "redevelopment", "resident involvement", "Robert Taylor Homes", "Springfield", "transparency"],
    },
    
    {
    title    : "Razing the Brooks Extension",
    url      : "/razing-the-brooks-extension/",
    tags     : ["Chicago public housing", "community", "construction", "high-rise", "june july 2001 issue", "redevelopment", "relocation", "Robert Brooks Extensions", "Section 8", "Section 8 vouchers"],
    },
    
    {
    title    : "Ickes: Back To Square One",
    url      : "/ickes-back-to-square-one/",
    tags     : ["Chicago", "Chicago public housing", "Harold Ickes Homes", "june july 2001 issue", "public housing", "redevelopment", "security", "vandalism"],
    },
    
    {
    title    : "Between A Rock and a Hard Place",
    url      : "/between-a-rock-and-a-hard-place/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "housing", "inspection", "june july 2001 issue", "public housing security", "relocation", "Robert Taylor Homes", "Section 8", "security"],
    },
    
    {
    title    : "SPECIAL FEATURE: City Gets CHA Funds",
    url      : "/special-feature-city-gets-cha-funds/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "Chicago Park District", "Chicago Police Department", "Chicago public housing", "Chicago residents", "funding", "june july 2001 issue", "programs", "public housing residents", "social services"],
    },
    
    {
    title    : "Second Chance Legislation",
    url      : "/second-chance-legislation/",
    tags     : ["april 2001 issue", "Chicago", "criminal history", "criminal record", "employment", "ex-convicts", "ex-offenders", "expungement", "Illinois legislation", "politics", "second chance"],
    },
    
    {
    title    : "Stop The Violence",
    url      : "/stop-the-violence-14/",
    tags     : ["april 2001 issue", "Cabrini-Green", "Chicago", "Chicago violence", "crime", "David Protess", "Girl X", "investigation", "Northwestern University", "sexual assault"],
    },
    
    {
    title    : "Youths Rally For Summer Jobs",
    url      : "/youths-rally-for-summer-jobs/",
    tags     : ["april 2001 issue", "Chicago", "chicago youth", "CPS", "demonstrations", "employment", "rally", "youth jobs"],
    },
    
    {
    title    : "Child of the Pack Saddle: Part IV",
    url      : "/child-of-the-pack-saddle-part-iv/",
    tags     : ["april 2001 issue"],
    },
    
    {
    title    : "High Cost of Gas",
    url      : "/high-cost-of-gas/",
    tags     : ["april 2001 issue", "CHA", "CHA electricity", "Chicago", "Chicago Housing Authority", "Chicago public housing", "energy", "public housing"],
    },
    
    {
    title    : "Project Based Section-8s Threatened",
    url      : "/project-based-section-8s-threatened/",
    tags     : ["april 2001 issue", "Chicago", "Chicago public housing", "housing", "Section 8"],
    },
    
    {
    title    : "Transforming CHA: Ickes New Management",
    url      : "/transforming-cha-ickes-new-management/",
    tags     : ["april 2001 issue", "CHA", "Chicago", "community", "demolition", "Harold Ickes Homes", "Plan for Transformation", "private management", "public housing", "public services", "South Side"],
    },
    
    {
    title    : "The New Teachers Academy",
    url      : "/the-new-teachers-academy/",
    tags     : ["april 2001 issue", "Cermak Teachers Training Academy", "Chicago", "education", "Harold Ickes Homes", "new school"],
    },
    
    {
    title    : "Transforming CHA: Chewing Up Tobacco Road",
    url      : "/transforming-cha-chewing-up-tobacco-road/",
    tags     : ["47th Street", "april 2001 issue", "business", "Chicago", "displacement", "redevelopment", "relocation", "Rosenwald", "small business"],
    },
    
    {
    title    : "Transforming CHA: Senior Only Buildings",
    url      : "/transforming-cha-senior-only-buildings/",
    tags     : ["april 2001 issue", "CHA", "Chicago", "Chicago disabled", "Chicago Housing Authority", "public housing", "Racine Apartments", "senior citizens", "senior residents"],
    },
    
    {
    title    : "Transforming CHA: Making Connections",
    url      : "/transforming-cha-making-connections/",
    tags     : ["AmeriCorps", "april 2001 issue", "CHA", "Chicago", "Chicago Housing Authority", "Chicago public service", "City Department of Human Services", "relocation", "Service Connector"],
    },
    
    {
    title    : "Transforming CHA: Leaders Demand Changes to CHA Plan",
    url      : "/transforming-cha-leaders-demand-changes-to-cha-plan/",
    tags     : ["april 2001 issue", "CHA", "Chicago", "Chicago Housing Authority", "Chicago public housing", "Gautreaux", "Plan for Transformation", "public housing", "redevelopment", "relocation", "Relocation Rights Contract"],
    },
    
    {
    title    : "Dear Resident",
    url      : "/dear-resident-7/",
    tags     : ["black history month", "february 2001 issue", "millenium", "social progress", "Y2K"],
    },
    
    {
    title    : "Black History Section: A Celebrated Life",
    url      : "/black-history-section-a-celebrated-life/",
    tags     : ["black history month", "centenarian", "Dr. Martin Luther King", "february 2001 issue", "Gertrude Fredd"],
    },
    
    {
    title    : "Child of the Pack Saddle Part III",
    url      : "/child-of-the-pack-saddle-part-iii/",
    tags     : ["february 2001 issue"],
    },
    
    {
    title    : "Rappin' Tate The Great",
    url      : "/rappin-tate-the-great/",
    tags     : ["anti-violence", "Chicago", "Chicago music", "february 2001 issue", "rap", "Rappn' Tate da Great", "Tate"],
    },
    
    {
    title    : "Altgeld Gardens' Environmental Issues",
    url      : "/altgeld-gardens-environmental-issues/",
    tags     : ["Atgeld Gardens", "CHA", "Chicago Housing Authority", "demolition", "environment", "february 2001 issue", "health hazards", "industrial waste", "People for Community Recovery", "pollution", "public housing", "redevelopment", "South Side"],
    },
    
    {
    title    : "Stop The Violence",
    url      : "/stop-the-violence-15/",
    tags     : ["Chicago", "corruption", "CPD", "crime", "drug offenses", "february 2001 issue", "Ida B. Wells", "lawsuits", "Robert Taylor Homes"],
    },
    
    {
    title    : "Transforming CHA: Flannery Homes Residents Keep Waiting",
    url      : "/transforming-cha-flannery-homes-residents-keep-waiting/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "february 2001 issue", "fire", "fire devastation", "Flannery Homes", "insurance"],
    },
    
    {
    title    : "Del Prado Residents Face Uncertainty",
    url      : "/del-prado-residents-face-uncertainty/",
    tags     : ["Chicago", "Del Prado", "eviction", "february 2001 issue", "housing subsidies", "HUD", "Hyde Park", "Section 8", "Tenants United For Housing", "University of Chicago"],
    },
    
    {
    title    : "Transforming CHA: Federal Housing Voucher Woes",
    url      : "/transforming-cha-federal-housing-voucher-woes/",
    tags     : ["CHA", "CHAC", "Chicago Housing Authority", "february 2001 issue", "federal housing vouchers", "Robert Taylor Homes", "Section 8"],
    },
    
    {
    title    : "Transforming CHA: How To Save On Rent",
    url      : "/transforming-cha-how-to-save-on-rent/",
    tags     : ["Admissions and Occupancy policy", "CHA", "Chicago", "Chicago Housing Authority", "employment", "february 2001 issue", "Income Disregard", "rent prices"],
    },
    
    {
    title    : "Transforming CHA: One Strike Woes",
    url      : "/transforming-cha-one-strike-woes/",
    tags     : ["CHA", "Chicago Housing Authority", "eviction", "february 2001 issue", "housing", "One Strike"],
    },
    
    {
    title    : "Transforming CHA: Court Slam Dunks One Strike",
    url      : "/transforming-cha-court-slam-dunks-one-strike/",
    tags     : ["9th Circuit Court", "Bill Clinton", "CHA", "Chicago", "Chicago Housing Authority", "Chicago public housing", "drug possession", "eviction", "february 2001 issue", "Housing Opportunities Extension Act", "HUD", "lease", "Oakland Housing Authority", "One Strike", "private management", "public housing"],
    },
    
    {
    title    : "Transforming CHA: New Lights on Dark Passage",
    url      : "/transforming-cha-new-lights-on-dark-passage/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "february 2001 issue", "Harold Ickes Homes", "Hilliard Homes", "press conference", "public housing", "remodeling"],
    },
    
    {
    title    : "Transforming CHA: Washington Park Wants Answers",
    url      : "/transforming-cha-washington-park-wants-answers/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "february 2001 issue", "public housing", "public housing redevelopment", "redevelopment", "South Side"],
    },
    
    {
    title    : "Transforming CHA: Bush Team Keeps CHA Waiting",
    url      : "/transforming-cha-bush-team-keeps-cha-waiting/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "Chicago public housing", "february 2001 issue", "funding", "grant", "HOPE VI", "HUD", "NOFA", "Notices for Funding Availability", "public housing", "public housing residents", "redevelopment", "Robert Taylor Homes"],
    },
    
    {
    title    : "Cold War Echoes",
    url      : "/cold-war-echoes/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "Chicago public housing", "demolition", "february 2001 issue", "funding", "grants", "housing", "HUD", "low-income issues", "Mayor Richard M. Daley", "Plan for Transformation", "public housing", "public housing residents", "redevelopment", "U.S. Department of Housing and Urban Development"],
    },
    
    {
    title    : "ABLA Homes Update",
    url      : "/abla-homes-update/",
    tags     : ["ABLA", "August 1998 Issue", "current events", "Joseph Medill", "Joseph Medill Intermediate and Upper Grade Center", "local news", "public housing", "public housing residents"],
    },
    
    {
    title    : "Ida B. Wells Reunion",
    url      : "/ida-b-wells-reunion/",
    tags     : ["August 1998 Issue", "celebration", "CHA", "CHA Alumni Association", "Chicago", "Chicago Housing Authority", "community involvement", "Ida B. Wells", "public housing", "public housing residents", "reunion"],
    },
    
    {
    title    : "Hi Ho Dobbin Away",
    url      : "/hi-ho-dobbin-away/",
    tags     : ["anecdote", "August 1998 Issue", "Chicago", "Levy Center"],
    },
    
    {
    title    : "HUD Head: CHA Off Troubled List",
    url      : "/hud-head-cha-off-troubled-list/",
    tags     : ["August 1998 Issue", "CHA", "Chicago", "Chicago Housing Authority", "control", "HUD", "management", "Public Housing Management Assessment Program", "rating", "Troubled Housing Authorities"],
    },
    
    {
    title    : "All Things Old and New at Harold Ickes Homes",
    url      : "/all-things-old-and-new/",
    tags     : ["August 1998 Issue", "change", "Chicago", "Harold Ickes Homes", "public housing", "public housing residents", "renovation", "revitalization"],
    },
    
    {
    title    : "Dear Resident",
    url      : "/dear-resident-12/",
    tags     : ["advice", "athletics", "August 1998 Issue", "Chicago", "chicago public schools", "community involvement", "CPS", "education", "Options for Knowledge Program", "priorities"],
    },
    
    {
    title    : "Lathrop Homes News",
    url      : "/lathrop-homes-news-2/",
    tags     : ["August 1998 Issue", "Chicago", "community involvement", "community news", "construction", "current events", "Lathrop Homes", "public housing", "Resident Organizations"],
    },
    
    {
    title    : "Flannery Homes/Orchard Park Update",
    url      : "/flannery-homesorchard-park-update/",
    tags     : ["August 1998 Issue", "Chicago", "community involvement", "current events", "Flannery Homes", "living conditions", "maintenance", "management", "news", "Orchard Park", "public housing"],
    },
    
    {
    title    : "Cabrini Cliffhanger",
    url      : "/cabrini-cliffhanger/",
    tags     : ["August 1998 Issue", "Cabrini-Green", "Chicago", "demolition", "Habitat Company", "Halsted", "Near North", "public housing", "redevelopment"],
    },
    
    {
    title    : "RJ Visits Miami/Dade Housing Authority",
    url      : "/rj-visits-miamidade-housing-authority/",
    tags     : ["August 1998 Issue", "CHA", "Chicago Housing Authority", "diversity", "Haley Sofge", "Latino community", "Latino residents", "Miami/Dade Housing Agency", "public housing", "public housing residents"],
    },
    
    {
    title    : "New Facility for Scattered Sites",
    url      : "/new-facility-for-scattered-sites/",
    tags     : ["August 1998 Issue", "Chicago", "community involvement", "Hispanic Housing Development Corporation", "Latino community", "Scattered Sites North Central program"],
    },
    
    {
    title    : "Stop The Violence",
    url      : "/stop-the-violence-18/",
    tags     : ["August 1998 Issue", "CAPS", "CHA", "CHA Police Department", "Chicago", "Chicago Housing Authority", "Community Alternative Policing Strategies", "education", "housing conditions", "lock down", "public housing"],
    },
    
    {
    title    : "Access Report",
    url      : "/access-report-3/",
    tags     : ["accessibility", "August 1998 Issue", "CHA", "Chicago", "Chicago Housing Authority", "Cook-Dupage Transportation", "CTA Paratransit Operations", "disabled community", "senior citizens", "transportation"],
    },
    
    {
    title    : "Altgeld Gardens Report",
    url      : "/altgeld-gardens-report/",
    tags     : ["Altgeld Gardens", "August 1998 Issue", "Chicago", "community involvement", "current events", "news"],
    },
    
    {
    title    : "Robert Taylor: The Homes/The Man",
    url      : "/robert-taylor-the-homesthe-man/",
    tags     : ["August 1998 Issue", "CHA", "Chicago", "Chicago Housing Authority", "demolition", "history", "HUD", "mixed income communities", "public housing", "public housing residents", "racial issues", "Robert Rochan Taylor", "Robert Taylor Homes"],
    },
    
    {
    title    : "Dear Resident",
    url      : "/dear-resident-9/",
    tags     : ["advice", "Chicago", "community", "Dear Resident", "health", "January 1998 Issue", "letter", "perseverence", "public housing"],
    },
    
    {
    title    : "Stop the Violence",
    url      : "/stop-the-violence-16/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "Citizens Review Board", "community involvement", "crime", "Crime Victims Bureau", "gun violence", "January 1998 Issue", "public housing", "public housing residents", "violence"],
    },
    
    {
    title    : "Altgeld Gardens News",
    url      : "/altgeld-gardens-news/",
    tags     : ["Aldridge", "Altgeld Gardens", "Altgeld Health Center", "Chicago", "community involvement", "condolences", "health issues", "January 1998 Issue", "public housing", "public housing residents", "Thanksgiving"],
    },
    
    {
    title    : "CHA Announces First Clean Audit",
    url      : "/cha-announces-first-clean-audit/",
    tags     : ["audit", "CHA", "Chicago", "Chicago Housing Authority", "finances", "financial issues", "HUD", "January 1998 Issue", "public housing", "public housing residents", "redevelopment"],
    },
    
    {
    title    : "Flannery Homes Update",
    url      : "/flannery-homes-update/",
    tags     : ["Chicago", "community involvement", "festivities", "Flannery Homes", "holiday", "January 1998 Issue", "maintenance", "management", "politics", "public housing", "public housing residents", "regulations"],
    },
    
    {
    title    : "Cabrini-Green: Changes and Relocation",
    url      : "/cabrini-green-changes-and-relocation/",
    tags     : ["Cabrini-Green", "CHA", "Chicago", "Chicago Housing Authority", "chicago public schools", "CPS", "gun violence", "January 1998 Issue", "Jenner Elementary School", "public housing", "public housing residents", "relocation", "Section 8"],
    },
    
    {
    title    : "REDI: A New Beginning?",
    url      : "/redi-a-new-beginning/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "employment", "empowerment", "entrepreneurs", "January 1998 Issue", "ownership", "public housing", "public housing residents", "REDI", "Resident Employment Development Initiative"],
    },
    
    {
    title    : "ABLA Relocation Report",
    url      : "/abla-relocation-report/",
    tags     : ["ABLA", "Brooks Homes", "Chicago", "January 1998 Issue", "living conditions", "Memorandum of Agreement", "public housing", "public housing residents", "rehabilitation"],
    },
    
    {
    title    : "L.A. Tenants Challenge One-Strike",
    url      : "/l-a-tenants-challenge-one-strike/",
    tags     : ["ACLU", "American Civil Liberties Union", "Bill Clinton", "constitutionality", "eviction", "housing", "Housing Opportunities Extension Act", "January 1998 Issue", "lawsuit", "One Strike", "public housing", "public housing residents"],
    },
    
    {
    title    : "CHA to Buy Back Laundry Tokens",
    url      : "/cha-to-buy-back-laundry-tokens/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "financial issues", "January 1998 Issue", "living conditions", "public housing", "public housing residents", "refunds", "senior citizens"],
    },
    
    {
    title    : "Inspector General Nabs Employees",
    url      : "/inspector-general-nabs-employees/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "corruption", "employees", "identification", "January 1998 Issue", "Leonard Odom", "recovery of materials", "theft"],
    },
    
    {
    title    : "Access Report",
    url      : "/access-report/",
    tags     : ["ADA", "Americans with Disabilities Act", "CHA", "Chicago", "Chicago Housing Authority", "Hispanic Housing Development Corporation", "January 1998 Issue", "people with disabilities", "senior citizens"],
    },
    
    {
    title    : "The Million Woman March: One Woman's View",
    url      : "/the-million-woman-march-one-womans-view/",
    tags     : ["activism", "CHA", "Chicago Housing Authority", "community involvement", "empowerment", "January 1998 Issue", "Million Woman March", "Philadelphia", "women's issues"],
    },
    
    {
    title    : "The Next CHA Chairman?",
    url      : "/the-next-cha-chairman/",
    tags     : ["CHA", "chairman", "Chicago", "Chicago Housing Authority", "January 1998 Issue", "leadership", "politics", "public housing"],
    },
    
    {
    title    : "Farewell, Mr. Chairman",
    url      : "/farewell-mr-chairman/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "January 1998 Issue", "leadership", "public housing", "public housing residents", "transition"],
    },
    
    {
    title    : "The Mighty Residents of Bromley-Heath",
    url      : "/the-mighty-residents-of-bromley-heath/",
    tags     : ["Boston", "Bromley Heath", "Bromley-Heath Tenant Management Corporation", "CLPHA", "community involvement", "Conference of Large Public Housing Authorities", "January 1998 Issue", "living conditions", "low-income housing", "management", "NAHRO", "National Association of Housing and Redevelopment Officials", "public housing", "public housing residents"],
    },
    
    {
    title    : "Altgeld Gardens News",
    url      : "/altgeld-gardens-news-2/",
    tags     : ["Altgeld Gardens", "Chicago", "community involvement", "community news", "events", "Fall 1997 Issue", "festivities", "public housing", "Youthnet Fun Day"],
    },
    
    {
    title    : "Dear Resident",
    url      : "/dear-resident-11/",
    tags     : ["advice", "beauty", "black women", "Chicago", "Fall 1997 Issue", "letter", "Million Man March", "public housing residents", "respect"],
    },
    
    {
    title    : "Section 8 Update",
    url      : "/section-8-update/",
    tags     : ["applicants", "CHA", "Chicago", "Chicago Housing Authority", "construction", "Fall 1997 Issue", "Habitat Company", "Section 8 vouchers", "waiting list"],
    },
    
    {
    title    : "Chatting with Marie Billingsley",
    url      : "/chatting-with-marie-billingsley/",
    tags     : ["Chicago", "community involvement", "Fall 1997 Issue", "leadership", "Marie Billingsley", "Senior south Local Advisory Council", "Walter Russell"],
    },
    
    {
    title    : "8,000 To Get Jobs Help",
    url      : "/8000-to-get-jobs-help/",
    tags     : ["Department of Human Services", "education", "employment", "Fall 1997 Issue", "Illinois", "Illinois Job Advantage", "social services", "TANF", "Temporary Assistance to Needy Families", "training", "welfare"],
    },
    
    {
    title    : "Mothers Tackle Child Care Woes",
    url      : "/mothers-tackle-child-care-woes/",
    tags     : ["Chicago", "child care", "Daycare Action Council", "Fall 1997 Issue", "Henry Horner Homes", "motherhood", "Parenting", "walfare", "West Haven", "working mothers"],
    },
    
    {
    title    : "Flannery Homes News",
    url      : "/flannery-homes-news/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "community involvement", "eviction", "Fall 1997 Issue", "Flannery Homes", "news", "One Strike", "public housing", "public housing residents"],
    },
    
    {
    title    : "Happy 60th, Lathrop Homes",
    url      : "/happy-60th-lathrop-homes/",
    tags     : ["4-H Club", "CHA", "Chicago Housing Authority", "community involvement", "Fall 1997 Issue", "festivities", "Lathrop Homes"],
    },
    
    {
    title    : "CHA and Latinos: Interview with Joe Shuldiner",
    url      : "/cha-and-latinos-interview-with-joe-shuldiner/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "Fall 1997 Issue", "Latino community", "Latinos United", "lawsuit", "management", "public housing"],
    },
    
    {
    title    : "Stop the Violence II",
    url      : "/stop-the-violence-ii/",
    tags     : ["Chicago", "Chicago Police Department", "community involvement", "CPD", "employment", "Fall 1997 Issue", "injuries", "mistreatment", "police brutality", "resources", "violence"],
    },
    
    {
    title    : "Schools March for Victims",
    url      : "/schools-march-for-victims/",
    tags     : ["active participation", "Cabrini-Green", "Chicago", "chicago public schools", "Children First Fund", "community involvement", "CPS", "Crisis Support Fund", "Fall 1997 Issue", "fundraiser", "Girl X", "rally", "violence", "volunteers"],
    },
    
    {
    title    : "The Life of Artensa Randolph",
    url      : "/the-life-of-artensa-randolph/",
    tags     : ["Artensa Randolph", "Chicago", "community involvement", "death", "eulogy", "Fall 1997 Issue", "leadership", "Mamie Bone", "rememberance"],
    },
    
    {
    title    : "When Will It End?",
    url      : "/when-will-it-end/",
    tags     : ["Chicago", "crime", "danger", "destruction", "Fall 1997 Issue", "gun violence", "public housing", "youth"],
    },
    
    {
    title    : "Inner-City Truths: A Book Review",
    url      : "/inner-city-truths-a-book-review/",
    tags     : ["book review", "Chicago", "David Isay", "Fall 1997 Issue", "Ida B. Wells", "LeAlan Jones", "literature", "Lloyd Newman", "Our America", "public housing", "reality"],
    },
    
    {
    title    : "Access Report",
    url      : "/access-report-2/",
    tags     : ["Americans with Disabilities Act", "CHA", "Chicago", "Chicago Housing Authority", "disabilities", "Eckhart Park Greenview", "Fall 1997 Issue", "housing", "living conditions", "residents", "senior citizens"],
    },
    
    {
    title    : "A Decree But to What Degree?",
    url      : "/a-decree-but-to-what-degree/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "civil rights", "Fall 1997 Issue", "Gautreaux Decree", "HUD", "public housing", "public housing residents", "redevelopment"],
    },
    
    {
    title    : "Andrew Cuomo: Front and Center",
    url      : "/andrew-cuomo-front-and-center/",
    tags     : ["Andrew Cuomo", "CHA", "Chicago", "Chicago Housing Authority", "community", "Fall 1997 Issue", "HUD", "leadership", "Operation PUSH", "public housing", "redevelopment", "Rev. Jesse Jackson", "speech"],
    },
    
    {
    title    : "Residents Fight Vacate Orders",
    url      : "/residents-fight-vacate-orders/",
    tags     : ["building maintenance", "CHA", "Chicago", "Chicago Housing Authority", "Fall 1997 Issue", "inspection", "living conditions", "public housing", "public housing residents", "relocation", "Rockwell Gardens", "Stateway Gardens", "vacancy"],
    },
    
    {
    title    : "School Reform: Which Tax?",
    url      : "/school-reform-which-tax/",
    tags     : ["Chicago", "COSEC", "Council on Standards in Education and the Community", "education", "funding", "propety tax", "Public School Reform", "reform", "School Improvement Plan", "Summer 1997 Issue", "taxes"],
    },
    
    {
    title    : "Dear Resident",
    url      : "/dear-resident-10/",
    tags     : ["CHA", "Chicago", "outreach", "public housing", "readership", "Residents Journal", "Summer 1997 Issue"],
    },
    
    {
    title    : "Flannery Homes Update",
    url      : "/flannery-homes-update-2/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "Flannery Homes", "improvements", "living conditions", "management", "public housing", "public housing residents", "senior citizens", "Summer 1997 Issue"],
    },
    
    {
    title    : "Cabrini-Green Update",
    url      : "/cabrini-green-update/",
    tags     : ["Cabrini-Green", "Chicago", "community", "community involvement", "displacement", "employment", "Girl X", "march", "mural", "Patrick Sykes", "public housing", "public housing residents", "rehabilitation", "security", "St. Joseph's School", "Summer 1997 Issue"],
    },
    
    {
    title    : "Protecting CHA Residents: An Interview with Artensa Randolph",
    url      : "/protecting-cha-residents-an-interview-with-artensa-randolph/",
    tags     : ["Artensa Randolph", "building maintenance", "Central Advisory Council", "CHA", "Chicago", "Chicago Housing Authority", "living conditions", "management", "politics", "public housing", "public housing residents", "security", "Summer 1997 Issue"],
    },
    
    {
    title    : "Wells on the Rise",
    url      : "/wells-on-the-rise/",
    tags     : ["celebration", "Chicago", "community involvement", "Ida B. Wells", "Summer 1997 Issue", "Wells Day"],
    },
    
    {
    title    : "Stop the Violence",
    url      : "/stop-the-violence-17/",
    tags     : ["Chicago", "Chicago Black United Communities", "Committee Against Racism and Violence", "crime", "gun violence", "leadership", "Summer 1997 Issue", "victims", "violence"],
    },
    
    {
    title    : "Inaccessibility of CHA Developments",
    url      : "/inaccessibility-of-cha-developments/",
    tags     : ["accessibility", "Americans with Disabilities Act", "CHA", "Chicago", "Chicago Department on Aging", "Chicago Housing Authority", "disabled community", "HUD", "legislation", "regulations", "senior citizens", "Summer 1997 Issue", "transportation"],
    },
    
    {
    title    : "Horner Annex Reborn",
    url      : "/horner-annex-reborn/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "construction", "Henry Horner Homes", "HUD", "living conditions", "public housing", "public housing residents", "Summer 1997 Issue", "the Annex", "VOTE"],
    },
    
    {
    title    : "Cleaning Day on Recycling Road",
    url      : "/cleaning-day-on-recycling-road/",
    tags     : ["Buy-Back Recycling Program", "CHA", "Chicago", "Chicago Housing Authority", "Clean-Up Day", "community involvement", "environmental issues", "Lathrop Homes", "public housing", "public housing residents", "recycling", "Summer 1997 Issue"],
    },
    
    {
    title    : "Replacement Housing or Replacing People",
    url      : "/replacement-housing-or-replacing-people/",
    tags     : ["Chicago", "community", "Henry Horner Homes", "housing", "lottery", "public housing", "Section 8", "Summer 1997 Issue", "West Haven"],
    },
    
    {
    title    : "Safe Summer 97",
    url      : "/safe-summer-97/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "economic development", "employment", "public housing residents", "Reach for Tomorrow", "students", "summer", "Summer 1997 Issue"],
    },
    
    {
    title    : "The Magnificent Maya Angelou",
    url      : "/the-magnificent-maya-angelou/",
    tags     : ["ABLA", "Chicago", "Maya Angelou", "New Rosemont Theater", "public housing", "Summer 1997 Issue"],
    },
    
    {
    title    : "Focus On Section 8",
    url      : "/focus-on-section-8/",
    tags     : ["CHA", "CHAC Inc.", "Chicago", "Chicago Housing Authority", "HUD", "inspection", "lease", "public housing", "public housing residents", "Section 8", "senior citizens", "Summer 1997 Issue", "waiting list"],
    },
    
    {
    title    : "Latinos Gain Access to Public Housing",
    url      : "/latinos-gain-access-to-public-housing/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "discrimination", "HUD", "Latino community", "Latinos United", "lawsuit", "public housing", "public housing residents", "Summer 1997 Issue"],
    },
    
    {
    title    : "Hope Has a Way",
    url      : "/hope-has-a-way/",
    tags     : ["CHA", "Chicago Housing Authority", "hope", "inspiration", "public housing residents", "Summer 1997 Issue"],
    },
    
    {
    title    : "Dear Resident",
    url      : "/dear-resident-8/",
    tags     : ["Cabrini-Green", "Chicago", "Chicago Housing Authority", "community involvement", "Fall 1996 Issue", "public housing", "public housing residents", "redevelopment"],
    },
    
    {
    title    : "Last Harvest",
    url      : "/last-harvest/",
    tags     : ["Building Development Plan", "CHA", "Chicago", "community", "construction", "Fall 1996 Issue", "Flannery Homes", "mixed-income housing", "Orchard Park", "public housing", "public housing residents", "senior citizens"],
    },
    
    {
    title    : "The Man Who Scared the Hell Out of Me",
    url      : "/the-man-who-scared-the-hell-out-of-me/",
    tags     : ["Bill Clinton", "CHA", "Chicago public housing", "Fall 1996 Issue", "Hillary Clinton", "HUD", "U.S. Department of Housing and Urban Development"],
    },
    
    {
    title    : "A Teen's Shattered Dreams",
    url      : "/a-teens-shattered-dreams/",
    tags     : ["Fall 1996 Issue", "injury", "inspiration", "personal story"],
    },
    
    {
    title    : "Seniors form new organization",
    url      : "/seniors-form-new-organization/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "Fall 1996 Issue", "housing", "LAC", "Local Advisory Council", "senior citizens"],
    },
    
    {
    title    : "A Short History of Ida B. Wells",
    url      : "/a-short-history-of-ida-b-wells/",
    tags     : ["Chicago", "community involvement", "Fall 1996 Issue", "history", "housing development", "Ida B. Wells", "origins", "public housing"],
    },
    
    {
    title    : "Your Neighborhood Policemen",
    url      : "/your-neighborhood-policemen/",
    tags     : ["Chicago", "Chicago police", "community involvement", "Fall 1996 Issue", "interview", "law enforcement", "Q&A"],
    },
    
    {
    title    : "Washington Park: The Dying Hope",
    url      : "/washington-park-the-dying-hope/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "community involvement", "construction", "demolition", "Fall 1996 Issue", "history", "Lake Front Community Organization", "Lake Front Properties", "Lake Michigan Homes", "living conditions", "public housing", "public housing residents", "redevelopment", "relocation", "Sphinx Kiosk", "Washington Park"],
    },
    
    {
    title    : "A Long Ride Home",
    url      : "/a-long-ride-home/",
    tags     : ["Cabrini-Green", "CHA", "Chicago", "Chicago Housing Authority", "community involvement", "Fall 1996 Issue", "HUD", "public housing"],
    },
    
    {
    title    : "Marion...Marion Stamps",
    url      : "/marion-marion-stamps/",
    tags     : ["Cabrini-Green", "CHA", "Chicago", "Chicago public housing", "community", "community involvement", "Fall 1996 Issue", "leadership", "Marion Stamps", "public housing"],
    },
    
    {
    title    : "A History of Cabrini-Green",
    url      : "/a-history-of-cabrini-green/",
    tags     : ["Cabrini Homes", "Cabrini-Green", "Chicago", "construction", "development", "Fall 1996 Issue", "history", "public housing", "row houses", "William Green Homes"],
    },
    
    {
    title    : "What's Happening in ABLA?",
    url      : "/whats-happening-in-abla/",
    tags     : ["ABLA", "CHA", "Chicago", "Chicago Housing Authority", "community", "consolidation", "Fall 1996 Issue", "Food Program", "HOPE VI", "LAC", "Local Advisory Council", "public housing", "public housing residents", "relocation"],
    },
    
    {
    title    : "LeClaire Courts",
    url      : "/leclaire-courts/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "community involvement", "Fall 1996 Issue", "history", "Leclaire Courts", "management", "public housing", "public housing residents"],
    },
    
    {
    title    : "CHA Home Ownership: Wentworth Gardens",
    url      : "/cha-home-ownership-wentworth-gardens/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "Fall 1996 Issue", "home ownership", "Home Ownership Program", "public housing", "Wentworth Gardens"],
    },
    
    {
    title    : "Mr. Robinson Goes to Washington",
    url      : "/mr-robinson-goes-to-washington/",
    tags     : ["CHA", "Chicago", "Chicago Housing Authority", "conference", "Dominium", "Fall 1996 Issue", "HUD", "Kevin Marchman", "public housing", "travel", "Welfare Bill"],
    },
    
    {
    title    : "Vote '96: Conventional Colors",
    url      : "/vote-96-conventional-colors-2/",
    tags     : ["Chicago", "Democratic National Convention", "Democratic party", "election", "Fall 1996 Issue", "political parties", "politics", "Rev. Jesse Jackson"],
    },
    
    {
    title    : "Vote '96: Conventional Colors",
    url      : "/vote-96-conventional-colors/",
    tags     : ["Chicago", "Democratic National Convention", "discrimination", "Fall 1996 Issue", "politics"],
    }
];

var allTags = {"chicago public schools":[
        ["LEGO History","/lego-history/"],
        ["A LEGO Store Adventure","/a-lego-store-adventure/"],
        ["What is a Perfect Community?","/a-perfect-community-2/"],
        ["A Perfect Community","/a-perfect-community/"],
        ["Christmas Toy Drive","/christmas-toy-drive/"],
        ["How to Give Back To Your Community","/how-to-give-back-to-your-community/"],
        ["Learning About the Holocaust","/learning-about-the-holocaust/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news-5/"],
        ["Am I Prepared for College?","/am-i-prepared-for-college/"],
        ["Louder Than a Bomb","/louder-than-a-bomb/"],
        ["Do Athletes Have Special Privileges?","/do-athletes-have-special-privileges/"],
        ["Experiencing the Holocaust at the Field Museum","/experiencing-the-holocaust-at-the-field-museum/"],
        ["The Holocaust","/5671/"],
        ["One Of The Greatest Men In History","/one-of-the-greatest-men-in-history/"],
        ["Do What You Need To So You Can Do What You Want To","/do-what-you-need-to-so-you-can-do-what-you-want-to/"],
        ["Interview with an International Columnist","/5623/"],
        ["ECO Youth Training Session","/eco-youth/"],
        ["Chicago Gangs and Violence: Beyond Downtown","/chicago-gangs-and-violence-beyond-downtown/"],
        ["Teenage Love: Is It Real?","/teenage-love-is-it-real/"],
        ["Eco Youth Reporters Visit Starved Rock","/eco-youth-reporters-visit-starved-rock/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news-3/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news-2/"],
        ["Meet the Real Robeson High School","/meet-the-real-robeson-high-school/"],
        ["Sit In Against School Closings","/sit-in-against-school-closings/"],
        ["Does TV Affect Children's Behavior?","/does-tv-affect-childrens-behavior/"],
        ["Beyonce is My Role Model","/beyonce-is-my-role-model/"],
        ["Hip Hop Star on the Rise","/hip-hop-star-on-the-rise/"],
        ["The Many Talents of Tony Erwin","/the-many-talents-of-tony-erwin/"],
        ["Inside the Teachers Strike","/inside-the-teachers-strike/"],
        ["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["Exploring After-School Programs","/exploring-after-school-programs/"],
        ["Healthy Ways to Fight Lead Poisoning","/healthy-ways-to-fight-lead-poisoning/"],
        ["Parents Protest CPS Turn-Arounds","/parents-protest-cps-turn-arounds/"],
        ["New Mandates for Chicago Public Schools","/new-mandates-for-chicago-public-schools/"],
        ["Some Lathrop Kids Get a Bus, But Not All","/some-lathrop-kids-get-a-bus-but-not-all/"],
        ["Altgeld’s New Library","/altgeld%e2%80%99s-new-library/"],
        ["Corporate Partnership Builds a Public School Playground","/corporate-partnership-builds-a-public-school-playground/"],
        ["Mayor Emanuel Booed at Budget Town Hall","/mayor-emanuel-booed-at-budget-townhall-meeting/"],
        ["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom/"],
        ["CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo/"],
        ["Special Investigation: CHA Wanted Kids’ Report Cards","/special-investigation-cha-wanted-kids%e2%80%99-report-cards/"],
        ["Youths and Sex Ed","/youths-and-sex-ed/"],
        ["Nuf Said: Will Violence Finally Stop?","/nuf-said-will-violence-finally-stop/"],
        ["Parents File Discrimination Complaint against CPS Promotion Policy for Elementary Students","/parents-file-discrimination-complaint-against-cps-promotion-policy-for-elementary-students/"],
        ["A Salute to Women Veterans","/a-salute-to-women-veterans/"],
        ["RJ Youth Instructor Discussing Teen Project with Youth Reporter","/rj-youth-instructor-discussing-teen-project-with-youth-reporter/"],
        ["A Teens View of a recent Chicago Youth Summit","/residents-journal-can-tv-show-on-a-recent-chicago-youth-summit/"],
        ["Where I Come From","/where-i-come-from/"],
        ["Born Out of Struggle (Part 1)","/born-out-of-struggle-part-1/"],
        ["Is South Shore Clean?","/is-south-shore-clean/"],
        ["Cafeteria Food","/cafeteria-food/"],
        ["CPS Fan Restrictions","/cps-fan-restrictions/"],
        ["Residents Blame CHA for School Closures","/residents-blame-cha-for-school-closures/"],
        ["Under Fire, Board Closes Schools Anyway","/under-fire-board-closes-schools-anyway/"],
        ["Sisters Form a Brotherhood","/sisters-form-a-brotherhood/"],
        ["Whose School Is It?","/whose-school-is-it/"],
        ["Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes/"],
        ["CPS Violence","/cps-violence/"],
        ["Dear Resident","/dear-resident-12/"],
        ["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation/"],
        ["Schools March for Victims","/schools-march-for-victims/"]],
    "chicago youth":[[
        "LEGO History","/lego-history/"],
        ["A LEGO Store Adventure","/a-lego-store-adventure/"],
        ["What is a Perfect Community?","/a-perfect-community-2/"],
        ["A Perfect Community","/a-perfect-community/"],
        ["Christmas Toy Drive","/christmas-toy-drive/"],
        ["How to Give Back To Your Community","/how-to-give-back-to-your-community/"],
        ["Learning About the Holocaust","/learning-about-the-holocaust/"],
        ["We The People Media ED Guest Hosts Chicago Newsroom","/we-the-people-media-ed-guest-hosts-chicago-newsroom/"],
        ["CTA Changes Keep Riders On Their Toes","/cta-changes-keep-riders-on-their-toes/"],
        ["A Truce in the War on Drugs? Part II.","/a-truce-in-the-war-on-drugs-part-ii/"],
        ["Am I Prepared for College?","/am-i-prepared-for-college/"],
        ["Louder Than a Bomb","/louder-than-a-bomb/"],
        ["Do Athletes Have Special Privileges?","/do-athletes-have-special-privileges/"],
        ["Experiencing the Holocaust at the Field Museum","/experiencing-the-holocaust-at-the-field-museum/"],
        ["The Holocaust","/5671/"],
        ["One Of The Greatest Men In History","/one-of-the-greatest-men-in-history/"],
        ["Do What You Need To So You Can Do What You Want To","/do-what-you-need-to-so-you-can-do-what-you-want-to/"],
        ["The Holocaust and Propaganda","/the-holocaust-and-propaganda/"],
        ["Interview with an International Columnist","/5623/"],
        ["ECO Youth Training Session","/eco-youth/"],
        ["Success through Self Determination","/success-through-self-determination/"],
        ["Racism in America","/racism-in-america/"],
        ["Chicago Gangs and Violence: Beyond Downtown","/chicago-gangs-and-violence-beyond-downtown/"],
        ["Teenage Love: Is It Real?","/teenage-love-is-it-real/"],
        ["What Can Drive a Person to Murder?","/what-can-drive-a-person-to-murder/"],
        ["Eco Youth Reporters Visit Starved Rock","/eco-youth-reporters-visit-starved-rock/"],
        ["My First Kayaking Trip","/my-first-kayaking-trip/"],
        ["A River Adventure","/a-river-adventure/"],
        ["Asian Carp is a Man-Made Issue","/asian-carp-is-a-man-made-issue/"],
        ["Chasing the “Blue Whale of Freshwater”","/chasing-the-blue-whale-of-freshwater/"],
        ["Meet the Real Robeson High School","/meet-the-real-robeson-high-school/"],
        ["Frack Attack in Illinois","/frack-attack-in-illinois/"],
        ["Beyonce is My Role Model","/beyonce-is-my-role-model/"],
        ["Hip Hop Star on the Rise","/hip-hop-star-on-the-rise/"],
        ["The Many Talents of Tony Erwin","/the-many-talents-of-tony-erwin/"],
        ["Chicagoans Will Fish, Contamination or Not","/chicagoans-will-fish-contamination-or-not/"],
        ["Inside the Teachers Strike","/inside-the-teachers-strike/"],
        ["Winners from the Resident Survey!","/winners-from-the-resident-survey/"],
        ["Stray Dogs in Englewood","/stray-dogs-in-englewood/"],
        ["Exploring After-School Programs","/exploring-after-school-programs/"],
        ["Learning about the world on a youth retreat","/learning-about-the-world-on-a-youth-retreat/"],
        ["Healthy Ways to Fight Lead Poisoning","/healthy-ways-to-fight-lead-poisoning/"],
        ["Altgeld’s New Library","/altgeld%e2%80%99s-new-library/"],
        ["Corporate Partnership Builds a Public School Playground","/corporate-partnership-builds-a-public-school-playground/"],
        ["Residents' Journal Reporters talking about Current Youth Articles","/residents-journal-staff-member-talking-to-an-urban-youth-international-journalism-program-student-about-her-news-reports-this-summer/"],
        ["After The Dust","/after-the-dust/"],
        ["A New Start for the Indiana Dunes","/a-new-start-for-the-indiana-dunes/"],
        ["The Fish of Lake Michigan","/the-fish-of-lake-michigan/"],
        ["Former Youth Reporter, Now an Author!","/former-youth-reporter-now-an-author/"],
        ["Lead and Coal Plants in Pilsen","/lead-and-coal-plants-in-pilsen/"],
        ["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery/"],
        ["Residents' Journal Publisher talking about an Environmental Project for Youth","/residents-journal-publisher-talking-about-an-environmental-project-for-youth/"],
        ["Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell/"],
        ["My trip to Paris","/my-trip-to-paris/"],
        ["The Bow Campaign","/the-bow-campaign/"],
        ["Special Investigation: CHA Wanted Kids’ Report Cards","/special-investigation-cha-wanted-kids%e2%80%99-report-cards/"],
        ["The Garden","/the-garden/"],
        ["The Transformation of Jason Moy","/the-transformation-of-jason-moy/"],
        ["Boxing Keeps Dad's Memory Alive","/boxing-keeps-dads-memory-alive/"],
        ["Youths and Sex Ed","/youths-and-sex-ed/"],
        ["On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith/"],
        ["Cabrini-Green Residents Say Goodbye","/cabrini-green-residents-say-goodbye/"],
        ["Nuf Said: Will Violence Finally Stop?","/nuf-said-will-violence-finally-stop/"],
        ["Bowling Excursion","/bowling-excursion/"],
        ["Youths Speak Out on Violence","/youths-speak-out-on-violence/"],
        ["A Teens View of a recent Chicago Youth Summit","/residents-journal-can-tv-show-on-a-recent-chicago-youth-summit/"],
        ["From the Inside Looking Out: Bullying","/from-the-inside-looking-out-bullying/"],
        ["Robert Taylor On Line","/robert-taylor-on-line/"],
        ["CAN TV Devotes Entire Day Programming to “Stop the Violence” in the City of Chicago","/can-tv-devotes-entire-day-programming-to-stop-the-violence-in-the-city-of-chicago/"],
        ["Youths Testify for Alternative Schools","/youths-testify-for-alternative-schools/"],
        ["Obama's Visit to Howard Alternative High School","/obamas-visit-to-howard-alternative-high-school/"],
        ["Harold Ickes News","/harold-ickes-news-7/"],
        ["Stop The Violence","/stop-the-violence-8/"],
        ["Youth Violence Prevention","/youth-violence-prevention/"],
        ["Youths Rally For Summer Jobs","/youths-rally-for-summer-jobs/"]],
    "community":[[
        "LEGO History","/lego-history/"],
        ["A LEGO Store Adventure","/a-lego-store-adventure/"],
        ["A Perfect Community","/a-perfect-community/"],
        ["Christmas Toy Drive","/christmas-toy-drive/"],
        ["How to Give Back To Your Community","/how-to-give-back-to-your-community/"],
        ["Am I Prepared for College?","/am-i-prepared-for-college/"],
        ["Do Athletes Have Special Privileges?","/do-athletes-have-special-privileges/"],
        ["Interview with an International Columnist","/5623/"],
        ["ECO Youth Training Session","/eco-youth/"],
        ["What Can Drive a Person to Murder?","/what-can-drive-a-person-to-murder/"],
        ["The Invasion of the Great Lakes","/the-invasion-of-the-great-lakes/"],
        ["Asian Carp is a Man-Made Issue","/asian-carp-is-a-man-made-issue/"],
        ["Chasing the “Blue Whale of Freshwater”","/chasing-the-blue-whale-of-freshwater/"],
        ["Exploring After-School Programs","/exploring-after-school-programs/"],
        ["Memories of R. Taylor","/memories-of-r-taylor/"],
        ["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2/"],
        ["Dear Resident","/dear-resident-2/"],
        ["Ickes' Homes New Managers","/ickes-homes-new-managers/"],
        ["New Vincennes Plaza","/new-vincennes-plaza/"],
        ["Sinai Health Services","/sinai-health-services/"],
        ["A Trip To The Future","/a-trip-to-the-future/"],
        ["Razing the Brooks Extension","/razing-the-brooks-extension/"],
        ["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management/"],
        ["Dear Resident","/dear-resident-9/"],
        ["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center/"],
        ["Cabrini-Green Update","/cabrini-green-update/"],
        ["Replacement Housing or Replacing People","/replacement-housing-or-replacing-people/"],
        ["Last Harvest","/last-harvest/"],
        ["Marion...Marion Stamps","/marion-marion-stamps/"],
        ["What's Happening in ABLA?","/whats-happening-in-abla/"]],
    "community involvement":[[
        "LEGO History","/lego-history/"],
        ["A LEGO Store Adventure","/a-lego-store-adventure/"],
        ["What is a Perfect Community?","/a-perfect-community-2/"],
        ["A Perfect Community","/a-perfect-community/"],
        ["Christmas Toy Drive","/christmas-toy-drive/"],
        ["How to Give Back To Your Community","/how-to-give-back-to-your-community/"],
        ["Learning About the Holocaust","/learning-about-the-holocaust/"],
        ["CTA Changes Keep Riders On Their Toes","/cta-changes-keep-riders-on-their-toes/"],
        ["A Truce in the War on Drugs? Part I.","/5708/"],
        ["Am I Prepared for College?","/am-i-prepared-for-college/"],
        ["Do Athletes Have Special Privileges?","/do-athletes-have-special-privileges/"],
        ["Experiencing the Holocaust at the Field Museum","/experiencing-the-holocaust-at-the-field-museum/"],
        ["The Holocaust","/5671/"],
        ["One Of The Greatest Men In History","/one-of-the-greatest-men-in-history/"],
        ["Do What You Need To So You Can Do What You Want To","/do-what-you-need-to-so-you-can-do-what-you-want-to/"],
        ["Interview with an International Columnist","/5623/"],
        ["ECO Youth Training Session","/eco-youth/"],
        ["Success through Self Determination","/success-through-self-determination/"],
        ["Racism in America","/racism-in-america/"],
        ["Chicago Gangs and Violence: Beyond Downtown","/chicago-gangs-and-violence-beyond-downtown/"],
        ["What Can Drive a Person to Murder?","/what-can-drive-a-person-to-murder/"],
        ["Eco Youth Reporters Visit Starved Rock","/eco-youth-reporters-visit-starved-rock/"],
        ["The New Resident Leadership","/the-new-resident-leadership/"],
        ["My First Kayaking Trip","/my-first-kayaking-trip/"],
        ["A River Adventure","/a-river-adventure/"],
        ["Asian Carp is a Man-Made Issue","/asian-carp-is-a-man-made-issue/"],
        ["Chasing the “Blue Whale of Freshwater”","/chasing-the-blue-whale-of-freshwater/"],
        ["Oakwood Shores Update","/oakwood-shores-update/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news-2/"],
        ["The Many Talents of Tony Erwin","/the-many-talents-of-tony-erwin/"],
        ["Winners from the Resident Survey!","/winners-from-the-resident-survey/"],
        ["Exploring After-School Programs","/exploring-after-school-programs/"],
        ["Learning about the world on a youth retreat","/learning-about-the-world-on-a-youth-retreat/"],
        ["Corporate Partnership Builds a Public School Playground","/corporate-partnership-builds-a-public-school-playground/"],
        ["Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives/"],
        ["Residents' Journal Reporters talking about Current Youth Articles","/residents-journal-staff-member-talking-to-an-urban-youth-international-journalism-program-student-about-her-news-reports-this-summer/"],
        ["After The Dust","/after-the-dust/"],
        ["A New Start for the Indiana Dunes","/a-new-start-for-the-indiana-dunes/"],
        ["Former Youth Reporter, Now an Author!","/former-youth-reporter-now-an-author/"],
        ["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery/"],
        ["Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street/"],
        ["Tenants Protest New CHA School Reporting Policy","/tenants-protest-new-cha-school-reporting-policy/"],
        ["Robert Taylor On Line","/robert-taylor-on-line/"],
        ["CAN TV Devotes Entire Day Programming to “Stop the Violence” in the City of Chicago","/can-tv-devotes-entire-day-programming-to-stop-the-violence-in-the-city-of-chicago/"],
        ["A Special Tribute","/a-special-tribute/"],
        ["CHA Development News","/cha-development-news/"],
        ["Pilsen Guards Against Gentrifyers","/pilsen-guards-against-gentrifyers/"],
        ["Harold Ickes News","/harold-ickes-news-2/"],
        ["Black Metropolis National Heritage Area Project","/black-metropolis-national-heritage-area-project/"],
        ["Harold Ickes News","/harold-ickes-news-3/"],
        ["Residents: What People Want","/residents-what-people-want/"],
        ["More CHA Residents Voting Woes","/more-cha-residents-voting-woes/"],
        ["Cabrini-Green Election","/cabrini-green-election/"],
        ["Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes/"],
        ["Positive People","/positive-people/"],
        ["Positive People","/positive-people-2/"],
        ["2004 Election Focal Points","/2004-election-focal-points/"],
        ["Bronzeville Community Alert","/bronzeville-community-alert/"],
        ["Stop The Violence","/stop-the-violence-5/"],
        ["Positive People","/positive-people-3/"],
        ["Positive People","/positive-people-4/"],
        ["War with Iraq: A Personal Perspective","/war-with-iraq-a-personal-perspective/"],
        ["Positive Residents of the CHA","/positive-residents-of-the-cha/"],
        ["Seniors Graduate Police Class","/seniors-graduate-police-class/"],
        ["Harold Ickes News","/harold-ickes-news-9/"],
        ["Harold Ickes New School Update","/harold-ickes-new-school-update/"],
        ["Lathrop News","/lathrop-news/"],
        ["ABLA News","/abla-news/"],
        ["Productive Men of the CHA","/productive-men-of-the-cha/"],
        ["Remembering Leroy Watkins","/remembering-leroy-watkins/"],
        ["Ida B. Wells Reunion","/ida-b-wells-reunion/"],
        ["Dear Resident","/dear-resident-12/"],
        ["Lathrop Homes News","/lathrop-homes-news-2/"],
        ["Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update/"],
        ["New Facility for Scattered Sites","/new-facility-for-scattered-sites/"],
        ["Altgeld Gardens Report","/altgeld-gardens-report/"],
        ["Stop the Violence","/stop-the-violence-16/"],
        ["Altgeld Gardens News","/altgeld-gardens-news/"],
        ["Flannery Homes Update","/flannery-homes-update/"],
        ["The Million Woman March: One Woman's View","/the-million-woman-march-one-womans-view/"],
        ["The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath/"],
        ["Altgeld Gardens News","/altgeld-gardens-news-2/"],
        ["Chatting with Marie Billingsley","/chatting-with-marie-billingsley/"],
        ["Flannery Homes News","/flannery-homes-news/"],
        ["Happy 60th, Lathrop Homes","/happy-60th-lathrop-homes/"],
        ["Stop the Violence II","/stop-the-violence-ii/"],
        ["Schools March for Victims","/schools-march-for-victims/"],
        ["The Life of Artensa Randolph","/the-life-of-artensa-randolph/"],
        ["Cabrini-Green Update","/cabrini-green-update/"],
        ["Wells on the Rise","/wells-on-the-rise/"],
        ["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road/"],
        ["Dear Resident","/dear-resident-8/"],
        ["A Short History of Ida B. Wells","/a-short-history-of-ida-b-wells/"],
        ["Your Neighborhood Policemen","/your-neighborhood-policemen/"],
        ["Washington Park: The Dying Hope","/washington-park-the-dying-hope/"],
        ["A Long Ride Home","/a-long-ride-home/"],
        ["Marion...Marion Stamps","/marion-marion-stamps/"],
        ["LeClaire Courts","/leclaire-courts/"]],
    "youth":[[
        "LEGO History","/lego-history/"],
        ["A LEGO Store Adventure","/a-lego-store-adventure/"],
        ["What is a Perfect Community?","/a-perfect-community-2/"],
        ["A Perfect Community","/a-perfect-community/"],
        ["Christmas Toy Drive","/christmas-toy-drive/"],
        ["How to Give Back To Your Community","/how-to-give-back-to-your-community/"],
        ["Learning About the Holocaust","/learning-about-the-holocaust/"],
        ["CTA Changes Keep Riders On Their Toes","/cta-changes-keep-riders-on-their-toes/"],
        ["The Holocaust and Propaganda","/the-holocaust-and-propaganda/"],
        ["Interview with an International Columnist","/5623/"],
        ["ECO Youth Training Session","/eco-youth/"],
        ["Racism in America","/racism-in-america/"],
        ["Chicago Gangs and Violence: Beyond Downtown","/chicago-gangs-and-violence-beyond-downtown/"],
        ["What Can Drive a Person to Murder?","/what-can-drive-a-person-to-murder/"],
        ["Eco Youth Reporters Visit Starved Rock","/eco-youth-reporters-visit-starved-rock/"],
        ["My First Kayaking Trip","/my-first-kayaking-trip/"],
        ["A River Adventure","/a-river-adventure/"],
        ["The Invasion of the Great Lakes","/the-invasion-of-the-great-lakes/"],
        ["Meet the Real Robeson High School","/meet-the-real-robeson-high-school/"],
        ["Supreme Court Justice Sonia Sotomayor visits Chicago","/supreme-court-justice-sonia-sotomayor-visits-chicago/"],
        ["Honoring Dr. King's Legacy","/honoring-dr-kings-legacy/"],
        ["Chicago’s Nuclear History","/chicagos-nuclear-history/"],
        ["Preserving History and Ecology","/preserving-history-and-ecology/"],
        ["Sit In Against School Closings","/sit-in-against-school-closings/"],
        ["Why It's So Hard to End Poverty","/why-its-so-hard-to-end-poverty/"],
        ["Does TV Affect Children's Behavior?","/does-tv-affect-childrens-behavior/"],
        ["Beyonce is My Role Model","/beyonce-is-my-role-model/"],
        ["Hip Hop Star on the Rise","/hip-hop-star-on-the-rise/"],
        ["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["Stray Dogs in Englewood","/stray-dogs-in-englewood/"],
        ["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer/"],
        ["Learning about the world on a youth retreat","/learning-about-the-world-on-a-youth-retreat/"],
        ["Healthy Ways to Fight Lead Poisoning","/healthy-ways-to-fight-lead-poisoning/"],
        ["Corporate Partnership Builds a Public School Playground","/corporate-partnership-builds-a-public-school-playground/"],
        ["Residents' Journal Coverage of the Recent Demolition of the Last CHA Ida B. Wells Homes Buildings","/residents-journal-coverage-of-the-recent-demolition-of-the-last-cha-ida-b-wells-homes-buildings/"],
        ["Residents' Journal Reporters talking about Current Youth Articles","/residents-journal-staff-member-talking-to-an-urban-youth-international-journalism-program-student-about-her-news-reports-this-summer/"],
        ["Altgeld Gardens Tries to Stay Cool","/altgeld-gardens-tries-to-stay-cool/"],
        ["How to Deal with the Next Heat Wave","/how-to-deal-with-the-next-heat-wave/"],
        ["After The Dust","/after-the-dust/"],
        ["A Toxic Tour of Little Village","/little-village-story/"],
        ["A New Start for the Indiana Dunes","/a-new-start-for-the-indiana-dunes/"],
        ["The Fish of Lake Michigan","/the-fish-of-lake-michigan/"],
        ["Former Youth Reporter, Now an Author!","/former-youth-reporter-now-an-author/"],
        ["USDA Contest to Celebrate Success in the Summer Food Service Program","/usda-contest-to-celebrate-success-in-the-summer-food-service-program/"],
        ["Residents' Journal Editor-in-chief talking about Summer Youth Employment","/residents-journal-editor-in-chief-talking-about-summer-youth-employment/"],
        ["Residents' Journal Publisher talking about an Environmental Project for Youth","/residents-journal-publisher-talking-about-an-environmental-project-for-youth/"],
        ["Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell/"],
        ["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom/"],
        ["My trip to Paris","/my-trip-to-paris/"],
        ["A Dream Come True","/a-dream-come-true/"],
        ["The Bow Campaign","/the-bow-campaign/"],
        ["Youths and Sex Ed","/youths-and-sex-ed/"],
        ["On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith/"],
        ["Cabrini-Green Residents Say Goodbye","/cabrini-green-residents-say-goodbye/"],
        ["We The People Media's Coverage of the Chicago Mayor's Race","/we-the-people-medias-coverage-of-the-chicago-mayors-race/"],
        ["A Teens View of a recent Chicago Youth Summit","/residents-journal-can-tv-show-on-a-recent-chicago-youth-summit/"],
        ["Presidential Election Notebook","/presidential-election-notebook/"],
        ["Harold Ickes News","/harold-ickes-news-9/"],
        ["Harold Ickes Homes News","/harold-ickes-homes-news/"],
        ["When Will It End?","/when-will-it-end/"]],
    "education":[[
        "What is a Perfect Community?","/a-perfect-community-2/"],
        ["What Can Drive a Person to Murder?","/what-can-drive-a-person-to-murder/"],
        ["Does TV Affect Children's Behavior?","/does-tv-affect-childrens-behavior/"],
        ["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["Winners from the Resident Survey!","/winners-from-the-resident-survey/"],
        ["Exploring After-School Programs","/exploring-after-school-programs/"],
        ["Making a college visit count","/making-a-college-visit-count/"],
        ["Corporate Partnership Builds a Public School Playground","/corporate-partnership-builds-a-public-school-playground/"],
        ["Residents' Journal Publisher talking about an Environmental Project for Youth","/residents-journal-publisher-talking-about-an-environmental-project-for-youth/"],
        ["RJ Reporter talking about Youth Media Project","/rj-reporter-talking-about-youth-media-project/"],
        ["Tenants Protest New CHA School Reporting Policy","/tenants-protest-new-cha-school-reporting-policy/"],
        ["Born Out of Struggle (Part 1)","/born-out-of-struggle-part-1/"],
        ["Is South Shore Clean?","/is-south-shore-clean/"],
        ["Play Now, Pay Later","/play-now-pay-later/"],
        ["Teacher of the Month","/teacher-of-the-month/"],
        ["Residents Blame CHA for School Closures","/residents-blame-cha-for-school-closures/"],
        ["Under Fire, Board Closes Schools Anyway","/under-fire-board-closes-schools-anyway/"],
        ["Whose School Is It?","/whose-school-is-it/"],
        ["Jones vs. Tatum","/jones-vs-tatum/"],
        ["Rush vs. Jackson","/rush-vs-jackson/"],
        ["Harold Ickes News","/harold-ickes-news-2/"],
        ["Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes/"],
        ["CPS Violence","/cps-violence/"],
        ["Harold Ickes News","/harold-ickes-news-5/"],
        ["Seniors Graduate Police Class","/seniors-graduate-police-class/"],
        ["Harold Ickes New School Update","/harold-ickes-new-school-update/"],
        ["The Renowned Vernon Jordan","/the-renowned-vernon-jordan/"],
        ["The New Teachers Academy","/the-new-teachers-academy/"],
        ["Dear Resident","/dear-resident-12/"],
        ["Stop The Violence","/stop-the-violence-18/"],
        ["8,000 To Get Jobs Help","/8000-to-get-jobs-help/"],
        ["School Reform: Which Tax?","/school-reform-which-tax/"]],
    "Black History":[[
        "A Perfect Community","/a-perfect-community/"],
        ["John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp/"]],
    "Malcolm X":[[
        "A Perfect Community","/a-perfect-community/"]],
    "Christmas":[[
        "Christmas Toy Drive","/christmas-toy-drive/"]],
    "U.S. Holocaust Museum":[[
        "Learning About the Holocaust","/learning-about-the-holocaust/"],
        ["Experiencing the Holocaust at the Field Museum","/experiencing-the-holocaust-at-the-field-museum/"],
        ["The Holocaust","/5671/"],
        ["The Holocaust and Propaganda","/the-holocaust-and-propaganda/"],
        ["Racism in America","/racism-in-america/"]],
    "Chicago Mayor Rahm Emanuel":[[
        "We The People Media in the News","/we-the-people-media-in-the-news-5/"],
        ["We The People Media ED Guest Hosts Chicago Newsroom","/we-the-people-media-ed-guest-hosts-chicago-newsroom/"],
        ["We The People Media In The News","/we-the-people-media-in-the-news-4/"],
        ["CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls/"],
        ["Another CHA Chief Bows Out","/another-cha-chief-bows-out/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news-3/"],
        ["Inside the Teachers Strike","/inside-the-teachers-strike/"],
        ["Rally against NATO, War and Poverty","/rally-against-nato-war-and-poverty/"],
        ["Parents Protest CPS Turn-Arounds","/parents-protest-cps-turn-arounds/"],
        ["Charlotte Housing Authority Chief takes CHA Position","/charlotte-housing-authority-chief-takes-cha-position/"],
        ["Commissioner Fails to Show at Mental Health Town Hall Meeting","/commissioner-fails-to-show-at-mental-health-town-hall/"],
        ["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom/"],
        ["New Mayor Emanuel’s Road Map for Chicago’s Future","/new-mayor-emanuel%e2%80%99s-road-map-for-chicago%e2%80%99s-future/"]],
    "Chicago Police Department":[[
        "We The People Media in the News","/we-the-people-media-in-the-news-5/"],
        ["We The People Media ED Guest Hosts Chicago Newsroom","/we-the-people-media-ed-guest-hosts-chicago-newsroom/"],
        ["A Truce in the War on Drugs? Part II.","/a-truce-in-the-war-on-drugs-part-ii/"],
        ["Chicago Gangs and Violence: Beyond Downtown","/chicago-gangs-and-violence-beyond-downtown/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news-3/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news-2/"],
        ["We The People Media ED on Chicago Newsroom","/we-the-people-media-ed-on-chicago-newsroom/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news/"],
        ["Rally against NATO, War and Poverty","/rally-against-nato-war-and-poverty/"],
        ["Altgeld Tenants: Police, Cameras Not Improving Security","/altgeld-tenants-police-cameras-not-improving-security/"],
        ["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom/"],
        ["Nuf Said: Will Violence Finally Stop?","/nuf-said-will-violence-finally-stop/"],
        ["Residents' Journal Editor-in-Chief Discussing Chicago Mayoral Election and CPD Protest","/residents-journal-editor-in-chief-discussing-mayoral-election-and-cpd-protest/"],
        ["Cong. Danny Davis proposes anti-police torture legislation","/cong-danny-davis-proposes-anti-police-torture-legislation/"],
        ["Lawsuit Underway after Guilty Verdict in Burge Trial","/lawsuit-underway-after-guilty-verdict-in-burge-trial/"],
        ["Burge Victims’ Attorneys Fight Transfers","/burge-victims-attorneys-fight-transfers/"],
        ["Cops Fight Their Own Over Burge","/cops-fight-their-own-over-burge/"],
        ["The Times They Are A’Changing","/the-times-they-are-achanging/"],
        ["Harold L. Ickes Homes News","/harold-l-ickes-homes-news/"],
        ["Are CPD Contact Cards Unconstitutional?","/are-cpd-contact-cards-unconstitutional/"],
        ["Checking Chicago's War on Drugs","/checking-chicagos-war-on-drugs/"],
        ["House of Screams","/house-of-screams/"],
        ["Publisher's Box","/publishers-box/"],
        ["Deadly Moves II","/deadly-moves-ii/"],
        ["Deadly Moves - an update","/deadly-moves-an-update/"],
        ["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force/"],
        ["Deadly Moves: Troubling Development","/deadly-moves-troubling-development/"],
        ["If the Suit Fits, Who Wears It?","/if-the-suit-fits-who-wears-it/"],
        ["A Championship Victory","/a-championship-victory/"],
        ["Seniors Graduate Police Class","/seniors-graduate-police-class/"],
        ["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds/"],
        ["Stop the Violence II","/stop-the-violence-ii/"]],
    "Chicago public housing":[[
        "We The People Media in the News","/we-the-people-media-in-the-news-5/"],
        ["We The People Media ED Guest Hosts Chicago Newsroom","/we-the-people-media-ed-guest-hosts-chicago-newsroom/"],
        ["What Can Drive a Person to Murder?","/what-can-drive-a-person-to-murder/"],
        ["The New Resident Leadership","/the-new-resident-leadership/"],
        ["Remembering ABLA Homes' Deverra Beverly","/remembering-abla-homes-deverra-beverly/"],
        ["Oakwood Shores Update","/oakwood-shores-update/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news-2/"],
        ["A Protest Success Story","/a-protest-success-story/"],
        ["Tenants Protest CHA’s Plans for Lathrop","/tenants-protest-chas-plans-for-lathrop/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news/"],
        ["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["Black Pioneers Honored","/black-pioneers-honored/"],
        ["CHA Opens Wait List in Lincoln Square","/cha-opens-wait-list-in-lincoln-square/"],
        ["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer/"],
        ["A Message from the Resident President","/a-message-from-the-resident-president/"],
        ["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants/"],
        ["CHA's New Plan?","/chas-new-plan/"],
        ["Altgeld Tenants: Police, Cameras Not Improving Security","/altgeld-tenants-police-cameras-not-improving-security/"],
        ["Blackhawks Host CHA Kids","/blackhawks-host-cha-kids/"],
        ["Parents Protest CPS Turn-Arounds","/parents-protest-cps-turn-arounds/"],
        ["Tenants' Lawyer: CHA Drug Testing Policy Will End Up in Court","/tenants-lawyer-cha-drug-testing-policy-will-end-up-in-court/"],
        ["CHA Reopens Landmark Senior Building","/cha-reopens-landmark-senior-building/"],
        ["Some Lathrop Kids Get a Bus, But Not All","/some-lathrop-kids-get-a-bus-but-not-all/"],
        ["Is CHA Holding Vacant Apartments?","/is-cha-holding-vacant-apartments/"],
        ["Ex-Offenders Strive For Better","/ex-offenders-strive-for-better/"],
        ["Special Investigation: CHA Still Wants Kids’ Report Cards","/special-investigation-cha-still-wants-kids%e2%80%99-report-cards/"],
        ["Ida B. Wells Revisited","/ida-b-wells-revisited-2/"],
        ["Charlotte Housing Authority Chief takes CHA Position","/charlotte-housing-authority-chief-takes-cha-position/"],
        ["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha/"],
        ["Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives/"],
        ["CHA Launches Initiative to House Women Ex-Offenders","/cha-launches-initiative-to-house-women-ex-offenders/"],
        ["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom/"],
        ["CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo/"],
        ["CHA Land Remains Vacant for Over a Decade (Commentary)","/cha-land-remains-vacant-for-over-a-decade-commentary/"],
        ["Special Investigation: CHA Wanted Kids’ Report Cards","/special-investigation-cha-wanted-kids%e2%80%99-report-cards/"],
        ["An Afternoon of Good Times","/an-afternoon-of-good-times/"],
        ["Where are CHA’s Residents?","/where-are-cha%e2%80%99s-residents/"],
        ["We The People Media's Coverage of the Chicago Mayor's Race","/we-the-people-medias-coverage-of-the-chicago-mayors-race/"],
        ["Cabrini Rowhouses Update","/cabrini-rowhouses-update/"],
        ["Three Chicago Mayoral Candidates' Take on Public Housing","/1803/"],
        ["Cabrini rowhouses’ fate in jeopardy","/cabrini-rowhouses%e2%80%99-fate-in-jeopardy/"],
        ["A Third Generation’s Take on Relocation from Last Cabrini Building","/a-third-generation%e2%80%99s-take-on-relocation-from-last-cabrini-building/"],
        ["Altgeld Youth Protest Lack of Library","/altgeld-youth-protest-lack-of-library/"],
        ["Altgeld Gardens News","/altgeld-garden-news/"],
        ["Victory at Bridgeport Homes","/victory-at-bridgeport-homes/"],
        ["Debating Affordable Housing","/debating-affordable-housing/"],
        ["The Shocking Truth about CHA","/the-shocking-truth-about-cha/"],
        ["Residents Sue CHA","/residents-sue-cha/"],
        ["Harold Ickes Service Connectors","/harold-ickes-service-connectors/"],
        ["Harold Ickes New School Update","/harold-ickes-new-school-update/"],
        ["Harold Ickes News","/harold-ickes-news-10/"],
        ["A Savory Survey","/a-savory-survey/"],
        ["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing/"],
        ["Razing the Brooks Extension","/razing-the-brooks-extension/"],
        ["Ickes: Back To Square One","/ickes-back-to-square-one/"],
        ["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds/"],
        ["High Cost of Gas","/high-cost-of-gas/"],
        ["Project Based Section-8s Threatened","/project-based-section-8s-threatened/"],
        ["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan/"],
        ["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike/"],
        ["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting/"],
        ["Cold War Echoes","/cold-war-echoes/"],
        ["The Man Who Scared the Hell Out of Me","/the-man-who-scared-the-hell-out-of-me/"],
        ["Marion...Marion Stamps","/marion-marion-stamps/"]],
    "Jesus Chuy Garcia":[[
        "We The People Media in the News","/we-the-people-media-in-the-news-5/"],
        ["We The People Media ED Guest Hosts Chicago Newsroom","/we-the-people-media-ed-guest-hosts-chicago-newsroom/"]],
    "":[[
        "We The People Media on CAN TV Part II","/5820/"],
        ["Update on the Resident Survey","/update-on-the-resident-survey/"],
        ["Follow We The People Media/Residents' Journal on Twitter","/we-the-people-mediaresidents-journal-now-on-twitter/"],
        ["Residents' Journal Editor and Publisher Discussing Youth Online Articles","/residents-journal-editor-and-publisher-discussing-youth-online-articles/"],
        ["We The People Media in the News/Holiday Appeal","/we-the-people-media-in-the-newsholiday-appeal/"],
        ["Editor’s Note","/editor%e2%80%99s-note/"],
        ["New Stories from our Youth Reporters","/new-stories-from-our-youth-reporters/"],
        ["An Important Message from the Publisher","/an-important-message-from-the-publisher/"],
        ["Community Steps Up for Victim’s Family","/community-steps-up-for-victim%e2%80%99s-family/"],
        ["Leaving High School for the Real World","/leaving-high-school-for-the-real-world/"],
        ["On-Line Dangers","/on-line-dangers/"],
        ["Thoughts of Suicide","/thoughts-of-suicide/"],
        ["Senioritis","/senioritis/"],
        ["New Issue of Residents' Journal Now On Line","/new-issue-of-residents-journal-now-on-line/"],
        ["Youth hearing on schools, jobs and justice","/youth-hearing-on-schools-jobs-and-justice/"],
        ["Town hall meeting on the human right to mental health services","/town-hall-meeting-on-the-human-right-to-mental-health-services/"],
        ["CHA Holds Public Hearing: Only Two Residents Show","/cha-holds-public-hearing-only-two-residents-show/"],
        ["New Website Launched on Chicago Government Accountability","/new-website-launched-on-chicago-government-accountability/"],
        ["Chicago Defender Charities Feed the Homeless","/we-the-people-medias-new-video-site-2/"],
        ["Illinois Gov. Rod Blagojevich and Top Aide Arrested on Federal Corruption Charges","/illinois-gov-rod-blagojevich-and-top-aide-arrested-on-federal-corruption-charges/"],
        ["A Statement from President-elect Barack Obama on Current Job Losses","/a-statement-from-president-elect-barack-obama-on-current-job-losses/"],
        ["President-Elect Obama Picks Former Democratic Challenger as Secretary of Commerce","/president-elect-obama-picks-former-democratic-challenger-as-secretary-of-commerce/"]],
    "Chicago":[[
        "We The People Media ED Guest Hosts Chicago Newsroom","/we-the-people-media-ed-guest-hosts-chicago-newsroom/"],
        ["The New Resident Leadership","/the-new-resident-leadership/"],
        ["CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls/"],
        ["Another CHA Chief Bows Out","/another-cha-chief-bows-out/"],
        ["Tenants Protest CHA’s Plans for Lathrop","/tenants-protest-chas-plans-for-lathrop/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news/"],
        ["CHA Opens Public Housing Wait List for South Side Neighborhoods","/cha-opens-public-housing-wait-list-for-specific-areas/"],
        ["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1/"],
        ["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha/"],
        ["Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives/"],
        ["Historical Gallery: Barack Obama","/historical-gallery-barack-obama/"],
        ["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery/"],
        ["Residents' Journal Publisher talking about an Environmental Project for Youth","/residents-journal-publisher-talking-about-an-environmental-project-for-youth/"],
        ["Tenants Protest CHA Plans to Drug Test Them","/2644/"],
        ["The Garden","/the-garden/"],
        ["The Transformation of Jason Moy","/the-transformation-of-jason-moy/"],
        ["Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street/"],
        ["Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks/"],
        ["Ickes Homes News: The Final Curtain?","/ickes-homes-news-the-final-curtain/"],
        ["Relocation Rights Duel","/relocation-rights-duel/"],
        ["Tenants Protest New CHA School Reporting Policy","/tenants-protest-new-cha-school-reporting-policy/"],
        ["A new season of RJ TV","/a-new-season-of-rj-tv/"],
        ["A Special Tribute","/a-special-tribute/"],
        ["Whose School Is It?","/whose-school-is-it/"],
        ["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice/"],
        ["House of Screams","/house-of-screams/"],
        ["Publisher's Box","/publishers-box/"],
        ["Black History Through Performance","/black-history-through-performance/"],
        ["Stop the Violence","/stop-the-violence-2/"],
        ["CHA Development News","/cha-development-news/"],
        ["Pilsen Guards Against Gentrifyers","/pilsen-guards-against-gentrifyers/"],
        ["CHA Contracting Woes","/cha-contracting-woes/"],
        ["State Passes Support for Renters","/state-passes-support-for-renters/"],
        ["Troubling Development Update","/troubling-development-update/"],
        ["Deadly Moves II","/deadly-moves-ii/"],
        ["Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle/"],
        ["Victory at Bridgeport Homes","/victory-at-bridgeport-homes/"],
        ["Publisher's Box","/publishers-box-2/"],
        ["Harold Ickes News","/harold-ickes-news-2/"],
        ["Black Metropolis National Heritage Area Project","/black-metropolis-national-heritage-area-project/"],
        ["Senior Services 2005 and Beyond","/senior-services-2005-and-beyond/"],
        ["Tales of Lawndale Housing","/tales-of-lawndale-housing/"],
        ["Utility Problems Persist for Residents","/utility-problems-persist-for-residents/"],
        ["A Questionable Connection","/a-questionable-connection/"],
        ["Stop The Violence","/stop-the-violence-3/"],
        ["Harold Ickes News","/harold-ickes-news-3/"],
        ["Update: Zoning and Affordable Housing","/update-zoning-and-affordable-housing/"],
        ["Residents: What People Want","/residents-what-people-want/"],
        ["Presidential Election Notebook","/presidential-election-notebook/"],
        ["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections/"],
        ["A Taylor-Made Election","/a-taylor-made-election/"],
        ["More CHA Residents Voting Woes","/more-cha-residents-voting-woes/"],
        ["Wipe Out","/wipe-out/"],
        ["Cabrini-Green Election","/cabrini-green-election/"],
        ["Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes/"],
        ["Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes/"],
        ["Positive People","/positive-people/"],
        ["Senior Rehab Update","/senior-rehab-update/"],
        ["Deadly Moves - an update","/deadly-moves-an-update/"],
        ["Closure Razes Resident Hopes","/closure-razes-resident-hopes/"],
        ["The Compassionate Blues","/the-compassionate-blues/"],
        ["Chaos at the Bank of Lawndale","/chaos-at-the-bank-of-lawndale/"],
        ["Positive People","/positive-people-2/"],
        ["CPS Violence","/cps-violence/"],
        ["Stop The Violence","/stop-the-violence-4/"],
        ["Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park/"],
        ["Archer Courts: A Model Rehab","/archer-courts-a-model-rehab/"],
        ["Harold Ickes News","/harold-ickes-news-4/"],
        ["You Have Been Served","/you-have-been-served/"],
        ["Bronzeville Community Alert","/bronzeville-community-alert/"],
        ["Deadly Moves: In Too Deep","/deadly-moves-in-too-deep/"],
        ["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force/"],
        ["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves/"],
        ["Stop The Violence","/stop-the-violence-5/"],
        ["Crystal Clear Views","/crystal-clear-views-7/"],
        ["Positive People","/positive-people-3/"],
        ["Harold Ickes News","/harold-ickes-news-5/"],
        ["A Championship Victory","/a-championship-victory/"],
        ["Oops, They Did It Again","/oops-they-did-it-again/"],
        ["Stop The Violence","/stop-the-violence-6/"],
        ["Harold Ickes News","/harold-ickes-news-6/"],
        ["Positive People","/positive-people-4/"],
        ["The Price of a Political Job","/the-price-of-a-political-job/"],
        ["Altgeld Gardens Lawsuit Settlement","/altgeld-gardens-lawsuit-settlement/"],
        ["Getting to Know Rockwell","/getting-to-know-rockwell/"],
        ["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing/"],
        ["Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha/"],
        ["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects/"],
        ["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas/"],
        ["Dear Resident","/dear-resident/"],
        ["Harold Ickes News","/harold-ickes-news-7/"],
        ["Debating Affordable Housing","/debating-affordable-housing/"],
        ["Lathrop Homes News","/lathrop-homes-news/"],
        ["Thomas Sullivan Report Update","/thomas-sullivan-report-update/"],
        ["The Shocking Truth about CHA","/the-shocking-truth-about-cha/"],
        ["Homeless Not Hopeless","/homeless-not-hopeless/"],
        ["Housing on State, City Agendas","/housing-on-state-city-agendas/"],
        ["Stop The Violence","/stop-the-violence-8/"],
        ["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations/"],
        ["Myths and Urban Legends","/myths-and-urban-legends/"],
        ["Seniors Graduate Police Class","/seniors-graduate-police-class/"],
        ["National Housing Crisis","/national-housing-crisis/"],
        ["Harold Ickes News","/harold-ickes-news-8/"],
        ["Choosing Between Food and Medicine","/choosing-between-food-and-medicine/"],
        ["Stop The Violence","/stop-the-violence-11/"],
        ["South Suburban Living","/south-suburban-living/"],
        ["Electrically Charged","/electrically-charged/"],
        ["Last Day in 4525","/last-day-in-4525/"],
        ["It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini/"],
        ["Harold Ickes News","/harold-ickes-news-9/"],
        ["Relocation Rights Contract","/relocation-rights-contract/"],
        ["Harold Ickes New School Update","/harold-ickes-new-school-update/"],
        ["Maintenance Defects at Ogden Courts","/maintenance-defects-at-ogden-courts/"],
        ["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents/"],
        ["Shocking Electric Bills Update","/shocking-electric-bills-update/"],
        ["Lathrop News","/lathrop-news/"],
        ["Harold Ickes News","/harold-ickes-news-10/"],
        ["Lathrop Homes Private Management","/lathrop-homes-private-management/"],
        ["Productive Men of the CHA","/productive-men-of-the-cha/"],
        ["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history/"],
        ["Ickes' Homes New Managers","/ickes-homes-new-managers/"],
        ["A 'One Strike' Battle Planned","/a-one-strike-battle-planned/"],
        ["Drug War Diagnosis","/drug-war-diagnosis/"],
        ["Residents Look to the Hills","/residents-look-to-the-hills/"],
        ["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8/"],
        ["New Vincennes Plaza","/new-vincennes-plaza/"],
        ["Squatters in CHA","/squatters-in-cha/"],
        ["ABLA News","/abla-news-2/"],
        ["Don't Rock The Boat","/dont-rock-the-boat/"],
        ["CHA Family Service Connectors","/cha-family-service-connectors/"],
        ["Harold Ickes Homes News","/harold-ickes-homes-news/"],
        ["SPECIAL FEATURE: City Gets CHA Funds Update","/special-feature-city-gets-cha-funds-update/"],
        ["Sinai Health Services","/sinai-health-services/"],
        ["Stop The Violence","/stop-the-violence-13/"],
        ["The State Of Section 8","/the-state-of-section-8/"],
        ["Ickes: Back To Square One","/ickes-back-to-square-one/"],
        ["Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place/"],
        ["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds/"],
        ["Second Chance Legislation","/second-chance-legislation/"],
        ["Stop The Violence","/stop-the-violence-14/"],
        ["Youths Rally For Summer Jobs","/youths-rally-for-summer-jobs/"],
        ["High Cost of Gas","/high-cost-of-gas/"],
        ["Project Based Section-8s Threatened","/project-based-section-8s-threatened/"],
        ["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management/"],
        ["The New Teachers Academy","/the-new-teachers-academy/"],
        ["Transforming CHA: Chewing Up Tobacco Road","/transforming-cha-chewing-up-tobacco-road/"],
        ["Transforming CHA: Senior Only Buildings","/transforming-cha-senior-only-buildings/"],
        ["Transforming CHA: Making Connections","/transforming-cha-making-connections/"],
        ["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan/"],
        ["Rappin' Tate The Great","/rappin-tate-the-great/"],
        ["Stop The Violence","/stop-the-violence-15/"],
        ["Transforming CHA: Flannery Homes Residents Keep Waiting","/transforming-cha-flannery-homes-residents-keep-waiting/"],
        ["Del Prado Residents Face Uncertainty","/del-prado-residents-face-uncertainty/"],
        ["Transforming CHA: How To Save On Rent","/transforming-cha-how-to-save-on-rent/"],
        ["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike/"],
        ["Transforming CHA: New Lights on Dark Passage","/transforming-cha-new-lights-on-dark-passage/"],
        ["Transforming CHA: Washington Park Wants Answers","/transforming-cha-washington-park-wants-answers/"],
        ["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting/"],
        ["Cold War Echoes","/cold-war-echoes/"],
        ["Ida B. Wells Reunion","/ida-b-wells-reunion/"],
        ["Hi Ho Dobbin Away","/hi-ho-dobbin-away/"],
        ["HUD Head: CHA Off Troubled List","/hud-head-cha-off-troubled-list/"],
        ["All Things Old and New at Harold Ickes Homes","/all-things-old-and-new/"],
        ["Dear Resident","/dear-resident-12/"],
        ["Lathrop Homes News","/lathrop-homes-news-2/"],
        ["Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update/"],
        ["Cabrini Cliffhanger","/cabrini-cliffhanger/"],
        ["New Facility for Scattered Sites","/new-facility-for-scattered-sites/"],
        ["Stop The Violence","/stop-the-violence-18/"],
        ["Access Report","/access-report-3/"],
        ["Altgeld Gardens Report","/altgeld-gardens-report/"],
        ["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man/"],
        ["Dear Resident","/dear-resident-9/"],
        ["Stop the Violence","/stop-the-violence-16/"],
        ["Altgeld Gardens News","/altgeld-gardens-news/"],
        ["CHA Announces First Clean Audit","/cha-announces-first-clean-audit/"],
        ["Flannery Homes Update","/flannery-homes-update/"],
        ["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation/"],
        ["REDI: A New Beginning?","/redi-a-new-beginning/"],
        ["ABLA Relocation Report","/abla-relocation-report/"],
        ["CHA to Buy Back Laundry Tokens","/cha-to-buy-back-laundry-tokens/"],
        ["Inspector General Nabs Employees","/inspector-general-nabs-employees/"],
        ["Access Report","/access-report/"],
        ["The Next CHA Chairman?","/the-next-cha-chairman/"],
        ["Farewell, Mr. Chairman","/farewell-mr-chairman/"],
        ["Altgeld Gardens News","/altgeld-gardens-news-2/"],
        ["Dear Resident","/dear-resident-11/"],
        ["Section 8 Update","/section-8-update/"],
        ["Chatting with Marie Billingsley","/chatting-with-marie-billingsley/"],
        ["Mothers Tackle Child Care Woes","/mothers-tackle-child-care-woes/"],
        ["Flannery Homes News","/flannery-homes-news/"],
        ["CHA and Latinos: Interview with Joe Shuldiner","/cha-and-latinos-interview-with-joe-shuldiner/"],
        ["Stop the Violence II","/stop-the-violence-ii/"],
        ["Schools March for Victims","/schools-march-for-victims/"],
        ["The Life of Artensa Randolph","/the-life-of-artensa-randolph/"],
        ["When Will It End?","/when-will-it-end/"],
        ["Inner-City Truths: A Book Review","/inner-city-truths-a-book-review/"],
        ["Access Report","/access-report-2/"],
        ["A Decree But to What Degree?","/a-decree-but-to-what-degree/"],
        ["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center/"],
        ["Residents Fight Vacate Orders","/residents-fight-vacate-orders/"],
        ["School Reform: Which Tax?","/school-reform-which-tax/"],
        ["Dear Resident","/dear-resident-10/"],
        ["Flannery Homes Update","/flannery-homes-update-2/"],
        ["Cabrini-Green Update","/cabrini-green-update/"],
        ["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph/"],
        ["Wells on the Rise","/wells-on-the-rise/"],
        ["Stop the Violence","/stop-the-violence-17/"],
        ["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments/"],
        ["Horner Annex Reborn","/horner-annex-reborn/"],
        ["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road/"],
        ["Replacement Housing or Replacing People","/replacement-housing-or-replacing-people/"],
        ["Safe Summer 97","/safe-summer-97/"],
        ["The Magnificent Maya Angelou","/the-magnificent-maya-angelou/"],
        ["Focus On Section 8","/focus-on-section-8/"],
        ["Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing/"],
        ["Dear Resident","/dear-resident-8/"],
        ["Last Harvest","/last-harvest/"],
        ["Seniors form new organization","/seniors-form-new-organization/"],
        ["A Short History of Ida B. Wells","/a-short-history-of-ida-b-wells/"],
        ["Your Neighborhood Policemen","/your-neighborhood-policemen/"],
        ["Washington Park: The Dying Hope","/washington-park-the-dying-hope/"],
        ["A Long Ride Home","/a-long-ride-home/"],
        ["Marion...Marion Stamps","/marion-marion-stamps/"],
        ["A History of Cabrini-Green","/a-history-of-cabrini-green/"],
        ["What's Happening in ABLA?","/whats-happening-in-abla/"],
        ["LeClaire Courts","/leclaire-courts/"],
        ["CHA Home Ownership: Wentworth Gardens","/cha-home-ownership-wentworth-gardens/"],
        ["Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington/"],
        ["Vote '96: Conventional Colors","/vote-96-conventional-colors-2/"],
        ["Vote '96: Conventional Colors","/vote-96-conventional-colors/"]],
    "Chicago politics":[[
        "We The People Media ED Guest Hosts Chicago Newsroom","/we-the-people-media-ed-guest-hosts-chicago-newsroom/"],
        ["We The People Media ED on Chicago Newsroom","/we-the-people-media-ed-on-chicago-newsroom/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news/"],
        ["New Mayor Emanuel’s Road Map for Chicago’s Future","/new-mayor-emanuel%e2%80%99s-road-map-for-chicago%e2%80%99s-future/"]],
    "Blue Line":[[
        "CTA Changes Keep Riders On Their Toes","/cta-changes-keep-riders-on-their-toes/"]],
    "Chicago Transit Authority":[[
        "CTA Changes Keep Riders On Their Toes","/cta-changes-keep-riders-on-their-toes/"],
        ["$1 Billion for CTA","/1-billion-for-cta/"]],
    "City Colleges":[[
        "CTA Changes Keep Riders On Their Toes","/cta-changes-keep-riders-on-their-toes/"]],
    "Red Line":[[
        "CTA Changes Keep Riders On Their Toes","/cta-changes-keep-riders-on-their-toes/"],
        ["Closing the CTA Red Line","/closing-the-cta-red-line/"]],
    "Ventra":[[
        "CTA Changes Keep Riders On Their Toes","/cta-changes-keep-riders-on-their-toes/"]],
    "CAN TV":[[
        "We The People Media In The News","/we-the-people-media-in-the-news-4/"],
        ["Should Liquor Stores Be Banned in Bronzeville?","/should-liquor-stores-be-banned-in-bronzeville/"],
        ["A new season of RJ TV","/a-new-season-of-rj-tv/"],
        ["CAN TV Devotes Entire Day Programming to “Stop the Violence” in the City of Chicago","/can-tv-devotes-entire-day-programming-to-stop-the-violence-in-the-city-of-chicago/"],
        ["Publisher's Box","/publishers-box-2/"]],
    "Hillary Clinton":[[
        "We The People Media In The News","/we-the-people-media-in-the-news-4/"],
        ["The Man Who Scared the Hell Out of Me","/the-man-who-scared-the-hell-out-of-me/"]],
    "Rahm Emanuel":[[
        "We The People Media In The News","/we-the-people-media-in-the-news-4/"],
        ["Inside the Teachers Strike","/inside-the-teachers-strike/"],
        ["CHA's New Plan?","/chas-new-plan/"],
        ["$1 Billion for CTA","/1-billion-for-cta/"],
        ["Mayor Emanuel Booed at Budget Town Hall","/mayor-emanuel-booed-at-budget-townhall-meeting/"],
        ["Commissioner Fails to Show at Mental Health Town Hall Meeting","/commissioner-fails-to-show-at-mental-health-town-hall/"],
        ["Mayor Continues Search for New CHA Head","/mayor-continues-search-for-new-cha-head/"],
        ["We The People Media's Coverage of the Chicago Mayor's Race","/we-the-people-medias-coverage-of-the-chicago-mayors-race/"],
        ["Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks/"],
        ["Emanuel Removed From Ballot, Candidates’ Education Plans","/emanuel-removed-from-ballot-candidates%e2%80%99-education-plans/"],
        ["Emanuel’s Anti-Crime Plan for Chicago if elected Mayor","/emanuel%e2%80%99s-anti-crime-plan-for-chicago-if-elected-mayor/"]],
    "crime":[[
        "A Truce in the War on Drugs? Part II.","/a-truce-in-the-war-on-drugs-part-ii/"],
        ["A Truce in the War on Drugs? Part I.","/5708/"],
        ["What Can Drive a Person to Murder?","/what-can-drive-a-person-to-murder/"],
        ["CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news-2/"],
        ["Meet the Real Robeson High School","/meet-the-real-robeson-high-school/"],
        ["We The People Media ED on Chicago Newsroom","/we-the-people-media-ed-on-chicago-newsroom/"],
        ["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["Winners from the Resident Survey!","/winners-from-the-resident-survey/"],
        ["Stray Dogs in Englewood","/stray-dogs-in-englewood/"],
        ["New Report: Homeless Being Criminalized","/new-report-homeless-being-criminalizing/"],
        ["Local Pastor Camps out on Motel Roof to Highlight Area Violence","/local-pastor-camps-out-on-motel-roof-to-highlight-area-violence/"],
        ["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha/"],
        ["Mayor Emanuel Booed at Budget Town Hall","/mayor-emanuel-booed-at-budget-townhall-meeting/"],
        ["CHA Launches Initiative to House Women Ex-Offenders","/cha-launches-initiative-to-house-women-ex-offenders/"],
        ["Youth Activists: Juvenile Inmates Treated Like Animals.","/youth-activists-juvenile-inmates-treated-like-animals/"],
        ["Residents' Journal Editor-in-chief talking about Summer Youth Employment","/residents-journal-editor-in-chief-talking-about-summer-youth-employment/"],
        ["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom/"],
        ["Where are CHA’s Residents?","/where-are-cha%e2%80%99s-residents/"],
        ["On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith/"],
        ["Cabrini-Green Residents Say Goodbye","/cabrini-green-residents-say-goodbye/"],
        ["Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street/"],
        ["Torture Victim Reflects on Burge Sentence","/torture-victim-reflects-on-burge-sentence/"],
        ["Emanuel’s Anti-Crime Plan for Chicago if elected Mayor","/emanuel%e2%80%99s-anti-crime-plan-for-chicago-if-elected-mayor/"],
        ["Residents' Journal Reporters Share Results of Youth Surveys","/residents-journal-reporters-share-results-of-youth-surveys/"],
        ["RJ Reporter talking about Youth Media Project","/rj-reporter-talking-about-youth-media-project/"],
        ["Deadly Moves II","/deadly-moves-ii/"],
        ["Drug War Diagnosis","/drug-war-diagnosis/"],
        ["Stop The Violence","/stop-the-violence-14/"],
        ["Stop The Violence","/stop-the-violence-15/"],
        ["Stop the Violence","/stop-the-violence-16/"],
        ["When Will It End?","/when-will-it-end/"],
        ["Stop the Violence","/stop-the-violence-17/"]],
    "Gary Indiana":[[
        "A Truce in the War on Drugs? Part II.","/a-truce-in-the-war-on-drugs-part-ii/"],
        ["There's H.O.P.E. for Gary Residents","/theres-h-o-p-e-for-gary-residents/"]],
    "U.S. Attorney General Eric Holder":[[
        "A Truce in the War on Drugs? Part II.","/a-truce-in-the-war-on-drugs-part-ii/"]],
    "war on drugs":[[
        "A Truce in the War on Drugs? Part II.","/a-truce-in-the-war-on-drugs-part-ii/"],
        ["A Truce in the War on Drugs? Part I.","/5708/"],
        ["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force/"],
        ["Deadly Moves: Troubling Development","/deadly-moves-troubling-development/"],
        ["Drug War Diagnosis","/drug-war-diagnosis/"]],
    "federal courts":[[
        "A Truce in the War on Drugs? Part I.","/5708/"]],
    "U.S. Sen. Dick Durbin":[[
        "A Truce in the War on Drugs? Part I.","/5708/"]],
    "wrongful imprisonment":[[
        "A Truce in the War on Drugs? Part I.","/5708/"],
        ["Wrongfully Convicted Man Files New Petition for Justice","/wrongfully-convicted-man-files-new-petition-for-justice/"]],
    "Paul Robeson High School":[[
        "Am I Prepared for College?","/am-i-prepared-for-college/"],
        ["Louder Than a Bomb","/louder-than-a-bomb/"],
        ["Chicago Gangs and Violence: Beyond Downtown","/chicago-gangs-and-violence-beyond-downtown/"],
        ["Teenage Love: Is It Real?","/teenage-love-is-it-real/"],
        ["What's So Great about Football?","/whats-so-great-about-football/"],
        ["It's Time to Focus on Bullying","/its-time-to-focus-on-bullying/"],
        ["Meet the Real Robeson High School","/meet-the-real-robeson-high-school/"],
        ["Being emo","/being-emo/"]],
    "Endless Words":[[
        "Louder Than a Bomb","/louder-than-a-bomb/"]],
    "Louder than a Bomb":[[
        "Louder Than a Bomb","/louder-than-a-bomb/"]],
    "athletes":[[
        "Do Athletes Have Special Privileges?","/do-athletes-have-special-privileges/"]],
    "school sports":[[
        "Do Athletes Have Special Privileges?","/do-athletes-have-special-privileges/"]],
    "Field Musuem":[[
        "The Holocaust","/5671/"]],
    "Dr. Martin Luther King":[[
        "One Of The Greatest Men In History","/one-of-the-greatest-men-in-history/"],
        ["Black History Section: A Celebrated Life","/black-history-section-a-celebrated-life/"]],
    "I have a dream":[[
        "One Of The Greatest Men In History","/one-of-the-greatest-men-in-history/"]],
    "sports":[[
        "Do What You Need To So You Can Do What You Want To","/do-what-you-need-to-so-you-can-do-what-you-want-to/"]],
    "McCormick Foundation":[[
        "The Holocaust and Propaganda","/the-holocaust-and-propaganda/"],
        ["Interview with an International Columnist","/5623/"],
        ["ECO Youth Training Session","/eco-youth/"],
        ["Success through Self Determination","/success-through-self-determination/"],
        ["Racism in America","/racism-in-america/"],
        ["Chicago Gangs and Violence: Beyond Downtown","/chicago-gangs-and-violence-beyond-downtown/"],
        ["Teenage Love: Is It Real?","/teenage-love-is-it-real/"],
        ["Eco Youth Reporters Visit Starved Rock","/eco-youth-reporters-visit-starved-rock/"],
        ["My First Kayaking Trip","/my-first-kayaking-trip/"],
        ["Asian Carp is a Man-Made Issue","/asian-carp-is-a-man-made-issue/"],
        ["Chasing the “Blue Whale of Freshwater”","/chasing-the-blue-whale-of-freshwater/"],
        ["Frack Attack in Illinois","/frack-attack-in-illinois/"],
        ["Pilsen Gets Environmental Justice","/pilsen-gets-environmental-justice/"],
        ["Preserving History and Ecology","/preserving-history-and-ecology/"],
        ["Chicagoans Will Fish, Contamination or Not","/chicagoans-will-fish-contamination-or-not/"],
        ["Making a college visit count","/making-a-college-visit-count/"],
        ["Residents' Journal Reporters talking about Current Youth Articles","/residents-journal-staff-member-talking-to-an-urban-youth-international-journalism-program-student-about-her-news-reports-this-summer/"],
        ["A Toxic Tour of Little Village","/little-village-story/"],
        ["A New Start for the Indiana Dunes","/a-new-start-for-the-indiana-dunes/"],
        ["Shedd Aquarium Showcases Invasive Species","/shedd-aquarium-showcases-invasive-species/"],
        ["The Fish of Lake Michigan","/the-fish-of-lake-michigan/"],
        ["Little Village Toxic Tour","/little-village-toxic-tour/"],
        ["The Health Effects of Pollution in Pilsen","/the-health-effects-of-pollution-in-pilsen/"],
        ["Lead and Coal Plants in Pilsen","/lead-and-coal-plants-in-pilsen/"],
        ["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery/"],
        ["Residents' Journal Publisher talking about an Environmental Project for Youth","/residents-journal-publisher-talking-about-an-environmental-project-for-youth/"]],
    "Propaganda":[[
        "The Holocaust and Propaganda","/the-holocaust-and-propaganda/"]],
    "environmental issues":[[
        "ECO Youth Training Session","/eco-youth/"],
        ["Eco Youth Reporters Visit Starved Rock","/eco-youth-reporters-visit-starved-rock/"],
        ["My First Kayaking Trip","/my-first-kayaking-trip/"],
        ["A River Adventure","/a-river-adventure/"],
        ["Asian Carp is a Man-Made Issue","/asian-carp-is-a-man-made-issue/"],
        ["Chasing the “Blue Whale of Freshwater”","/chasing-the-blue-whale-of-freshwater/"],
        ["Frack Attack in Illinois","/frack-attack-in-illinois/"],
        ["The Altgeld Gardens Farmers Market: A Personal Perspective","/the-altgeld-gardens-farmers-market-a-personal-perspective/"],
        ["Pilsen Gets Environmental Justice","/pilsen-gets-environmental-justice/"],
        ["Chicagoans Will Fish, Contamination or Not","/chicagoans-will-fish-contamination-or-not/"],
        ["A Toxic Tour of Little Village","/little-village-story/"],
        ["A New Start for the Indiana Dunes","/a-new-start-for-the-indiana-dunes/"],
        ["Shedd Aquarium Showcases Invasive Species","/shedd-aquarium-showcases-invasive-species/"],
        ["The Fish of Lake Michigan","/the-fish-of-lake-michigan/"],
        ["Little Village Toxic Tour","/little-village-toxic-tour/"],
        ["The Health Effects of Pollution in Pilsen","/the-health-effects-of-pollution-in-pilsen/"],
        ["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery/"],
        ["Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell/"],
        ["The Garden","/the-garden/"],
        ["Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks/"],
        ["Altgeld Gardens Lawsuit Settlement","/altgeld-gardens-lawsuit-settlement/"],
        ["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road/"]],
    "McCormick Environmental Journalism Program":[[
        "ECO Youth Training Session","/eco-youth/"],
        ["Eco Youth Reporters Visit Starved Rock","/eco-youth-reporters-visit-starved-rock/"],
        ["My First Kayaking Trip","/my-first-kayaking-trip/"],
        ["A River Adventure","/a-river-adventure/"],
        ["The Invasion of the Great Lakes","/the-invasion-of-the-great-lakes/"],
        ["Asian Carp is a Man-Made Issue","/asian-carp-is-a-man-made-issue/"],
        ["Pilsen Gets Environmental Justice","/pilsen-gets-environmental-justice/"],
        ["Preserving History and Ecology","/preserving-history-and-ecology/"],
        ["Chicagoans Will Fish, Contamination or Not","/chicagoans-will-fish-contamination-or-not/"],
        ["Making a college visit count","/making-a-college-visit-count/"],
        ["A Weekend of Firsts","/a-weekend-of-firsts/"],
        ["Residents' Journal Reporters talking about Current Youth Articles","/residents-journal-staff-member-talking-to-an-urban-youth-international-journalism-program-student-about-her-news-reports-this-summer/"],
        ["A Toxic Tour of Little Village","/little-village-story/"],
        ["A New Start for the Indiana Dunes","/a-new-start-for-the-indiana-dunes/"],
        ["Shedd Aquarium Showcases Invasive Species","/shedd-aquarium-showcases-invasive-species/"],
        ["The Fish of Lake Michigan","/the-fish-of-lake-michigan/"],
        ["Little Village Toxic Tour","/little-village-toxic-tour/"],
        ["The Health Effects of Pollution in Pilsen","/the-health-effects-of-pollution-in-pilsen/"],
        ["Lead and Coal Plants in Pilsen","/lead-and-coal-plants-in-pilsen/"],
        ["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery/"],
        ["Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell/"]],
    "DCFS":[[
        "Success through Self Determination","/success-through-self-determination/"],
        ["Residents' Journal Publisher talking about Deficiencies in DCFS System","/residents-journal-publisher-talking-about-deficiencies-in-dcfs-system/"],
        ["Grandparents Raising Grandchildren","/grandparents-raising-grandchildren/"],
        ["Drug Addicts: A Childhood Life with a Mother on Drugs Part Two","/drug-addicts-a-childhood-life-with-a-mother-on-drugs-part-two/"]],
    "Englewood":[[
        "Success through Self Determination","/success-through-self-determination/"],
        ["What's So Great about Football?","/whats-so-great-about-football/"],
        ["Hip Hop Star on the Rise","/hip-hop-star-on-the-rise/"],
        ["The Many Talents of Tony Erwin","/the-many-talents-of-tony-erwin/"],
        ["Closing the CTA Red Line","/closing-the-cta-red-line/"],
        ["Healthy Ways to Fight Lead Poisoning","/healthy-ways-to-fight-lead-poisoning/"],
        ["Local Pastor Camps out on Motel Roof to Highlight Area Violence","/local-pastor-camps-out-on-motel-roof-to-highlight-area-violence/"],
        ["Mayor Emanuel Booed at Budget Town Hall","/mayor-emanuel-booed-at-budget-townhall-meeting/"],
        ["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2/"]],
    "Anne Frank":[[
        "Racism in America","/racism-in-america/"]],
    "racism":[[
        "Racism in America","/racism-in-america/"]],
    "violence":[[
        "Chicago Gangs and Violence: Beyond Downtown","/chicago-gangs-and-violence-beyond-downtown/"],
        ["The Many Talents of Tony Erwin","/the-many-talents-of-tony-erwin/"],
        ["Stray Dogs in Englewood","/stray-dogs-in-englewood/"],
        ["Mayor Emanuel Booed at Budget Town Hall","/mayor-emanuel-booed-at-budget-townhall-meeting/"],
        ["CHA Launches Initiative to House Women Ex-Offenders","/cha-launches-initiative-to-house-women-ex-offenders/"],
        ["Commissioner Fails to Show at Mental Health Town Hall Meeting","/commissioner-fails-to-show-at-mental-health-town-hall/"],
        ["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom/"],
        ["The Bow Campaign","/the-bow-campaign/"],
        ["Where are CHA’s Residents?","/where-are-cha%e2%80%99s-residents/"],
        ["Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street/"],
        ["Torture Victim Reflects on Burge Sentence","/torture-victim-reflects-on-burge-sentence/"],
        ["Nuf Said: Will Violence Finally Stop?","/nuf-said-will-violence-finally-stop/"],
        ["Marching in Washington","/marching-in-washington/"],
        ["Deadly Moves II","/deadly-moves-ii/"],
        ["Stop The Violence","/stop-the-violence-3/"],
        ["Deadly Moves - an update","/deadly-moves-an-update/"],
        ["CPS Violence","/cps-violence/"],
        ["Stop The Violence","/stop-the-violence-4/"],
        ["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2/"],
        ["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves/"],
        ["Stop The Violence","/stop-the-violence-5/"],
        ["Stop The Violence","/stop-the-violence-6/"],
        ["Harold Ickes News","/harold-ickes-news-6/"],
        ["Harold Ickes News","/harold-ickes-news-7/"],
        ["Stop The Violence","/stop-the-violence-8/"],
        ["Stop The Violence","/stop-the-violence-11/"],
        ["Youth Violence Prevention","/youth-violence-prevention/"],
        ["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history/"],
        ["Drug War Diagnosis","/drug-war-diagnosis/"],
        ["Stop the Violence","/stop-the-violence-16/"],
        ["Stop the Violence II","/stop-the-violence-ii/"],
        ["Schools March for Victims","/schools-march-for-victims/"],
        ["Stop the Violence","/stop-the-violence-17/"]],
    "stress":[[
        "What Can Drive a Person to Murder?","/what-can-drive-a-person-to-murder/"]],
    "Starved Rock State Park":[[
        "Eco Youth Reporters Visit Starved Rock","/eco-youth-reporters-visit-starved-rock/"]],
    "Altgeld Gardens":[[
        "The New Resident Leadership","/the-new-resident-leadership/"],
        ["A Protest Success Story","/a-protest-success-story/"],
        ["The Altgeld Gardens Farmers Market: A Personal Perspective","/the-altgeld-gardens-farmers-market-a-personal-perspective/"],
        ["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1/"],
        ["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants/"],
        ["Altgeld Tenants: Police, Cameras Not Improving Security","/altgeld-tenants-police-cameras-not-improving-security/"],
        ["Parents Protest CPS Turn-Arounds","/parents-protest-cps-turn-arounds/"],
        ["Ex-Offenders Strive For Better","/ex-offenders-strive-for-better/"],
        ["Altgeld’s New Library","/altgeld%e2%80%99s-new-library/"],
        ["How to Deal with the Next Heat Wave","/how-to-deal-with-the-next-heat-wave/"],
        ["My trip to Paris","/my-trip-to-paris/"],
        ["A Dream Come True","/a-dream-come-true/"],
        ["Do Students Trust Authority?","/do-students-trust-authority/"],
        ["Recycling on the South Side","/recycling-on-the-south-side/"],
        ["What We Need Now","/what-we-need-now/"],
        ["Altgeld Gardens Dentist","/altgeld-garden%e2%80%99s-dentist/"],
        ["Altgeld Gardens News","/altgeld-garden-news/"],
        ["CHA Development News","/cha-development-news/"],
        ["If the Suit Fits, Who Wears It?","/if-the-suit-fits-who-wears-it/"],
        ["Altgeld Gardens Lawsuit Settlement","/altgeld-gardens-lawsuit-settlement/"],
        ["Altgeld Gardens Report","/altgeld-gardens-report/"],
        ["Altgeld Gardens News","/altgeld-gardens-news/"],
        ["Altgeld Gardens News","/altgeld-gardens-news-2/"]],
    "Cabrini-Green":[[
        "The New Resident Leadership","/the-new-resident-leadership/"],
        ["Another CHA Chief Bows Out","/another-cha-chief-bows-out/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news-2/"],
        ["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["Winners from the Resident Survey!","/winners-from-the-resident-survey/"],
        ["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1/"],
        ["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer/"],
        ["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants/"],
        ["Occupiers, Officials Try to Help Homeowners","/occupiers-officials-try-to-help-homeowners/"],
        ["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha/"],
        ["Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives/"],
        ["Mayor Continues Search for New CHA Head","/mayor-continues-search-for-new-cha-head/"],
        ["An Afternoon of Good Times","/an-afternoon-of-good-times/"],
        ["Where are CHA’s Residents?","/where-are-cha%e2%80%99s-residents/"],
        ["Cabrini-Green Residents Say Goodbye","/cabrini-green-residents-say-goodbye/"],
        ["CHA Board Meeting Crashed with Concerns","/cha-board-meeting-crashed-with-concerns/"],
        ["Cabrini Rowhouses Update","/cabrini-rowhouses-update/"],
        ["Cabrini rowhouses’ fate in jeopardy","/cabrini-rowhouses%e2%80%99-fate-in-jeopardy/"],
        ["A Third Generation’s Take on Relocation from Last Cabrini Building","/a-third-generation%e2%80%99s-take-on-relocation-from-last-cabrini-building/"],
        ["Residents Blame CHA for School Closures","/residents-blame-cha-for-school-closures/"],
        ["CHA Goes on the Defensive about Child's Death","/cha-goes-on-the-defensive-about-childs-death/"],
        ["Cabrini-Green Election","/cabrini-green-election/"],
        ["You Have Been Served","/you-have-been-served/"],
        ["Positive People","/positive-people-4/"],
        ["Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha/"],
        ["Chicago's Hottest Elections","/chicagos-hottest-elections/"],
        ["It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini/"],
        ["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history/"],
        ["Dear Resident","/dear-resident-6/"],
        ["Stop The Violence","/stop-the-violence-14/"],
        ["Cabrini Cliffhanger","/cabrini-cliffhanger/"],
        ["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation/"],
        ["Schools March for Victims","/schools-march-for-victims/"],
        ["Cabrini-Green Update","/cabrini-green-update/"],
        ["Dear Resident","/dear-resident-8/"],
        ["A Long Ride Home","/a-long-ride-home/"],
        ["Marion...Marion Stamps","/marion-marion-stamps/"],
        ["A History of Cabrini-Green","/a-history-of-cabrini-green/"]],
    "CHA":[[
        "The New Resident Leadership","/the-new-resident-leadership/"],
        ["CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls/"],
        ["Remembering ABLA Homes' Deverra Beverly","/remembering-abla-homes-deverra-beverly/"],
        ["Another CHA Chief Bows Out","/another-cha-chief-bows-out/"],
        ["Oakwood Shores Update","/oakwood-shores-update/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news-2/"],
        ["A Protest Success Story","/a-protest-success-story/"],
        ["Tenants Protest CHA’s Plans for Lathrop","/tenants-protest-chas-plans-for-lathrop/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news/"],
        ["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["Winners from the Resident Survey!","/winners-from-the-resident-survey/"],
        ["CHA Opens Wait List in Lincoln Square","/cha-opens-wait-list-in-lincoln-square/"],
        ["CHA Opens Public Housing Wait List for South Side Neighborhoods","/cha-opens-public-housing-wait-list-for-specific-areas/"],
        ["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1/"],
        ["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer/"],
        ["A Message from the Resident President","/a-message-from-the-resident-president/"],
        ["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants/"],
        ["CHA's New Plan?","/chas-new-plan/"],
        ["Altgeld Tenants: Police, Cameras Not Improving Security","/altgeld-tenants-police-cameras-not-improving-security/"],
        ["Blackhawks Host CHA Kids","/blackhawks-host-cha-kids/"],
        ["Some Lathrop Kids Get a Bus, But Not All","/some-lathrop-kids-get-a-bus-but-not-all/"],
        ["Is CHA Holding Vacant Apartments?","/is-cha-holding-vacant-apartments/"],
        ["Ex-Offenders Strive For Better","/ex-offenders-strive-for-better/"],
        ["Special Investigation: CHA Still Wants Kids’ Report Cards","/special-investigation-cha-still-wants-kids%e2%80%99-report-cards/"],
        ["Ida B. Wells Revisited","/ida-b-wells-revisited-2/"],
        ["Charlotte Housing Authority Chief takes CHA Position","/charlotte-housing-authority-chief-takes-cha-position/"],
        ["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha/"],
        ["Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives/"],
        ["Residents' Journal Coverage of the Recent Demolition of the Last CHA Ida B. Wells Homes Buildings","/residents-journal-coverage-of-the-recent-demolition-of-the-last-cha-ida-b-wells-homes-buildings/"],
        ["Residents' Journal Reporters talking about Current Youth Articles","/residents-journal-staff-member-talking-to-an-urban-youth-international-journalism-program-student-about-her-news-reports-this-summer/"],
        ["Altgeld Gardens Tries to Stay Cool","/altgeld-gardens-tries-to-stay-cool/"],
        ["How to Deal with the Next Heat Wave","/how-to-deal-with-the-next-heat-wave/"],
        ["CHA Launches Initiative to House Women Ex-Offenders","/cha-launches-initiative-to-house-women-ex-offenders/"],
        ["After The Dust","/after-the-dust/"],
        ["Remembering Ms. Amey","/remembering-ms-amey/"],
        ["Residents' Journal's Coverage of CHA Featured in Rise Magazine","/residents-journals-coverage-of-cha-featured-in-rise-magazine/"],
        ["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom/"],
        ["CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo/"],
        ["My trip to Paris","/my-trip-to-paris/"],
        ["A Dream Come True","/a-dream-come-true/"],
        ["CHA Land Remains Vacant for Over a Decade (Commentary)","/cha-land-remains-vacant-for-over-a-decade-commentary/"],
        ["Special Investigation: CHA Wanted Kids’ Report Cards","/special-investigation-cha-wanted-kids%e2%80%99-report-cards/"],
        ["Tenants Protest CHA Drug Testing Plan","/public-hearing-on-cha-drug-test-proposal/"],
        ["Tenants Protest CHA Plans to Drug Test Them","/2644/"],
        ["Residents' Journal CAN TV Show on the Opening of the Chicago Housing Authority's Family Housing Wait List","/1396/"],
        ["At CHA Mixed-Income Sites, Owners Exempt from Smoke-Free Zones","/at-cha-mixed-income-sites-owners-exempt-from-smoke-free-zones/"],
        ["Ickes Homes News: The Final Curtain?","/ickes-homes-news-the-final-curtain/"],
        ["Relocation Rights Duel","/relocation-rights-duel/"],
        ["Tenants Protest New CHA School Reporting Policy","/tenants-protest-new-cha-school-reporting-policy/"],
        ["Robert Taylor On Line","/robert-taylor-on-line/"],
        ["An Inside Out Experience","/an-inside-out-experience/"],
        ["Ickes Leader Challenges CHA CEO","/ickes-leader-challenges-cha-ceo/"],
        ["CHA Seniors Keep Waiting to Return Home","/cha-seniors-keep-waiting-to-return-home/"],
        ["CHA Goes on the Defensive about Child's Death","/cha-goes-on-the-defensive-about-childs-death/"],
        ["Lathrop Residents Want Vacant Units Occupied","/lathrop-residents-want-vacant-units-occupied/"],
        ["CHA Report: Crime Rates Not Linked to CHA Relocatees","/cha-report-crime-rates-not-linked-to-cha-relocatees/"],
        ["Penalties","/penalties/"],
        ["Lathrop Homes Targeted for Redevelopment","/lathrop-homes-targeted-for-redevelopment/"],
        ["Seniors Protest Rent Rise","/seniors-protest-rent-rise/"],
        ["Tenants Council Battles To Represent Residents","/tenants-council-battles-to-represent-residents/"],
        ["CHA New Work Rule Questioned","/cha-new-work-rule-questioned/"],
        ["Who Could Miss The Hole?","/who-could-miss-the-hole/"],
        ["Altgeld Gardens News","/altgeld-garden-news/"],
        ["Ickes and Other CHA News","/ickes-and-other-cha-news/"],
        ["CHA Development News","/cha-development-news/"],
        ["CHA Contracting Woes","/cha-contracting-woes/"],
        ["Rush vs. Jackson","/rush-vs-jackson/"],
        ["Deadly Moves II","/deadly-moves-ii/"],
        ["Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle/"],
        ["Victory at Bridgeport Homes","/victory-at-bridgeport-homes/"],
        ["Utility Problems Persist for Residents","/utility-problems-persist-for-residents/"],
        ["A Questionable Connection","/a-questionable-connection/"],
        ["Residents: What People Want","/residents-what-people-want/"],
        ["Presidential Election Notebook","/presidential-election-notebook/"],
        ["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections/"],
        ["More CHA Residents Voting Woes","/more-cha-residents-voting-woes/"],
        ["Wipe Out","/wipe-out/"],
        ["Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes/"],
        ["Positive People","/positive-people/"],
        ["Senior Rehab Update","/senior-rehab-update/"],
        ["Deadly Moves - an update","/deadly-moves-an-update/"],
        ["Closure Razes Resident Hopes","/closure-razes-resident-hopes/"],
        ["Archer Courts: A Model Rehab","/archer-courts-a-model-rehab/"],
        ["You Have Been Served","/you-have-been-served/"],
        ["Bronzeville Community Alert","/bronzeville-community-alert/"],
        ["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change/"],
        ["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force/"],
        ["Deadly Moves: Troubling Development","/deadly-moves-troubling-development/"],
        ["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2/"],
        ["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves/"],
        ["Harold Ickes News","/harold-ickes-news-5/"],
        ["If the Suit Fits, Who Wears It?","/if-the-suit-fits-who-wears-it/"],
        ["A Championship Victory","/a-championship-victory/"],
        ["Oops, They Did It Again","/oops-they-did-it-again/"],
        ["Harold Ickes News","/harold-ickes-news-6/"],
        ["Altgeld Gardens Lawsuit Settlement","/altgeld-gardens-lawsuit-settlement/"],
        ["Getting to Know Rockwell","/getting-to-know-rockwell/"],
        ["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing/"],
        ["Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha/"],
        ["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects/"],
        ["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas/"],
        ["CHAC An Update: 2003","/chac-an-update-2003/"],
        ["Lathrop Homes News","/lathrop-homes-news/"],
        ["Thomas Sullivan Report Update","/thomas-sullivan-report-update/"],
        ["Making CHA Accessible","/making-cha-accessible/"],
        ["Homeless Not Hopeless","/homeless-not-hopeless/"],
        ["Residents Sue CHA","/residents-sue-cha/"],
        ["Seniors Complain About Renovations","/seniors-complain-about-renovations/"],
        ["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations/"],
        ["An Invasion of Privacy?","/an-invasion-of-privacy/"],
        ["Myths and Urban Legends","/myths-and-urban-legends/"],
        ["Positive Residents of the CHA","/positive-residents-of-the-cha/"],
        ["National Housing Crisis","/national-housing-crisis/"],
        ["HIV/AIDs Crisis","/hivaids-crisis/"],
        ["Operation ABLE","/operation-able/"],
        ["Harold Ickes Service Connectors","/harold-ickes-service-connectors/"],
        ["Harold Ickes News","/harold-ickes-news-8/"],
        ["Residents Deny Security Improvements","/residents-deny-security-improvements/"],
        ["CHA Puts Resident In Storage","/cha-puts-resident-in-storage/"],
        ["South Suburban Living","/south-suburban-living/"],
        ["Electrically Charged","/electrically-charged/"],
        ["Last Day in 4525","/last-day-in-4525/"],
        ["Housing Crisis in Highland Park","/housing-crisis-in-highland-park/"],
        ["It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini/"],
        ["Relocation Rights Contract","/relocation-rights-contract/"],
        ["Harold Ickes New School Update","/harold-ickes-new-school-update/"],
        ["Shocking Electric Bills Update","/shocking-electric-bills-update/"],
        ["Lathrop Homes Private Management","/lathrop-homes-private-management/"],
        ["Productive Men of the CHA","/productive-men-of-the-cha/"],
        ["CAC Prepares for Battle","/cac-prepares-for-battle/"],
        ["Squatters Worry About Homelessness","/squatters-worry-about-homelessness/"],
        ["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history/"],
        ["Shocking Electric Bills","/shocking-electric-bills/"],
        ["A 'One Strike' Battle Planned","/a-one-strike-battle-planned/"],
        ["Drug War Diagnosis","/drug-war-diagnosis/"],
        ["A Section 8 Recipient's Painful Reality","/a-section-8-recipients-painful-reality/"],
        ["A Savory Survey","/a-savory-survey/"],
        ["RMCs Aim to Please?","/rmcs-aim-to-please/"],
        ["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"],
        ["The Terror Within","/the-terror-within/"],
        ["Stop the Violence","/stop-the-violence-12/"],
        ["Seniors Quality of Life On The Rise","/seniors-quality-of-life-on-the-rise/"],
        ["CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills/"],
        ["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing/"],
        ["Squatters in CHA","/squatters-in-cha/"],
        ["Don't Rock The Boat","/dont-rock-the-boat/"],
        ["CHA Family Service Connectors","/cha-family-service-connectors/"],
        ["SPECIAL FEATURE: City Gets CHA Funds Update","/special-feature-city-gets-cha-funds-update/"],
        ["Sinai Health Services","/sinai-health-services/"],
        ["Saluting Men of the CHA","/saluting-men-of-the-cha/"],
        ["The State Of Section 8","/the-state-of-section-8/"],
        ["Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place/"],
        ["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds/"],
        ["High Cost of Gas","/high-cost-of-gas/"],
        ["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management/"],
        ["Transforming CHA: Senior Only Buildings","/transforming-cha-senior-only-buildings/"],
        ["Transforming CHA: Making Connections","/transforming-cha-making-connections/"],
        ["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan/"],
        ["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues/"],
        ["Transforming CHA: Flannery Homes Residents Keep Waiting","/transforming-cha-flannery-homes-residents-keep-waiting/"],
        ["Transforming CHA: Federal Housing Voucher Woes","/transforming-cha-federal-housing-voucher-woes/"],
        ["Transforming CHA: How To Save On Rent","/transforming-cha-how-to-save-on-rent/"],
        ["Transforming CHA: One Strike Woes","/transforming-cha-one-strike-woes/"],
        ["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike/"],
        ["Transforming CHA: New Lights on Dark Passage","/transforming-cha-new-lights-on-dark-passage/"],
        ["Transforming CHA: Washington Park Wants Answers","/transforming-cha-washington-park-wants-answers/"],
        ["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting/"],
        ["Cold War Echoes","/cold-war-echoes/"],
        ["Ida B. Wells Reunion","/ida-b-wells-reunion/"],
        ["HUD Head: CHA Off Troubled List","/hud-head-cha-off-troubled-list/"],
        ["RJ Visits Miami/Dade Housing Authority","/rj-visits-miamidade-housing-authority/"],
        ["Stop The Violence","/stop-the-violence-18/"],
        ["Access Report","/access-report-3/"],
        ["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man/"],
        ["Stop the Violence","/stop-the-violence-16/"],
        ["CHA Announces First Clean Audit","/cha-announces-first-clean-audit/"],
        ["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation/"],
        ["REDI: A New Beginning?","/redi-a-new-beginning/"],
        ["CHA to Buy Back Laundry Tokens","/cha-to-buy-back-laundry-tokens/"],
        ["Inspector General Nabs Employees","/inspector-general-nabs-employees/"],
        ["Access Report","/access-report/"],
        ["The Million Woman March: One Woman's View","/the-million-woman-march-one-womans-view/"],
        ["The Next CHA Chairman?","/the-next-cha-chairman/"],
        ["Farewell, Mr. Chairman","/farewell-mr-chairman/"],
        ["Section 8 Update","/section-8-update/"],
        ["Flannery Homes News","/flannery-homes-news/"],
        ["Happy 60th, Lathrop Homes","/happy-60th-lathrop-homes/"],
        ["CHA and Latinos: Interview with Joe Shuldiner","/cha-and-latinos-interview-with-joe-shuldiner/"],
        ["Access Report","/access-report-2/"],
        ["A Decree But to What Degree?","/a-decree-but-to-what-degree/"],
        ["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center/"],
        ["Residents Fight Vacate Orders","/residents-fight-vacate-orders/"],
        ["Dear Resident","/dear-resident-10/"],
        ["Flannery Homes Update","/flannery-homes-update-2/"],
        ["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph/"],
        ["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments/"],
        ["Horner Annex Reborn","/horner-annex-reborn/"],
        ["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road/"],
        ["Safe Summer 97","/safe-summer-97/"],
        ["Focus On Section 8","/focus-on-section-8/"],
        ["Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing/"],
        ["Hope Has a Way","/hope-has-a-way/"],
        ["Last Harvest","/last-harvest/"],
        ["The Man Who Scared the Hell Out of Me","/the-man-who-scared-the-hell-out-of-me/"],
        ["Seniors form new organization","/seniors-form-new-organization/"],
        ["Washington Park: The Dying Hope","/washington-park-the-dying-hope/"],
        ["A Long Ride Home","/a-long-ride-home/"],
        ["Marion...Marion Stamps","/marion-marion-stamps/"],
        ["What's Happening in ABLA?","/whats-happening-in-abla/"],
        ["LeClaire Courts","/leclaire-courts/"],
        ["CHA Home Ownership: Wentworth Gardens","/cha-home-ownership-wentworth-gardens/"],
        ["Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington/"]],
    "Plan for Transformation":[[
        "The New Resident Leadership","/the-new-resident-leadership/"],
        ["CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls/"],
        ["Another CHA Chief Bows Out","/another-cha-chief-bows-out/"],
        ["Oakwood Shores Update","/oakwood-shores-update/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news-2/"],
        ["Tenants Protest CHA’s Plans for Lathrop","/tenants-protest-chas-plans-for-lathrop/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news/"],
        ["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["CHA Opens Wait List in Lincoln Square","/cha-opens-wait-list-in-lincoln-square/"],
        ["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1/"],
        ["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer/"],
        ["A Message from the Resident President","/a-message-from-the-resident-president/"],
        ["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants/"],
        ["CHA's New Plan?","/chas-new-plan/"],
        ["Charlotte Housing Authority Chief takes CHA Position","/charlotte-housing-authority-chief-takes-cha-position/"],
        ["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha/"],
        ["Relocation Rights Duel","/relocation-rights-duel/"],
        ["Robert Taylor On Line","/robert-taylor-on-line/"],
        ["CHA Report: Crime Rates Not Linked to CHA Relocatees","/cha-report-crime-rates-not-linked-to-cha-relocatees/"],
        ["Who Could Miss The Hole?","/who-could-miss-the-hole/"],
        ["CHA Contracting Woes","/cha-contracting-woes/"],
        ["Deadly Moves II","/deadly-moves-ii/"],
        ["Utility Problems Persist for Residents","/utility-problems-persist-for-residents/"],
        ["A Questionable Connection","/a-questionable-connection/"],
        ["Residents: What People Want","/residents-what-people-want/"],
        ["Presidential Election Notebook","/presidential-election-notebook/"],
        ["Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes/"],
        ["Deadly Moves - an update","/deadly-moves-an-update/"],
        ["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force/"],
        ["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2/"],
        ["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves/"],
        ["Oops, They Did It Again","/oops-they-did-it-again/"],
        ["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing/"],
        ["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas/"],
        ["Thomas Sullivan Report Update","/thomas-sullivan-report-update/"],
        ["Homeless Not Hopeless","/homeless-not-hopeless/"],
        ["Residents Sue CHA","/residents-sue-cha/"],
        ["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations/"],
        ["Myths and Urban Legends","/myths-and-urban-legends/"],
        ["National Housing Crisis","/national-housing-crisis/"],
        ["CHA Puts Resident In Storage","/cha-puts-resident-in-storage/"],
        ["South Suburban Living","/south-suburban-living/"],
        ["Electrically Charged","/electrically-charged/"],
        ["Housing Crisis in Highland Park","/housing-crisis-in-highland-park/"],
        ["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents/"],
        ["Shocking Electric Bills","/shocking-electric-bills/"],
        ["A 'One Strike' Battle Planned","/a-one-strike-battle-planned/"],
        ["Drug War Diagnosis","/drug-war-diagnosis/"],
        ["A Savory Survey","/a-savory-survey/"],
        ["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"],
        ["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing/"],
        ["The State Of Section 8","/the-state-of-section-8/"],
        ["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management/"],
        ["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan/"],
        ["Cold War Echoes","/cold-war-echoes/"]],
    "politics":[[
        "The New Resident Leadership","/the-new-resident-leadership/"],
        ["CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls/"],
        ["Remembering ABLA Homes' Deverra Beverly","/remembering-abla-homes-deverra-beverly/"],
        ["Another CHA Chief Bows Out","/another-cha-chief-bows-out/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news-3/"],
        ["Oakwood Shores Update","/oakwood-shores-update/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news-2/"],
        ["We The People Media ED on Chicago Newsroom","/we-the-people-media-ed-on-chicago-newsroom/"],
        ["Tenants Protest CHA’s Plans for Lathrop","/tenants-protest-chas-plans-for-lathrop/"],
        ["Why It's So Hard to End Poverty","/why-its-so-hard-to-end-poverty/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news/"],
        ["Inside the Teachers Strike","/inside-the-teachers-strike/"],
        ["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["Rally against NATO, War and Poverty","/rally-against-nato-war-and-poverty/"],
        ["Altgeld Tenants: Police, Cameras Not Improving Security","/altgeld-tenants-police-cameras-not-improving-security/"],
        ["John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp/"],
        ["Group Carols to Save Mental Health Clinics","/group-carols-to-save-mental-health-clinics/"],
        ["Historical Gallery: Barack Obama","/historical-gallery-barack-obama/"],
        ["Residents' Journal Editor-in-chief talking about Summer Youth Employment","/residents-journal-editor-in-chief-talking-about-summer-youth-employment/"],
        ["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom/"],
        ["CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo/"],
        ["Board Squashes CHA Drug Testing Plan","/board-squashes-cha-drug-testing-plan/"],
        ["CHA Chief Steps Down","/cha-chief-steps-down-after-credit-card-fiasco/"],
        ["Tenants Protest CHA Plans to Drug Test Them","/2644/"],
        ["Mayoral Candidates Views about Chicago Public Housing","/mayoral-candidates-views-about-chicago-public-housing/"],
        ["The Obama Cave","/the-obama-cave/"],
        ["Jones vs. Tatum","/jones-vs-tatum/"],
        ["Rush vs. Jackson","/rush-vs-jackson/"],
        ["Cook County Presidential Race","/cook-county-presidential-race/"],
        ["Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle/"],
        ["Illinois Democrats Resist Social Security Privatization","/illinois-democrats-resist-social-security-privatization/"],
        ["A Questionable Connection","/a-questionable-connection/"],
        ["Update: Zoning and Affordable Housing","/update-zoning-and-affordable-housing/"],
        ["Presidential Election Notebook","/presidential-election-notebook/"],
        ["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections/"],
        ["A Taylor-Made Election","/a-taylor-made-election/"],
        ["More CHA Residents Voting Woes","/more-cha-residents-voting-woes/"],
        ["Wipe Out","/wipe-out/"],
        ["Cabrini-Green Election","/cabrini-green-election/"],
        ["Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes/"],
        ["2004 Election Focal Points","/2004-election-focal-points/"],
        ["Crystal Clear Views","/crystal-clear-views-7/"],
        ["Sixth District Race Makes History","/sixth-district-race-makes-history/"],
        ["2nd U.S. Congressional District Race","/2nd-u-s-congressional-district-race/"],
        ["U.S. Senate Candidate Joyce Washington","/u-s-senate-candidate-joyce-washington/"],
        ["U.S. Senate Candidate Gery Chico","/u-s-senate-candidate-gery-chico/"],
        ["U.S. Senate Candidate Daniel Hynes","/u-s-senate-candidate-daniel-hynes/"],
        ["U.S. Senate Candidate Blair Hull","/u-s-senate-candidate-blair-hull/"],
        ["The Sound of Silence","/the-sound-of-silence/"],
        ["The Price of a Political Job","/the-price-of-a-political-job/"],
        ["Representing Residents","/representing-residents/"],
        ["Chicago's Hottest Elections","/chicagos-hottest-elections/"],
        ["Myths and Urban Legends","/myths-and-urban-legends/"],
        ["Second Chance Legislation","/second-chance-legislation/"],
        ["Flannery Homes Update","/flannery-homes-update/"],
        ["The Next CHA Chairman?","/the-next-cha-chairman/"],
        ["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph/"],
        ["Vote '96: Conventional Colors","/vote-96-conventional-colors-2/"],
        ["Vote '96: Conventional Colors","/vote-96-conventional-colors/"]],
    "public housing":[[
        "The New Resident Leadership","/the-new-resident-leadership/"],
        ["CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls/"],
        ["Remembering ABLA Homes' Deverra Beverly","/remembering-abla-homes-deverra-beverly/"],
        ["Another CHA Chief Bows Out","/another-cha-chief-bows-out/"],
        ["Supreme Court Justice Sonia Sotomayor visits Chicago","/supreme-court-justice-sonia-sotomayor-visits-chicago/"],
        ["Honoring Dr. King's Legacy","/honoring-dr-kings-legacy/"],
        ["We The People Media ED on Chicago Newsroom","/we-the-people-media-ed-on-chicago-newsroom/"],
        ["Tenants Protest CHA’s Plans for Lathrop","/tenants-protest-chas-plans-for-lathrop/"],
        ["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["CHA Opens Wait List in Lincoln Square","/cha-opens-wait-list-in-lincoln-square/"],
        ["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1/"],
        ["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer/"],
        ["A Message from the Resident President","/a-message-from-the-resident-president/"],
        ["Charlotte Housing Authority Chief takes CHA Position","/charlotte-housing-authority-chief-takes-cha-position/"],
        ["Altgeld’s New Library","/altgeld%e2%80%99s-new-library/"],
        ["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha/"],
        ["Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives/"],
        ["Discussing the Oakwood Shores Mixed-Income Community","/residents-journal-reporter-talking-about-opportunities-for-public-housing-tenants-at-the-cha-oakwood-shores-mixed-income-community/"],
        ["After The Dust","/after-the-dust/"],
        ["Remembering Ms. Amey","/remembering-ms-amey/"],
        ["Residents' Journal's Coverage of CHA Featured in Rise Magazine","/residents-journals-coverage-of-cha-featured-in-rise-magazine/"],
        ["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom/"],
        ["CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo/"],
        ["Tenants Protest CHA Drug Testing Plan","/public-hearing-on-cha-drug-test-proposal/"],
        ["Tenants Protest CHA Plans to Drug Test Them","/2644/"],
        ["An Afternoon of Good Times","/an-afternoon-of-good-times/"],
        ["Where are CHA’s Residents?","/where-are-cha%e2%80%99s-residents/"],
        ["Mayoral Candidates Views about Chicago Public Housing","/mayoral-candidates-views-about-chicago-public-housing/"],
        ["A Third Generation’s Take on Relocation from Last Cabrini Building","/a-third-generation%e2%80%99s-take-on-relocation-from-last-cabrini-building/"],
        ["What We Need Now","/what-we-need-now/"],
        ["Ickes Homes News: The Final Curtain?","/ickes-homes-news-the-final-curtain/"],
        ["Relocation Rights Duel","/relocation-rights-duel/"],
        ["Tenants Protest New CHA School Reporting Policy","/tenants-protest-new-cha-school-reporting-policy/"],
        ["Robert Taylor On Line","/robert-taylor-on-line/"],
        ["An Inside Out Experience","/an-inside-out-experience/"],
        ["Memories of R. Taylor","/memories-of-r-taylor/"],
        ["CHA Seniors Keep Waiting to Return Home","/cha-seniors-keep-waiting-to-return-home/"],
        ["Who Could Miss The Hole?","/who-could-miss-the-hole/"],
        ["Publisher's Box","/publishers-box/"],
        ["CHA Development News","/cha-development-news/"],
        ["CHA Contracting Woes","/cha-contracting-woes/"],
        ["Jones vs. Tatum","/jones-vs-tatum/"],
        ["Troubling Development Update","/troubling-development-update/"],
        ["Deadly Moves II","/deadly-moves-ii/"],
        ["Victory at Bridgeport Homes","/victory-at-bridgeport-homes/"],
        ["Harold Ickes News","/harold-ickes-news-2/"],
        ["Tales of Lawndale Housing","/tales-of-lawndale-housing/"],
        ["Utility Problems Persist for Residents","/utility-problems-persist-for-residents/"],
        ["There's H.O.P.E. for Gary Residents","/theres-h-o-p-e-for-gary-residents/"],
        ["Harold Ickes News","/harold-ickes-news-3/"],
        ["Residents: What People Want","/residents-what-people-want/"],
        ["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections/"],
        ["A Taylor-Made Election","/a-taylor-made-election/"],
        ["More CHA Residents Voting Woes","/more-cha-residents-voting-woes/"],
        ["Wipe Out","/wipe-out/"],
        ["Positive People","/positive-people/"],
        ["Senior Rehab Update","/senior-rehab-update/"],
        ["Deadly Moves - an update","/deadly-moves-an-update/"],
        ["Closure Razes Resident Hopes","/closure-razes-resident-hopes/"],
        ["Positive People","/positive-people-2/"],
        ["Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park/"],
        ["Archer Courts: A Model Rehab","/archer-courts-a-model-rehab/"],
        ["Harold Ickes News","/harold-ickes-news-4/"],
        ["You Have Been Served","/you-have-been-served/"],
        ["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change/"],
        ["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force/"],
        ["Deadly Moves: Troubling Development","/deadly-moves-troubling-development/"],
        ["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2/"],
        ["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves/"],
        ["Positive People","/positive-people-3/"],
        ["Harold Ickes News","/harold-ickes-news-5/"],
        ["If the Suit Fits, Who Wears It?","/if-the-suit-fits-who-wears-it/"],
        ["A Championship Victory","/a-championship-victory/"],
        ["Oops, They Did It Again","/oops-they-did-it-again/"],
        ["The True Face of Poverty","/the-true-face-of-poverty/"],
        ["Getting to Know Rockwell","/getting-to-know-rockwell/"],
        ["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing/"],
        ["Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha/"],
        ["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects/"],
        ["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas/"],
        ["Dear Resident","/dear-resident/"],
        ["Harold Ickes News","/harold-ickes-news-7/"],
        ["Thomas Sullivan Report Update","/thomas-sullivan-report-update/"],
        ["Making CHA Accessible","/making-cha-accessible/"],
        ["The Shocking Truth about CHA","/the-shocking-truth-about-cha/"],
        ["Homeless Not Hopeless","/homeless-not-hopeless/"],
        ["Housing on State, City Agendas","/housing-on-state-city-agendas/"],
        ["Representing Residents","/representing-residents/"],
        ["Chicago's Hottest Elections","/chicagos-hottest-elections/"],
        ["Running Out of Gas","/running-out-of-gas/"],
        ["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations/"],
        ["Myths and Urban Legends","/myths-and-urban-legends/"],
        ["Operation ABLE","/operation-able/"],
        ["Harold Ickes Service Connectors","/harold-ickes-service-connectors/"],
        ["Stop The Violence","/stop-the-violence-11/"],
        ["South Suburban Living","/south-suburban-living/"],
        ["It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini/"],
        ["Welfare Reform: Lost In Space","/welfare-reform-lost-in-space/"],
        ["Maintenance Defects at Ogden Courts","/maintenance-defects-at-ogden-courts/"],
        ["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents/"],
        ["Shocking Electric Bills Update","/shocking-electric-bills-update/"],
        ["Lathrop News","/lathrop-news/"],
        ["ABLA News","/abla-news/"],
        ["Harold Ickes News","/harold-ickes-news-10/"],
        ["Lathrop Homes Private Management","/lathrop-homes-private-management/"],
        ["Productive Men of the CHA","/productive-men-of-the-cha/"],
        ["CAC Prepares for Battle","/cac-prepares-for-battle/"],
        ["Squatters Worry About Homelessness","/squatters-worry-about-homelessness/"],
        ["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history/"],
        ["Ickes' Homes New Managers","/ickes-homes-new-managers/"],
        ["Residents Look to the Hills","/residents-look-to-the-hills/"],
        ["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"],
        ["The Terror Within","/the-terror-within/"],
        ["Squatters in CHA","/squatters-in-cha/"],
        ["ABLA News","/abla-news-2/"],
        ["The State Of Section 8","/the-state-of-section-8/"],
        ["Ickes: Back To Square One","/ickes-back-to-square-one/"],
        ["High Cost of Gas","/high-cost-of-gas/"],
        ["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management/"],
        ["Transforming CHA: Senior Only Buildings","/transforming-cha-senior-only-buildings/"],
        ["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan/"],
        ["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues/"],
        ["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike/"],
        ["Transforming CHA: New Lights on Dark Passage","/transforming-cha-new-lights-on-dark-passage/"],
        ["Transforming CHA: Washington Park Wants Answers","/transforming-cha-washington-park-wants-answers/"],
        ["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting/"],
        ["Cold War Echoes","/cold-war-echoes/"],
        ["ABLA Homes Update","/abla-homes-update/"],
        ["Ida B. Wells Reunion","/ida-b-wells-reunion/"],
        ["All Things Old and New at Harold Ickes Homes","/all-things-old-and-new/"],
        ["Lathrop Homes News","/lathrop-homes-news-2/"],
        ["Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update/"],
        ["Cabrini Cliffhanger","/cabrini-cliffhanger/"],
        ["RJ Visits Miami/Dade Housing Authority","/rj-visits-miamidade-housing-authority/"],
        ["Stop The Violence","/stop-the-violence-18/"],
        ["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man/"],
        ["Dear Resident","/dear-resident-9/"],
        ["Stop the Violence","/stop-the-violence-16/"],
        ["Altgeld Gardens News","/altgeld-gardens-news/"],
        ["CHA Announces First Clean Audit","/cha-announces-first-clean-audit/"],
        ["Flannery Homes Update","/flannery-homes-update/"],
        ["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation/"],
        ["REDI: A New Beginning?","/redi-a-new-beginning/"],
        ["ABLA Relocation Report","/abla-relocation-report/"],
        ["L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike/"],
        ["CHA to Buy Back Laundry Tokens","/cha-to-buy-back-laundry-tokens/"],
        ["The Next CHA Chairman?","/the-next-cha-chairman/"],
        ["Farewell, Mr. Chairman","/farewell-mr-chairman/"],
        ["The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath/"],
        ["Altgeld Gardens News","/altgeld-gardens-news-2/"],
        ["Flannery Homes News","/flannery-homes-news/"],
        ["CHA and Latinos: Interview with Joe Shuldiner","/cha-and-latinos-interview-with-joe-shuldiner/"],
        ["When Will It End?","/when-will-it-end/"],
        ["Inner-City Truths: A Book Review","/inner-city-truths-a-book-review/"],
        ["A Decree But to What Degree?","/a-decree-but-to-what-degree/"],
        ["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center/"],
        ["Residents Fight Vacate Orders","/residents-fight-vacate-orders/"],
        ["Dear Resident","/dear-resident-10/"],
        ["Flannery Homes Update","/flannery-homes-update-2/"],
        ["Cabrini-Green Update","/cabrini-green-update/"],
        ["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph/"],
        ["Horner Annex Reborn","/horner-annex-reborn/"],
        ["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road/"],
        ["Replacement Housing or Replacing People","/replacement-housing-or-replacing-people/"],
        ["The Magnificent Maya Angelou","/the-magnificent-maya-angelou/"],
        ["Focus On Section 8","/focus-on-section-8/"],
        ["Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing/"],
        ["Dear Resident","/dear-resident-8/"],
        ["Last Harvest","/last-harvest/"],
        ["A Short History of Ida B. Wells","/a-short-history-of-ida-b-wells/"],
        ["Washington Park: The Dying Hope","/washington-park-the-dying-hope/"],
        ["A Long Ride Home","/a-long-ride-home/"],
        ["Marion...Marion Stamps","/marion-marion-stamps/"],
        ["A History of Cabrini-Green","/a-history-of-cabrini-green/"],
        ["What's Happening in ABLA?","/whats-happening-in-abla/"],
        ["LeClaire Courts","/leclaire-courts/"],
        ["CHA Home Ownership: Wentworth Gardens","/cha-home-ownership-wentworth-gardens/"],
        ["Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington/"]],
    "public housing residents":[[
        "The New Resident Leadership","/the-new-resident-leadership/"],
        ["CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls/"],
        ["Remembering ABLA Homes' Deverra Beverly","/remembering-abla-homes-deverra-beverly/"],
        ["Oakwood Shores Update","/oakwood-shores-update/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news-2/"],
        ["The Altgeld Gardens Farmers Market: A Personal Perspective","/the-altgeld-gardens-farmers-market-a-personal-perspective/"],
        ["Supreme Court Justice Sonia Sotomayor visits Chicago","/supreme-court-justice-sonia-sotomayor-visits-chicago/"],
        ["Tenants Protest CHA’s Plans for Lathrop","/tenants-protest-chas-plans-for-lathrop/"],
        ["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1/"],
        ["A Message from the Resident President","/a-message-from-the-resident-president/"],
        ["Altgeld’s New Library","/altgeld%e2%80%99s-new-library/"],
        ["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha/"],
        ["After The Dust","/after-the-dust/"],
        ["Residents' Journal's Coverage of CHA Featured in Rise Magazine","/residents-journals-coverage-of-cha-featured-in-rise-magazine/"],
        ["Tenants Protest CHA Drug Testing Plan","/public-hearing-on-cha-drug-test-proposal/"],
        ["Tenants Protest CHA Plans to Drug Test Them","/2644/"],
        ["Relocation Rights Duel","/relocation-rights-duel/"],
        ["Who Could Miss The Hole?","/who-could-miss-the-hole/"],
        ["A Special Tribute","/a-special-tribute/"],
        ["CHA Development News","/cha-development-news/"],
        ["CHA Contracting Woes","/cha-contracting-woes/"],
        ["Victory at Bridgeport Homes","/victory-at-bridgeport-homes/"],
        ["Harold Ickes News","/harold-ickes-news-2/"],
        ["Tales of Lawndale Housing","/tales-of-lawndale-housing/"],
        ["Utility Problems Persist for Residents","/utility-problems-persist-for-residents/"],
        ["Stop The Violence","/stop-the-violence-3/"],
        ["Residents: What People Want","/residents-what-people-want/"],
        ["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections/"],
        ["More CHA Residents Voting Woes","/more-cha-residents-voting-woes/"],
        ["Wipe Out","/wipe-out/"],
        ["Cabrini-Green Election","/cabrini-green-election/"],
        ["Positive People","/positive-people/"],
        ["Deadly Moves - an update","/deadly-moves-an-update/"],
        ["Closure Razes Resident Hopes","/closure-razes-resident-hopes/"],
        ["Positive People","/positive-people-2/"],
        ["Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park/"],
        ["Archer Courts: A Model Rehab","/archer-courts-a-model-rehab/"],
        ["Harold Ickes News","/harold-ickes-news-4/"],
        ["You Have Been Served","/you-have-been-served/"],
        ["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change/"],
        ["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves/"],
        ["Harold Ickes News","/harold-ickes-news-5/"],
        ["If the Suit Fits, Who Wears It?","/if-the-suit-fits-who-wears-it/"],
        ["A Championship Victory","/a-championship-victory/"],
        ["Oops, They Did It Again","/oops-they-did-it-again/"],
        ["Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha/"],
        ["Dear Resident","/dear-resident/"],
        ["Representing Residents","/representing-residents/"],
        ["Residents Sue CHA","/residents-sue-cha/"],
        ["Running Out of Gas","/running-out-of-gas/"],
        ["An Invasion of Privacy?","/an-invasion-of-privacy/"],
        ["Positive Residents of the CHA","/positive-residents-of-the-cha/"],
        ["Last Day in 4525","/last-day-in-4525/"],
        ["Housing Crisis in Highland Park","/housing-crisis-in-highland-park/"],
        ["It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini/"],
        ["Harold Ickes News","/harold-ickes-news-9/"],
        ["Harold Ickes New School Update","/harold-ickes-new-school-update/"],
        ["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents/"],
        ["A 'One Strike' Battle Planned","/a-one-strike-battle-planned/"],
        ["Drug War Diagnosis","/drug-war-diagnosis/"],
        ["Dear Resident","/dear-resident-5/"],
        ["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing/"],
        ["Don't Rock The Boat","/dont-rock-the-boat/"],
        ["CHA Family Service Connectors","/cha-family-service-connectors/"],
        ["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds/"],
        ["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting/"],
        ["Cold War Echoes","/cold-war-echoes/"],
        ["ABLA Homes Update","/abla-homes-update/"],
        ["Ida B. Wells Reunion","/ida-b-wells-reunion/"],
        ["All Things Old and New at Harold Ickes Homes","/all-things-old-and-new/"],
        ["RJ Visits Miami/Dade Housing Authority","/rj-visits-miamidade-housing-authority/"],
        ["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man/"],
        ["Stop the Violence","/stop-the-violence-16/"],
        ["Altgeld Gardens News","/altgeld-gardens-news/"],
        ["CHA Announces First Clean Audit","/cha-announces-first-clean-audit/"],
        ["Flannery Homes Update","/flannery-homes-update/"],
        ["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation/"],
        ["REDI: A New Beginning?","/redi-a-new-beginning/"],
        ["ABLA Relocation Report","/abla-relocation-report/"],
        ["L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike/"],
        ["CHA to Buy Back Laundry Tokens","/cha-to-buy-back-laundry-tokens/"],
        ["Farewell, Mr. Chairman","/farewell-mr-chairman/"],
        ["The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath/"],
        ["Dear Resident","/dear-resident-11/"],
        ["Flannery Homes News","/flannery-homes-news/"],
        ["A Decree But to What Degree?","/a-decree-but-to-what-degree/"],
        ["Residents Fight Vacate Orders","/residents-fight-vacate-orders/"],
        ["Flannery Homes Update","/flannery-homes-update-2/"],
        ["Cabrini-Green Update","/cabrini-green-update/"],
        ["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph/"],
        ["Horner Annex Reborn","/horner-annex-reborn/"],
        ["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road/"],
        ["Safe Summer 97","/safe-summer-97/"],
        ["Focus On Section 8","/focus-on-section-8/"],
        ["Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing/"],
        ["Hope Has a Way","/hope-has-a-way/"],
        ["Dear Resident","/dear-resident-8/"],
        ["Last Harvest","/last-harvest/"],
        ["Washington Park: The Dying Hope","/washington-park-the-dying-hope/"],
        ["What's Happening in ABLA?","/whats-happening-in-abla/"],
        ["LeClaire Courts","/leclaire-courts/"]],
    "Robert Taylor Homes":[[
        "The New Resident Leadership","/the-new-resident-leadership/"],
        ["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1/"],
        ["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer/"],
        ["CHA's New Plan?","/chas-new-plan/"],
        ["Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives/"],
        ["After The Dust","/after-the-dust/"],
        ["Robert Taylor On Line","/robert-taylor-on-line/"],
        ["Memories of R. Taylor","/memories-of-r-taylor/"],
        ["The CHA Plan Is Dead","/the-cha-plan-is-dead/"],
        ["Who Could Miss The Hole?","/who-could-miss-the-hole/"],
        ["CHA Contracting Woes","/cha-contracting-woes/"],
        ["Utility Problems Persist for Residents","/utility-problems-persist-for-residents/"],
        ["A Taylor-Made Election","/a-taylor-made-election/"],
        ["Positive People","/positive-people/"],
        ["Positive People","/positive-people-2/"],
        ["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2/"],
        ["Positive People","/positive-people-3/"],
        ["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas/"],
        ["The Shocking Truth about CHA","/the-shocking-truth-about-cha/"],
        ["CHA Puts Resident In Storage","/cha-puts-resident-in-storage/"],
        ["Electrically Charged","/electrically-charged/"],
        ["Last Day in 4525","/last-day-in-4525/"],
        ["Shocking Electric Bills Update","/shocking-electric-bills-update/"],
        ["Shocking Electric Bills","/shocking-electric-bills/"],
        ["Remembering Leroy Watkins","/remembering-leroy-watkins/"],
        ["A Section 8 Recipient's Painful Reality","/a-section-8-recipients-painful-reality/"],
        ["A Trip To The Future","/a-trip-to-the-future/"],
        ["Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place/"],
        ["Stop The Violence","/stop-the-violence-15/"],
        ["Transforming CHA: Federal Housing Voucher Woes","/transforming-cha-federal-housing-voucher-woes/"],
        ["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting/"],
        ["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man/"]],
    "Section 8":[[
        "The New Resident Leadership","/the-new-resident-leadership/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news-2/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news/"],
        ["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1/"],
        ["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer/"],
        ["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants/"],
        ["CHA's New Plan?","/chas-new-plan/"],
        ["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha/"],
        ["Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives/"],
        ["After The Dust","/after-the-dust/"],
        ["Ickes Homes News: The Final Curtain?","/ickes-homes-news-the-final-curtain/"],
        ["Robert Taylor On Line","/robert-taylor-on-line/"],
        ["The CHA Plan Is Dead","/the-cha-plan-is-dead/"],
        ["Residents Blame CHA for School Closures","/residents-blame-cha-for-school-closures/"],
        ["Harold L. Ickes Homes News","/harold-l-ickes-homes-news/"],
        ["Congress Accuses HUD of Mismanagement","/congress-accuses-hud-of-mismanagement/"],
        ["Penalties","/penalties/"],
        ["Tales of Lawndale Housing","/tales-of-lawndale-housing/"],
        ["Utility Problems Persist for Residents","/utility-problems-persist-for-residents/"],
        ["More CHA Residents Voting Woes","/more-cha-residents-voting-woes/"],
        ["Closure Razes Resident Hopes","/closure-razes-resident-hopes/"],
        ["2004 Election Focal Points","/2004-election-focal-points/"],
        ["Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park/"],
        ["Harold Ickes News","/harold-ickes-news-4/"],
        ["You Have Been Served","/you-have-been-served/"],
        ["CHAC An Update: 2003","/chac-an-update-2003/"],
        ["Homeless Not Hopeless","/homeless-not-hopeless/"],
        ["Residents Sue CHA","/residents-sue-cha/"],
        ["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations/"],
        ["Myths and Urban Legends","/myths-and-urban-legends/"],
        ["Housing Crisis in Highland Park","/housing-crisis-in-highland-park/"],
        ["It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini/"],
        ["Relocation Rights Contract","/relocation-rights-contract/"],
        ["CAC Prepares for Battle","/cac-prepares-for-battle/"],
        ["Squatters Worry About Homelessness","/squatters-worry-about-homelessness/"],
        ["A Section 8 Recipient's Painful Reality","/a-section-8-recipients-painful-reality/"],
        ["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8/"],
        ["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"],
        ["New Vincennes Plaza","/new-vincennes-plaza/"],
        ["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing/"],
        ["The State Of Section 8","/the-state-of-section-8/"],
        ["Razing the Brooks Extension","/razing-the-brooks-extension/"],
        ["Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place/"],
        ["Project Based Section-8s Threatened","/project-based-section-8s-threatened/"],
        ["Del Prado Residents Face Uncertainty","/del-prado-residents-face-uncertainty/"],
        ["Transforming CHA: Federal Housing Voucher Woes","/transforming-cha-federal-housing-voucher-woes/"],
        ["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation/"],
        ["Replacement Housing or Replacing People","/replacement-housing-or-replacing-people/"],
        ["Focus On Section 8","/focus-on-section-8/"]],
    "senior citizens":[[
        "The New Resident Leadership","/the-new-resident-leadership/"],
        ["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["Stopping Elder Abuse","/stopping-elder-abuse/"],
        ["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1/"],
        ["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer/"],
        ["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants/"],
        ["The White House Agenda for the Poor","/the-white-house-agenda-for-the-poor/"],
        ["CHA Seniors Keep Waiting to Return Home","/cha-seniors-keep-waiting-to-return-home/"],
        ["Senior Services 2005 and Beyond","/senior-services-2005-and-beyond/"],
        ["Senior Rehab Update","/senior-rehab-update/"],
        ["Medicare Prescription Drug Benefit","/medicare-prescription-drug-benefit/"],
        ["Seniors Complain About Renovations","/seniors-complain-about-renovations/"],
        ["Seniors Graduate Police Class","/seniors-graduate-police-class/"],
        ["Operation ABLE","/operation-able/"],
        ["The High Cost of Medicine","/the-high-cost-of-medicine/"],
        ["CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills/"],
        ["Sinai Health Services","/sinai-health-services/"],
        ["Transforming CHA: Senior Only Buildings","/transforming-cha-senior-only-buildings/"],
        ["Access Report","/access-report-3/"],
        ["CHA to Buy Back Laundry Tokens","/cha-to-buy-back-laundry-tokens/"],
        ["Access Report","/access-report/"],
        ["Access Report","/access-report-2/"],
        ["Flannery Homes Update","/flannery-homes-update-2/"],
        ["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments/"],
        ["Focus On Section 8","/focus-on-section-8/"],
        ["Last Harvest","/last-harvest/"],
        ["Seniors form new organization","/seniors-form-new-organization/"]],
    "Chicago Housing Authority":[[
        "CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls/"],
        ["Remembering ABLA Homes' Deverra Beverly","/remembering-abla-homes-deverra-beverly/"],
        ["Another CHA Chief Bows Out","/another-cha-chief-bows-out/"],
        ["Oakwood Shores Update","/oakwood-shores-update/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news-2/"],
        ["A Protest Success Story","/a-protest-success-story/"],
        ["The Altgeld Gardens Farmers Market: A Personal Perspective","/the-altgeld-gardens-farmers-market-a-personal-perspective/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news/"],
        ["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["Winners from the Resident Survey!","/winners-from-the-resident-survey/"],
        ["CHA Opens Wait List in Lincoln Square","/cha-opens-wait-list-in-lincoln-square/"],
        ["CHA Opens Public Housing Wait List for South Side Neighborhoods","/cha-opens-public-housing-wait-list-for-specific-areas/"],
        ["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1/"],
        ["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer/"],
        ["A Message from the Resident President","/a-message-from-the-resident-president/"],
        ["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants/"],
        ["CHA's New Plan?","/chas-new-plan/"],
        ["Altgeld Tenants: Police, Cameras Not Improving Security","/altgeld-tenants-police-cameras-not-improving-security/"],
        ["Blackhawks Host CHA Kids","/blackhawks-host-cha-kids/"],
        ["Tenants' Lawyer: CHA Drug Testing Policy Will End Up in Court","/tenants-lawyer-cha-drug-testing-policy-will-end-up-in-court/"],
        ["CHA Reopens Landmark Senior Building","/cha-reopens-landmark-senior-building/"],
        ["Some Lathrop Kids Get a Bus, But Not All","/some-lathrop-kids-get-a-bus-but-not-all/"],
        ["Is CHA Holding Vacant Apartments?","/is-cha-holding-vacant-apartments/"],
        ["Ex-Offenders Strive For Better","/ex-offenders-strive-for-better/"],
        ["Special Investigation: CHA Still Wants Kids’ Report Cards","/special-investigation-cha-still-wants-kids%e2%80%99-report-cards/"],
        ["Elementary School Students Suffer from CHA Relocations","/elementary-school-students-suffer-from-cha-relocations/"],
        ["Charlotte Housing Authority Chief takes CHA Position","/charlotte-housing-authority-chief-takes-cha-position/"],
        ["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha/"],
        ["Residents' Journal Coverage of the Recent Demolition of the Last CHA Ida B. Wells Homes Buildings","/residents-journal-coverage-of-the-recent-demolition-of-the-last-cha-ida-b-wells-homes-buildings/"],
        ["Residents' Journal Publisher and Editor Discussing Recent CHA Issues","/residents-journal-publisher-and-editor-discussing-recent-cha-issues/"],
        ["Residents' Journal Reporters talking about Current Youth Articles","/residents-journal-staff-member-talking-to-an-urban-youth-international-journalism-program-student-about-her-news-reports-this-summer/"],
        ["Discussing the Oakwood Shores Mixed-Income Community","/residents-journal-reporter-talking-about-opportunities-for-public-housing-tenants-at-the-cha-oakwood-shores-mixed-income-community/"],
        ["Altgeld Gardens Tries to Stay Cool","/altgeld-gardens-tries-to-stay-cool/"],
        ["How to Deal with the Next Heat Wave","/how-to-deal-with-the-next-heat-wave/"],
        ["CHA Launches Initiative to House Women Ex-Offenders","/cha-launches-initiative-to-house-women-ex-offenders/"],
        ["After The Dust","/after-the-dust/"],
        ["Mayor Continues Search for New CHA Head","/mayor-continues-search-for-new-cha-head/"],
        ["Residents' Journal Publisher on WBEZ","/residents-journal-publisher-on-wbez/"],
        ["Remembering Ms. Amey","/remembering-ms-amey/"],
        ["Residents' Journal's Coverage of CHA Featured in Rise Magazine","/residents-journals-coverage-of-cha-featured-in-rise-magazine/"],
        ["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom/"],
        ["CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo/"],
        ["My trip to Paris","/my-trip-to-paris/"],
        ["A Dream Come True","/a-dream-come-true/"],
        ["CHA Land Remains Vacant for Over a Decade (Commentary)","/cha-land-remains-vacant-for-over-a-decade-commentary/"],
        ["Board Squashes CHA Drug Testing Plan","/board-squashes-cha-drug-testing-plan/"],
        ["CHA Chief Steps Down","/cha-chief-steps-down-after-credit-card-fiasco/"],
        ["Tenants Protest CHA Drug Testing Plan","/public-hearing-on-cha-drug-test-proposal/"],
        ["Tenants Protest CHA Plans to Drug Test Them","/2644/"],
        ["An Afternoon of Good Times","/an-afternoon-of-good-times/"],
        ["Where are CHA’s Residents?","/where-are-cha%e2%80%99s-residents/"],
        ["Cabrini-Green Residents Say Goodbye","/cabrini-green-residents-say-goodbye/"],
        ["CHA Board Meeting Crashed with Concerns","/cha-board-meeting-crashed-with-concerns/"],
        ["Cabrini rowhouses’ fate in jeopardy","/cabrini-rowhouses%e2%80%99-fate-in-jeopardy/"],
        ["A Third Generation’s Take on Relocation from Last Cabrini Building","/a-third-generation%e2%80%99s-take-on-relocation-from-last-cabrini-building/"],
        ["CHA Youth Shopping Spree with Chicago Bears Player","/cha-youth-shopping-spree-with-chicago-bears-player/"],
        ["Where I Come From","/where-i-come-from/"],
        ["Ickes Homes News: The Final Curtain?","/ickes-homes-news-the-final-curtain/"],
        ["Relocation Rights Duel","/relocation-rights-duel/"],
        ["Tenants Protest New CHA School Reporting Policy","/tenants-protest-new-cha-school-reporting-policy/"],
        ["Robert Taylor On Line","/robert-taylor-on-line/"],
        ["Who Could Miss The Hole?","/who-could-miss-the-hole/"],
        ["Altgeld Gardens News","/altgeld-garden-news/"],
        ["CHA Development News","/cha-development-news/"],
        ["CHA Contracting Woes","/cha-contracting-woes/"],
        ["Rush vs. Jackson","/rush-vs-jackson/"],
        ["Deadly Moves II","/deadly-moves-ii/"],
        ["Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle/"],
        ["Utility Problems Persist for Residents","/utility-problems-persist-for-residents/"],
        ["A Questionable Connection","/a-questionable-connection/"],
        ["Residents: What People Want","/residents-what-people-want/"],
        ["More CHA Residents Voting Woes","/more-cha-residents-voting-woes/"],
        ["Wipe Out","/wipe-out/"],
        ["Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes/"],
        ["Positive People","/positive-people/"],
        ["Senior Rehab Update","/senior-rehab-update/"],
        ["Deadly Moves - an update","/deadly-moves-an-update/"],
        ["Closure Razes Resident Hopes","/closure-razes-resident-hopes/"],
        ["Archer Courts: A Model Rehab","/archer-courts-a-model-rehab/"],
        ["You Have Been Served","/you-have-been-served/"],
        ["Bronzeville Community Alert","/bronzeville-community-alert/"],
        ["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change/"],
        ["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force/"],
        ["Deadly Moves: Troubling Development","/deadly-moves-troubling-development/"],
        ["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2/"],
        ["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves/"],
        ["Harold Ickes News","/harold-ickes-news-5/"],
        ["If the Suit Fits, Who Wears It?","/if-the-suit-fits-who-wears-it/"],
        ["A Championship Victory","/a-championship-victory/"],
        ["Oops, They Did It Again","/oops-they-did-it-again/"],
        ["Harold Ickes News","/harold-ickes-news-6/"],
        ["Altgeld Gardens Lawsuit Settlement","/altgeld-gardens-lawsuit-settlement/"],
        ["Getting to Know Rockwell","/getting-to-know-rockwell/"],
        ["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing/"],
        ["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects/"],
        ["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas/"],
        ["CHAC An Update: 2003","/chac-an-update-2003/"],
        ["Lathrop Homes News","/lathrop-homes-news/"],
        ["Thomas Sullivan Report Update","/thomas-sullivan-report-update/"],
        ["Making CHA Accessible","/making-cha-accessible/"],
        ["The Shocking Truth about CHA","/the-shocking-truth-about-cha/"],
        ["Homeless Not Hopeless","/homeless-not-hopeless/"],
        ["Residents Sue CHA","/residents-sue-cha/"],
        ["Seniors Complain About Renovations","/seniors-complain-about-renovations/"],
        ["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations/"],
        ["An Invasion of Privacy?","/an-invasion-of-privacy/"],
        ["Myths and Urban Legends","/myths-and-urban-legends/"],
        ["Positive Residents of the CHA","/positive-residents-of-the-cha/"],
        ["National Housing Crisis","/national-housing-crisis/"],
        ["HIV/AIDs Crisis","/hivaids-crisis/"],
        ["Operation ABLE","/operation-able/"],
        ["Harold Ickes Service Connectors","/harold-ickes-service-connectors/"],
        ["Harold Ickes News","/harold-ickes-news-8/"],
        ["CHA Puts Resident In Storage","/cha-puts-resident-in-storage/"],
        ["South Suburban Living","/south-suburban-living/"],
        ["Electrically Charged","/electrically-charged/"],
        ["Last Day in 4525","/last-day-in-4525/"],
        ["Housing Crisis in Highland Park","/housing-crisis-in-highland-park/"],
        ["It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini/"],
        ["Relocation Rights Contract","/relocation-rights-contract/"],
        ["Harold Ickes New School Update","/harold-ickes-new-school-update/"],
        ["Shocking Electric Bills Update","/shocking-electric-bills-update/"],
        ["Lathrop Homes Private Management","/lathrop-homes-private-management/"],
        ["Productive Men of the CHA","/productive-men-of-the-cha/"],
        ["CAC Prepares for Battle","/cac-prepares-for-battle/"],
        ["Squatters Worry About Homelessness","/squatters-worry-about-homelessness/"],
        ["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history/"],
        ["Shocking Electric Bills","/shocking-electric-bills/"],
        ["Drug War Diagnosis","/drug-war-diagnosis/"],
        ["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"],
        ["Seniors Quality of Life On The Rise","/seniors-quality-of-life-on-the-rise/"],
        ["CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills/"],
        ["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing/"],
        ["Squatters in CHA","/squatters-in-cha/"],
        ["Don't Rock The Boat","/dont-rock-the-boat/"],
        ["CHA Family Service Connectors","/cha-family-service-connectors/"],
        ["SPECIAL FEATURE: City Gets CHA Funds Update","/special-feature-city-gets-cha-funds-update/"],
        ["Sinai Health Services","/sinai-health-services/"],
        ["Saluting Men of the CHA","/saluting-men-of-the-cha/"],
        ["The State Of Section 8","/the-state-of-section-8/"],
        ["Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place/"],
        ["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds/"],
        ["High Cost of Gas","/high-cost-of-gas/"],
        ["Transforming CHA: Senior Only Buildings","/transforming-cha-senior-only-buildings/"],
        ["Transforming CHA: Making Connections","/transforming-cha-making-connections/"],
        ["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan/"],
        ["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues/"],
        ["Transforming CHA: Flannery Homes Residents Keep Waiting","/transforming-cha-flannery-homes-residents-keep-waiting/"],
        ["Transforming CHA: Federal Housing Voucher Woes","/transforming-cha-federal-housing-voucher-woes/"],
        ["Transforming CHA: How To Save On Rent","/transforming-cha-how-to-save-on-rent/"],
        ["Transforming CHA: One Strike Woes","/transforming-cha-one-strike-woes/"],
        ["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike/"],
        ["Transforming CHA: New Lights on Dark Passage","/transforming-cha-new-lights-on-dark-passage/"],
        ["Transforming CHA: Washington Park Wants Answers","/transforming-cha-washington-park-wants-answers/"],
        ["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting/"],
        ["Cold War Echoes","/cold-war-echoes/"],
        ["Ida B. Wells Reunion","/ida-b-wells-reunion/"],
        ["HUD Head: CHA Off Troubled List","/hud-head-cha-off-troubled-list/"],
        ["RJ Visits Miami/Dade Housing Authority","/rj-visits-miamidade-housing-authority/"],
        ["Stop The Violence","/stop-the-violence-18/"],
        ["Access Report","/access-report-3/"],
        ["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man/"],
        ["Stop the Violence","/stop-the-violence-16/"],
        ["CHA Announces First Clean Audit","/cha-announces-first-clean-audit/"],
        ["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation/"],
        ["REDI: A New Beginning?","/redi-a-new-beginning/"],
        ["CHA to Buy Back Laundry Tokens","/cha-to-buy-back-laundry-tokens/"],
        ["Inspector General Nabs Employees","/inspector-general-nabs-employees/"],
        ["Access Report","/access-report/"],
        ["The Million Woman March: One Woman's View","/the-million-woman-march-one-womans-view/"],
        ["The Next CHA Chairman?","/the-next-cha-chairman/"],
        ["Farewell, Mr. Chairman","/farewell-mr-chairman/"],
        ["Section 8 Update","/section-8-update/"],
        ["Flannery Homes News","/flannery-homes-news/"],
        ["Happy 60th, Lathrop Homes","/happy-60th-lathrop-homes/"],
        ["CHA and Latinos: Interview with Joe Shuldiner","/cha-and-latinos-interview-with-joe-shuldiner/"],
        ["Access Report","/access-report-2/"],
        ["A Decree But to What Degree?","/a-decree-but-to-what-degree/"],
        ["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center/"],
        ["Residents Fight Vacate Orders","/residents-fight-vacate-orders/"],
        ["Flannery Homes Update","/flannery-homes-update-2/"],
        ["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph/"],
        ["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments/"],
        ["Horner Annex Reborn","/horner-annex-reborn/"],
        ["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road/"],
        ["Safe Summer 97","/safe-summer-97/"],
        ["Focus On Section 8","/focus-on-section-8/"],
        ["Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing/"],
        ["Hope Has a Way","/hope-has-a-way/"],
        ["Dear Resident","/dear-resident-8/"],
        ["Seniors form new organization","/seniors-form-new-organization/"],
        ["Washington Park: The Dying Hope","/washington-park-the-dying-hope/"],
        ["A Long Ride Home","/a-long-ride-home/"],
        ["What's Happening in ABLA?","/whats-happening-in-abla/"],
        ["LeClaire Courts","/leclaire-courts/"],
        ["CHA Home Ownership: Wentworth Gardens","/cha-home-ownership-wentworth-gardens/"],
        ["Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington/"]],
    "demolition":[[
        "CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls/"],
        ["Another CHA Chief Bows Out","/another-cha-chief-bows-out/"],
        ["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["Winners from the Resident Survey!","/winners-from-the-resident-survey/"],
        ["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1/"],
        ["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants/"],
        ["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha/"],
        ["After The Dust","/after-the-dust/"],
        ["Ickes Homes News: The Final Curtain?","/ickes-homes-news-the-final-curtain/"],
        ["Memories of R. Taylor","/memories-of-r-taylor/"],
        ["Growing Up","/growing-up/"],
        ["Harold Ickes News","/harold-ickes-news-4/"],
        ["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2/"],
        ["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects/"],
        ["National Housing Crisis","/national-housing-crisis/"],
        ["Last Day in 4525","/last-day-in-4525/"],
        ["Housing Crisis in Highland Park","/housing-crisis-in-highland-park/"],
        ["Harold Ickes New School Update","/harold-ickes-new-school-update/"],
        ["Harold Ickes News","/harold-ickes-news-10/"],
        ["A Section 8 Recipient's Painful Reality","/a-section-8-recipients-painful-reality/"],
        ["A Savory Survey","/a-savory-survey/"],
        ["Don't Rock The Boat","/dont-rock-the-boat/"],
        ["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management/"],
        ["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues/"],
        ["Cold War Echoes","/cold-war-echoes/"],
        ["Cabrini Cliffhanger","/cabrini-cliffhanger/"],
        ["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man/"],
        ["Washington Park: The Dying Hope","/washington-park-the-dying-hope/"]],
    "HUD":[[
        "CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls/"],
        ["Another CHA Chief Bows Out","/another-cha-chief-bows-out/"],
        ["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["A Message from the Resident President","/a-message-from-the-resident-president/"],
        ["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants/"],
        ["Charlotte Housing Authority Chief takes CHA Position","/charlotte-housing-authority-chief-takes-cha-position/"],
        ["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha/"],
        ["Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives/"],
        ["After The Dust","/after-the-dust/"],
        ["Housing Activists Take Action: An Update","/housing-activists-take-action-an-update/"],
        ["HUD Renews 19 States’ HIV/AIDS Supportive Housing Programs","/hud-renews-19-states%e2%80%99-hivaids-supportive-housing-programs/"],
        ["Ickes Homes News: The Final Curtain?","/ickes-homes-news-the-final-curtain/"],
        ["An Inside Out Experience","/an-inside-out-experience/"],
        ["The White House Agenda for the Poor","/the-white-house-agenda-for-the-poor/"],
        ["Harold Ickes Homes Update","/harold-ickes-homes-update/"],
        ["CHA Seniors Keep Waiting to Return Home","/cha-seniors-keep-waiting-to-return-home/"],
        ["U.S. Reps Call For Moratorium On Public Housing Demolitions","/u-s-reps-call-for-moratorium-on-public-housing-demolitions/"],
        ["Congress Accuses HUD of Mismanagement","/congress-accuses-hud-of-mismanagement/"],
        ["Lathrop Residents Want Vacant Units Occupied","/lathrop-residents-want-vacant-units-occupied/"],
        ["Who Could Miss The Hole?","/who-could-miss-the-hole/"],
        ["CHA Contracting Woes","/cha-contracting-woes/"],
        ["Tales of Lawndale Housing","/tales-of-lawndale-housing/"],
        ["There's H.O.P.E. for Gary Residents","/theres-h-o-p-e-for-gary-residents/"],
        ["More CHA Residents Voting Woes","/more-cha-residents-voting-woes/"],
        ["Harold Ickes News","/harold-ickes-news-6/"],
        ["Getting to Know Rockwell","/getting-to-know-rockwell/"],
        ["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects/"],
        ["CHAC An Update: 2003","/chac-an-update-2003/"],
        ["Residents Sue CHA","/residents-sue-cha/"],
        ["National Housing Crisis","/national-housing-crisis/"],
        ["Relocation Rights Contract","/relocation-rights-contract/"],
        ["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents/"],
        ["CAC Prepares for Battle","/cac-prepares-for-battle/"],
        ["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history/"],
        ["A 'One Strike' Battle Planned","/a-one-strike-battle-planned/"],
        ["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8/"],
        ["The State Of Section 8","/the-state-of-section-8/"],
        ["Del Prado Residents Face Uncertainty","/del-prado-residents-face-uncertainty/"],
        ["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike/"],
        ["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting/"],
        ["Cold War Echoes","/cold-war-echoes/"],
        ["HUD Head: CHA Off Troubled List","/hud-head-cha-off-troubled-list/"],
        ["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man/"],
        ["CHA Announces First Clean Audit","/cha-announces-first-clean-audit/"],
        ["A Decree But to What Degree?","/a-decree-but-to-what-degree/"],
        ["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center/"],
        ["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments/"],
        ["Horner Annex Reborn","/horner-annex-reborn/"],
        ["Focus On Section 8","/focus-on-section-8/"],
        ["Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing/"],
        ["The Man Who Scared the Hell Out of Me","/the-man-who-scared-the-hell-out-of-me/"],
        ["A Long Ride Home","/a-long-ride-home/"],
        ["Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington/"]],
    "Mayor Richard M. Daley":[[
        "CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls/"],
        ["Lawsuit Underway after Guilty Verdict in Burge Trial","/lawsuit-underway-after-guilty-verdict-in-burge-trial/"],
        ["The CHA Plan Is Dead","/the-cha-plan-is-dead/"],
        ["The Times They Are A’Changing","/the-times-they-are-achanging/"],
        ["Deadly Moves: Troubling Development","/deadly-moves-troubling-development/"],
        ["Debating Affordable Housing","/debating-affordable-housing/"],
        ["Housing on State, City Agendas","/housing-on-state-city-agendas/"],
        ["Chicago's Hottest Elections","/chicagos-hottest-elections/"],
        ["Cold War Echoes","/cold-war-echoes/"]],
    "ABLA":[[
        "Remembering ABLA Homes' Deverra Beverly","/remembering-abla-homes-deverra-beverly/"],
        ["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections/"],
        ["Operation ABLE","/operation-able/"],
        ["ABLA News","/abla-news/"],
        ["ABLA News","/abla-news-2/"],
        ["ABLA Homes Update","/abla-homes-update/"],
        ["ABLA Relocation Report","/abla-relocation-report/"],
        ["The Magnificent Maya Angelou","/the-magnificent-maya-angelou/"],
        ["What's Happening in ABLA?","/whats-happening-in-abla/"]],
    "national public housing museum":[[
        "Remembering ABLA Homes' Deverra Beverly","/remembering-abla-homes-deverra-beverly/"],
        ["Why It's So Hard to End Poverty","/why-its-so-hard-to-end-poverty/"],
        ["An Afternoon of Good Times","/an-afternoon-of-good-times/"],
        ["Three Chicago Mayoral Candidates' Take on Public Housing","/1803/"],
        ["An Inside Out Experience","/an-inside-out-experience/"]],
    "Chicago River":[[
        "My First Kayaking Trip","/my-first-kayaking-trip/"],
        ["A River Adventure","/a-river-adventure/"]],
    "eviction":[[
        "Another CHA Chief Bows Out","/another-cha-chief-bows-out/"],
        ["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["Winners from the Resident Survey!","/winners-from-the-resident-survey/"],
        ["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1/"],
        ["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants/"],
        ["Is Chase Bank a Slumlord?","/is-chase-bank-a-slumlord/"],
        ["Low-income Tenants Rally at Chase Bank","/low-income-tenants-rally-at-chase-bank/"],
        ["You Have Been Served","/you-have-been-served/"],
        ["Last Day in 4525","/last-day-in-4525/"],
        ["Harold Ickes New School Update","/harold-ickes-new-school-update/"],
        ["Squatters Worry About Homelessness","/squatters-worry-about-homelessness/"],
        ["A 'One Strike' Battle Planned","/a-one-strike-battle-planned/"],
        ["A Section 8 Recipient's Painful Reality","/a-section-8-recipients-painful-reality/"],
        ["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"],
        ["Squatters in CHA","/squatters-in-cha/"],
        ["Don't Rock The Boat","/dont-rock-the-boat/"],
        ["Del Prado Residents Face Uncertainty","/del-prado-residents-face-uncertainty/"],
        ["Transforming CHA: One Strike Woes","/transforming-cha-one-strike-woes/"],
        ["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike/"],
        ["L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike/"],
        ["Flannery Homes News","/flannery-homes-news/"]],
    "Democratic party":[[
        "We The People Media in the News","/we-the-people-media-in-the-news-3/"],
        ["The Sound of Silence","/the-sound-of-silence/"],
        ["Vote '96: Conventional Colors","/vote-96-conventional-colors-2/"]],
    "gang violence":[[
        "We The People Media in the News","/we-the-people-media-in-the-news-3/"],
        ["Meet the Real Robeson High School","/meet-the-real-robeson-high-school/"],
        ["Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street/"],
        ["We The People Media's Coverage of the Chicago Mayor's Race","/we-the-people-medias-coverage-of-the-chicago-mayors-race/"],
        ["Torture Victim Reflects on Burge Sentence","/torture-victim-reflects-on-burge-sentence/"],
        ["Residents' Journal Reporters Share Results of Youth Surveys","/residents-journal-reporters-share-results-of-youth-surveys/"],
        ["What We Need Now","/what-we-need-now/"]],
    "Metra":[[
        "We The People Media in the News","/we-the-people-media-in-the-news-3/"]],
    "Republican Party":[[
        "We The People Media in the News","/we-the-people-media-in-the-news-3/"]],
    "Asian Carp":[[
        "The Invasion of the Great Lakes","/the-invasion-of-the-great-lakes/"],
        ["Asian Carp is a Man-Made Issue","/asian-carp-is-a-man-made-issue/"],
        ["Chasing the “Blue Whale of Freshwater”","/chasing-the-blue-whale-of-freshwater/"],
        ["Shedd Aquarium Showcases Invasive Species","/shedd-aquarium-showcases-invasive-species/"]],
    "Great Lakes":[[
        "The Invasion of the Great Lakes","/the-invasion-of-the-great-lakes/"],
        ["Asian Carp is a Man-Made Issue","/asian-carp-is-a-man-made-issue/"],
        ["Chasing the “Blue Whale of Freshwater”","/chasing-the-blue-whale-of-freshwater/"],
        ["Shedd Aquarium Showcases Invasive Species","/shedd-aquarium-showcases-invasive-species/"]],
    "Knight Center for Environmental Journalism":[[
        "The Invasion of the Great Lakes","/the-invasion-of-the-great-lakes/"],
        ["Shedd Aquarium Showcases Invasive Species","/shedd-aquarium-showcases-invasive-species/"],
        ["Little Village Toxic Tour","/little-village-toxic-tour/"],
        ["The Health Effects of Pollution in Pilsen","/the-health-effects-of-pollution-in-pilsen/"],
        ["Lead and Coal Plants in Pilsen","/lead-and-coal-plants-in-pilsen/"],
        ["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery/"]],
    "the enviornment":[[
        "The Invasion of the Great Lakes","/the-invasion-of-the-great-lakes/"],
        ["Preserving History and Ecology","/preserving-history-and-ecology/"],
        ["Chicagoans Will Fish, Contamination or Not","/chicagoans-will-fish-contamination-or-not/"],
        ["Residents' Journal Reporters Share Results of Youth Surveys","/residents-journal-reporters-share-results-of-youth-surveys/"]],
    "Notre Dame":[[
        "Chasing the “Blue Whale of Freshwater”","/chasing-the-blue-whale-of-freshwater/"]],
    "Ida B. Wells":[[
        "Oakwood Shores Update","/oakwood-shores-update/"],
        ["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["Black Pioneers Honored","/black-pioneers-honored/"],
        ["Ida B. Wells Revisited","/ida-b-wells-revisited-2/"],
        ["Residents' Journal Coverage of the Recent Demolition of the Last CHA Ida B. Wells Homes Buildings","/residents-journal-coverage-of-the-recent-demolition-of-the-last-cha-ida-b-wells-homes-buildings/"],
        ["Everyday Life","/everyday-life/"],
        ["Stereotypes","/stereotypes/"],
        ["A Year Later","/a-year-later/"],
        ["Growing Up","/growing-up/"],
        ["This Ain't That","/this-aint-that/"],
        ["Me and My Hood","/me-and-my-hood/"],
        ["Troubling Development Update","/troubling-development-update/"],
        ["Positive People","/positive-people-2/"],
        ["Stop The Violence","/stop-the-violence-15/"],
        ["Ida B. Wells Reunion","/ida-b-wells-reunion/"],
        ["Inner-City Truths: A Book Review","/inner-city-truths-a-book-review/"],
        ["Wells on the Rise","/wells-on-the-rise/"],
        ["A Short History of Ida B. Wells","/a-short-history-of-ida-b-wells/"]],
    "redevelopment":[[
        "Oakwood Shores Update","/oakwood-shores-update/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news-2/"],
        ["Tenants Protest CHA’s Plans for Lathrop","/tenants-protest-chas-plans-for-lathrop/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news/"],
        ["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["Closing the CTA Red Line","/closing-the-cta-red-line/"],
        ["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1/"],
        ["Charlotte Housing Authority Chief takes CHA Position","/charlotte-housing-authority-chief-takes-cha-position/"],
        ["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha/"],
        ["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom/"],
        ["Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street/"],
        ["Robert Taylor On Line","/robert-taylor-on-line/"],
        ["Residents Blame CHA for School Closures","/residents-blame-cha-for-school-closures/"],
        ["Who Could Miss The Hole?","/who-could-miss-the-hole/"],
        ["Residents: What People Want","/residents-what-people-want/"],
        ["Deadly Moves - an update","/deadly-moves-an-update/"],
        ["Bronzeville Community Alert","/bronzeville-community-alert/"],
        ["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2/"],
        ["Oops, They Did It Again","/oops-they-did-it-again/"],
        ["Getting to Know Rockwell","/getting-to-know-rockwell/"],
        ["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing/"],
        ["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects/"],
        ["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas/"],
        ["Myths and Urban Legends","/myths-and-urban-legends/"],
        ["Stop The Violence","/stop-the-violence-11/"],
        ["Relocation Rights Contract","/relocation-rights-contract/"],
        ["CAC Prepares for Battle","/cac-prepares-for-battle/"],
        ["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history/"],
        ["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"],
        ["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing/"],
        ["A Trip To The Future","/a-trip-to-the-future/"],
        ["Razing the Brooks Extension","/razing-the-brooks-extension/"],
        ["Ickes: Back To Square One","/ickes-back-to-square-one/"],
        ["Transforming CHA: Chewing Up Tobacco Road","/transforming-cha-chewing-up-tobacco-road/"],
        ["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan/"],
        ["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues/"],
        ["Transforming CHA: Washington Park Wants Answers","/transforming-cha-washington-park-wants-answers/"],
        ["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting/"],
        ["Cold War Echoes","/cold-war-echoes/"],
        ["Cabrini Cliffhanger","/cabrini-cliffhanger/"],
        ["CHA Announces First Clean Audit","/cha-announces-first-clean-audit/"],
        ["A Decree But to What Degree?","/a-decree-but-to-what-degree/"],
        ["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center/"],
        ["Dear Resident","/dear-resident-8/"],
        ["Washington Park: The Dying Hope","/washington-park-the-dying-hope/"]],
    "relocation":[[
        "Oakwood Shores Update","/oakwood-shores-update/"],
        ["We The People Media in the News","/we-the-people-media-in-the-news-2/"],
        ["Tenants Protest CHA’s Plans for Lathrop","/tenants-protest-chas-plans-for-lathrop/"],
        ["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["CHA Opens Wait List in Lincoln Square","/cha-opens-wait-list-in-lincoln-square/"],
        ["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1/"],
        ["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants/"],
        ["Charlotte Housing Authority Chief takes CHA Position","/charlotte-housing-authority-chief-takes-cha-position/"],
        ["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha/"],
        ["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom/"],
        ["Relocation Rights Duel","/relocation-rights-duel/"],
        ["Robert Taylor On Line","/robert-taylor-on-line/"],
        ["CHA Seniors Keep Waiting to Return Home","/cha-seniors-keep-waiting-to-return-home/"],
        ["The Aftermath of Relocation","/the-aftermath-of-relocation/"],
        ["The Pros and Cons of Relocation","/pros-and-cons-of-relocation/"],
        ["Publisher's Box","/publishers-box-2/"],
        ["A Taylor-Made Election","/a-taylor-made-election/"],
        ["Wipe Out","/wipe-out/"],
        ["Deadly Moves - an update","/deadly-moves-an-update/"],
        ["Closure Razes Resident Hopes","/closure-razes-resident-hopes/"],
        ["Harold Ickes News","/harold-ickes-news-4/"],
        ["You Have Been Served","/you-have-been-served/"],
        ["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2/"],
        ["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves/"],
        ["Positive People","/positive-people-3/"],
        ["Harold Ickes News","/harold-ickes-news-6/"],
        ["Positive People","/positive-people-4/"],
        ["Getting to Know Rockwell","/getting-to-know-rockwell/"],
        ["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing/"],
        ["Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha/"],
        ["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas/"],
        ["A Report On Management at Ogden Courts","/a-report-on-management-at-ogden-courts/"],
        ["Thomas Sullivan Report Update","/thomas-sullivan-report-update/"],
        ["The Shocking Truth about CHA","/the-shocking-truth-about-cha/"],
        ["Homeless Not Hopeless","/homeless-not-hopeless/"],
        ["Residents Sue CHA","/residents-sue-cha/"],
        ["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations/"],
        ["National Housing Crisis","/national-housing-crisis/"],
        ["CHA Puts Resident In Storage","/cha-puts-resident-in-storage/"],
        ["South Suburban Living","/south-suburban-living/"],
        ["Electrically Charged","/electrically-charged/"],
        ["Last Day in 4525","/last-day-in-4525/"],
        ["Housing Crisis in Highland Park","/housing-crisis-in-highland-park/"],
        ["Relocation Rights Contract","/relocation-rights-contract/"],
        ["Maintenance Defects at Ogden Courts","/maintenance-defects-at-ogden-courts/"],
        ["Shocking Electric Bills Update","/shocking-electric-bills-update/"],
        ["CAC Prepares for Battle","/cac-prepares-for-battle/"],
        ["Shocking Electric Bills","/shocking-electric-bills/"],
        ["Drug War Diagnosis","/drug-war-diagnosis/"],
        ["A Savory Survey","/a-savory-survey/"],
        ["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8/"],
        ["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"],
        ["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing/"],
        ["Squatters in CHA","/squatters-in-cha/"],
        ["Don't Rock The Boat","/dont-rock-the-boat/"],
        ["Razing the Brooks Extension","/razing-the-brooks-extension/"],
        ["Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place/"],
        ["Transforming CHA: Chewing Up Tobacco Road","/transforming-cha-chewing-up-tobacco-road/"],
        ["Transforming CHA: Making Connections","/transforming-cha-making-connections/"],
        ["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan/"],
        ["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation/"],
        ["Residents Fight Vacate Orders","/residents-fight-vacate-orders/"],
        ["Washington Park: The Dying Hope","/washington-park-the-dying-hope/"],
        ["What's Happening in ABLA?","/whats-happening-in-abla/"]],
    "food deserts":[[
        "A Protest Success Story","/a-protest-success-story/"],
        ["New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts/"]],
    "Englewood community":[[
        "What's So Great about Football?","/whats-so-great-about-football/"],
        ["It's Time to Focus on Bullying","/its-time-to-focus-on-bullying/"],
        ["Meet the Real Robeson High School","/meet-the-real-robeson-high-school/"],
        ["Healthy Ways to Fight Lead Poisoning","/healthy-ways-to-fight-lead-poisoning/"],
        ["Mayor Emanuel Booed at Budget Town Hall","/mayor-emanuel-booed-at-budget-townhall-meeting/"],
        ["On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith/"],
        ["Youths Speak Out on Violence","/youths-speak-out-on-violence/"]],
    "football":[[
        "What's So Great about Football?","/whats-so-great-about-football/"]],
    "NFL":[[
        "What's So Great about Football?","/whats-so-great-about-football/"]],
    "Bullying":[[
        "It's Time to Focus on Bullying","/its-time-to-focus-on-bullying/"],
        ["From the Inside Looking Out: Bullying","/from-the-inside-looking-out-bullying/"]],
    "Chicago youth violence":[[
        "Meet the Real Robeson High School","/meet-the-real-robeson-high-school/"],
        ["Do Students Trust Authority?","/do-students-trust-authority/"]],
    "fracking":[[
        "Frack Attack in Illinois","/frack-attack-in-illinois/"]],
    "Governor Pat Quinn":[[
        "Frack Attack in Illinois","/frack-attack-in-illinois/"],
        ["Illinois Governor Applauded for Abolishing Death Penalty","/illinois-governor-applauded-for-abolishing-death-penalty/"]],
    "Michigan State University":[[
        "Frack Attack in Illinois","/frack-attack-in-illinois/"],
        ["Making a college visit count","/making-a-college-visit-count/"],
        ["A Weekend of Firsts","/a-weekend-of-firsts/"],
        ["Shedd Aquarium Showcases Invasive Species","/shedd-aquarium-showcases-invasive-species/"],
        ["The Health Effects of Pollution in Pilsen","/the-health-effects-of-pollution-in-pilsen/"],
        ["Lead and Coal Plants in Pilsen","/lead-and-coal-plants-in-pilsen/"],
        ["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery/"]],
    "farmers market":[[
        "The Altgeld Gardens Farmers Market: A Personal Perspective","/the-altgeld-gardens-farmers-market-a-personal-perspective/"]],
    "organic food":[[
        "The Altgeld Gardens Farmers Market: A Personal Perspective","/the-altgeld-gardens-farmers-market-a-personal-perspective/"]],
    "Sonia Sotomayor":[[
        "Supreme Court Justice Sonia Sotomayor visits Chicago","/supreme-court-justice-sonia-sotomayor-visits-chicago/"]],
    "U.S. Supreme Court":[[
        "Supreme Court Justice Sonia Sotomayor visits Chicago","/supreme-court-justice-sonia-sotomayor-visits-chicago/"]],
    "Chicago Freedom School":[[
        "Honoring Dr. King's Legacy","/honoring-dr-kings-legacy/"]],
    "Dr. Martin Luther King Jr.":[[
        "Honoring Dr. King's Legacy","/honoring-dr-kings-legacy/"],
        ["Remembering the Servitude of Dr. King","/remembering-the-servitude-of-dr-king/"]],
    "Henry Moore":[[
        "Chicago’s Nuclear History","/chicagos-nuclear-history/"]],
    "nuclear power":[[
        "Chicago’s Nuclear History","/chicagos-nuclear-history/"],
        ["Uranium: A Hidden Tragedy","/uranium-a-hidden-tragedy/"]],
    "University of Chicago":[[
        "Chicago’s Nuclear History","/chicagos-nuclear-history/"],
        ["Del Prado Residents Face Uncertainty","/del-prado-residents-face-uncertainty/"]],
    "gun-control":[[
        "We The People Media ED on Chicago Newsroom","/we-the-people-media-ed-on-chicago-newsroom/"],
        ["Stop The Violence","/stop-the-violence-5/"]],
    "environment":[[
        "Pilsen Gets Environmental Justice","/pilsen-gets-environmental-justice/"],
        ["Little Village Toxic Tour","/little-village-toxic-tour/"],
        ["Residents' Journal Publisher talking about an Environmental Project for Youth","/residents-journal-publisher-talking-about-an-environmental-project-for-youth/"],
        ["Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks/"],
        ["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues/"]],
    "poverty":[[
        "Why It's So Hard to End Poverty","/why-its-so-hard-to-end-poverty/"],
        ["U.S. Senate Candidate Daniel Hynes","/u-s-senate-candidate-daniel-hynes/"],
        ["The True Face of Poverty","/the-true-face-of-poverty/"],
        ["Myths and Urban Legends","/myths-and-urban-legends/"],
        ["Welfare Reform: Lost In Space","/welfare-reform-lost-in-space/"]],
    "President Barak Obama":[[
        "Why It's So Hard to End Poverty","/why-its-so-hard-to-end-poverty/"],
        ["Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d/"]],
    "President Clinton":[[
        "Why It's So Hard to End Poverty","/why-its-so-hard-to-end-poverty/"],
        ["Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d/"]],
    "welfare reform":[[
        "Why It's So Hard to End Poverty","/why-its-so-hard-to-end-poverty/"],
        ["Welfare Reform: Lost In Space","/welfare-reform-lost-in-space/"]],
    "Chicago Newsroom":[[
        "We The People Media in the News","/we-the-people-media-in-the-news/"]],
    "WBEZ":[[
        "We The People Media in the News","/we-the-people-media-in-the-news/"],
        ["CHA's New Plan?","/chas-new-plan/"],
        ["Residents' Journal Publisher on WBEZ","/residents-journal-publisher-on-wbez/"]],
    "television":[[
        "Does TV Affect Children's Behavior?","/does-tv-affect-childrens-behavior/"]],
    "youth violence":[[
        "Does TV Affect Children's Behavior?","/does-tv-affect-childrens-behavior/"],
        ["Commissioner Fails to Show at Mental Health Town Hall Meeting","/commissioner-fails-to-show-at-mental-health-town-hall/"],
        ["Youth Activists: Juvenile Inmates Treated Like Animals.","/youth-activists-juvenile-inmates-treated-like-animals/"],
        ["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom/"],
        ["On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith/"],
        ["Youths Speak Out on Violence","/youths-speak-out-on-violence/"],
        ["Do Students Trust Authority?","/do-students-trust-authority/"],
        ["RJ Youth Instructor Discussing Teen Project with Youth Reporter","/rj-youth-instructor-discussing-teen-project-with-youth-reporter/"],
        ["A Teens View of a recent Chicago Youth Summit","/residents-journal-can-tv-show-on-a-recent-chicago-youth-summit/"],
        ["Residents' Journal Reporters Share Results of Youth Surveys","/residents-journal-reporters-share-results-of-youth-surveys/"],
        ["RJ Reporter talking about Youth Media Project","/rj-reporter-talking-about-youth-media-project/"],
        ["Where I Come From","/where-i-come-from/"],
        ["African-American Male Suicides","/african-american-male-suicides/"],
        ["Stop the Violence","/stop-the-violence-12/"]],
    "Beyonce":[[
        "Beyonce is My Role Model","/beyonce-is-my-role-model/"]],
    "Jay-Z":[[
        "Beyonce is My Role Model","/beyonce-is-my-role-model/"]],
    "Hip Hop":[[
        "Hip Hop Star on the Rise","/hip-hop-star-on-the-rise/"],
        ["On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith/"]],
    "music":[[
        "Hip Hop Star on the Rise","/hip-hop-star-on-the-rise/"],
        ["The Compassionate Blues","/the-compassionate-blues/"]],
    "Pilsen":[[
        "Chicagoans Will Fish, Contamination or Not","/chicagoans-will-fish-contamination-or-not/"],
        ["Lead and Coal Plants in Pilsen","/lead-and-coal-plants-in-pilsen/"],
        ["Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell/"],
        ["Pilsen Guards Against Gentrifyers","/pilsen-guards-against-gentrifyers/"],
        ["Senior Rehab Update","/senior-rehab-update/"]],
    "employment":[[
        "CAC Releases Vision for the Future","/cac-releases-vision-for-the-future/"],
        ["Winners from the Resident Survey!","/winners-from-the-resident-survey/"],
        ["Residents' Journal Reporters Share Results of Youth Surveys","/residents-journal-reporters-share-results-of-youth-surveys/"],
        ["RJ Reporter talking about Youth Media Project","/rj-reporter-talking-about-youth-media-project/"],
        ["Stop the Violence","/stop-the-violence-2/"],
        ["Ex Marks The Spot","/ex-marks-the-spot/"],
        ["The Price of a Political Job","/the-price-of-a-political-job/"],
        ["War with Iraq: A Personal Perspective","/war-with-iraq-a-personal-perspective/"],
        ["Operation ABLE","/operation-able/"],
        ["Welfare Reform: Lost In Space","/welfare-reform-lost-in-space/"],
        ["Second Chance Legislation","/second-chance-legislation/"],
        ["Youths Rally For Summer Jobs","/youths-rally-for-summer-jobs/"],
        ["Transforming CHA: How To Save On Rent","/transforming-cha-how-to-save-on-rent/"],
        ["REDI: A New Beginning?","/redi-a-new-beginning/"],
        ["8,000 To Get Jobs Help","/8000-to-get-jobs-help/"],
        ["Stop the Violence II","/stop-the-violence-ii/"],
        ["Cabrini-Green Update","/cabrini-green-update/"],
        ["Safe Summer 97","/safe-summer-97/"]],
    "jane adams senior caucus":[[
        "Stopping Elder Abuse","/stopping-elder-abuse/"]],
    "Ida B Wells Homes":[[
        "Black Pioneers Honored","/black-pioneers-honored/"],
        ["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents/"]],
    "affordable housing":[[
        "CHA Opens Wait List in Lincoln Square","/cha-opens-wait-list-in-lincoln-square/"],
        ["CHA Opens Public Housing Wait List for South Side Neighborhoods","/cha-opens-public-housing-wait-list-for-specific-areas/"],
        ["State Passes Support for Renters","/state-passes-support-for-renters/"],
        ["Update: Zoning and Affordable Housing","/update-zoning-and-affordable-housing/"],
        ["2004 Election Focal Points","/2004-election-focal-points/"],
        ["Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park/"],
        ["U.S. Senate Candidate Barack Obama","/u-s-senate-candidate-barack-obama/"],
        ["Debating Affordable Housing","/debating-affordable-housing/"],
        ["Homeless Not Hopeless","/homeless-not-hopeless/"],
        ["Housing on State, City Agendas","/housing-on-state-city-agendas/"],
        ["National Housing Crisis","/national-housing-crisis/"],
        ["Housing Crisis in Highland Park","/housing-crisis-in-highland-park/"],
        ["Housing For The Disabled","/housing-for-the-disabled/"],
        ["The State Of Section 8","/the-state-of-section-8/"]],
    "waiting list":[[
        "CHA Opens Wait List in Lincoln Square","/cha-opens-wait-list-in-lincoln-square/"],
        ["CHA Opens Public Housing Wait List for South Side Neighborhoods","/cha-opens-public-housing-wait-list-for-specific-areas/"],
        ["Section 8 Update","/section-8-update/"],
        ["Focus On Section 8","/focus-on-section-8/"]],
    "CTA":[[
        "Closing the CTA Red Line","/closing-the-cta-red-line/"],
        ["$1 Billion for CTA","/1-billion-for-cta/"]],
    "CTA President Forrest Claypool":[[
        "Closing the CTA Red Line","/closing-the-cta-red-line/"],
        ["$1 Billion for CTA","/1-billion-for-cta/"]],
    "Terry Peterson":[[
        "Closing the CTA Red Line","/closing-the-cta-red-line/"],
        ["Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle/"],
        ["Victory at Bridgeport Homes","/victory-at-bridgeport-homes/"],
        ["A Questionable Connection","/a-questionable-connection/"]],
    "dangerous dogs":[[
        "Stray Dogs in Englewood","/stray-dogs-in-englewood/"]],
    "Douglas":[[
        "CHA Opens Public Housing Wait List for South Side Neighborhoods","/cha-opens-public-housing-wait-list-for-specific-areas/"]],
    "Fuller Park":[[
        "CHA Opens Public Housing Wait List for South Side Neighborhoods","/cha-opens-public-housing-wait-list-for-specific-areas/"]],
    "Kenwood":[[
        "CHA Opens Public Housing Wait List for South Side Neighborhoods","/cha-opens-public-housing-wait-list-for-specific-areas/"]],
    "New City":[[
        "CHA Opens Public Housing Wait List for South Side Neighborhoods","/cha-opens-public-housing-wait-list-for-specific-areas/"]],
    "Oakland":[[
        "CHA Opens Public Housing Wait List for South Side Neighborhoods","/cha-opens-public-housing-wait-list-for-specific-areas/"]],
    "Dearborn Homes":[[
        "Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1/"],
        ["Ickes Leader Challenges CHA CEO","/ickes-leader-challenges-cha-ceo/"],
        ["Publisher's Box","/publishers-box/"],
        ["Troubling Development Update","/troubling-development-update/"],
        ["Positive People","/positive-people-2/"],
        ["Stop The Violence","/stop-the-violence-11/"]],
    "Harold Ickes Homes":[[
        "Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1/"],
        ["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer/"],
        ["An Afternoon of Good Times","/an-afternoon-of-good-times/"],
        ["Ickes Homes News: The Final Curtain?","/ickes-homes-news-the-final-curtain/"],
        ["Harold Ickes Homes Update","/harold-ickes-homes-update/"],
        ["Ickes Leader Challenges CHA CEO","/ickes-leader-challenges-cha-ceo/"],
        ["Harold L. Ickes Homes News","/harold-l-ickes-homes-news/"],
        ["Harold Ickes News","/harold-ickes-news/"],
        ["Jackson Visits Ickes","/jackson-visits-ickes/"],
        ["Ickes and Other CHA News","/ickes-and-other-cha-news/"],
        ["CHA Development News","/cha-development-news/"],
        ["Troubling Development Update","/troubling-development-update/"],
        ["Harold Ickes News","/harold-ickes-news-2/"],
        ["Harold Ickes News","/harold-ickes-news-3/"],
        ["Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes/"],
        ["Harold Ickes News","/harold-ickes-news-4/"],
        ["Harold Ickes News","/harold-ickes-news-5/"],
        ["Harold Ickes News","/harold-ickes-news-6/"],
        ["Harold Ickes News","/harold-ickes-news-7/"],
        ["Harold Ickes Service Connectors","/harold-ickes-service-connectors/"],
        ["Harold Ickes News","/harold-ickes-news-8/"],
        ["Harold Ickes News","/harold-ickes-news-9/"],
        ["Harold Ickes New School Update","/harold-ickes-new-school-update/"],
        ["Harold Ickes News","/harold-ickes-news-10/"],
        ["Ickes' Homes New Managers","/ickes-homes-new-managers/"],
        ["Residents Look to the Hills","/residents-look-to-the-hills/"],
        ["Harold Ickes Homes News","/harold-ickes-homes-news/"],
        ["Ickes: Back To Square One","/ickes-back-to-square-one/"],
        ["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management/"],
        ["The New Teachers Academy","/the-new-teachers-academy/"],
        ["Transforming CHA: New Lights on Dark Passage","/transforming-cha-new-lights-on-dark-passage/"],
        ["All Things Old and New at Harold Ickes Homes","/all-things-old-and-new/"]],
    "Hilliard Homes":[[
        "Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1/"],
        ["Transforming CHA: New Lights on Dark Passage","/transforming-cha-new-lights-on-dark-passage/"]],
    "Stateway Gardens":[[
        "Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1/"],
        ["Who Could Miss The Hole?","/who-could-miss-the-hole/"],
        ["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force/"],
        ["A Championship Victory","/a-championship-victory/"],
        ["Positive Residents of the CHA","/positive-residents-of-the-cha/"],
        ["Residents Fight Vacate Orders","/residents-fight-vacate-orders/"]],
    "Washington Park":[[
        "Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1/"],
        ["Wipe Out","/wipe-out/"],
        ["Positive People","/positive-people/"],
        ["Washington Park: The Dying Hope","/washington-park-the-dying-hope/"]],
    "Grassroots Collaborative":[[
        "Rally against NATO, War and Poverty","/rally-against-nato-war-and-poverty/"]],
    "NATO":[[
        "Rally against NATO, War and Poverty","/rally-against-nato-war-and-poverty/"]],
    "protests":[[
        "Rally against NATO, War and Poverty","/rally-against-nato-war-and-poverty/"],
        ["Tenants Protest CHA Drug Testing Plan","/public-hearing-on-cha-drug-test-proposal/"],
        ["Tenants Protest CHA Plans to Drug Test Them","/2644/"],
        ["Chaos at the Bank of Lawndale","/chaos-at-the-bank-of-lawndale/"]],
    "housing":[[
        "Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer/"],
        ["Altgeld Tenants: Police, Cameras Not Improving Security","/altgeld-tenants-police-cameras-not-improving-security/"],
        ["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom/"],
        ["Special Investigation: CHA Wanted Kids’ Report Cards","/special-investigation-cha-wanted-kids%e2%80%99-report-cards/"],
        ["Where are CHA’s Residents?","/where-are-cha%e2%80%99s-residents/"],
        ["Cabrini rowhouses’ fate in jeopardy","/cabrini-rowhouses%e2%80%99-fate-in-jeopardy/"],
        ["A Third Generation’s Take on Relocation from Last Cabrini Building","/a-third-generation%e2%80%99s-take-on-relocation-from-last-cabrini-building/"],
        ["Residents' Journal Reporters Share Results of Youth Surveys","/residents-journal-reporters-share-results-of-youth-surveys/"],
        ["RJ Reporter talking about Youth Media Project","/rj-reporter-talking-about-youth-media-project/"],
        ["Robert Taylor On Line","/robert-taylor-on-line/"],
        ["Crystal Clear Views","/crystal-clear-views-4/"],
        ["A Trip To The Future","/a-trip-to-the-future/"],
        ["Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place/"],
        ["Project Based Section-8s Threatened","/project-based-section-8s-threatened/"],
        ["Transforming CHA: One Strike Woes","/transforming-cha-one-strike-woes/"],
        ["Cold War Echoes","/cold-war-echoes/"],
        ["L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike/"],
        ["Access Report","/access-report-2/"],
        ["Replacement Housing or Replacing People","/replacement-housing-or-replacing-people/"],
        ["Seniors form new organization","/seniors-form-new-organization/"]],
    "Illinois Teen Institute":[[
        "Learning about the world on a youth retreat","/learning-about-the-world-on-a-youth-retreat/"]],
    "Urban Youth International Journalism Program":[[
        "Making a college visit count","/making-a-college-visit-count/"],
        ["A Dream Come True","/a-dream-come-true/"],
        ["The Garden","/the-garden/"],
        ["The Transformation of Jason Moy","/the-transformation-of-jason-moy/"]],
    "Youth Journalism":[[
        "Making a college visit count","/making-a-college-visit-count/"],
        ["The Fish of Lake Michigan","/the-fish-of-lake-michigan/"],
        ["The Health Effects of Pollution in Pilsen","/the-health-effects-of-pollution-in-pilsen/"],
        ["A Dream Come True","/a-dream-come-true/"]],
    "leadership":[[
        "New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants/"],
        ["Wipe Out","/wipe-out/"],
        ["Positive People","/positive-people-2/"],
        ["Deadly Moves: In Too Deep","/deadly-moves-in-too-deep/"],
        ["Positive People","/positive-people-4/"],
        ["Representing Residents","/representing-residents/"],
        ["Positive Residents of the CHA","/positive-residents-of-the-cha/"],
        ["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents/"],
        ["Productive Men of the CHA","/productive-men-of-the-cha/"],
        ["CAC Prepares for Battle","/cac-prepares-for-battle/"],
        ["The Next CHA Chairman?","/the-next-cha-chairman/"],
        ["Farewell, Mr. Chairman","/farewell-mr-chairman/"],
        ["Chatting with Marie Billingsley","/chatting-with-marie-billingsley/"],
        ["The Life of Artensa Randolph","/the-life-of-artensa-randolph/"],
        ["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center/"],
        ["Stop the Violence","/stop-the-violence-17/"],
        ["Marion...Marion Stamps","/marion-marion-stamps/"]],
    "Ethan Michaeli":[[
        "CHA's New Plan?","/chas-new-plan/"]],
    "Imagine Englewood If":[[
        "Healthy Ways to Fight Lead Poisoning","/healthy-ways-to-fight-lead-poisoning/"],
        ["Remembering the Servitude of Dr. King","/remembering-the-servitude-of-dr-king/"],
        ["Being emo","/being-emo/"],
        ["The Bow Campaign","/the-bow-campaign/"],
        ["Marching in Washington","/marching-in-washington/"],
        ["Youths Speak Out on Violence","/youths-speak-out-on-violence/"]],
    "Lead poisoning":[[
        "Healthy Ways to Fight Lead Poisoning","/healthy-ways-to-fight-lead-poisoning/"]],
    "Black Heritage":[[
        "John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp/"]],
    "Ebony Magazine":[[
        "John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp/"]],
    "Emmett Louis Till":[[
        "John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp/"]],
    "Jesse Jackson Jr":[[
        "John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp/"]],
    "Jet Magazine":[[
        "John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp/"]],
    "John H. Johnson":[[
        "John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp/"]],
    "Johnson Publishing Company":[[
        "John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp/"]],
    "U.S. Postal Service":[[
        "John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp/"]],
    "U.S. Rep.":[[
        "John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp/"]],
    "U.S. Rep. Bobby L. Rush":[[
        "John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp/"]],
    "U.S. Rep. Danny K. Davis":[[
        "John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp/"]],
    "Chicago Blackhawks":[[
        "Blackhawks Host CHA Kids","/blackhawks-host-cha-kids/"]],
    "hockey":[[
        "Blackhawks Host CHA Kids","/blackhawks-host-cha-kids/"]],
    "Sixth Grace Presbyterian Church":[[
        "Remembering the Servitude of Dr. King","/remembering-the-servitude-of-dr-king/"]],
    "WVON":[[
        "Remembering the Servitude of Dr. King","/remembering-the-servitude-of-dr-king/"],
        ["Black History Through Performance","/black-history-through-performance/"]],
    "Fair trade clothing":[[
        "Fair Trade Clothing","/fair-trade-clothing/"]],
    "Luke O'Toole Elementary School":[[
        "Fair Trade Clothing","/fair-trade-clothing/"]],
    "Mata Traders":[[
        "Fair Trade Clothing","/fair-trade-clothing/"]],
    "Chicago City Council":[[
        "Group Carols to Save Mental Health Clinics","/group-carols-to-save-mental-health-clinics/"],
        ["On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith/"],
        ["Debating Affordable Housing","/debating-affordable-housing/"]],
    "Chicago Department of Public Health":[[
        "Group Carols to Save Mental Health Clinics","/group-carols-to-save-mental-health-clinics/"]],
    "Chicago Mental Health Movement":[[
        "Group Carols to Save Mental Health Clinics","/group-carols-to-save-mental-health-clinics/"]],
    "Mayor Rahm Emanuel":[[
        "Group Carols to Save Mental Health Clinics","/group-carols-to-save-mental-health-clinics/"],
        ["$1 Billion for CTA","/1-billion-for-cta/"],
        ["New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts/"],
        ["Mayor Emanuel Booed at Budget Town Hall","/mayor-emanuel-booed-at-budget-townhall-meeting/"],
        ["Residents' Journal Publisher on WBEZ","/residents-journal-publisher-on-wbez/"]],
    "news":[[
        "Group Carols to Save Mental Health Clinics","/group-carols-to-save-mental-health-clinics/"],
        ["Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update/"],
        ["Altgeld Gardens Report","/altgeld-gardens-report/"],
        ["Flannery Homes News","/flannery-homes-news/"]],
    "4-H Children’s Garden":[[
        "A Weekend of Firsts","/a-weekend-of-firsts/"]],
    "environmental journalism":[[
        "A Weekend of Firsts","/a-weekend-of-firsts/"]],
    "Union Station":[[
        "A Weekend of Firsts","/a-weekend-of-firsts/"]],
    "WKAR":[[
        "A Weekend of Firsts","/a-weekend-of-firsts/"]],
    "Emo":[[
        "Being emo","/being-emo/"]],
    "Three Days Grace":[[
        "Being emo","/being-emo/"]],
    "Bronzeville":[[
        "Occupiers, Officials Try to Help Homeowners","/occupiers-officials-try-to-help-homeowners/"],
        ["Honoring Sam Cooke","/honoring-sam-cooke/"],
        ["Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks/"],
        ["Should Liquor Stores Be Banned in Bronzeville?","/should-liquor-stores-be-banned-in-bronzeville/"],
        ["Residents' Journal Senior Reporter Discussing a Bronzeville Family History Research Project","/residents-journal-senior-reporter-discussing-a-bronzeville-family-history-research-project/"],
        ["A Day in the Life of a JROTC Cadet","/a-day-in-the-life-of-a-jrotc-cadet/"],
        ["Youths Testify for Alternative Schools","/youths-testify-for-alternative-schools/"],
        ["Black Metropolis National Heritage Area Project","/black-metropolis-national-heritage-area-project/"],
        ["Bronzeville Community Alert","/bronzeville-community-alert/"],
        ["Chicago's Hottest Elections","/chicagos-hottest-elections/"],
        ["HIV/AIDs Crisis","/hivaids-crisis/"]],
    "home foreclosure":[[
        "Occupiers, Officials Try to Help Homeowners","/occupiers-officials-try-to-help-homeowners/"]],
    "Illinois Attorney General's Office":[[
        "Occupiers, Officials Try to Help Homeowners","/occupiers-officials-try-to-help-homeowners/"]],
    "Illinois Institute of Technology":[[
        "Occupiers, Officials Try to Help Homeowners","/occupiers-officials-try-to-help-homeowners/"]],
    "Occupy Chicago":[[
        "Occupiers, Officials Try to Help Homeowners","/occupiers-officials-try-to-help-homeowners/"]],
    "Occupy Wall Street":[[
        "Occupiers, Officials Try to Help Homeowners","/occupiers-officials-try-to-help-homeowners/"]],
    "homelessness":[[
        "New Report: Homeless Being Criminalized","/new-report-homeless-being-criminalizing/"],
        ["Residents' Journal Reporters Share Results of Youth Surveys","/residents-journal-reporters-share-results-of-youth-surveys/"],
        ["RJ Reporter talking about Youth Media Project","/rj-reporter-talking-about-youth-media-project/"],
        ["HUD Renews 19 States’ HIV/AIDS Supportive Housing Programs","/hud-renews-19-states%e2%80%99-hivaids-supportive-housing-programs/"],
        ["Homeless Vets Speak Out","/homeless-vets-speak-out/"],
        ["CHA New Work Rule Questioned","/cha-new-work-rule-questioned/"],
        ["State Passes Support for Renters","/state-passes-support-for-renters/"],
        ["2004 Election Focal Points","/2004-election-focal-points/"],
        ["Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park/"],
        ["Crystal Clear Views","/crystal-clear-views-9/"],
        ["National Housing Crisis","/national-housing-crisis/"],
        ["CHA Puts Resident In Storage","/cha-puts-resident-in-storage/"],
        ["Last Day in 4525","/last-day-in-4525/"],
        ["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8/"]],
    "National Law Center on Homelessness and Poverty":[[
        "New Report: Homeless Being Criminalized","/new-report-homeless-being-criminalizing/"]],
    "CHA Altgeld Gardens":[[
        "Parents Protest CPS Turn-Arounds","/parents-protest-cps-turn-arounds/"],
        ["Altgeld’s New Library","/altgeld%e2%80%99s-new-library/"],
        ["My trip to Paris","/my-trip-to-paris/"],
        ["Altgeld Youth Protest Lack of Library","/altgeld-youth-protest-lack-of-library/"]],
    "Jean-Claude Brizard":[[
        "Parents Protest CPS Turn-Arounds","/parents-protest-cps-turn-arounds/"]],
    "Kenwood Oakland Community Organization":[[
        "Parents Protest CPS Turn-Arounds","/parents-protest-cps-turn-arounds/"],
        ["Is CHA Holding Vacant Apartments?","/is-cha-holding-vacant-apartments/"],
        ["Residents' Journal Editor-in-chief talking about Summer Youth Employment","/residents-journal-editor-in-chief-talking-about-summer-youth-employment/"]],
    "Chicago violence":[[
        "Local Pastor Camps out on Motel Roof to Highlight Area Violence","/local-pastor-camps-out-on-motel-roof-to-highlight-area-violence/"],
        ["CAN TV Devotes Entire Day Programming to “Stop the Violence” in the City of Chicago","/can-tv-devotes-entire-day-programming-to-stop-the-violence-in-the-city-of-chicago/"],
        ["CPS Fan Restrictions","/cps-fan-restrictions/"],
        ["Growing Up","/growing-up/"],
        ["Stop The Violence","/stop-the-violence-7/"],
        ["Stop The Violence","/stop-the-violence-9/"],
        ["Lathrop News","/lathrop-news/"],
        ["Stop The Violence","/stop-the-violence-10/"],
        ["Stop The Violence","/stop-the-violence-13/"],
        ["Stop The Violence","/stop-the-violence-14/"]],
    "New Beginnings Church":[[
        "Local Pastor Camps out on Motel Roof to Highlight Area Violence","/local-pastor-camps-out-on-motel-roof-to-highlight-area-violence/"]],
    "Super Motel":[[
        "Local Pastor Camps out on Motel Roof to Highlight Area Violence","/local-pastor-camps-out-on-motel-roof-to-highlight-area-violence/"]],
    "Woodlawn":[[
        "Local Pastor Camps out on Motel Roof to Highlight Area Violence","/local-pastor-camps-out-on-motel-roof-to-highlight-area-violence/"],
        ["On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith/"],
        ["Harold Ickes Service Connectors","/harold-ickes-service-connectors/"]],
    "Central Advisory Council":[[
        "Tenants' Lawyer: CHA Drug Testing Policy Will End Up in Court","/tenants-lawyer-cha-drug-testing-policy-will-end-up-in-court/"],
        ["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph/"]],
    "CHA Lakefront Properties":[[
        "Tenants' Lawyer: CHA Drug Testing Policy Will End Up in Court","/tenants-lawyer-cha-drug-testing-policy-will-end-up-in-court/"]],
    "CHA mixed income communites":[[
        "Tenants' Lawyer: CHA Drug Testing Policy Will End Up in Court","/tenants-lawyer-cha-drug-testing-policy-will-end-up-in-court/"]],
    "drug testing residents":[[
        "Tenants' Lawyer: CHA Drug Testing Policy Will End Up in Court","/tenants-lawyer-cha-drug-testing-policy-will-end-up-in-court/"]],
    "Oakwood Shore":[[
        "Tenants' Lawyer: CHA Drug Testing Policy Will End Up in Court","/tenants-lawyer-cha-drug-testing-policy-will-end-up-in-court/"]],
    "Ald. Pat Dowell":[[
        "New Mandates for Chicago Public Schools","/new-mandates-for-chicago-public-schools/"],
        ["Pollution Affects Everyone","/pollution-affects-everyone/"]],
    "Chicago Teachers' Union":[[
        "New Mandates for Chicago Public Schools","/new-mandates-for-chicago-public-schools/"],
        ["Parents File Discrimination Complaint against CPS Promotion Policy for Elementary Students","/parents-file-discrimination-complaint-against-cps-promotion-policy-for-elementary-students/"],
        ["Under Fire, Board Closes Schools Anyway","/under-fire-board-closes-schools-anyway/"]],
    "Grand Boulevard Federation":[[
        "New Mandates for Chicago Public Schools","/new-mandates-for-chicago-public-schools/"]],
    "U.S. Sen. Mattie Hunter":[[
        "New Mandates for Chicago Public Schools","/new-mandates-for-chicago-public-schools/"]],
    "Ald. Harry Osterman":[[
        "CHA Reopens Landmark Senior Building","/cha-reopens-landmark-senior-building/"]],
    "CHA Plan for Transformation":[[
        "CHA Reopens Landmark Senior Building","/cha-reopens-landmark-senior-building/"],
        ["The CHA Plan Is Dead","/the-cha-plan-is-dead/"],
        ["Harold Ickes Homes Update","/harold-ickes-homes-update/"],
        ["CHA’s Safe Harbor Gets Bigger","/chas-safe-harbor-gets-bigger/"],
        ["Residents Blame CHA for School Closures","/residents-blame-cha-for-school-closures/"],
        ["CHA Seniors Keep Waiting to Return Home","/cha-seniors-keep-waiting-to-return-home/"]],
    "CHA Pomeroy Senior Apartments":[[
        "CHA Reopens Landmark Senior Building","/cha-reopens-landmark-senior-building/"]],
    "Illinois Office of Public Housing Director Steven Meiss":[[
        "CHA Reopens Landmark Senior Building","/cha-reopens-landmark-senior-building/"]],
    "Forrest Claypool":[[
        "$1 Billion for CTA","/1-billion-for-cta/"],
        ["Cook County Presidential Race","/cook-county-presidential-race/"]],
    "Gov. Pat Quinn":[[
        "$1 Billion for CTA","/1-billion-for-cta/"],
        ["Residents' Journal Editor-in-chief talking about Summer Youth Employment","/residents-journal-editor-in-chief-talking-about-summer-youth-employment/"],
        ["Disability Rights Advocates Protest, and Gov. Quinn Retreats","/disability-rights-advocates-protest-and-gov-quinn-retreats/"],
        ["Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d/"]],
    "Illinois Department of Transportation":[[
        "$1 Billion for CTA","/1-billion-for-cta/"]],
    "Chicago public school students":[[
        "Some Lathrop Kids Get a Bus, But Not All","/some-lathrop-kids-get-a-bus-but-not-all/"],
        ["Under Pressure: Students and Teachers on Stress","/under-pressure-students-and-teachers-on-stress/"]],
    "Fredrick Jahn Elementary School":[[
        "Some Lathrop Kids Get a Bus, But Not All","/some-lathrop-kids-get-a-bus-but-not-all/"]],
    "Lathrop Homes":[[
        "Some Lathrop Kids Get a Bus, But Not All","/some-lathrop-kids-get-a-bus-but-not-all/"],
        ["Is CHA Holding Vacant Apartments?","/is-cha-holding-vacant-apartments/"],
        ["CHA Board Meeting Crashed with Concerns","/cha-board-meeting-crashed-with-concerns/"],
        ["Lathrop Residents Want Vacant Units Occupied","/lathrop-residents-want-vacant-units-occupied/"],
        ["Lathrop Homes Targeted for Redevelopment","/lathrop-homes-targeted-for-redevelopment/"],
        ["Lathrop Homes News","/lathrop-homes-news/"],
        ["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents/"],
        ["Lathrop News","/lathrop-news/"],
        ["Lathrop Homes Private Management","/lathrop-homes-private-management/"],
        ["Productive Men of the CHA","/productive-men-of-the-cha/"],
        ["Lathrop Homes News","/lathrop-homes-news-2/"],
        ["Happy 60th, Lathrop Homes","/happy-60th-lathrop-homes/"],
        ["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road/"]],
    "Prescott Elementary School":[[
        "Some Lathrop Kids Get a Bus, But Not All","/some-lathrop-kids-get-a-bus-but-not-all/"]],
    "Cabrini Rowhouses":[[
        "Is CHA Holding Vacant Apartments?","/is-cha-holding-vacant-apartments/"],
        ["Cabrini-Green Residents Say Goodbye","/cabrini-green-residents-say-goodbye/"],
        ["CHA Board Meeting Crashed with Concerns","/cha-board-meeting-crashed-with-concerns/"],
        ["Cabrini Rowhouses Update","/cabrini-rowhouses-update/"],
        ["Cabrini rowhouses’ fate in jeopardy","/cabrini-rowhouses%e2%80%99-fate-in-jeopardy/"],
        ["A Third Generation’s Take on Relocation from Last Cabrini Building","/a-third-generation%e2%80%99s-take-on-relocation-from-last-cabrini-building/"]],
    "Chicago Housing Initiative":[[
        "Is CHA Holding Vacant Apartments?","/is-cha-holding-vacant-apartments/"]],
    "KOCO":[[
        "Is CHA Holding Vacant Apartments?","/is-cha-holding-vacant-apartments/"]],
    "Lake Parc Place":[[
        "Is CHA Holding Vacant Apartments?","/is-cha-holding-vacant-apartments/"]],
    "North Lawndale":[[
        "Is CHA Holding Vacant Apartments?","/is-cha-holding-vacant-apartments/"],
        ["New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts/"]],
    "Aldi's":[[
        "New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts/"]],
    "Austin":[[
        "New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts/"]],
    "Calument":[[
        "New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts/"]],
    "Grand Boulevard":[[
        "New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts/"]],
    "Michelle Obama":[[
        "New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts/"]],
    "Near West Side":[[
        "New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts/"],
        ["CHA Launches Initiative to House Women Ex-Offenders","/cha-launches-initiative-to-house-women-ex-offenders/"]],
    "Norgan Park":[[
        "New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts/"]],
    "Roseland":[[
        "New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts/"]],
    "Roundy's Supermarket":[[
        "New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts/"]],
    "Sav-a-lot":[[
        "New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts/"]],
    "Wal-Mart":[[
        "New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts/"]],
    "Walgreens":[[
        "New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts/"]],
    "West Publlman":[[
        "New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts/"]],
    "exoffenders":[[
        "Ex-Offenders Strive For Better","/ex-offenders-strive-for-better/"]],
    "Chciago Housing Authority":[[
        "Ida B. Wells Revisited","/ida-b-wells-revisited-2/"]],
    "Oakwood Shores":[[
        "Ida B. Wells Revisited","/ida-b-wells-revisited-2/"],
        ["Discussing the Oakwood Shores Mixed-Income Community","/residents-journal-reporter-talking-about-opportunities-for-public-housing-tenants-at-the-cha-oakwood-shores-mixed-income-community/"],
        ["A Year Later","/a-year-later/"],
        ["This Ain't That","/this-aint-that/"],
        ["Penalties","/penalties/"]],
    "Bud Biliken Parade":[[
        "THE BIG BAD BOLD BUD BILLIKEN PARADE","/the-big-bad-bold-bud-billiken-parade/"]],
    "Chicago Bud Biliken Parade":[[
        "THE BIG BAD BOLD BUD BILLIKEN PARADE","/the-big-bad-bold-bud-billiken-parade/"]],
    "South Shore Drill Team":[[
        "THE BIG BAD BOLD BUD BILLIKEN PARADE","/the-big-bad-bold-bud-billiken-parade/"]],
    "Chicago public houisng":[[
        "Elementary School Students Suffer from CHA Relocations","/elementary-school-students-suffer-from-cha-relocations/"],
        ["Residents' Journal Coverage of the Recent Demolition of the Last CHA Ida B. Wells Homes Buildings","/residents-journal-coverage-of-the-recent-demolition-of-the-last-cha-ida-b-wells-homes-buildings/"]],
    "Latrhop Homes":[[
        "Elementary School Students Suffer from CHA Relocations","/elementary-school-students-suffer-from-cha-relocations/"]],
    "the CHA":[[
        "Elementary School Students Suffer from CHA Relocations","/elementary-school-students-suffer-from-cha-relocations/"]],
    "Access Living":[[
        "Protestors Rally to Keep Medicaid Services","/protestors-rally-to-keep-medicaid-services/"],
        ["Disability Advocates Target Troubled Nursing Home","/disability-advocates-target-troubled-nursing-home/"],
        ["Senior Services 2005 and Beyond","/senior-services-2005-and-beyond/"],
        ["Making CHA Accessible","/making-cha-accessible/"]],
    "Congressional Super Committee":[[
        "Protestors Rally to Keep Medicaid Services","/protestors-rally-to-keep-medicaid-services/"]],
    "Medicaid":[[
        "Protestors Rally to Keep Medicaid Services","/protestors-rally-to-keep-medicaid-services/"],
        ["Choosing Between Food and Medicine","/choosing-between-food-and-medicine/"],
        ["The High Cost of Medicine","/the-high-cost-of-medicine/"]],
    "medicare":[[
        "Protestors Rally to Keep Medicaid Services","/protestors-rally-to-keep-medicaid-services/"],
        ["Medicare Prescription Drug Benefit","/medicare-prescription-drug-benefit/"]],
    "people with disabilities":[[
        "Protestors Rally to Keep Medicaid Services","/protestors-rally-to-keep-medicaid-services/"],
        ["Disability Rights Advocates Protest, and Gov. Quinn Retreats","/disability-rights-advocates-protest-and-gov-quinn-retreats/"],
        ["Changes to Federal Affirmative Action Law Underway","/changes-to-federal-affirmative-action-law-underway/"],
        ["Access Report","/access-report/"]],
    "U.S. Senator Dick Durbin":[[
        "Protestors Rally to Keep Medicaid Services","/protestors-rally-to-keep-medicaid-services/"]],
    "U.S. Senator Mark Kirk":[[
        "Protestors Rally to Keep Medicaid Services","/protestors-rally-to-keep-medicaid-services/"]],
    "US Congress":[[
        "Protestors Rally to Keep Medicaid Services","/protestors-rally-to-keep-medicaid-services/"],
        ["Obama Urges Delay in Digital TV Shift","/obama-urges-delay-in-digital-tv-shift/"]],
    "Charles Woodyard":[[
        "Charlotte Housing Authority Chief takes CHA Position","/charlotte-housing-authority-chief-takes-cha-position/"]],
    "aviation":[[
        "Forgotten History: Lecture on Black Aviators","/forgotten-history-lecture-on-black-aviators/"]],
    "Bessie Coleman":[[
        "Forgotten History: Lecture on Black Aviators","/forgotten-history-lecture-on-black-aviators/"]],
    "DuSable Museum of African American History":[[
        "Forgotten History: Lecture on Black Aviators","/forgotten-history-lecture-on-black-aviators/"]],
    "Robbins":[[
        "Forgotten History: Lecture on Black Aviators","/forgotten-history-lecture-on-black-aviators/"]],
    "Tuskegee Airmen":[[
        "Forgotten History: Lecture on Black Aviators","/forgotten-history-lecture-on-black-aviators/"]],
    "Chicago Public Libraries":[[
        "Altgeld’s New Library","/altgeld%e2%80%99s-new-library/"]],
    "Phillis Wheatly Center":[[
        "Altgeld’s New Library","/altgeld%e2%80%99s-new-library/"]],
    "AUSA":[[
        "Corporate Partnership Builds a Public School Playground","/corporate-partnership-builds-a-public-school-playground/"]],
    "Coca Cola":[[
        "Corporate Partnership Builds a Public School Playground","/corporate-partnership-builds-a-public-school-playground/"]],
    "Howe Elementary School of Excellence":[[
        "Corporate Partnership Builds a Public School Playground","/corporate-partnership-builds-a-public-school-playground/"]],
    "playgrounds":[[
        "Corporate Partnership Builds a Public School Playground","/corporate-partnership-builds-a-public-school-playground/"]],
    "West Side":[[
        "Corporate Partnership Builds a Public School Playground","/corporate-partnership-builds-a-public-school-playground/"],
        ["Stop the Violence","/stop-the-violence-2/"],
        ["Tales of Lawndale Housing","/tales-of-lawndale-housing/"],
        ["Stop The Violence","/stop-the-violence-3/"],
        ["Getting to Know Rockwell","/getting-to-know-rockwell/"]],
    "Chicago Budget":[[
        "Mayor Emanuel Booed at Budget Town Hall","/mayor-emanuel-booed-at-budget-townhall-meeting/"]],
    "foreclosure":[[
        "Mayor Emanuel Booed at Budget Town Hall","/mayor-emanuel-booed-at-budget-townhall-meeting/"],
        ["Is Chase Bank a Slumlord?","/is-chase-bank-a-slumlord/"]],
    "townhall meeting":[[
        "Mayor Emanuel Booed at Budget Town Hall","/mayor-emanuel-booed-at-budget-townhall-meeting/"]],
    "CHA Youth":[[
        "Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives/"],
        ["CHA Youth Shopping Spree with Chicago Bears Player","/cha-youth-shopping-spree-with-chicago-bears-player/"]],
    "Residents Journal":[[
        "Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives/"],
        ["Dear Resident","/dear-resident-10/"]],
    "public houisng":[[
        "Residents' Journal Publisher and Editor Discussing Recent CHA Issues","/residents-journal-publisher-and-editor-discussing-recent-cha-issues/"]],
    "Shedd Aquarium":[[
        "Residents' Journal Reporters talking about Current Youth Articles","/residents-journal-staff-member-talking-to-an-urban-youth-international-journalism-program-student-about-her-news-reports-this-summer/"],
        ["Shedd Aquarium Showcases Invasive Species","/shedd-aquarium-showcases-invasive-species/"],
        ["The Fish of Lake Michigan","/the-fish-of-lake-michigan/"]],
    "mixed income":[[
        "Discussing the Oakwood Shores Mixed-Income Community","/residents-journal-reporter-talking-about-opportunities-for-public-housing-tenants-at-the-cha-oakwood-shores-mixed-income-community/"]],
    "Chicago Park District":[[
        "Altgeld Gardens Tries to Stay Cool","/altgeld-gardens-tries-to-stay-cool/"],
        ["The Price of a Political Job","/the-price-of-a-political-job/"],
        ["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds/"]],
    "Chicago Public Library":[[
        "Altgeld Gardens Tries to Stay Cool","/altgeld-gardens-tries-to-stay-cool/"]],
    "Cooling Centers":[[
        "Altgeld Gardens Tries to Stay Cool","/altgeld-gardens-tries-to-stay-cool/"]],
    "Heat Wave":[[
        "Altgeld Gardens Tries to Stay Cool","/altgeld-gardens-tries-to-stay-cool/"],
        ["How to Deal with the Next Heat Wave","/how-to-deal-with-the-next-heat-wave/"]],
    "ex-offenders":[[
        "CHA Launches Initiative to House Women Ex-Offenders","/cha-launches-initiative-to-house-women-ex-offenders/"],
        ["Stop the Violence","/stop-the-violence-2/"],
        ["Rush vs. Jackson","/rush-vs-jackson/"],
        ["Ex Marks The Spot","/ex-marks-the-spot/"],
        ["Sixth District Race Makes History","/sixth-district-race-makes-history/"],
        ["Second Chance Legislation","/second-chance-legislation/"]],
    "James Reynolds":[[
        "CHA Launches Initiative to House Women Ex-Offenders","/cha-launches-initiative-to-house-women-ex-offenders/"],
        ["CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo/"]],
    "Tax Increment Financing":[[
        "CHA Launches Initiative to House Women Ex-Offenders","/cha-launches-initiative-to-house-women-ex-offenders/"]],
    "Mental Health":[[
        "Commissioner Fails to Show at Mental Health Town Hall Meeting","/commissioner-fails-to-show-at-mental-health-town-hall/"]],
    "privatization":[[
        "Commissioner Fails to Show at Mental Health Town Hall Meeting","/commissioner-fails-to-show-at-mental-health-town-hall/"],
        ["Illinois Democrats Resist Social Security Privatization","/illinois-democrats-resist-social-security-privatization/"]],
    "State Rep. Mary Flowers":[[
        "Commissioner Fails to Show at Mental Health Town Hall Meeting","/commissioner-fails-to-show-at-mental-health-town-hall/"]],
    "STOP":[[
        "Commissioner Fails to Show at Mental Health Town Hall Meeting","/commissioner-fails-to-show-at-mental-health-town-hall/"],
        ["Battle Rages on for South Side Trauma Center","/battle-rages-on-for-south-side-trauma-center/"]],
    "Cabrini Green Rowhouses":[[
        "Mayor Continues Search for New CHA Head","/mayor-continues-search-for-new-cha-head/"]],
    "Chicago pubic housing":[[
        "Mayor Continues Search for New CHA Head","/mayor-continues-search-for-new-cha-head/"]],
    "Audy Home":[[
        "Youth Activists: Juvenile Inmates Treated Like Animals.","/youth-activists-juvenile-inmates-treated-like-animals/"]],
    "chicago crime":[[
        "Youth Activists: Juvenile Inmates Treated Like Animals.","/youth-activists-juvenile-inmates-treated-like-animals/"],
        ["Emanuel’s Anti-Crime Plan for Chicago if elected Mayor","/emanuel%e2%80%99s-anti-crime-plan-for-chicago-if-elected-mayor/"]],
    "Juvenile Court":[[
        "Youth Activists: Juvenile Inmates Treated Like Animals.","/youth-activists-juvenile-inmates-treated-like-animals/"],
        ["Stop the Violence","/stop-the-violence-12/"]],
    "Juvenile Justice":[[
        "Youth Activists: Juvenile Inmates Treated Like Animals.","/youth-activists-juvenile-inmates-treated-like-animals/"]],
    "Crawford Coal Plant":[[
        "A Toxic Tour of Little Village","/little-village-story/"],
        ["Little Village Toxic Tour","/little-village-toxic-tour/"]],
    "Little Village":[[
        "A Toxic Tour of Little Village","/little-village-story/"],
        ["Little Village Toxic Tour","/little-village-toxic-tour/"]],
    "Little Village Environmental Justice Organization":[[
        "A Toxic Tour of Little Village","/little-village-story/"]],
    "Toxic Tour":[[
        "A Toxic Tour of Little Village","/little-village-story/"]],
    "Indiana Dunes":[[
        "A New Start for the Indiana Dunes","/a-new-start-for-the-indiana-dunes/"]],
    "youth media":[[
        "A New Start for the Indiana Dunes","/a-new-start-for-the-indiana-dunes/"],
        ["My trip to Paris","/my-trip-to-paris/"],
        ["Do Students Trust Authority?","/do-students-trust-authority/"]],
    "Invasive Species":[[
        "Shedd Aquarium Showcases Invasive Species","/shedd-aquarium-showcases-invasive-species/"]],
    "Kari Lydersen":[[
        "Shedd Aquarium Showcases Invasive Species","/shedd-aquarium-showcases-invasive-species/"],
        ["Little Village Toxic Tour","/little-village-toxic-tour/"],
        ["The Health Effects of Pollution in Pilsen","/the-health-effects-of-pollution-in-pilsen/"],
        ["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery/"]],
    "journalism":[[
        "Little Village Toxic Tour","/little-village-toxic-tour/"],
        ["The Health Effects of Pollution in Pilsen","/the-health-effects-of-pollution-in-pilsen/"],
        ["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery/"],
        ["Residents' Journal Publisher talking about an Environmental Project for Youth","/residents-journal-publisher-talking-about-an-environmental-project-for-youth/"],
        ["Youth Media Reporter","/youth-media-reporter/"],
        ["Publisher's Box","/publishers-box-2/"],
        ["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves/"]],
    "We The People Media":[[
        "Little Village Toxic Tour","/little-village-toxic-tour/"],
        ["The Health Effects of Pollution in Pilsen","/the-health-effects-of-pollution-in-pilsen/"],
        ["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery/"],
        ["We The People Media's New Video Site","/we-the-people-medias-new-video-site/"],
        ["A new season of RJ TV","/a-new-season-of-rj-tv/"],
        ["The Spring 2009 Issue of Residents' Journal is Now Online","/the-spring-2009-issue-of-residents-journal-is-now-online/"]],
    "Chicago Public Radio":[[
        "Residents' Journal Publisher on WBEZ","/residents-journal-publisher-on-wbez/"]],
    "Chantell Suggs":[[
        "Former Youth Reporter, Now an Author!","/former-youth-reporter-now-an-author/"]],
    "Barack Obama":[[
        "Historical Gallery: Barack Obama","/historical-gallery-barack-obama/"],
        ["The Obama Cave","/the-obama-cave/"],
        ["Youths Take Charge","/youths-take-charge/"],
        ["Inauguration","/inauguration/"],
        ["Homeless Vets Speak Out","/homeless-vets-speak-out/"],
        ["Obama Urges Delay in Digital TV Shift","/obama-urges-delay-in-digital-tv-shift/"],
        ["Obama: Bush Administration Automaker Plan a “Necessary Step.”","/obama-bush-administration-automaker-plan-a-necessary-step/"],
        ["President-Elect Obama Nominates Former Senator Secretary of Health and Human Services","/president-elect-obama-nominates-former-senator-secretary-of-health-and-human-services/"],
        ["Statement from President-elect Barack Obama on Human Rights Day","/statement-from-president-elect-barack-obama-on-human-rights-day/"],
        ["Illinois Democrats Resist Social Security Privatization","/illinois-democrats-resist-social-security-privatization/"],
        ["Obama's Visit to Howard Alternative High School","/obamas-visit-to-howard-alternative-high-school/"],
        ["U.S. Senate Candidate Barack Obama","/u-s-senate-candidate-barack-obama/"]],
    "Illinois":[[
        "Historical Gallery: Barack Obama","/historical-gallery-barack-obama/"],
        ["State Passes Support for Renters","/state-passes-support-for-renters/"],
        ["Jones vs. Tatum","/jones-vs-tatum/"],
        ["Rush vs. Jackson","/rush-vs-jackson/"],
        ["Healthcare Justice Act Raises Hopes","/healthcare-justice-act-raises-hopes/"],
        ["2004 Election Focal Points","/2004-election-focal-points/"],
        ["Sixth District Race Makes History","/sixth-district-race-makes-history/"],
        ["2nd U.S. Congressional District Race","/2nd-u-s-congressional-district-race/"],
        ["U.S. Senate Candidate Joyce Washington","/u-s-senate-candidate-joyce-washington/"],
        ["U.S. Senate Candidate Gery Chico","/u-s-senate-candidate-gery-chico/"],
        ["U.S. Senate Candidate Daniel Hynes","/u-s-senate-candidate-daniel-hynes/"],
        ["U.S. Senate Candidate Blair Hull","/u-s-senate-candidate-blair-hull/"],
        ["U.S. Senate Candidate Barack Obama","/u-s-senate-candidate-barack-obama/"],
        ["8,000 To Get Jobs Help","/8000-to-get-jobs-help/"]],
    "Senate":[[
        "Historical Gallery: Barack Obama","/historical-gallery-barack-obama/"]],
    "Youth Coverage of Barack Obama":[[
        "Historical Gallery: Barack Obama","/historical-gallery-barack-obama/"],
        ["The Obama Cave","/the-obama-cave/"],
        ["Inauguration","/inauguration/"],
        ["Obama's Visit to Howard Alternative High School","/obamas-visit-to-howard-alternative-high-school/"]],
    "Eco Youth Reporters":[[
        "The Health Effects of Pollution in Pilsen","/the-health-effects-of-pollution-in-pilsen/"],
        ["Lead and Coal Plants in Pilsen","/lead-and-coal-plants-in-pilsen/"],
        ["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery/"]],
    "Coal-Fired Plants":[[
        "Lead and Coal Plants in Pilsen","/lead-and-coal-plants-in-pilsen/"]],
    "CHA Wentworth Gardens":[[
        "Remembering Ms. Amey","/remembering-ms-amey/"]],
    "Hallie Amey":[[
        "Remembering Ms. Amey","/remembering-ms-amey/"]],
    "Wentworth Gardens":[[
        "Remembering Ms. Amey","/remembering-ms-amey/"],
        ["Food Deserts","/food-deserts/"],
        ["Positive People","/positive-people-3/"],
        ["CHA Home Ownership: Wentworth Gardens","/cha-home-ownership-wentworth-gardens/"]],
    "drug testing":[[
        "Residents' Journal's Coverage of CHA Featured in Rise Magazine","/residents-journals-coverage-of-cha-featured-in-rise-magazine/"],
        ["CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo/"],
        ["Board Squashes CHA Drug Testing Plan","/board-squashes-cha-drug-testing-plan/"],
        ["Special Investigation: CHA Wanted Kids’ Report Cards","/special-investigation-cha-wanted-kids%e2%80%99-report-cards/"],
        ["Tenants Protest CHA Drug Testing Plan","/public-hearing-on-cha-drug-test-proposal/"],
        ["Tenants Protest CHA Plans to Drug Test Them","/2644/"],
        ["The CHA Plan Is Dead","/the-cha-plan-is-dead/"],
        ["An Invasion of Privacy?","/an-invasion-of-privacy/"]],
    "Foster Parents":[[
        "Residents' Journal's Coverage of CHA Featured in Rise Magazine","/residents-journals-coverage-of-cha-featured-in-rise-magazine/"]],
    "Lewis Jordan":[[
        "Residents' Journal's Coverage of CHA Featured in Rise Magazine","/residents-journals-coverage-of-cha-featured-in-rise-magazine/"],
        ["CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo/"],
        ["Ickes Leader Challenges CHA CEO","/ickes-leader-challenges-cha-ceo/"],
        ["CHA Report: Crime Rates Not Linked to CHA Relocatees","/cha-report-crime-rates-not-linked-to-cha-relocatees/"]],
    "Rise Magazine":[[
        "Residents' Journal's Coverage of CHA Featured in Rise Magazine","/residents-journals-coverage-of-cha-featured-in-rise-magazine/"]],
    "nutrition assistance programs":[[
        "USDA Contest to Celebrate Success in the Summer Food Service Program","/usda-contest-to-celebrate-success-in-the-summer-food-service-program/"]],
    "photo contest":[[
        "USDA Contest to Celebrate Success in the Summer Food Service Program","/usda-contest-to-celebrate-success-in-the-summer-food-service-program/"]],
    "Summer Food Service Program":[[
        "USDA Contest to Celebrate Success in the Summer Food Service Program","/usda-contest-to-celebrate-success-in-the-summer-food-service-program/"]],
    "USDA":[[
        "USDA Contest to Celebrate Success in the Summer Food Service Program","/usda-contest-to-celebrate-success-in-the-summer-food-service-program/"]],
    "summer jobs":[[
        "Residents' Journal Editor-in-chief talking about Summer Youth Employment","/residents-journal-editor-in-chief-talking-about-summer-youth-employment/"]],
    "Urban Youth International Journalism Youth Program":[[
        "Residents' Journal Publisher talking about an Environmental Project for Youth","/residents-journal-publisher-talking-about-an-environmental-project-for-youth/"]],
    "Clean Air":[[
        "Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell/"]],
    "Coal":[[
        "Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell/"]],
    "Fisk Coal Plant":[[
        "Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell/"]],
    "Greenpeace":[[
        "Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell/"]],
    "Kelly Mitchell":[[
        "Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell/"]],
    "Protesting":[[
        "Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell/"]],
    "Alderman Pat Dowell":[[
        "Honoring Sam Cooke","/honoring-sam-cooke/"]],
    "Alderman Will Burns":[[
        "Honoring Sam Cooke","/honoring-sam-cooke/"]],
    "Cook County Commissioner Jerry Ice Man Butler":[[
        "Honoring Sam Cooke","/honoring-sam-cooke/"]],
    "Doolittle Elementary":[[
        "Honoring Sam Cooke","/honoring-sam-cooke/"]],
    "Gospel":[[
        "Honoring Sam Cooke","/honoring-sam-cooke/"]],
    "Herb Kent The Cool Gent":[[
        "Honoring Sam Cooke","/honoring-sam-cooke/"]],
    "Sam Cooke":[[
        "Honoring Sam Cooke","/honoring-sam-cooke/"]],
    "Soul Music":[[
        "Honoring Sam Cooke","/honoring-sam-cooke/"]],
    "Toni Preckwinkle":[[
        "Honoring Sam Cooke","/honoring-sam-cooke/"],
        ["Debating Affordable Housing","/debating-affordable-housing/"],
        ["Housing on State, City Agendas","/housing-on-state-city-agendas/"],
        ["Chicago's Hottest Elections","/chicagos-hottest-elections/"]],
    "Taste of Chicago":[[
        "RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom/"]],
    "Carlos Ponce":[[
        "CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo/"]],
    "CHA credit cards":[[
        "CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo/"]],
    "resident drug testing":[[
        "CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo/"]],
    "France":[[
        "My trip to Paris","/my-trip-to-paris/"],
        ["A Dream Come True","/a-dream-come-true/"]],
    "Paris":[[
        "My trip to Paris","/my-trip-to-paris/"],
        ["A Dream Come True","/a-dream-come-true/"]],
    "People for Community Recovery":[[
        "My trip to Paris","/my-trip-to-paris/"],
        ["A Dream Come True","/a-dream-come-true/"],
        ["Recycling on the South Side","/recycling-on-the-south-side/"],
        ["Altgeld Gardens Lawsuit Settlement","/altgeld-gardens-lawsuit-settlement/"],
        ["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues/"]],
    "Youth Writers":[[
        "A Dream Come True","/a-dream-come-true/"]],
    "policits":[[
        "CHA Land Remains Vacant for Over a Decade (Commentary)","/cha-land-remains-vacant-for-over-a-decade-commentary/"]],
    "pulic housing":[[
        "CHA Land Remains Vacant for Over a Decade (Commentary)","/cha-land-remains-vacant-for-over-a-decade-commentary/"]],
    "civil rights":[[
        "Board Squashes CHA Drug Testing Plan","/board-squashes-cha-drug-testing-plan/"],
        ["A Championship Victory","/a-championship-victory/"],
        ["A Decree But to What Degree?","/a-decree-but-to-what-degree/"]],
    "public housing tenants":[[
        "Board Squashes CHA Drug Testing Plan","/board-squashes-cha-drug-testing-plan/"]],
    "Child Abuse":[[
        "The Bow Campaign","/the-bow-campaign/"],
        ["Residents' Journal Publisher talking about Deficiencies in DCFS System","/residents-journal-publisher-talking-about-deficiencies-in-dcfs-system/"]],
    "Parenting":[[
        "The Bow Campaign","/the-bow-campaign/"],
        ["Mothers Tackle Child Care Woes","/mothers-tackle-child-care-woes/"]],
    "CHA chief steps down":[[
        "CHA Chief Steps Down","/cha-chief-steps-down-after-credit-card-fiasco/"]],
    "CHA Chief steps down after Credit card fiasco":[[
        "CHA Chief Steps Down","/cha-chief-steps-down-after-credit-card-fiasco/"]],
    "privacy":[[
        "Special Investigation: CHA Wanted Kids’ Report Cards","/special-investigation-cha-wanted-kids%e2%80%99-report-cards/"]],
    "4th Amendment":[[
        "Tenants Protest CHA Drug Testing Plan","/public-hearing-on-cha-drug-test-proposal/"]],
    "CHA Tenants":[[
        "Tenants Protest CHA Drug Testing Plan","/public-hearing-on-cha-drug-test-proposal/"]],
    "housing conditions":[[
        "Tenants Protest CHA Drug Testing Plan","/public-hearing-on-cha-drug-test-proposal/"],
        ["Crystal Clear Views","/crystal-clear-views-4/"],
        ["Stop The Violence","/stop-the-violence-3/"],
        ["Stop The Violence","/stop-the-violence-18/"]],
    "One Strike":[[
        "Tenants Protest CHA Drug Testing Plan","/public-hearing-on-cha-drug-test-proposal/"],
        ["Stop the Violence","/stop-the-violence-2/"],
        ["Last Day in 4525","/last-day-in-4525/"],
        ["Harold Ickes News","/harold-ickes-news-9/"],
        ["A 'One Strike' Battle Planned","/a-one-strike-battle-planned/"],
        ["Don't Rock The Boat","/dont-rock-the-boat/"],
        ["Transforming CHA: One Strike Woes","/transforming-cha-one-strike-woes/"],
        ["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike/"],
        ["L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike/"],
        ["Flannery Homes News","/flannery-homes-news/"]],
    "rally":[[
        "Tenants Protest CHA Plans to Drug Test Them","/2644/"],
        ["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice/"],
        ["Youths Rally For Summer Jobs","/youths-rally-for-summer-jobs/"],
        ["Schools March for Victims","/schools-march-for-victims/"]],
    "vocalo 89.5 FM":[[
        "Residents' Journal Editor Appearing on Vocalo Radio","/residents-journal-editor-appearing-on-vocalo-radio/"]],
    "gardening":[[
        "The Garden","/the-garden/"]],
    "Growing Home":[[
        "The Garden","/the-garden/"]],
    "Kilbourn Organic Garden":[[
        "The Garden","/the-garden/"]],
    "South Side":[[
        "The Garden","/the-garden/"],
        ["Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street/"],
        ["Victory at Bridgeport Homes","/victory-at-bridgeport-homes/"],
        ["Wipe Out","/wipe-out/"],
        ["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management/"],
        ["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues/"],
        ["Transforming CHA: Washington Park Wants Answers","/transforming-cha-washington-park-wants-answers/"]],
    "UYIJP":[[
        "The Garden","/the-garden/"],
        ["The Transformation of Jason Moy","/the-transformation-of-jason-moy/"],
        ["Youth Media Reporter","/youth-media-reporter/"],
        ["Obama's Visit to Howard Alternative High School","/obamas-visit-to-howard-alternative-high-school/"]],
    "personal story":[[
        "The Transformation of Jason Moy","/the-transformation-of-jason-moy/"],
        ["Crystal Clear Views","/crystal-clear-views-2/"],
        ["Positive People","/positive-people/"],
        ["Deadly Moves: In Too Deep","/deadly-moves-in-too-deep/"],
        ["Traveling: From Therapy to Art","/traveling-from-therapy-to-art/"],
        ["A Teen's Shattered Dreams","/a-teens-shattered-dreams/"]],
    "transformation":[[
        "The Transformation of Jason Moy","/the-transformation-of-jason-moy/"]],
    "Boxing":[[
        "Boxing Keeps Dad's Memory Alive","/boxing-keeps-dads-memory-alive/"]],
    "Chicago Mayor":[[
        "New Mayor Emanuel’s Road Map for Chicago’s Future","/new-mayor-emanuel%e2%80%99s-road-map-for-chicago%e2%80%99s-future/"]],
    "Raham Emanuel":[[
        "New Mayor Emanuel’s Road Map for Chicago’s Future","/new-mayor-emanuel%e2%80%99s-road-map-for-chicago%e2%80%99s-future/"]],
    "Rahm Emauel Inaguration":[[
        "New Mayor Emanuel’s Road Map for Chicago’s Future","/new-mayor-emanuel%e2%80%99s-road-map-for-chicago%e2%80%99s-future/"]],
    "Fearless Leading by the Youth":[[
        "Battle Rages on for South Side Trauma Center","/battle-rages-on-for-south-side-trauma-center/"]],
    "healthcare":[[
        "Battle Rages on for South Side Trauma Center","/battle-rages-on-for-south-side-trauma-center/"],
        ["Youths and Sex Ed","/youths-and-sex-ed/"],
        ["Altgeld Gardens Dentist","/altgeld-garden%e2%80%99s-dentist/"],
        ["Healthcare Justice Act Raises Hopes","/healthcare-justice-act-raises-hopes/"],
        ["Illinois Democrats Resist Social Security Privatization","/illinois-democrats-resist-social-security-privatization/"],
        ["The New Cook County Hospital","/the-new-cook-county-hospital/"],
        ["Choosing Between Food and Medicine","/choosing-between-food-and-medicine/"],
        ["Sinai Health Services","/sinai-health-services/"]],
    "Southside Together Organizing for Power":[[
        "Battle Rages on for South Side Trauma Center","/battle-rages-on-for-south-side-trauma-center/"]],
    "Trauma Center":[[
        "Battle Rages on for South Side Trauma Center","/battle-rages-on-for-south-side-trauma-center/"]],
    "University of Chicago Medical Center":[[
        "Battle Rages on for South Side Trauma Center","/battle-rages-on-for-south-side-trauma-center/"]],
    "Bern Nadette Stanis":[[
        "An Afternoon of Good Times","/an-afternoon-of-good-times/"]],
    "Cabrini-Green public housing":[[
        "An Afternoon of Good Times","/an-afternoon-of-good-times/"],
        ["Cabrini-Green Residents Say Goodbye","/cabrini-green-residents-say-goodbye/"],
        ["Cabrini Rowhouses Update","/cabrini-rowhouses-update/"],
        ["Cabrini rowhouses’ fate in jeopardy","/cabrini-rowhouses%e2%80%99-fate-in-jeopardy/"],
        ["A Third Generation’s Take on Relocation from Last Cabrini Building","/a-third-generation%e2%80%99s-take-on-relocation-from-last-cabrini-building/"]],
    "Good Times":[[
        "An Afternoon of Good Times","/an-afternoon-of-good-times/"]],
    "Rueben Cannon":[[
        "An Afternoon of Good Times","/an-afternoon-of-good-times/"]],
    "Sexually Transmitted Disease":[[
        "Youths and Sex Ed","/youths-and-sex-ed/"]],
    "STDs":[[
        "Youths and Sex Ed","/youths-and-sex-ed/"],
        ["HIV/AIDs Crisis","/hivaids-crisis/"]],
    "Chicago 2011 Aldermanic Election":[[
        "On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith/"]],
    "Chicago 2011 Mayoral Election":[[
        "On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith/"],
        ["We The People Media's Coverage of the Chicago Mayor's Race","/we-the-people-medias-coverage-of-the-chicago-mayors-race/"],
        ["Chicago Mayoral Candidate Carol Moseley Braun on Low-income Issues","/chicago-mayoral-candidate-former-u-s-sen-carol-moseley-braun-on-low-income-issues/"],
        ["Residents' Journal Editor-in-Chief Discussing Chicago Mayoral Election and CPD Protest","/residents-journal-editor-in-chief-discussing-mayoral-election-and-cpd-protest/"]],
    "Rhymefest":[[
        "On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith/"]],
    "Chicago Landlords and Tenants Ordinance":[[
        "Housing Activists Take Action: An Update","/housing-activists-take-action-an-update/"]],
    "Housing Activists Take Action: An Update":[[
        "Housing Activists Take Action: An Update","/housing-activists-take-action-an-update/"]],
    "Metropolitian Tenants Organization":[[
        "Housing Activists Take Action: An Update","/housing-activists-take-action-an-update/"]],
    "Section 8 vouchers":[[
        "Housing Activists Take Action: An Update","/housing-activists-take-action-an-update/"],
        ["Razing the Brooks Extension","/razing-the-brooks-extension/"],
        ["Section 8 Update","/section-8-update/"]],
    "U.S. Department of Housiong and Urban Development":[[
        "Housing Activists Take Action: An Update","/housing-activists-take-action-an-update/"]],
    "Alden Villiage Nroth Nursing Home":[[
        "Disability Advocates Target Troubled Nursing Home","/disability-advocates-target-troubled-nursing-home/"]],
    "Chicago ADAPT":[[
        "Disability Advocates Target Troubled Nursing Home","/disability-advocates-target-troubled-nursing-home/"]],
    "disabilities":[[
        "Disability Advocates Target Troubled Nursing Home","/disability-advocates-target-troubled-nursing-home/"],
        ["Access Report","/access-report-2/"]],
    "Power to the People Coalition":[[
        "Disability Advocates Target Troubled Nursing Home","/disability-advocates-target-troubled-nursing-home/"]],
    "Progress Center for Independent Living":[[
        "Disability Advocates Target Troubled Nursing Home","/disability-advocates-target-troubled-nursing-home/"]],
    "the ajne Addams Senior Causuc":[[
        "Disability Advocates Target Troubled Nursing Home","/disability-advocates-target-troubled-nursing-home/"]],
    "the Community renewal Society":[[
        "Disability Advocates Target Troubled Nursing Home","/disability-advocates-target-troubled-nursing-home/"]],
    "Lathrop Leadership Team":[[
        "CHA Board Meeting Crashed with Concerns","/cha-board-meeting-crashed-with-concerns/"]],
    "Logan Square Neighborhood Association":[[
        "CHA Board Meeting Crashed with Concerns","/cha-board-meeting-crashed-with-concerns/"]],
    "Illinois Coalition to Abolish the Death Penalty":[[
        "Illinois Governor Applauded for Abolishing Death Penalty","/illinois-governor-applauded-for-abolishing-death-penalty/"]],
    "Illniois Death Penalty":[[
        "Illinois Governor Applauded for Abolishing Death Penalty","/illinois-governor-applauded-for-abolishing-death-penalty/"]],
    "Jewish Council on Urban Affairs":[[
        "Illinois Governor Applauded for Abolishing Death Penalty","/illinois-governor-applauded-for-abolishing-death-penalty/"]],
    "Chicago Bronzeville community":[[
        "Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street/"],
        ["Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks/"],
        ["Torture Victim Reflects on Burge Sentence","/torture-victim-reflects-on-burge-sentence/"],
        ["A Salute to Women Veterans","/a-salute-to-women-veterans/"],
        ["Resident's Journal Senior Reporter talking about an Historical Chicago Bronzeville Monument Project","/residents-journal-senior-reporter-talking-about-an-historical-chicago-bronzeville-monument-project/"],
        ["Should Liquor Stores Be Banned in Bronzeville?","/should-liquor-stores-be-banned-in-bronzeville/"]],
    "Chicago police":[[
        "Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street/"],
        ["Your Neighborhood Policemen","/your-neighborhood-policemen/"]],
    "Concerned citizens of Bronzeville":[[
        "Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street/"]],
    "improvement plan":[[
        "Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street/"]],
    "local businesses":[[
        "Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street/"],
        ["Bronzeville Community Alert","/bronzeville-community-alert/"]],
    "police substation":[[
        "Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street/"]],
    "Illinois Department of Health and Human Services":[[
        "Disability Rights Advocates Protest, and Gov. Quinn Retreats","/disability-rights-advocates-protest-and-gov-quinn-retreats/"]],
    "Carol Moseley Braun":[[
        "We The People Media's Coverage of the Chicago Mayor's Race","/we-the-people-medias-coverage-of-the-chicago-mayors-race/"],
        ["Emanuel Removed From Ballot, Candidates’ Education Plans","/emanuel-removed-from-ballot-candidates%e2%80%99-education-plans/"],
        ["Chicago Mayoral Candidate Carol Moseley Braun on Low-income Issues","/chicago-mayoral-candidate-former-u-s-sen-carol-moseley-braun-on-low-income-issues/"]],
    "Chicago Mayoral Candidates":[[
        "We The People Media's Coverage of the Chicago Mayor's Race","/we-the-people-medias-coverage-of-the-chicago-mayors-race/"],
        ["Watkins Warns Transport Jobs May Be Lost","/watkins-warns-transport-jobs-may-be-lost/"],
        ["Mayoral Candidates Views about Chicago Public Housing","/mayoral-candidates-views-about-chicago-public-housing/"],
        ["Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks/"],
        ["Emanuel Removed From Ballot, Candidates’ Education Plans","/emanuel-removed-from-ballot-candidates%e2%80%99-education-plans/"],
        ["Mayoral Candidate’s Plans for Low-income people and Ex-offenders","/mayoral-candidate%e2%80%99s-plans-for-low-income-people-and-ex-offenders/"],
        ["Emanuel’s Anti-Crime Plan for Chicago if elected Mayor","/emanuel%e2%80%99s-anti-crime-plan-for-chicago-if-elected-mayor/"],
        ["Three Chicago Mayoral Candidates' Take on Public Housing","/1803/"]],
    "Patriica Van Pelt Watkins":[[
        "We The People Media's Coverage of the Chicago Mayor's Race","/we-the-people-medias-coverage-of-the-chicago-mayors-race/"],
        ["Watkins Warns Transport Jobs May Be Lost","/watkins-warns-transport-jobs-may-be-lost/"],
        ["Mayoral Candidate’s Plans for Low-income people and Ex-offenders","/mayoral-candidate%e2%80%99s-plans-for-low-income-people-and-ex-offenders/"]],
    "chicago mayors race":[[
        "Watkins Warns Transport Jobs May Be Lost","/watkins-warns-transport-jobs-may-be-lost/"]],
    "transportation":[[
        "Watkins Warns Transport Jobs May Be Lost","/watkins-warns-transport-jobs-may-be-lost/"],
        ["Access Report","/access-report-3/"],
        ["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments/"]],
    "Chicago mayors election":[[
        "Mayoral Candidates Views about Chicago Public Housing","/mayoral-candidates-views-about-chicago-public-housing/"]],
    "mayoral candidates views about chicago public houisng":[[
        "Mayoral Candidates Views about Chicago Public Housing","/mayoral-candidates-views-about-chicago-public-housing/"]],
    "agriculture":[[
        "Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks/"]],
    "community gardens":[[
        "Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks/"]],
    "food industry":[[
        "Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks/"]],
    "food production":[[
        "Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks/"]],
    "health":[[
        "Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks/"],
        ["Uranium: A Hidden Tragedy","/uranium-a-hidden-tragedy/"],
        ["Under Pressure: Students and Teachers on Stress","/under-pressure-students-and-teachers-on-stress/"],
        ["Residents' Journal Reporters Share Results of Youth Surveys","/residents-journal-reporters-share-results-of-youth-surveys/"],
        ["RJ Reporter talking about Youth Media Project","/rj-reporter-talking-about-youth-media-project/"],
        ["Cafeteria Food","/cafeteria-food/"],
        ["Crystal Clear Views","/crystal-clear-views-3/"],
        ["Dear Resident","/dear-resident-9/"]],
    "health issues":[[
        "Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks/"],
        ["Crystal Clear Views","/crystal-clear-views-2/"],
        ["Bird Flu Pandemic Expected","/bird-flu-pandemic-expected/"],
        ["Medicare Prescription Drug Benefit","/medicare-prescription-drug-benefit/"],
        ["The True Face of Poverty","/the-true-face-of-poverty/"],
        ["Stop The Violence","/stop-the-violence-8/"],
        ["Altgeld Gardens News","/altgeld-gardens-news/"]],
    "low-income communities":[[
        "Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks/"],
        ["Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes/"],
        ["The Compassionate Blues","/the-compassionate-blues/"],
        ["The Sound of Silence","/the-sound-of-silence/"]],
    "John Burge":[[
        "Torture Victim Reflects on Burge Sentence","/torture-victim-reflects-on-burge-sentence/"]],
    "Torture":[[
        "Torture Victim Reflects on Burge Sentence","/torture-victim-reflects-on-burge-sentence/"],
        ["Cong. Danny Davis proposes anti-police torture legislation","/cong-danny-davis-proposes-anti-police-torture-legislation/"],
        ["Lawsuit Underway after Guilty Verdict in Burge Trial","/lawsuit-underway-after-guilty-verdict-in-burge-trial/"],
        ["Burge Victims’ Attorneys Fight Transfers","/burge-victims-attorneys-fight-transfers/"],
        ["Cops Fight Their Own Over Burge","/cops-fight-their-own-over-burge/"],
        ["The Times They Are A’Changing","/the-times-they-are-achanging/"],
        ["House of Screams","/house-of-screams/"]],
    "community programs":[[
        "Nuf Said: Will Violence Finally Stop?","/nuf-said-will-violence-finally-stop/"]],
    "dropout rate":[[
        "Nuf Said: Will Violence Finally Stop?","/nuf-said-will-violence-finally-stop/"],
        ["Youths Testify for Alternative Schools","/youths-testify-for-alternative-schools/"]],
    "Gery Chico":[[
        "Emanuel Removed From Ballot, Candidates’ Education Plans","/emanuel-removed-from-ballot-candidates%e2%80%99-education-plans/"],
        ["U.S. Senate Candidate Gery Chico","/u-s-senate-candidate-gery-chico/"]],
    "Mayoral Cadidates Education Plans":[[
        "Emanuel Removed From Ballot, Candidates’ Education Plans","/emanuel-removed-from-ballot-candidates%e2%80%99-education-plans/"]],
    "Mayoral Candidates":[[
        "Emanuel Removed From Ballot, Candidates’ Education Plans","/emanuel-removed-from-ballot-candidates%e2%80%99-education-plans/"]],
    "Mayoral Candidates on Education":[[
        "Emanuel Removed From Ballot, Candidates’ Education Plans","/emanuel-removed-from-ballot-candidates%e2%80%99-education-plans/"]],
    "Miguel Del Valle":[[
        "Emanuel Removed From Ballot, Candidates’ Education Plans","/emanuel-removed-from-ballot-candidates%e2%80%99-education-plans/"]],
    "Chicago 2011 Mayor's Race":[[
        "Mayoral Candidate’s Plans for Low-income people and Ex-offenders","/mayoral-candidate%e2%80%99s-plans-for-low-income-people-and-ex-offenders/"]],
    "Chicago mayoral candidate":[[
        "Mayoral Candidate’s Plans for Low-income people and Ex-offenders","/mayoral-candidate%e2%80%99s-plans-for-low-income-people-and-ex-offenders/"]],
    "Chicago Mayoral Election":[[
        "Mayoral Candidate’s Plans for Low-income people and Ex-offenders","/mayoral-candidate%e2%80%99s-plans-for-low-income-people-and-ex-offenders/"]],
    "low-income issues":[[
        "Mayoral Candidate’s Plans for Low-income people and Ex-offenders","/mayoral-candidate%e2%80%99s-plans-for-low-income-people-and-ex-offenders/"],
        ["Update: Zoning and Affordable Housing","/update-zoning-and-affordable-housing/"],
        ["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force/"],
        ["Sinai Health Services","/sinai-health-services/"],
        ["The State Of Section 8","/the-state-of-section-8/"],
        ["Cold War Echoes","/cold-war-echoes/"]],
    "Mayor of Chicago Elections":[[
        "Emanuel’s Anti-Crime Plan for Chicago if elected Mayor","/emanuel%e2%80%99s-anti-crime-plan-for-chicago-if-elected-mayor/"]],
    "Center on Budget and Policy Priorites":[[
        "Federal Housing Programs on the Chopping Block","/federal-housing-programs-on-the-chopping-block/"]],
    "Federal Housing Programs":[[
        "Federal Housing Programs on the Chopping Block","/federal-housing-programs-on-the-chopping-block/"]],
    "documentary":[[
        "Uranium: A Hidden Tragedy","/uranium-a-hidden-tragedy/"]],
    "radiation poisoning":[[
        "Uranium: A Hidden Tragedy","/uranium-a-hidden-tragedy/"]],
    "Uranium":[[
        "Uranium: A Hidden Tragedy","/uranium-a-hidden-tragedy/"]],
    "Bowling":[[
        "Bowling Excursion","/bowling-excursion/"]],
    "students":[[
        "Under Pressure: Students and Teachers on Stress","/under-pressure-students-and-teachers-on-stress/"],
        ["Whose School Is It?","/whose-school-is-it/"],
        ["Safe Summer 97","/safe-summer-97/"]],
    "Teachers":[[
        "Under Pressure: Students and Teachers on Stress","/under-pressure-students-and-teachers-on-stress/"]],
    "Cabrini":[[
        "Cabrini Rowhouses Update","/cabrini-rowhouses-update/"]],
    "Cabrini Rowhouses Update":[[
        "Cabrini Rowhouses Update","/cabrini-rowhouses-update/"]],
    "Chicago mayoral candidate on public housing":[[
        "Three Chicago Mayoral Candidates' Take on Public Housing","/1803/"]],
    "Three mayoral candidates' take on public housing":[[
        "Three Chicago Mayoral Candidates' Take on Public Housing","/1803/"]],
    "CPS lawsuits":[[
        "Parents File Discrimination Complaint against CPS Promotion Policy for Elementary Students","/parents-file-discrimination-complaint-against-cps-promotion-policy-for-elementary-students/"]],
    "PURE":[[
        "Parents File Discrimination Complaint against CPS Promotion Policy for Elementary Students","/parents-file-discrimination-complaint-against-cps-promotion-policy-for-elementary-students/"]],
    "JROTC":[[
        "A Salute to Women Veterans","/a-salute-to-women-veterans/"],
        ["A Day in the Life of a JROTC Cadet","/a-day-in-the-life-of-a-jrotc-cadet/"]],
    "Marching Bands":[[
        "A Salute to Women Veterans","/a-salute-to-women-veterans/"]],
    "Veterans Day Parade":[[
        "A Salute to Women Veterans","/a-salute-to-women-veterans/"]],
    "Women Soldiers":[[
        "A Salute to Women Veterans","/a-salute-to-women-veterans/"]],
    "Women Veterans":[[
        "A Salute to Women Veterans","/a-salute-to-women-veterans/"]],
    "Glenn Beck":[[
        "Marching in Washington","/marching-in-washington/"]],
    "immigration reform":[[
        "Marching in Washington","/marching-in-washington/"],
        ["U. S. Citizens Decry Relatives’ Deportation","/u-s-citizens-decry-relatives-deportation/"]],
    "Lincoln Memorial":[[
        "Marching in Washington","/marching-in-washington/"]],
    "One Nation Working Together Rally":[[
        "Marching in Washington","/marching-in-washington/"]],
    "Rev. Jesse Jackson":[[
        "Marching in Washington","/marching-in-washington/"],
        ["Jackson Visits Ickes","/jackson-visits-ickes/"],
        ["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center/"],
        ["Vote '96: Conventional Colors","/vote-96-conventional-colors-2/"]],
    "Washington Memorial":[[
        "Marching in Washington","/marching-in-washington/"]],
    "Alexi Giannoulias":[[
        "Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d/"]],
    "Dan Seals":[[
        "Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d/"]],
    "Illinois 2010 candidates":[[
        "Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d/"]],
    "November 2010 Elections":[[
        "Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d/"]],
    "Rep. Debbie Halvorson":[[
        "Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d/"]],
    "Rep. Mark Kirk":[[
        "Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d/"]],
    "Robert Dold":[[
        "Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d/"]],
    "US Congressman Bill Foster":[[
        "Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d/"]],
    "Facebook":[[
        "Youths Speak Out on Violence","/youths-speak-out-on-violence/"]],
    "Nuf Said":[[
        "Youths Speak Out on Violence","/youths-speak-out-on-violence/"]],
    "Nuff Said":[[
        "Do Students Trust Authority?","/do-students-trust-authority/"],
        ["Pollution Affects Everyone","/pollution-affects-everyone/"]],
    "flooding":[[
        "Pollution Affects Everyone","/pollution-affects-everyone/"]],
    "pollution":[[
        "Pollution Affects Everyone","/pollution-affects-everyone/"],
        ["Residents' Journal Reporters Share Results of Youth Surveys","/residents-journal-reporters-share-results-of-youth-surveys/"],
        ["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues/"]],
    "waste management":[[
        "Pollution Affects Everyone","/pollution-affects-everyone/"],
        ["Recycling on the South Side","/recycling-on-the-south-side/"]],
    "recycling":[[
        "Recycling on the South Side","/recycling-on-the-south-side/"],
        ["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road/"]],
    "the resource center":[[
        "Recycling on the South Side","/recycling-on-the-south-side/"]],
    "Chicago Bronzeville Merchants Association":[[
        "Resident's Journal Senior Reporter talking about an Historical Chicago Bronzeville Monument Project","/residents-journal-senior-reporter-talking-about-an-historical-chicago-bronzeville-monument-project/"]],
    "Chicago Historical Monuments":[[
        "Resident's Journal Senior Reporter talking about an Historical Chicago Bronzeville Monument Project","/residents-journal-senior-reporter-talking-about-an-historical-chicago-bronzeville-monument-project/"]],
    "Chicago Obelisks":[[
        "Resident's Journal Senior Reporter talking about an Historical Chicago Bronzeville Monument Project","/residents-journal-senior-reporter-talking-about-an-historical-chicago-bronzeville-monument-project/"]],
    "Chicago police union":[[
        "Residents' Journal Editor-in-Chief Discussing Chicago Mayoral Election and CPD Protest","/residents-journal-editor-in-chief-discussing-mayoral-election-and-cpd-protest/"]],
    "police rally":[[
        "Residents' Journal Editor-in-Chief Discussing Chicago Mayoral Election and CPD Protest","/residents-journal-editor-in-chief-discussing-mayoral-election-and-cpd-protest/"]],
    "Superintendant Jody Weis":[[
        "Residents' Journal Editor-in-Chief Discussing Chicago Mayoral Election and CPD Protest","/residents-journal-editor-in-chief-discussing-mayoral-election-and-cpd-protest/"]],
    "teen violence":[[
        "RJ Youth Instructor Discussing Teen Project with Youth Reporter","/rj-youth-instructor-discussing-teen-project-with-youth-reporter/"]],
    "youth jobs":[[
        "RJ Youth Instructor Discussing Teen Project with Youth Reporter","/rj-youth-instructor-discussing-teen-project-with-youth-reporter/"],
        ["Youths Rally For Summer Jobs","/youths-rally-for-summer-jobs/"]],
    "Family Defense Center":[[
        "Residents' Journal Publisher talking about Deficiencies in DCFS System","/residents-journal-publisher-talking-about-deficiencies-in-dcfs-system/"]],
    "Chicago Bears Football Player Devin Aromashodu":[[
        "CHA Youth Shopping Spree with Chicago Bears Player","/cha-youth-shopping-spree-with-chicago-bears-player/"]],
    "BRCC":[[
        "Bronzeville Residents' Efforts to Ban Liquor Sales in their Community","/residents-journal-can-tv-show-about-bronzeville-residents-efforts-to-ban-liquor-sales-in-their-community/"]],
    "the Bronzeville Movement":[[
        "Bronzeville Residents' Efforts to Ban Liquor Sales in their Community","/residents-journal-can-tv-show-about-bronzeville-residents-efforts-to-ban-liquor-sales-in-their-community/"]],
    "chicago youth summit":[[
        "A Teens View of a recent Chicago Youth Summit","/residents-journal-can-tv-show-on-a-recent-chicago-youth-summit/"]],
    "youth employment":[[
        "A Teens View of a recent Chicago Youth Summit","/residents-journal-can-tv-show-on-a-recent-chicago-youth-summit/"]],
    "Liquor Stores":[[
        "Should Liquor Stores Be Banned in Bronzeville?","/should-liquor-stores-be-banned-in-bronzeville/"]],
    "Affirmative Action":[[
        "Changes to Federal Affirmative Action Law Underway","/changes-to-federal-affirmative-action-law-underway/"]],
    "US Dept. of Labor":[[
        "Changes to Federal Affirmative Action Law Underway","/changes-to-federal-affirmative-action-law-underway/"]],
    "Bronzeville Alliance":[[
        "Residents' Journal Senior Reporter Discussing a Bronzeville Family History Research Project","/residents-journal-senior-reporter-discussing-a-bronzeville-family-history-research-project/"]],
    "family history":[[
        "Residents' Journal Senior Reporter Discussing a Bronzeville Family History Research Project","/residents-journal-senior-reporter-discussing-a-bronzeville-family-history-research-project/"]],
    "Geneology research":[[
        "Residents' Journal Senior Reporter Discussing a Bronzeville Family History Research Project","/residents-journal-senior-reporter-discussing-a-bronzeville-family-history-research-project/"]],
    "history":[[
        "Residents' Journal Senior Reporter Discussing a Bronzeville Family History Research Project","/residents-journal-senior-reporter-discussing-a-bronzeville-family-history-research-project/"],
        ["The Price of a Political Job","/the-price-of-a-political-job/"],
        ["Dear Resident","/dear-resident/"],
        ["Dear Resident","/dear-resident-2/"],
        ["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man/"],
        ["A Short History of Ida B. Wells","/a-short-history-of-ida-b-wells/"],
        ["Washington Park: The Dying Hope","/washington-park-the-dying-hope/"],
        ["A History of Cabrini-Green","/a-history-of-cabrini-green/"],
        ["LeClaire Courts","/leclaire-courts/"]],
    "Pat Bearden":[[
        "Residents' Journal Senior Reporter Discussing a Bronzeville Family History Research Project","/residents-journal-senior-reporter-discussing-a-bronzeville-family-history-research-project/"]],
    "jobs":[[
        "Residents' Journal Reporters Share Results of Youth Surveys","/residents-journal-reporters-share-results-of-youth-surveys/"]],
    "library":[[
        "Where I Come From","/where-i-come-from/"],
        ["Altgeld Youth Protest Lack of Library","/altgeld-youth-protest-lack-of-library/"]],
    "youth programs":[[
        "What We Need Now","/what-we-need-now/"],
        ["Youths Testify for Alternative Schools","/youths-testify-for-alternative-schools/"]],
    "Acting":[[
        "Stepping Onto the Stage","/stepping-onto-the-stage/"]],
    "Drama Club":[[
        "Stepping Onto the Stage","/stepping-onto-the-stage/"]],
    "youth issues":[[
        "From the Inside Looking Out: Bullying","/from-the-inside-looking-out-bullying/"]],
    "Dental concerns":[[
        "Altgeld Gardens Dentist","/altgeld-garden%e2%80%99s-dentist/"]],
    "dental hygiene":[[
        "Altgeld Gardens Dentist","/altgeld-garden%e2%80%99s-dentist/"]],
    "Chase bank":[[
        "Is Chase Bank a Slumlord?","/is-chase-bank-a-slumlord/"],
        ["Low-income Tenants Rally at Chase Bank","/low-income-tenants-rally-at-chase-bank/"]],
    "Chicago homelessness":[[
        "Is Chase Bank a Slumlord?","/is-chase-bank-a-slumlord/"],
        ["Homeless Not Hopeless","/homeless-not-hopeless/"],
        ["Squatters Worry About Homelessness","/squatters-worry-about-homelessness/"],
        ["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"]],
    "Chicago media":[[
        "FCC Public Hearing on Comcast Merge with NBC","/fcc-public-hearing-on-comcast-merge-with-nbc/"],
        ["FCC Public Hearing on Comcast Merger with NBCU/GE","/fcc-public-hearing-on-comcast-merger-with-nbcuge/"]],
    "Comcast":[[
        "FCC Public Hearing on Comcast Merge with NBC","/fcc-public-hearing-on-comcast-merge-with-nbc/"]],
    "FCC":[[
        "FCC Public Hearing on Comcast Merge with NBC","/fcc-public-hearing-on-comcast-merge-with-nbc/"],
        ["FCC Public Hearing on Comcast Merger with NBCU/GE","/fcc-public-hearing-on-comcast-merger-with-nbcuge/"]],
    "merger":[[
        "FCC Public Hearing on Comcast Merge with NBC","/fcc-public-hearing-on-comcast-merge-with-nbc/"],
        ["FCC Public Hearing on Comcast Merger with NBCU/GE","/fcc-public-hearing-on-comcast-merger-with-nbcuge/"]],
    "NBC":[[
        "FCC Public Hearing on Comcast Merge with NBC","/fcc-public-hearing-on-comcast-merge-with-nbc/"],
        ["FCC Public Hearing on Comcast Merger with NBCU/GE","/fcc-public-hearing-on-comcast-merger-with-nbcuge/"]],
    "protest":[[
        "Low-income Tenants Rally at Chase Bank","/low-income-tenants-rally-at-chase-bank/"],
        ["Pilsen Guards Against Gentrifyers","/pilsen-guards-against-gentrifyers/"]],
    "CANTV":[[
        "Residents' Journal CAN TV Show on the Opening of the Chicago Housing Authority's Family Housing Wait List","/1396/"],
        ["A new season of RJ TV","/a-new-season-of-rj-tv-2/"],
        ["We The People Media's New Video Site","/we-the-people-medias-new-video-site/"]],
    "CHA wait list":[[
        "As CHA Wait List Closes, Are Low-Income Families Bridging the Digital Divide?","/as-cha-wait-list-closes-are-low-income-families-bridging-the-digital-divide/"]],
    "digital divide":[[
        "As CHA Wait List Closes, Are Low-Income Families Bridging the Digital Divide?","/as-cha-wait-list-closes-are-low-income-families-bridging-the-digital-divide/"],
        ["Robert Taylor On Line","/robert-taylor-on-line/"]],
    "internet usage":[[
        "As CHA Wait List Closes, Are Low-Income Families Bridging the Digital Divide?","/as-cha-wait-list-closes-are-low-income-families-bridging-the-digital-divide/"]],
    "legislation":[[
        "Cong. Danny Davis proposes anti-police torture legislation","/cong-danny-davis-proposes-anti-police-torture-legislation/"],
        ["Tenants Protest New CHA School Reporting Policy","/tenants-protest-new-cha-school-reporting-policy/"],
        ["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice/"],
        ["State Passes Support for Renters","/state-passes-support-for-renters/"],
        ["Healthcare Justice Act Raises Hopes","/healthcare-justice-act-raises-hopes/"],
        ["Ex Marks The Spot","/ex-marks-the-spot/"],
        ["2004 Election Focal Points","/2004-election-focal-points/"],
        ["Medicare Prescription Drug Benefit","/medicare-prescription-drug-benefit/"],
        ["Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park/"],
        ["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments/"]],
    "lawsuit":[[
        "Lawsuit Underway after Guilty Verdict in Burge Trial","/lawsuit-underway-after-guilty-verdict-in-burge-trial/"],
        ["The Times They Are A’Changing","/the-times-they-are-achanging/"],
        ["CHA Contracting Woes","/cha-contracting-woes/"],
        ["You Have Been Served","/you-have-been-served/"],
        ["Oops, They Did It Again","/oops-they-did-it-again/"],
        ["Residents Sue CHA","/residents-sue-cha/"],
        ["Dear Resident","/dear-resident-6/"],
        ["L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike/"],
        ["CHA and Latinos: Interview with Joe Shuldiner","/cha-and-latinos-interview-with-joe-shuldiner/"],
        ["Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing/"]],
    "HIV/AIDS":[[
        "HUD Renews 19 States’ HIV/AIDS Supportive Housing Programs","/hud-renews-19-states%e2%80%99-hivaids-supportive-housing-programs/"],
        ["HIV/AIDs Crisis","/hivaids-crisis/"]],
    "counseling":[[
        "At CHA Mixed-Income Sites, Owners Exempt from Smoke-Free Zones","/at-cha-mixed-income-sites-owners-exempt-from-smoke-free-zones/"]],
    "mixed-income housing":[[
        "At CHA Mixed-Income Sites, Owners Exempt from Smoke-Free Zones","/at-cha-mixed-income-sites-owners-exempt-from-smoke-free-zones/"],
        ["Last Harvest","/last-harvest/"]],
    "smoke-free zones":[[
        "At CHA Mixed-Income Sites, Owners Exempt from Smoke-Free Zones","/at-cha-mixed-income-sites-owners-exempt-from-smoke-free-zones/"]],
    "smoking":[[
        "At CHA Mixed-Income Sites, Owners Exempt from Smoke-Free Zones","/at-cha-mixed-income-sites-owners-exempt-from-smoke-free-zones/"]],
    "fall 2008 issue":[[
        "Making It Harder for Students to Get a License","/making-it-harder-for-students-to-get-a-license/"],
        ["Who is Principal Martinez?","/who-is-principal-martinez/"],
        ["What people think about Little Village Lawndale High School?","/what-people-think-about-little-village-lawndale-high-school/"],
        ["Why is the Question I Ask","/why-is-the-question-i-ask/"],
        ["The Birth of Death","/the-birth-of-death/"],
        ["Truancy Fees","/truancy-fees/"],
        ["The Times We Hurt Most","/the-times-we-hurt-most/"],
        ["Teens Working In and Out of School","/teens-working-in-and-out-of-school/"],
        ["Are You Warm for the Holidays?","/are-you-warm-for-the-holidays/"],
        ["My Thoughts About Fatherhood","/my-thoughts-about-fatherhood/"],
        ["DCFS: Inside View","/dcfs-inside-view/"],
        ["Both Sides of Police Brutality","/both-sides-of-police-brutality/"],
        ["Phased Out","/phased-out/"],
        ["The Times They Are A’Changing","/the-times-they-are-achanging/"],
        ["‘Train Wreck’ Expected for TV Transition","/train-wreck-expected-for-tv-transition/"],
        ["CHA Seniors Keep Waiting to Return Home","/cha-seniors-keep-waiting-to-return-home/"],
        ["U.S. Reps Call For Moratorium On Public Housing Demolitions","/u-s-reps-call-for-moratorium-on-public-housing-demolitions/"],
        ["Harold L. Ickes Homes News","/harold-l-ickes-homes-news/"],
        ["CHA Goes on the Defensive about Child's Death","/cha-goes-on-the-defensive-about-childs-death/"],
        ["Congress Accuses HUD of Mismanagement","/congress-accuses-hud-of-mismanagement/"],
        ["New Funding for Chicago Rental Subsidies","/new-funding-for-chicago-rental-subsidies/"],
        ["Sisters Form a Brotherhood","/sisters-form-a-brotherhood/"],
        ["Lathrop Residents Want Vacant Units Occupied","/lathrop-residents-want-vacant-units-occupied/"],
        ["The Audacity of Forgiveness","/the-audacity-of-forgiveness/"],
        ["Reports Finds Child Care More Expensive than Rent","/reports-finds-child-care-more-expensive-than-rent/"],
        ["One Man Giving Back to the Community","/one-man-giving-back-to-the-community/"],
        ["Stop The Violence","/stop-the-violence/"],
        ["Crystal Clear Views","/crystal-clear-views/"],
        ["Reforms Needed at Tamms Supermax Prison","/reforms-needed-at-tamms-supermax-prison/"],
        ["Sheriff Gets Safeguards for Evicted Tenants","/sheriff-gets-safeguards-for-evicted-tenants/"],
        ["Increasing Numbers of Homeless Seniors","/increasing-numbers-of-homeless-seniors/"],
        ["Saving A Piece of History in Cabrini Green","/saving-a-piece-of-history-in-cabrini-green/"],
        ["My Life, My Story, My Song","/my-life-my-story-my-song/"]],
    "spring 2010 issue":[[
        "Dealing with the Digital Television Transition","/dealing-with-the-digital-television-transition/"],
        ["Are Illinois' Drug Laws Racially Biased?","/are-illinois-drug-laws-racially-biased/"],
        ["An Addiction to Self-Discovery","/an-addiction-to-self-discovery/"],
        ["Bronzeville Memorialized","/bronzeville-memorialized/"],
        ["Faith Leaders Call for School Reform","/faith-leaders-call-for-school-reform/"],
        ["Urban League Sues for School Equity","/urban-league-sues-for-school-equity/"],
        ["Budget Woes Nationwide","/budget-woes-nationwide/"],
        ["US Reps Issue New Call to Stop Demolitions","/us-reps-issue-new-call-to-stop-demolitions/"],
        ["Stepping Up","/stepping-up/"],
        ["Putting Animal Cruelty In Perspective","/putting-animal-cruelty-in-perspective/"],
        ["What's Love Got to Do With It?","/whats-love-got-to-do-with-it/"],
        ["Rethinking Abortion","/rethinking-abortion/"],
        ["A Facebook Addiction","/a-facebook-addiction/"],
        ["Danger Zone","/danger-zone/"],
        ["Mayor Daley Visits South Shore High School","/mayor-daley-visits-south-shore-high-school/"],
        ["Teen Pregnancy Hits Teens Hard","/teen-pregnancy-hits-teens-hard/"],
        ["Mohawks","/mohawks/"],
        ["Long John Shivers","/long-john-shivers/"],
        ["Germs","/germs/"],
        ["Personal Hygiene","/1114/"],
        ["A Tale of Two Cities","/a-tale-of-two-cities/"],
        ["After Katrina, New Orleans Still Turbulent","/after-katrina-new-orleans-still-turbulent/"],
        ["Invasion of the Bedbugs","/invasion-of-the-bedbugs/"],
        ["Off The Edge","/off-the-edge/"],
        ["LeClaire Courts' Demise","/leclaire-courts-demise/"],
        ["Lathrop Tenants Object to CHA's Plan","/lathrop-tenants-object-to-chas-plan/"],
        ["Atgeld Residents: New School Will Curb Violence","/atgeld-residents-new-school-will-curb-violence/"],
        ["Ickes Homes News: The Final Curtain?","/ickes-homes-news-the-final-curtain/"],
        ["Relocation Rights Duel","/relocation-rights-duel/"],
        ["Tenants Protest New CHA School Reporting Policy","/tenants-protest-new-cha-school-reporting-policy/"],
        ["Robert Taylor On Line","/robert-taylor-on-line/"]],
    "American Recovery and Rehabilitation Act":[[
        "Ickes Homes News: The Final Curtain?","/ickes-homes-news-the-final-curtain/"]],
    "negligence":[[
        "Relocation Rights Duel","/relocation-rights-duel/"]],
    "Relocation Rights Contract":[[
        "Relocation Rights Duel","/relocation-rights-duel/"],
        ["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing/"],
        ["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations/"],
        ["Electrically Charged","/electrically-charged/"],
        ["Relocation Rights Contract","/relocation-rights-contract/"],
        ["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan/"]],
    "public hearing":[[
        "Tenants Protest New CHA School Reporting Policy","/tenants-protest-new-cha-school-reporting-policy/"]],
    "multimedia":[[
        "We The People Media's New Video Site","/we-the-people-medias-new-video-site/"]],
    "Youtube":[[
        "We The People Media's New Video Site","/we-the-people-medias-new-video-site/"]],
    "RJ TV":[[
        "A new season of RJ TV","/a-new-season-of-rj-tv/"],
        ["Publisher's Box","/publishers-box-2/"]],
    "Youth Media Reporter":[[
        "Youth Media Reporter","/youth-media-reporter/"]],
    "Youth Program":[[
        "Youth Media Reporter","/youth-media-reporter/"]],
    "exhibition":[[
        "An Inside Out Experience","/an-inside-out-experience/"]],
    "Illinois Humanities Council.":[[
        "An Inside Out Experience","/an-inside-out-experience/"]],
    "Jane Adams Homes":[[
        "An Inside Out Experience","/an-inside-out-experience/"]],
    "public funding":[[
        "An Inside Out Experience","/an-inside-out-experience/"]],
    "Stop the Violence":[[
        "CAN TV Devotes Entire Day Programming to “Stop the Violence” in the City of Chicago","/can-tv-devotes-entire-day-programming-to-stop-the-violence-in-the-city-of-chicago/"],
        ["Stop The Violence","/stop-the-violence-9/"]],
    "hunger strike":[[
        "Born Out of Struggle (Part 1)","/born-out-of-struggle-part-1/"]],
    "social justice":[[
        "Born Out of Struggle (Part 1)","/born-out-of-struggle-part-1/"],
        ["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice/"],
        ["Dear Resident","/dear-resident-2/"]],
    "spring 2009 issue":[[
        "Born Out of Struggle (Part 1)","/born-out-of-struggle-part-1/"],
        ["The Obama Cave","/the-obama-cave/"],
        ["Youths Take Charge","/youths-take-charge/"],
        ["The Scene","/the-scene/"],
        ["Inauguration","/inauguration/"],
        ["Is South Shore Clean?","/is-south-shore-clean/"],
        ["Play Now, Pay Later","/play-now-pay-later/"],
        ["Cafeteria Food","/cafeteria-food/"],
        ["Teacher of the Month","/teacher-of-the-month/"],
        ["Memories of R. Taylor","/memories-of-r-taylor/"],
        ["Voice of the Voiceless","/voice-of-the-voiceless/"],
        ["Food Deserts","/food-deserts/"],
        ["Where I'm Coming From","/where-im-coming-from/"],
        ["A Day in the Life of a JROTC Cadet","/a-day-in-the-life-of-a-jrotc-cadet/"],
        ["CPS Fan Restrictions","/cps-fan-restrictions/"],
        ["A Stacked Deck","/a-stacked-deck/"],
        ["The CHA Plan Is Dead","/the-cha-plan-is-dead/"],
        ["Homeless Vets Speak Out","/homeless-vets-speak-out/"],
        ["The White House Agenda for the Poor","/the-white-house-agenda-for-the-poor/"],
        ["Harold Ickes Homes Update","/harold-ickes-homes-update/"],
        ["Ickes Leader Challenges CHA CEO","/ickes-leader-challenges-cha-ceo/"],
        ["CHA’s Safe Harbor Gets Bigger","/chas-safe-harbor-gets-bigger/"],
        ["Residents Blame CHA for School Closures","/residents-blame-cha-for-school-closures/"],
        ["Under Fire, Board Closes Schools Anyway","/under-fire-board-closes-schools-anyway/"],
        ["U. S. Citizens Decry Relatives’ Deportation","/u-s-citizens-decry-relatives-deportation/"],
        ["Immigration Concerns","/immigration-concerns/"],
        ["Burge Victims’ Attorneys Fight Transfers","/burge-victims-attorneys-fight-transfers/"],
        ["Wrongfully Convicted Man Files New Petition for Justice","/wrongfully-convicted-man-files-new-petition-for-justice/"],
        ["Cops Fight Their Own Over Burge","/cops-fight-their-own-over-burge/"],
        ["Grandparents Raising Grandchildren","/grandparents-raising-grandchildren/"],
        ["Child Sex Abuse: The Hidden Holocaust","/child-sex-abuse-the-hidden-holocaust/"],
        ["Protestors Target Clinic Closures","/protestors-target-clinic-closures/"],
        ["A Health Report on Aneurysm","/a-health-report-on-aneurysm/"],
        ["Black History Tour Marks Historical Undertaking","/black-history-tour-marks-historical-undertaking/"],
        ["Longest Living ABLA Homes Resident Dies","/longest-living-abla-homes-resident-dies/"],
        ["How Should Replacement U. S. Senators Be Chosen?","/how-should-replacement-u-s-senators-be-chosen/"]],
    "election":[[
        "The Obama Cave","/the-obama-cave/"],
        ["Cook County Presidential Race","/cook-county-presidential-race/"],
        ["Presidential Election Notebook","/presidential-election-notebook/"],
        ["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections/"],
        ["A Taylor-Made Election","/a-taylor-made-election/"],
        ["Wipe Out","/wipe-out/"],
        ["Cabrini-Green Election","/cabrini-green-election/"],
        ["Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes/"],
        ["2004 Election Focal Points","/2004-election-focal-points/"],
        ["Crystal Clear Views","/crystal-clear-views-7/"],
        ["Sixth District Race Makes History","/sixth-district-race-makes-history/"],
        ["2nd U.S. Congressional District Race","/2nd-u-s-congressional-district-race/"],
        ["U.S. Senate Candidate Joyce Washington","/u-s-senate-candidate-joyce-washington/"],
        ["Vote '96: Conventional Colors","/vote-96-conventional-colors-2/"]],
    "political campaign":[[
        "The Obama Cave","/the-obama-cave/"],
        ["Chicago's Hottest Elections","/chicagos-hottest-elections/"]],
    "voting":[[
        "The Obama Cave","/the-obama-cave/"],
        ["Presidential Election Notebook","/presidential-election-notebook/"],
        ["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections/"],
        ["A Taylor-Made Election","/a-taylor-made-election/"],
        ["More CHA Residents Voting Woes","/more-cha-residents-voting-woes/"],
        ["Wipe Out","/wipe-out/"],
        ["Cabrini-Green Election","/cabrini-green-election/"],
        ["Crystal Clear Views","/crystal-clear-views-7/"]],
    "2008 presidential election":[[
        "Youths Take Charge","/youths-take-charge/"],
        ["The Scene","/the-scene/"],
        ["Inauguration","/inauguration/"]],
    "youth voting":[[
        "Youths Take Charge","/youths-take-charge/"]],
    "Early Voting":[[
        "The Scene","/the-scene/"]],
    "presidential inauguration":[[
        "Inauguration","/inauguration/"]],
    "littering":[[
        "Is South Shore Clean?","/is-south-shore-clean/"]],
    "public sanitation":[[
        "Is South Shore Clean?","/is-south-shore-clean/"]],
    "South Shore":[[
        "Is South Shore Clean?","/is-south-shore-clean/"]],
    "night school":[[
        "Play Now, Pay Later","/play-now-pay-later/"]],
    "truancy":[[
        "Play Now, Pay Later","/play-now-pay-later/"]],
    "child obesity":[[
        "Cafeteria Food","/cafeteria-food/"]],
    "South Shore High School":[[
        "Cafeteria Food","/cafeteria-food/"]],
    "teacher of the month":[[
        "Teacher of the Month","/teacher-of-the-month/"]],
    "in memoriam":[[
        "Voice of the Voiceless","/voice-of-the-voiceless/"]],
    "inspiration":[[
        "Voice of the Voiceless","/voice-of-the-voiceless/"],
        ["Hope Has a Way","/hope-has-a-way/"],
        ["A Teen's Shattered Dreams","/a-teens-shattered-dreams/"]],
    "obituary":[[
        "Voice of the Voiceless","/voice-of-the-voiceless/"]],
    "Food Desert":[[
        "Food Deserts","/food-deserts/"]],
    "food scarcity":[[
        "Food Deserts","/food-deserts/"]],
    "grocery shopping":[[
        "Food Deserts","/food-deserts/"]],
    "nutrition":[[
        "Food Deserts","/food-deserts/"]],
    "obesity":[[
        "Food Deserts","/food-deserts/"]],
    "Chicago teens":[[
        "Where I'm Coming From","/where-im-coming-from/"]],
    "teen issues":[[
        "Where I'm Coming From","/where-im-coming-from/"]],
    "Chicago Military Academy":[[
        "A Day in the Life of a JROTC Cadet","/a-day-in-the-life-of-a-jrotc-cadet/"]],
    "basketball":[[
        "CPS Fan Restrictions","/cps-fan-restrictions/"]],
    "sports administration":[[
        "CPS Fan Restrictions","/cps-fan-restrictions/"]],
    "circulation":[[
        "The Spring 2009 Issue of Residents' Journal is Now Online","/the-spring-2009-issue-of-residents-journal-is-now-online/"],
        ["The Fall 2008 Issue of Residents' Journal is Now Online","/the-fall-2008-issue-of-residents-journal-is-now-online/"]],
    "online journalism":[[
        "The Spring 2009 Issue of Residents' Journal is Now Online","/the-spring-2009-issue-of-residents-journal-is-now-online/"],
        ["The Fall 2008 Issue of Residents' Journal is Now Online","/the-fall-2008-issue-of-residents-journal-is-now-online/"]],
    "federal funding":[[
        "The CHA Plan Is Dead","/the-cha-plan-is-dead/"],
        ["The White House Agenda for the Poor","/the-white-house-agenda-for-the-poor/"]],
    "mixed income communities":[[
        "The CHA Plan Is Dead","/the-cha-plan-is-dead/"],
        ["There's H.O.P.E. for Gary Residents","/theres-h-o-p-e-for-gary-residents/"],
        ["Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes/"],
        ["Bronzeville Community Alert","/bronzeville-community-alert/"],
        ["Oops, They Did It Again","/oops-they-did-it-again/"],
        ["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas/"],
        ["The Shocking Truth about CHA","/the-shocking-truth-about-cha/"],
        ["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations/"],
        ["National Housing Crisis","/national-housing-crisis/"],
        ["Relocation Rights Contract","/relocation-rights-contract/"],
        ["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"],
        ["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man/"]],
    "Project CHALENG":[[
        "Homeless Vets Speak Out","/homeless-vets-speak-out/"]],
    "Vetarans Administration":[[
        "Homeless Vets Speak Out","/homeless-vets-speak-out/"]],
    "veterans":[[
        "Homeless Vets Speak Out","/homeless-vets-speak-out/"]],
    "Volunteers of America":[[
        "Homeless Vets Speak Out","/homeless-vets-speak-out/"]],
    "federal policy":[[
        "The White House Agenda for the Poor","/the-white-house-agenda-for-the-poor/"]],
    "No Child Left Behind Program":[[
        "The White House Agenda for the Poor","/the-white-house-agenda-for-the-poor/"]],
    "President Barack Obama":[[
        "The White House Agenda for the Poor","/the-white-house-agenda-for-the-poor/"]],
    "social security":[[
        "The White House Agenda for the Poor","/the-white-house-agenda-for-the-poor/"],
        ["Illinois Democrats Resist Social Security Privatization","/illinois-democrats-resist-social-security-privatization/"]],
    "LAC":[[
        "Ickes Leader Challenges CHA CEO","/ickes-leader-challenges-cha-ceo/"],
        ["Congress Accuses HUD of Mismanagement","/congress-accuses-hud-of-mismanagement/"],
        ["Stop The Violence","/stop-the-violence-3/"],
        ["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections/"],
        ["Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes/"],
        ["Harold Ickes News","/harold-ickes-news-5/"],
        ["Representing Residents","/representing-residents/"],
        ["Positive Residents of the CHA","/positive-residents-of-the-cha/"],
        ["Productive Men of the CHA","/productive-men-of-the-cha/"],
        ["ABLA News","/abla-news-2/"],
        ["Seniors form new organization","/seniors-form-new-organization/"],
        ["What's Happening in ABLA?","/whats-happening-in-abla/"]],
    "CAC":[[
        "CHA’s Safe Harbor Gets Bigger","/chas-safe-harbor-gets-bigger/"],
        ["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing/"]],
    "Safe Harbor":[[
        "CHA’s Safe Harbor Gets Bigger","/chas-safe-harbor-gets-bigger/"]],
    "Chicago Board of Education":[[
        "Under Fire, Board Closes Schools Anyway","/under-fire-board-closes-schools-anyway/"]],
    "deportation":[[
        "U. S. Citizens Decry Relatives’ Deportation","/u-s-citizens-decry-relatives-deportation/"]],
    "immigration":[[
        "Immigration Concerns","/immigration-concerns/"],
        ["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice/"]],
    "Immigration and Customs Enforcement":[[
        "Immigration Concerns","/immigration-concerns/"]],
    "JCUA":[[
        "Immigration Concerns","/immigration-concerns/"]],
    "petition":[[
        "Immigration Concerns","/immigration-concerns/"],
        ["CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills/"]],
    "lawsuits":[[
        "Burge Victims’ Attorneys Fight Transfers","/burge-victims-attorneys-fight-transfers/"],
        ["Cops Fight Their Own Over Burge","/cops-fight-their-own-over-burge/"],
        ["If the Suit Fits, Who Wears It?","/if-the-suit-fits-who-wears-it/"],
        ["A Championship Victory","/a-championship-victory/"],
        ["Altgeld Gardens Lawsuit Settlement","/altgeld-gardens-lawsuit-settlement/"],
        ["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history/"],
        ["Stop the Violence","/stop-the-violence-12/"],
        ["Stop The Violence","/stop-the-violence-13/"],
        ["Stop The Violence","/stop-the-violence-15/"]],
    "Fraternal Order of the Police":[[
        "Cops Fight Their Own Over Burge","/cops-fight-their-own-over-burge/"]],
    "police funding":[[
        "Cops Fight Their Own Over Burge","/cops-fight-their-own-over-burge/"]],
    "fixed income":[[
        "Grandparents Raising Grandchildren","/grandparents-raising-grandchildren/"]],
    "Grandfamily Support Program":[[
        "Grandparents Raising Grandchildren","/grandparents-raising-grandchildren/"]],
    "grandparents":[[
        "Grandparents Raising Grandchildren","/grandparents-raising-grandchildren/"]],
    "digital television":[[
        "House Passes Digital TV Delay","/house-passes-digital-tv-delay/"],
        ["Congress Still Trying for DTV Transition Delay","/congress-still-trying-for-dtv-transition-delay/"],
        ["Update: U. S. Senate Advances Digital TV Delay","/update-u-s-senate-advances-digital-tv-delay/"],
        ["Obama Urges Delay in Digital TV Shift","/obama-urges-delay-in-digital-tv-shift/"]],
    "media policy":[[
        "House Passes Digital TV Delay","/house-passes-digital-tv-delay/"],
        ["Congress Still Trying for DTV Transition Delay","/congress-still-trying-for-dtv-transition-delay/"],
        ["Update: U. S. Senate Advances Digital TV Delay","/update-u-s-senate-advances-digital-tv-delay/"],
        ["Obama Urges Delay in Digital TV Shift","/obama-urges-delay-in-digital-tv-shift/"]],
    "national legislation":[[
        "House Passes Digital TV Delay","/house-passes-digital-tv-delay/"]],
    "The Nielsen Company":[[
        "House Passes Digital TV Delay","/house-passes-digital-tv-delay/"],
        ["Update: U. S. Senate Advances Digital TV Delay","/update-u-s-senate-advances-digital-tv-delay/"]],
    "US House of Representatives":[[
        "House Passes Digital TV Delay","/house-passes-digital-tv-delay/"],
        ["Congress Still Trying for DTV Transition Delay","/congress-still-trying-for-dtv-transition-delay/"]],
    "DTV transition":[[
        "Update: U. S. Senate Advances Digital TV Delay","/update-u-s-senate-advances-digital-tv-delay/"],
        ["Obama Urges Delay in Digital TV Shift","/obama-urges-delay-in-digital-tv-shift/"],
        ["‘Train Wreck’ Expected for TV Transition","/train-wreck-expected-for-tv-transition/"]],
    "Chicago Urban League":[[
        "Youths Testify for Alternative Schools","/youths-testify-for-alternative-schools/"]],
    "education funding":[[
        "Youths Testify for Alternative Schools","/youths-testify-for-alternative-schools/"]],
    "Governor Blagojevich":[[
        "Roland Burris Tapped for Vacant U. S. Senate Seat","/roland-burris-tapped-for-vacant-u-s-senate-seat/"]],
    "investigation":[[
        "Roland Burris Tapped for Vacant U. S. Senate Seat","/roland-burris-tapped-for-vacant-u-s-senate-seat/"],
        ["Deadly Moves II","/deadly-moves-ii/"],
        ["Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle/"],
        ["A Questionable Connection","/a-questionable-connection/"],
        ["Deadly Moves - an update","/deadly-moves-an-update/"],
        ["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves/"],
        ["Stop The Violence","/stop-the-violence-14/"]],
    "Roland Burris":[[
        "Roland Burris Tapped for Vacant U. S. Senate Seat","/roland-burris-tapped-for-vacant-u-s-senate-seat/"]],
    "US senate appointment":[[
        "Roland Burris Tapped for Vacant U. S. Senate Seat","/roland-burris-tapped-for-vacant-u-s-senate-seat/"]],
    "automotive industry":[[
        "Obama: Bush Administration Automaker Plan a “Necessary Step.”","/obama-bush-administration-automaker-plan-a-necessary-step/"]],
    "bipartisanship":[[
        "Obama: Bush Administration Automaker Plan a “Necessary Step.”","/obama-bush-administration-automaker-plan-a-necessary-step/"]],
    "financial crisis":[[
        "Obama: Bush Administration Automaker Plan a “Necessary Step.”","/obama-bush-administration-automaker-plan-a-necessary-step/"]],
    "President George W. Bush":[[
        "Obama: Bush Administration Automaker Plan a “Necessary Step.”","/obama-bush-administration-automaker-plan-a-necessary-step/"]],
    "national healthcare":[[
        "President-Elect Obama Nominates Former Senator Secretary of Health and Human Services","/president-elect-obama-nominates-former-senator-secretary-of-health-and-human-services/"],
        ["Medicare Prescription Drug Benefit","/medicare-prescription-drug-benefit/"],
        ["The High Cost of Medicine","/the-high-cost-of-medicine/"]],
    "White House Office of Health Reform":[[
        "President-Elect Obama Nominates Former Senator Secretary of Health and Human Services","/president-elect-obama-nominates-former-senator-secretary-of-health-and-human-services/"]],
    "Human Rights Day":[[
        "Statement from President-elect Barack Obama on Human Rights Day","/statement-from-president-elect-barack-obama-on-human-rights-day/"]],
    "political reform":[[
        "The Times They Are A’Changing","/the-times-they-are-achanging/"]],
    "digital tv":[[
        "‘Train Wreck’ Expected for TV Transition","/train-wreck-expected-for-tv-transition/"]],
    "renovation":[[
        "CHA Seniors Keep Waiting to Return Home","/cha-seniors-keep-waiting-to-return-home/"],
        ["Archer Courts: A Model Rehab","/archer-courts-a-model-rehab/"],
        ["The New Cook County Hospital","/the-new-cook-county-hospital/"],
        ["Seniors Complain About Renovations","/seniors-complain-about-renovations/"],
        ["Harold Ickes News","/harold-ickes-news-8/"],
        ["Harold Ickes News","/harold-ickes-news-10/"],
        ["Seniors Quality of Life On The Rise","/seniors-quality-of-life-on-the-rise/"],
        ["All Things Old and New at Harold Ickes Homes","/all-things-old-and-new/"]],
    "public housing demolition":[[
        "U.S. Reps Call For Moratorium On Public Housing Demolitions","/u-s-reps-call-for-moratorium-on-public-housing-demolitions/"]],
    "police harassment":[[
        "Harold L. Ickes Homes News","/harold-l-ickes-homes-news/"]],
    "unsafe living conditions":[[
        "CHA Goes on the Defensive about Child's Death","/cha-goes-on-the-defensive-about-childs-death/"]],
    "youth danger":[[
        "CHA Goes on the Defensive about Child's Death","/cha-goes-on-the-defensive-about-childs-death/"]],
    "Low Income Housing Trust Fund":[[
        "New Funding for Chicago Rental Subsidies","/new-funding-for-chicago-rental-subsidies/"]],
    "non-profits":[[
        "Sisters Form a Brotherhood","/sisters-form-a-brotherhood/"]],
    "Operation Brotherhood":[[
        "Sisters Form a Brotherhood","/sisters-form-a-brotherhood/"]],
    "Women's History Month":[[
        "Sisters Form a Brotherhood","/sisters-form-a-brotherhood/"]],
    "women's rights":[[
        "Sisters Form a Brotherhood","/sisters-form-a-brotherhood/"]],
    "One Strike Policy":[[
        "Lathrop Residents Want Vacant Units Occupied","/lathrop-residents-want-vacant-units-occupied/"],
        ["Penalties","/penalties/"],
        ["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"]],
    "protestors":[[
        "Lathrop Residents Want Vacant Units Occupied","/lathrop-residents-want-vacant-units-occupied/"]],
    "poem":[[
        "The Wells","/the-wells/"]],
    "The Wells":[[
        "The Wells","/the-wells/"]],
    "winter 2008 issue":[[
        "The Wells","/the-wells/"],
        ["Everyday Life","/everyday-life/"],
        ["Stereotypes","/stereotypes/"],
        ["A Year Later","/a-year-later/"],
        ["Growing Up","/growing-up/"],
        ["This Ain't That","/this-aint-that/"],
        ["Penalties","/penalties/"],
        ["Me and My Hood","/me-and-my-hood/"],
        ["I Ain't...","/i-aint/"],
        ["Haters","/haters/"],
        ["Bonnita's Autobiography","/bonnitas-autobiography/"],
        ["Drug Addicts: A Childhood Life with a Mother on Drugs Part Two","/drug-addicts-a-childhood-life-with-a-mother-on-drugs-part-two/"],
        ["Shop Talk","/shop-talk/"],
        ["Domestic Violence Awareness Report","/domestic-violence-awareness-report/"],
        ["Genetic Testing and Personal Responsibility","/genetic-testing-and-personal-responsibility/"],
        ["Crystal Clear Views","/homelessness-a-constant-american-tragedy/"],
        ["The Aftermath of Relocation","/the-aftermath-of-relocation/"],
        ["The Pros and Cons of Relocation","/pros-and-cons-of-relocation/"],
        ["Lathrop Homes Targeted for Redevelopment","/lathrop-homes-targeted-for-redevelopment/"],
        ["Harold Ickes News","/harold-ickes-news/"],
        ["Seniors Protest Rent Rise","/seniors-protest-rent-rise/"],
        ["Cook County Health Bureau News","/cook-county-health-bureau-news/"],
        ["A Katrina Victim's Personal Ordeal","/a-katrina-victims-personal-ordeal-2/"],
        ["Tenants Council Battles To Represent Residents","/tenants-council-battles-to-represent-residents/"],
        ["Jackson Visits Ickes","/jackson-visits-ickes/"],
        ["Are CPD Contact Cards Unconstitutional?","/are-cpd-contact-cards-unconstitutional/"],
        ["CHA New Work Rule Questioned","/cha-new-work-rule-questioned/"],
        ["Who Could Miss The Hole?","/who-could-miss-the-hole/"]],
    "public housing stereotypes":[[
        "Stereotypes","/stereotypes/"],
        ["ABLA News","/abla-news-2/"]],
    "poetry":[[
        "Me and My Hood","/me-and-my-hood/"],
        ["I Ain't...","/i-aint/"]],
    "drug use":[[
        "Drug Addicts: A Childhood Life with a Mother on Drugs Part Two","/drug-addicts-a-childhood-life-with-a-mother-on-drugs-part-two/"],
        ["It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini/"],
        ["A 'One Strike' Battle Planned","/a-one-strike-battle-planned/"]],
    "rent prices":[[
        "Seniors Protest Rent Rise","/seniors-protest-rent-rise/"],
        ["Transforming CHA: How To Save On Rent","/transforming-cha-how-to-save-on-rent/"]],
    "Cook County":[[
        "Cook County Health Bureau News","/cook-county-health-bureau-news/"],
        ["Sixth District Race Makes History","/sixth-district-race-makes-history/"],
        ["Stop The Violence","/stop-the-violence-7/"],
        ["Stop the Violence","/stop-the-violence-12/"]],
    "health department":[[
        "Cook County Health Bureau News","/cook-county-health-bureau-news/"]],
    "Hurricane Katrina":[[
        "A Katrina Victim's Personal Ordeal","/a-katrina-victims-personal-ordeal-2/"]],
    "the Hole":[[
        "Who Could Miss The Hole?","/who-could-miss-the-hole/"]],
    "advocacy":[[
        "A Special Tribute","/a-special-tribute/"],
        ["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice/"],
        ["Residents: What People Want","/residents-what-people-want/"],
        ["Oops, They Did It Again","/oops-they-did-it-again/"],
        ["Stop The Violence","/stop-the-violence-7/"],
        ["Making CHA Accessible","/making-cha-accessible/"],
        ["National Housing Crisis","/national-housing-crisis/"],
        ["Welfare Reform: Lost In Space","/welfare-reform-lost-in-space/"],
        ["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"],
        ["CHA Family Service Connectors","/cha-family-service-connectors/"]],
    "Izora Davis":[[
        "A Special Tribute","/a-special-tribute/"]],
    "january 2007 issue":[[
        "A Special Tribute","/a-special-tribute/"],
        ["Crystal Clear Views","/crystal-clear-views-2/"],
        ["Whose School Is It?","/whose-school-is-it/"],
        ["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice/"],
        ["A Questionable Connection Update","/a-questionable-connection-update/"],
        ["Guard Recklessly Shoots CHA Youth","/guard-recklessly-shoots-cha-youth/"],
        ["Altgeld Gardens News","/altgeld-garden-news/"],
        ["Ickes and Other CHA News","/ickes-and-other-cha-news/"],
        ["Last Days At Ogden Courts","/last-days-at-ogden-courts/"],
        ["Security Problems Continue for Residents","/security-problems-continue-for-residents/"],
        ["Checking Chicago's War on Drugs","/checking-chicagos-war-on-drugs/"],
        ["House of Screams","/house-of-screams/"],
        ["Publisher's Box","/publishers-box/"]],
    "living conditions":[[
        "A Special Tribute","/a-special-tribute/"],
        ["Victory at Bridgeport Homes","/victory-at-bridgeport-homes/"],
        ["Harold Ickes News","/harold-ickes-news-2/"],
        ["Tales of Lawndale Housing","/tales-of-lawndale-housing/"],
        ["Utility Problems Persist for Residents","/utility-problems-persist-for-residents/"],
        ["Senior Rehab Update","/senior-rehab-update/"],
        ["Archer Courts: A Model Rehab","/archer-courts-a-model-rehab/"],
        ["Harold Ickes News","/harold-ickes-news-5/"],
        ["Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha/"],
        ["A Report On Management at Ogden Courts","/a-report-on-management-at-ogden-courts/"],
        ["Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update/"],
        ["ABLA Relocation Report","/abla-relocation-report/"],
        ["CHA to Buy Back Laundry Tokens","/cha-to-buy-back-laundry-tokens/"],
        ["The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath/"],
        ["Access Report","/access-report-2/"],
        ["Residents Fight Vacate Orders","/residents-fight-vacate-orders/"],
        ["Flannery Homes Update","/flannery-homes-update-2/"],
        ["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph/"],
        ["Horner Annex Reborn","/horner-annex-reborn/"],
        ["Washington Park: The Dying Hope","/washington-park-the-dying-hope/"]],
    "McCormick Place":[[
        "A Special Tribute","/a-special-tribute/"]],
    "S. Lake Park":[[
        "A Special Tribute","/a-special-tribute/"]],
    "tribute":[[
        "A Special Tribute","/a-special-tribute/"]],
    "advice":[[
        "Crystal Clear Views","/crystal-clear-views-2/"],
        ["Crystal Clear Views","/crystal-clear-views-3/"],
        ["Crystal Clear Views","/crystal-clear-views-4/"],
        ["Crystal Clear Views","/crystal-clear-views-6/"],
        ["Crystal Clear Views","/crystal-clear-views-7/"],
        ["Crystal Clear Views","/crystal-clear-views-8/"],
        ["Dear Resident","/dear-resident/"],
        ["Crystal Clear Views","/crystal-clear-views-9/"],
        ["Dear Resident","/dear-resident-12/"],
        ["Dear Resident","/dear-resident-9/"],
        ["Dear Resident","/dear-resident-11/"]],
    "asthma":[[
        "Crystal Clear Views","/crystal-clear-views-2/"]],
    "symptoms":[[
        "Crystal Clear Views","/crystal-clear-views-2/"]],
    "attendance":[[
        "Whose School Is It?","/whose-school-is-it/"]],
    "attendance boundaries":[[
        "Whose School Is It?","/whose-school-is-it/"]],
    "Chicago Latino community":[[
        "Whose School Is It?","/whose-school-is-it/"]],
    "Little Village High School":[[
        "Whose School Is It?","/whose-school-is-it/"]],
    "referendum":[[
        "Whose School Is It?","/whose-school-is-it/"]],
    "student population":[[
        "Whose School Is It?","/whose-school-is-it/"]],
    "citizenship":[[
        "Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice/"]],
    "illegal immigration":[[
        "Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice/"]],
    "Illinois Coalition for Immigrant and Refugee Rights":[[
        "Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice/"]],
    "legalization":[[
        "Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice/"]],
    "North American Free Trade Agreement":[[
        "Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice/"]],
    "reform":[[
        "Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice/"],
        ["Illinois Democrats Resist Social Security Privatization","/illinois-democrats-resist-social-security-privatization/"],
        ["Update: Zoning and Affordable Housing","/update-zoning-and-affordable-housing/"],
        ["School Reform: Which Tax?","/school-reform-which-tax/"]],
    "undocumented workers":[[
        "Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice/"]],
    "VOTE":[[
        "Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice/"],
        ["Tales of Lawndale Housing","/tales-of-lawndale-housing/"],
        ["Ex Marks The Spot","/ex-marks-the-spot/"],
        ["Horner Annex Reborn","/horner-annex-reborn/"]],
    "CHA donations":[[
        "A Questionable Connection Update","/a-questionable-connection-update/"]],
    "questionable practices":[[
        "A Questionable Connection Update","/a-questionable-connection-update/"]],
    "gun violence":[[
        "Guard Recklessly Shoots CHA Youth","/guard-recklessly-shoots-cha-youth/"],
        ["Stop The Violence","/stop-the-violence-5/"],
        ["Stop The Violence","/stop-the-violence-9/"],
        ["It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini/"],
        ["Harold Ickes News","/harold-ickes-news-9/"],
        ["African-American Male Suicides","/african-american-male-suicides/"],
        ["Stop The Violence","/stop-the-violence-13/"],
        ["Stop the Violence","/stop-the-violence-16/"],
        ["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation/"],
        ["When Will It End?","/when-will-it-end/"],
        ["Stop the Violence","/stop-the-violence-17/"]],
    "remodeling":[[
        "Altgeld Gardens News","/altgeld-garden-news/"],
        ["Harold Ickes News","/harold-ickes-news-6/"],
        ["Transforming CHA: New Lights on Dark Passage","/transforming-cha-new-lights-on-dark-passage/"]],
    "ogden courts":[[
        "Last Days At Ogden Courts","/last-days-at-ogden-courts/"],
        ["Stop The Violence","/stop-the-violence-3/"],
        ["A Report On Management at Ogden Courts","/a-report-on-management-at-ogden-courts/"],
        ["Stop The Violence","/stop-the-violence-8/"],
        ["Maintenance Defects at Ogden Courts","/maintenance-defects-at-ogden-courts/"],
        ["Stop The Violence","/stop-the-violence-10/"]],
    "low income housing security":[[
        "Security Problems Continue for Residents","/security-problems-continue-for-residents/"]],
    "illegal drugs":[[
        "Checking Chicago's War on Drugs","/checking-chicagos-war-on-drugs/"],
        ["Troubling Development Update","/troubling-development-update/"]],
    "injustice":[[
        "House of Screams","/house-of-screams/"],
        ["Stop The Violence","/stop-the-violence-7/"]],
    "Jon Burge":[[
        "House of Screams","/house-of-screams/"]],
    "police brutality":[[
        "House of Screams","/house-of-screams/"],
        ["Stop The Violence","/stop-the-violence-4/"],
        ["Stop The Violence","/stop-the-violence-13/"],
        ["Stop the Violence II","/stop-the-violence-ii/"]],
    "Ulysses U.S. Floyd":[[
        "House of Screams","/house-of-screams/"],
        ["Deadly Moves: In Too Deep","/deadly-moves-in-too-deep/"]],
    "freedom of the press":[[
        "Publisher's Box","/publishers-box/"]],
    "police mistreatment":[[
        "Publisher's Box","/publishers-box/"]],
    "Apostolic Church Choir of Chicago":[[
        "Black History Through Performance","/black-history-through-performance/"]],
    "black history month":[[
        "Black History Through Performance","/black-history-through-performance/"],
        ["Dear Resident","/dear-resident-2/"],
        ["Dear Resident","/dear-resident-7/"],
        ["Black History Section: A Celebrated Life","/black-history-section-a-celebrated-life/"]],
    "Cliff Kelley":[[
        "Black History Through Performance","/black-history-through-performance/"]],
    "entertainment":[[
        "Black History Through Performance","/black-history-through-performance/"],
        ["CHA Development News","/cha-development-news/"],
        ["The Compassionate Blues","/the-compassionate-blues/"]],
    "February":[[
        "Black History Through Performance","/black-history-through-performance/"]],
    "february march 2006 issue":[[
        "Black History Through Performance","/black-history-through-performance/"],
        ["Stop the Violence","/stop-the-violence-2/"],
        ["CHA Development News","/cha-development-news/"],
        ["Pilsen Guards Against Gentrifyers","/pilsen-guards-against-gentrifyers/"],
        ["CHA Contracting Woes","/cha-contracting-woes/"],
        ["State Passes Support for Renters","/state-passes-support-for-renters/"],
        ["Bird Flu Pandemic Expected","/bird-flu-pandemic-expected/"],
        ["Jones vs. Tatum","/jones-vs-tatum/"],
        ["Rush vs. Jackson","/rush-vs-jackson/"],
        ["Cook County Presidential Race","/cook-county-presidential-race/"],
        ["Troubling Development Update","/troubling-development-update/"],
        ["Deadly Moves II","/deadly-moves-ii/"],
        ["Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle/"],
        ["Victory at Bridgeport Homes","/victory-at-bridgeport-homes/"],
        ["Publisher's Box","/publishers-box-2/"]],
    "Frederick Douglass":[[
        "Black History Through Performance","/black-history-through-performance/"]],
    "Harlan High School":[[
        "Black History Through Performance","/black-history-through-performance/"]],
    "Kevin McIlvaine":[[
        "Black History Through Performance","/black-history-through-performance/"]],
    "Positive Reinforcement through Identity Development and Education":[[
        "Black History Through Performance","/black-history-through-performance/"]],
    "pride":[[
        "Black History Through Performance","/black-history-through-performance/"],
        ["Dear Resident","/dear-resident-5/"]],
    "Michael Barlow Center":[[
        "Stop the Violence","/stop-the-violence-2/"]],
    "St. Leanord's Ministries":[[
        "Stop the Violence","/stop-the-violence-2/"]],
    "Annual Low End Productions Basketball League":[[
        "CHA Development News","/cha-development-news/"]],
    "culture":[[
        "CHA Development News","/cha-development-news/"],
        ["Black Metropolis National Heritage Area Project","/black-metropolis-national-heritage-area-project/"],
        ["The Compassionate Blues","/the-compassionate-blues/"],
        ["Traveling: From Therapy to Art","/traveling-from-therapy-to-art/"]],
    "Sunday Night Steppers Set":[[
        "CHA Development News","/cha-development-news/"]],
    "Lipe Property Company":[[
        "Pilsen Guards Against Gentrifyers","/pilsen-guards-against-gentrifyers/"]],
    "neighborhood development":[[
        "Pilsen Guards Against Gentrifyers","/pilsen-guards-against-gentrifyers/"]],
    "press conference":[[
        "Pilsen Guards Against Gentrifyers","/pilsen-guards-against-gentrifyers/"],
        ["Transforming CHA: New Lights on Dark Passage","/transforming-cha-new-lights-on-dark-passage/"]],
    "William Moorehead and Associates":[[
        "CHA Contracting Woes","/cha-contracting-woes/"]],
    "funding":[[
        "State Passes Support for Renters","/state-passes-support-for-renters/"],
        ["Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle/"],
        ["Publisher's Box","/publishers-box-2/"],
        ["There's H.O.P.E. for Gary Residents","/theres-h-o-p-e-for-gary-residents/"],
        ["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects/"],
        ["Myths and Urban Legends","/myths-and-urban-legends/"],
        ["The Terror Within","/the-terror-within/"],
        ["SPECIAL FEATURE: City Gets CHA Funds Update","/special-feature-city-gets-cha-funds-update/"],
        ["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds/"],
        ["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting/"],
        ["Cold War Echoes","/cold-war-echoes/"],
        ["School Reform: Which Tax?","/school-reform-which-tax/"]],
    "Rental Housing Support Program":[[
        "State Passes Support for Renters","/state-passes-support-for-renters/"]],
    "bird flu":[[
        "Bird Flu Pandemic Expected","/bird-flu-pandemic-expected/"]],
    "Influenza Preparedness":[[
        "Bird Flu Pandemic Expected","/bird-flu-pandemic-expected/"]],
    "national health":[[
        "Bird Flu Pandemic Expected","/bird-flu-pandemic-expected/"]],
    "pandemic":[[
        "Bird Flu Pandemic Expected","/bird-flu-pandemic-expected/"]],
    "Senate Bill 2112":[[
        "Bird Flu Pandemic Expected","/bird-flu-pandemic-expected/"]],
    "vaccines":[[
        "Bird Flu Pandemic Expected","/bird-flu-pandemic-expected/"]],
    "campaign":[[
        "Jones vs. Tatum","/jones-vs-tatum/"],
        ["Cook County Presidential Race","/cook-county-presidential-race/"],
        ["Presidential Election Notebook","/presidential-election-notebook/"],
        ["HIV/AIDs Crisis","/hivaids-crisis/"]],
    "Lovanna Jones":[[
        "Jones vs. Tatum","/jones-vs-tatum/"]],
    "primary election":[[
        "Jones vs. Tatum","/jones-vs-tatum/"],
        ["Rush vs. Jackson","/rush-vs-jackson/"]],
    "Ranoule Tatum":[[
        "Jones vs. Tatum","/jones-vs-tatum/"]],
    "state representative":[[
        "Jones vs. Tatum","/jones-vs-tatum/"]],
    "Bobby Rush":[[
        "Rush vs. Jackson","/rush-vs-jackson/"]],
    "Phillip Jackson":[[
        "Rush vs. Jackson","/rush-vs-jackson/"]],
    "contributions":[[
        "Cook County Presidential Race","/cook-county-presidential-race/"]],
    "Cook County Board":[[
        "Cook County Presidential Race","/cook-county-presidential-race/"]],
    "John Stroger":[[
        "Cook County Presidential Race","/cook-county-presidential-race/"]],
    "primary race":[[
        "Cook County Presidential Race","/cook-county-presidential-race/"]],
    "drug activity":[[
        "Troubling Development Update","/troubling-development-update/"]],
    "drug issues":[[
        "Troubling Development Update","/troubling-development-update/"],
        ["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2/"]],
    "gang activity":[[
        "Troubling Development Update","/troubling-development-update/"],
        ["Deadly Moves: In Too Deep","/deadly-moves-in-too-deep/"],
        ["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2/"]],
    "Leclaire Courts":[[
        "Troubling Development Update","/troubling-development-update/"],
        ["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections/"],
        ["Last Day in 4525","/last-day-in-4525/"],
        ["LeClaire Courts","/leclaire-courts/"]],
    "police protection":[[
        "Troubling Development Update","/troubling-development-update/"],
        ["Deadly Moves - an update","/deadly-moves-an-update/"],
        ["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force/"]],
    "CPD":[[
        "Deadly Moves II","/deadly-moves-ii/"],
        ["Deadly Moves - an update","/deadly-moves-an-update/"],
        ["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force/"],
        ["Deadly Moves: Troubling Development","/deadly-moves-troubling-development/"],
        ["If the Suit Fits, Who Wears It?","/if-the-suit-fits-who-wears-it/"],
        ["A Championship Victory","/a-championship-victory/"],
        ["Seniors Graduate Police Class","/seniors-graduate-police-class/"],
        ["Residents Deny Security Improvements","/residents-deny-security-improvements/"],
        ["Stop The Violence","/stop-the-violence-10/"],
        ["Stop The Violence","/stop-the-violence-15/"],
        ["Stop the Violence II","/stop-the-violence-ii/"]],
    "murder rate":[[
        "Deadly Moves II","/deadly-moves-ii/"],
        ["Drug War Diagnosis","/drug-war-diagnosis/"]],
    "17th Ward Democratic Organization":[[
        "Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle/"]],
    "A Questionable Connection":[[
        "Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle/"],
        ["Victory at Bridgeport Homes","/victory-at-bridgeport-homes/"]],
    "donations":[[
        "Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle/"],
        ["A Questionable Connection","/a-questionable-connection/"]],
    "Bridgeport Homes":[[
        "Victory at Bridgeport Homes","/victory-at-bridgeport-homes/"]],
    "management":[[
        "Victory at Bridgeport Homes","/victory-at-bridgeport-homes/"],
        ["Harold Ickes News","/harold-ickes-news-5/"],
        ["Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha/"],
        ["Stop The Violence","/stop-the-violence-8/"],
        ["Harold Ickes News","/harold-ickes-news-9/"],
        ["Maintenance Defects at Ogden Courts","/maintenance-defects-at-ogden-courts/"],
        ["Ickes' Homes New Managers","/ickes-homes-new-managers/"],
        ["Structural Justice","/structural-justice/"],
        ["HUD Head: CHA Off Troubled List","/hud-head-cha-off-troubled-list/"],
        ["Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update/"],
        ["Flannery Homes Update","/flannery-homes-update/"],
        ["The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath/"],
        ["CHA and Latinos: Interview with Joe Shuldiner","/cha-and-latinos-interview-with-joe-shuldiner/"],
        ["Flannery Homes Update","/flannery-homes-update-2/"],
        ["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph/"],
        ["LeClaire Courts","/leclaire-courts/"]],
    "awards":[[
        "Publisher's Box","/publishers-box-2/"]],
    "Deadly Moves":[[
        "Publisher's Box","/publishers-box-2/"],
        ["Deadly Moves - an update","/deadly-moves-an-update/"]],
    "hiatus":[[
        "Publisher's Box","/publishers-box-2/"]],
    "Media Collaboration":[[
        "Publisher's Box","/publishers-box-2/"]],
    "Society of Professional Journalists":[[
        "Publisher's Box","/publishers-box-2/"]],
    "february march 2005 issue":[[
        "Harold Ickes News","/harold-ickes-news-2/"],
        ["Crystal Clear Views","/crystal-clear-views-3/"],
        ["Black Metropolis National Heritage Area Project","/black-metropolis-national-heritage-area-project/"],
        ["Healthcare Justice Act Raises Hopes","/healthcare-justice-act-raises-hopes/"],
        ["Senior Services 2005 and Beyond","/senior-services-2005-and-beyond/"],
        ["Tales of Lawndale Housing","/tales-of-lawndale-housing/"],
        ["The John Howard Association","/the-john-howard-association/"],
        ["Illinois Democrats Resist Social Security Privatization","/illinois-democrats-resist-social-security-privatization/"],
        ["Utility Problems Persist for Residents","/utility-problems-persist-for-residents/"],
        ["There's H.O.P.E. for Gary Residents","/theres-h-o-p-e-for-gary-residents/"],
        ["A Questionable Connection","/a-questionable-connection/"]],
    "National Teachers' Academy":[[
        "Harold Ickes News","/harold-ickes-news-2/"],
        ["Harold Ickes News","/harold-ickes-news-3/"],
        ["Harold Ickes News","/harold-ickes-news-5/"]],
    "diet":[[
        "Crystal Clear Views","/crystal-clear-views-3/"]],
    "exercise":[[
        "Crystal Clear Views","/crystal-clear-views-3/"]],
    "lifestyle":[[
        "Crystal Clear Views","/crystal-clear-views-3/"]],
    "Black Metropolis":[[
        "Black Metropolis National Heritage Area Project","/black-metropolis-national-heritage-area-project/"]],
    "National Heritage Area":[[
        "Black Metropolis National Heritage Area Project","/black-metropolis-national-heritage-area-project/"]],
    "National Park Service":[[
        "Black Metropolis National Heritage Area Project","/black-metropolis-national-heritage-area-project/"]],
    "NHA":[[
        "Black Metropolis National Heritage Area Project","/black-metropolis-national-heritage-area-project/"]],
    "Campaign for Better Healthcare":[[
        "Healthcare Justice Act Raises Hopes","/healthcare-justice-act-raises-hopes/"]],
    "Healthcare Justice Act":[[
        "Healthcare Justice Act Raises Hopes","/healthcare-justice-act-raises-hopes/"]],
    "El Valor":[[
        "Senior Services 2005 and Beyond","/senior-services-2005-and-beyond/"]],
    "outreach":[[
        "Senior Services 2005 and Beyond","/senior-services-2005-and-beyond/"],
        ["Harold Ickes News","/harold-ickes-news-3/"],
        ["Residents: What People Want","/residents-what-people-want/"],
        ["HIV/AIDs Crisis","/hivaids-crisis/"],
        ["Operation ABLE","/operation-able/"],
        ["Harold Ickes Service Connectors","/harold-ickes-service-connectors/"],
        ["Residents Look to the Hills","/residents-look-to-the-hills/"],
        ["Dear Resident","/dear-resident-10/"]],
    "social services":[[
        "Senior Services 2005 and Beyond","/senior-services-2005-and-beyond/"],
        ["African-American Male Suicides","/african-american-male-suicides/"],
        ["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds/"],
        ["8,000 To Get Jobs Help","/8000-to-get-jobs-help/"]],
    "Lawndale Housing":[[
        "Tales of Lawndale Housing","/tales-of-lawndale-housing/"]],
    "maintenance":[[
        "Tales of Lawndale Housing","/tales-of-lawndale-housing/"],
        ["Harold Ickes News","/harold-ickes-news-5/"],
        ["Lathrop Homes News","/lathrop-homes-news/"],
        ["Stop The Violence","/stop-the-violence-8/"],
        ["Lathrop Homes Private Management","/lathrop-homes-private-management/"],
        ["Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update/"],
        ["Flannery Homes Update","/flannery-homes-update/"]],
    "Voices of the Ex-Offenders":[[
        "Tales of Lawndale Housing","/tales-of-lawndale-housing/"],
        ["Ex Marks The Spot","/ex-marks-the-spot/"]],
    "Illinois prisons":[[
        "The John Howard Association","/the-john-howard-association/"]],
    "John Howard Association":[[
        "The John Howard Association","/the-john-howard-association/"]],
    "prison reform":[[
        "The John Howard Association","/the-john-howard-association/"]],
    "George W. Bush":[[
        "Illinois Democrats Resist Social Security Privatization","/illinois-democrats-resist-social-security-privatization/"],
        ["Medicare Prescription Drug Benefit","/medicare-prescription-drug-benefit/"]],
    "CHANCE":[[
        "Utility Problems Persist for Residents","/utility-problems-persist-for-residents/"]],
    "electricity costs":[[
        "Utility Problems Persist for Residents","/utility-problems-persist-for-residents/"],
        ["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change/"],
        ["Running Out of Gas","/running-out-of-gas/"],
        ["Shocking Electric Bills","/shocking-electric-bills/"]],
    "energy issues":[[
        "Utility Problems Persist for Residents","/utility-problems-persist-for-residents/"],
        ["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change/"],
        ["Lathrop Homes News","/lathrop-homes-news/"],
        ["The Shocking Truth about CHA","/the-shocking-truth-about-cha/"],
        ["Running Out of Gas","/running-out-of-gas/"],
        ["Electrically Charged","/electrically-charged/"],
        ["Shocking Electric Bills Update","/shocking-electric-bills-update/"],
        ["Shocking Electric Bills","/shocking-electric-bills/"]],
    "Housing Choice Voucher":[[
        "Utility Problems Persist for Residents","/utility-problems-persist-for-residents/"],
        ["Crystal Clear Views","/crystal-clear-views-4/"],
        ["Closure Razes Resident Hopes","/closure-razes-resident-hopes/"],
        ["Positive People","/positive-people-3/"],
        ["CHAC An Update: 2003","/chac-an-update-2003/"],
        ["The Shocking Truth about CHA","/the-shocking-truth-about-cha/"],
        ["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations/"],
        ["Myths and Urban Legends","/myths-and-urban-legends/"],
        ["CHA Puts Resident In Storage","/cha-puts-resident-in-storage/"],
        ["Housing Crisis in Highland Park","/housing-crisis-in-highland-park/"],
        ["Relocation Rights Contract","/relocation-rights-contract/"],
        ["Shocking Electric Bills Update","/shocking-electric-bills-update/"],
        ["Shocking Electric Bills","/shocking-electric-bills/"],
        ["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8/"]],
    "Low Income Housing Energy Assistance Program":[[
        "Utility Problems Persist for Residents","/utility-problems-persist-for-residents/"],
        ["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change/"]],
    "utilities":[[
        "Utility Problems Persist for Residents","/utility-problems-persist-for-residents/"]],
    "Duneland Village":[[
        "There's H.O.P.E. for Gary Residents","/theres-h-o-p-e-for-gary-residents/"]],
    "HOPE VI":[[
        "There's H.O.P.E. for Gary Residents","/theres-h-o-p-e-for-gary-residents/"],
        ["Oops, They Did It Again","/oops-they-did-it-again/"],
        ["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects/"],
        ["Operation ABLE","/operation-able/"],
        ["ABLA News","/abla-news/"],
        ["ABLA News","/abla-news-2/"],
        ["Dear Resident","/dear-resident-6/"],
        ["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting/"],
        ["What's Happening in ABLA?","/whats-happening-in-abla/"]],
    "17th War Democratic Organization":[[
        "A Questionable Connection","/a-questionable-connection/"]],
    "Better Government Association":[[
        "A Questionable Connection","/a-questionable-connection/"]],
    "Hatch Act":[[
        "A Questionable Connection","/a-questionable-connection/"]],
    "Silver Shovel":[[
        "A Questionable Connection","/a-questionable-connection/"]],
    "conflict":[[
        "Crystal Clear Views","/crystal-clear-views-4/"]],
    "winter 2004 issue":[[
        "Crystal Clear Views","/crystal-clear-views-4/"],
        ["Stop The Violence","/stop-the-violence-3/"],
        ["Harold Ickes News","/harold-ickes-news-3/"],
        ["Update: Zoning and Affordable Housing","/update-zoning-and-affordable-housing/"],
        ["Residents: What People Want","/residents-what-people-want/"],
        ["Presidential Election Notebook","/presidential-election-notebook/"],
        ["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections/"],
        ["A Taylor-Made Election","/a-taylor-made-election/"],
        ["More CHA Residents Voting Woes","/more-cha-residents-voting-woes/"],
        ["Wipe Out","/wipe-out/"],
        ["Cabrini-Green Election","/cabrini-green-election/"],
        ["Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes/"],
        ["Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes/"],
        ["Positive People","/positive-people/"],
        ["Senior Rehab Update","/senior-rehab-update/"],
        ["Deadly Moves - an update","/deadly-moves-an-update/"],
        ["Closure Razes Resident Hopes","/closure-razes-resident-hopes/"],
        ["The Compassionate Blues","/the-compassionate-blues/"]],
    "Latresha Green":[[
        "Stop The Violence","/stop-the-violence-3/"]],
    "Gospel Fest":[[
        "Harold Ickes News","/harold-ickes-news-3/"]],
    "spirituality":[[
        "Harold Ickes News","/harold-ickes-news-3/"]],
    "Affordable Housing Ordinance":[[
        "Update: Zoning and Affordable Housing","/update-zoning-and-affordable-housing/"]],
    "inclusionary zoning":[[
        "Update: Zoning and Affordable Housing","/update-zoning-and-affordable-housing/"]],
    "zoning":[[
        "Update: Zoning and Affordable Housing","/update-zoning-and-affordable-housing/"],
        ["Housing on State, City Agendas","/housing-on-state-city-agendas/"]],
    "survey":[[
        "Residents: What People Want","/residents-what-people-want/"]],
    "apathy":[[
        "Presidential Election Notebook","/presidential-election-notebook/"]],
    "presidential election":[[
        "Presidential Election Notebook","/presidential-election-notebook/"],
        ["The Sound of Silence","/the-sound-of-silence/"],
        ["The Price of a Political Job","/the-price-of-a-political-job/"]],
    "United Power and Action!":[[
        "Presidential Election Notebook","/presidential-election-notebook/"]],
    "voter involvement":[[
        "Presidential Election Notebook","/presidential-election-notebook/"]],
    "college funding":[[
        "Obama's Visit to Howard Alternative High School","/obamas-visit-to-howard-alternative-high-school/"]],
    "Howard Area Alternative High School":[[
        "Obama's Visit to Howard Alternative High School","/obamas-visit-to-howard-alternative-high-school/"]],
    "U.S. senate":[[
        "Obama's Visit to Howard Alternative High School","/obamas-visit-to-howard-alternative-high-school/"]],
    "Rockwell Gardens":[[
        "Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections/"],
        ["Getting to Know Rockwell","/getting-to-know-rockwell/"],
        ["Residents Fight Vacate Orders","/residents-fight-vacate-orders/"]],
    "voter participation":[[
        "A Taylor-Made Election","/a-taylor-made-election/"],
        ["More CHA Residents Voting Woes","/more-cha-residents-voting-woes/"],
        ["Wipe Out","/wipe-out/"],
        ["Cabrini-Green Election","/cabrini-green-election/"],
        ["Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes/"]],
    "Tenant Council Election":[[
        "More CHA Residents Voting Woes","/more-cha-residents-voting-woes/"],
        ["Wipe Out","/wipe-out/"]],
    "United States Housing Act":[[
        "More CHA Residents Voting Woes","/more-cha-residents-voting-woes/"]],
    "Madden Park Homes":[[
        "Wipe Out","/wipe-out/"]],
    "Carol Steele":[[
        "Cabrini-Green Election","/cabrini-green-election/"]],
    "Coalitiong to Protect Public Housing":[[
        "Cabrini-Green Election","/cabrini-green-election/"]],
    "Election Day":[[
        "Cabrini-Green Election","/cabrini-green-election/"]],
    "Kelvin Cannon":[[
        "Cabrini-Green Election","/cabrini-green-election/"]],
    "North Side":[[
        "Cabrini-Green Election","/cabrini-green-election/"],
        ["It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini/"]],
    "Black United Fund Institute":[[
        "Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes/"]],
    "Institute for Government Research":[[
        "Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes/"]],
    "Local Advisory Council":[[
        "Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes/"],
        ["Harold Ickes News","/harold-ickes-news-5/"],
        ["Representing Residents","/representing-residents/"],
        ["Positive Residents of the CHA","/positive-residents-of-the-cha/"],
        ["ABLA News","/abla-news/"],
        ["Productive Men of the CHA","/productive-men-of-the-cha/"],
        ["ABLA News","/abla-news-2/"],
        ["Seniors form new organization","/seniors-form-new-organization/"],
        ["What's Happening in ABLA?","/whats-happening-in-abla/"]],
    "CPS":[[
        "Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes/"],
        ["Harold Ickes New School Update","/harold-ickes-new-school-update/"],
        ["Youths Rally For Summer Jobs","/youths-rally-for-summer-jobs/"],
        ["Dear Resident","/dear-resident-12/"],
        ["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation/"],
        ["Schools March for Victims","/schools-march-for-victims/"]],
    "Renaissance 2010":[[
        "Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes/"]],
    "Parkway Gardens":[[
        "Positive People","/positive-people/"]],
    "Racine Apartments":[[
        "Senior Rehab Update","/senior-rehab-update/"],
        ["Transforming CHA: Senior Only Buildings","/transforming-cha-senior-only-buildings/"]],
    "restoration":[[
        "Senior Rehab Update","/senior-rehab-update/"]],
    "homicide":[[
        "Deadly Moves - an update","/deadly-moves-an-update/"],
        ["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves/"]],
    "murder":[[
        "Deadly Moves - an update","/deadly-moves-an-update/"]],
    "assistance":[[
        "Closure Razes Resident Hopes","/closure-razes-resident-hopes/"]],
    "Beauty Turner":[[
        "The Compassionate Blues","/the-compassionate-blues/"]],
    "blues":[[
        "The Compassionate Blues","/the-compassionate-blues/"]],
    "Clarence Scott":[[
        "The Compassionate Blues","/the-compassionate-blues/"]],
    "juke joints":[[
        "The Compassionate Blues","/the-compassionate-blues/"]],
    "Lee's Unleaded Blues":[[
        "The Compassionate Blues","/the-compassionate-blues/"]],
    "night life":[[
        "The Compassionate Blues","/the-compassionate-blues/"]],
    "august september 2004 issue":[[
        "Chaos at the Bank of Lawndale","/chaos-at-the-bank-of-lawndale/"],
        ["Positive People","/positive-people-2/"],
        ["Crystal Clear Views","/crystal-clear-views-6/"],
        ["CPS Violence","/cps-violence/"],
        ["Stop The Violence","/stop-the-violence-4/"],
        ["Ex Marks The Spot","/ex-marks-the-spot/"],
        ["2004 Election Focal Points","/2004-election-focal-points/"],
        ["Medicare Prescription Drug Benefit","/medicare-prescription-drug-benefit/"],
        ["Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park/"],
        ["Archer Courts: A Model Rehab","/archer-courts-a-model-rehab/"],
        ["Harold Ickes News","/harold-ickes-news-4/"],
        ["You Have Been Served","/you-have-been-served/"],
        ["Bronzeville Community Alert","/bronzeville-community-alert/"],
        ["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change/"],
        ["Deadly Moves: In Too Deep","/deadly-moves-in-too-deep/"],
        ["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force/"],
        ["Deadly Moves: Troubling Development","/deadly-moves-troubling-development/"],
        ["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2/"],
        ["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves/"]],
    "business":[[
        "Chaos at the Bank of Lawndale","/chaos-at-the-bank-of-lawndale/"],
        ["The Renowned Vernon Jordan","/the-renowned-vernon-jordan/"],
        ["Transforming CHA: Chewing Up Tobacco Road","/transforming-cha-chewing-up-tobacco-road/"]],
    "Community Bank of Lawndale":[[
        "Chaos at the Bank of Lawndale","/chaos-at-the-bank-of-lawndale/"]],
    "controversy":[[
        "Chaos at the Bank of Lawndale","/chaos-at-the-bank-of-lawndale/"]],
    "International Bank of Chicago":[[
        "Chaos at the Bank of Lawndale","/chaos-at-the-bank-of-lawndale/"]],
    "Lawndale":[[
        "Chaos at the Bank of Lawndale","/chaos-at-the-bank-of-lawndale/"]],
    "ownership":[[
        "Chaos at the Bank of Lawndale","/chaos-at-the-bank-of-lawndale/"],
        ["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history/"],
        ["Structural Justice","/structural-justice/"],
        ["REDI: A New Beginning?","/redi-a-new-beginning/"]],
    "South West Side":[[
        "Chaos at the Bank of Lawndale","/chaos-at-the-bank-of-lawndale/"]],
    "appreciation":[[
        "Positive People","/positive-people-2/"],
        ["Crystal Clear Views","/crystal-clear-views-6/"]],
    "Youth Leadership Program":[[
        "Positive People","/positive-people-2/"]],
    "children":[[
        "Crystal Clear Views","/crystal-clear-views-6/"]],
    "family":[[
        "Crystal Clear Views","/crystal-clear-views-6/"],
        ["Crystal Clear Views","/crystal-clear-views-9/"]],
    "Mother's Day":[[
        "Crystal Clear Views","/crystal-clear-views-6/"]],
    "motherhood":[[
        "Crystal Clear Views","/crystal-clear-views-6/"],
        ["Mothers Tackle Child Care Woes","/mothers-tackle-child-care-woes/"]],
    "mothers":[[
        "Crystal Clear Views","/crystal-clear-views-6/"],
        ["The Terror Within","/the-terror-within/"]],
    "disciplinary issues":[[
        "CPS Violence","/cps-violence/"]],
    "security":[[
        "CPS Violence","/cps-violence/"],
        ["Deadly Moves: Troubling Development","/deadly-moves-troubling-development/"],
        ["Stop The Violence","/stop-the-violence-11/"],
        ["Ickes: Back To Square One","/ickes-back-to-square-one/"],
        ["Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place/"],
        ["Cabrini-Green Update","/cabrini-green-update/"],
        ["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph/"]],
    "Chicago prisons":[[
        "Stop The Violence","/stop-the-violence-4/"]],
    "Enough is Enough":[[
        "Stop The Violence","/stop-the-violence-4/"]],
    "Mayor Daley":[[
        "Stop The Violence","/stop-the-violence-4/"]],
    "Automatic Expungement Act":[[
        "Ex Marks The Spot","/ex-marks-the-spot/"]],
    "human rights":[[
        "Ex Marks The Spot","/ex-marks-the-spot/"],
        ["A Trip To The Future","/a-trip-to-the-future/"]],
    "job opportunities":[[
        "Ex Marks The Spot","/ex-marks-the-spot/"]],
    "Second Chance Act":[[
        "Ex Marks The Spot","/ex-marks-the-spot/"]],
    "activism":[[
        "2004 Election Focal Points","/2004-election-focal-points/"],
        ["Positive People","/positive-people-4/"],
        ["Housing on State, City Agendas","/housing-on-state-city-agendas/"],
        ["The Renowned Vernon Jordan","/the-renowned-vernon-jordan/"],
        ["Housing For The Disabled","/housing-for-the-disabled/"],
        ["The State Of Section 8","/the-state-of-section-8/"],
        ["The Million Woman March: One Woman's View","/the-million-woman-march-one-womans-view/"]],
    "Housing Choice Voucher Program":[[
        "2004 Election Focal Points","/2004-election-focal-points/"],
        ["CHAC An Update: 2003","/chac-an-update-2003/"]],
    "housing issues":[[
        "2004 Election Focal Points","/2004-election-focal-points/"],
        ["The Sound of Silence","/the-sound-of-silence/"]],
    "Illinois senator race":[[
        "2004 Election Focal Points","/2004-election-focal-points/"]],
    "political involvement":[[
        "2004 Election Focal Points","/2004-election-focal-points/"],
        ["Crystal Clear Views","/crystal-clear-views-7/"]],
    "voters":[[
        "2004 Election Focal Points","/2004-election-focal-points/"]],
    "health care":[[
        "Medicare Prescription Drug Benefit","/medicare-prescription-drug-benefit/"],
        ["U.S. Senate Candidate Joyce Washington","/u-s-senate-candidate-joyce-washington/"],
        ["HIV/AIDs Crisis","/hivaids-crisis/"]],
    "Medicare Modernization Act":[[
        "Medicare Prescription Drug Benefit","/medicare-prescription-drug-benefit/"]],
    "prescriptions":[[
        "Medicare Prescription Drug Benefit","/medicare-prescription-drug-benefit/"],
        ["The High Cost of Medicine","/the-high-cost-of-medicine/"]],
    "Federally Assisted Housing Preservation Act":[[
        "Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park/"]],
    "Humboldt Park":[[
        "Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park/"]],
    "IHDA":[[
        "Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park/"]],
    "Illinois Housing Development Authority":[[
        "Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park/"]],
    "Latino community":[[
        "Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park/"],
        ["RJ Visits Miami/Dade Housing Authority","/rj-visits-miamidade-housing-authority/"],
        ["New Facility for Scattered Sites","/new-facility-for-scattered-sites/"],
        ["CHA and Latinos: Interview with Joe Shuldiner","/cha-and-latinos-interview-with-joe-shuldiner/"],
        ["Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing/"]],
    "city-state development":[[
        "Archer Courts: A Model Rehab","/archer-courts-a-model-rehab/"]],
    "Archer Courts":[[
        "Archer Courts: A Model Rehab","/archer-courts-a-model-rehab/"]],
    "rehabilitation":[[
        "Archer Courts: A Model Rehab","/archer-courts-a-model-rehab/"],
        ["ABLA Relocation Report","/abla-relocation-report/"],
        ["Cabrini-Green Update","/cabrini-green-update/"]],
    "centenarian":[[
        "Harold Ickes News","/harold-ickes-news-4/"],
        ["Black History Section: A Celebrated Life","/black-history-section-a-celebrated-life/"]],
    "communtiy involvement":[[
        "Harold Ickes News","/harold-ickes-news-4/"]],
    "gentrification":[[
        "Bronzeville Community Alert","/bronzeville-community-alert/"],
        ["Dear Resident","/dear-resident-6/"]],
    "new housing":[[
        "Bronzeville Community Alert","/bronzeville-community-alert/"]],
    "public meeting":[[
        "Bronzeville Community Alert","/bronzeville-community-alert/"]],
    "Renaissance Apartments":[[
        "Bronzeville Community Alert","/bronzeville-community-alert/"]],
    "C.H.A.N.C.E.":[[
        "No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change/"]],
    "CEDA":[[
        "No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change/"],
        ["CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills/"]],
    "Commonwealth Edison":[[
        "No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change/"],
        ["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas/"],
        ["The Shocking Truth about CHA","/the-shocking-truth-about-cha/"],
        ["Shocking Electric Bills Update","/shocking-electric-bills-update/"]],
    "Community Economic Development Agency":[[
        "No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change/"]],
    "electric bills":[[
        "No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change/"],
        ["Shocking Electric Bills Update","/shocking-electric-bills-update/"]],
    "LIHEAP":[[
        "No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change/"],
        ["Running Out of Gas","/running-out-of-gas/"]],
    "Black Stone Rangers":[[
        "Deadly Moves: In Too Deep","/deadly-moves-in-too-deep/"]],
    "street gangs":[[
        "Deadly Moves: In Too Deep","/deadly-moves-in-too-deep/"]],
    "mixed-income neighborhoods":[[
        "Deadly Moves: Troubling Development","/deadly-moves-troubling-development/"],
        ["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves/"],
        ["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing/"],
        ["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects/"],
        ["Housing Crisis in Highland Park","/housing-crisis-in-highland-park/"],
        ["ABLA News","/abla-news/"],
        ["A Savory Survey","/a-savory-survey/"]],
    "displacement":[[
        "Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2/"],
        ["Residents Sue CHA","/residents-sue-cha/"],
        ["Harold Ickes News","/harold-ickes-news-8/"],
        ["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"],
        ["The State Of Section 8","/the-state-of-section-8/"],
        ["Transforming CHA: Chewing Up Tobacco Road","/transforming-cha-chewing-up-tobacco-road/"],
        ["Cabrini-Green Update","/cabrini-green-update/"]],
    "The chicago Reporter":[[
        "Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves/"]],
    "Aaron Patterson":[[
        "Stop The Violence","/stop-the-violence-5/"],
        ["Sixth District Race Makes History","/sixth-district-race-makes-history/"]],
    "Fred Hampton":[[
        "Stop The Violence","/stop-the-violence-5/"]],
    "march april 2004 issue":[[
        "Stop The Violence","/stop-the-violence-5/"],
        ["Crystal Clear Views","/crystal-clear-views-7/"],
        ["Positive People","/positive-people-3/"],
        ["Harold Ickes News","/harold-ickes-news-5/"],
        ["If the Suit Fits, Who Wears It?","/if-the-suit-fits-who-wears-it/"],
        ["A Championship Victory","/a-championship-victory/"],
        ["Sixth District Race Makes History","/sixth-district-race-makes-history/"],
        ["2nd U.S. Congressional District Race","/2nd-u-s-congressional-district-race/"],
        ["U.S. Senate Candidate Joyce Washington","/u-s-senate-candidate-joyce-washington/"],
        ["U.S. Senate Candidate Gery Chico","/u-s-senate-candidate-gery-chico/"],
        ["U.S. Senate Candidate Daniel Hynes","/u-s-senate-candidate-daniel-hynes/"],
        ["U.S. Senate Candidate Blair Hull","/u-s-senate-candidate-blair-hull/"],
        ["U.S. Senate Candidate Barack Obama","/u-s-senate-candidate-barack-obama/"],
        ["The Sound of Silence","/the-sound-of-silence/"],
        ["Oops, They Did It Again","/oops-they-did-it-again/"]],
    "POCC":[[
        "Stop The Violence","/stop-the-violence-5/"]],
    "Prisoners of Consciousness Committee":[[
        "Stop The Violence","/stop-the-violence-5/"]],
    "ignorance":[[
        "Crystal Clear Views","/crystal-clear-views-7/"]],
    "voting process":[[
        "Crystal Clear Views","/crystal-clear-views-7/"]],
    "reconstruction":[[
        "Positive People","/positive-people-3/"],
        ["Seniors Quality of Life On The Rise","/seniors-quality-of-life-on-the-rise/"]],
    "Gloria Williams":[[
        "Harold Ickes News","/harold-ickes-news-5/"]],
    "legal issues":[[
        "If the Suit Fits, Who Wears It?","/if-the-suit-fits-who-wears-it/"],
        ["Oops, They Did It Again","/oops-they-did-it-again/"]],
    "Williams v. Brown":[[
        "A Championship Victory","/a-championship-victory/"]],
    "Bridgeport":[[
        "Sixth District Race Makes History","/sixth-district-race-makes-history/"]],
    "death row":[[
        "Sixth District Race Makes History","/sixth-district-race-makes-history/"]],
    "Illinois state Representative":[[
        "Sixth District Race Makes History","/sixth-district-race-makes-history/"]],
    "incarceration":[[
        "Sixth District Race Makes History","/sixth-district-race-makes-history/"]],
    "Patricia Bailey":[[
        "Sixth District Race Makes History","/sixth-district-race-makes-history/"]],
    "political platform":[[
        "Sixth District Race Makes History","/sixth-district-race-makes-history/"],
        ["U.S. Senate Candidate Joyce Washington","/u-s-senate-candidate-joyce-washington/"],
        ["U.S. Senate Candidate Gery Chico","/u-s-senate-candidate-gery-chico/"],
        ["U.S. Senate Candidate Daniel Hynes","/u-s-senate-candidate-daniel-hynes/"]],
    "candidates":[[
        "2nd U.S. Congressional District Race","/2nd-u-s-congressional-district-race/"]],
    "Everett Shumpert":[[
        "2nd U.S. Congressional District Race","/2nd-u-s-congressional-district-race/"]],
    "Jesse Jackson":[[
        "2nd U.S. Congressional District Race","/2nd-u-s-congressional-district-race/"]],
    "Jr.":[[
        "2nd U.S. Congressional District Race","/2nd-u-s-congressional-district-race/"]],
    "Mel Reynolds":[[
        "2nd U.S. Congressional District Race","/2nd-u-s-congressional-district-race/"]],
    "Rev. Anthony William":[[
        "2nd U.S. Congressional District Race","/2nd-u-s-congressional-district-race/"]],
    "candidate":[[
        "U.S. Senate Candidate Joyce Washington","/u-s-senate-candidate-joyce-washington/"],
        ["U.S. Senate Candidate Gery Chico","/u-s-senate-candidate-gery-chico/"],
        ["U.S. Senate Candidate Daniel Hynes","/u-s-senate-candidate-daniel-hynes/"],
        ["U.S. Senate Candidate Blair Hull","/u-s-senate-candidate-blair-hull/"],
        ["U.S. Senate Candidate Barack Obama","/u-s-senate-candidate-barack-obama/"]],
    "Joyce Washington":[[
        "U.S. Senate Candidate Joyce Washington","/u-s-senate-candidate-joyce-washington/"]],
    "political issues":[[
        "U.S. Senate Candidate Joyce Washington","/u-s-senate-candidate-joyce-washington/"],
        ["U.S. Senate Candidate Gery Chico","/u-s-senate-candidate-gery-chico/"],
        ["U.S. Senate Candidate Daniel Hynes","/u-s-senate-candidate-daniel-hynes/"],
        ["U.S. Senate Candidate Blair Hull","/u-s-senate-candidate-blair-hull/"]],
    "Board of Education":[[
        "U.S. Senate Candidate Gery Chico","/u-s-senate-candidate-gery-chico/"]],
    "U.S. senate election":[[
        "U.S. Senate Candidate Gery Chico","/u-s-senate-candidate-gery-chico/"],
        ["U.S. Senate Candidate Daniel Hynes","/u-s-senate-candidate-daniel-hynes/"],
        ["U.S. Senate Candidate Blair Hull","/u-s-senate-candidate-blair-hull/"],
        ["U.S. Senate Candidate Barack Obama","/u-s-senate-candidate-barack-obama/"]],
    "comptroller":[[
        "U.S. Senate Candidate Daniel Hynes","/u-s-senate-candidate-daniel-hynes/"]],
    "Dan Hynes":[[
        "U.S. Senate Candidate Daniel Hynes","/u-s-senate-candidate-daniel-hynes/"]],
    "Blair Hull":[[
        "U.S. Senate Candidate Blair Hull","/u-s-senate-candidate-blair-hull/"]],
    "platforms":[[
        "U.S. Senate Candidate Blair Hull","/u-s-senate-candidate-blair-hull/"]],
    "insurance":[[
        "U.S. Senate Candidate Barack Obama","/u-s-senate-candidate-barack-obama/"],
        ["Transforming CHA: Flannery Homes Residents Keep Waiting","/transforming-cha-flannery-homes-residents-keep-waiting/"]],
    "welfare":[[
        "U.S. Senate Candidate Barack Obama","/u-s-senate-candidate-barack-obama/"],
        ["War with Iraq: A Personal Perspective","/war-with-iraq-a-personal-perspective/"],
        ["SPECIAL FEATURE: City Gets CHA Funds Update","/special-feature-city-gets-cha-funds-update/"],
        ["8,000 To Get Jobs Help","/8000-to-get-jobs-help/"]],
    "2004 presidential election":[[
        "The Sound of Silence","/the-sound-of-silence/"]],
    "John Edwards":[[
        "The Sound of Silence","/the-sound-of-silence/"]],
    "John Kerry":[[
        "The Sound of Silence","/the-sound-of-silence/"]],
    "presidential candidates":[[
        "The Sound of Silence","/the-sound-of-silence/"]],
    "Henry Horner Homes":[[
        "Oops, They Did It Again","/oops-they-did-it-again/"],
        ["Making CHA Accessible","/making-cha-accessible/"],
        ["Mothers Tackle Child Care Woes","/mothers-tackle-child-care-woes/"],
        ["Horner Annex Reborn","/horner-annex-reborn/"],
        ["Replacement Housing or Replacing People","/replacement-housing-or-replacing-people/"]],
    "Right to Return":[[
        "Oops, They Did It Again","/oops-they-did-it-again/"]],
    "Service Connectors":[[
        "Oops, They Did It Again","/oops-they-did-it-again/"]],
    "Supportive Services":[[
        "Oops, They Did It Again","/oops-they-did-it-again/"]],
    "happiness":[[
        "Crystal Clear Views","/crystal-clear-views-8/"]],
    "january february 2004 issue":[[
        "Crystal Clear Views","/crystal-clear-views-8/"],
        ["Stop The Violence","/stop-the-violence-6/"],
        ["Harold Ickes News","/harold-ickes-news-6/"],
        ["Positive People","/positive-people-4/"],
        ["The Price of a Political Job","/the-price-of-a-political-job/"],
        ["Altgeld Gardens Lawsuit Settlement","/altgeld-gardens-lawsuit-settlement/"],
        ["The True Face of Poverty","/the-true-face-of-poverty/"],
        ["Getting to Know Rockwell","/getting-to-know-rockwell/"],
        ["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing/"],
        ["Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha/"],
        ["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects/"],
        ["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas/"]],
    "life lessons":[[
        "Crystal Clear Views","/crystal-clear-views-8/"]],
    "new year resolutions":[[
        "Crystal Clear Views","/crystal-clear-views-8/"]],
    "psychology":[[
        "Stop The Violence","/stop-the-violence-6/"]],
    "RAINN":[[
        "Stop The Violence","/stop-the-violence-6/"]],
    "rape":[[
        "Stop The Violence","/stop-the-violence-6/"]],
    "sexual assault":[[
        "Stop The Violence","/stop-the-violence-6/"],
        ["Stop The Violence","/stop-the-violence-14/"]],
    "low-income housing":[[
        "Positive People","/positive-people-4/"],
        ["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8/"],
        ["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"],
        ["New Vincennes Plaza","/new-vincennes-plaza/"],
        ["The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath/"]],
    "politicians":[[
        "The Price of a Political Job","/the-price-of-a-political-job/"]],
    "PCR":[[
        "Altgeld Gardens Lawsuit Settlement","/altgeld-gardens-lawsuit-settlement/"]],
    "settlement":[[
        "Altgeld Gardens Lawsuit Settlement","/altgeld-gardens-lawsuit-settlement/"],
        ["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history/"]],
    "economy":[[
        "The True Face of Poverty","/the-true-face-of-poverty/"]],
    "transitional living":[[
        "The True Face of Poverty","/the-true-face-of-poverty/"]],
    "unemployment":[[
        "The True Face of Poverty","/the-true-face-of-poverty/"],
        ["National Housing Crisis","/national-housing-crisis/"],
        ["Squatters Worry About Homelessness","/squatters-worry-about-homelessness/"]],
    "Housing Choice Vouchers":[[
        "Getting to Know Rockwell","/getting-to-know-rockwell/"],
        ["Thomas Sullivan Report Update","/thomas-sullivan-report-update/"],
        ["Homeless Not Hopeless","/homeless-not-hopeless/"]],
    "H.J. Russell":[[
        "Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha/"]],
    "heating":[[
        "Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha/"]],
    "American Project":[[
        "Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas/"]],
    "Gautreaux":[[
        "Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas/"],
        ["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing/"],
        ["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan/"]],
    "low-income residents":[[
        "Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas/"],
        ["Electrically Charged","/electrically-charged/"],
        ["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8/"]],
    "Venkatesh":[[
        "Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas/"]],
    "evolution":[[
        "Dear Resident","/dear-resident/"]],
    "may june 2003 issue":[[
        "Dear Resident","/dear-resident/"],
        ["Stop The Violence","/stop-the-violence-7/"],
        ["A Report On Management at Ogden Courts","/a-report-on-management-at-ogden-courts/"],
        ["CHAC An Update: 2003","/chac-an-update-2003/"],
        ["War with Iraq: A Personal Perspective","/war-with-iraq-a-personal-perspective/"],
        ["Harold Ickes News","/harold-ickes-news-7/"],
        ["Debating Affordable Housing","/debating-affordable-housing/"],
        ["Lathrop Homes News","/lathrop-homes-news/"],
        ["Thomas Sullivan Report Update","/thomas-sullivan-report-update/"],
        ["Making CHA Accessible","/making-cha-accessible/"],
        ["The Shocking Truth about CHA","/the-shocking-truth-about-cha/"],
        ["Homeless Not Hopeless","/homeless-not-hopeless/"]],
    "Beyond media":[[
        "Stop The Violence","/stop-the-violence-7/"]],
    "Chicago Legal Advocacy for Incercerated Mothers":[[
        "Stop The Violence","/stop-the-violence-7/"]],
    "CLAIM":[[
        "Stop The Violence","/stop-the-violence-7/"]],
    "Cook County Jail Town Hall Meeting":[[
        "Stop The Violence","/stop-the-violence-7/"]],
    "incarcerated mothers":[[
        "Stop The Violence","/stop-the-violence-7/"]],
    "Operation PUSH":[[
        "Stop The Violence","/stop-the-violence-7/"],
        ["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center/"]],
    "prison system":[[
        "Stop The Violence","/stop-the-violence-7/"]],
    "prison violence":[[
        "Stop The Violence","/stop-the-violence-7/"]],
    "damages":[[
        "A Report On Management at Ogden Courts","/a-report-on-management-at-ogden-courts/"],
        ["Maintenance Defects at Ogden Courts","/maintenance-defects-at-ogden-courts/"]],
    "Good Neighbor Workshop":[[
        "A Report On Management at Ogden Courts","/a-report-on-management-at-ogden-courts/"]],
    "home management":[[
        "A Report On Management at Ogden Courts","/a-report-on-management-at-ogden-courts/"]],
    "repairs":[[
        "A Report On Management at Ogden Courts","/a-report-on-management-at-ogden-courts/"]],
    "seminar":[[
        "A Report On Management at Ogden Courts","/a-report-on-management-at-ogden-courts/"]],
    "Certificate Program":[[
        "CHAC An Update: 2003","/chac-an-update-2003/"]],
    "CHAC":[[
        "CHAC An Update: 2003","/chac-an-update-2003/"],
        ["A Section 8 Recipient's Painful Reality","/a-section-8-recipients-painful-reality/"],
        ["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8/"],
        ["The State Of Section 8","/the-state-of-section-8/"],
        ["Transforming CHA: Federal Housing Voucher Woes","/transforming-cha-federal-housing-voucher-woes/"]],
    "eligibility":[[
        "CHAC An Update: 2003","/chac-an-update-2003/"]],
    "Family Self Sufficieny Program":[[
        "CHAC An Update: 2003","/chac-an-update-2003/"]],
    "FSS":[[
        "CHAC An Update: 2003","/chac-an-update-2003/"]],
    "home ownership":[[
        "CHAC An Update: 2003","/chac-an-update-2003/"],
        ["CHA Home Ownership: Wentworth Gardens","/cha-home-ownership-wentworth-gardens/"]],
    "Home Ownership Program":[[
        "CHAC An Update: 2003","/chac-an-update-2003/"],
        ["CHA Home Ownership: Wentworth Gardens","/cha-home-ownership-wentworth-gardens/"]],
    "re-structuring":[[
        "CHAC An Update: 2003","/chac-an-update-2003/"]],
    "regulations":[[
        "CHAC An Update: 2003","/chac-an-update-2003/"],
        ["Flannery Homes Update","/flannery-homes-update/"],
        ["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments/"]],
    "Voucher Program":[[
        "CHAC An Update: 2003","/chac-an-update-2003/"]],
    "Armed Forces":[[
        "War with Iraq: A Personal Perspective","/war-with-iraq-a-personal-perspective/"]],
    "Iraq War":[[
        "War with Iraq: A Personal Perspective","/war-with-iraq-a-personal-perspective/"]],
    "military service":[[
        "War with Iraq: A Personal Perspective","/war-with-iraq-a-personal-perspective/"],
        ["The Terror Within","/the-terror-within/"]],
    "ROTC":[[
        "War with Iraq: A Personal Perspective","/war-with-iraq-a-personal-perspective/"],
        ["The Renowned Vernon Jordan","/the-renowned-vernon-jordan/"]],
    "U.S. Navy":[[
        "War with Iraq: A Personal Perspective","/war-with-iraq-a-personal-perspective/"]],
    "warfare":[[
        "War with Iraq: A Personal Perspective","/war-with-iraq-a-personal-perspective/"]],
    "E2":[[
        "Harold Ickes News","/harold-ickes-news-7/"]],
    "blackout":[[
        "Lathrop Homes News","/lathrop-homes-news/"]],
    "recommendations":[[
        "Thomas Sullivan Report Update","/thomas-sullivan-report-update/"]],
    "Thomas Sullivan":[[
        "Thomas Sullivan Report Update","/thomas-sullivan-report-update/"]],
    "accessibility":[[
        "Making CHA Accessible","/making-cha-accessible/"],
        ["Access Report","/access-report-3/"],
        ["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments/"]],
    "Chicago disabled":[[
        "Making CHA Accessible","/making-cha-accessible/"],
        ["Operation ABLE","/operation-able/"],
        ["Residents Deny Security Improvements","/residents-deny-security-improvements/"],
        ["Housing For The Disabled","/housing-for-the-disabled/"],
        ["Transforming CHA: Senior Only Buildings","/transforming-cha-senior-only-buildings/"]],
    "empowerment":[[
        "Making CHA Accessible","/making-cha-accessible/"],
        ["REDI: A New Beginning?","/redi-a-new-beginning/"],
        ["The Million Woman March: One Woman's View","/the-million-woman-march-one-womans-view/"]],
    "fair housing act":[[
        "Making CHA Accessible","/making-cha-accessible/"]],
    "housing requirements":[[
        "Making CHA Accessible","/making-cha-accessible/"]],
    "CHA electricty":[[
        "The Shocking Truth about CHA","/the-shocking-truth-about-cha/"]],
    "non-lease compliant":[[
        "The Shocking Truth about CHA","/the-shocking-truth-about-cha/"],
        ["Shocking Electric Bills","/shocking-electric-bills/"]],
    "unsubsidized tenants":[[
        "Homeless Not Hopeless","/homeless-not-hopeless/"]],
    "january february 2003 issue":[[
        "Dear Resident","/dear-resident-2/"],
        ["Crystal Clear Views","/crystal-clear-views-9/"],
        ["Housing on State, City Agendas","/housing-on-state-city-agendas/"],
        ["Stop The Violence","/stop-the-violence-8/"],
        ["The New Cook County Hospital","/the-new-cook-county-hospital/"],
        ["Traveling: From Therapy to Art","/traveling-from-therapy-to-art/"],
        ["Representing Residents","/representing-residents/"],
        ["Chicago's Hottest Elections","/chicagos-hottest-elections/"],
        ["Residents Sue CHA","/residents-sue-cha/"],
        ["Running Out of Gas","/running-out-of-gas/"],
        ["Seniors Complain About Renovations","/seniors-complain-about-renovations/"],
        ["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations/"],
        ["An Invasion of Privacy?","/an-invasion-of-privacy/"],
        ["Myths and Urban Legends","/myths-and-urban-legends/"]],
    "relationships":[[
        "Dear Resident","/dear-resident-2/"],
        ["Crystal Clear Views","/crystal-clear-views-9/"],
        ["Representing Residents","/representing-residents/"],
        ["Dear Resident","/dear-resident-4/"]],
    "slavery":[[
        "Dear Resident","/dear-resident-2/"]],
    "Q&A":[[
        "Crystal Clear Views","/crystal-clear-views-9/"],
        ["Your Neighborhood Policemen","/your-neighborhood-policemen/"]],
    "runaway":[[
        "Crystal Clear Views","/crystal-clear-views-9/"]],
    "Affordable Rents for Chicago":[[
        "Housing on State, City Agendas","/housing-on-state-city-agendas/"]],
    "ARC":[[
        "Housing on State, City Agendas","/housing-on-state-city-agendas/"]],
    "Mt. sinai Hospital":[[
        "Stop The Violence","/stop-the-violence-8/"]],
    "renovations":[[
        "Stop The Violence","/stop-the-violence-8/"]],
    "Cook County Hospital":[[
        "The New Cook County Hospital","/the-new-cook-county-hospital/"]],
    "John H. Stroger Jr.":[[
        "The New Cook County Hospital","/the-new-cook-county-hospital/"]],
    "new hospital":[[
        "The New Cook County Hospital","/the-new-cook-county-hospital/"]],
    "technology":[[
        "The New Cook County Hospital","/the-new-cook-county-hospital/"]],
    "transition":[[
        "The New Cook County Hospital","/the-new-cook-county-hospital/"],
        ["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8/"],
        ["Farewell, Mr. Chairman","/farewell-mr-chairman/"]],
    "art":[[
        "Traveling: From Therapy to Art","/traveling-from-therapy-to-art/"]],
    "Asia":[[
        "Traveling: From Therapy to Art","/traveling-from-therapy-to-art/"]],
    "filmmaking":[[
        "Traveling: From Therapy to Art","/traveling-from-therapy-to-art/"]],
    "Kathmandu":[[
        "Traveling: From Therapy to Art","/traveling-from-therapy-to-art/"]],
    "religious experience":[[
        "Traveling: From Therapy to Art","/traveling-from-therapy-to-art/"]],
    "travel":[[
        "Traveling: From Therapy to Art","/traveling-from-therapy-to-art/"],
        ["Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington/"]],
    "feedback":[[
        "Representing Residents","/representing-residents/"]],
    "Dorothy Tillman":[[
        "Chicago's Hottest Elections","/chicagos-hottest-elections/"]],
    "Fourth Ward":[[
        "Chicago's Hottest Elections","/chicagos-hottest-elections/"]],
    "mayoral election":[[
        "Chicago's Hottest Elections","/chicagos-hottest-elections/"]],
    "Norman Bolden":[[
        "Chicago's Hottest Elections","/chicagos-hottest-elections/"]],
    "Pat Dowell":[[
        "Chicago's Hottest Elections","/chicagos-hottest-elections/"]],
    "platform":[[
        "Chicago's Hottest Elections","/chicagos-hottest-elections/"]],
    "Rev. Paul L. Jakes":[[
        "Chicago's Hottest Elections","/chicagos-hottest-elections/"]],
    "Third Ward alderman":[[
        "Chicago's Hottest Elections","/chicagos-hottest-elections/"]],
    "Civil Rights Act":[[
        "Residents Sue CHA","/residents-sue-cha/"]],
    "budget":[[
        "Running Out of Gas","/running-out-of-gas/"]],
    "Low-Income Energy Home Assistance Program":[[
        "Running Out of Gas","/running-out-of-gas/"]],
    "community disturbance":[[
        "Seniors Complain About Renovations","/seniors-complain-about-renovations/"]],
    "construction":[[
        "Seniors Complain About Renovations","/seniors-complain-about-renovations/"],
        ["Harold Ickes News","/harold-ickes-news-8/"],
        ["Razing the Brooks Extension","/razing-the-brooks-extension/"],
        ["Lathrop Homes News","/lathrop-homes-news-2/"],
        ["Section 8 Update","/section-8-update/"],
        ["Horner Annex Reborn","/horner-annex-reborn/"],
        ["Last Harvest","/last-harvest/"],
        ["Washington Park: The Dying Hope","/washington-park-the-dying-hope/"],
        ["A History of Cabrini-Green","/a-history-of-cabrini-green/"]],
    "dissatisfaction":[[
        "Report Criticizes CHA Relocations","/report-criticizes-cha-relocations/"],
        ["Harold Ickes News","/harold-ickes-news-9/"],
        ["Welfare Reform: Lost In Space","/welfare-reform-lost-in-space/"],
        ["Maintenance Defects at Ogden Courts","/maintenance-defects-at-ogden-courts/"],
        ["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents/"]],
    "Service Connector Program":[[
        "Report Criticizes CHA Relocations","/report-criticizes-cha-relocations/"],
        ["Harold Ickes Service Connectors","/harold-ickes-service-connectors/"],
        ["Ickes' Homes New Managers","/ickes-homes-new-managers/"],
        ["Residents Look to the Hills","/residents-look-to-the-hills/"]],
    "social service":[[
        "Report Criticizes CHA Relocations","/report-criticizes-cha-relocations/"],
        ["Operation ABLE","/operation-able/"]],
    "Fourth Amendment violation":[[
        "An Invasion of Privacy?","/an-invasion-of-privacy/"]],
    "Holston Realty":[[
        "An Invasion of Privacy?","/an-invasion-of-privacy/"]],
    "invasion of privacy":[[
        "An Invasion of Privacy?","/an-invasion-of-privacy/"]],
    "Raymond Hilliard Homes":[[
        "An Invasion of Privacy?","/an-invasion-of-privacy/"]],
    "myths":[[
        "Myths and Urban Legends","/myths-and-urban-legends/"]],
    "domestic abuse":[[
        "Dear Resident","/dear-resident-3/"]],
    "domestic violence":[[
        "Dear Resident","/dear-resident-3/"]],
    "familial issues":[[
        "Dear Resident","/dear-resident-3/"]],
    "november december 2002 issue":[[
        "Dear Resident","/dear-resident-3/"],
        ["Positive Residents of the CHA","/positive-residents-of-the-cha/"],
        ["Stop The Violence","/stop-the-violence-9/"],
        ["Seniors Graduate Police Class","/seniors-graduate-police-class/"],
        ["National Housing Crisis","/national-housing-crisis/"],
        ["HIV/AIDs Crisis","/hivaids-crisis/"],
        ["Harold Ickes Service Connectors","/harold-ickes-service-connectors/"],
        ["Harold Ickes News","/harold-ickes-news-8/"],
        ["Residents Deny Security Improvements","/residents-deny-security-improvements/"],
        ["CHA Puts Resident In Storage","/cha-puts-resident-in-storage/"],
        ["South Suburban Living","/south-suburban-living/"],
        ["Electrically Charged","/electrically-charged/"],
        ["Last Day in 4525","/last-day-in-4525/"],
        ["Housing Crisis in Highland Park","/housing-crisis-in-highland-park/"]],
    "victimization":[[
        "Dear Resident","/dear-resident-3/"]],
    "law enforcement":[[
        "Stop The Violence","/stop-the-violence-9/"],
        ["Seniors Graduate Police Class","/seniors-graduate-police-class/"],
        ["Your Neighborhood Policemen","/your-neighborhood-policemen/"]],
    "police violence":[[
        "Stop The Violence","/stop-the-violence-9/"]],
    "CAPS":[[
        "Seniors Graduate Police Class","/seniors-graduate-police-class/"],
        ["Stop The Violence","/stop-the-violence-18/"]],
    "graduation ceremony":[[
        "Seniors Graduate Police Class","/seniors-graduate-police-class/"]],
    "safety":[[
        "Seniors Graduate Police Class","/seniors-graduate-police-class/"],
        ["Harold Ickes News","/harold-ickes-news-9/"],
        ["Drug War Diagnosis","/drug-war-diagnosis/"]],
    "Sinai Health System":[[
        "Seniors Graduate Police Class","/seniors-graduate-police-class/"],
        ["Sinai Health Services","/sinai-health-services/"]],
    "Center for Housing Policy":[[
        "National Housing Crisis","/national-housing-crisis/"]],
    "housing shortage":[[
        "National Housing Crisis","/national-housing-crisis/"]],
    "National Alliance of HUD Tenants":[[
        "National Housing Crisis","/national-housing-crisis/"]],
    "national housing":[[
        "National Housing Crisis","/national-housing-crisis/"]],
    "public housing shortage":[[
        "National Housing Crisis","/national-housing-crisis/"]],
    "voucher":[[
        "National Housing Crisis","/national-housing-crisis/"],
        ["A Section 8 Recipient's Painful Reality","/a-section-8-recipients-painful-reality/"],
        ["New Vincennes Plaza","/new-vincennes-plaza/"]],
    "African Americans":[[
        "HIV/AIDs Crisis","/hivaids-crisis/"]],
    "awareness":[[
        "HIV/AIDs Crisis","/hivaids-crisis/"]],
    "BET":[[
        "HIV/AIDs Crisis","/hivaids-crisis/"]],
    "medical issues":[[
        "HIV/AIDs Crisis","/hivaids-crisis/"]],
    "sexual health":[[
        "HIV/AIDs Crisis","/hivaids-crisis/"]],
    "ABLA Transitional Job Center":[[
        "Operation ABLE","/operation-able/"]],
    "non-profit organization":[[
        "Operation ABLE","/operation-able/"]],
    "october november 2001 issue":[[
        "Operation ABLE","/operation-able/"],
        ["Choosing Between Food and Medicine","/choosing-between-food-and-medicine/"],
        ["Stop The Violence","/stop-the-violence-11/"],
        ["Remembering Leroy Watkins","/remembering-leroy-watkins/"],
        ["A Section 8 Recipient's Painful Reality","/a-section-8-recipients-painful-reality/"],
        ["Residents Look to the Hills","/residents-look-to-the-hills/"],
        ["A Savory Survey","/a-savory-survey/"],
        ["RMCs Aim to Please?","/rmcs-aim-to-please/"],
        ["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8/"],
        ["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"]],
    "One Stop Center":[[
        "Operation ABLE","/operation-able/"]],
    "Operation ABLE":[[
        "Operation ABLE","/operation-able/"]],
    "Senior Community Service Employment program":[[
        "Operation ABLE","/operation-able/"]],
    "celebration":[[
        "Harold Ickes News","/harold-ickes-news-8/"],
        ["Ida B. Wells Reunion","/ida-b-wells-reunion/"],
        ["Wells on the Rise","/wells-on-the-rise/"]],
    "National Teaching Academy of Chicago":[[
        "Harold Ickes News","/harold-ickes-news-8/"],
        ["Harold Ickes New School Update","/harold-ickes-new-school-update/"]],
    "new school":[[
        "Harold Ickes News","/harold-ickes-news-8/"],
        ["The New Teachers Academy","/the-new-teachers-academy/"]],
    "water problem":[[
        "Harold Ickes News","/harold-ickes-news-8/"]],
    "Legal Assistance Foundation":[[
        "Choosing Between Food and Medicine","/choosing-between-food-and-medicine/"]],
    "medication":[[
        "Choosing Between Food and Medicine","/choosing-between-food-and-medicine/"]],
    "public housing security":[[
        "Residents Deny Security Improvements","/residents-deny-security-improvements/"],
        ["Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place/"]],
    "September 11":[[
        "Stop The Violence","/stop-the-violence-11/"],
        ["Dear Resident","/dear-resident-5/"],
        ["The Terror Within","/the-terror-within/"]],
    "terrorism":[[
        "Stop The Violence","/stop-the-violence-11/"],
        ["The Terror Within","/the-terror-within/"]],
    "suburban":[[
        "South Suburban Living","/south-suburban-living/"]],
    "CHA electricity":[[
        "Electrically Charged","/electrically-charged/"],
        ["Shocking Electric Bills Update","/shocking-electric-bills-update/"],
        ["Shocking Electric Bills","/shocking-electric-bills/"],
        ["CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills/"],
        ["High Cost of Gas","/high-cost-of-gas/"]],
    "Highland Park":[[
        "Housing Crisis in Highland Park","/housing-crisis-in-highland-park/"]],
    "housing crisis":[[
        "Housing Crisis in Highland Park","/housing-crisis-in-highland-park/"],
        ["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"]],
    "low-income families":[[
        "Housing Crisis in Highland Park","/housing-crisis-in-highland-park/"],
        ["Welfare Reform: Lost In Space","/welfare-reform-lost-in-space/"]],
    "june july 2002 issue":[[
        "It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini/"],
        ["Youth Violence Prevention","/youth-violence-prevention/"],
        ["Harold Ickes News","/harold-ickes-news-9/"],
        ["The High Cost of Medicine","/the-high-cost-of-medicine/"],
        ["Relocation Rights Contract","/relocation-rights-contract/"],
        ["Welfare Reform: Lost In Space","/welfare-reform-lost-in-space/"],
        ["Harold Ickes New School Update","/harold-ickes-new-school-update/"],
        ["Maintenance Defects at Ogden Courts","/maintenance-defects-at-ogden-courts/"],
        ["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents/"],
        ["Shocking Electric Bills Update","/shocking-electric-bills-update/"]],
    "YouthPeace":[[
        "Youth Violence Prevention","/youth-violence-prevention/"]],
    "leaseholder":[[
        "Harold Ickes News","/harold-ickes-news-9/"]],
    "health care plan":[[
        "The High Cost of Medicine","/the-high-cost-of-medicine/"]],
    "inflation":[[
        "The High Cost of Medicine","/the-high-cost-of-medicine/"]],
    "1996 Welfare Reform Act":[[
        "Welfare Reform: Lost In Space","/welfare-reform-lost-in-space/"]],
    "failure":[[
        "Welfare Reform: Lost In Space","/welfare-reform-lost-in-space/"]],
    "Joyce Foundation":[[
        "Welfare Reform: Lost In Space","/welfare-reform-lost-in-space/"]],
    "national welfare":[[
        "Welfare Reform: Lost In Space","/welfare-reform-lost-in-space/"]],
    "curriculum":[[
        "Harold Ickes New School Update","/harold-ickes-new-school-update/"]],
    "public housing maintenance":[[
        "Maintenance Defects at Ogden Courts","/maintenance-defects-at-ogden-courts/"],
        ["Drug War Diagnosis","/drug-war-diagnosis/"]],
    "tenant meeting":[[
        "Maintenance Defects at Ogden Courts","/maintenance-defects-at-ogden-courts/"]],
    "Coalition to Protect Public Housing":[[
        "Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents/"]],
    "Juneteenth":[[
        "Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents/"],
        ["Stop the Violence","/stop-the-violence-12/"]],
    "lease non-compliance":[[
        "Shocking Electric Bills Update","/shocking-electric-bills-update/"]],
    "communication":[[
        "Dear Resident","/dear-resident-4/"]],
    "community language":[[
        "Dear Resident","/dear-resident-4/"]],
    "interaction":[[
        "Dear Resident","/dear-resident-4/"]],
    "letter":[[
        "Dear Resident","/dear-resident-4/"],
        ["Dear Resident","/dear-resident-9/"],
        ["Dear Resident","/dear-resident-11/"]],
    "march april 2002 issue":[[
        "Dear Resident","/dear-resident-4/"],
        ["Lathrop News","/lathrop-news/"],
        ["ABLA News","/abla-news/"],
        ["Stop The Violence","/stop-the-violence-10/"],
        ["The Renowned Vernon Jordan","/the-renowned-vernon-jordan/"],
        ["Harold Ickes News","/harold-ickes-news-10/"],
        ["Child of the Pack Saddle IX","/child-of-the-pack-saddle-ix/"],
        ["African-American Male Suicides","/african-american-male-suicides/"],
        ["Lathrop Homes Private Management","/lathrop-homes-private-management/"],
        ["Productive Men of the CHA","/productive-men-of-the-cha/"],
        ["CAC Prepares for Battle","/cac-prepares-for-battle/"],
        ["Squatters Worry About Homelessness","/squatters-worry-about-homelessness/"],
        ["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history/"],
        ["Ickes' Homes New Managers","/ickes-homes-new-managers/"],
        ["Shocking Electric Bills","/shocking-electric-bills/"],
        ["A 'One Strike' Battle Planned","/a-one-strike-battle-planned/"],
        ["Drug War Diagnosis","/drug-war-diagnosis/"]],
    "power of words":[[
        "Dear Resident","/dear-resident-4/"]],
    "speech":[[
        "Dear Resident","/dear-resident-4/"],
        ["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center/"]],
    "word usage":[[
        "Dear Resident","/dear-resident-4/"]],
    "anti-violence":[[
        "Lathrop News","/lathrop-news/"],
        ["Rappin' Tate The Great","/rappin-tate-the-great/"]],
    "Clean Day":[[
        "Lathrop News","/lathrop-news/"]],
    "community update":[[
        "Lathrop News","/lathrop-news/"]],
    "march":[[
        "Lathrop News","/lathrop-news/"],
        ["Cabrini-Green Update","/cabrini-green-update/"]],
    "CDHS":[[
        "ABLA News","/abla-news/"]],
    "Revitalization Plan":[[
        "ABLA News","/abla-news/"]],
    "reinvestigation":[[
        "Stop The Violence","/stop-the-violence-10/"]],
    "trials":[[
        "Stop The Violence","/stop-the-violence-10/"]],
    "wrongful conviction":[[
        "Stop The Violence","/stop-the-violence-10/"]],
    "accomplishment":[[
        "The Renowned Vernon Jordan","/the-renowned-vernon-jordan/"]],
    "National Urban League":[[
        "The Renowned Vernon Jordan","/the-renowned-vernon-jordan/"]],
    "Vernon Jordan":[[
        "The Renowned Vernon Jordan","/the-renowned-vernon-jordan/"]],
    "parking":[[
        "Harold Ickes News","/harold-ickes-news-10/"]],
    "State Street":[[
        "Harold Ickes News","/harold-ickes-news-10/"]],
    "vacated land":[[
        "Harold Ickes News","/harold-ickes-news-10/"]],
    "African American communities":[[
        "African-American Male Suicides","/african-american-male-suicides/"]],
    "community support":[[
        "African-American Male Suicides","/african-american-male-suicides/"]],
    "development":[[
        "African-American Male Suicides","/african-american-male-suicides/"],
        ["A History of Cabrini-Green","/a-history-of-cabrini-green/"]],
    "suicide":[[
        "African-American Male Suicides","/african-american-male-suicides/"]],
    "private management":[[
        "Lathrop Homes Private Management","/lathrop-homes-private-management/"],
        ["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management/"],
        ["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike/"]],
    "resident feedback":[[
        "Lathrop Homes Private Management","/lathrop-homes-private-management/"]],
    "recognition":[[
        "Productive Men of the CHA","/productive-men-of-the-cha/"]],
    "replacement housing":[[
        "CAC Prepares for Battle","/cac-prepares-for-battle/"]],
    "Department of Human Services":[[
        "Squatters Worry About Homelessness","/squatters-worry-about-homelessness/"],
        ["8,000 To Get Jobs Help","/8000-to-get-jobs-help/"]],
    "DHS":[[
        "Squatters Worry About Homelessness","/squatters-worry-about-homelessness/"]],
    "squatting":[[
        "Squatters Worry About Homelessness","/squatters-worry-about-homelessness/"],
        ["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"]],
    "vouchers":[[
        "Squatters Worry About Homelessness","/squatters-worry-about-homelessness/"],
        ["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8/"],
        ["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"],
        ["Squatters in CHA","/squatters-in-cha/"],
        ["The State Of Section 8","/the-state-of-section-8/"]],
    "accountability":[[
        "Girl X Reveals Tragic History","/girl-x-reveals-tragic-history/"]],
    "assault":[[
        "Girl X Reveals Tragic History","/girl-x-reveals-tragic-history/"]],
    "Girl X":[[
        "Girl X Reveals Tragic History","/girl-x-reveals-tragic-history/"],
        ["Stop The Violence","/stop-the-violence-14/"],
        ["Schools March for Victims","/schools-march-for-victims/"],
        ["Cabrini-Green Update","/cabrini-green-update/"]],
    "liability":[[
        "Girl X Reveals Tragic History","/girl-x-reveals-tragic-history/"]],
    "public housing resodents":[[
        "Girl X Reveals Tragic History","/girl-x-reveals-tragic-history/"]],
    "security services":[[
        "Girl X Reveals Tragic History","/girl-x-reveals-tragic-history/"]],
    "financial security":[[
        "Ickes' Homes New Managers","/ickes-homes-new-managers/"]],
    "integration activity":[[
        "Ickes' Homes New Managers","/ickes-homes-new-managers/"]],
    "public services":[[
        "Ickes' Homes New Managers","/ickes-homes-new-managers/"],
        ["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management/"]],
    "The Woodlawn Organization":[[
        "Ickes' Homes New Managers","/ickes-homes-new-managers/"]],
    "TWO":[[
        "Ickes' Homes New Managers","/ickes-homes-new-managers/"]],
    "Anti-Drug Abuse Act":[[
        "A 'One Strike' Battle Planned","/a-one-strike-battle-planned/"]],
    "cases":[[
        "A 'One Strike' Battle Planned","/a-one-strike-battle-planned/"]],
    "civil forfeiture statute":[[
        "A 'One Strike' Battle Planned","/a-one-strike-battle-planned/"]],
    "innocent tenant defense":[[
        "A 'One Strike' Battle Planned","/a-one-strike-battle-planned/"]],
    "public housing policy":[[
        "A 'One Strike' Battle Planned","/a-one-strike-battle-planned/"]],
    "brutalization":[[
        "Drug War Diagnosis","/drug-war-diagnosis/"]],
    "Chicago drug use":[[
        "Drug War Diagnosis","/drug-war-diagnosis/"]],
    "Community Alternative Policing Strategy":[[
        "Drug War Diagnosis","/drug-war-diagnosis/"]],
    "drug economy":[[
        "Drug War Diagnosis","/drug-war-diagnosis/"]],
    "public health":[[
        "Drug War Diagnosis","/drug-war-diagnosis/"]],
    "solution":[[
        "Drug War Diagnosis","/drug-war-diagnosis/"]],
    "treatment":[[
        "Drug War Diagnosis","/drug-war-diagnosis/"]],
    "Leroy Watkins Day":[[
        "Remembering Leroy Watkins","/remembering-leroy-watkins/"]],
    "rememberance":[[
        "Remembering Leroy Watkins","/remembering-leroy-watkins/"],
        ["The Life of Artensa Randolph","/the-life-of-artensa-randolph/"]],
    "reevaluation":[[
        "A Section 8 Recipient's Painful Reality","/a-section-8-recipients-painful-reality/"]],
    "rent increase":[[
        "A Section 8 Recipient's Painful Reality","/a-section-8-recipients-painful-reality/"]],
    "housing permanence":[[
        "Residents Look to the Hills","/residents-look-to-the-hills/"]],
    "infestation":[[
        "Residents Look to the Hills","/residents-look-to-the-hills/"]],
    "instability":[[
        "Residents Look to the Hills","/residents-look-to-the-hills/"]],
    "sewer department":[[
        "Residents Look to the Hills","/residents-look-to-the-hills/"]],
    "Woodlawn Organization":[[
        "Residents Look to the Hills","/residents-look-to-the-hills/"]],
    "informative":[[
        "A Savory Survey","/a-savory-survey/"]],
    "study":[[
        "A Savory Survey","/a-savory-survey/"]],
    "Urban Institute":[[
        "A Savory Survey","/a-savory-survey/"]],
    "improvement":[[
        "RMCs Aim to Please?","/rmcs-aim-to-please/"],
        ["New Vincennes Plaza","/new-vincennes-plaza/"]],
    "resident management":[[
        "RMCs Aim to Please?","/rmcs-aim-to-please/"]],
    "Resident Management Corporations":[[
        "RMCs Aim to Please?","/rmcs-aim-to-please/"]],
    "RMC":[[
        "RMCs Aim to Please?","/rmcs-aim-to-please/"]],
    "federal-assissted housing":[[
        "A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8/"]],
    "housing options":[[
        "A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8/"]],
    "condominiums":[[
        "Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"]],
    "conversions":[[
        "Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"]],
    "experiment":[[
        "Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"]],
    "homeless shelters":[[
        "Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"]],
    "surge":[[
        "Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2/"]],
    "American unity":[[
        "Dear Resident","/dear-resident-5/"]],
    "august september 2001 issue":[[
        "Dear Resident","/dear-resident-5/"],
        ["The Terror Within","/the-terror-within/"],
        ["Child of the Pack Saddle Part VI","/child-of-the-pack-saddle-part-vi/"],
        ["Stop the Violence","/stop-the-violence-12/"],
        ["New Vincennes Plaza","/new-vincennes-plaza/"],
        ["Housing For The Disabled","/housing-for-the-disabled/"],
        ["Structural Justice","/structural-justice/"],
        ["Seniors Quality of Life On The Rise","/seniors-quality-of-life-on-the-rise/"],
        ["CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills/"],
        ["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing/"],
        ["Squatters in CHA","/squatters-in-cha/"],
        ["ABLA News","/abla-news-2/"],
        ["Don't Rock The Boat","/dont-rock-the-boat/"],
        ["CHA Family Service Connectors","/cha-family-service-connectors/"],
        ["Harold Ickes Homes News","/harold-ickes-homes-news/"],
        ["SPECIAL FEATURE: City Gets CHA Funds Update","/special-feature-city-gets-cha-funds-update/"]],
    "disunity":[[
        "Dear Resident","/dear-resident-5/"]],
    "low-income representation":[[
        "Dear Resident","/dear-resident-5/"]],
    "retribution":[[
        "Dear Resident","/dear-resident-5/"]],
    "vulnerability":[[
        "Dear Resident","/dear-resident-5/"]],
    "aftermath":[[
        "The Terror Within","/the-terror-within/"]],
    "families":[[
        "The Terror Within","/the-terror-within/"]],
    "safe communities":[[
        "The Terror Within","/the-terror-within/"]],
    "sympathy":[[
        "The Terror Within","/the-terror-within/"]],
    "U.S. Military":[[
        "The Terror Within","/the-terror-within/"]],
    "War on Terrorism":[[
        "The Terror Within","/the-terror-within/"]],
    "freedom march":[[
        "Stop the Violence","/stop-the-violence-12/"]],
    "testimony":[[
        "Stop the Violence","/stop-the-violence-12/"]],
    "trial":[[
        "Stop the Violence","/stop-the-violence-12/"],
        ["Stop The Violence","/stop-the-violence-13/"]],
    "47th Street":[[
        "New Vincennes Plaza","/new-vincennes-plaza/"],
        ["Transforming CHA: Chewing Up Tobacco Road","/transforming-cha-chewing-up-tobacco-road/"]],
    "Creative Desgisn":[[
        "New Vincennes Plaza","/new-vincennes-plaza/"]],
    "landmark":[[
        "New Vincennes Plaza","/new-vincennes-plaza/"]],
    "Vincennes Plaza":[[
        "New Vincennes Plaza","/new-vincennes-plaza/"]],
    "Disability Rights Actions Coalition for Housing":[[
        "Housing For The Disabled","/housing-for-the-disabled/"]],
    "DRACH":[[
        "Housing For The Disabled","/housing-for-the-disabled/"]],
    "fair housing":[[
        "Housing For The Disabled","/housing-for-the-disabled/"]],
    "Fair Housing Amendments Act":[[
        "Housing For The Disabled","/housing-for-the-disabled/"]],
    "housing programs":[[
        "Housing For The Disabled","/housing-for-the-disabled/"]],
    "local housing boards":[[
        "Housing For The Disabled","/housing-for-the-disabled/"]],
    "affordable public housing":[[
        "Structural Justice","/structural-justice/"]],
    "Chicago Rehab Network":[[
        "Structural Justice","/structural-justice/"]],
    "Chicago workshops":[[
        "Structural Justice","/structural-justice/"]],
    "conference":[[
        "Structural Justice","/structural-justice/"],
        ["The State Of Section 8","/the-state-of-section-8/"],
        ["Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington/"]],
    "property":[[
        "Structural Justice","/structural-justice/"]],
    "real estate":[[
        "Structural Justice","/structural-justice/"]],
    "Valuing Affordability":[[
        "Structural Justice","/structural-justice/"]],
    "Chicago senior citizens":[[
        "Seniors Quality of Life On The Rise","/seniors-quality-of-life-on-the-rise/"]],
    "Affordable Power to the People":[[
        "CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills/"]],
    "energy":[[
        "CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills/"],
        ["High Cost of Gas","/high-cost-of-gas/"]],
    "energy bills":[[
        "CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills/"]],
    "protest marches":[[
        "CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills/"]],
    "summer cooling program":[[
        "CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills/"]],
    "Housing Choice Survey":[[
        "In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing/"]],
    "scattered site units":[[
        "In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing/"]],
    "temporary relocation":[[
        "In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing/"]],
    "CHA squatters":[[
        "Squatters in CHA","/squatters-in-cha/"]],
    "lease compliance":[[
        "Squatters in CHA","/squatters-in-cha/"]],
    "festival":[[
        "ABLA News","/abla-news-2/"]],
    "resident meetings":[[
        "ABLA News","/abla-news-2/"]],
    "Bill Clinton":[[
        "Don't Rock The Boat","/dont-rock-the-boat/"],
        ["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike/"],
        ["L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike/"],
        ["The Man Who Scared the Hell Out of Me","/the-man-who-scared-the-hell-out-of-me/"]],
    "Lakefront Community Organization":[[
        "Don't Rock The Boat","/dont-rock-the-boat/"]],
    "LCO":[[
        "Don't Rock The Boat","/dont-rock-the-boat/"]],
    "Chicago public service":[[
        "CHA Family Service Connectors","/cha-family-service-connectors/"],
        ["Transforming CHA: Making Connections","/transforming-cha-making-connections/"]],
    "Service Connector":[[
        "CHA Family Service Connectors","/cha-family-service-connectors/"],
        ["Transforming CHA: Making Connections","/transforming-cha-making-connections/"]],
    "services":[[
        "CHA Family Service Connectors","/cha-family-service-connectors/"]],
    "fire devastation":[[
        "Harold Ickes Homes News","/harold-ickes-homes-news/"],
        ["Transforming CHA: Flannery Homes Residents Keep Waiting","/transforming-cha-flannery-homes-residents-keep-waiting/"]],
    "contract extension":[[
        "SPECIAL FEATURE: City Gets CHA Funds Update","/special-feature-city-gets-cha-funds-update/"]],
    "federal assistance program":[[
        "SPECIAL FEATURE: City Gets CHA Funds Update","/special-feature-city-gets-cha-funds-update/"]],
    "grant":[[
        "SPECIAL FEATURE: City Gets CHA Funds Update","/special-feature-city-gets-cha-funds-update/"],
        ["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting/"]],
    "CHA. Chicago Housing Authority":[[
        "Dear Resident","/dear-resident-6/"]],
    "june july 2001 issue":[[
        "Dear Resident","/dear-resident-6/"],
        ["Sinai Health Services","/sinai-health-services/"],
        ["Stop The Violence","/stop-the-violence-13/"],
        ["Saluting Men of the CHA","/saluting-men-of-the-cha/"],
        ["Child of The Pack Saddle: Part V","/child-of-the-pack-saddle-part-v/"],
        ["The State Of Section 8","/the-state-of-section-8/"],
        ["A Trip To The Future","/a-trip-to-the-future/"],
        ["Razing the Brooks Extension","/razing-the-brooks-extension/"],
        ["Ickes: Back To Square One","/ickes-back-to-square-one/"],
        ["Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place/"],
        ["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds/"]],
    "public housing redevelopment":[[
        "Dear Resident","/dear-resident-6/"],
        ["Transforming CHA: Washington Park Wants Answers","/transforming-cha-washington-park-wants-answers/"]],
    "urban development":[[
        "Dear Resident","/dear-resident-6/"]],
    "health services":[[
        "Sinai Health Services","/sinai-health-services/"]],
    "medical resources":[[
        "Sinai Health Services","/sinai-health-services/"]],
    "Sinair Senior services":[[
        "Sinai Health Services","/sinai-health-services/"]],
    "advocate":[[
        "Saluting Men of the CHA","/saluting-men-of-the-cha/"]],
    "honor":[[
        "Saluting Men of the CHA","/saluting-men-of-the-cha/"]],
    "leaders":[[
        "Saluting Men of the CHA","/saluting-men-of-the-cha/"]],
    "profile":[[
        "Saluting Men of the CHA","/saluting-men-of-the-cha/"]],
    "conflict resolution":[[
        "The State Of Section 8","/the-state-of-section-8/"]],
    "interactive":[[
        "The State Of Section 8","/the-state-of-section-8/"]],
    "subsidized housing":[[
        "The State Of Section 8","/the-state-of-section-8/"]],
    "Tenants United For Housing":[[
        "The State Of Section 8","/the-state-of-section-8/"],
        ["Del Prado Residents Face Uncertainty","/del-prado-residents-face-uncertainty/"]],
    "workshops":[[
        "The State Of Section 8","/the-state-of-section-8/"]],
    "Brinshore-Michaels":[[
        "A Trip To The Future","/a-trip-to-the-future/"]],
    "developer":[[
        "A Trip To The Future","/a-trip-to-the-future/"]],
    "John Hay Homes":[[
        "A Trip To The Future","/a-trip-to-the-future/"]],
    "lease compliant":[[
        "A Trip To The Future","/a-trip-to-the-future/"]],
    "Madison Park Place Homes":[[
        "A Trip To The Future","/a-trip-to-the-future/"]],
    "mistreatment":[[
        "A Trip To The Future","/a-trip-to-the-future/"],
        ["Stop the Violence II","/stop-the-violence-ii/"]],
    "new development":[[
        "A Trip To The Future","/a-trip-to-the-future/"]],
    "resident involvement":[[
        "A Trip To The Future","/a-trip-to-the-future/"]],
    "Springfield":[[
        "A Trip To The Future","/a-trip-to-the-future/"]],
    "transparency":[[
        "A Trip To The Future","/a-trip-to-the-future/"]],
    "high-rise":[[
        "Razing the Brooks Extension","/razing-the-brooks-extension/"]],
    "Robert Brooks Extensions":[[
        "Razing the Brooks Extension","/razing-the-brooks-extension/"]],
    "vandalism":[[
        "Ickes: Back To Square One","/ickes-back-to-square-one/"]],
    "inspection":[[
        "Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place/"],
        ["Residents Fight Vacate Orders","/residents-fight-vacate-orders/"],
        ["Focus On Section 8","/focus-on-section-8/"]],
    "Chicago residents":[[
        "SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds/"]],
    "programs":[[
        "SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds/"]],
    "april 2001 issue":[[
        "Second Chance Legislation","/second-chance-legislation/"],
        ["Stop The Violence","/stop-the-violence-14/"],
        ["Youths Rally For Summer Jobs","/youths-rally-for-summer-jobs/"],
        ["Child of the Pack Saddle: Part IV","/child-of-the-pack-saddle-part-iv/"],
        ["High Cost of Gas","/high-cost-of-gas/"],
        ["Project Based Section-8s Threatened","/project-based-section-8s-threatened/"],
        ["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management/"],
        ["The New Teachers Academy","/the-new-teachers-academy/"],
        ["Transforming CHA: Chewing Up Tobacco Road","/transforming-cha-chewing-up-tobacco-road/"],
        ["Transforming CHA: Senior Only Buildings","/transforming-cha-senior-only-buildings/"],
        ["Transforming CHA: Making Connections","/transforming-cha-making-connections/"],
        ["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan/"]],
    "criminal history":[[
        "Second Chance Legislation","/second-chance-legislation/"]],
    "criminal record":[[
        "Second Chance Legislation","/second-chance-legislation/"]],
    "ex-convicts":[[
        "Second Chance Legislation","/second-chance-legislation/"]],
    "expungement":[[
        "Second Chance Legislation","/second-chance-legislation/"]],
    "Illinois legislation":[[
        "Second Chance Legislation","/second-chance-legislation/"]],
    "second chance":[[
        "Second Chance Legislation","/second-chance-legislation/"]],
    "David Protess":[[
        "Stop The Violence","/stop-the-violence-14/"]],
    "Northwestern University":[[
        "Stop The Violence","/stop-the-violence-14/"]],
    "demonstrations":[[
        "Youths Rally For Summer Jobs","/youths-rally-for-summer-jobs/"]],
    "Cermak Teachers Training Academy":[[
        "The New Teachers Academy","/the-new-teachers-academy/"]],
    "Rosenwald":[[
        "Transforming CHA: Chewing Up Tobacco Road","/transforming-cha-chewing-up-tobacco-road/"]],
    "small business":[[
        "Transforming CHA: Chewing Up Tobacco Road","/transforming-cha-chewing-up-tobacco-road/"]],
    "senior residents":[[
        "Transforming CHA: Senior Only Buildings","/transforming-cha-senior-only-buildings/"]],
    "AmeriCorps":[[
        "Transforming CHA: Making Connections","/transforming-cha-making-connections/"]],
    "City Department of Human Services":[[
        "Transforming CHA: Making Connections","/transforming-cha-making-connections/"]],
    "february 2001 issue":[[
        "Dear Resident","/dear-resident-7/"],
        ["Black History Section: A Celebrated Life","/black-history-section-a-celebrated-life/"],
        ["Child of the Pack Saddle Part III","/child-of-the-pack-saddle-part-iii/"],
        ["Rappin' Tate The Great","/rappin-tate-the-great/"],
        ["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues/"],
        ["Stop The Violence","/stop-the-violence-15/"],
        ["Transforming CHA: Flannery Homes Residents Keep Waiting","/transforming-cha-flannery-homes-residents-keep-waiting/"],
        ["Del Prado Residents Face Uncertainty","/del-prado-residents-face-uncertainty/"],
        ["Transforming CHA: Federal Housing Voucher Woes","/transforming-cha-federal-housing-voucher-woes/"],
        ["Transforming CHA: How To Save On Rent","/transforming-cha-how-to-save-on-rent/"],
        ["Transforming CHA: One Strike Woes","/transforming-cha-one-strike-woes/"],
        ["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike/"],
        ["Transforming CHA: New Lights on Dark Passage","/transforming-cha-new-lights-on-dark-passage/"],
        ["Transforming CHA: Washington Park Wants Answers","/transforming-cha-washington-park-wants-answers/"],
        ["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting/"],
        ["Cold War Echoes","/cold-war-echoes/"]],
    "millenium":[[
        "Dear Resident","/dear-resident-7/"]],
    "social progress":[[
        "Dear Resident","/dear-resident-7/"]],
    "Y2K":[[
        "Dear Resident","/dear-resident-7/"]],
    "Gertrude Fredd":[[
        "Black History Section: A Celebrated Life","/black-history-section-a-celebrated-life/"]],
    "Chicago music":[[
        "Rappin' Tate The Great","/rappin-tate-the-great/"]],
    "rap":[[
        "Rappin' Tate The Great","/rappin-tate-the-great/"]],
    "Rappn' Tate da Great":[[
        "Rappin' Tate The Great","/rappin-tate-the-great/"]],
    "Tate":[[
        "Rappin' Tate The Great","/rappin-tate-the-great/"]],
    "Atgeld Gardens":[[
        "Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues/"]],
    "health hazards":[[
        "Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues/"]],
    "industrial waste":[[
        "Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues/"]],
    "corruption":[[
        "Stop The Violence","/stop-the-violence-15/"],
        ["Inspector General Nabs Employees","/inspector-general-nabs-employees/"]],
    "drug offenses":[[
        "Stop The Violence","/stop-the-violence-15/"]],
    "fire":[[
        "Transforming CHA: Flannery Homes Residents Keep Waiting","/transforming-cha-flannery-homes-residents-keep-waiting/"]],
    "Flannery Homes":[[
        "Transforming CHA: Flannery Homes Residents Keep Waiting","/transforming-cha-flannery-homes-residents-keep-waiting/"],
        ["Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update/"],
        ["Flannery Homes Update","/flannery-homes-update/"],
        ["Flannery Homes News","/flannery-homes-news/"],
        ["Flannery Homes Update","/flannery-homes-update-2/"],
        ["Last Harvest","/last-harvest/"]],
    "Del Prado":[[
        "Del Prado Residents Face Uncertainty","/del-prado-residents-face-uncertainty/"]],
    "housing subsidies":[[
        "Del Prado Residents Face Uncertainty","/del-prado-residents-face-uncertainty/"]],
    "Hyde Park":[[
        "Del Prado Residents Face Uncertainty","/del-prado-residents-face-uncertainty/"]],
    "federal housing vouchers":[[
        "Transforming CHA: Federal Housing Voucher Woes","/transforming-cha-federal-housing-voucher-woes/"]],
    "Admissions and Occupancy policy":[[
        "Transforming CHA: How To Save On Rent","/transforming-cha-how-to-save-on-rent/"]],
    "Income Disregard":[[
        "Transforming CHA: How To Save On Rent","/transforming-cha-how-to-save-on-rent/"]],
    "9th Circuit Court":[[
        "Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike/"]],
    "drug possession":[[
        "Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike/"]],
    "Housing Opportunities Extension Act":[[
        "Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike/"],
        ["L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike/"]],
    "lease":[[
        "Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike/"],
        ["Focus On Section 8","/focus-on-section-8/"]],
    "Oakland Housing Authority":[[
        "Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike/"]],
    "NOFA":[[
        "Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting/"]],
    "Notices for Funding Availability":[[
        "Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting/"]],
    "grants":[[
        "Cold War Echoes","/cold-war-echoes/"]],
    "U.S. Department of Housing and Urban Development":[[
        "Cold War Echoes","/cold-war-echoes/"],
        ["The Man Who Scared the Hell Out of Me","/the-man-who-scared-the-hell-out-of-me/"]],
    "August 1998 Issue":[[
        "ABLA Homes Update","/abla-homes-update/"],
        ["Ida B. Wells Reunion","/ida-b-wells-reunion/"],
        ["Hi Ho Dobbin Away","/hi-ho-dobbin-away/"],
        ["HUD Head: CHA Off Troubled List","/hud-head-cha-off-troubled-list/"],
        ["All Things Old and New at Harold Ickes Homes","/all-things-old-and-new/"],
        ["Dear Resident","/dear-resident-12/"],
        ["Lathrop Homes News","/lathrop-homes-news-2/"],
        ["Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update/"],
        ["Cabrini Cliffhanger","/cabrini-cliffhanger/"],
        ["RJ Visits Miami/Dade Housing Authority","/rj-visits-miamidade-housing-authority/"],
        ["New Facility for Scattered Sites","/new-facility-for-scattered-sites/"],
        ["Stop The Violence","/stop-the-violence-18/"],
        ["Access Report","/access-report-3/"],
        ["Altgeld Gardens Report","/altgeld-gardens-report/"],
        ["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man/"]],
    "current events":[[
        "ABLA Homes Update","/abla-homes-update/"],
        ["Lathrop Homes News","/lathrop-homes-news-2/"],
        ["Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update/"],
        ["Altgeld Gardens Report","/altgeld-gardens-report/"]],
    "Joseph Medill":[[
        "ABLA Homes Update","/abla-homes-update/"]],
    "Joseph Medill Intermediate and Upper Grade Center":[[
        "ABLA Homes Update","/abla-homes-update/"]],
    "local news":[[
        "ABLA Homes Update","/abla-homes-update/"]],
    "CHA Alumni Association":[[
        "Ida B. Wells Reunion","/ida-b-wells-reunion/"]],
    "reunion":[[
        "Ida B. Wells Reunion","/ida-b-wells-reunion/"]],
    "anecdote":[[
        "Hi Ho Dobbin Away","/hi-ho-dobbin-away/"]],
    "Levy Center":[[
        "Hi Ho Dobbin Away","/hi-ho-dobbin-away/"]],
    "control":[[
        "HUD Head: CHA Off Troubled List","/hud-head-cha-off-troubled-list/"]],
    "Public Housing Management Assessment Program":[[
        "HUD Head: CHA Off Troubled List","/hud-head-cha-off-troubled-list/"]],
    "rating":[[
        "HUD Head: CHA Off Troubled List","/hud-head-cha-off-troubled-list/"]],
    "Troubled Housing Authorities":[[
        "HUD Head: CHA Off Troubled List","/hud-head-cha-off-troubled-list/"]],
    "change":[[
        "All Things Old and New at Harold Ickes Homes","/all-things-old-and-new/"]],
    "revitalization":[[
        "All Things Old and New at Harold Ickes Homes","/all-things-old-and-new/"]],
    "athletics":[[
        "Dear Resident","/dear-resident-12/"]],
    "Options for Knowledge Program":[[
        "Dear Resident","/dear-resident-12/"]],
    "priorities":[[
        "Dear Resident","/dear-resident-12/"]],
    "community news":[[
        "Lathrop Homes News","/lathrop-homes-news-2/"],
        ["Altgeld Gardens News","/altgeld-gardens-news-2/"]],
    "Resident Organizations":[[
        "Lathrop Homes News","/lathrop-homes-news-2/"]],
    "Orchard Park":[[
        "Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update/"],
        ["Last Harvest","/last-harvest/"]],
    "Habitat Company":[[
        "Cabrini Cliffhanger","/cabrini-cliffhanger/"],
        ["Section 8 Update","/section-8-update/"]],
    "Halsted":[[
        "Cabrini Cliffhanger","/cabrini-cliffhanger/"]],
    "Near North":[[
        "Cabrini Cliffhanger","/cabrini-cliffhanger/"]],
    "diversity":[[
        "RJ Visits Miami/Dade Housing Authority","/rj-visits-miamidade-housing-authority/"]],
    "Haley Sofge":[[
        "RJ Visits Miami/Dade Housing Authority","/rj-visits-miamidade-housing-authority/"]],
    "Latino residents":[[
        "RJ Visits Miami/Dade Housing Authority","/rj-visits-miamidade-housing-authority/"]],
    "Miami/Dade Housing Agency":[[
        "RJ Visits Miami/Dade Housing Authority","/rj-visits-miamidade-housing-authority/"]],
    "Hispanic Housing Development Corporation":[[
        "New Facility for Scattered Sites","/new-facility-for-scattered-sites/"],
        ["Access Report","/access-report/"]],
    "Scattered Sites North Central program":[[
        "New Facility for Scattered Sites","/new-facility-for-scattered-sites/"]],
    "CHA Police Department":[[
        "Stop The Violence","/stop-the-violence-18/"]],
    "Community Alternative Policing Strategies":[[
        "Stop The Violence","/stop-the-violence-18/"]],
    "lock down":[[
        "Stop The Violence","/stop-the-violence-18/"]],
    "Cook-Dupage Transportation":[[
        "Access Report","/access-report-3/"]],
    "CTA Paratransit Operations":[[
        "Access Report","/access-report-3/"]],
    "disabled community":[[
        "Access Report","/access-report-3/"],
        ["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments/"]],
    "racial issues":[[
        "Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man/"]],
    "Robert Rochan Taylor":[[
        "Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man/"]],
    "Dear Resident":[[
        "Dear Resident","/dear-resident-9/"]],
    "January 1998 Issue":[[
        "Dear Resident","/dear-resident-9/"],
        ["Stop the Violence","/stop-the-violence-16/"],
        ["Altgeld Gardens News","/altgeld-gardens-news/"],
        ["CHA Announces First Clean Audit","/cha-announces-first-clean-audit/"],
        ["Flannery Homes Update","/flannery-homes-update/"],
        ["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation/"],
        ["REDI: A New Beginning?","/redi-a-new-beginning/"],
        ["ABLA Relocation Report","/abla-relocation-report/"],
        ["L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike/"],
        ["CHA to Buy Back Laundry Tokens","/cha-to-buy-back-laundry-tokens/"],
        ["Inspector General Nabs Employees","/inspector-general-nabs-employees/"],
        ["Access Report","/access-report/"],
        ["The Million Woman March: One Woman's View","/the-million-woman-march-one-womans-view/"],
        ["The Next CHA Chairman?","/the-next-cha-chairman/"],
        ["Farewell, Mr. Chairman","/farewell-mr-chairman/"],
        ["The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath/"]],
    "perseverence":[[
        "Dear Resident","/dear-resident-9/"]],
    "Citizens Review Board":[[
        "Stop the Violence","/stop-the-violence-16/"]],
    "Crime Victims Bureau":[[
        "Stop the Violence","/stop-the-violence-16/"]],
    "Aldridge":[[
        "Altgeld Gardens News","/altgeld-gardens-news/"]],
    "Altgeld Health Center":[[
        "Altgeld Gardens News","/altgeld-gardens-news/"]],
    "condolences":[[
        "Altgeld Gardens News","/altgeld-gardens-news/"]],
    "Thanksgiving":[[
        "Altgeld Gardens News","/altgeld-gardens-news/"]],
    "audit":[[
        "CHA Announces First Clean Audit","/cha-announces-first-clean-audit/"]],
    "finances":[[
        "CHA Announces First Clean Audit","/cha-announces-first-clean-audit/"]],
    "financial issues":[[
        "CHA Announces First Clean Audit","/cha-announces-first-clean-audit/"],
        ["CHA to Buy Back Laundry Tokens","/cha-to-buy-back-laundry-tokens/"]],
    "festivities":[[
        "Flannery Homes Update","/flannery-homes-update/"],
        ["Altgeld Gardens News","/altgeld-gardens-news-2/"],
        ["Happy 60th, Lathrop Homes","/happy-60th-lathrop-homes/"]],
    "holiday":[[
        "Flannery Homes Update","/flannery-homes-update/"]],
    "Jenner Elementary School":[[
        "Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation/"]],
    "entrepreneurs":[[
        "REDI: A New Beginning?","/redi-a-new-beginning/"]],
    "REDI":[[
        "REDI: A New Beginning?","/redi-a-new-beginning/"]],
    "Resident Employment Development Initiative":[[
        "REDI: A New Beginning?","/redi-a-new-beginning/"]],
    "Brooks Homes":[[
        "ABLA Relocation Report","/abla-relocation-report/"]],
    "Memorandum of Agreement":[[
        "ABLA Relocation Report","/abla-relocation-report/"]],
    "ACLU":[[
        "L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike/"]],
    "American Civil Liberties Union":[[
        "L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike/"]],
    "constitutionality":[[
        "L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike/"]],
    "refunds":[[
        "CHA to Buy Back Laundry Tokens","/cha-to-buy-back-laundry-tokens/"]],
    "employees":[[
        "Inspector General Nabs Employees","/inspector-general-nabs-employees/"]],
    "identification":[[
        "Inspector General Nabs Employees","/inspector-general-nabs-employees/"]],
    "Leonard Odom":[[
        "Inspector General Nabs Employees","/inspector-general-nabs-employees/"]],
    "recovery of materials":[[
        "Inspector General Nabs Employees","/inspector-general-nabs-employees/"]],
    "theft":[[
        "Inspector General Nabs Employees","/inspector-general-nabs-employees/"]],
    "ADA":[[
        "Access Report","/access-report/"]],
    "Americans with Disabilities Act":[[
        "Access Report","/access-report/"],
        ["Access Report","/access-report-2/"],
        ["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments/"]],
    "Million Woman March":[[
        "The Million Woman March: One Woman's View","/the-million-woman-march-one-womans-view/"]],
    "Philadelphia":[[
        "The Million Woman March: One Woman's View","/the-million-woman-march-one-womans-view/"]],
    "women's issues":[[
        "The Million Woman March: One Woman's View","/the-million-woman-march-one-womans-view/"]],
    "chairman":[[
        "The Next CHA Chairman?","/the-next-cha-chairman/"]],
    "Boston":[[
        "The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath/"]],
    "Bromley Heath":[[
        "The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath/"]],
    "Bromley-Heath Tenant Management Corporation":[[
        "The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath/"]],
    "CLPHA":[[
        "The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath/"]],
    "Conference of Large Public Housing Authorities":[[
        "The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath/"]],
    "NAHRO":[[
        "The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath/"]],
    "National Association of Housing and Redevelopment Officials":[[
        "The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath/"]],
    "events":[[
        "Altgeld Gardens News","/altgeld-gardens-news-2/"]],
    "Fall 1997 Issue":[[
        "Altgeld Gardens News","/altgeld-gardens-news-2/"],
        ["Dear Resident","/dear-resident-11/"],
        ["Section 8 Update","/section-8-update/"],
        ["Chatting with Marie Billingsley","/chatting-with-marie-billingsley/"],
        ["8,000 To Get Jobs Help","/8000-to-get-jobs-help/"],
        ["Mothers Tackle Child Care Woes","/mothers-tackle-child-care-woes/"],
        ["Flannery Homes News","/flannery-homes-news/"],
        ["Happy 60th, Lathrop Homes","/happy-60th-lathrop-homes/"],
        ["CHA and Latinos: Interview with Joe Shuldiner","/cha-and-latinos-interview-with-joe-shuldiner/"],
        ["Stop the Violence II","/stop-the-violence-ii/"],
        ["Schools March for Victims","/schools-march-for-victims/"],
        ["The Life of Artensa Randolph","/the-life-of-artensa-randolph/"],
        ["When Will It End?","/when-will-it-end/"],
        ["Inner-City Truths: A Book Review","/inner-city-truths-a-book-review/"],
        ["Access Report","/access-report-2/"],
        ["A Decree But to What Degree?","/a-decree-but-to-what-degree/"],
        ["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center/"],
        ["Residents Fight Vacate Orders","/residents-fight-vacate-orders/"]],
    "Youthnet Fun Day":[[
        "Altgeld Gardens News","/altgeld-gardens-news-2/"]],
    "beauty":[[
        "Dear Resident","/dear-resident-11/"]],
    "black women":[[
        "Dear Resident","/dear-resident-11/"]],
    "Million Man March":[[
        "Dear Resident","/dear-resident-11/"]],
    "respect":[[
        "Dear Resident","/dear-resident-11/"]],
    "applicants":[[
        "Section 8 Update","/section-8-update/"]],
    "Marie Billingsley":[[
        "Chatting with Marie Billingsley","/chatting-with-marie-billingsley/"]],
    "Senior south Local Advisory Council":[[
        "Chatting with Marie Billingsley","/chatting-with-marie-billingsley/"]],
    "Walter Russell":[[
        "Chatting with Marie Billingsley","/chatting-with-marie-billingsley/"]],
    "Illinois Job Advantage":[[
        "8,000 To Get Jobs Help","/8000-to-get-jobs-help/"]],
    "TANF":[[
        "8,000 To Get Jobs Help","/8000-to-get-jobs-help/"]],
    "Temporary Assistance to Needy Families":[[
        "8,000 To Get Jobs Help","/8000-to-get-jobs-help/"]],
    "training":[[
        "8,000 To Get Jobs Help","/8000-to-get-jobs-help/"]],
    "child care":[[
        "Mothers Tackle Child Care Woes","/mothers-tackle-child-care-woes/"]],
    "Daycare Action Council":[[
        "Mothers Tackle Child Care Woes","/mothers-tackle-child-care-woes/"]],
    "walfare":[[
        "Mothers Tackle Child Care Woes","/mothers-tackle-child-care-woes/"]],
    "West Haven":[[
        "Mothers Tackle Child Care Woes","/mothers-tackle-child-care-woes/"],
        ["Replacement Housing or Replacing People","/replacement-housing-or-replacing-people/"]],
    "working mothers":[[
        "Mothers Tackle Child Care Woes","/mothers-tackle-child-care-woes/"]],
    "4-H Club":[[
        "Happy 60th, Lathrop Homes","/happy-60th-lathrop-homes/"]],
    "Latinos United":[[
        "CHA and Latinos: Interview with Joe Shuldiner","/cha-and-latinos-interview-with-joe-shuldiner/"],
        ["Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing/"]],
    "injuries":[[
        "Stop the Violence II","/stop-the-violence-ii/"]],
    "resources":[[
        "Stop the Violence II","/stop-the-violence-ii/"]],
    "active participation":[[
        "Schools March for Victims","/schools-march-for-victims/"]],
    "Children First Fund":[[
        "Schools March for Victims","/schools-march-for-victims/"]],
    "Crisis Support Fund":[[
        "Schools March for Victims","/schools-march-for-victims/"]],
    "fundraiser":[[
        "Schools March for Victims","/schools-march-for-victims/"]],
    "volunteers":[[
        "Schools March for Victims","/schools-march-for-victims/"]],
    "Artensa Randolph":[[
        "The Life of Artensa Randolph","/the-life-of-artensa-randolph/"],
        ["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph/"]],
    "death":[[
        "The Life of Artensa Randolph","/the-life-of-artensa-randolph/"]],
    "eulogy":[[
        "The Life of Artensa Randolph","/the-life-of-artensa-randolph/"]],
    "Mamie Bone":[[
        "The Life of Artensa Randolph","/the-life-of-artensa-randolph/"]],
    "danger":[[
        "When Will It End?","/when-will-it-end/"]],
    "destruction":[[
        "When Will It End?","/when-will-it-end/"]],
    "book review":[[
        "Inner-City Truths: A Book Review","/inner-city-truths-a-book-review/"]],
    "David Isay":[[
        "Inner-City Truths: A Book Review","/inner-city-truths-a-book-review/"]],
    "LeAlan Jones":[[
        "Inner-City Truths: A Book Review","/inner-city-truths-a-book-review/"]],
    "literature":[[
        "Inner-City Truths: A Book Review","/inner-city-truths-a-book-review/"]],
    "Lloyd Newman":[[
        "Inner-City Truths: A Book Review","/inner-city-truths-a-book-review/"]],
    "Our America":[[
        "Inner-City Truths: A Book Review","/inner-city-truths-a-book-review/"]],
    "reality":[[
        "Inner-City Truths: A Book Review","/inner-city-truths-a-book-review/"]],
    "Eckhart Park Greenview":[[
        "Access Report","/access-report-2/"]],
    "residents":[[
        "Access Report","/access-report-2/"]],
    "Gautreaux Decree":[[
        "A Decree But to What Degree?","/a-decree-but-to-what-degree/"]],
    "Andrew Cuomo":[[
        "Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center/"]],
    "building maintenance":[[
        "Residents Fight Vacate Orders","/residents-fight-vacate-orders/"],
        ["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph/"]],
    "vacancy":[[
        "Residents Fight Vacate Orders","/residents-fight-vacate-orders/"]],
    "COSEC":[[
        "School Reform: Which Tax?","/school-reform-which-tax/"]],
    "Council on Standards in Education and the Community":[[
        "School Reform: Which Tax?","/school-reform-which-tax/"]],
    "propety tax":[[
        "School Reform: Which Tax?","/school-reform-which-tax/"]],
    "Public School Reform":[[
        "School Reform: Which Tax?","/school-reform-which-tax/"]],
    "School Improvement Plan":[[
        "School Reform: Which Tax?","/school-reform-which-tax/"]],
    "Summer 1997 Issue":[[
        "School Reform: Which Tax?","/school-reform-which-tax/"],
        ["Dear Resident","/dear-resident-10/"],
        ["Flannery Homes Update","/flannery-homes-update-2/"],
        ["Cabrini-Green Update","/cabrini-green-update/"],
        ["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph/"],
        ["Wells on the Rise","/wells-on-the-rise/"],
        ["Stop the Violence","/stop-the-violence-17/"],
        ["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments/"],
        ["Horner Annex Reborn","/horner-annex-reborn/"],
        ["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road/"],
        ["Replacement Housing or Replacing People","/replacement-housing-or-replacing-people/"],
        ["Safe Summer 97","/safe-summer-97/"],
        ["The Magnificent Maya Angelou","/the-magnificent-maya-angelou/"],
        ["Focus On Section 8","/focus-on-section-8/"],
        ["Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing/"],
        ["Hope Has a Way","/hope-has-a-way/"]],
    "taxes":[[
        "School Reform: Which Tax?","/school-reform-which-tax/"]],
    "readership":[[
        "Dear Resident","/dear-resident-10/"]],
    "improvements":[[
        "Flannery Homes Update","/flannery-homes-update-2/"]],
    "mural":[[
        "Cabrini-Green Update","/cabrini-green-update/"]],
    "Patrick Sykes":[[
        "Cabrini-Green Update","/cabrini-green-update/"]],
    "St. Joseph's School":[[
        "Cabrini-Green Update","/cabrini-green-update/"]],
    "Wells Day":[[
        "Wells on the Rise","/wells-on-the-rise/"]],
    "Chicago Black United Communities":[[
        "Stop the Violence","/stop-the-violence-17/"]],
    "Committee Against Racism and Violence":[[
        "Stop the Violence","/stop-the-violence-17/"]],
    "victims":[[
        "Stop the Violence","/stop-the-violence-17/"]],
    "Chicago Department on Aging":[[
        "Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments/"]],
    "the Annex":[[
        "Horner Annex Reborn","/horner-annex-reborn/"]],
    "Buy-Back Recycling Program":[[
        "Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road/"]],
    "Clean-Up Day":[[
        "Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road/"]],
    "lottery":[[
        "Replacement Housing or Replacing People","/replacement-housing-or-replacing-people/"]],
    "economic development":[[
        "Safe Summer 97","/safe-summer-97/"]],
    "Reach for Tomorrow":[[
        "Safe Summer 97","/safe-summer-97/"]],
    "summer":[[
        "Safe Summer 97","/safe-summer-97/"]],
    "Maya Angelou":[[
        "The Magnificent Maya Angelou","/the-magnificent-maya-angelou/"]],
    "New Rosemont Theater":[[
        "The Magnificent Maya Angelou","/the-magnificent-maya-angelou/"]],
    "CHAC Inc.":[[
        "Focus On Section 8","/focus-on-section-8/"]],
    "discrimination":[[
        "Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing/"],
        ["Vote '96: Conventional Colors","/vote-96-conventional-colors/"]],
    "hope":[[
        "Hope Has a Way","/hope-has-a-way/"]],
    "Fall 1996 Issue":[[
        "Dear Resident","/dear-resident-8/"],
        ["Last Harvest","/last-harvest/"],
        ["The Man Who Scared the Hell Out of Me","/the-man-who-scared-the-hell-out-of-me/"],
        ["A Teen's Shattered Dreams","/a-teens-shattered-dreams/"],
        ["Seniors form new organization","/seniors-form-new-organization/"],
        ["A Short History of Ida B. Wells","/a-short-history-of-ida-b-wells/"],
        ["Your Neighborhood Policemen","/your-neighborhood-policemen/"],
        ["Washington Park: The Dying Hope","/washington-park-the-dying-hope/"],
        ["A Long Ride Home","/a-long-ride-home/"],
        ["Marion...Marion Stamps","/marion-marion-stamps/"],
        ["A History of Cabrini-Green","/a-history-of-cabrini-green/"],
        ["What's Happening in ABLA?","/whats-happening-in-abla/"],
        ["LeClaire Courts","/leclaire-courts/"],
        ["CHA Home Ownership: Wentworth Gardens","/cha-home-ownership-wentworth-gardens/"],
        ["Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington/"],
        ["Vote '96: Conventional Colors","/vote-96-conventional-colors-2/"],
        ["Vote '96: Conventional Colors","/vote-96-conventional-colors/"]],
    "Building Development Plan":[[
        "Last Harvest","/last-harvest/"]],
    "injury":[[
        "A Teen's Shattered Dreams","/a-teens-shattered-dreams/"]],
    "housing development":[[
        "A Short History of Ida B. Wells","/a-short-history-of-ida-b-wells/"]],
    "origins":[[
        "A Short History of Ida B. Wells","/a-short-history-of-ida-b-wells/"]],
    "interview":[[
        "Your Neighborhood Policemen","/your-neighborhood-policemen/"]],
    "Lake Front Community Organization":[[
        "Washington Park: The Dying Hope","/washington-park-the-dying-hope/"]],
    "Lake Front Properties":[[
        "Washington Park: The Dying Hope","/washington-park-the-dying-hope/"]],
    "Lake Michigan Homes":[[
        "Washington Park: The Dying Hope","/washington-park-the-dying-hope/"]],
    "Sphinx Kiosk":[[
        "Washington Park: The Dying Hope","/washington-park-the-dying-hope/"]],
    "Marion Stamps":[[
        "Marion...Marion Stamps","/marion-marion-stamps/"]],
    "Cabrini Homes":[[
        "A History of Cabrini-Green","/a-history-of-cabrini-green/"]],
    "row houses":[[
        "A History of Cabrini-Green","/a-history-of-cabrini-green/"]],
    "William Green Homes":[[
        "A History of Cabrini-Green","/a-history-of-cabrini-green/"]],
    "consolidation":[[
        "What's Happening in ABLA?","/whats-happening-in-abla/"]],
    "Food Program":[[
        "What's Happening in ABLA?","/whats-happening-in-abla/"]],
    "Dominium":[[
        "Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington/"]],
    "Kevin Marchman":[[
        "Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington/"]],
    "Welfare Bill":[[
        "Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington/"]],
    "Democratic National Convention":[[
        "Vote '96: Conventional Colors","/vote-96-conventional-colors-2/"],
        ["Vote '96: Conventional Colors","/vote-96-conventional-colors/"]],
    "political parties":[[
        "Vote '96: Conventional Colors","/vote-96-conventional-colors-2/"]]
    }