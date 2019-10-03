
// function scrollWtpHeader(){
//	 if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//		 document.getElementById("wtp-header").style.height = "30px";
//		 document.getElementById("wtp-header-h2").style.fontSize = "20px";
//		 document.getElementById("cpl-logo-lg").style.display = "none";
//		 document.getElementById("cpl-logo-text").style.display = "none";
//		 document.getElementById("wtp-header-h3").style.display = "none";
//		 document.getElementById("cpl-logo-sm").style.display = "inherit";
//	 } else {
//		 document.getElementById("wtp-header").style.height = "60px";
//		 document.getElementById("wtp-header-h2").style.fontSize = "32px";
//		 document.getElementById("cpl-logo-lg").style.display = "inherit";
//		 document.getElementById("cpl-logo-text").style.display = "inherit";
//		 document.getElementById("wtp-header-h3").style.display = "inherit";
//		 document.getElementById("cpl-logo-sm").style.display = "none";
//	 }
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
	title	: "LEGO History",
	url	  : "/lego-history.html",
	tags	 : ["chicago public schools", "chicago youth", "community", "community involvement", "youth"],
	},
	
	{
	title	: "A LEGO Store Adventure",
	url	  : "/a-lego-store-adventure.html",
	tags	 : ["chicago public schools", "chicago youth", "community", "community involvement", "youth"],
	},
	
	{
	title	: "What is a Perfect Community?",
	url	  : "/a-perfect-community-2.html",
	tags	 : ["chicago public schools", "chicago youth", "community involvement", "education", "youth"],
	},
	
	{
	title	: "A Perfect Community",
	url	  : "/a-perfect-community.html",
	tags	 : ["Black History", "chicago public schools", "chicago youth", "community", "community involvement", "Malcolm X", "youth"],
	},
	
	{
	title	: "Christmas Toy Drive",
	url	  : "/christmas-toy-drive.html",
	tags	 : ["chicago public schools", "chicago youth", "Christmas", "community", "community involvement", "youth"],
	},
	
	{
	title	: "How to Give Back To Your Community",
	url	  : "/how-to-give-back-to-your-community.html",
	tags	 : ["chicago public schools", "chicago youth", "community", "community involvement", "youth"],
	},
	
	{
	title	: "Learning About the Holocaust",
	url	  : "/learning-about-the-holocaust.html",
	tags	 : ["chicago public schools", "chicago youth", "community involvement", "U.S. Holocaust Museum", "youth"],
	},
	
	{
	title	: "We The People Media in the News",
	url	  : "/we-the-people-media-in-the-news-5.html",
	tags	 : ["Chicago Mayor Rahm Emanuel", "Chicago Police Department", "Chicago public housing", "chicago public schools", "Jesus Chuy Garcia"],
	},
	
	{
	title	: "We The People Media on CAN TV Part II",
	url	  : "/5820.html",
	tags	 : [""],
	},
	
	{
	title	: "We The People Media ED Guest Hosts Chicago Newsroom",
	url	  : "/we-the-people-media-ed-guest-hosts-chicago-newsroom.html",
	tags	 : ["Chicago", "Chicago Mayor Rahm Emanuel", "Chicago Police Department", "Chicago politics", "Chicago public housing", "chicago youth", "Jesus Chuy Garcia"],
	},
	
	{
	title	: "CTA Changes Keep Riders On Their Toes",
	url	  : "/cta-changes-keep-riders-on-their-toes.html",
	tags	 : ["Blue Line", "Chicago Transit Authority", "chicago youth", "City Colleges", "community involvement", "Red Line", "Ventra", "youth"],
	},
	
	{
	title	: "We The People Media In The News",
	url	  : "/we-the-people-media-in-the-news-4.html",
	tags	 : ["CAN TV", "Chicago Mayor Rahm Emanuel", "Hillary Clinton", "Rahm Emanuel"],
	},
	
	{
	title	: "A Truce in the War on Drugs? Part II.",
	url	  : "/a-truce-in-the-war-on-drugs-part-ii.html",
	tags	 : ["Chicago Police Department", "chicago youth", "crime", "Gary Indiana", "U.S. Attorney General Eric Holder", "war on drugs"],
	},
	
	{
	title	: "A Truce in the War on Drugs? Part I.",
	url	  : "/5708.html",
	tags	 : ["community involvement", "crime", "federal courts", "U.S. Sen. Dick Durbin", "war on drugs", "wrongful imprisonment"],
	},
	
	{
	title	: "Am I Prepared for College?",
	url	  : "/am-i-prepared-for-college.html",
	tags	 : ["chicago public schools", "chicago youth", "community", "community involvement", "Paul Robeson High School"],
	},
	
	{
	title	: "Louder Than a Bomb",
	url	  : "/louder-than-a-bomb.html",
	tags	 : ["chicago public schools", "chicago youth", "Endless Words", "Louder than a Bomb", "Paul Robeson High School"],
	},
	
	{
	title	: "Do Athletes Have Special Privileges?",
	url	  : "/do-athletes-have-special-privileges.html",
	tags	 : ["athletes", "chicago public schools", "chicago youth", "community", "community involvement", "school sports"],
	},
	
	{
	title	: "Experiencing the Holocaust at the Field Museum",
	url	  : "/experiencing-the-holocaust-at-the-field-museum.html",
	tags	 : ["chicago public schools", "chicago youth", "community involvement", "U.S. Holocaust Museum"],
	},
	
	{
	title	: "The Holocaust",
	url	  : "/5671.html",
	tags	 : ["chicago public schools", "chicago youth", "community involvement", "Field Musuem", "U.S. Holocaust Museum"],
	},
	
	{
	title	: "One Of The Greatest Men In History",
	url	  : "/one-of-the-greatest-men-in-history.html",
	tags	 : ["chicago public schools", "chicago youth", "community involvement", "Dr. Martin Luther King", "I have a dream"],
	},
	
	{
	title	: "Do What You Need To So You Can Do What You Want To",
	url	  : "/do-what-you-need-to-so-you-can-do-what-you-want-to.html",
	tags	 : ["chicago public schools", "chicago youth", "community involvement", "sports"],
	},
	
	{
	title	: "The Holocaust and Propaganda",
	url	  : "/the-holocaust-and-propaganda.html",
	tags	 : ["chicago youth", "McCormick Foundation", "Propaganda", "U.S. Holocaust Museum", "youth"],
	},
	
	{
	title	: "Interview with an International Columnist",
	url	  : "/5623.html",
	tags	 : ["chicago public schools", "chicago youth", "community", "community involvement", "McCormick Foundation", "youth"],
	},
	
	{
	title	: "ECO Youth Training Session",
	url	  : "/eco-youth.html",
	tags	 : ["chicago public schools", "chicago youth", "community", "community involvement", "environmental issues", "McCormick Environmental Journalism Program", "McCormick Foundation", "youth"],
	},
	
	{
	title	: "Success through Self Determination",
	url	  : "/success-through-self-determination.html",
	tags	 : ["chicago youth", "community involvement", "DCFS", "Englewood", "McCormick Foundation"],
	},
	
	{
	title	: "Racism in America",
	url	  : "/racism-in-america.html",
	tags	 : ["Anne Frank", "chicago youth", "community involvement", "McCormick Foundation", "racism", "U.S. Holocaust Museum", "youth"],
	},
	
	{
	title	: "Chicago Gangs and Violence: Beyond Downtown",
	url	  : "/chicago-gangs-and-violence-beyond-downtown.html",
	tags	 : ["Chicago Police Department", "chicago public schools", "chicago youth", "community involvement", "McCormick Foundation", "Paul Robeson High School", "violence", "youth"],
	},
	
	{
	title	: "Teenage Love: Is It Real?",
	url	  : "/teenage-love-is-it-real.html",
	tags	 : ["chicago public schools", "chicago youth", "McCormick Foundation", "Paul Robeson High School"],
	},
	
	{
	title	: "What Can Drive a Person to Murder?",
	url	  : "/what-can-drive-a-person-to-murder.html",
	tags	 : ["Chicago public housing", "chicago youth", "community", "community involvement", "crime", "education", "stress", "youth"],
	},
	
	{
	title	: "Eco Youth Reporters Visit Starved Rock",
	url	  : "/eco-youth-reporters-visit-starved-rock.html",
	tags	 : ["chicago public schools", "chicago youth", "community involvement", "environmental issues", "McCormick Environmental Journalism Program", "McCormick Foundation", "Starved Rock State Park", "youth"],
	},
	
	{
	title	: "The New Resident Leadership",
	url	  : "/the-new-resident-leadership.html",
	tags	 : ["Altgeld Gardens", "Cabrini-Green", "CHA", "Chicago", "Chicago public housing", "community involvement", "Plan for Transformation", "politics", "public housing", "public housing residents", "Robert Taylor Homes", "Section 8", "senior citizens"],
	},
	
	{
	title	: "CHA Chiefs Come and Go as Plan Stalls",
	url	  : "/cha-chiefs-come-and-go-as-plan-stalls.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "Chicago Mayor Rahm Emanuel", "crime", "demolition", "HUD", "Mayor Richard M. Daley", "Plan for Transformation", "politics", "public housing", "public housing residents"],
	},
	
	{
	title	: "Remembering ABLA Homes' Deverra Beverly",
	url	  : "/remembering-abla-homes-deverra-beverly.html",
	tags	 : ["ABLA", "CHA", "Chicago Housing Authority", "Chicago public housing", "national public housing museum", "politics", "public housing", "public housing residents"],
	},
	
	{
	title	: "My First Kayaking Trip",
	url	  : "/my-first-kayaking-trip.html",
	tags	 : ["Chicago River", "chicago youth", "community involvement", "environmental issues", "McCormick Environmental Journalism Program", "McCormick Foundation", "youth"],
	},
	
	{
	title	: "A River Adventure",
	url	  : "/a-river-adventure.html",
	tags	 : ["Chicago River", "chicago youth", "community involvement", "environmental issues", "McCormick Environmental Journalism Program", "youth"],
	},
	
	{
	title	: "Another CHA Chief Bows Out",
	url	  : "/another-cha-chief-bows-out.html",
	tags	 : ["Cabrini-Green", "CHA", "Chicago", "Chicago Housing Authority", "Chicago Mayor Rahm Emanuel", "demolition", "eviction", "HUD", "Plan for Transformation", "politics", "public housing"],
	},
	
	{
	title	: "We The People Media in the News",
	url	  : "/we-the-people-media-in-the-news-3.html",
	tags	 : ["Chicago Mayor Rahm Emanuel", "Chicago Police Department", "chicago public schools", "Democratic party", "gang violence", "Metra", "politics", "Republican Party"],
	},
	
	{
	title	: "The Invasion of the Great Lakes",
	url	  : "/the-invasion-of-the-great-lakes.html",
	tags	 : ["Asian Carp", "community", "Great Lakes", "Knight Center for Environmental Journalism", "McCormick Environmental Journalism Program", "the enviornment", "youth"],
	},
	
	{
	title	: "Asian Carp is a Man-Made Issue",
	url	  : "/asian-carp-is-a-man-made-issue.html",
	tags	 : ["Asian Carp", "chicago youth", "community", "community involvement", "environmental issues", "Great Lakes", "McCormick Environmental Journalism Program", "McCormick Foundation"],
	},
	
	{
	title	: "Chasing the “Blue Whale of Freshwater”",
	url	  : "/chasing-the-blue-whale-of-freshwater.html",
	tags	 : ["Asian Carp", "chicago youth", "community", "community involvement", "environmental issues", "Great Lakes", "McCormick Foundation", "Notre Dame"],
	},
	
	{
	title	: "Oakwood Shores Update",
	url	  : "/oakwood-shores-update.html",
	tags	 : ["CHA", "Chicago Housing Authority", "Chicago public housing", "community involvement", "Ida B. Wells", "Plan for Transformation", "politics", "public housing residents", "redevelopment", "relocation"],
	},
	
	{
	title	: "We The People Media in the News",
	url	  : "/we-the-people-media-in-the-news-2.html",
	tags	 : ["Cabrini-Green", "CHA", "Chicago Housing Authority", "Chicago Police Department", "Chicago public housing", "chicago public schools", "community involvement", "crime", "Plan for Transformation", "politics", "public housing residents", "redevelopment", "relocation", "Section 8"],
	},
	
	{
	title	: "A Protest Success Story",
	url	  : "/a-protest-success-story.html",
	tags	 : ["Altgeld Gardens", "CHA", "Chicago Housing Authority", "Chicago public housing", "food deserts"],
	},
	
	{
	title	: "What's So Great about Football?",
	url	  : "/whats-so-great-about-football.html",
	tags	 : ["Englewood", "Englewood community", "football", "NFL", "Paul Robeson High School"],
	},
	
	{
	title	: "It's Time to Focus on Bullying",
	url	  : "/its-time-to-focus-on-bullying.html",
	tags	 : ["Bullying", "Englewood community", "Paul Robeson High School"],
	},
	
	{
	title	: "Meet the Real Robeson High School",
	url	  : "/meet-the-real-robeson-high-school.html",
	tags	 : ["chicago public schools", "chicago youth", "Chicago youth violence", "crime", "Englewood community", "gang violence", "Paul Robeson High School", "youth"],
	},
	
	{
	title	: "Frack Attack in Illinois",
	url	  : "/frack-attack-in-illinois.html",
	tags	 : ["chicago youth", "environmental issues", "fracking", "Governor Pat Quinn", "McCormick Foundation", "Michigan State University"],
	},
	
	{
	title	: "The Altgeld Gardens Farmers Market: A Personal Perspective",
	url	  : "/the-altgeld-gardens-farmers-market-a-personal-perspective.html",
	tags	 : ["Altgeld Gardens", "Chicago Housing Authority", "environmental issues", "farmers market", "organic food", "public housing residents"],
	},
	
	{
	title	: "Supreme Court Justice Sonia Sotomayor visits Chicago",
	url	  : "/supreme-court-justice-sonia-sotomayor-visits-chicago.html",
	tags	 : ["public housing", "public housing residents", "Sonia Sotomayor", "U.S. Supreme Court", "youth"],
	},
	
	{
	title	: "Honoring Dr. King's Legacy",
	url	  : "/honoring-dr-kings-legacy.html",
	tags	 : ["Chicago Freedom School", "Dr. Martin Luther King Jr.", "public housing", "youth"],
	},
	
	{
	title	: "Chicago’s Nuclear History",
	url	  : "/chicagos-nuclear-history.html",
	tags	 : ["Henry Moore", "nuclear power", "University of Chicago", "youth"],
	},
	
	{
	title	: "We The People Media ED on Chicago Newsroom",
	url	  : "/we-the-people-media-ed-on-chicago-newsroom.html",
	tags	 : ["Chicago Police Department", "Chicago politics", "crime", "gun-control", "politics", "public housing"],
	},
	
	{
	title	: "Tenants Protest CHA’s Plans for Lathrop",
	url	  : "/tenants-protest-chas-plans-for-lathrop.html",
	tags	 : ["CHA", "Chicago", "Chicago public housing", "Plan for Transformation", "politics", "public housing", "public housing residents", "redevelopment", "relocation"],
	},
	
	{
	title	: "Pilsen Gets Environmental Justice",
	url	  : "/pilsen-gets-environmental-justice.html",
	tags	 : ["environment", "environmental issues", "McCormick Environmental Journalism Program", "McCormick Foundation"],
	},
	
	{
	title	: "Preserving History and Ecology",
	url	  : "/preserving-history-and-ecology.html",
	tags	 : ["McCormick Environmental Journalism Program", "McCormick Foundation", "the enviornment", "youth"],
	},
	
	{
	title	: "Sit In Against School Closings",
	url	  : "/sit-in-against-school-closings.html",
	tags	 : ["chicago public schools", "youth"],
	},
	
	{
	title	: "Why It's So Hard to End Poverty",
	url	  : "/why-its-so-hard-to-end-poverty.html",
	tags	 : ["national public housing museum", "politics", "poverty", "President Barak Obama", "President Clinton", "welfare reform", "youth"],
	},
	
	{
	title	: "We The People Media in the News",
	url	  : "/we-the-people-media-in-the-news.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "Chicago Newsroom", "Chicago Police Department", "Chicago politics", "Chicago public housing", "Plan for Transformation", "politics", "redevelopment", "Section 8", "WBEZ"],
	},
	
	{
	title	: "Does TV Affect Children's Behavior?",
	url	  : "/does-tv-affect-childrens-behavior.html",
	tags	 : ["chicago public schools", "education", "television", "youth", "youth violence"],
	},
	
	{
	title	: "Beyonce is My Role Model",
	url	  : "/beyonce-is-my-role-model.html",
	tags	 : ["Beyonce", "chicago public schools", "chicago youth", "Jay-Z", "youth"],
	},
	
	{
	title	: "Hip Hop Star on the Rise",
	url	  : "/hip-hop-star-on-the-rise.html",
	tags	 : ["chicago public schools", "chicago youth", "Englewood", "Hip Hop", "music", "youth"],
	},
	
	{
	title	: "The Many Talents of Tony Erwin",
	url	  : "/the-many-talents-of-tony-erwin.html",
	tags	 : ["chicago public schools", "chicago youth", "community involvement", "Englewood", "violence"],
	},
	
	{
	title	: "Chicagoans Will Fish, Contamination or Not",
	url	  : "/chicagoans-will-fish-contamination-or-not.html",
	tags	 : ["chicago youth", "environmental issues", "McCormick Environmental Journalism Program", "McCormick Foundation", "Pilsen", "the enviornment"],
	},
	
	{
	title	: "Inside the Teachers Strike",
	url	  : "/inside-the-teachers-strike.html",
	tags	 : ["Chicago Mayor Rahm Emanuel", "chicago public schools", "chicago youth", "politics", "Rahm Emanuel"],
	},
	
	{
	title	: "CAC Releases Vision for the Future",
	url	  : "/cac-releases-vision-for-the-future.html",
	tags	 : ["Cabrini-Green", "CHA", "Chicago Housing Authority", "Chicago public housing", "chicago public schools", "crime", "demolition", "education", "employment", "eviction", "HUD", "Ida B. Wells", "Plan for Transformation", "politics", "public housing", "public housing residents", "redevelopment", "relocation", "Robert Taylor Homes", "Section 8", "senior citizens", "youth"],
	},
	
	{
	title	: "Winners from the Resident Survey!",
	url	  : "/winners-from-the-resident-survey.html",
	tags	 : ["Cabrini-Green", "CHA", "Chicago Housing Authority", "chicago youth", "community involvement", "crime", "demolition", "education", "employment", "eviction"],
	},
	
	{
	title	: "Stopping Elder Abuse",
	url	  : "/stopping-elder-abuse.html",
	tags	 : ["jane adams senior caucus", "senior citizens"],
	},
	
	{
	title	: "Black Pioneers Honored",
	url	  : "/black-pioneers-honored.html",
	tags	 : ["Chicago public housing", "Ida B Wells Homes", "Ida B. Wells"],
	},
	
	{
	title	: "CHA Opens Wait List in Lincoln Square",
	url	  : "/cha-opens-wait-list-in-lincoln-square.html",
	tags	 : ["affordable housing", "CHA", "Chicago Housing Authority", "Chicago public housing", "Plan for Transformation", "public housing", "relocation", "waiting list"],
	},
	
	{
	title	: "Update on the Resident Survey",
	url	  : "/update-on-the-resident-survey.html",
	tags	 : [""],
	},
	
	{
	title	: "Closing the CTA Red Line",
	url	  : "/closing-the-cta-red-line.html",
	tags	 : ["CTA", "CTA President Forrest Claypool", "Englewood", "Red Line", "redevelopment", "Terry Peterson"],
	},
	
	{
	title	: "Stray Dogs in Englewood",
	url	  : "/stray-dogs-in-englewood.html",
	tags	 : ["chicago youth", "crime", "dangerous dogs", "violence", "youth"],
	},
	
	{
	title	: "Exploring After-School Programs",
	url	  : "/exploring-after-school-programs.html",
	tags	 : ["chicago public schools", "chicago youth", "community", "community involvement", "education"],
	},
	
	{
	title	: "CHA Opens Public Housing Wait List for South Side Neighborhoods",
	url	  : "/cha-opens-public-housing-wait-list-for-specific-areas.html",
	tags	 : ["affordable housing", "CHA", "Chicago", "Chicago Housing Authority", "Douglas", "Fuller Park", "Kenwood", "New City", "Oakland", "waiting list"],
	},
	
	{
	title	: "Resident Survey Ends June 1!!! Click This Link Today!",
	url	  : "/resident-survey-ends-june-1.html",
	tags	 : ["Altgeld Gardens", "Cabrini-Green", "CHA", "Chicago", "Chicago Housing Authority", "Dearborn Homes", "demolition", "eviction", "Harold Ickes Homes", "Hilliard Homes", "Plan for Transformation", "public housing", "public housing residents", "redevelopment", "relocation", "Robert Taylor Homes", "Section 8", "senior citizens", "Stateway Gardens", "Washington Park"],
	},
	
	{
	title	: "Rally against NATO, War and Poverty",
	url	  : "/rally-against-nato-war-and-poverty.html",
	tags	 : ["Chicago Mayor Rahm Emanuel", "Chicago Police Department", "Grassroots Collaborative", "NATO", "politics", "protests"],
	},
	
	{
	title	: "Enter Survey, Win a Laptop Computer!",
	url	  : "/enter-survey-win-a-laptop-computer.html",
	tags	 : ["Cabrini-Green", "CHA", "Chicago Housing Authority", "Chicago public housing", "Harold Ickes Homes", "housing", "Plan for Transformation", "public housing", "Robert Taylor Homes", "Section 8", "senior citizens", "youth"],
	},
	
	{
	title	: "Learning about the world on a youth retreat",
	url	  : "/learning-about-the-world-on-a-youth-retreat.html",
	tags	 : ["chicago youth", "community involvement", "Illinois Teen Institute", "youth"],
	},
	
	{
	title	: "Making a college visit count",
	url	  : "/making-a-college-visit-count.html",
	tags	 : ["education", "McCormick Environmental Journalism Program", "McCormick Foundation", "Michigan State University", "Urban Youth International Journalism Program", "Youth Journalism"],
	},
	
	{
	title	: "A Message from the Resident President",
	url	  : "/a-message-from-the-resident-president.html",
	tags	 : ["CHA", "Chicago Housing Authority", "Chicago public housing", "HUD", "Plan for Transformation", "public housing", "public housing residents"],
	},
	
	{
	title	: "New Calendar For Public Housing Tenants",
	url	  : "/new-calendar-for-public-housing-tenants.html",
	tags	 : ["Altgeld Gardens", "Cabrini-Green", "CHA", "Chicago Housing Authority", "Chicago public housing", "demolition", "eviction", "HUD", "leadership", "Plan for Transformation", "relocation", "Section 8", "senior citizens"],
	},
	
	{
	title	: "CHA's New Plan?",
	url	  : "/chas-new-plan.html",
	tags	 : ["CHA", "Chicago Housing Authority", "Chicago public housing", "Ethan Michaeli", "Plan for Transformation", "Rahm Emanuel", "Robert Taylor Homes", "Section 8", "WBEZ"],
	},
	
	{
	title	: "Healthy Ways to Fight Lead Poisoning",
	url	  : "/healthy-ways-to-fight-lead-poisoning.html",
	tags	 : ["chicago public schools", "chicago youth", "Englewood", "Englewood community", "Imagine Englewood If", "Lead poisoning", "youth"],
	},
	
	{
	title	: "Altgeld Tenants: Police, Cameras Not Improving Security",
	url	  : "/altgeld-tenants-police-cameras-not-improving-security.html",
	tags	 : ["Altgeld Gardens", "CHA", "Chicago Housing Authority", "Chicago Police Department", "Chicago public housing", "housing", "politics"],
	},
	
	{
	title	: "John H. Johnson Honored with Black Heritage Forever Stamp",
	url	  : "/john-h-johnson-honored-with-black-heritage-forever-stamp.html",
	tags	 : ["Black Heritage", "Black History", "Ebony Magazine", "Emmett Louis Till", "Jesse Jackson Jr", "Jet Magazine", "John H. Johnson", "Johnson Publishing Company", "politics", "U.S. Postal Service", "U.S. Rep.", "U.S. Rep. Bobby L. Rush", "U.S. Rep. Danny K. Davis"],
	},
	
	{
	title	: "Blackhawks Host CHA Kids",
	url	  : "/blackhawks-host-cha-kids.html",
	tags	 : ["CHA", "Chicago Blackhawks", "Chicago Housing Authority", "Chicago public housing", "hockey"],
	},
	
	{
	title	: "Remembering the Servitude of Dr. King",
	url	  : "/remembering-the-servitude-of-dr-king.html",
	tags	 : ["Dr. Martin Luther King Jr.", "Imagine Englewood If", "Sixth Grace Presbyterian Church", "WVON"],
	},
	
	{
	title	: "Fair Trade Clothing",
	url	  : "/fair-trade-clothing.html",
	tags	 : ["Fair trade clothing", "Luke O'Toole Elementary School", "Mata Traders"],
	},
	
	{
	title	: "Group Carols to Save Mental Health Clinics",
	url	  : "/group-carols-to-save-mental-health-clinics.html",
	tags	 : ["Chicago City Council", "Chicago Department of Public Health", "Chicago Mental Health Movement", "Mayor Rahm Emanuel", "news", "politics"],
	},
	
	{
	title	: "A Weekend of Firsts",
	url	  : "/a-weekend-of-firsts.html",
	tags	 : ["4-H Children’s Garden", "environmental journalism", "McCormick Environmental Journalism Program", "Michigan State University", "Union Station", "WKAR"],
	},
	
	{
	title	: "Being emo",
	url	  : "/being-emo.html",
	tags	 : ["Emo", "Imagine Englewood If", "Paul Robeson High School", "Three Days Grace"],
	},
	
	{
	title	: "Occupiers, Officials Try to Help Homeowners",
	url	  : "/occupiers-officials-try-to-help-homeowners.html",
	tags	 : ["Bronzeville", "Cabrini-Green", "home foreclosure", "Illinois Attorney General's Office", "Illinois Institute of Technology", "Occupy Chicago", "Occupy Wall Street"],
	},
	
	{
	title	: "New Report: Homeless Being Criminalized",
	url	  : "/new-report-homeless-being-criminalizing.html",
	tags	 : ["crime", "homelessness", "National Law Center on Homelessness and Poverty"],
	},
	
	{
	title	: "Parents Protest CPS Turn-Arounds",
	url	  : "/parents-protest-cps-turn-arounds.html",
	tags	 : ["Altgeld Gardens", "CHA Altgeld Gardens", "Chicago Mayor Rahm Emanuel", "Chicago public housing", "chicago public schools", "Jean-Claude Brizard", "Kenwood Oakland Community Organization"],
	},
	
	{
	title	: "Local Pastor Camps out on Motel Roof to Highlight Area Violence",
	url	  : "/local-pastor-camps-out-on-motel-roof-to-highlight-area-violence.html",
	tags	 : ["Chicago violence", "crime", "Englewood", "New Beginnings Church", "Super Motel", "Woodlawn"],
	},
	
	{
	title	: "Tenants' Lawyer: CHA Drug Testing Policy Will End Up in Court",
	url	  : "/tenants-lawyer-cha-drug-testing-policy-will-end-up-in-court.html",
	tags	 : ["Central Advisory Council", "CHA Lakefront Properties", "CHA mixed income communites", "Chicago Housing Authority", "Chicago public housing", "drug testing residents", "Oakwood Shore"],
	},
	
	{
	title	: "New Mandates for Chicago Public Schools",
	url	  : "/new-mandates-for-chicago-public-schools.html",
	tags	 : ["Ald. Pat Dowell", "chicago public schools", "Chicago Teachers' Union", "Grand Boulevard Federation", "U.S. Sen. Mattie Hunter"],
	},
	
	{
	title	: "CHA Reopens Landmark Senior Building",
	url	  : "/cha-reopens-landmark-senior-building.html",
	tags	 : ["Ald. Harry Osterman", "CHA Plan for Transformation", "CHA Pomeroy Senior Apartments", "Chicago Housing Authority", "Chicago public housing", "Illinois Office of Public Housing Director Steven Meiss"],
	},
	
	{
	title	: "$1 Billion for CTA",
	url	  : "/1-billion-for-cta.html",
	tags	 : ["Chicago Transit Authority", "CTA", "CTA President Forrest Claypool", "Forrest Claypool", "Gov. Pat Quinn", "Illinois Department of Transportation", "Mayor Rahm Emanuel", "Rahm Emanuel"],
	},
	
	{
	title	: "Some Lathrop Kids Get a Bus, But Not All",
	url	  : "/some-lathrop-kids-get-a-bus-but-not-all.html",
	tags	 : ["CHA", "Chicago Housing Authority", "Chicago public housing", "Chicago public school students", "chicago public schools", "Fredrick Jahn Elementary School", "Lathrop Homes", "Prescott Elementary School"],
	},
	
	{
	title	: "Is CHA Holding Vacant Apartments?",
	url	  : "/is-cha-holding-vacant-apartments.html",
	tags	 : ["Cabrini Rowhouses", "CHA", "Chicago Housing Authority", "Chicago Housing Initiative", "Chicago public housing", "Kenwood Oakland Community Organization", "KOCO", "Lake Parc Place", "Lathrop Homes", "North Lawndale"],
	},
	
	{
	title	: "New Grocery Stores to Open in Food Deserts",
	url	  : "/new-grocery-stores-to-open-in-food-deserts.html",
	tags	 : ["Aldi's", "Austin", "Calument", "food deserts", "Grand Boulevard", "Mayor Rahm Emanuel", "Michelle Obama", "Near West Side", "Norgan Park", "North Lawndale", "Roseland", "Roundy's Supermarket", "Sav-a-lot", "Wal-Mart", "Walgreens", "West Publlman"],
	},
	
	{
	title	: "Ex-Offenders Strive For Better",
	url	  : "/ex-offenders-strive-for-better.html",
	tags	 : ["Altgeld Gardens", "CHA", "Chicago Housing Authority", "Chicago public housing", "exoffenders"],
	},
	
	{
	title	: "Special Investigation: CHA Still Wants Kids’ Report Cards",
	url	  : "/special-investigation-cha-still-wants-kids%e2%80%99-report-cards.html",
	tags	 : ["CHA", "Chicago Housing Authority", "Chicago public housing"],
	},
	
	{
	title	: "Ida B. Wells Revisited",
	url	  : "/ida-b-wells-revisited-2.html",
	tags	 : ["CHA", "Chciago Housing Authority", "Chicago public housing", "Ida B. Wells", "Oakwood Shores"],
	},
	
	{
	title	: "THE BIG BAD BOLD BUD BILLIKEN PARADE",
	url	  : "/the-big-bad-bold-bud-billiken-parade.html",
	tags	 : ["Bud Biliken Parade", "Chicago Bud Biliken Parade", "South Shore Drill Team"],
	},
	
	{
	title	: "Elementary School Students Suffer from CHA Relocations",
	url	  : "/elementary-school-students-suffer-from-cha-relocations.html",
	tags	 : ["Chicago Housing Authority", "Chicago public houisng", "Latrhop Homes", "the CHA"],
	},
	
	{
	title	: "Protestors Rally to Keep Medicaid Services",
	url	  : "/protestors-rally-to-keep-medicaid-services.html",
	tags	 : ["Access Living", "Congressional Super Committee", "Medicaid", "medicare", "people with disabilities", "U.S. Senator Dick Durbin", "U.S. Senator Mark Kirk", "US Congress"],
	},
	
	{
	title	: "Charlotte Housing Authority Chief takes CHA Position",
	url	  : "/charlotte-housing-authority-chief-takes-cha-position.html",
	tags	 : ["CHA", "Charles Woodyard", "Chicago Housing Authority", "Chicago Mayor Rahm Emanuel", "Chicago public housing", "HUD", "Plan for Transformation", "public housing", "redevelopment", "relocation"],
	},
	
	{
	title	: "Forgotten History: Lecture on Black Aviators",
	url	  : "/forgotten-history-lecture-on-black-aviators.html",
	tags	 : ["aviation", "Bessie Coleman", "DuSable Museum of African American History", "Robbins", "Tuskegee Airmen"],
	},
	
	{
	title	: "Altgeld’s New Library",
	url	  : "/altgeld%e2%80%99s-new-library.html",
	tags	 : ["Altgeld Gardens", "CHA Altgeld Gardens", "Chicago Public Libraries", "chicago public schools", "chicago youth", "Phillis Wheatly Center", "public housing", "public housing residents"],
	},
	
	{
	title	: "Corporate Partnership Builds a Public School Playground",
	url	  : "/corporate-partnership-builds-a-public-school-playground.html",
	tags	 : ["AUSA", "chicago public schools", "chicago youth", "Coca Cola", "community involvement", "education", "Howe Elementary School of Excellence", "playgrounds", "West Side", "youth"],
	},
	
	{
	title	: "Follow We The People Media/Residents' Journal on Twitter",
	url	  : "/we-the-people-mediaresidents-journal-now-on-twitter.html",
	tags	 : [""],
	},
	
	{
	title	: "Cabrini Row House Tenants Prepare to Fight CHA",
	url	  : "/cabrini-row-house-tenants-prepare-to-fight-cha.html",
	tags	 : ["Cabrini-Green", "CHA", "Chicago", "Chicago Housing Authority", "Chicago public housing", "crime", "demolition", "HUD", "Plan for Transformation", "public housing", "public housing residents", "redevelopment", "relocation", "Section 8"],
	},
	
	{
	title	: "Mayor Emanuel Booed at Budget Town Hall",
	url	  : "/mayor-emanuel-booed-at-budget-townhall-meeting.html",
	tags	 : ["Chicago Budget", "chicago public schools", "crime", "Englewood", "Englewood community", "foreclosure", "Mayor Rahm Emanuel", "Rahm Emanuel", "townhall meeting", "violence"],
	},
	
	{
	title	: "Residents' Journal's Newly Accessible Online Archives",
	url	  : "/residents-journals-newly-assessible-online-archives.html",
	tags	 : ["Cabrini-Green", "CHA", "CHA Youth", "Chicago", "Chicago public housing", "community involvement", "HUD", "public housing", "Residents Journal", "Robert Taylor Homes", "Section 8"],
	},
	
	{
	title	: "Residents' Journal Coverage of the Recent Demolition of the Last CHA Ida B. Wells Homes Buildings",
	url	  : "/residents-journal-coverage-of-the-recent-demolition-of-the-last-cha-ida-b-wells-homes-buildings.html",
	tags	 : ["CHA", "Chicago Housing Authority", "Chicago public houisng", "Ida B. Wells", "youth"],
	},
	
	{
	title	: "Residents' Journal Editor and Publisher Discussing Youth Online Articles",
	url	  : "/residents-journal-editor-and-publisher-discussing-youth-online-articles.html",
	tags	 : [""],
	},
	
	{
	title	: "Residents' Journal Publisher and Editor Discussing Recent CHA Issues",
	url	  : "/residents-journal-publisher-and-editor-discussing-recent-cha-issues.html",
	tags	 : ["Chicago Housing Authority", "public houisng"],
	},
	
	{
	title	: "Residents' Journal Reporters talking about Current Youth Articles",
	url	  : "/residents-journal-staff-member-talking-to-an-urban-youth-international-journalism-program-student-about-her-news-reports-this-summer.html",
	tags	 : ["CHA", "Chicago Housing Authority", "chicago youth", "community involvement", "McCormick Environmental Journalism Program", "McCormick Foundation", "Shedd Aquarium", "youth"],
	},
	
	{
	title	: "Discussing the Oakwood Shores Mixed-Income Community",
	url	  : "/residents-journal-reporter-talking-about-opportunities-for-public-housing-tenants-at-the-cha-oakwood-shores-mixed-income-community.html",
	tags	 : ["Chicago Housing Authority", "mixed income", "Oakwood Shores", "public housing"],
	},
	
	{
	title	: "Altgeld Gardens Tries to Stay Cool",
	url	  : "/altgeld-gardens-tries-to-stay-cool.html",
	tags	 : ["CHA", "Chicago Housing Authority", "Chicago Park District", "Chicago Public Library", "Cooling Centers", "Heat Wave", "youth"],
	},
	
	{
	title	: "How to Deal with the Next Heat Wave",
	url	  : "/how-to-deal-with-the-next-heat-wave.html",
	tags	 : ["Altgeld Gardens", "CHA", "Chicago Housing Authority", "Heat Wave", "youth"],
	},
	
	{
	title	: "CHA Launches Initiative to House Women Ex-Offenders",
	url	  : "/cha-launches-initiative-to-house-women-ex-offenders.html",
	tags	 : ["CHA", "Chicago Housing Authority", "Chicago public housing", "crime", "ex-offenders", "James Reynolds", "Near West Side", "Tax Increment Financing", "violence"],
	},
	
	{
	title	: "After The Dust",
	url	  : "/after-the-dust.html",
	tags	 : ["CHA", "Chicago Housing Authority", "chicago youth", "community involvement", "demolition", "HUD", "public housing", "public housing residents", "Robert Taylor Homes", "Section 8", "youth"],
	},
	
	{
	title	: "Commissioner Fails to Show at Mental Health Town Hall Meeting",
	url	  : "/commissioner-fails-to-show-at-mental-health-town-hall.html",
	tags	 : ["Chicago Mayor Rahm Emanuel", "Mental Health", "privatization", "Rahm Emanuel", "State Rep. Mary Flowers", "STOP", "violence", "youth violence"],
	},
	
	{
	title	: "Mayor Continues Search for New CHA Head",
	url	  : "/mayor-continues-search-for-new-cha-head.html",
	tags	 : ["Cabrini Green Rowhouses", "Cabrini-Green", "Chicago Housing Authority", "Chicago pubic housing", "Rahm Emanuel"],
	},
	
	{
	title	: "Youth Activists: Juvenile Inmates Treated Like Animals.",
	url	  : "/youth-activists-juvenile-inmates-treated-like-animals.html",
	tags	 : ["Audy Home", "chicago crime", "crime", "Juvenile Court", "Juvenile Justice", "youth violence"],
	},
	
	{
	title	: "A Toxic Tour of Little Village",
	url	  : "/little-village-story.html",
	tags	 : ["Crawford Coal Plant", "environmental issues", "Little Village", "Little Village Environmental Justice Organization", "McCormick Environmental Journalism Program", "McCormick Foundation", "Toxic Tour", "youth"],
	},
	
	{
	title	: "A New Start for the Indiana Dunes",
	url	  : "/a-new-start-for-the-indiana-dunes.html",
	tags	 : ["chicago youth", "community involvement", "environmental issues", "Indiana Dunes", "McCormick Environmental Journalism Program", "McCormick Foundation", "youth", "youth media"],
	},
	
	{
	title	: "Shedd Aquarium Showcases Invasive Species",
	url	  : "/shedd-aquarium-showcases-invasive-species.html",
	tags	 : ["Asian Carp", "environmental issues", "Great Lakes", "Invasive Species", "Kari Lydersen", "Knight Center for Environmental Journalism", "McCormick Environmental Journalism Program", "McCormick Foundation", "Michigan State University", "Shedd Aquarium"],
	},
	
	{
	title	: "The Fish of Lake Michigan",
	url	  : "/the-fish-of-lake-michigan.html",
	tags	 : ["chicago youth", "environmental issues", "McCormick Environmental Journalism Program", "McCormick Foundation", "Shedd Aquarium", "youth", "Youth Journalism"],
	},
	
	{
	title	: "Little Village Toxic Tour",
	url	  : "/little-village-toxic-tour.html",
	tags	 : ["Crawford Coal Plant", "environment", "environmental issues", "journalism", "Kari Lydersen", "Knight Center for Environmental Journalism", "Little Village", "McCormick Environmental Journalism Program", "McCormick Foundation", "We The People Media"],
	},
	
	{
	title	: "Residents' Journal Publisher on WBEZ",
	url	  : "/residents-journal-publisher-on-wbez.html",
	tags	 : ["Chicago Housing Authority", "Chicago Public Radio", "Mayor Rahm Emanuel", "WBEZ"],
	},
	
	{
	title	: "Former Youth Reporter, Now an Author!",
	url	  : "/former-youth-reporter-now-an-author.html",
	tags	 : ["Chantell Suggs", "chicago youth", "community involvement", "youth"],
	},
	
	{
	title	: "Historical Gallery: Barack Obama",
	url	  : "/historical-gallery-barack-obama.html",
	tags	 : ["Barack Obama", "Chicago", "Illinois", "politics", "Senate", "Youth Coverage of Barack Obama"],
	},
	
	{
	title	: "The Health Effects of Pollution in Pilsen",
	url	  : "/the-health-effects-of-pollution-in-pilsen.html",
	tags	 : ["Eco Youth Reporters", "environmental issues", "journalism", "Kari Lydersen", "Knight Center for Environmental Journalism", "McCormick Environmental Journalism Program", "McCormick Foundation", "Michigan State University", "We The People Media", "Youth Journalism"],
	},
	
	{
	title	: "Lead and Coal Plants in Pilsen",
	url	  : "/lead-and-coal-plants-in-pilsen.html",
	tags	 : ["chicago youth", "Coal-Fired Plants", "Eco Youth Reporters", "Knight Center for Environmental Journalism", "McCormick Environmental Journalism Program", "McCormick Foundation", "Michigan State University", "Pilsen"],
	},
	
	{
	title	: "Remembering Ms. Amey",
	url	  : "/remembering-ms-amey.html",
	tags	 : ["CHA", "CHA Wentworth Gardens", "Chicago Housing Authority", "Hallie Amey", "public housing", "Wentworth Gardens"],
	},
	
	{
	title	: "Residents' Journal's Coverage of CHA Featured in Rise Magazine",
	url	  : "/residents-journals-coverage-of-cha-featured-in-rise-magazine.html",
	tags	 : ["CHA", "Chicago Housing Authority", "drug testing", "Foster Parents", "Lewis Jordan", "public housing", "public housing residents", "Rise Magazine"],
	},
	
	{
	title	: "Environmental Journalism Program Image Gallery",
	url	  : "/environmental-journalism-program-image-gallery.html",
	tags	 : ["Chicago", "chicago youth", "community involvement", "Eco Youth Reporters", "environmental issues", "journalism", "Kari Lydersen", "Knight Center for Environmental Journalism", "McCormick Environmental Journalism Program", "McCormick Foundation", "Michigan State University", "We The People Media"],
	},
	
	{
	title	: "USDA Contest to Celebrate Success in the Summer Food Service Program",
	url	  : "/usda-contest-to-celebrate-success-in-the-summer-food-service-program.html",
	tags	 : ["nutrition assistance programs", "photo contest", "Summer Food Service Program", "USDA", "youth"],
	},
	
	{
	title	: "Residents' Journal Editor-in-chief talking about Summer Youth Employment",
	url	  : "/residents-journal-editor-in-chief-talking-about-summer-youth-employment.html",
	tags	 : ["crime", "Gov. Pat Quinn", "Kenwood Oakland Community Organization", "politics", "summer jobs", "youth"],
	},
	
	{
	title	: "Residents' Journal Publisher talking about an Environmental Project for Youth",
	url	  : "/residents-journal-publisher-talking-about-an-environmental-project-for-youth.html",
	tags	 : ["Chicago", "chicago youth", "education", "environment", "journalism", "McCormick Foundation", "Urban Youth International Journalism Youth Program", "youth"],
	},
	
	{
	title	: "Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell",
	url	  : "/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell.html",
	tags	 : ["chicago youth", "Clean Air", "Coal", "environmental issues", "Fisk Coal Plant", "Greenpeace", "Kelly Mitchell", "McCormick Environmental Journalism Program", "Pilsen", "Protesting", "youth"],
	},
	
	{
	title	: "Honoring Sam Cooke",
	url	  : "/honoring-sam-cooke.html",
	tags	 : ["Alderman Pat Dowell", "Alderman Will Burns", "Bronzeville","Cook County Commissioner Jerry Ice Man Butler", "Doolittle Elementary", "Gospel","Herb Kent The Cool Gent", "Sam Cooke", "Soul Music", "Toni Preckwinkle"],
	},
	
	{
	title	: "RJ Publisher on Chicago Newsroom",
	url	  : "/rj-publisher-on-chicago-newsroom.html",
	tags	 : ["CHA", "Chicago Housing Authority", "Chicago Mayor Rahm Emanuel", "Chicago Police Department", "Chicago public housing", "chicago public schools", "crime", "housing", "politics", "public housing", "redevelopment", "relocation", "Taste of Chicago", "violence", "youth", "youth violence"],
	},
	
	{
	title	: "CHA Board Appoints One of Their Own Interim CEO",
	url	  : "/cha-board-appoints-one-of-their-own-interim-ceo.html",
	tags	 : ["Carlos Ponce", "CHA", "CHA credit cards", "Chicago Housing Authority", "Chicago public housing", "chicago public schools", "drug testing", "James Reynolds", "Lewis Jordan", "politics", "public housing", "resident drug testing"],
	},
	
	{
	title	: "My trip to Paris",
	url	  : "/my-trip-to-paris.html",
	tags	 : ["Altgeld Gardens", "CHA", "CHA Altgeld Gardens", "Chicago Housing Authority", "chicago youth", "France", "Paris", "People for Community Recovery", "youth", "youth media"],
	},
	
	{
	title	: "A Dream Come True",
	url	  : "/a-dream-come-true.html",
	tags	 : ["Altgeld Gardens", "CHA", "Chicago Housing Authority", "France", "Paris", "People for Community Recovery", "Urban Youth International Journalism Program", "youth", "Youth Journalism", "Youth Writers"],
	},
	
	{
	title	: "CHA Land Remains Vacant for Over a Decade (Commentary)",
	url	  : "/cha-land-remains-vacant-for-over-a-decade-commentary.html",
	tags	 : ["CHA", "Chicago Housing Authority", "Chicago public housing", "policits", "pulic housing"],
	},
	
	{
	title	: "Board Squashes CHA Drug Testing Plan",
	url	  : "/board-squashes-cha-drug-testing-plan.html",
	tags	 : ["Chicago Housing Authority", "civil rights", "drug testing", "politics", "public housing tenants"],
	},
	
	{
	title	: "The Bow Campaign",
	url	  : "/the-bow-campaign.html",
	tags	 : ["chicago youth", "Child Abuse", "Imagine Englewood If", "Parenting", "violence", "youth"],
	},
	
	{
	title	: "CHA Chief Steps Down",
	url	  : "/cha-chief-steps-down-after-credit-card-fiasco.html",
	tags	 : ["CHA chief steps down", "CHA Chief steps down after Credit card fiasco", "Chicago Housing Authority", "politics"],
	},
	
	{
	title	: "Special Investigation: CHA Wanted Kids’ Report Cards",
	url	  : "/special-investigation-cha-wanted-kids%e2%80%99-report-cards.html",
	tags	 : ["CHA", "Chicago public housing", "chicago public schools", "chicago youth", "drug testing", "housing", "privacy"],
	},
	
	{
	title	: "Tenants Protest CHA Drug Testing Plan",
	url	  : "/public-hearing-on-cha-drug-test-proposal.html",
	tags	 : ["4th Amendment", "CHA", "CHA Tenants", "Chicago Housing Authority", "drug testing", "housing conditions", "One Strike", "protests", "public housing", "public housing residents"],
	},
	
	{
	title	: "Tenants Protest CHA Plans to Drug Test Them",
	url	  : "/2644.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "drug testing", "politics", "protests", "public housing", "public housing residents", "rally"],
	},
	
	{
	title	: "Residents' Journal Editor Appearing on Vocalo Radio",
	url	  : "/residents-journal-editor-appearing-on-vocalo-radio.html",
	tags	 : ["vocalo 89.5 FM"],
	},
	
	{
	title	: "The Garden",
	url	  : "/the-garden.html",
	tags	 : ["Chicago", "chicago youth", "environmental issues", "gardening", "Growing Home", "Kilbourn Organic Garden", "South Side", "Urban Youth International Journalism Program", "UYIJP"],
	},
	
	{
	title	: "The Transformation of Jason Moy",
	url	  : "/the-transformation-of-jason-moy.html",
	tags	 : ["Chicago", "chicago youth", "personal story", "transformation", "Urban Youth International Journalism Program", "UYIJP"],
	},
	
	{
	title	: "Boxing Keeps Dad's Memory Alive",
	url	  : "/boxing-keeps-dads-memory-alive.html",
	tags	 : ["Boxing", "chicago youth"],
	},
	
	{
	title	: "New Mayor Emanuel’s Road Map for Chicago’s Future",
	url	  : "/new-mayor-emanuel%e2%80%99s-road-map-for-chicago%e2%80%99s-future.html",
	tags	 : ["Chicago Mayor", "Chicago Mayor Rahm Emanuel", "Chicago politics", "Raham Emanuel", "Rahm Emauel Inaguration"],
	},
	
	{
	title	: "Battle Rages on for South Side Trauma Center",
	url	  : "/battle-rages-on-for-south-side-trauma-center.html",
	tags	 : ["Fearless Leading by the Youth", "healthcare", "Southside Together Organizing for Power", "STOP", "Trauma Center", "University of Chicago Medical Center"],
	},
	
	{
	title	: "An Afternoon of Good Times",
	url	  : "/an-afternoon-of-good-times.html",
	tags	 : ["Bern Nadette Stanis", "Cabrini-Green", "Cabrini-Green public housing", "Chicago Housing Authority", "Chicago public housing", "Good Times", "Harold Ickes Homes", "national public housing museum", "public housing", "Rueben Cannon"],
	},
	
	{
	title	: "Where are CHA’s Residents?",
	url	  : "/where-are-cha%e2%80%99s-residents.html",
	tags	 : ["Cabrini-Green", "Chicago Housing Authority", "Chicago public housing", "crime", "housing", "public housing", "violence"],
	},
	
	{
	title	: "Youths and Sex Ed",
	url	  : "/youths-and-sex-ed.html",
	tags	 : ["chicago public schools", "chicago youth", "healthcare", "Sexually Transmitted Disease", "STDs", "youth"],
	},
	
	{
	title	: "On the Campaign Trail with Che “Rhymefest” Smith",
	url	  : "/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith.html",
	tags	 : ["Chicago 2011 Aldermanic Election", "Chicago 2011 Mayoral Election", "Chicago City Council", "chicago youth", "crime", "Englewood community", "Hip Hop", "Rhymefest", "Woodlawn", "youth", "youth violence"],
	},
	
	{
	title	: "Cabrini-Green Residents Say Goodbye",
	url	  : "/cabrini-green-residents-say-goodbye.html",
	tags	 : ["Cabrini Rowhouses", "Cabrini-Green", "Cabrini-Green public housing", "Chicago Housing Authority", "chicago youth", "crime", "youth"],
	},
	
	{
	title	: "Housing Activists Take Action: An Update",
	url	  : "/housing-activists-take-action-an-update.html",
	tags	 : ["Chicago Landlords and Tenants Ordinance", "Housing Activists Take Action: An Update", "HUD", "Metropolitian Tenants Organization", "Section 8 vouchers", "U.S. Department of Housiong and Urban Development"],
	},
	
	{
	title	: "Disability Advocates Target Troubled Nursing Home",
	url	  : "/disability-advocates-target-troubled-nursing-home.html",
	tags	 : ["Access Living", "Alden Villiage Nroth Nursing Home", "Chicago ADAPT", "disabilities", "Power to the People Coalition", "Progress Center for Independent Living", "the ajne Addams Senior Causuc", "the Community renewal Society"],
	},
	
	{
	title	: "CHA Board Meeting Crashed with Concerns",
	url	  : "/cha-board-meeting-crashed-with-concerns.html",
	tags	 : ["Cabrini Rowhouses", "Cabrini-Green", "Chicago Housing Authority", "Lathrop Homes", "Lathrop Leadership Team", "Logan Square Neighborhood Association"],
	},
	
	{
	title	: "Illinois Governor Applauded for Abolishing Death Penalty",
	url	  : "/illinois-governor-applauded-for-abolishing-death-penalty.html",
	tags	 : ["Governor Pat Quinn", "Illinois Coalition to Abolish the Death Penalty", "Illniois Death Penalty", "Jewish Council on Urban Affairs"],
	},
	
	{
	title	: "Bronzeville Residents Aim for Police Substation on 47th Street",
	url	  : "/bronzeville-residents-aim-for-police-substation-on-47th-street.html",
	tags	 : ["Chicago", "Chicago Bronzeville community", "Chicago police", "community involvement", "Concerned citizens of Bronzeville", "crime", "gang violence", "improvement plan", "local businesses", "police substation", "redevelopment", "South Side", "violence"],
	},
	
	{
	title	: "Disability Rights Advocates Protest, and Gov. Quinn Retreats",
	url	  : "/disability-rights-advocates-protest-and-gov-quinn-retreats.html",
	tags	 : ["Gov. Pat Quinn", "Illinois Department of Health and Human Services", "people with disabilities"],
	},
	
	{
	title	: "We The People Media's Coverage of the Chicago Mayor's Race",
	url	  : "/we-the-people-medias-coverage-of-the-chicago-mayors-race.html",
	tags	 : ["Carol Moseley Braun", "Chicago 2011 Mayoral Election", "Chicago Mayoral Candidates", "Chicago public housing", "gang violence", "Patriica Van Pelt Watkins", "Rahm Emanuel", "youth"],
	},
	
	{
	title	: "Watkins Warns Transport Jobs May Be Lost",
	url	  : "/watkins-warns-transport-jobs-may-be-lost.html",
	tags	 : ["Chicago Mayoral Candidates", "chicago mayors race", "Patriica Van Pelt Watkins", "transportation"],
	},
	
	{
	title	: "Mayoral Candidates Views about Chicago Public Housing",
	url	  : "/mayoral-candidates-views-about-chicago-public-housing.html",
	tags	 : ["Chicago Mayoral Candidates", "Chicago mayors election", "mayoral candidates views about chicago public houisng", "politics", "public housing"],
	},
	
	{
	title	: "Rahm Wants Urban Farms, Mobile Food Trucks",
	url	  : "/rahm-wants-urban-farms-mobile-food-trucks.html",
	tags	 : ["agriculture", "Bronzeville", "Chicago", "Chicago Bronzeville community", "Chicago Mayoral Candidates", "community gardens", "environment", "environmental issues", "food industry", "food production", "health", "health issues", "low-income communities", "Rahm Emanuel"],
	},
	
	{
	title	: "Torture Victim Reflects on Burge Sentence",
	url	  : "/torture-victim-reflects-on-burge-sentence.html",
	tags	 : ["Chicago Bronzeville community", "crime", "gang violence", "John Burge", "Torture", "violence"],
	},
	
	{
	title	: "Nuf Said: Will Violence Finally Stop?",
	url	  : "/nuf-said-will-violence-finally-stop.html",
	tags	 : ["Chicago Police Department", "chicago public schools", "chicago youth", "community programs", "dropout rate", "violence"],
	},
	
	{
	title	: "Emanuel Removed From Ballot, Candidates’ Education Plans",
	url	  : "/emanuel-removed-from-ballot-candidates%e2%80%99-education-plans.html",
	tags	 : ["Carol Moseley Braun", "Chicago Mayoral Candidates", "Gery Chico", "Mayoral Cadidates Education Plans", "Mayoral Candidates", "Mayoral Candidates on Education", "Miguel Del Valle", "Rahm Emanuel"],
	},
	
	{
	title	: "Mayoral Candidate’s Plans for Low-income people and Ex-offenders",
	url	  : "/mayoral-candidate%e2%80%99s-plans-for-low-income-people-and-ex-offenders.html",
	tags	 : ["Chicago 2011 Mayor's Race", "Chicago mayoral candidate", "Chicago Mayoral Candidates", "Chicago Mayoral Election", "low-income issues", "Patriica Van Pelt Watkins"],
	},
	
	{
	title	: "Emanuel’s Anti-Crime Plan for Chicago if elected Mayor",
	url	  : "/emanuel%e2%80%99s-anti-crime-plan-for-chicago-if-elected-mayor.html",
	tags	 : ["chicago crime", "Chicago Mayoral Candidates", "crime", "Mayor of Chicago Elections", "Rahm Emanuel"],
	},
	
	{
	title	: "Federal Housing Programs on the Chopping Block",
	url	  : "/federal-housing-programs-on-the-chopping-block.html",
	tags	 : ["Center on Budget and Policy Priorites", "Federal Housing Programs"],
	},
	
	{
	title	: "Uranium: A Hidden Tragedy",
	url	  : "/uranium-a-hidden-tragedy.html",
	tags	 : ["documentary", "health", "nuclear power", "radiation poisoning", "Uranium"],
	},
	
	{
	title	: "Bowling Excursion",
	url	  : "/bowling-excursion.html",
	tags	 : ["Bowling", "chicago youth"],
	},
	
	{
	title	: "Under Pressure: Students and Teachers on Stress",
	url	  : "/under-pressure-students-and-teachers-on-stress.html",
	tags	 : ["Chicago public school students", "health", "students", "Teachers"],
	},
	
	{
	title	: "Cabrini Rowhouses Update",
	url	  : "/cabrini-rowhouses-update.html",
	tags	 : ["Cabrini", "Cabrini Rowhouses", "Cabrini Rowhouses Update", "Cabrini-Green", "Cabrini-Green public housing", "Chicago public housing"],
	},
	
	{
	title	: "Three Chicago Mayoral Candidates' Take on Public Housing",
	url	  : "/1803.html",
	tags	 : ["Chicago mayoral candidate on public housing", "Chicago Mayoral Candidates", "Chicago public housing", "national public housing museum", "Three mayoral candidates' take on public housing"],
	},
	
	{
	title	: "We The People Media in the News/Holiday Appeal",
	url	  : "/we-the-people-media-in-the-newsholiday-appeal.html",
	tags	 : [""],
	},
	
	{
	title	: "Chicago Mayoral Candidate Carol Moseley Braun on Low-income Issues",
	url	  : "/chicago-mayoral-candidate-former-u-s-sen-carol-moseley-braun-on-low-income-issues.html",
	tags	 : ["Carol Moseley Braun", "Chicago 2011 Mayoral Election"],
	},
	
	{
	title	: "Parents File Discrimination Complaint against CPS Promotion Policy for Elementary Students",
	url	  : "/parents-file-discrimination-complaint-against-cps-promotion-policy-for-elementary-students.html",
	tags	 : ["chicago public schools", "Chicago Teachers' Union", "CPS lawsuits", "PURE"],
	},
	
	{
	title	: "Cabrini rowhouses’ fate in jeopardy",
	url	  : "/cabrini-rowhouses%e2%80%99-fate-in-jeopardy.html",
	tags	 : ["Cabrini Rowhouses", "Cabrini-Green", "Cabrini-Green public housing", "Chicago Housing Authority", "Chicago public housing", "housing"],
	},
	
	{
	title	: "A Salute to Women Veterans",
	url	  : "/a-salute-to-women-veterans.html",
	tags	 : ["Chicago Bronzeville community", "chicago public schools", "JROTC", "Marching Bands", "Veterans Day Parade", "Women Soldiers", "Women Veterans"],
	},
	
	{
	title	: "A Third Generation’s Take on Relocation from Last Cabrini Building",
	url	  : "/a-third-generation%e2%80%99s-take-on-relocation-from-last-cabrini-building.html",
	tags	 : ["Cabrini Rowhouses", "Cabrini-Green", "Cabrini-Green public housing", "Chicago Housing Authority", "Chicago public housing", "housing", "public housing"],
	},
	
	{
	title	: "Marching in Washington",
	url	  : "/marching-in-washington.html",
	tags	 : ["Glenn Beck", "Imagine Englewood If", "immigration reform", "Lincoln Memorial", "One Nation Working Together Rally", "Rev. Jesse Jackson", "violence", "Washington Memorial"],
	},
	
	{
	title	: "Clinton: “It’s all about the Money”",
	url	  : "/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d.html",
	tags	 : ["Alexi Giannoulias", "Dan Seals", "Gov. Pat Quinn", "Illinois 2010 candidates", "November 2010 Elections", "President Barak Obama", "President Clinton", "Rep. Debbie Halvorson", "Rep. Mark Kirk", "Robert Dold", "US Congressman Bill Foster"],
	},
	
	{
	title	: "Editor’s Note",
	url	  : "/editor%e2%80%99s-note.html",
	tags	 : [""],
	},
	
	{
	title	: "Youths Speak Out on Violence",
	url	  : "/youths-speak-out-on-violence.html",
	tags	 : ["chicago youth", "Englewood community", "Facebook", "Imagine Englewood If", "Nuf Said", "youth violence"],
	},
	
	{
	title	: "Do Students Trust Authority?",
	url	  : "/do-students-trust-authority.html",
	tags	 : ["Altgeld Gardens", "Chicago youth violence", "Nuff Said", "youth media", "youth violence"],
	},
	
	{
	title	: "Pollution Affects Everyone",
	url	  : "/pollution-affects-everyone.html",
	tags	 : ["Ald. Pat Dowell", "flooding", "Nuff Said", "pollution", "waste management"],
	},
	
	{
	title	: "Recycling on the South Side",
	url	  : "/recycling-on-the-south-side.html",
	tags	 : ["Altgeld Gardens", "People for Community Recovery", "recycling", "the resource center", "waste management"],
	},
	
	{
	title	: "Resident's Journal Senior Reporter talking about an Historical Chicago Bronzeville Monument Project",
	url	  : "/residents-journal-senior-reporter-talking-about-an-historical-chicago-bronzeville-monument-project.html",
	tags	 : ["Chicago Bronzeville community", "Chicago Bronzeville Merchants Association", "Chicago Historical Monuments", "Chicago Obelisks"],
	},
	
	{
	title	: "Residents' Journal Editor-in-Chief Discussing Chicago Mayoral Election and CPD Protest",
	url	  : "/residents-journal-editor-in-chief-discussing-mayoral-election-and-cpd-protest.html",
	tags	 : ["Chicago 2011 Mayoral Election", "Chicago Police Department", "Chicago police union", "police rally", "Superintendant Jody Weis"],
	},
	
	{
	title	: "RJ Youth Instructor Discussing Teen Project with Youth Reporter",
	url	  : "/rj-youth-instructor-discussing-teen-project-with-youth-reporter.html",
	tags	 : ["chicago public schools", "teen violence", "youth jobs", "youth violence"],
	},
	
	{
	title	: "Residents' Journal Publisher talking about Deficiencies in DCFS System",
	url	  : "/residents-journal-publisher-talking-about-deficiencies-in-dcfs-system.html",
	tags	 : ["Child Abuse", "DCFS", "Family Defense Center"],
	},
	
	{
	title	: "CHA Youth Shopping Spree with Chicago Bears Player",
	url	  : "/cha-youth-shopping-spree-with-chicago-bears-player.html",
	tags	 : ["CHA Youth", "Chicago Bears Football Player Devin Aromashodu", "Chicago Housing Authority"],
	},
	
	{
	title	: "Bronzeville Residents' Efforts to Ban Liquor Sales in their Community",
	url	  : "/residents-journal-can-tv-show-about-bronzeville-residents-efforts-to-ban-liquor-sales-in-their-community.html",
	tags	 : ["BRCC", "the Bronzeville Movement"],
	},
	
	{
	title	: "A Teens View of a recent Chicago Youth Summit",
	url	  : "/residents-journal-can-tv-show-on-a-recent-chicago-youth-summit.html",
	tags	 : ["chicago public schools", "chicago youth", "chicago youth summit", "youth", "youth employment", "youth violence"],
	},
	
	{
	title	: "Should Liquor Stores Be Banned in Bronzeville?",
	url	  : "/should-liquor-stores-be-banned-in-bronzeville.html",
	tags	 : ["Bronzeville", "CAN TV", "Chicago Bronzeville community", "Liquor Stores"],
	},
	
	{
	title	: "Changes to Federal Affirmative Action Law Underway",
	url	  : "/changes-to-federal-affirmative-action-law-underway.html",
	tags	 : ["Affirmative Action", "people with disabilities", "US Dept. of Labor"],
	},
	
	{
	title	: "Residents' Journal Senior Reporter Discussing a Bronzeville Family History Research Project",
	url	  : "/residents-journal-senior-reporter-discussing-a-bronzeville-family-history-research-project.html",
	tags	 : ["Bronzeville", "Bronzeville Alliance", "family history", "Geneology research", "history", "Pat Bearden"],
	},
	
	{
	title	: "Residents' Journal Reporters Share Results of Youth Surveys",
	url	  : "/residents-journal-reporters-share-results-of-youth-surveys.html",
	tags	 : ["crime", "employment", "gang violence", "health", "homelessness", "housing", "jobs", "pollution", "the enviornment", "youth violence"],
	},
	
	{
	title	: "RJ Reporter talking about Youth Media Project",
	url	  : "/rj-reporter-talking-about-youth-media-project.html",
	tags	 : ["crime", "education", "employment", "health", "homelessness", "housing", "youth violence"],
	},
	
	{
	title	: "New Stories from our Youth Reporters",
	url	  : "/new-stories-from-our-youth-reporters.html",
	tags	 : [""],
	},
	
	{
	title	: "Where I Come From",
	url	  : "/where-i-come-from.html",
	tags	 : ["Chicago Housing Authority", "chicago public schools", "library", "youth violence"],
	},
	
	{
	title	: "What We Need Now",
	url	  : "/what-we-need-now.html",
	tags	 : ["Altgeld Gardens", "gang violence", "public housing", "youth programs"],
	},
	
	{
	title	: "Stepping Onto the Stage",
	url	  : "/stepping-onto-the-stage.html",
	tags	 : ["Acting", "Drama Club"],
	},
	
	{
	title	: "From the Inside Looking Out: Bullying",
	url	  : "/from-the-inside-looking-out-bullying.html",
	tags	 : ["Bullying", "chicago youth", "youth issues"],
	},
	
	{
	title	: "Altgeld Youth Protest Lack of Library",
	url	  : "/altgeld-youth-protest-lack-of-library.html",
	tags	 : ["CHA Altgeld Gardens", "Chicago public housing", "library"],
	},
	
	{
	title	: "Altgeld Gardens Dentist",
	url	  : "/altgeld-garden%e2%80%99s-dentist.html",
	tags	 : ["Altgeld Gardens", "Dental concerns", "dental hygiene", "healthcare"],
	},
	
	{
	title	: "Is Chase Bank a Slumlord?",
	url	  : "/is-chase-bank-a-slumlord.html",
	tags	 : ["Chase bank", "Chicago homelessness", "eviction", "foreclosure"],
	},
	
	{
	title	: "FCC Public Hearing on Comcast Merge with NBC",
	url	  : "/fcc-public-hearing-on-comcast-merge-with-nbc.html",
	tags	 : ["Chicago media", "Comcast", "FCC", "merger", "NBC"],
	},
	
	{
	title	: "FCC Public Hearing on Comcast Merger with NBCU/GE",
	url	  : "/fcc-public-hearing-on-comcast-merger-with-nbcuge.html",
	tags	 : ["Chicago media", "FCC", "merger", "NBC"],
	},
	
	{
	title	: "Low-income Tenants Rally at Chase Bank",
	url	  : "/low-income-tenants-rally-at-chase-bank.html",
	tags	 : ["Chase bank", "eviction", "protest"],
	},
	
	{
	title	: "Residents' Journal CAN TV Show on the Opening of the Chicago Housing Authority's Family Housing Wait List",
	url	  : "/1396.html",
	tags	 : ["CANTV", "CHA"],
	},
	
	{
	title	: "As CHA Wait List Closes, Are Low-Income Families Bridging the Digital Divide?",
	url	  : "/as-cha-wait-list-closes-are-low-income-families-bridging-the-digital-divide.html",
	tags	 : ["CHA wait list", "digital divide", "internet usage"],
	},
	
	{
	title	: "Cong. Danny Davis proposes anti-police torture legislation",
	url	  : "/cong-danny-davis-proposes-anti-police-torture-legislation.html",
	tags	 : ["Chicago Police Department", "legislation", "Torture"],
	},
	
	{
	title	: "Lawsuit Underway after Guilty Verdict in Burge Trial",
	url	  : "/lawsuit-underway-after-guilty-verdict-in-burge-trial.html",
	tags	 : ["Chicago Police Department", "lawsuit", "Mayor Richard M. Daley", "Torture"],
	},
	
	{
	title	: "HUD Renews 19 States’ HIV/AIDS Supportive Housing Programs",
	url	  : "/hud-renews-19-states%e2%80%99-hivaids-supportive-housing-programs.html",
	tags	 : ["HIV/AIDS", "homelessness", "HUD"],
	},
	
	{
	title	: "A new season of RJ TV",
	url	  : "/a-new-season-of-rj-tv-2.html",
	tags	 : ["CANTV"],
	},
	
	{
	title	: "An Important Message from the Publisher",
	url	  : "/an-important-message-from-the-publisher.html",
	tags	 : [""],
	},
	
	{
	title	: "Community Steps Up for Victim’s Family",
	url	  : "/community-steps-up-for-victim%e2%80%99s-family.html",
	tags	 : [""],
	},
	
	{
	title	: "At CHA Mixed-Income Sites, Owners Exempt from Smoke-Free Zones",
	url	  : "/at-cha-mixed-income-sites-owners-exempt-from-smoke-free-zones.html",
	tags	 : ["CHA", "counseling", "mixed-income housing", "smoke-free zones", "smoking"],
	},
	
	{
	title	: "Leaving High School for the Real World",
	url	  : "/leaving-high-school-for-the-real-world.html",
	tags	 : [""],
	},
	
	{
	title	: "On-Line Dangers",
	url	  : "/on-line-dangers.html",
	tags	 : [""],
	},
	
	{
	title	: "Thoughts of Suicide",
	url	  : "/thoughts-of-suicide.html",
	tags	 : [""],
	},
	
	{
	title	: "Senioritis",
	url	  : "/senioritis.html",
	tags	 : [""],
	},
	
	{
	title	: "Making It Harder for Students to Get a License",
	url	  : "/making-it-harder-for-students-to-get-a-license.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "Who is Principal Martinez?",
	url	  : "/who-is-principal-martinez.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "What people think about Little Village Lawndale High School?",
	url	  : "/what-people-think-about-little-village-lawndale-high-school.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "Why is the Question I Ask",
	url	  : "/why-is-the-question-i-ask.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "The Birth of Death",
	url	  : "/the-birth-of-death.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "Truancy Fees",
	url	  : "/truancy-fees.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "The Times We Hurt Most",
	url	  : "/the-times-we-hurt-most.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "Teens Working In and Out of School",
	url	  : "/teens-working-in-and-out-of-school.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "Are You Warm for the Holidays?",
	url	  : "/are-you-warm-for-the-holidays.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "My Thoughts About Fatherhood",
	url	  : "/my-thoughts-about-fatherhood.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "DCFS: Inside View",
	url	  : "/dcfs-inside-view.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "Both Sides of Police Brutality",
	url	  : "/both-sides-of-police-brutality.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "Phased Out",
	url	  : "/phased-out.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "New Issue of Residents' Journal Now On Line",
	url	  : "/new-issue-of-residents-journal-now-on-line.html",
	tags	 : [""],
	},
	
	{
	title	: "Dealing with the Digital Television Transition",
	url	  : "/dealing-with-the-digital-television-transition.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "Are Illinois' Drug Laws Racially Biased?",
	url	  : "/are-illinois-drug-laws-racially-biased.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "An Addiction to Self-Discovery",
	url	  : "/an-addiction-to-self-discovery.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "Bronzeville Memorialized",
	url	  : "/bronzeville-memorialized.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "Faith Leaders Call for School Reform",
	url	  : "/faith-leaders-call-for-school-reform.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "Urban League Sues for School Equity",
	url	  : "/urban-league-sues-for-school-equity.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "Budget Woes Nationwide",
	url	  : "/budget-woes-nationwide.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "US Reps Issue New Call to Stop Demolitions",
	url	  : "/us-reps-issue-new-call-to-stop-demolitions.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "Stepping Up",
	url	  : "/stepping-up.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "Putting Animal Cruelty In Perspective",
	url	  : "/putting-animal-cruelty-in-perspective.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "What's Love Got to Do With It?",
	url	  : "/whats-love-got-to-do-with-it.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "Rethinking Abortion",
	url	  : "/rethinking-abortion.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "A Facebook Addiction",
	url	  : "/a-facebook-addiction.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "Danger Zone",
	url	  : "/danger-zone.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "Mayor Daley Visits South Shore High School",
	url	  : "/mayor-daley-visits-south-shore-high-school.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "Teen Pregnancy Hits Teens Hard",
	url	  : "/teen-pregnancy-hits-teens-hard.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "Mohawks",
	url	  : "/mohawks.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "Long John Shivers",
	url	  : "/long-john-shivers.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "Germs",
	url	  : "/germs.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "Personal Hygiene",
	url	  : "/1114.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "Youth hearing on schools, jobs and justice",
	url	  : "/youth-hearing-on-schools-jobs-and-justice.html",
	tags	 : [""],
	},
	
	{
	title	: "Town hall meeting on the human right to mental health services",
	url	  : "/town-hall-meeting-on-the-human-right-to-mental-health-services.html",
	tags	 : [""],
	},
	
	{
	title	: "A Tale of Two Cities",
	url	  : "/a-tale-of-two-cities.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "After Katrina, New Orleans Still Turbulent",
	url	  : "/after-katrina-new-orleans-still-turbulent.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "Invasion of the Bedbugs",
	url	  : "/invasion-of-the-bedbugs.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "Off The Edge",
	url	  : "/off-the-edge.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "LeClaire Courts' Demise",
	url	  : "/leclaire-courts-demise.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "Lathrop Tenants Object to CHA's Plan",
	url	  : "/lathrop-tenants-object-to-chas-plan.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "Atgeld Residents: New School Will Curb Violence",
	url	  : "/atgeld-residents-new-school-will-curb-violence.html",
	tags	 : ["spring 2010 issue"],
	},
	
	{
	title	: "Ickes Homes News: The Final Curtain?",
	url	  : "/ickes-homes-news-the-final-curtain.html",
	tags	 : ["American Recovery and Rehabilitation Act", "CHA", "Chicago", "Chicago Housing Authority", "demolition", "Harold Ickes Homes", "HUD", "public housing", "Section 8", "spring 2010 issue"],
	},
	
	{
	title	: "Relocation Rights Duel",
	url	  : "/relocation-rights-duel.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "negligence", "Plan for Transformation", "public housing", "public housing residents", "relocation", "Relocation Rights Contract", "spring 2010 issue"],
	},
	
	{
	title	: "Tenants Protest New CHA School Reporting Policy",
	url	  : "/tenants-protest-new-cha-school-reporting-policy.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "community involvement", "education", "legislation", "public hearing", "public housing", "spring 2010 issue"],
	},
	
	{
	title	: "Robert Taylor On Line",
	url	  : "/robert-taylor-on-line.html",
	tags	 : ["CHA", "Chicago Housing Authority", "chicago youth", "community involvement", "digital divide", "housing", "Plan for Transformation", "public housing", "redevelopment", "relocation", "Robert Taylor Homes", "Section 8", "spring 2010 issue"],
	},
	
	{
	title	: "CHA Holds Public Hearing: Only Two Residents Show",
	url	  : "/cha-holds-public-hearing-only-two-residents-show.html",
	tags	 : [""],
	},
	
	{
	title	: "New Website Launched on Chicago Government Accountability",
	url	  : "/new-website-launched-on-chicago-government-accountability.html",
	tags	 : [""],
	},
	
	{
	title	: "Chicago Defender Charities Feed the Homeless",
	url	  : "/we-the-people-medias-new-video-site-2.html",
	tags	 : [""],
	},
	
	{
	title	: "We The People Media's New Video Site",
	url	  : "/we-the-people-medias-new-video-site.html",
	tags	 : ["CANTV", "multimedia", "We The People Media", "Youtube"],
	},
	
	{
	title	: "A new season of RJ TV",
	url	  : "/a-new-season-of-rj-tv.html",
	tags	 : ["CAN TV", "Chicago", "RJ TV", "We The People Media"],
	},
	
	{
	title	: "Youth Media Reporter",
	url	  : "/youth-media-reporter.html",
	tags	 : ["journalism", "UYIJP", "Youth Media Reporter", "Youth Program"],
	},
	
	{
	title	: "An Inside Out Experience",
	url	  : "/an-inside-out-experience.html",
	tags	 : ["CHA", "exhibition", "HUD", "Illinois Humanities Council.", "Jane Adams Homes", "national public housing museum", "public funding", "public housing"],
	},
	
	{
	title	: "CAN TV Devotes Entire Day Programming to “Stop the Violence” in the City of Chicago",
	url	  : "/can-tv-devotes-entire-day-programming-to-stop-the-violence-in-the-city-of-chicago.html",
	tags	 : ["CAN TV", "Chicago violence", "chicago youth", "community involvement", "Stop the Violence"],
	},
	
	{
	title	: "Born Out of Struggle (Part 1)",
	url	  : "/born-out-of-struggle-part-1.html",
	tags	 : ["chicago public schools", "education", "hunger strike", "social justice", "spring 2009 issue"],
	},
	
	{
	title	: "The Obama Cave",
	url	  : "/the-obama-cave.html",
	tags	 : ["Barack Obama", "election", "political campaign", "politics", "spring 2009 issue", "voting", "Youth Coverage of Barack Obama"],
	},
	
	{
	title	: "Youths Take Charge",
	url	  : "/youths-take-charge.html",
	tags	 : ["2008 presidential election", "Barack Obama", "spring 2009 issue", "youth voting"],
	},
	
	{
	title	: "The Scene",
	url	  : "/the-scene.html",
	tags	 : ["2008 presidential election", "Early Voting", "spring 2009 issue"],
	},
	
	{
	title	: "Inauguration",
	url	  : "/inauguration.html",
	tags	 : ["2008 presidential election", "Barack Obama", "presidential inauguration", "spring 2009 issue", "Youth Coverage of Barack Obama"],
	},
	
	{
	title	: "Is South Shore Clean?",
	url	  : "/is-south-shore-clean.html",
	tags	 : ["chicago public schools", "education", "littering", "public sanitation", "South Shore", "spring 2009 issue"],
	},
	
	{
	title	: "Play Now, Pay Later",
	url	  : "/play-now-pay-later.html",
	tags	 : ["education", "night school", "spring 2009 issue", "truancy"],
	},
	
	{
	title	: "Cafeteria Food",
	url	  : "/cafeteria-food.html",
	tags	 : ["chicago public schools", "child obesity", "health", "South Shore High School", "spring 2009 issue"],
	},
	
	{
	title	: "Teacher of the Month",
	url	  : "/teacher-of-the-month.html",
	tags	 : ["education", "spring 2009 issue", "teacher of the month"],
	},
	
	{
	title	: "Memories of R. Taylor",
	url	  : "/memories-of-r-taylor.html",
	tags	 : ["community", "demolition", "public housing", "Robert Taylor Homes", "spring 2009 issue"],
	},
	
	{
	title	: "Voice of the Voiceless",
	url	  : "/voice-of-the-voiceless.html",
	tags	 : ["in memoriam", "inspiration", "obituary", "spring 2009 issue"],
	},
	
	{
	title	: "Food Deserts",
	url	  : "/food-deserts.html",
	tags	 : ["Food Desert", "food scarcity", "grocery shopping", "nutrition", "obesity", "spring 2009 issue", "Wentworth Gardens"],
	},
	
	{
	title	: "Where I'm Coming From",
	url	  : "/where-im-coming-from.html",
	tags	 : ["Chicago teens", "spring 2009 issue", "teen issues"],
	},
	
	{
	title	: "A Day in the Life of a JROTC Cadet",
	url	  : "/a-day-in-the-life-of-a-jrotc-cadet.html",
	tags	 : ["Bronzeville", "Chicago Military Academy", "JROTC", "spring 2009 issue"],
	},
	
	{
	title	: "CPS Fan Restrictions",
	url	  : "/cps-fan-restrictions.html",
	tags	 : ["basketball", "chicago public schools", "Chicago violence", "sports administration", "spring 2009 issue"],
	},
	
	{
	title	: "A Stacked Deck",
	url	  : "/a-stacked-deck.html",
	tags	 : ["spring 2009 issue"],
	},
	
	{
	title	: "The Spring 2009 Issue of Residents'  Journal is Now Online",
	url	  : "/the-spring-2009-issue-of-residents-journal-is-now-online.html",
	tags	 : ["circulation", "online journalism", "We The People Media"],
	},
	
	{
	title	: "The CHA Plan Is Dead",
	url	  : "/the-cha-plan-is-dead.html",
	tags	 : ["CHA Plan for Transformation", "drug testing", "federal funding", "Mayor Richard M. Daley", "mixed income communities", "Robert Taylor Homes", "Section 8", "spring 2009 issue"],
	},
	
	{
	title	: "Homeless Vets Speak Out",
	url	  : "/homeless-vets-speak-out.html",
	tags	 : ["Barack Obama", "homelessness", "Project CHALENG", "spring 2009 issue", "Vetarans Administration", "veterans", "Volunteers of America"],
	},
	
	{
	title	: "The White House Agenda for the Poor",
	url	  : "/the-white-house-agenda-for-the-poor.html",
	tags	 : ["federal funding", "federal policy", "HUD", "No Child Left Behind Program", "President Barack Obama", "senior citizens", "social security", "spring 2009 issue"],
	},
	
	{
	title	: "Harold Ickes Homes Update",
	url	  : "/harold-ickes-homes-update.html",
	tags	 : ["CHA Plan for Transformation", "Harold Ickes Homes", "HUD", "spring 2009 issue"],
	},
	
	{
	title	: "Ickes Leader Challenges CHA CEO",
	url	  : "/ickes-leader-challenges-cha-ceo.html",
	tags	 : ["CHA", "Dearborn Homes", "Harold Ickes Homes", "LAC", "Lewis Jordan", "spring 2009 issue"],
	},
	
	{
	title	: "CHA’s Safe Harbor Gets Bigger",
	url	  : "/chas-safe-harbor-gets-bigger.html",
	tags	 : ["CAC", "CHA Plan for Transformation", "Safe Harbor", "spring 2009 issue"],
	},
	
	{
	title	: "Residents Blame CHA for School Closures",
	url	  : "/residents-blame-cha-for-school-closures.html",
	tags	 : ["Cabrini-Green", "CHA Plan for Transformation", "chicago public schools", "education", "redevelopment", "Section 8", "spring 2009 issue"],
	},
	
	{
	title	: "Under Fire, Board Closes Schools Anyway",
	url	  : "/under-fire-board-closes-schools-anyway.html",
	tags	 : ["Chicago Board of Education", "chicago public schools", "Chicago Teachers' Union", "education", "spring 2009 issue"],
	},
	
	{
	title	: "U. S. Citizens Decry Relatives’ Deportation",
	url	  : "/u-s-citizens-decry-relatives-deportation.html",
	tags	 : ["deportation", "immigration reform", "spring 2009 issue"],
	},
	
	{
	title	: "Immigration Concerns",
	url	  : "/immigration-concerns.html",
	tags	 : ["immigration", "Immigration and Customs Enforcement", "JCUA", "petition", "spring 2009 issue"],
	},
	
	{
	title	: "Burge Victims’ Attorneys Fight Transfers",
	url	  : "/burge-victims-attorneys-fight-transfers.html",
	tags	 : ["Chicago Police Department", "lawsuits", "spring 2009 issue", "Torture"],
	},
	
	{
	title	: "Wrongfully Convicted Man Files New Petition for Justice",
	url	  : "/wrongfully-convicted-man-files-new-petition-for-justice.html",
	tags	 : ["spring 2009 issue", "wrongful imprisonment"],
	},
	
	{
	title	: "Cops Fight Their Own Over Burge",
	url	  : "/cops-fight-their-own-over-burge.html",
	tags	 : ["Chicago Police Department", "Fraternal Order of the Police", "lawsuits", "police funding", "spring 2009 issue", "Torture"],
	},
	
	{
	title	: "Grandparents Raising Grandchildren",
	url	  : "/grandparents-raising-grandchildren.html",
	tags	 : ["DCFS", "fixed income", "Grandfamily Support Program", "grandparents", "spring 2009 issue"],
	},
	
	{
	title	: "Child Sex Abuse: The Hidden Holocaust",
	url	  : "/child-sex-abuse-the-hidden-holocaust.html",
	tags	 : ["spring 2009 issue"],
	},
	
	{
	title	: "Protestors Target Clinic Closures",
	url	  : "/protestors-target-clinic-closures.html",
	tags	 : ["spring 2009 issue"],
	},
	
	{
	title	: "A Health Report on Aneurysm",
	url	  : "/a-health-report-on-aneurysm.html",
	tags	 : ["spring 2009 issue"],
	},
	
	{
	title	: "Black History Tour Marks Historical Undertaking",
	url	  : "/black-history-tour-marks-historical-undertaking.html",
	tags	 : ["spring 2009 issue"],
	},
	
	{
	title	: "Longest Living ABLA Homes Resident Dies",
	url	  : "/longest-living-abla-homes-resident-dies.html",
	tags	 : ["spring 2009 issue"],
	},
	
	{
	title	: "How Should Replacement U. S. Senators Be Chosen?",
	url	  : "/how-should-replacement-u-s-senators-be-chosen.html",
	tags	 : ["spring 2009 issue"],
	},
	
	{
	title	: "House Passes Digital TV Delay",
	url	  : "/house-passes-digital-tv-delay.html",
	tags	 : ["digital television", "media policy", "national legislation", "The Nielsen Company", "US House of Representatives"],
	},
	
	{
	title	: "Congress Still Trying for DTV Transition Delay",
	url	  : "/congress-still-trying-for-dtv-transition-delay.html",
	tags	 : ["digital television", "media policy", "US House of Representatives"],
	},
	
	{
	title	: "Update: U. S. Senate Advances Digital TV Delay",
	url	  : "/update-u-s-senate-advances-digital-tv-delay.html",
	tags	 : ["digital television", "DTV transition", "media policy", "The Nielsen Company"],
	},
	
	{
	title	: "Obama Urges Delay in Digital TV Shift",
	url	  : "/obama-urges-delay-in-digital-tv-shift.html",
	tags	 : ["Barack Obama", "digital television", "DTV transition", "media policy", "US Congress"],
	},
	
	{
	title	: "Youths Testify for Alternative Schools",
	url	  : "/youths-testify-for-alternative-schools.html",
	tags	 : ["Bronzeville", "Chicago Urban League", "chicago youth", "dropout rate", "education funding", "youth programs"],
	},
	
	{
	title	: "Roland Burris Tapped for Vacant U. S. Senate Seat",
	url	  : "/roland-burris-tapped-for-vacant-u-s-senate-seat.html",
	tags	 : ["Governor Blagojevich", "investigation", "Roland Burris", "US senate appointment"],
	},
	
	{
	title	: "Obama: Bush Administration Automaker Plan a “Necessary Step.”",
	url	  : "/obama-bush-administration-automaker-plan-a-necessary-step.html",
	tags	 : ["automotive industry", "Barack Obama", "bipartisanship", "financial crisis", "President George W. Bush"],
	},
	
	{
	title	: "President-Elect Obama Nominates Former Senator Secretary of Health and Human Services",
	url	  : "/president-elect-obama-nominates-former-senator-secretary-of-health-and-human-services.html",
	tags	 : ["Barack Obama", "national healthcare", "White House Office of Health Reform"],
	},
	
	{
	title	: "Statement from President-elect Barack Obama on Human Rights Day",
	url	  : "/statement-from-president-elect-barack-obama-on-human-rights-day.html",
	tags	 : ["Barack Obama", "Human Rights Day"],
	},
	
	{
	title	: "The Times They Are A’Changing",
	url	  : "/the-times-they-are-achanging.html",
	tags	 : ["Chicago Police Department", "fall 2008 issue", "lawsuit", "Mayor Richard M. Daley", "political reform", "Torture"],
	},
	
	{
	title	: "‘Train Wreck’ Expected for TV Transition",
	url	  : "/train-wreck-expected-for-tv-transition.html",
	tags	 : ["digital tv", "DTV transition", "fall 2008 issue"],
	},
	
	{
	title	: "CHA Seniors Keep Waiting to Return Home",
	url	  : "/cha-seniors-keep-waiting-to-return-home.html",
	tags	 : ["CHA", "CHA Plan for Transformation", "fall 2008 issue", "HUD", "public housing", "relocation", "renovation", "senior citizens"],
	},
	
	{
	title	: "U.S. Reps Call For Moratorium On Public Housing Demolitions",
	url	  : "/u-s-reps-call-for-moratorium-on-public-housing-demolitions.html",
	tags	 : ["fall 2008 issue", "HUD", "public housing demolition"],
	},
	
	{
	title	: "Harold L. Ickes Homes News",
	url	  : "/harold-l-ickes-homes-news.html",
	tags	 : ["Chicago Police Department", "fall 2008 issue", "Harold Ickes Homes", "police harassment", "Section 8"],
	},
	
	{
	title	: "CHA Goes on the Defensive about Child's Death",
	url	  : "/cha-goes-on-the-defensive-about-childs-death.html",
	tags	 : ["Cabrini-Green", "CHA", "fall 2008 issue", "unsafe living conditions", "youth danger"],
	},
	
	{
	title	: "Congress Accuses HUD of Mismanagement",
	url	  : "/congress-accuses-hud-of-mismanagement.html",
	tags	 : ["fall 2008 issue", "HUD", "LAC", "Section 8"],
	},
	
	{
	title	: "New Funding for Chicago Rental Subsidies",
	url	  : "/new-funding-for-chicago-rental-subsidies.html",
	tags	 : ["fall 2008 issue", "Low Income Housing Trust Fund"],
	},
	
	{
	title	: "The Fall 2008 Issue of Residents'  Journal is Now Online",
	url	  : "/the-fall-2008-issue-of-residents-journal-is-now-online.html",
	tags	 : ["circulation", "online journalism"],
	},
	
	{
	title	: "Sisters Form a Brotherhood",
	url	  : "/sisters-form-a-brotherhood.html",
	tags	 : ["chicago public schools", "fall 2008 issue", "non-profits", "Operation Brotherhood", "Women's History Month", "women's rights"],
	},
	
	{
	title	: "Lathrop Residents Want Vacant Units Occupied",
	url	  : "/lathrop-residents-want-vacant-units-occupied.html",
	tags	 : ["CHA", "fall 2008 issue", "HUD", "Lathrop Homes", "One Strike Policy", "protestors"],
	},
	
	{
	title	: "The Audacity of Forgiveness",
	url	  : "/the-audacity-of-forgiveness.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "Reports Finds Child Care More Expensive than Rent",
	url	  : "/reports-finds-child-care-more-expensive-than-rent.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "One Man Giving Back to the Community",
	url	  : "/one-man-giving-back-to-the-community.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "Stop The Violence",
	url	  : "/stop-the-violence.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "Crystal Clear Views",
	url	  : "/crystal-clear-views.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "Reforms Needed at Tamms Supermax Prison",
	url	  : "/reforms-needed-at-tamms-supermax-prison.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "Sheriff Gets Safeguards for Evicted Tenants",
	url	  : "/sheriff-gets-safeguards-for-evicted-tenants.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "Increasing Numbers of Homeless Seniors",
	url	  : "/increasing-numbers-of-homeless-seniors.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "Saving A Piece of History in Cabrini Green",
	url	  : "/saving-a-piece-of-history-in-cabrini-green.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "Illinois Gov. Rod Blagojevich and Top Aide Arrested on Federal Corruption Charges",
	url	  : "/illinois-gov-rod-blagojevich-and-top-aide-arrested-on-federal-corruption-charges.html",
	tags	 : [""],
	},
	
	{
	title	: "A Statement from President-elect Barack Obama on Current Job Losses",
	url	  : "/a-statement-from-president-elect-barack-obama-on-current-job-losses.html",
	tags	 : [""],
	},
	
	{
	title	: "President-Elect Obama Picks Former Democratic Challenger as Secretary of Commerce",
	url	  : "/president-elect-obama-picks-former-democratic-challenger-as-secretary-of-commerce.html",
	tags	 : [""],
	},
	
	{
	title	: "CHA Report: Crime Rates Not Linked to CHA Relocatees",
	url	  : "/cha-report-crime-rates-not-linked-to-cha-relocatees.html",
	tags	 : ["CHA", "Lewis Jordan", "Plan for Transformation"],
	},
	
	{
	title	: "The Wells",
	url	  : "/the-wells.html",
	tags	 : ["poem", "The Wells", "winter 2008 issue"],
	},
	
	{
	title	: "Everyday Life",
	url	  : "/everyday-life.html",
	tags	 : ["Ida B. Wells", "winter 2008 issue"],
	},
	
	{
	title	: "Stereotypes",
	url	  : "/stereotypes.html",
	tags	 : ["Ida B. Wells", "public housing stereotypes", "winter 2008 issue"],
	},
	
	{
	title	: "A Year Later",
	url	  : "/a-year-later.html",
	tags	 : ["Ida B. Wells", "Oakwood Shores", "winter 2008 issue"],
	},
	
	{
	title	: "Growing Up",
	url	  : "/growing-up.html",
	tags	 : ["Chicago violence", "demolition", "Ida B. Wells", "winter 2008 issue"],
	},
	
	{
	title	: "This Ain't That",
	url	  : "/this-aint-that.html",
	tags	 : ["Ida B. Wells", "Oakwood Shores", "winter 2008 issue"],
	},
	
	{
	title	: "Penalties",
	url	  : "/penalties.html",
	tags	 : ["CHA", "Oakwood Shores", "One Strike Policy", "Section 8", "winter 2008 issue"],
	},
	
	{
	title	: "Me and My Hood",
	url	  : "/me-and-my-hood.html",
	tags	 : ["Ida B. Wells", "poetry", "winter 2008 issue"],
	},
	
	{
	title	: "I Ain't...",
	url	  : "/i-aint.html",
	tags	 : ["poetry", "winter 2008 issue"],
	},
	
	{
	title	: "Haters",
	url	  : "/haters.html",
	tags	 : ["winter 2008 issue"],
	},
	
	{
	title	: "Bonnita's Autobiography",
	url	  : "/bonnitas-autobiography.html",
	tags	 : ["winter 2008 issue"],
	},
	
	{
	title	: "Drug Addicts: A Childhood Life with a Mother on Drugs Part Two",
	url	  : "/drug-addicts-a-childhood-life-with-a-mother-on-drugs-part-two.html",
	tags	 : ["DCFS", "drug use", "winter 2008 issue"],
	},
	
	{
	title	: "Shop Talk",
	url	  : "/shop-talk.html",
	tags	 : ["winter 2008 issue"],
	},
	
	{
	title	: "Domestic Violence Awareness Report",
	url	  : "/domestic-violence-awareness-report.html",
	tags	 : ["winter 2008 issue"],
	},
	
	{
	title	: "Genetic Testing and Personal Responsibility",
	url	  : "/genetic-testing-and-personal-responsibility.html",
	tags	 : ["winter 2008 issue"],
	},
	
	{
	title	: "Crystal Clear Views",
	url	  : "/homelessness-a-constant-american-tragedy.html",
	tags	 : ["winter 2008 issue"],
	},
	
	{
	title	: "The Aftermath of Relocation",
	url	  : "/the-aftermath-of-relocation.html",
	tags	 : ["relocation", "winter 2008 issue"],
	},
	
	{
	title	: "The Pros and Cons of Relocation",
	url	  : "/pros-and-cons-of-relocation.html",
	tags	 : ["relocation", "winter 2008 issue"],
	},
	
	{
	title	: "Lathrop Homes Targeted for Redevelopment",
	url	  : "/lathrop-homes-targeted-for-redevelopment.html",
	tags	 : ["CHA", "Lathrop Homes", "winter 2008 issue"],
	},
	
	{
	title	: "Harold Ickes News",
	url	  : "/harold-ickes-news.html",
	tags	 : ["Harold Ickes Homes", "winter 2008 issue"],
	},
	
	{
	title	: "Seniors Protest Rent Rise",
	url	  : "/seniors-protest-rent-rise.html",
	tags	 : ["CHA", "rent prices", "winter 2008 issue"],
	},
	
	{
	title	: "Cook County Health Bureau News",
	url	  : "/cook-county-health-bureau-news.html",
	tags	 : ["Cook County", "health department", "winter 2008 issue"],
	},
	
	{
	title	: "A Katrina Victim's Personal Ordeal",
	url	  : "/a-katrina-victims-personal-ordeal-2.html",
	tags	 : ["Hurricane Katrina", "winter 2008 issue"],
	},
	
	{
	title	: "Tenants Council Battles To Represent Residents",
	url	  : "/tenants-council-battles-to-represent-residents.html",
	tags	 : ["CHA", "winter 2008 issue"],
	},
	
	{
	title	: "Jackson Visits Ickes",
	url	  : "/jackson-visits-ickes.html",
	tags	 : ["Harold Ickes Homes", "Rev. Jesse Jackson", "winter 2008 issue"],
	},
	
	{
	title	: "Are CPD Contact Cards Unconstitutional?",
	url	  : "/are-cpd-contact-cards-unconstitutional.html",
	tags	 : ["Chicago Police Department", "winter 2008 issue"],
	},
	
	{
	title	: "CHA New Work Rule Questioned",
	url	  : "/cha-new-work-rule-questioned.html",
	tags	 : ["CHA", "homelessness", "winter 2008 issue"],
	},
	
	{
	title	: "Who Could Miss The Hole?",
	url	  : "/who-could-miss-the-hole.html",
	tags	 : ["CHA", "Chicago Housing Authority", "HUD", "Plan for Transformation", "public housing", "public housing residents", "redevelopment", "Robert Taylor Homes", "Stateway Gardens", "the Hole", "winter 2008 issue"],
	},
	
	{
	title	: "My Life, My Story, My Song",
	url	  : "/my-life-my-story-my-song.html",
	tags	 : ["fall 2008 issue"],
	},
	
	{
	title	: "A Special Tribute",
	url	  : "/a-special-tribute.html",
	tags	 : ["advocacy", "Chicago", "community involvement", "Izora Davis", "january 2007 issue", "living conditions", "McCormick Place", "public housing residents", "S. Lake Park", "tribute"],
	},
	
	{
	title	: "Crystal Clear Views",
	url	  : "/crystal-clear-views-2.html",
	tags	 : ["advice", "asthma", "health issues", "january 2007 issue", "personal story", "symptoms"],
	},
	
	{
	title	: "Whose School Is It?",
	url	  : "/whose-school-is-it.html",
	tags	 : ["attendance", "attendance boundaries", "Chicago", "Chicago Latino community", "chicago public schools", "education", "january 2007 issue", "Little Village High School", "referendum", "student population", "students"],
	},
	
	{
	title	: "Illegal Immigration: Cries For Justice",
	url	  : "/illegal-immigration-cries-for-justice.html",
	tags	 : ["advocacy", "Chicago", "citizenship", "illegal immigration", "Illinois Coalition for Immigrant and Refugee Rights", "immigration", "january 2007 issue", "legalization", "legislation", "North American Free Trade Agreement", "rally", "reform", "social justice", "undocumented workers", "VOTE"],
	},
	
	{
	title	: "A Questionable Connection Update",
	url	  : "/a-questionable-connection-update.html",
	tags	 : ["CHA donations", "january 2007 issue", "questionable practices"],
	},
	
	{
	title	: "Guard Recklessly Shoots CHA Youth",
	url	  : "/guard-recklessly-shoots-cha-youth.html",
	tags	 : ["gun violence", "january 2007 issue"],
	},
	
	{
	title	: "Altgeld Gardens News",
	url	  : "/altgeld-garden-news.html",
	tags	 : ["Altgeld Gardens", "CHA", "Chicago Housing Authority", "Chicago public housing", "january 2007 issue", "remodeling"],
	},
	
	{
	title	: "Ickes and Other CHA News",
	url	  : "/ickes-and-other-cha-news.html",
	tags	 : ["CHA", "Harold Ickes Homes", "january 2007 issue"],
	},
	
	{
	title	: "Last Days At Ogden Courts",
	url	  : "/last-days-at-ogden-courts.html",
	tags	 : ["january 2007 issue", "ogden courts"],
	},
	
	{
	title	: "Security Problems Continue for Residents",
	url	  : "/security-problems-continue-for-residents.html",
	tags	 : ["january 2007 issue", "low income housing security"],
	},
	
	{
	title	: "Checking Chicago's War on Drugs",
	url	  : "/checking-chicagos-war-on-drugs.html",
	tags	 : ["Chicago Police Department", "illegal drugs", "january 2007 issue"],
	},
	
	{
	title	: "House of Screams",
	url	  : "/house-of-screams.html",
	tags	 : ["Chicago", "Chicago Police Department", "injustice", "january 2007 issue", "Jon Burge", "police brutality", "Torture","Ulysses U.S. Floyd"],
	},
	
	{
	title	: "Publisher's Box",
	url	  : "/publishers-box.html",
	tags	 : ["Chicago", "Chicago Police Department", "Dearborn Homes", "freedom of the press", "january 2007 issue", "police mistreatment", "public housing"],
	},
	
	{
	title	: "Black History Through Performance",
	url	  : "/black-history-through-performance.html",
	tags	 : ["Apostolic Church Choir of Chicago", "black history month", "Chicago", "Cliff Kelley", "entertainment", "February", "february march 2006 issue", "Frederick Douglass", "Harlan High School", "Kevin McIlvaine", "Positive Reinforcement through Identity Development and Education", "pride", "WVON"],
	},
	
	{
	title	: "Stop the Violence",
	url	  : "/stop-the-violence-2.html",
	tags	 : ["Chicago", "employment", "ex-offenders", "february march 2006 issue", "Michael Barlow Center", "One Strike", "St. Leanord's Ministries", "West Side"],
	},
	
	{
	title	: "CHA Development News",
	url	  : "/cha-development-news.html",
	tags	 : ["Altgeld Gardens", "Annual Low End Productions Basketball League", "CHA", "Chicago", "Chicago Housing Authority", "community involvement", "culture", "entertainment", "february march 2006 issue", "Harold Ickes Homes", "public housing", "public housing residents", "Sunday Night Steppers Set"],
	},
	
	{
	title	: "Pilsen Guards Against Gentrifyers",
	url	  : "/pilsen-guards-against-gentrifyers.html",
	tags	 : ["Chicago", "community involvement", "february march 2006 issue", "Lipe Property Company", "neighborhood development", "Pilsen", "press conference", "protest"],
	},
	
	{
	title	: "CHA Contracting Woes",
	url	  : "/cha-contracting-woes.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "february march 2006 issue", "HUD", "lawsuit", "Plan for Transformation", "public housing", "public housing residents", "Robert Taylor Homes", "William Moorehead and Associates"],
	},
	
	{
	title	: "State Passes Support for Renters",
	url	  : "/state-passes-support-for-renters.html",
	tags	 : ["affordable housing", "Chicago", "february march 2006 issue", "funding", "homelessness", "Illinois", "legislation", "Rental Housing Support Program"],
	},
	
	{
	title	: "Bird Flu Pandemic Expected",
	url	  : "/bird-flu-pandemic-expected.html",
	tags	 : ["bird flu", "february march 2006 issue", "health issues", "Influenza Preparedness", "national health", "pandemic", "Senate Bill 2112", "vaccines"],
	},
	
	{
	title	: "Jones vs. Tatum",
	url	  : "/jones-vs-tatum.html",
	tags	 : ["campaign", "education", "february march 2006 issue", "Illinois", "Lovanna Jones", "politics", "primary election", "public housing", "Ranoule Tatum", "state representative"],
	},
	
	{
	title	: "Rush vs. Jackson",
	url	  : "/rush-vs-jackson.html",
	tags	 : ["Bobby Rush", "CHA", "Chicago Housing Authority", "education", "ex-offenders", "february march 2006 issue", "Illinois", "Phillip Jackson", "politics", "primary election"],
	},
	
	{
	title	: "Cook County Presidential Race",
	url	  : "/cook-county-presidential-race.html",
	tags	 : ["campaign", "contributions", "Cook County Board", "election", "february march 2006 issue", "Forrest Claypool", "John Stroger", "politics", "primary race"],
	},
	
	{
	title	: "Troubling Development Update",
	url	  : "/troubling-development-update.html",
	tags	 : ["Chicago", "Dearborn Homes", "drug activity", "drug issues", "february march 2006 issue", "gang activity", "Harold Ickes Homes", "Ida B. Wells", "illegal drugs", "Leclaire Courts", "police protection", "public housing"],
	},
	
	{
	title	: "Deadly Moves II",
	url	  : "/deadly-moves-ii.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "Chicago Police Department", "CPD", "crime", "february march 2006 issue", "investigation", "murder rate", "Plan for Transformation", "public housing", "violence"],
	},
	
	{
	title	: "Update: Questions Linger, Contributions Dwindle",
	url	  : "/update-questions-linger-contributions-dwindle.html",
	tags	 : ["17th Ward Democratic Organization", "A Questionable Connection", "CHA", "Chicago", "Chicago Housing Authority", "donations", "february march 2006 issue", "funding", "investigation", "politics", "Terry Peterson"],
	},
	
	{
	title	: "Victory at Bridgeport Homes",
	url	  : "/victory-at-bridgeport-homes.html",
	tags	 : ["A Questionable Connection", "Bridgeport Homes", "CHA", "Chicago", "Chicago public housing", "february march 2006 issue", "living conditions", "management", "public housing", "public housing residents", "South Side", "Terry Peterson"],
	},
	
	{
	title	: "Publisher's Box",
	url	  : "/publishers-box-2.html",
	tags	 : ["awards", "CAN TV", "Chicago", "Deadly Moves", "february march 2006 issue", "funding", "hiatus", "journalism", "Media Collaboration", "relocation", "RJ TV", "Society of Professional Journalists"],
	},
	
	{
	title	: "Harold Ickes News",
	url	  : "/harold-ickes-news-2.html",
	tags	 : ["Chicago", "community involvement", "education", "february march 2005 issue", "Harold Ickes Homes", "living conditions", "National Teachers' Academy", "public housing", "public housing residents"],
	},
	
	{
	title	: "Crystal Clear Views",
	url	  : "/crystal-clear-views-3.html",
	tags	 : ["advice", "diet", "exercise", "february march 2005 issue", "health", "lifestyle"],
	},
	
	{
	title	: "Black Metropolis National Heritage Area Project",
	url	  : "/black-metropolis-national-heritage-area-project.html",
	tags	 : ["Black Metropolis", "Bronzeville", "Chicago", "community involvement", "culture", "february march 2005 issue", "National Heritage Area", "National Park Service", "NHA"],
	},
	
	{
	title	: "Healthcare Justice Act Raises Hopes",
	url	  : "/healthcare-justice-act-raises-hopes.html",
	tags	 : ["Campaign for Better Healthcare", "february march 2005 issue", "healthcare", "Healthcare Justice Act", "Illinois", "legislation"],
	},
	
	{
	title	: "Senior Services 2005 and Beyond",
	url	  : "/senior-services-2005-and-beyond.html",
	tags	 : ["Access Living", "Chicago", "El Valor", "february march 2005 issue", "outreach", "senior citizens", "social services"],
	},
	
	{
	title	: "Tales of Lawndale Housing",
	url	  : "/tales-of-lawndale-housing.html",
	tags	 : ["Chicago", "february march 2005 issue", "HUD", "Lawndale Housing", "living conditions", "maintenance", "public housing", "public housing residents", "Section 8", "Voices of the Ex-Offenders", "VOTE", "West Side"],
	},
	
	{
	title	: "The John Howard Association",
	url	  : "/the-john-howard-association.html",
	tags	 : ["february march 2005 issue", "Illinois prisons", "John Howard Association", "prison reform"],
	},
	
	{
	title	: "Illinois Democrats Resist Social Security Privatization",
	url	  : "/illinois-democrats-resist-social-security-privatization.html",
	tags	 : ["Barack Obama", "february march 2005 issue", "George W. Bush", "healthcare", "politics", "privatization", "reform", "social security"],
	},
	
	{
	title	: "Utility Problems Persist for Residents",
	url	  : "/utility-problems-persist-for-residents.html",
	tags	 : ["CHA", "CHANCE", "Chicago", "Chicago Housing Authority", "electricity costs", "energy issues", "february march 2005 issue", "Housing Choice Voucher", "living conditions", "Low Income Housing Energy Assistance Program", "Plan for Transformation", "public housing", "public housing residents", "Robert Taylor Homes", "Section 8", "utilities"],
	},
	
	{
	title	: "There's H.O.P.E. for Gary Residents",
	url	  : "/theres-h-o-p-e-for-gary-residents.html",
	tags	 : ["Duneland Village", "february march 2005 issue", "funding", "Gary Indiana", "HOPE VI", "HUD", "mixed income communities", "public housing"],
	},
	
	{
	title	: "A Questionable Connection",
	url	  : "/a-questionable-connection.html",
	tags	 : ["17th War Democratic Organization", "Better Government Association", "CHA", "Chicago", "Chicago Housing Authority", "donations", "february march 2005 issue", "Hatch Act", "investigation", "Plan for Transformation", "politics", "Silver Shovel", "Terry Peterson"],
	},
	
	{
	title	: "Crystal Clear Views",
	url	  : "/crystal-clear-views-4.html",
	tags	 : ["advice", "conflict", "housing", "Housing Choice Voucher", "housing conditions", "winter 2004 issue"],
	},
	
	{
	title	: "Stop The Violence",
	url	  : "/stop-the-violence-3.html",
	tags	 : ["Chicago", "housing conditions", "LAC", "Latresha Green", "ogden courts", "public housing residents", "violence", "West Side", "winter 2004 issue"],
	},
	
	{
	title	: "Harold Ickes News",
	url	  : "/harold-ickes-news-3.html",
	tags	 : ["Chicago", "community involvement", "Gospel Fest", "Harold Ickes Homes", "National Teachers' Academy", "outreach", "public housing", "spirituality", "winter 2004 issue"],
	},
	
	{
	title	: "Update: Zoning and Affordable Housing",
	url	  : "/update-zoning-and-affordable-housing.html",
	tags	 : ["affordable housing", "Affordable Housing Ordinance", "Chicago", "inclusionary zoning", "low-income issues", "politics", "reform", "winter 2004 issue", "zoning"],
	},
	
	{
	title	: "Residents: What People Want",
	url	  : "/residents-what-people-want.html",
	tags	 : ["advocacy", "CHA", "Chicago", "Chicago Housing Authority", "community involvement", "outreach", "Plan for Transformation", "public housing", "public housing residents", "redevelopment", "survey", "winter 2004 issue"],
	},
	
	{
	title	: "Presidential Election Notebook",
	url	  : "/presidential-election-notebook.html",
	tags	 : ["apathy", "campaign", "CHA", "Chicago", "election", "Plan for Transformation", "politics", "presidential election", "United Power and Action!", "voter involvement", "voting", "winter 2004 issue", "youth"],
	},
	
	{
	title	: "Obama's Visit to Howard Alternative High School",
	url	  : "/obamas-visit-to-howard-alternative-high-school.html",
	tags	 : ["Barack Obama", "chicago youth", "college funding", "Howard Area Alternative High School", "U.S. senate", "UYIJP", "Youth Coverage of Barack Obama"],
	},
	
	{
	title	: "Rockwell, LeClaire, ABLA Elections",
	url	  : "/rockwell-leclaire-abla-elections.html",
	tags	 : ["ABLA", "CHA", "Chicago", "election", "LAC", "Leclaire Courts", "politics", "public housing", "public housing residents", "Rockwell Gardens", "voting", "winter 2004 issue"],
	},
	
	{
	title	: "A Taylor-Made Election",
	url	  : "/a-taylor-made-election.html",
	tags	 : ["Chicago", "election", "politics", "public housing", "relocation", "Robert Taylor Homes", "voter participation", "voting", "winter 2004 issue"],
	},
	
	{
	title	: "More CHA Residents Voting Woes",
	url	  : "/more-cha-residents-voting-woes.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "community involvement", "HUD", "politics", "public housing", "public housing residents", "Section 8", "Tenant Council Election", "United States Housing Act", "voter participation", "voting", "winter 2004 issue"],
	},
	
	{
	title	: "Wipe Out",
	url	  : "/wipe-out.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "election", "leadership", "Madden Park Homes", "politics", "public housing", "public housing residents", "relocation", "South Side", "Tenant Council Election", "voter participation", "voting", "Washington Park", "winter 2004 issue"],
	},
	
	{
	title	: "Cabrini-Green Election",
	url	  : "/cabrini-green-election.html",
	tags	 : ["Cabrini-Green", "Carol Steele", "Chicago", "Coalitiong to Protect Public Housing", "community involvement", "election", "Election Day", "Kelvin Cannon", "North Side", "politics", "public housing residents", "voter participation", "voting", "winter 2004 issue"],
	},
	
	{
	title	: "Election Report: Harold Ickes Homes",
	url	  : "/election-report-harold-ickes-homes.html",
	tags	 : ["Black United Fund Institute", "Chicago", "community involvement", "election", "Harold Ickes Homes", "Institute for Government Research", "LAC", "Local Advisory Council", "politics", "voter participation", "winter 2004 issue"],
	},
	
	{
	title	: "Renaissance 2010: Sweeping Changes",
	url	  : "/renaissance-2010-sweeping-changes.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "chicago public schools", "CPS", "education", "low-income communities", "mixed income communities", "Plan for Transformation", "Renaissance 2010", "winter 2004 issue"],
	},
	
	{
	title	: "Positive People",
	url	  : "/positive-people.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "community involvement", "Parkway Gardens", "personal story", "public housing", "public housing residents", "Robert Taylor Homes", "Washington Park", "winter 2004 issue"],
	},
	
	{
	title	: "Senior Rehab Update",
	url	  : "/senior-rehab-update.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "living conditions", "Pilsen", "public housing", "Racine Apartments", "restoration", "senior citizens", "winter 2004 issue"],
	},
	
	{
	title	: "Deadly Moves - an update",
	url	  : "/deadly-moves-an-update.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "Chicago Police Department", "CPD", "Deadly Moves", "homicide", "investigation", "murder", "Plan for Transformation", "police protection", "public housing", "public housing residents", "redevelopment", "relocation", "violence", "winter 2004 issue"],
	},
	
	{
	title	: "Closure Razes Resident Hopes",
	url	  : "/closure-razes-resident-hopes.html",
	tags	 : ["assistance", "CHA", "Chicago", "Chicago Housing Authority", "Housing Choice Voucher", "public housing", "public housing residents", "relocation", "Section 8", "winter 2004 issue"],
	},
	
	{
	title	: "The Compassionate Blues",
	url	  : "/the-compassionate-blues.html",
	tags	 : ["Beauty Turner", "blues", "Chicago", "Clarence Scott", "culture", "entertainment", "juke joints", "Lee's Unleaded Blues", "low-income communities", "music", "night life", "winter 2004 issue"],
	},
	
	{
	title	: "Chaos at the Bank of Lawndale",
	url	  : "/chaos-at-the-bank-of-lawndale.html",
	tags	 : ["august september 2004 issue", "business", "Chicago", "Community Bank of Lawndale", "controversy", "International Bank of Chicago", "Lawndale", "ownership", "protests", "South West Side"],
	},
	
	{
	title	: "Positive People",
	url	  : "/positive-people-2.html",
	tags	 : ["appreciation", "august september 2004 issue", "Chicago", "community involvement", "Dearborn Homes", "Ida B. Wells", "leadership", "public housing", "public housing residents", "Robert Taylor Homes", "Youth Leadership Program"],
	},
	
	{
	title	: "Crystal Clear Views",
	url	  : "/crystal-clear-views-6.html",
	tags	 : ["advice", "appreciation", "august september 2004 issue", "children", "family", "Mother's Day", "motherhood", "mothers"],
	},
	
	{
	title	: "CPS Violence",
	url	  : "/cps-violence.html",
	tags	 : ["august september 2004 issue", "Chicago", "chicago public schools", "disciplinary issues", "education", "security", "violence"],
	},
	
	{
	title	: "Stop The Violence",
	url	  : "/stop-the-violence-4.html",
	tags	 : ["august september 2004 issue", "Chicago", "Chicago prisons", "Enough is Enough", "Mayor Daley", "police brutality", "violence"],
	},
	
	{
	title	: "Ex Marks The Spot",
	url	  : "/ex-marks-the-spot.html",
	tags	 : ["august september 2004 issue", "Automatic Expungement Act", "employment", "ex-offenders", "human rights", "job opportunities", "legislation", "Second Chance Act", "Voices of the Ex-Offenders", "VOTE"],
	},
	
	{
	title	: "2004 Election Focal Points",
	url	  : "/2004-election-focal-points.html",
	tags	 : ["activism", "affordable housing", "august september 2004 issue", "community involvement", "election", "homelessness", "Housing Choice Voucher Program", "housing issues", "Illinois", "Illinois senator race", "legislation", "political involvement", "politics", "Section 8", "voters"],
	},
	
	{
	title	: "Medicare Prescription Drug Benefit",
	url	  : "/medicare-prescription-drug-benefit.html",
	tags	 : ["august september 2004 issue", "George W. Bush", "health care", "health issues", "legislation", "medicare", "Medicare Modernization Act", "national healthcare", "prescriptions", "senior citizens"],
	},
	
	{
	title	: "Affordable Housing for Humboldt Park",
	url	  : "/affordable-housing-for-humboldt-park.html",
	tags	 : ["affordable housing", "august september 2004 issue", "Chicago", "Federally Assisted Housing Preservation Act", "homelessness", "Humboldt Park", "IHDA", "Illinois Housing Development Authority", "Latino community", "legislation", "public housing", "public housing residents", "Section 8"],
	},
	
	{
	title	: "Archer Courts: A Model Rehab",
	url	  : "/archer-courts-a-model-rehab.html",
	tags	 : ["city-state development", "Archer Courts", "august september 2004 issue", "CHA", "Chicago", "Chicago Housing Authority", "living conditions", "public housing", "public housing residents", "rehabilitation", "renovation"],
	},
	
	{
	title	: "Harold Ickes News",
	url	  : "/harold-ickes-news-4.html",
	tags	 : ["august september 2004 issue", "centenarian", "Chicago", "communtiy involvement", "demolition", "Harold Ickes Homes", "public housing", "public housing residents", "relocation", "Section 8"],
	},
	
	{
	title	: "You Have Been Served",
	url	  : "/you-have-been-served.html",
	tags	 : ["august september 2004 issue", "Cabrini-Green", "CHA", "Chicago", "Chicago Housing Authority", "eviction", "lawsuit", "public housing", "public housing residents", "relocation", "Section 8"],
	},
	
	{
	title	: "Bronzeville Community Alert",
	url	  : "/bronzeville-community-alert.html",
	tags	 : ["august september 2004 issue", "Bronzeville", "CHA", "Chicago", "Chicago Housing Authority", "community involvement", "gentrification", "local businesses", "mixed income communities", "new housing", "public meeting", "redevelopment", "Renaissance Apartments"],
	},
	
	{
	title	: "No C.H.A.N.C.E. For Change?",
	url	  : "/no-c-h-a-n-c-e-for-change.html",
	tags	 : ["august september 2004 issue", "C.H.A.N.C.E.", "CEDA", "CHA", "Chicago Housing Authority", "Commonwealth Edison", "Community Economic Development Agency", "electric bills", "electricity costs", "energy issues", "LIHEAP", "Low Income Housing Energy Assistance Program", "public housing", "public housing residents"],
	},
	
	{
	title	: "Deadly Moves: In Too Deep",
	url	  : "/deadly-moves-in-too-deep.html",
	tags	 : ["august september 2004 issue", "Black Stone Rangers", "Chicago", "gang activity", "leadership", "personal story", "street gangs","Ulysses U.S. Floyd"],
	},
	
	{
	title	: "Deadly Moves: Lack of Force",
	url	  : "/deadly-moves-lack-of-force.html",
	tags	 : ["august september 2004 issue", "CHA", "Chicago", "Chicago Housing Authority", "Chicago Police Department", "CPD", "low-income issues", "Plan for Transformation", "police protection", "public housing", "Stateway Gardens", "war on drugs"],
	},
	
	{
	title	: "Deadly Moves: Troubling Development",
	url	  : "/deadly-moves-troubling-development.html",
	tags	 : ["august september 2004 issue", "CHA", "Chicago Housing Authority", "Chicago Police Department", "CPD", "Mayor Richard M. Daley", "mixed-income neighborhoods", "public housing", "security", "war on drugs"],
	},
	
	{
	title	: "Deadly Moves: Moving at Their Own Risk",
	url	  : "/deadly-moves-moving-at-their-own-risk-2.html",
	tags	 : ["august september 2004 issue", "CHA", "Chicago Housing Authority", "community", "demolition", "displacement", "drug issues", "Englewood", "gang activity", "Plan for Transformation", "public housing", "redevelopment", "relocation", "Robert Taylor Homes", "violence"],
	},
	
	{
	title	: "Publishers' Introduction: Deadly Moves",
	url	  : "/publishers-introduction-deadly-moves.html",
	tags	 : ["august september 2004 issue", "CHA", "Chicago", "Chicago Housing Authority", "homicide", "investigation", "journalism", "mixed-income neighborhoods", "Plan for Transformation", "public housing", "public housing residents", "relocation", "The chicago Reporter", "violence"],
	},
	
	{
	title	: "Stop The Violence",
	url	  : "/stop-the-violence-5.html",
	tags	 : ["Aaron Patterson", "Chicago", "community involvement", "Fred Hampton", "gun violence", "gun-control", "march april 2004 issue", "POCC", "Prisoners of Consciousness Committee", "violence"],
	},
	
	{
	title	: "Crystal Clear Views",
	url	  : "/crystal-clear-views-7.html",
	tags	 : ["advice", "Chicago", "election", "ignorance", "march april 2004 issue", "political involvement", "politics", "voting", "voting process"],
	},
	
	{
	title	: "Positive People",
	url	  : "/positive-people-3.html",
	tags	 : ["Chicago", "community involvement", "Housing Choice Voucher", "march april 2004 issue", "public housing", "reconstruction", "relocation", "Robert Taylor Homes", "Wentworth Gardens"],
	},
	
	{
	title	: "Harold Ickes News",
	url	  : "/harold-ickes-news-5.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "education", "Gloria Williams", "Harold Ickes Homes", "LAC", "living conditions", "Local Advisory Council", "maintenance", "management", "march april 2004 issue", "National Teachers' Academy", "public housing", "public housing residents"],
	},
	
	{
	title	: "If the Suit Fits, Who Wears It?",
	url	  : "/if-the-suit-fits-who-wears-it.html",
	tags	 : ["Altgeld Gardens", "CHA", "Chicago Housing Authority", "Chicago Police Department", "CPD", "lawsuits", "legal issues", "march april 2004 issue", "public housing", "public housing residents"],
	},
	
	{
	title	: "A Championship Victory",
	url	  : "/a-championship-victory.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "Chicago Police Department", "civil rights", "CPD", "lawsuits", "march april 2004 issue", "public housing", "public housing residents", "Stateway Gardens", "Williams v. Brown"],
	},
	
	{
	title	: "Sixth District Race Makes History",
	url	  : "/sixth-district-race-makes-history.html",
	tags	 : ["Aaron Patterson", "Bridgeport", "Cook County", "death row", "election", "ex-offenders", "Illinois", "Illinois state Representative", "incarceration", "march april 2004 issue", "Patricia Bailey", "political platform", "politics"],
	},
	
	{
	title	: "2nd U.S. Congressional District Race",
	url	  : "/2nd-u-s-congressional-district-race.html",
	tags	 : ["candidates", "election", "Everett Shumpert", "Illinois", "Jesse Jackson", "Jr.", "march april 2004 issue", "Mel Reynolds", "politics", "Rev. Anthony William"],
	},
	
	{
	title	: "U.S. Senate Candidate Joyce Washington",
	url	  : "/u-s-senate-candidate-joyce-washington.html",
	tags	 : ["candidate", "election", "health care", "Illinois", "Joyce Washington", "march april 2004 issue", "political issues", "political platform", "politics"],
	},
	
	{
	title	: "U.S. Senate Candidate Gery Chico",
	url	  : "/u-s-senate-candidate-gery-chico.html",
	tags	 : ["Board of Education", "candidate", "Gery Chico", "Illinois", "march april 2004 issue", "political issues", "political platform", "politics", "U.S. senate election"],
	},
	
	{
	title	: "U.S. Senate Candidate Daniel Hynes",
	url	  : "/u-s-senate-candidate-daniel-hynes.html",
	tags	 : ["candidate", "comptroller", "Dan Hynes", "Illinois", "march april 2004 issue", "political issues", "political platform", "politics", "poverty", "U.S. senate election"],
	},
	
	{
	title	: "U.S. Senate Candidate Blair Hull",
	url	  : "/u-s-senate-candidate-blair-hull.html",
	tags	 : ["Blair Hull", "candidate", "Illinois", "march april 2004 issue", "platforms", "political issues", "politics", "U.S. senate election"],
	},
	
	{
	title	: "U.S. Senate Candidate Barack Obama",
	url	  : "/u-s-senate-candidate-barack-obama.html",
	tags	 : ["affordable housing", "Barack Obama", "candidate", "Illinois", "insurance", "march april 2004 issue", "U.S. senate election", "welfare"],
	},
	
	{
	title	: "The Sound of Silence",
	url	  : "/the-sound-of-silence.html",
	tags	 : ["2004 presidential election", "Democratic party", "housing issues", "John Edwards", "John Kerry", "low-income communities", "march april 2004 issue", "politics", "presidential candidates", "presidential election"],
	},
	
	{
	title	: "Oops, They Did It Again",
	url	  : "/oops-they-did-it-again.html",
	tags	 : ["advocacy", "CHA", "Chicago", "Chicago Housing Authority", "Henry Horner Homes", "HOPE VI", "lawsuit", "legal issues", "march april 2004 issue", "mixed income communities", "Plan for Transformation", "public housing", "public housing residents", "redevelopment", "Right to Return", "Service Connectors", "Supportive Services"],
	},
	
	{
	title	: "Crystal Clear Views",
	url	  : "/crystal-clear-views-8.html",
	tags	 : ["advice", "happiness", "january february 2004 issue", "life lessons", "new year resolutions"],
	},
	
	{
	title	: "Stop The Violence",
	url	  : "/stop-the-violence-6.html",
	tags	 : ["Chicago", "january february 2004 issue", "psychology", "RAINN", "rape", "sexual assault", "violence"],
	},
	
	{
	title	: "Harold Ickes News",
	url	  : "/harold-ickes-news-6.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "Harold Ickes Homes", "HUD", "january february 2004 issue", "relocation", "remodeling", "violence"],
	},
	
	{
	title	: "Positive People",
	url	  : "/positive-people-4.html",
	tags	 : ["activism", "Cabrini-Green", "Chicago", "community involvement", "january february 2004 issue", "leadership", "low-income housing", "relocation"],
	},
	
	{
	title	: "The Price of a Political Job",
	url	  : "/the-price-of-a-political-job.html",
	tags	 : ["Chicago", "Chicago Park District", "employment", "history", "january february 2004 issue", "politicians", "politics", "presidential election"],
	},
	
	{
	title	: "Altgeld Gardens Lawsuit Settlement",
	url	  : "/altgeld-gardens-lawsuit-settlement.html",
	tags	 : ["Altgeld Gardens", "CHA", "Chicago", "Chicago Housing Authority", "environmental issues", "january february 2004 issue", "lawsuits", "PCR", "People for Community Recovery", "settlement"],
	},
	
	{
	title	: "The True Face of Poverty",
	url	  : "/the-true-face-of-poverty.html",
	tags	 : ["economy", "health issues", "january february 2004 issue", "poverty", "public housing", "transitional living", "unemployment"],
	},
	
	{
	title	: "Getting to Know Rockwell",
	url	  : "/getting-to-know-rockwell.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "Housing Choice Vouchers", "HUD", "january february 2004 issue", "public housing", "redevelopment", "relocation", "Rockwell Gardens", "West Side"],
	},
	
	{
	title	: "Is It Doomsday For Public Housing?",
	url	  : "/is-it-doomsday-for-public-housing.html",
	tags	 : ["CAC", "CHA", "Chicago", "Chicago Housing Authority", "january february 2004 issue", "mixed-income neighborhoods", "Plan for Transformation", "public housing", "redevelopment", "relocation", "Relocation Rights Contract"],
	},
	
	{
	title	: "Residents Turn up the Heat on CHA",
	url	  : "/residents-turn-up-the-heat-on-cha.html",
	tags	 : ["Cabrini-Green", "CHA", "Chicago", "H.J. Russell", "heating", "january february 2004 issue", "living conditions", "management", "public housing", "public housing residents", "relocation"],
	},
	
	{
	title	: "Clock Ticking for HOPE VI Projects",
	url	  : "/clock-ticking-for-hope-vi-projects.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "demolition", "funding", "HOPE VI", "HUD", "january february 2004 issue", "mixed-income neighborhoods", "public housing", "redevelopment"],
	},
	
	{
	title	: "Report: Residents Steered to Poor Areas",
	url	  : "/report-residents-steered-to-poor-areas.html",
	tags	 : ["American Project", "CHA", "Chicago", "Chicago Housing Authority", "Commonwealth Edison", "Gautreaux", "january february 2004 issue", "low-income residents", "mixed income communities", "Plan for Transformation", "public housing", "redevelopment", "relocation", "Robert Taylor Homes", "Venkatesh"],
	},
	
	{
	title	: "Dear Resident",
	url	  : "/dear-resident.html",
	tags	 : ["advice", "Chicago", "evolution", "history", "may june 2003 issue", "public housing", "public housing residents"],
	},
	
	{
	title	: "Stop The Violence",
	url	  : "/stop-the-violence-7.html",
	tags	 : ["advocacy", "Beyond media", "Chicago Legal Advocacy for Incercerated Mothers", "Chicago violence", "CLAIM", "Cook County", "Cook County Jail Town Hall Meeting", "incarcerated mothers", "injustice", "may june 2003 issue", "Operation PUSH", "prison system", "prison violence"],
	},
	
	{
	title	: "A Report On Management at Ogden Courts",
	url	  : "/a-report-on-management-at-ogden-courts.html",
	tags	 : ["damages", "Good Neighbor Workshop", "home management", "living conditions", "may june 2003 issue", "ogden courts", "relocation", "repairs", "seminar"],
	},
	
	{
	title	: "CHAC An Update: 2003",
	url	  : "/chac-an-update-2003.html",
	tags	 : ["Certificate Program", "CHA", "CHAC", "Chicago Housing Authority", "eligibility", "Family Self Sufficieny Program", "FSS", "home ownership", "Home Ownership Program", "Housing Choice Voucher", "Housing Choice Voucher Program", "HUD", "may june 2003 issue", "re-structuring", "regulations", "Section 8", "Voucher Program"],
	},
	
	{
	title	: "War with Iraq: A Personal Perspective",
	url	  : "/war-with-iraq-a-personal-perspective.html",
	tags	 : ["Armed Forces", "community involvement", "employment", "Iraq War", "may june 2003 issue", "military service", "ROTC", "U.S. Navy", "warfare", "welfare"],
	},
	
	{
	title	: "Harold Ickes News",
	url	  : "/harold-ickes-news-7.html",
	tags	 : ["Chicago", "chicago youth", "E2", "Harold Ickes Homes", "may june 2003 issue", "public housing", "violence"],
	},
	
	{
	title	: "Debating Affordable Housing",
	url	  : "/debating-affordable-housing.html",
	tags	 : ["affordable housing", "Chicago", "Chicago City Council", "Chicago public housing", "may june 2003 issue", "Mayor Richard M. Daley", "Toni Preckwinkle"],
	},
	
	{
	title	: "Lathrop Homes News",
	url	  : "/lathrop-homes-news.html",
	tags	 : ["blackout", "CHA", "Chicago", "Chicago Housing Authority", "energy issues", "Lathrop Homes", "maintenance", "may june 2003 issue"],
	},
	
	{
	title	: "Thomas Sullivan Report Update",
	url	  : "/thomas-sullivan-report-update.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "Housing Choice Vouchers", "may june 2003 issue", "Plan for Transformation", "public housing", "recommendations", "relocation", "Thomas Sullivan"],
	},
	
	{
	title	: "Making CHA Accessible",
	url	  : "/making-cha-accessible.html",
	tags	 : ["Access Living", "accessibility", "advocacy", "CHA", "Chicago disabled", "Chicago Housing Authority", "empowerment", "fair housing act", "Henry Horner Homes", "housing requirements", "may june 2003 issue", "public housing"],
	},
	
	{
	title	: "The Shocking Truth about CHA",
	url	  : "/the-shocking-truth-about-cha.html",
	tags	 : ["CHA electricty", "Chicago", "Chicago Housing Authority", "Chicago public housing", "Commonwealth Edison", "energy issues", "Housing Choice Voucher", "may june 2003 issue", "mixed income communities", "non-lease compliant", "public housing", "relocation", "Robert Taylor Homes"],
	},
	
	{
	title	: "Homeless Not Hopeless",
	url	  : "/homeless-not-hopeless.html",
	tags	 : ["affordable housing", "CHA", "Chicago", "Chicago homelessness", "Chicago Housing Authority", "Housing Choice Vouchers", "may june 2003 issue", "Plan for Transformation", "public housing", "relocation", "Section 8", "unsubsidized tenants"],
	},
	
	{
	title	: "Dear Resident",
	url	  : "/dear-resident-2.html",
	tags	 : ["black history month", "community", "history", "january february 2003 issue", "relationships", "slavery", "social justice"],
	},
	
	{
	title	: "Crystal Clear Views",
	url	  : "/crystal-clear-views-9.html",
	tags	 : ["advice", "family", "homelessness", "january february 2003 issue", "Q&A", "relationships", "runaway"],
	},
	
	{
	title	: "Housing on State, City Agendas",
	url	  : "/housing-on-state-city-agendas.html",
	tags	 : ["activism", "affordable housing", "Affordable Rents for Chicago", "ARC", "Chicago", "january february 2003 issue", "Mayor Richard M. Daley", "public housing", "Toni Preckwinkle", "zoning"],
	},
	
	{
	title	: "Stop The Violence",
	url	  : "/stop-the-violence-8.html",
	tags	 : ["Chicago", "chicago youth", "health issues", "january february 2003 issue", "maintenance", "management", "Mt. sinai Hospital", "ogden courts", "renovations", "violence"],
	},
	
	{
	title	: "The New Cook County Hospital",
	url	  : "/the-new-cook-county-hospital.html",
	tags	 : ["Cook County Hospital", "healthcare", "january february 2003 issue", "John H. Stroger Jr.", "new hospital", "renovation", "technology", "transition"],
	},
	
	{
	title	: "Traveling: From Therapy to Art",
	url	  : "/traveling-from-therapy-to-art.html",
	tags	 : ["art", "Asia", "culture", "filmmaking", "january february 2003 issue", "Kathmandu", "personal story", "religious experience", "travel"],
	},
	
	{
	title	: "Representing Residents",
	url	  : "/representing-residents.html",
	tags	 : ["feedback", "january february 2003 issue", "LAC", "leadership", "Local Advisory Council", "politics", "public housing", "public housing residents", "relationships"],
	},
	
	{
	title	: "Chicago's Hottest Elections",
	url	  : "/chicagos-hottest-elections.html",
	tags	 : ["Bronzeville", "Cabrini-Green", "Dorothy Tillman", "Fourth Ward", "january february 2003 issue", "Mayor Richard M. Daley", "mayoral election", "Norman Bolden", "Pat Dowell", "platform", "political campaign", "politics", "public housing", "Rev. Paul L. Jakes", "Third Ward alderman", "Toni Preckwinkle"],
	},
	
	{
	title	: "Residents Sue CHA",
	url	  : "/residents-sue-cha.html",
	tags	 : ["CHA", "Chicago Housing Authority", "Chicago public housing", "Civil Rights Act", "displacement", "HUD", "january february 2003 issue", "lawsuit", "Plan for Transformation", "public housing residents", "relocation", "Section 8"],
	},
	
	{
	title	: "Running Out of Gas",
	url	  : "/running-out-of-gas.html",
	tags	 : ["budget", "electricity costs", "energy issues", "january february 2003 issue", "LIHEAP", "Low-Income Energy Home Assistance Program", "public housing", "public housing residents"],
	},
	
	{
	title	: "Seniors Complain About Renovations",
	url	  : "/seniors-complain-about-renovations.html",
	tags	 : ["CHA", "Chicago Housing Authority", "community disturbance", "construction", "january february 2003 issue", "renovation", "senior citizens"],
	},
	
	{
	title	: "Report Criticizes CHA Relocations",
	url	  : "/report-criticizes-cha-relocations.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "dissatisfaction", "Housing Choice Voucher", "january february 2003 issue", "mixed income communities", "Plan for Transformation", "public housing", "relocation", "Relocation Rights Contract", "Section 8", "Service Connector Program", "social service"],
	},
	
	{
	title	: "An Invasion of Privacy?",
	url	  : "/an-invasion-of-privacy.html",
	tags	 : ["CHA", "Chicago Housing Authority", "drug testing", "Fourth Amendment violation", "Holston Realty", "invasion of privacy", "january february 2003 issue", "public housing residents", "Raymond Hilliard Homes"],
	},
	
	{
	title	: "Myths and Urban Legends",
	url	  : "/myths-and-urban-legends.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "funding", "Housing Choice Voucher", "january february 2003 issue", "myths", "Plan for Transformation", "politics", "poverty", "public housing", "redevelopment", "Section 8"],
	},
	
	{
	title	: "Dear Resident",
	url	  : "/dear-resident-3.html",
	tags	 : ["domestic abuse", "domestic violence", "familial issues", "november december 2002 issue", "victimization"],
	},
	
	{
	title	: "Positive Residents of the CHA",
	url	  : "/positive-residents-of-the-cha.html",
	tags	 : ["CHA", "Chicago Housing Authority", "community involvement", "LAC", "leadership", "Local Advisory Council", "november december 2002 issue", "public housing residents", "Stateway Gardens"],
	},
	
	{
	title	: "Stop The Violence",
	url	  : "/stop-the-violence-9.html",
	tags	 : ["Chicago violence", "gun violence", "law enforcement", "november december 2002 issue", "police violence", "Stop the Violence"],
	},
	
	{
	title	: "Seniors Graduate Police Class",
	url	  : "/seniors-graduate-police-class.html",
	tags	 : ["CAPS", "Chicago", "Chicago Police Department", "community involvement", "CPD", "education", "graduation ceremony", "law enforcement", "november december 2002 issue", "safety", "senior citizens", "Sinai Health System"],
	},
	
	{
	title	: "National Housing Crisis",
	url	  : "/national-housing-crisis.html",
	tags	 : ["advocacy", "affordable housing", "Center for Housing Policy", "CHA", "Chicago", "Chicago Housing Authority", "demolition", "homelessness", "housing shortage", "HUD", "mixed income communities", "National Alliance of HUD Tenants", "national housing", "november december 2002 issue", "Plan for Transformation", "public housing shortage", "relocation", "unemployment", "voucher"],
	},
	
	{
	title	: "HIV/AIDs Crisis",
	url	  : "/hivaids-crisis.html",
	tags	 : ["African Americans", "awareness", "BET", "Bronzeville", "campaign", "CHA", "Chicago Housing Authority", "health care", "HIV/AIDS", "medical issues", "november december 2002 issue", "outreach", "sexual health", "STDs"],
	},
	
	{
	title	: "Operation ABLE",
	url	  : "/operation-able.html",
	tags	 : ["ABLA", "ABLA Transitional Job Center", "CHA", "Chicago disabled", "Chicago Housing Authority", "employment", "HOPE VI", "non-profit organization", "october november 2001 issue", "One Stop Center", "Operation ABLE", "outreach", "public housing", "senior citizens", "Senior Community Service Employment program", "social service"],
	},
	
	{
	title	: "Harold Ickes Service Connectors",
	url	  : "/harold-ickes-service-connectors.html",
	tags	 : ["CHA", "Chicago Housing Authority", "Chicago public housing", "Harold Ickes Homes", "november december 2002 issue", "outreach", "public housing", "Service Connector Program", "Woodlawn"],
	},
	
	{
	title	: "Harold Ickes News",
	url	  : "/harold-ickes-news-8.html",
	tags	 : ["celebration", "CHA", "Chicago", "Chicago Housing Authority", "construction", "displacement", "Harold Ickes Homes", "National Teaching Academy of Chicago", "new school", "november december 2002 issue", "renovation", "water problem"],
	},
	
	{
	title	: "Choosing Between Food and Medicine",
	url	  : "/choosing-between-food-and-medicine.html",
	tags	 : ["Chicago", "healthcare", "Legal Assistance Foundation", "Medicaid", "medication", "october november 2001 issue"],
	},
	
	{
	title	: "Residents Deny Security Improvements",
	url	  : "/residents-deny-security-improvements.html",
	tags	 : ["CHA", "Chicago disabled", "CPD", "november december 2002 issue", "public housing security"],
	},
	
	{
	title	: "CHA Puts Resident In Storage",
	url	  : "/cha-puts-resident-in-storage.html",
	tags	 : ["CHA", "Chicago Housing Authority", "homelessness", "Housing Choice Voucher", "november december 2002 issue", "Plan for Transformation", "relocation", "Robert Taylor Homes"],
	},
	
	{
	title	: "Stop The Violence",
	url	  : "/stop-the-violence-11.html",
	tags	 : ["Chicago", "Dearborn Homes", "october november 2001 issue", "public housing", "redevelopment", "security", "September 11", "terrorism", "violence"],
	},
	
	{
	title	: "South Suburban Living",
	url	  : "/south-suburban-living.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "november december 2002 issue", "Plan for Transformation", "public housing", "relocation", "suburban"],
	},
	
	{
	title	: "Electrically Charged",
	url	  : "/electrically-charged.html",
	tags	 : ["CHA", "CHA electricity", "Chicago", "Chicago Housing Authority", "energy issues", "low-income residents", "november december 2002 issue", "Plan for Transformation", "relocation", "Relocation Rights Contract", "Robert Taylor Homes"],
	},
	
	{
	title	: "Last Day in 4525",
	url	  : "/last-day-in-4525.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "demolition", "eviction", "homelessness", "Leclaire Courts", "november december 2002 issue", "One Strike", "public housing residents", "relocation", "Robert Taylor Homes"],
	},
	
	{
	title	: "Housing Crisis in Highland Park",
	url	  : "/housing-crisis-in-highland-park.html",
	tags	 : ["affordable housing", "CHA", "Chicago Housing Authority", "demolition", "Highland Park", "Housing Choice Voucher", "housing crisis", "low-income families", "mixed-income neighborhoods", "november december 2002 issue", "Plan for Transformation", "public housing residents", "relocation", "Section 8"],
	},
	
	{
	title	: "It's Not OK to Corral at Cabrini",
	url	  : "/its-not-ok-to-corral-at-cabrini.html",
	tags	 : ["Cabrini-Green", "CHA", "Chicago", "Chicago Housing Authority", "drug use", "gun violence", "june july 2002 issue", "North Side", "public housing", "public housing residents", "Section 8"],
	},
	
	{
	title	: "Youth Violence Prevention",
	url	  : "/youth-violence-prevention.html",
	tags	 : ["chicago youth", "june july 2002 issue", "violence", "YouthPeace"],
	},
	
	{
	title	: "Harold Ickes News",
	url	  : "/harold-ickes-news-9.html",
	tags	 : ["Chicago", "community involvement", "dissatisfaction", "gun violence", "Harold Ickes Homes", "june july 2002 issue", "leaseholder", "management", "One Strike", "public housing residents", "safety", "youth"],
	},
	
	{
	title	: "The High Cost of Medicine",
	url	  : "/the-high-cost-of-medicine.html",
	tags	 : ["health care plan", "inflation", "june july 2002 issue", "Medicaid", "national healthcare", "prescriptions", "senior citizens"],
	},
	
	{
	title	: "Relocation Rights Contract",
	url	  : "/relocation-rights-contract.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "Housing Choice Voucher", "HUD", "june july 2002 issue", "mixed income communities", "redevelopment", "relocation", "Relocation Rights Contract", "Section 8"],
	},
	
	{
	title	: "Welfare Reform: Lost In Space",
	url	  : "/welfare-reform-lost-in-space.html",
	tags	 : ["1996 Welfare Reform Act", "advocacy", "dissatisfaction", "employment", "failure", "Joyce Foundation", "june july 2002 issue", "low-income families", "national welfare", "poverty", "public housing", "welfare reform"],
	},
	
	{
	title	: "Harold Ickes New School Update",
	url	  : "/harold-ickes-new-school-update.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "Chicago public housing", "community involvement", "CPS", "curriculum", "demolition", "education", "eviction", "Harold Ickes Homes", "june july 2002 issue", "National Teaching Academy of Chicago", "public housing residents"],
	},
	
	{
	title	: "Maintenance Defects at Ogden Courts",
	url	  : "/maintenance-defects-at-ogden-courts.html",
	tags	 : ["Chicago", "damages", "dissatisfaction", "june july 2002 issue", "management", "ogden courts", "public housing", "public housing maintenance", "relocation", "tenant meeting"],
	},
	
	{
	title	: "Who Speaks for Public Housing Residents?",
	url	  : "/who-speaks-for-public-housing-residents.html",
	tags	 : ["Chicago", "Coalition to Protect Public Housing", "dissatisfaction", "HUD", "Ida B Wells Homes", "june july 2002 issue", "Juneteenth", "Lathrop Homes", "leadership", "Plan for Transformation", "public housing", "public housing residents"],
	},
	
	{
	title	: "Shocking Electric Bills Update",
	url	  : "/shocking-electric-bills-update.html",
	tags	 : ["CHA", "CHA electricity", "Chicago", "Chicago Housing Authority", "Commonwealth Edison", "electric bills", "energy issues", "Housing Choice Voucher", "june july 2002 issue", "lease non-compliance", "public housing", "relocation", "Robert Taylor Homes"],
	},
	
	{
	title	: "Dear Resident",
	url	  : "/dear-resident-4.html",
	tags	 : ["communication", "community language", "interaction", "letter", "march april 2002 issue", "power of words", "relationships", "speech", "word usage"],
	},
	
	{
	title	: "Lathrop News",
	url	  : "/lathrop-news.html",
	tags	 : ["anti-violence", "Chicago", "Chicago violence", "Clean Day", "community involvement", "community update", "Lathrop Homes", "march", "march april 2002 issue", "public housing"],
	},
	
	{
	title	: "ABLA News",
	url	  : "/abla-news.html",
	tags	 : ["ABLA", "CDHS", "community involvement", "HOPE VI", "Local Advisory Council", "march april 2002 issue", "mixed-income neighborhoods", "public housing", "Revitalization Plan"],
	},
	
	{
	title	: "Stop The Violence",
	url	  : "/stop-the-violence-10.html",
	tags	 : ["Chicago violence", "CPD", "march april 2002 issue", "ogden courts", "reinvestigation", "trials", "wrongful conviction"],
	},
	
	{
	title	: "The Renowned Vernon Jordan",
	url	  : "/the-renowned-vernon-jordan.html",
	tags	 : ["accomplishment", "activism", "business", "education", "march april 2002 issue", "National Urban League", "ROTC", "Vernon Jordan"],
	},
	
	{
	title	: "Harold Ickes News",
	url	  : "/harold-ickes-news-10.html",
	tags	 : ["Chicago", "Chicago public housing", "demolition", "Harold Ickes Homes", "march april 2002 issue", "parking", "public housing", "renovation", "State Street", "vacated land"],
	},
	
	{
	title	: "Child of the Pack Saddle IX",
	url	  : "/child-of-the-pack-saddle-ix.html",
	tags	 : ["march april 2002 issue"],
	},
	
	{
	title	: "African-American Male Suicides",
	url	  : "/african-american-male-suicides.html",
	tags	 : ["African American communities", "community support", "development", "gun violence", "march april 2002 issue", "social services", "suicide", "youth violence"],
	},
	
	{
	title	: "Lathrop Homes Private Management",
	url	  : "/lathrop-homes-private-management.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "Lathrop Homes", "maintenance", "march april 2002 issue", "private management", "public housing", "resident feedback"],
	},
	
	{
	title	: "Productive Men of the CHA",
	url	  : "/productive-men-of-the-cha.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "community involvement", "LAC", "Lathrop Homes", "leadership", "Local Advisory Council", "march april 2002 issue", "public housing", "recognition"],
	},
	
	{
	title	: "CAC Prepares for Battle",
	url	  : "/cac-prepares-for-battle.html",
	tags	 : ["CHA", "Chicago Housing Authority", "HUD", "leadership", "march april 2002 issue", "public housing", "redevelopment", "relocation", "replacement housing", "Section 8"],
	},
	
	{
	title	: "Squatters Worry About Homelessness",
	url	  : "/squatters-worry-about-homelessness.html",
	tags	 : ["CHA", "Chicago homelessness", "Chicago Housing Authority", "Department of Human Services", "DHS", "eviction", "march april 2002 issue", "public housing", "Section 8", "squatting", "unemployment", "vouchers"],
	},
	
	{
	title	: "Girl X Reveals Tragic History",
	url	  : "/girl-x-reveals-tragic-history.html",
	tags	 : ["accountability", "assault", "Cabrini-Green", "CHA", "Chicago", "Chicago Housing Authority", "Girl X", "HUD", "lawsuits", "liability", "march april 2002 issue", "ownership", "public housing", "public housing resodents", "redevelopment", "security services", "settlement", "violence"],
	},
	
	{
	title	: "Ickes' Homes New Managers",
	url	  : "/ickes-homes-new-managers.html",
	tags	 : ["Chicago", "community", "financial security", "Harold Ickes Homes", "integration activity", "management", "march april 2002 issue", "public housing", "public services", "Service Connector Program", "The Woodlawn Organization", "TWO"],
	},
	
	{
	title	: "Shocking Electric Bills",
	url	  : "/shocking-electric-bills.html",
	tags	 : ["CHA", "CHA electricity", "Chicago Housing Authority", "electricity costs", "energy issues", "Housing Choice Voucher", "march april 2002 issue", "non-lease compliant", "Plan for Transformation", "relocation", "Robert Taylor Homes"],
	},
	
	{
	title	: "A 'One Strike' Battle Planned",
	url	  : "/a-one-strike-battle-planned.html",
	tags	 : ["Anti-Drug Abuse Act", "cases", "CHA", "Chicago", "civil forfeiture statute", "drug use", "eviction", "HUD", "innocent tenant defense", "march april 2002 issue", "One Strike", "Plan for Transformation", "public housing policy", "public housing residents"],
	},
	
	{
	title	: "Drug War Diagnosis",
	url	  : "/drug-war-diagnosis.html",
	tags	 : ["brutalization", "CHA", "Chicago", "Chicago drug use", "Chicago Housing Authority", "Community Alternative Policing Strategy", "crime", "drug economy", "march april 2002 issue", "murder rate", "Plan for Transformation", "public health", "public housing maintenance", "public housing residents", "relocation", "safety", "solution", "treatment", "violence", "war on drugs"],
	},
	
	{
	title	: "Remembering Leroy Watkins",
	url	  : "/remembering-leroy-watkins.html",
	tags	 : ["community involvement", "Leroy Watkins Day", "october november 2001 issue", "rememberance", "Robert Taylor Homes"],
	},
	
	{
	title	: "A Section 8 Recipient's Painful Reality",
	url	  : "/a-section-8-recipients-painful-reality.html",
	tags	 : ["CHA", "CHAC", "demolition", "eviction", "october november 2001 issue", "reevaluation", "rent increase", "Robert Taylor Homes", "Section 8", "voucher"],
	},
	
	{
	title	: "Residents Look to the Hills",
	url	  : "/residents-look-to-the-hills.html",
	tags	 : ["Chicago", "Harold Ickes Homes", "housing permanence", "infestation", "instability", "october november 2001 issue", "outreach", "public housing", "Service Connector Program", "sewer department", "Woodlawn Organization"],
	},
	
	{
	title	: "A Savory Survey",
	url	  : "/a-savory-survey.html",
	tags	 : ["CHA", "Chicago public housing", "demolition", "informative", "mixed-income neighborhoods", "october november 2001 issue", "Plan for Transformation", "relocation", "study", "Urban Institute"],
	},
	
	{
	title	: "RMCs Aim to Please?",
	url	  : "/rmcs-aim-to-please.html",
	tags	 : ["CHA", "improvement", "october november 2001 issue", "resident management", "Resident Management Corporations", "RMC"],
	},
	
	{
	title	: "A Smooth Transition For Section 8?",
	url	  : "/a-smooth-transition-for-section-8.html",
	tags	 : ["CHAC", "Chicago", "federal-assissted housing", "homelessness", "Housing Choice Voucher", "housing options", "HUD", "low-income housing", "low-income residents", "october november 2001 issue", "relocation", "Section 8", "transition", "vouchers"],
	},
	
	{
	title	: "Homelessness: A Constant American Tragedy",
	url	  : "/homelessness-a-constant-american-tragedy-2.html",
	tags	 : ["advocacy", "CHA", "Chicago homelessness", "Chicago Housing Authority", "condominiums", "conversions", "displacement", "eviction", "experiment", "homeless shelters", "housing crisis", "low-income housing", "mixed income communities", "october november 2001 issue", "One Strike Policy", "Plan for Transformation", "public housing", "redevelopment", "relocation", "Section 8", "squatting", "surge", "vouchers"],
	},
	
	{
	title	: "Dear Resident",
	url	  : "/dear-resident-5.html",
	tags	 : ["American unity", "august september 2001 issue", "disunity", "low-income representation", "pride", "public housing residents", "retribution", "September 11", "vulnerability"],
	},
	
	{
	title	: "The Terror Within",
	url	  : "/the-terror-within.html",
	tags	 : ["aftermath", "august september 2001 issue", "CHA", "families", "funding", "military service", "mothers", "public housing", "safe communities", "September 11", "sympathy", "terrorism", "U.S. Military", "War on Terrorism"],
	},
	
	{
	title	: "Child of the Pack Saddle Part VI",
	url	  : "/child-of-the-pack-saddle-part-vi.html",
	tags	 : ["august september 2001 issue"],
	},
	
	{
	title	: "Stop the Violence",
	url	  : "/stop-the-violence-12.html",
	tags	 : ["august september 2001 issue", "CHA", "Cook County", "freedom march", "Juneteenth", "Juvenile Court", "lawsuits", "testimony", "trial", "youth violence"],
	},
	
	{
	title	: "New Vincennes Plaza",
	url	  : "/new-vincennes-plaza.html",
	tags	 : ["47th Street", "august september 2001 issue", "Chicago", "community", "Creative Desgisn", "improvement", "landmark", "low-income housing", "Section 8", "Vincennes Plaza", "voucher"],
	},
	
	{
	title	: "Housing For The Disabled",
	url	  : "/housing-for-the-disabled.html",
	tags	 : ["activism", "affordable housing", "august september 2001 issue", "Chicago disabled", "Disability Rights Actions Coalition for Housing", "DRACH", "fair housing", "Fair Housing Amendments Act", "housing programs", "local housing boards"],
	},
	
	{
	title	: "Structural Justice",
	url	  : "/structural-justice.html",
	tags	 : ["affordable public housing", "august september 2001 issue", "Chicago Rehab Network", "Chicago workshops", "conference", "management", "ownership", "property", "real estate", "Valuing Affordability"],
	},
	
	{
	title	: "Seniors Quality of Life On The Rise",
	url	  : "/seniors-quality-of-life-on-the-rise.html",
	tags	 : ["august september 2001 issue", "CHA", "Chicago Housing Authority", "Chicago senior citizens", "reconstruction", "renovation"],
	},
	
	{
	title	: "CHA Seniors Protest Electric Bills",
	url	  : "/cha-seniors-protest-electric-bills.html",
	tags	 : ["Affordable Power to the People", "august september 2001 issue", "CEDA", "CHA", "CHA electricity", "Chicago Housing Authority", "energy", "energy bills", "petition", "protest marches", "senior citizens", "summer cooling program"],
	},
	
	{
	title	: "In Search Of Scattered Site Housing",
	url	  : "/in-search-of-scattered-site-housing.html",
	tags	 : ["august september 2001 issue", "CHA", "Chicago Housing Authority", "Chicago public housing", "Gautreaux", "Housing Choice Survey", "Plan for Transformation", "public housing residents", "redevelopment", "relocation", "scattered site units", "Section 8", "temporary relocation"],
	},
	
	{
	title	: "Squatters in CHA",
	url	  : "/squatters-in-cha.html",
	tags	 : ["august september 2001 issue", "CHA", "CHA squatters", "Chicago", "Chicago Housing Authority", "eviction", "lease compliance", "public housing", "relocation", "vouchers"],
	},
	
	{
	title	: "ABLA News",
	url	  : "/abla-news-2.html",
	tags	 : ["ABLA", "august september 2001 issue", "Chicago", "festival", "HOPE VI", "LAC", "Local Advisory Council", "public housing", "public housing stereotypes", "resident meetings"],
	},
	
	{
	title	: "Don't Rock The Boat",
	url	  : "/dont-rock-the-boat.html",
	tags	 : ["august september 2001 issue", "Bill Clinton", "CHA", "Chicago", "Chicago Housing Authority", "demolition", "eviction", "Lakefront Community Organization", "LCO", "One Strike", "public housing residents", "relocation"],
	},
	
	{
	title	: "CHA Family Service Connectors",
	url	  : "/cha-family-service-connectors.html",
	tags	 : ["advocacy", "august september 2001 issue", "CHA", "Chicago", "Chicago Housing Authority", "Chicago public service", "public housing residents", "Service Connector", "services"],
	},
	
	{
	title	: "Harold Ickes Homes News",
	url	  : "/harold-ickes-homes-news.html",
	tags	 : ["august september 2001 issue", "Chicago", "fire devastation", "Harold Ickes Homes", "youth"],
	},
	
	{
	title	: "SPECIAL FEATURE: City Gets CHA Funds Update",
	url	  : "/special-feature-city-gets-cha-funds-update.html",
	tags	 : ["august september 2001 issue", "CHA", "Chicago", "Chicago Housing Authority", "contract extension", "federal assistance program", "funding", "grant", "welfare"],
	},
	
	{
	title	: "Dear Resident",
	url	  : "/dear-resident-6.html",
	tags	 : ["Cabrini-Green", "CHA. Chicago Housing Authority", "gentrification", "HOPE VI", "june july 2001 issue", "lawsuit", "public housing redevelopment", "urban development"],
	},
	
	{
	title	: "Sinai Health Services",
	url	  : "/sinai-health-services.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "community", "health services", "healthcare", "june july 2001 issue", "low-income issues", "medical resources", "senior citizens", "Sinai Health System", "Sinair Senior services"],
	},
	
	{
	title	: "Stop The Violence",
	url	  : "/stop-the-violence-13.html",
	tags	 : ["Chicago", "Chicago violence", "gun violence", "june july 2001 issue", "lawsuits", "police brutality", "trial"],
	},
	
	{
	title	: "Saluting Men of the CHA",
	url	  : "/saluting-men-of-the-cha.html",
	tags	 : ["advocate", "CHA", "Chicago Housing Authority", "honor", "june july 2001 issue", "leaders", "profile"],
	},
	
	{
	title	: "Child of The Pack Saddle: Part V",
	url	  : "/child-of-the-pack-saddle-part-v.html",
	tags	 : ["june july 2001 issue"],
	},
	
	{
	title	: "The State Of Section 8",
	url	  : "/the-state-of-section-8.html",
	tags	 : ["activism", "affordable housing", "CHA", "CHAC", "Chicago", "Chicago Housing Authority", "conference", "conflict resolution", "displacement", "HUD", "interactive", "june july 2001 issue", "low-income issues", "Plan for Transformation", "public housing", "Section 8", "subsidized housing", "Tenants United For Housing", "vouchers", "workshops"],
	},
	
	{
	title	: "A Trip To The Future",
	url	  : "/a-trip-to-the-future.html",
	tags	 : ["Brinshore-Michaels", "community", "developer", "housing", "human rights", "John Hay Homes", "june july 2001 issue", "lease compliant", "Madison Park Place Homes", "mistreatment", "new development", "redevelopment", "resident involvement", "Robert Taylor Homes", "Springfield", "transparency"],
	},
	
	{
	title	: "Razing the Brooks Extension",
	url	  : "/razing-the-brooks-extension.html",
	tags	 : ["Chicago public housing", "community", "construction", "high-rise", "june july 2001 issue", "redevelopment", "relocation", "Robert Brooks Extensions", "Section 8", "Section 8 vouchers"],
	},
	
	{
	title	: "Ickes: Back To Square One",
	url	  : "/ickes-back-to-square-one.html",
	tags	 : ["Chicago", "Chicago public housing", "Harold Ickes Homes", "june july 2001 issue", "public housing", "redevelopment", "security", "vandalism"],
	},
	
	{
	title	: "Between A Rock and a Hard Place",
	url	  : "/between-a-rock-and-a-hard-place.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "housing", "inspection", "june july 2001 issue", "public housing security", "relocation", "Robert Taylor Homes", "Section 8", "security"],
	},
	
	{
	title	: "SPECIAL FEATURE: City Gets CHA Funds",
	url	  : "/special-feature-city-gets-cha-funds.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "Chicago Park District", "Chicago Police Department", "Chicago public housing", "Chicago residents", "funding", "june july 2001 issue", "programs", "public housing residents", "social services"],
	},
	
	{
	title	: "Second Chance Legislation",
	url	  : "/second-chance-legislation.html",
	tags	 : ["april 2001 issue", "Chicago", "criminal history", "criminal record", "employment", "ex-convicts", "ex-offenders", "expungement", "Illinois legislation", "politics", "second chance"],
	},
	
	{
	title	: "Stop The Violence",
	url	  : "/stop-the-violence-14.html",
	tags	 : ["april 2001 issue", "Cabrini-Green", "Chicago", "Chicago violence", "crime", "David Protess", "Girl X", "investigation", "Northwestern University", "sexual assault"],
	},
	
	{
	title	: "Youths Rally For Summer Jobs",
	url	  : "/youths-rally-for-summer-jobs.html",
	tags	 : ["april 2001 issue", "Chicago", "chicago youth", "CPS", "demonstrations", "employment", "rally", "youth jobs"],
	},
	
	{
	title	: "Child of the Pack Saddle: Part IV",
	url	  : "/child-of-the-pack-saddle-part-iv.html",
	tags	 : ["april 2001 issue"],
	},
	
	{
	title	: "High Cost of Gas",
	url	  : "/high-cost-of-gas.html",
	tags	 : ["april 2001 issue", "CHA", "CHA electricity", "Chicago", "Chicago Housing Authority", "Chicago public housing", "energy", "public housing"],
	},
	
	{
	title	: "Project Based Section-8s Threatened",
	url	  : "/project-based-section-8s-threatened.html",
	tags	 : ["april 2001 issue", "Chicago", "Chicago public housing", "housing", "Section 8"],
	},
	
	{
	title	: "Transforming CHA: Ickes New Management",
	url	  : "/transforming-cha-ickes-new-management.html",
	tags	 : ["april 2001 issue", "CHA", "Chicago", "community", "demolition", "Harold Ickes Homes", "Plan for Transformation", "private management", "public housing", "public services", "South Side"],
	},
	
	{
	title	: "The New Teachers Academy",
	url	  : "/the-new-teachers-academy.html",
	tags	 : ["april 2001 issue", "Cermak Teachers Training Academy", "Chicago", "education", "Harold Ickes Homes", "new school"],
	},
	
	{
	title	: "Transforming CHA: Chewing Up Tobacco Road",
	url	  : "/transforming-cha-chewing-up-tobacco-road.html",
	tags	 : ["47th Street", "april 2001 issue", "business", "Chicago", "displacement", "redevelopment", "relocation", "Rosenwald", "small business"],
	},
	
	{
	title	: "Transforming CHA: Senior Only Buildings",
	url	  : "/transforming-cha-senior-only-buildings.html",
	tags	 : ["april 2001 issue", "CHA", "Chicago", "Chicago disabled", "Chicago Housing Authority", "public housing", "Racine Apartments", "senior citizens", "senior residents"],
	},
	
	{
	title	: "Transforming CHA: Making Connections",
	url	  : "/transforming-cha-making-connections.html",
	tags	 : ["AmeriCorps", "april 2001 issue", "CHA", "Chicago", "Chicago Housing Authority", "Chicago public service", "City Department of Human Services", "relocation", "Service Connector"],
	},
	
	{
	title	: "Transforming CHA: Leaders Demand Changes to CHA Plan",
	url	  : "/transforming-cha-leaders-demand-changes-to-cha-plan.html",
	tags	 : ["april 2001 issue", "CHA", "Chicago", "Chicago Housing Authority", "Chicago public housing", "Gautreaux", "Plan for Transformation", "public housing", "redevelopment", "relocation", "Relocation Rights Contract"],
	},
	
	{
	title	: "Dear Resident",
	url	  : "/dear-resident-7.html",
	tags	 : ["black history month", "february 2001 issue", "millenium", "social progress", "Y2K"],
	},
	
	{
	title	: "Black History Section: A Celebrated Life",
	url	  : "/black-history-section-a-celebrated-life.html",
	tags	 : ["black history month", "centenarian", "Dr. Martin Luther King", "february 2001 issue", "Gertrude Fredd"],
	},
	
	{
	title	: "Child of the Pack Saddle Part III",
	url	  : "/child-of-the-pack-saddle-part-iii.html",
	tags	 : ["february 2001 issue"],
	},
	
	{
	title	: "Rappin' Tate The Great",
	url	  : "/rappin-tate-the-great.html",
	tags	 : ["anti-violence", "Chicago", "Chicago music", "february 2001 issue", "rap", "Rappn' Tate da Great", "Tate"],
	},
	
	{
	title	: "Altgeld Gardens' Environmental Issues",
	url	  : "/altgeld-gardens-environmental-issues.html",
	tags	 : ["Atgeld Gardens", "CHA", "Chicago Housing Authority", "demolition", "environment", "february 2001 issue", "health hazards", "industrial waste", "People for Community Recovery", "pollution", "public housing", "redevelopment", "South Side"],
	},
	
	{
	title	: "Stop The Violence",
	url	  : "/stop-the-violence-15.html",
	tags	 : ["Chicago", "corruption", "CPD", "crime", "drug offenses", "february 2001 issue", "Ida B. Wells", "lawsuits", "Robert Taylor Homes"],
	},
	
	{
	title	: "Transforming CHA: Flannery Homes Residents Keep Waiting",
	url	  : "/transforming-cha-flannery-homes-residents-keep-waiting.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "february 2001 issue", "fire", "fire devastation", "Flannery Homes", "insurance"],
	},
	
	{
	title	: "Del Prado Residents Face Uncertainty",
	url	  : "/del-prado-residents-face-uncertainty.html",
	tags	 : ["Chicago", "Del Prado", "eviction", "february 2001 issue", "housing subsidies", "HUD", "Hyde Park", "Section 8", "Tenants United For Housing", "University of Chicago"],
	},
	
	{
	title	: "Transforming CHA: Federal Housing Voucher Woes",
	url	  : "/transforming-cha-federal-housing-voucher-woes.html",
	tags	 : ["CHA", "CHAC", "Chicago Housing Authority", "february 2001 issue", "federal housing vouchers", "Robert Taylor Homes", "Section 8"],
	},
	
	{
	title	: "Transforming CHA: How To Save On Rent",
	url	  : "/transforming-cha-how-to-save-on-rent.html",
	tags	 : ["Admissions and Occupancy policy", "CHA", "Chicago", "Chicago Housing Authority", "employment", "february 2001 issue", "Income Disregard", "rent prices"],
	},
	
	{
	title	: "Transforming CHA: One Strike Woes",
	url	  : "/transforming-cha-one-strike-woes.html",
	tags	 : ["CHA", "Chicago Housing Authority", "eviction", "february 2001 issue", "housing", "One Strike"],
	},
	
	{
	title	: "Transforming CHA: Court Slam Dunks One Strike",
	url	  : "/transforming-cha-court-slam-dunks-one-strike.html",
	tags	 : ["9th Circuit Court", "Bill Clinton", "CHA", "Chicago", "Chicago Housing Authority", "Chicago public housing", "drug possession", "eviction", "february 2001 issue", "Housing Opportunities Extension Act", "HUD", "lease", "Oakland Housing Authority", "One Strike", "private management", "public housing"],
	},
	
	{
	title	: "Transforming CHA: New Lights on Dark Passage",
	url	  : "/transforming-cha-new-lights-on-dark-passage.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "february 2001 issue", "Harold Ickes Homes", "Hilliard Homes", "press conference", "public housing", "remodeling"],
	},
	
	{
	title	: "Transforming CHA: Washington Park Wants Answers",
	url	  : "/transforming-cha-washington-park-wants-answers.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "february 2001 issue", "public housing", "public housing redevelopment", "redevelopment", "South Side"],
	},
	
	{
	title	: "Transforming CHA: Bush Team Keeps CHA Waiting",
	url	  : "/transforming-cha-bush-team-keeps-cha-waiting.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "Chicago public housing", "february 2001 issue", "funding", "grant", "HOPE VI", "HUD", "NOFA", "Notices for Funding Availability", "public housing", "public housing residents", "redevelopment", "Robert Taylor Homes"],
	},
	
	{
	title	: "Cold War Echoes",
	url	  : "/cold-war-echoes.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "Chicago public housing", "demolition", "february 2001 issue", "funding", "grants", "housing", "HUD", "low-income issues", "Mayor Richard M. Daley", "Plan for Transformation", "public housing", "public housing residents", "redevelopment", "U.S. Department of Housing and Urban Development"],
	},
	
	{
	title	: "ABLA Homes Update",
	url	  : "/abla-homes-update.html",
	tags	 : ["ABLA", "August 1998 Issue", "current events", "Joseph Medill", "Joseph Medill Intermediate and Upper Grade Center", "local news", "public housing", "public housing residents"],
	},
	
	{
	title	: "Ida B. Wells Reunion",
	url	  : "/ida-b-wells-reunion.html",
	tags	 : ["August 1998 Issue", "celebration", "CHA", "CHA Alumni Association", "Chicago", "Chicago Housing Authority", "community involvement", "Ida B. Wells", "public housing", "public housing residents", "reunion"],
	},
	
	{
	title	: "Hi Ho Dobbin Away",
	url	  : "/hi-ho-dobbin-away.html",
	tags	 : ["anecdote", "August 1998 Issue", "Chicago", "Levy Center"],
	},
	
	{
	title	: "HUD Head: CHA Off Troubled List",
	url	  : "/hud-head-cha-off-troubled-list.html",
	tags	 : ["August 1998 Issue", "CHA", "Chicago", "Chicago Housing Authority", "control", "HUD", "management", "Public Housing Management Assessment Program", "rating", "Troubled Housing Authorities"],
	},
	
	{
	title	: "All Things Old and New at Harold Ickes Homes",
	url	  : "/all-things-old-and-new.html",
	tags	 : ["August 1998 Issue", "change", "Chicago", "Harold Ickes Homes", "public housing", "public housing residents", "renovation", "revitalization"],
	},
	
	{
	title	: "Dear Resident",
	url	  : "/dear-resident-12.html",
	tags	 : ["advice", "athletics", "August 1998 Issue", "Chicago", "chicago public schools", "community involvement", "CPS", "education", "Options for Knowledge Program", "priorities"],
	},
	
	{
	title	: "Lathrop Homes News",
	url	  : "/lathrop-homes-news-2.html",
	tags	 : ["August 1998 Issue", "Chicago", "community involvement", "community news", "construction", "current events", "Lathrop Homes", "public housing", "Resident Organizations"],
	},
	
	{
	title	: "Flannery Homes/Orchard Park Update",
	url	  : "/flannery-homesorchard-park-update.html",
	tags	 : ["August 1998 Issue", "Chicago", "community involvement", "current events", "Flannery Homes", "living conditions", "maintenance", "management", "news", "Orchard Park", "public housing"],
	},
	
	{
	title	: "Cabrini Cliffhanger",
	url	  : "/cabrini-cliffhanger.html",
	tags	 : ["August 1998 Issue", "Cabrini-Green", "Chicago", "demolition", "Habitat Company", "Halsted", "Near North", "public housing", "redevelopment"],
	},
	
	{
	title	: "RJ Visits Miami/Dade Housing Authority",
	url	  : "/rj-visits-miamidade-housing-authority.html",
	tags	 : ["August 1998 Issue", "CHA", "Chicago Housing Authority", "diversity", "Haley Sofge", "Latino community", "Latino residents", "Miami/Dade Housing Agency", "public housing", "public housing residents"],
	},
	
	{
	title	: "New Facility for Scattered Sites",
	url	  : "/new-facility-for-scattered-sites.html",
	tags	 : ["August 1998 Issue", "Chicago", "community involvement", "Hispanic Housing Development Corporation", "Latino community", "Scattered Sites North Central program"],
	},
	
	{
	title	: "Stop The Violence",
	url	  : "/stop-the-violence-18.html",
	tags	 : ["August 1998 Issue", "CAPS", "CHA", "CHA Police Department", "Chicago", "Chicago Housing Authority", "Community Alternative Policing Strategies", "education", "housing conditions", "lock down", "public housing"],
	},
	
	{
	title	: "Access Report",
	url	  : "/access-report-3.html",
	tags	 : ["accessibility", "August 1998 Issue", "CHA", "Chicago", "Chicago Housing Authority", "Cook-Dupage Transportation", "CTA Paratransit Operations", "disabled community", "senior citizens", "transportation"],
	},
	
	{
	title	: "Altgeld Gardens Report",
	url	  : "/altgeld-gardens-report.html",
	tags	 : ["Altgeld Gardens", "August 1998 Issue", "Chicago", "community involvement", "current events", "news"],
	},
	
	{
	title	: "Robert Taylor: The Homes/The Man",
	url	  : "/robert-taylor-the-homesthe-man.html",
	tags	 : ["August 1998 Issue", "CHA", "Chicago", "Chicago Housing Authority", "demolition", "history", "HUD", "mixed income communities", "public housing", "public housing residents", "racial issues", "Robert Rochan Taylor", "Robert Taylor Homes"],
	},
	
	{
	title	: "Dear Resident",
	url	  : "/dear-resident-9.html",
	tags	 : ["advice", "Chicago", "community", "Dear Resident", "health", "January 1998 Issue", "letter", "perseverence", "public housing"],
	},
	
	{
	title	: "Stop the Violence",
	url	  : "/stop-the-violence-16.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "Citizens Review Board", "community involvement", "crime", "Crime Victims Bureau", "gun violence", "January 1998 Issue", "public housing", "public housing residents", "violence"],
	},
	
	{
	title	: "Altgeld Gardens News",
	url	  : "/altgeld-gardens-news.html",
	tags	 : ["Aldridge", "Altgeld Gardens", "Altgeld Health Center", "Chicago", "community involvement", "condolences", "health issues", "January 1998 Issue", "public housing", "public housing residents", "Thanksgiving"],
	},
	
	{
	title	: "CHA Announces First Clean Audit",
	url	  : "/cha-announces-first-clean-audit.html",
	tags	 : ["audit", "CHA", "Chicago", "Chicago Housing Authority", "finances", "financial issues", "HUD", "January 1998 Issue", "public housing", "public housing residents", "redevelopment"],
	},
	
	{
	title	: "Flannery Homes Update",
	url	  : "/flannery-homes-update.html",
	tags	 : ["Chicago", "community involvement", "festivities", "Flannery Homes", "holiday", "January 1998 Issue", "maintenance", "management", "politics", "public housing", "public housing residents", "regulations"],
	},
	
	{
	title	: "Cabrini-Green: Changes and Relocation",
	url	  : "/cabrini-green-changes-and-relocation.html",
	tags	 : ["Cabrini-Green", "CHA", "Chicago", "Chicago Housing Authority", "chicago public schools", "CPS", "gun violence", "January 1998 Issue", "Jenner Elementary School", "public housing", "public housing residents", "relocation", "Section 8"],
	},
	
	{
	title	: "REDI: A New Beginning?",
	url	  : "/redi-a-new-beginning.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "employment", "empowerment", "entrepreneurs", "January 1998 Issue", "ownership", "public housing", "public housing residents", "REDI", "Resident Employment Development Initiative"],
	},
	
	{
	title	: "ABLA Relocation Report",
	url	  : "/abla-relocation-report.html",
	tags	 : ["ABLA", "Brooks Homes", "Chicago", "January 1998 Issue", "living conditions", "Memorandum of Agreement", "public housing", "public housing residents", "rehabilitation"],
	},
	
	{
	title	: "L.A. Tenants Challenge One-Strike",
	url	  : "/l-a-tenants-challenge-one-strike.html",
	tags	 : ["ACLU", "American Civil Liberties Union", "Bill Clinton", "constitutionality", "eviction", "housing", "Housing Opportunities Extension Act", "January 1998 Issue", "lawsuit", "One Strike", "public housing", "public housing residents"],
	},
	
	{
	title	: "CHA to Buy Back Laundry Tokens",
	url	  : "/cha-to-buy-back-laundry-tokens.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "financial issues", "January 1998 Issue", "living conditions", "public housing", "public housing residents", "refunds", "senior citizens"],
	},
	
	{
	title	: "Inspector General Nabs Employees",
	url	  : "/inspector-general-nabs-employees.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "corruption", "employees", "identification", "January 1998 Issue", "Leonard Odom", "recovery of materials", "theft"],
	},
	
	{
	title	: "Access Report",
	url	  : "/access-report.html",
	tags	 : ["ADA", "Americans with Disabilities Act", "CHA", "Chicago", "Chicago Housing Authority", "Hispanic Housing Development Corporation", "January 1998 Issue", "people with disabilities", "senior citizens"],
	},
	
	{
	title	: "The Million Woman March: One Woman's View",
	url	  : "/the-million-woman-march-one-womans-view.html",
	tags	 : ["activism", "CHA", "Chicago Housing Authority", "community involvement", "empowerment", "January 1998 Issue", "Million Woman March", "Philadelphia", "women's issues"],
	},
	
	{
	title	: "The Next CHA Chairman?",
	url	  : "/the-next-cha-chairman.html",
	tags	 : ["CHA", "chairman", "Chicago", "Chicago Housing Authority", "January 1998 Issue", "leadership", "politics", "public housing"],
	},
	
	{
	title	: "Farewell, Mr. Chairman",
	url	  : "/farewell-mr-chairman.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "January 1998 Issue", "leadership", "public housing", "public housing residents", "transition"],
	},
	
	{
	title	: "The Mighty Residents of Bromley-Heath",
	url	  : "/the-mighty-residents-of-bromley-heath.html",
	tags	 : ["Boston", "Bromley Heath", "Bromley-Heath Tenant Management Corporation", "CLPHA", "community involvement", "Conference of Large Public Housing Authorities", "January 1998 Issue", "living conditions", "low-income housing", "management", "NAHRO", "National Association of Housing and Redevelopment Officials", "public housing", "public housing residents"],
	},
	
	{
	title	: "Altgeld Gardens News",
	url	  : "/altgeld-gardens-news-2.html",
	tags	 : ["Altgeld Gardens", "Chicago", "community involvement", "community news", "events", "Fall 1997 Issue", "festivities", "public housing", "Youthnet Fun Day"],
	},
	
	{
	title	: "Dear Resident",
	url	  : "/dear-resident-11.html",
	tags	 : ["advice", "beauty", "black women", "Chicago", "Fall 1997 Issue", "letter", "Million Man March", "public housing residents", "respect"],
	},
	
	{
	title	: "Section 8 Update",
	url	  : "/section-8-update.html",
	tags	 : ["applicants", "CHA", "Chicago", "Chicago Housing Authority", "construction", "Fall 1997 Issue", "Habitat Company", "Section 8 vouchers", "waiting list"],
	},
	
	{
	title	: "Chatting with Marie Billingsley",
	url	  : "/chatting-with-marie-billingsley.html",
	tags	 : ["Chicago", "community involvement", "Fall 1997 Issue", "leadership", "Marie Billingsley", "Senior south Local Advisory Council", "Walter Russell"],
	},
	
	{
	title	: "8,000 To Get Jobs Help",
	url	  : "/8000-to-get-jobs-help.html",
	tags	 : ["Department of Human Services", "education", "employment", "Fall 1997 Issue", "Illinois", "Illinois Job Advantage", "social services", "TANF", "Temporary Assistance to Needy Families", "training", "welfare"],
	},
	
	{
	title	: "Mothers Tackle Child Care Woes",
	url	  : "/mothers-tackle-child-care-woes.html",
	tags	 : ["Chicago", "child care", "Daycare Action Council", "Fall 1997 Issue", "Henry Horner Homes", "motherhood", "Parenting", "walfare", "West Haven", "working mothers"],
	},
	
	{
	title	: "Flannery Homes News",
	url	  : "/flannery-homes-news.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "community involvement", "eviction", "Fall 1997 Issue", "Flannery Homes", "news", "One Strike", "public housing", "public housing residents"],
	},
	
	{
	title	: "Happy 60th, Lathrop Homes",
	url	  : "/happy-60th-lathrop-homes.html",
	tags	 : ["4-H Club", "CHA", "Chicago Housing Authority", "community involvement", "Fall 1997 Issue", "festivities", "Lathrop Homes"],
	},
	
	{
	title	: "CHA and Latinos: Interview with Joe Shuldiner",
	url	  : "/cha-and-latinos-interview-with-joe-shuldiner.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "Fall 1997 Issue", "Latino community", "Latinos United", "lawsuit", "management", "public housing"],
	},
	
	{
	title	: "Stop the Violence II",
	url	  : "/stop-the-violence-ii.html",
	tags	 : ["Chicago", "Chicago Police Department", "community involvement", "CPD", "employment", "Fall 1997 Issue", "injuries", "mistreatment", "police brutality", "resources", "violence"],
	},
	
	{
	title	: "Schools March for Victims",
	url	  : "/schools-march-for-victims.html",
	tags	 : ["active participation", "Cabrini-Green", "Chicago", "chicago public schools", "Children First Fund", "community involvement", "CPS", "Crisis Support Fund", "Fall 1997 Issue", "fundraiser", "Girl X", "rally", "violence", "volunteers"],
	},
	
	{
	title	: "The Life of Artensa Randolph",
	url	  : "/the-life-of-artensa-randolph.html",
	tags	 : ["Artensa Randolph", "Chicago", "community involvement", "death", "eulogy", "Fall 1997 Issue", "leadership", "Mamie Bone", "rememberance"],
	},
	
	{
	title	: "When Will It End?",
	url	  : "/when-will-it-end.html",
	tags	 : ["Chicago", "crime", "danger", "destruction", "Fall 1997 Issue", "gun violence", "public housing", "youth"],
	},
	
	{
	title	: "Inner-City Truths: A Book Review",
	url	  : "/inner-city-truths-a-book-review.html",
	tags	 : ["book review", "Chicago", "David Isay", "Fall 1997 Issue", "Ida B. Wells", "LeAlan Jones", "literature", "Lloyd Newman", "Our America", "public housing", "reality"],
	},
	
	{
	title	: "Access Report",
	url	  : "/access-report-2.html",
	tags	 : ["Americans with Disabilities Act", "CHA", "Chicago", "Chicago Housing Authority", "disabilities", "Eckhart Park Greenview", "Fall 1997 Issue", "housing", "living conditions", "residents", "senior citizens"],
	},
	
	{
	title	: "A Decree But to What Degree?",
	url	  : "/a-decree-but-to-what-degree.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "civil rights", "Fall 1997 Issue", "Gautreaux Decree", "HUD", "public housing", "public housing residents", "redevelopment"],
	},
	
	{
	title	: "Andrew Cuomo: Front and Center",
	url	  : "/andrew-cuomo-front-and-center.html",
	tags	 : ["Andrew Cuomo", "CHA", "Chicago", "Chicago Housing Authority", "community", "Fall 1997 Issue", "HUD", "leadership", "Operation PUSH", "public housing", "redevelopment", "Rev. Jesse Jackson", "speech"],
	},
	
	{
	title	: "Residents Fight Vacate Orders",
	url	  : "/residents-fight-vacate-orders.html",
	tags	 : ["building maintenance", "CHA", "Chicago", "Chicago Housing Authority", "Fall 1997 Issue", "inspection", "living conditions", "public housing", "public housing residents", "relocation", "Rockwell Gardens", "Stateway Gardens", "vacancy"],
	},
	
	{
	title	: "School Reform: Which Tax?",
	url	  : "/school-reform-which-tax.html",
	tags	 : ["Chicago", "COSEC", "Council on Standards in Education and the Community", "education", "funding", "propety tax", "Public School Reform", "reform", "School Improvement Plan", "Summer 1997 Issue", "taxes"],
	},
	
	{
	title	: "Dear Resident",
	url	  : "/dear-resident-10.html",
	tags	 : ["CHA", "Chicago", "outreach", "public housing", "readership", "Residents Journal", "Summer 1997 Issue"],
	},
	
	{
	title	: "Flannery Homes Update",
	url	  : "/flannery-homes-update-2.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "Flannery Homes", "improvements", "living conditions", "management", "public housing", "public housing residents", "senior citizens", "Summer 1997 Issue"],
	},
	
	{
	title	: "Cabrini-Green Update",
	url	  : "/cabrini-green-update.html",
	tags	 : ["Cabrini-Green", "Chicago", "community", "community involvement", "displacement", "employment", "Girl X", "march", "mural", "Patrick Sykes", "public housing", "public housing residents", "rehabilitation", "security", "St. Joseph's School", "Summer 1997 Issue"],
	},
	
	{
	title	: "Protecting CHA Residents: An Interview with Artensa Randolph",
	url	  : "/protecting-cha-residents-an-interview-with-artensa-randolph.html",
	tags	 : ["Artensa Randolph", "building maintenance", "Central Advisory Council", "CHA", "Chicago", "Chicago Housing Authority", "living conditions", "management", "politics", "public housing", "public housing residents", "security", "Summer 1997 Issue"],
	},
	
	{
	title	: "Wells on the Rise",
	url	  : "/wells-on-the-rise.html",
	tags	 : ["celebration", "Chicago", "community involvement", "Ida B. Wells", "Summer 1997 Issue", "Wells Day"],
	},
	
	{
	title	: "Stop the Violence",
	url	  : "/stop-the-violence-17.html",
	tags	 : ["Chicago", "Chicago Black United Communities", "Committee Against Racism and Violence", "crime", "gun violence", "leadership", "Summer 1997 Issue", "victims", "violence"],
	},
	
	{
	title	: "Inaccessibility of CHA Developments",
	url	  : "/inaccessibility-of-cha-developments.html",
	tags	 : ["accessibility", "Americans with Disabilities Act", "CHA", "Chicago", "Chicago Department on Aging", "Chicago Housing Authority", "disabled community", "HUD", "legislation", "regulations", "senior citizens", "Summer 1997 Issue", "transportation"],
	},
	
	{
	title	: "Horner Annex Reborn",
	url	  : "/horner-annex-reborn.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "construction", "Henry Horner Homes", "HUD", "living conditions", "public housing", "public housing residents", "Summer 1997 Issue", "the Annex", "VOTE"],
	},
	
	{
	title	: "Cleaning Day on Recycling Road",
	url	  : "/cleaning-day-on-recycling-road.html",
	tags	 : ["Buy-Back Recycling Program", "CHA", "Chicago", "Chicago Housing Authority", "Clean-Up Day", "community involvement", "environmental issues", "Lathrop Homes", "public housing", "public housing residents", "recycling", "Summer 1997 Issue"],
	},
	
	{
	title	: "Replacement Housing or Replacing People",
	url	  : "/replacement-housing-or-replacing-people.html",
	tags	 : ["Chicago", "community", "Henry Horner Homes", "housing", "lottery", "public housing", "Section 8", "Summer 1997 Issue", "West Haven"],
	},
	
	{
	title	: "Safe Summer 97",
	url	  : "/safe-summer-97.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "economic development", "employment", "public housing residents", "Reach for Tomorrow", "students", "summer", "Summer 1997 Issue"],
	},
	
	{
	title	: "The Magnificent Maya Angelou",
	url	  : "/the-magnificent-maya-angelou.html",
	tags	 : ["ABLA", "Chicago", "Maya Angelou", "New Rosemont Theater", "public housing", "Summer 1997 Issue"],
	},
	
	{
	title	: "Focus On Section 8",
	url	  : "/focus-on-section-8.html",
	tags	 : ["CHA", "CHAC Inc.", "Chicago", "Chicago Housing Authority", "HUD", "inspection", "lease", "public housing", "public housing residents", "Section 8", "senior citizens", "Summer 1997 Issue", "waiting list"],
	},
	
	{
	title	: "Latinos Gain Access to Public Housing",
	url	  : "/latinos-gain-access-to-public-housing.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "discrimination", "HUD", "Latino community", "Latinos United", "lawsuit", "public housing", "public housing residents", "Summer 1997 Issue"],
	},
	
	{
	title	: "Hope Has a Way",
	url	  : "/hope-has-a-way.html",
	tags	 : ["CHA", "Chicago Housing Authority", "hope", "inspiration", "public housing residents", "Summer 1997 Issue"],
	},
	
	{
	title	: "Dear Resident",
	url	  : "/dear-resident-8.html",
	tags	 : ["Cabrini-Green", "Chicago", "Chicago Housing Authority", "community involvement", "Fall 1996 Issue", "public housing", "public housing residents", "redevelopment"],
	},
	
	{
	title	: "Last Harvest",
	url	  : "/last-harvest.html",
	tags	 : ["Building Development Plan", "CHA", "Chicago", "community", "construction", "Fall 1996 Issue", "Flannery Homes", "mixed-income housing", "Orchard Park", "public housing", "public housing residents", "senior citizens"],
	},
	
	{
	title	: "The Man Who Scared the Hell Out of Me",
	url	  : "/the-man-who-scared-the-hell-out-of-me.html",
	tags	 : ["Bill Clinton", "CHA", "Chicago public housing", "Fall 1996 Issue", "Hillary Clinton", "HUD", "U.S. Department of Housing and Urban Development"],
	},
	
	{
	title	: "A Teen's Shattered Dreams",
	url	  : "/a-teens-shattered-dreams.html",
	tags	 : ["Fall 1996 Issue", "injury", "inspiration", "personal story"],
	},
	
	{
	title	: "Seniors form new organization",
	url	  : "/seniors-form-new-organization.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "Fall 1996 Issue", "housing", "LAC", "Local Advisory Council", "senior citizens"],
	},
	
	{
	title	: "A Short History of Ida B. Wells",
	url	  : "/a-short-history-of-ida-b-wells.html",
	tags	 : ["Chicago", "community involvement", "Fall 1996 Issue", "history", "housing development", "Ida B. Wells", "origins", "public housing"],
	},
	
	{
	title	: "Your Neighborhood Policemen",
	url	  : "/your-neighborhood-policemen.html",
	tags	 : ["Chicago", "Chicago police", "community involvement", "Fall 1996 Issue", "interview", "law enforcement", "Q&A"],
	},
	
	{
	title	: "Washington Park: The Dying Hope",
	url	  : "/washington-park-the-dying-hope.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "community involvement", "construction", "demolition", "Fall 1996 Issue", "history", "Lake Front Community Organization", "Lake Front Properties", "Lake Michigan Homes", "living conditions", "public housing", "public housing residents", "redevelopment", "relocation", "Sphinx Kiosk", "Washington Park"],
	},
	
	{
	title	: "A Long Ride Home",
	url	  : "/a-long-ride-home.html",
	tags	 : ["Cabrini-Green", "CHA", "Chicago", "Chicago Housing Authority", "community involvement", "Fall 1996 Issue", "HUD", "public housing"],
	},
	
	{
	title	: "Marion...Marion Stamps",
	url	  : "/marion-marion-stamps.html",
	tags	 : ["Cabrini-Green", "CHA", "Chicago", "Chicago public housing", "community", "community involvement", "Fall 1996 Issue", "leadership", "Marion Stamps", "public housing"],
	},
	
	{
	title	: "A History of Cabrini-Green",
	url	  : "/a-history-of-cabrini-green.html",
	tags	 : ["Cabrini Homes", "Cabrini-Green", "Chicago", "construction", "development", "Fall 1996 Issue", "history", "public housing", "row houses", "William Green Homes"],
	},
	
	{
	title	: "What's Happening in ABLA?",
	url	  : "/whats-happening-in-abla.html",
	tags	 : ["ABLA", "CHA", "Chicago", "Chicago Housing Authority", "community", "consolidation", "Fall 1996 Issue", "Food Program", "HOPE VI", "LAC", "Local Advisory Council", "public housing", "public housing residents", "relocation"],
	},
	
	{
	title	: "LeClaire Courts",
	url	  : "/leclaire-courts.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "community involvement", "Fall 1996 Issue", "history", "Leclaire Courts", "management", "public housing", "public housing residents"],
	},
	
	{
	title	: "CHA Home Ownership: Wentworth Gardens",
	url	  : "/cha-home-ownership-wentworth-gardens.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "Fall 1996 Issue", "home ownership", "Home Ownership Program", "public housing", "Wentworth Gardens"],
	},
	
	{
	title	: "Mr. Robinson Goes to Washington",
	url	  : "/mr-robinson-goes-to-washington.html",
	tags	 : ["CHA", "Chicago", "Chicago Housing Authority", "conference", "Dominium", "Fall 1996 Issue", "HUD", "Kevin Marchman", "public housing", "travel", "Welfare Bill"],
	},
	
	{
	title	: "Vote '96: Conventional Colors",
	url	  : "/vote-96-conventional-colors-2.html",
	tags	 : ["Chicago", "Democratic National Convention", "Democratic party", "election", "Fall 1996 Issue", "political parties", "politics", "Rev. Jesse Jackson"],
	},
	
	{
	title	: "Vote '96: Conventional Colors",
	url	  : "/vote-96-conventional-colors.html",
	tags	 : ["Chicago", "Democratic National Convention", "discrimination", "Fall 1996 Issue", "politics"],
	}
];


var allTags = {
	"chicago public schools":[
		["LEGO History","/lego-history.html"],
		["A LEGO Store Adventure","/a-lego-store-adventure.html"],
		["What is a Perfect Community?","/a-perfect-community-2.html"],
		["A Perfect Community","/a-perfect-community.html"],
		["Christmas Toy Drive","/christmas-toy-drive.html"],
		["How to Give Back To Your Community","/how-to-give-back-to-your-community.html"],
		["Learning About the Holocaust","/learning-about-the-holocaust.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news-5.html"],
		["Am I Prepared for College?","/am-i-prepared-for-college.html"],
		["Louder Than a Bomb","/louder-than-a-bomb.html"],
		["Do Athletes Have Special Privileges?","/do-athletes-have-special-privileges.html"],
		["Experiencing the Holocaust at the Field Museum","/experiencing-the-holocaust-at-the-field-museum.html"],
		["The Holocaust","/5671.html"],
		["One Of The Greatest Men In History","/one-of-the-greatest-men-in-history.html"],
		["Do What You Need To So You Can Do What You Want To","/do-what-you-need-to-so-you-can-do-what-you-want-to.html"],
		["Interview with an International Columnist","/5623.html"],
		["ECO Youth Training Session","/eco-youth.html"],
		["Chicago Gangs and Violence: Beyond Downtown","/chicago-gangs-and-violence-beyond-downtown.html"],
		["Teenage Love: Is It Real?","/teenage-love-is-it-real.html"],
		["Eco Youth Reporters Visit Starved Rock","/eco-youth-reporters-visit-starved-rock.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news-3.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news-2.html"],
		["Meet the Real Robeson High School","/meet-the-real-robeson-high-school.html"],
		["Sit In Against School Closings","/sit-in-against-school-closings.html"],
		["Does TV Affect Children's Behavior?","/does-tv-affect-childrens-behavior.html"],
		["Beyonce is My Role Model","/beyonce-is-my-role-model.html"],
		["Hip Hop Star on the Rise","/hip-hop-star-on-the-rise.html"],
		["The Many Talents of Tony Erwin","/the-many-talents-of-tony-erwin.html"],
		["Inside the Teachers Strike","/inside-the-teachers-strike.html"],
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["Exploring After-School Programs","/exploring-after-school-programs.html"],
		["Healthy Ways to Fight Lead Poisoning","/healthy-ways-to-fight-lead-poisoning.html"],
		["Parents Protest CPS Turn-Arounds","/parents-protest-cps-turn-arounds.html"],
		["New Mandates for Chicago Public Schools","/new-mandates-for-chicago-public-schools.html"],
		["Some Lathrop Kids Get a Bus, But Not All","/some-lathrop-kids-get-a-bus-but-not-all.html"],
		["Altgeld’s New Library","/altgeld%e2%80%99s-new-library.html"],
		["Corporate Partnership Builds a Public School Playground","/corporate-partnership-builds-a-public-school-playground.html"],
		["Mayor Emanuel Booed at Budget Town Hall","/mayor-emanuel-booed-at-budget-townhall-meeting.html"],
		["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom.html"],
		["CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo.html"],
		["Special Investigation: CHA Wanted Kids’ Report Cards","/special-investigation-cha-wanted-kids%e2%80%99-report-cards.html"],
		["Youths and Sex Ed","/youths-and-sex-ed.html"],
		["Nuf Said: Will Violence Finally Stop?","/nuf-said-will-violence-finally-stop.html"],
		["Parents File Discrimination Complaint against CPS Promotion Policy for Elementary Students","/parents-file-discrimination-complaint-against-cps-promotion-policy-for-elementary-students.html"],
		["A Salute to Women Veterans","/a-salute-to-women-veterans.html"],
		["RJ Youth Instructor Discussing Teen Project with Youth Reporter","/rj-youth-instructor-discussing-teen-project-with-youth-reporter.html"],
		["A Teens View of a recent Chicago Youth Summit","/residents-journal-can-tv-show-on-a-recent-chicago-youth-summit.html"],
		["Where I Come From","/where-i-come-from.html"],
		["Born Out of Struggle (Part 1)","/born-out-of-struggle-part-1.html"],
		["Is South Shore Clean?","/is-south-shore-clean.html"],
		["Cafeteria Food","/cafeteria-food.html"],
		["CPS Fan Restrictions","/cps-fan-restrictions.html"],
		["Residents Blame CHA for School Closures","/residents-blame-cha-for-school-closures.html"],
		["Under Fire, Board Closes Schools Anyway","/under-fire-board-closes-schools-anyway.html"],
		["Sisters Form a Brotherhood","/sisters-form-a-brotherhood.html"],
		["Whose School Is It?","/whose-school-is-it.html"],
		["Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes.html"],
		["CPS Violence","/cps-violence.html"],
		["Dear Resident","/dear-resident-12.html"],
		["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation.html"],
		["Schools March for Victims","/schools-march-for-victims.html"]],
	"chicago youth":[
		["LEGO History","/lego-history.html"],
		["A LEGO Store Adventure","/a-lego-store-adventure.html"],
		["What is a Perfect Community?","/a-perfect-community-2.html"],
		["A Perfect Community","/a-perfect-community.html"],
		["Christmas Toy Drive","/christmas-toy-drive.html"],
		["How to Give Back To Your Community","/how-to-give-back-to-your-community.html"],
		["Learning About the Holocaust","/learning-about-the-holocaust.html"],
		["We The People Media ED Guest Hosts Chicago Newsroom","/we-the-people-media-ed-guest-hosts-chicago-newsroom.html"],
		["CTA Changes Keep Riders On Their Toes","/cta-changes-keep-riders-on-their-toes.html"],
		["A Truce in the War on Drugs? Part II.","/a-truce-in-the-war-on-drugs-part-ii.html"],
		["Am I Prepared for College?","/am-i-prepared-for-college.html"],
		["Louder Than a Bomb","/louder-than-a-bomb.html"],
		["Do Athletes Have Special Privileges?","/do-athletes-have-special-privileges.html"],
		["Experiencing the Holocaust at the Field Museum","/experiencing-the-holocaust-at-the-field-museum.html"],
		["The Holocaust","/5671.html"],
		["One Of The Greatest Men In History","/one-of-the-greatest-men-in-history.html"],
		["Do What You Need To So You Can Do What You Want To","/do-what-you-need-to-so-you-can-do-what-you-want-to.html"],
		["The Holocaust and Propaganda","/the-holocaust-and-propaganda.html"],
		["Interview with an International Columnist","/5623.html"],
		["ECO Youth Training Session","/eco-youth.html"],
		["Success through Self Determination","/success-through-self-determination.html"],
		["Racism in America","/racism-in-america.html"],
		["Chicago Gangs and Violence: Beyond Downtown","/chicago-gangs-and-violence-beyond-downtown.html"],
		["Teenage Love: Is It Real?","/teenage-love-is-it-real.html"],
		["What Can Drive a Person to Murder?","/what-can-drive-a-person-to-murder.html"],
		["Eco Youth Reporters Visit Starved Rock","/eco-youth-reporters-visit-starved-rock.html"],
		["My First Kayaking Trip","/my-first-kayaking-trip.html"],
		["A River Adventure","/a-river-adventure.html"],
		["Asian Carp is a Man-Made Issue","/asian-carp-is-a-man-made-issue.html"],
		["Chasing the “Blue Whale of Freshwater”","/chasing-the-blue-whale-of-freshwater.html"],
		["Meet the Real Robeson High School","/meet-the-real-robeson-high-school.html"],
		["Frack Attack in Illinois","/frack-attack-in-illinois.html"],
		["Beyonce is My Role Model","/beyonce-is-my-role-model.html"],
		["Hip Hop Star on the Rise","/hip-hop-star-on-the-rise.html"],
		["The Many Talents of Tony Erwin","/the-many-talents-of-tony-erwin.html"],
		["Chicagoans Will Fish, Contamination or Not","/chicagoans-will-fish-contamination-or-not.html"],
		["Inside the Teachers Strike","/inside-the-teachers-strike.html"],
		["Winners from the Resident Survey!","/winners-from-the-resident-survey.html"],
		["Stray Dogs in Englewood","/stray-dogs-in-englewood.html"],
		["Exploring After-School Programs","/exploring-after-school-programs.html"],
		["Learning about the world on a youth retreat","/learning-about-the-world-on-a-youth-retreat.html"],
		["Healthy Ways to Fight Lead Poisoning","/healthy-ways-to-fight-lead-poisoning.html"],
		["Altgeld’s New Library","/altgeld%e2%80%99s-new-library.html"],
		["Corporate Partnership Builds a Public School Playground","/corporate-partnership-builds-a-public-school-playground.html"],
		["Residents' Journal Reporters talking about Current Youth Articles","/residents-journal-staff-member-talking-to-an-urban-youth-international-journalism-program-student-about-her-news-reports-this-summer.html"],
		["After The Dust","/after-the-dust.html"],
		["A New Start for the Indiana Dunes","/a-new-start-for-the-indiana-dunes.html"],
		["The Fish of Lake Michigan","/the-fish-of-lake-michigan.html"],
		["Former Youth Reporter, Now an Author!","/former-youth-reporter-now-an-author.html"],
		["Lead and Coal Plants in Pilsen","/lead-and-coal-plants-in-pilsen.html"],
		["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery.html"],
		["Residents' Journal Publisher talking about an Environmental Project for Youth","/residents-journal-publisher-talking-about-an-environmental-project-for-youth.html"],
		["Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell.html"],
		["My trip to Paris","/my-trip-to-paris.html"],
		["The Bow Campaign","/the-bow-campaign.html"],
		["Special Investigation: CHA Wanted Kids’ Report Cards","/special-investigation-cha-wanted-kids%e2%80%99-report-cards.html"],
		["The Garden","/the-garden.html"],
		["The Transformation of Jason Moy","/the-transformation-of-jason-moy.html"],
		["Boxing Keeps Dad's Memory Alive","/boxing-keeps-dads-memory-alive.html"],
		["Youths and Sex Ed","/youths-and-sex-ed.html"],
		["On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith.html"],
		["Cabrini-Green Residents Say Goodbye","/cabrini-green-residents-say-goodbye.html"],
		["Nuf Said: Will Violence Finally Stop?","/nuf-said-will-violence-finally-stop.html"],
		["Bowling Excursion","/bowling-excursion.html"],
		["Youths Speak Out on Violence","/youths-speak-out-on-violence.html"],
		["A Teens View of a recent Chicago Youth Summit","/residents-journal-can-tv-show-on-a-recent-chicago-youth-summit.html"],
		["From the Inside Looking Out: Bullying","/from-the-inside-looking-out-bullying.html"],
		["Robert Taylor On Line","/robert-taylor-on-line.html"],
		["CAN TV Devotes Entire Day Programming to “Stop the Violence” in the City of Chicago","/can-tv-devotes-entire-day-programming-to-stop-the-violence-in-the-city-of-chicago.html"],
		["Youths Testify for Alternative Schools","/youths-testify-for-alternative-schools.html"],
		["Obama's Visit to Howard Alternative High School","/obamas-visit-to-howard-alternative-high-school.html"],
		["Harold Ickes News","/harold-ickes-news-7.html"],
		["Stop The Violence","/stop-the-violence-8.html"],
		["Youth Violence Prevention","/youth-violence-prevention.html"],
		["Youths Rally For Summer Jobs","/youths-rally-for-summer-jobs.html"]],
	"community":[
		["LEGO History","/lego-history.html"],
		["A LEGO Store Adventure","/a-lego-store-adventure.html"],
		["A Perfect Community","/a-perfect-community.html"],
		["Christmas Toy Drive","/christmas-toy-drive.html"],
		["How to Give Back To Your Community","/how-to-give-back-to-your-community.html"],
		["Am I Prepared for College?","/am-i-prepared-for-college.html"],
		["Do Athletes Have Special Privileges?","/do-athletes-have-special-privileges.html"],
		["Interview with an International Columnist","/5623.html"],
		["ECO Youth Training Session","/eco-youth.html"],
		["What Can Drive a Person to Murder?","/what-can-drive-a-person-to-murder.html"],
		["The Invasion of the Great Lakes","/the-invasion-of-the-great-lakes.html"],
		["Asian Carp is a Man-Made Issue","/asian-carp-is-a-man-made-issue.html"],
		["Chasing the “Blue Whale of Freshwater”","/chasing-the-blue-whale-of-freshwater.html"],
		["Exploring After-School Programs","/exploring-after-school-programs.html"],
		["Memories of R. Taylor","/memories-of-r-taylor.html"],
		["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2.html"],
		["Dear Resident","/dear-resident-2.html"],
		["Ickes' Homes New Managers","/ickes-homes-new-managers.html"],
		["New Vincennes Plaza","/new-vincennes-plaza.html"],
		["Sinai Health Services","/sinai-health-services.html"],
		["A Trip To The Future","/a-trip-to-the-future.html"],
		["Razing the Brooks Extension","/razing-the-brooks-extension.html"],
		["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management.html"],
		["Dear Resident","/dear-resident-9.html"],
		["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center.html"],
		["Cabrini-Green Update","/cabrini-green-update.html"],
		["Replacement Housing or Replacing People","/replacement-housing-or-replacing-people.html"],
		["Last Harvest","/last-harvest.html"],
		["Marion...Marion Stamps","/marion-marion-stamps.html"],
		["What's Happening in ABLA?","/whats-happening-in-abla.html"]],
	"community involvement":[
		["LEGO History","/lego-history.html"],
		["A LEGO Store Adventure","/a-lego-store-adventure.html"],
		["What is a Perfect Community?","/a-perfect-community-2.html"],
		["A Perfect Community","/a-perfect-community.html"],
		["Christmas Toy Drive","/christmas-toy-drive.html"],
		["How to Give Back To Your Community","/how-to-give-back-to-your-community.html"],
		["Learning About the Holocaust","/learning-about-the-holocaust.html"],
		["CTA Changes Keep Riders On Their Toes","/cta-changes-keep-riders-on-their-toes.html"],
		["A Truce in the War on Drugs? Part I.","/5708.html"],
		["Am I Prepared for College?","/am-i-prepared-for-college.html"],
		["Do Athletes Have Special Privileges?","/do-athletes-have-special-privileges.html"],
		["Experiencing the Holocaust at the Field Museum","/experiencing-the-holocaust-at-the-field-museum.html"],
		["The Holocaust","/5671.html"],
		["One Of The Greatest Men In History","/one-of-the-greatest-men-in-history.html"],
		["Do What You Need To So You Can Do What You Want To","/do-what-you-need-to-so-you-can-do-what-you-want-to.html"],
		["Interview with an International Columnist","/5623.html"],
		["ECO Youth Training Session","/eco-youth.html"],
		["Success through Self Determination","/success-through-self-determination.html"],
		["Racism in America","/racism-in-america.html"],
		["Chicago Gangs and Violence: Beyond Downtown","/chicago-gangs-and-violence-beyond-downtown.html"],
		["What Can Drive a Person to Murder?","/what-can-drive-a-person-to-murder.html"],
		["Eco Youth Reporters Visit Starved Rock","/eco-youth-reporters-visit-starved-rock.html"],
		["The New Resident Leadership","/the-new-resident-leadership.html"],
		["My First Kayaking Trip","/my-first-kayaking-trip.html"],
		["A River Adventure","/a-river-adventure.html"],
		["Asian Carp is a Man-Made Issue","/asian-carp-is-a-man-made-issue.html"],
		["Chasing the “Blue Whale of Freshwater”","/chasing-the-blue-whale-of-freshwater.html"],
		["Oakwood Shores Update","/oakwood-shores-update.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news-2.html"],
		["The Many Talents of Tony Erwin","/the-many-talents-of-tony-erwin.html"],
		["Winners from the Resident Survey!","/winners-from-the-resident-survey.html"],
		["Exploring After-School Programs","/exploring-after-school-programs.html"],
		["Learning about the world on a youth retreat","/learning-about-the-world-on-a-youth-retreat.html"],
		["Corporate Partnership Builds a Public School Playground","/corporate-partnership-builds-a-public-school-playground.html"],
		["Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives.html"],
		["Residents' Journal Reporters talking about Current Youth Articles","/residents-journal-staff-member-talking-to-an-urban-youth-international-journalism-program-student-about-her-news-reports-this-summer.html"],
		["After The Dust","/after-the-dust.html"],
		["A New Start for the Indiana Dunes","/a-new-start-for-the-indiana-dunes.html"],
		["Former Youth Reporter, Now an Author!","/former-youth-reporter-now-an-author.html"],
		["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery.html"],
		["Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street.html"],
		["Tenants Protest New CHA School Reporting Policy","/tenants-protest-new-cha-school-reporting-policy.html"],
		["Robert Taylor On Line","/robert-taylor-on-line.html"],
		["CAN TV Devotes Entire Day Programming to “Stop the Violence” in the City of Chicago","/can-tv-devotes-entire-day-programming-to-stop-the-violence-in-the-city-of-chicago.html"],
		["A Special Tribute","/a-special-tribute.html"],
		["CHA Development News","/cha-development-news.html"],
		["Pilsen Guards Against Gentrifyers","/pilsen-guards-against-gentrifyers.html"],
		["Harold Ickes News","/harold-ickes-news-2.html"],
		["Black Metropolis National Heritage Area Project","/black-metropolis-national-heritage-area-project.html"],
		["Harold Ickes News","/harold-ickes-news-3.html"],
		["Residents: What People Want","/residents-what-people-want.html"],
		["More CHA Residents Voting Woes","/more-cha-residents-voting-woes.html"],
		["Cabrini-Green Election","/cabrini-green-election.html"],
		["Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes.html"],
		["Positive People","/positive-people.html"],
		["Positive People","/positive-people-2.html"],
		["2004 Election Focal Points","/2004-election-focal-points.html"],
		["Bronzeville Community Alert","/bronzeville-community-alert.html"],
		["Stop The Violence","/stop-the-violence-5.html"],
		["Positive People","/positive-people-3.html"],
		["Positive People","/positive-people-4.html"],
		["War with Iraq: A Personal Perspective","/war-with-iraq-a-personal-perspective.html"],
		["Positive Residents of the CHA","/positive-residents-of-the-cha.html"],
		["Seniors Graduate Police Class","/seniors-graduate-police-class.html"],
		["Harold Ickes News","/harold-ickes-news-9.html"],
		["Harold Ickes New School Update","/harold-ickes-new-school-update.html"],
		["Lathrop News","/lathrop-news.html"],
		["ABLA News","/abla-news.html"],
		["Productive Men of the CHA","/productive-men-of-the-cha.html"],
		["Remembering Leroy Watkins","/remembering-leroy-watkins.html"],
		["Ida B. Wells Reunion","/ida-b-wells-reunion.html"],
		["Dear Resident","/dear-resident-12.html"],
		["Lathrop Homes News","/lathrop-homes-news-2.html"],
		["Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update.html"],
		["New Facility for Scattered Sites","/new-facility-for-scattered-sites.html"],
		["Altgeld Gardens Report","/altgeld-gardens-report.html"],
		["Stop the Violence","/stop-the-violence-16.html"],
		["Altgeld Gardens News","/altgeld-gardens-news.html"],
		["Flannery Homes Update","/flannery-homes-update.html"],
		["The Million Woman March: One Woman's View","/the-million-woman-march-one-womans-view.html"],
		["The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath.html"],
		["Altgeld Gardens News","/altgeld-gardens-news-2.html"],
		["Chatting with Marie Billingsley","/chatting-with-marie-billingsley.html"],
		["Flannery Homes News","/flannery-homes-news.html"],
		["Happy 60th, Lathrop Homes","/happy-60th-lathrop-homes.html"],
		["Stop the Violence II","/stop-the-violence-ii.html"],
		["Schools March for Victims","/schools-march-for-victims.html"],
		["The Life of Artensa Randolph","/the-life-of-artensa-randolph.html"],
		["Cabrini-Green Update","/cabrini-green-update.html"],
		["Wells on the Rise","/wells-on-the-rise.html"],
		["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road.html"],
		["Dear Resident","/dear-resident-8.html"],
		["A Short History of Ida B. Wells","/a-short-history-of-ida-b-wells.html"],
		["Your Neighborhood Policemen","/your-neighborhood-policemen.html"],
		["Washington Park: The Dying Hope","/washington-park-the-dying-hope.html"],
		["A Long Ride Home","/a-long-ride-home.html"],
		["Marion...Marion Stamps","/marion-marion-stamps.html"],
		["LeClaire Courts","/leclaire-courts.html"]],
	"youth":[
		["LEGO History","/lego-history.html"],
		["A LEGO Store Adventure","/a-lego-store-adventure.html"],
		["What is a Perfect Community?","/a-perfect-community-2.html"],
		["A Perfect Community","/a-perfect-community.html"],
		["Christmas Toy Drive","/christmas-toy-drive.html"],
		["How to Give Back To Your Community","/how-to-give-back-to-your-community.html"],
		["Learning About the Holocaust","/learning-about-the-holocaust.html"],
		["CTA Changes Keep Riders On Their Toes","/cta-changes-keep-riders-on-their-toes.html"],
		["The Holocaust and Propaganda","/the-holocaust-and-propaganda.html"],
		["Interview with an International Columnist","/5623.html"],
		["ECO Youth Training Session","/eco-youth.html"],
		["Racism in America","/racism-in-america.html"],
		["Chicago Gangs and Violence: Beyond Downtown","/chicago-gangs-and-violence-beyond-downtown.html"],
		["What Can Drive a Person to Murder?","/what-can-drive-a-person-to-murder.html"],
		["Eco Youth Reporters Visit Starved Rock","/eco-youth-reporters-visit-starved-rock.html"],
		["My First Kayaking Trip","/my-first-kayaking-trip.html"],
		["A River Adventure","/a-river-adventure.html"],
		["The Invasion of the Great Lakes","/the-invasion-of-the-great-lakes.html"],
		["Meet the Real Robeson High School","/meet-the-real-robeson-high-school.html"],
		["Supreme Court Justice Sonia Sotomayor visits Chicago","/supreme-court-justice-sonia-sotomayor-visits-chicago.html"],
		["Honoring Dr. King's Legacy","/honoring-dr-kings-legacy.html"],
		["Chicago’s Nuclear History","/chicagos-nuclear-history.html"],
		["Preserving History and Ecology","/preserving-history-and-ecology.html"],
		["Sit In Against School Closings","/sit-in-against-school-closings.html"],
		["Why It's So Hard to End Poverty","/why-its-so-hard-to-end-poverty.html"],
		["Does TV Affect Children's Behavior?","/does-tv-affect-childrens-behavior.html"],
		["Beyonce is My Role Model","/beyonce-is-my-role-model.html"],
		["Hip Hop Star on the Rise","/hip-hop-star-on-the-rise.html"],
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["Stray Dogs in Englewood","/stray-dogs-in-englewood.html"],
		["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer.html"],
		["Learning about the world on a youth retreat","/learning-about-the-world-on-a-youth-retreat.html"],
		["Healthy Ways to Fight Lead Poisoning","/healthy-ways-to-fight-lead-poisoning.html"],
		["Corporate Partnership Builds a Public School Playground","/corporate-partnership-builds-a-public-school-playground.html"],
		["Residents' Journal Coverage of the Recent Demolition of the Last CHA Ida B. Wells Homes Buildings","/residents-journal-coverage-of-the-recent-demolition-of-the-last-cha-ida-b-wells-homes-buildings.html"],
		["Residents' Journal Reporters talking about Current Youth Articles","/residents-journal-staff-member-talking-to-an-urban-youth-international-journalism-program-student-about-her-news-reports-this-summer.html"],
		["Altgeld Gardens Tries to Stay Cool","/altgeld-gardens-tries-to-stay-cool.html"],
		["How to Deal with the Next Heat Wave","/how-to-deal-with-the-next-heat-wave.html"],
		["After The Dust","/after-the-dust.html"],
		["A Toxic Tour of Little Village","/little-village-story.html"],
		["A New Start for the Indiana Dunes","/a-new-start-for-the-indiana-dunes.html"],
		["The Fish of Lake Michigan","/the-fish-of-lake-michigan.html"],
		["Former Youth Reporter, Now an Author!","/former-youth-reporter-now-an-author.html"],
		["USDA Contest to Celebrate Success in the Summer Food Service Program","/usda-contest-to-celebrate-success-in-the-summer-food-service-program.html"],
		["Residents' Journal Editor-in-chief talking about Summer Youth Employment","/residents-journal-editor-in-chief-talking-about-summer-youth-employment.html"],
		["Residents' Journal Publisher talking about an Environmental Project for Youth","/residents-journal-publisher-talking-about-an-environmental-project-for-youth.html"],
		["Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell.html"],
		["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom.html"],
		["My trip to Paris","/my-trip-to-paris.html"],
		["A Dream Come True","/a-dream-come-true.html"],
		["The Bow Campaign","/the-bow-campaign.html"],
		["Youths and Sex Ed","/youths-and-sex-ed.html"],
		["On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith.html"],
		["Cabrini-Green Residents Say Goodbye","/cabrini-green-residents-say-goodbye.html"],
		["We The People Media's Coverage of the Chicago Mayor's Race","/we-the-people-medias-coverage-of-the-chicago-mayors-race.html"],
		["A Teens View of a recent Chicago Youth Summit","/residents-journal-can-tv-show-on-a-recent-chicago-youth-summit.html"],
		["Presidential Election Notebook","/presidential-election-notebook.html"],
		["Harold Ickes News","/harold-ickes-news-9.html"],
		["Harold Ickes Homes News","/harold-ickes-homes-news.html"],
		["When Will It End?","/when-will-it-end.html"]],
	"education":[
		["What is a Perfect Community?","/a-perfect-community-2.html"],
		["What Can Drive a Person to Murder?","/what-can-drive-a-person-to-murder.html"],
		["Does TV Affect Children's Behavior?","/does-tv-affect-childrens-behavior.html"],
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["Winners from the Resident Survey!","/winners-from-the-resident-survey.html"],
		["Exploring After-School Programs","/exploring-after-school-programs.html"],
		["Making a college visit count","/making-a-college-visit-count.html"],
		["Corporate Partnership Builds a Public School Playground","/corporate-partnership-builds-a-public-school-playground.html"],
		["Residents' Journal Publisher talking about an Environmental Project for Youth","/residents-journal-publisher-talking-about-an-environmental-project-for-youth.html"],
		["RJ Reporter talking about Youth Media Project","/rj-reporter-talking-about-youth-media-project.html"],
		["Tenants Protest New CHA School Reporting Policy","/tenants-protest-new-cha-school-reporting-policy.html"],
		["Born Out of Struggle (Part 1)","/born-out-of-struggle-part-1.html"],
		["Is South Shore Clean?","/is-south-shore-clean.html"],
		["Play Now, Pay Later","/play-now-pay-later.html"],
		["Teacher of the Month","/teacher-of-the-month.html"],
		["Residents Blame CHA for School Closures","/residents-blame-cha-for-school-closures.html"],
		["Under Fire, Board Closes Schools Anyway","/under-fire-board-closes-schools-anyway.html"],
		["Whose School Is It?","/whose-school-is-it.html"],
		["Jones vs. Tatum","/jones-vs-tatum.html"],
		["Rush vs. Jackson","/rush-vs-jackson.html"],
		["Harold Ickes News","/harold-ickes-news-2.html"],
		["Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes.html"],
		["CPS Violence","/cps-violence.html"],
		["Harold Ickes News","/harold-ickes-news-5.html"],
		["Seniors Graduate Police Class","/seniors-graduate-police-class.html"],
		["Harold Ickes New School Update","/harold-ickes-new-school-update.html"],
		["The Renowned Vernon Jordan","/the-renowned-vernon-jordan.html"],
		["The New Teachers Academy","/the-new-teachers-academy.html"],
		["Dear Resident","/dear-resident-12.html"],
		["Stop The Violence","/stop-the-violence-18.html"],
		["8,000 To Get Jobs Help","/8000-to-get-jobs-help.html"],
		["School Reform: Which Tax?","/school-reform-which-tax.html"]],
	"Black History":[
		["A Perfect Community","/a-perfect-community.html"],
		["John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp.html"]],
	"Malcolm X":[
		["A Perfect Community","/a-perfect-community.html"]],
	"Christmas":[
		["Christmas Toy Drive","/christmas-toy-drive.html"]],
	"U S Holocaust Museum":[
		["Learning About the Holocaust","/learning-about-the-holocaust.html"],
		["Experiencing the Holocaust at the Field Museum","/experiencing-the-holocaust-at-the-field-museum.html"],
		["The Holocaust","/5671.html"],
		["The Holocaust and Propaganda","/the-holocaust-and-propaganda.html"],
		["Racism in America","/racism-in-america.html"]],
	"Chicago Mayor Rahm Emanuel":[
		["We The People Media in the News","/we-the-people-media-in-the-news-5.html"],
		["We The People Media ED Guest Hosts Chicago Newsroom","/we-the-people-media-ed-guest-hosts-chicago-newsroom.html"],
		["We The People Media In The News","/we-the-people-media-in-the-news-4.html"],
		["CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls.html"],
		["Another CHA Chief Bows Out","/another-cha-chief-bows-out.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news-3.html"],
		["Inside the Teachers Strike","/inside-the-teachers-strike.html"],
		["Rally against NATO, War and Poverty","/rally-against-nato-war-and-poverty.html"],
		["Parents Protest CPS Turn-Arounds","/parents-protest-cps-turn-arounds.html"],
		["Charlotte Housing Authority Chief takes CHA Position","/charlotte-housing-authority-chief-takes-cha-position.html"],
		["Commissioner Fails to Show at Mental Health Town Hall Meeting","/commissioner-fails-to-show-at-mental-health-town-hall.html"],
		["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom.html"],
		["New Mayor Emanuel’s Road Map for Chicago’s Future","/new-mayor-emanuel%e2%80%99s-road-map-for-chicago%e2%80%99s-future.html"]],
	"Chicago Police Department":[
		["We The People Media in the News","/we-the-people-media-in-the-news-5.html"],
		["We The People Media ED Guest Hosts Chicago Newsroom","/we-the-people-media-ed-guest-hosts-chicago-newsroom.html"],
		["A Truce in the War on Drugs? Part II.","/a-truce-in-the-war-on-drugs-part-ii.html"],
		["Chicago Gangs and Violence: Beyond Downtown","/chicago-gangs-and-violence-beyond-downtown.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news-3.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news-2.html"],
		["We The People Media ED on Chicago Newsroom","/we-the-people-media-ed-on-chicago-newsroom.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news.html"],
		["Rally against NATO, War and Poverty","/rally-against-nato-war-and-poverty.html"],
		["Altgeld Tenants: Police, Cameras Not Improving Security","/altgeld-tenants-police-cameras-not-improving-security.html"],
		["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom.html"],
		["Nuf Said: Will Violence Finally Stop?","/nuf-said-will-violence-finally-stop.html"],
		["Residents' Journal Editor-in-Chief Discussing Chicago Mayoral Election and CPD Protest","/residents-journal-editor-in-chief-discussing-mayoral-election-and-cpd-protest.html"],
		["Cong. Danny Davis proposes anti-police torture legislation","/cong-danny-davis-proposes-anti-police-torture-legislation.html"],
		["Lawsuit Underway after Guilty Verdict in Burge Trial","/lawsuit-underway-after-guilty-verdict-in-burge-trial.html"],
		["Burge Victims’ Attorneys Fight Transfers","/burge-victims-attorneys-fight-transfers.html"],
		["Cops Fight Their Own Over Burge","/cops-fight-their-own-over-burge.html"],
		["The Times They Are A’Changing","/the-times-they-are-achanging.html"],
		["Harold L. Ickes Homes News","/harold-l-ickes-homes-news.html"],
		["Are CPD Contact Cards Unconstitutional?","/are-cpd-contact-cards-unconstitutional.html"],
		["Checking Chicago's War on Drugs","/checking-chicagos-war-on-drugs.html"],
		["House of Screams","/house-of-screams.html"],
		["Publisher's Box","/publishers-box.html"],
		["Deadly Moves II","/deadly-moves-ii.html"],
		["Deadly Moves - an update","/deadly-moves-an-update.html"],
		["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force.html"],
		["Deadly Moves: Troubling Development","/deadly-moves-troubling-development.html"],
		["If the Suit Fits, Who Wears It?","/if-the-suit-fits-who-wears-it.html"],
		["A Championship Victory","/a-championship-victory.html"],
		["Seniors Graduate Police Class","/seniors-graduate-police-class.html"],
		["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds.html"],
		["Stop the Violence II","/stop-the-violence-ii.html"]],
	"Chicago public housing":[
		["We The People Media in the News","/we-the-people-media-in-the-news-5.html"],
		["We The People Media ED Guest Hosts Chicago Newsroom","/we-the-people-media-ed-guest-hosts-chicago-newsroom.html"],
		["What Can Drive a Person to Murder?","/what-can-drive-a-person-to-murder.html"],
		["The New Resident Leadership","/the-new-resident-leadership.html"],
		["Remembering ABLA Homes' Deverra Beverly","/remembering-abla-homes-deverra-beverly.html"],
		["Oakwood Shores Update","/oakwood-shores-update.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news-2.html"],
		["A Protest Success Story","/a-protest-success-story.html"],
		["Tenants Protest CHA’s Plans for Lathrop","/tenants-protest-chas-plans-for-lathrop.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news.html"],
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["Black Pioneers Honored","/black-pioneers-honored.html"],
		["CHA Opens Wait List in Lincoln Square","/cha-opens-wait-list-in-lincoln-square.html"],
		["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer.html"],
		["A Message from the Resident President","/a-message-from-the-resident-president.html"],
		["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants.html"],
		["CHA's New Plan?","/chas-new-plan.html"],
		["Altgeld Tenants: Police, Cameras Not Improving Security","/altgeld-tenants-police-cameras-not-improving-security.html"],
		["Blackhawks Host CHA Kids","/blackhawks-host-cha-kids.html"],
		["Parents Protest CPS Turn-Arounds","/parents-protest-cps-turn-arounds.html"],
		["Tenants' Lawyer: CHA Drug Testing Policy Will End Up in Court","/tenants-lawyer-cha-drug-testing-policy-will-end-up-in-court.html"],
		["CHA Reopens Landmark Senior Building","/cha-reopens-landmark-senior-building.html"],
		["Some Lathrop Kids Get a Bus, But Not All","/some-lathrop-kids-get-a-bus-but-not-all.html"],
		["Is CHA Holding Vacant Apartments?","/is-cha-holding-vacant-apartments.html"],
		["Ex-Offenders Strive For Better","/ex-offenders-strive-for-better.html"],
		["Special Investigation: CHA Still Wants Kids’ Report Cards","/special-investigation-cha-still-wants-kids%e2%80%99-report-cards.html"],
		["Ida B. Wells Revisited","/ida-b-wells-revisited-2.html"],
		["Charlotte Housing Authority Chief takes CHA Position","/charlotte-housing-authority-chief-takes-cha-position.html"],
		["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha.html"],
		["Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives.html"],
		["CHA Launches Initiative to House Women Ex-Offenders","/cha-launches-initiative-to-house-women-ex-offenders.html"],
		["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom.html"],
		["CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo.html"],
		["CHA Land Remains Vacant for Over a Decade (Commentary)","/cha-land-remains-vacant-for-over-a-decade-commentary.html"],
		["Special Investigation: CHA Wanted Kids’ Report Cards","/special-investigation-cha-wanted-kids%e2%80%99-report-cards.html"],
		["An Afternoon of Good Times","/an-afternoon-of-good-times.html"],
		["Where are CHA’s Residents?","/where-are-cha%e2%80%99s-residents.html"],
		["We The People Media's Coverage of the Chicago Mayor's Race","/we-the-people-medias-coverage-of-the-chicago-mayors-race.html"],
		["Cabrini Rowhouses Update","/cabrini-rowhouses-update.html"],
		["Three Chicago Mayoral Candidates' Take on Public Housing","/1803.html"],
		["Cabrini rowhouses’ fate in jeopardy","/cabrini-rowhouses%e2%80%99-fate-in-jeopardy.html"],
		["A Third Generation’s Take on Relocation from Last Cabrini Building","/a-third-generation%e2%80%99s-take-on-relocation-from-last-cabrini-building.html"],
		["Altgeld Youth Protest Lack of Library","/altgeld-youth-protest-lack-of-library.html"],
		["Altgeld Gardens News","/altgeld-garden-news.html"],
		["Victory at Bridgeport Homes","/victory-at-bridgeport-homes.html"],
		["Debating Affordable Housing","/debating-affordable-housing.html"],
		["The Shocking Truth about CHA","/the-shocking-truth-about-cha.html"],
		["Residents Sue CHA","/residents-sue-cha.html"],
		["Harold Ickes Service Connectors","/harold-ickes-service-connectors.html"],
		["Harold Ickes New School Update","/harold-ickes-new-school-update.html"],
		["Harold Ickes News","/harold-ickes-news-10.html"],
		["A Savory Survey","/a-savory-survey.html"],
		["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing.html"],
		["Razing the Brooks Extension","/razing-the-brooks-extension.html"],
		["Ickes: Back To Square One","/ickes-back-to-square-one.html"],
		["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds.html"],
		["High Cost of Gas","/high-cost-of-gas.html"],
		["Project Based Section-8s Threatened","/project-based-section-8s-threatened.html"],
		["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan.html"],
		["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike.html"],
		["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting.html"],
		["Cold War Echoes","/cold-war-echoes.html"],
		["The Man Who Scared the Hell Out of Me","/the-man-who-scared-the-hell-out-of-me.html"],
		["Marion...Marion Stamps","/marion-marion-stamps.html"]],
	"Jesus Chuy Garcia":[
		["We The People Media in the News","/we-the-people-media-in-the-news-5.html"],
		["We The People Media ED Guest Hosts Chicago Newsroom","/we-the-people-media-ed-guest-hosts-chicago-newsroom.html"]],
	"":[
		["We The People Media on CAN TV Part II","/5820.html"],
		["Update on the Resident Survey","/update-on-the-resident-survey.html"],
		["Follow We The People Media/Residents' Journal on Twitter","/we-the-people-mediaresidents-journal-now-on-twitter.html"],
		["Residents' Journal Editor and Publisher Discussing Youth Online Articles","/residents-journal-editor-and-publisher-discussing-youth-online-articles.html"],
		["We The People Media in the News/Holiday Appeal","/we-the-people-media-in-the-newsholiday-appeal.html"],
		["Editor’s Note","/editor%e2%80%99s-note.html"],
		["New Stories from our Youth Reporters","/new-stories-from-our-youth-reporters.html"],
		["An Important Message from the Publisher","/an-important-message-from-the-publisher.html"],
		["Community Steps Up for Victim’s Family","/community-steps-up-for-victim%e2%80%99s-family.html"],
		["Leaving High School for the Real World","/leaving-high-school-for-the-real-world.html"],
		["On-Line Dangers","/on-line-dangers.html"],
		["Thoughts of Suicide","/thoughts-of-suicide.html"],
		["Senioritis","/senioritis.html"],
		["New Issue of Residents' Journal Now On Line","/new-issue-of-residents-journal-now-on-line.html"],
		["Youth hearing on schools, jobs and justice","/youth-hearing-on-schools-jobs-and-justice.html"],
		["Town hall meeting on the human right to mental health services","/town-hall-meeting-on-the-human-right-to-mental-health-services.html"],
		["CHA Holds Public Hearing: Only Two Residents Show","/cha-holds-public-hearing-only-two-residents-show.html"],
		["New Website Launched on Chicago Government Accountability","/new-website-launched-on-chicago-government-accountability.html"],
		["Chicago Defender Charities Feed the Homeless","/we-the-people-medias-new-video-site-2.html"],
		["Illinois Gov. Rod Blagojevich and Top Aide Arrested on Federal Corruption Charges","/illinois-gov-rod-blagojevich-and-top-aide-arrested-on-federal-corruption-charges.html"],
		["A Statement from President-elect Barack Obama on Current Job Losses","/a-statement-from-president-elect-barack-obama-on-current-job-losses.html"],
		["President-Elect Obama Picks Former Democratic Challenger as Secretary of Commerce","/president-elect-obama-picks-former-democratic-challenger-as-secretary-of-commerce.html"]],
	"Chicago":[
		["We The People Media ED Guest Hosts Chicago Newsroom","/we-the-people-media-ed-guest-hosts-chicago-newsroom.html"],
		["The New Resident Leadership","/the-new-resident-leadership.html"],
		["CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls.html"],
		["Another CHA Chief Bows Out","/another-cha-chief-bows-out.html"],
		["Tenants Protest CHA’s Plans for Lathrop","/tenants-protest-chas-plans-for-lathrop.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news.html"],
		["CHA Opens Public Housing Wait List for South Side Neighborhoods","/cha-opens-public-housing-wait-list-for-specific-areas.html"],
		["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1.html"],
		["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha.html"],
		["Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives.html"],
		["Historical Gallery: Barack Obama","/historical-gallery-barack-obama.html"],
		["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery.html"],
		["Residents' Journal Publisher talking about an Environmental Project for Youth","/residents-journal-publisher-talking-about-an-environmental-project-for-youth.html"],
		["Tenants Protest CHA Plans to Drug Test Them","/2644.html"],
		["The Garden","/the-garden.html"],
		["The Transformation of Jason Moy","/the-transformation-of-jason-moy.html"],
		["Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street.html"],
		["Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks.html"],
		["Ickes Homes News: The Final Curtain?","/ickes-homes-news-the-final-curtain.html"],
		["Relocation Rights Duel","/relocation-rights-duel.html"],
		["Tenants Protest New CHA School Reporting Policy","/tenants-protest-new-cha-school-reporting-policy.html"],
		["A new season of RJ TV","/a-new-season-of-rj-tv.html"],
		["A Special Tribute","/a-special-tribute.html"],
		["Whose School Is It?","/whose-school-is-it.html"],
		["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice.html"],
		["House of Screams","/house-of-screams.html"],
		["Publisher's Box","/publishers-box.html"],
		["Black History Through Performance","/black-history-through-performance.html"],
		["Stop the Violence","/stop-the-violence-2.html"],
		["CHA Development News","/cha-development-news.html"],
		["Pilsen Guards Against Gentrifyers","/pilsen-guards-against-gentrifyers.html"],
		["CHA Contracting Woes","/cha-contracting-woes.html"],
		["State Passes Support for Renters","/state-passes-support-for-renters.html"],
		["Troubling Development Update","/troubling-development-update.html"],
		["Deadly Moves II","/deadly-moves-ii.html"],
		["Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle.html"],
		["Victory at Bridgeport Homes","/victory-at-bridgeport-homes.html"],
		["Publisher's Box","/publishers-box-2.html"],
		["Harold Ickes News","/harold-ickes-news-2.html"],
		["Black Metropolis National Heritage Area Project","/black-metropolis-national-heritage-area-project.html"],
		["Senior Services 2005 and Beyond","/senior-services-2005-and-beyond.html"],
		["Tales of Lawndale Housing","/tales-of-lawndale-housing.html"],
		["Utility Problems Persist for Residents","/utility-problems-persist-for-residents.html"],
		["A Questionable Connection","/a-questionable-connection.html"],
		["Stop The Violence","/stop-the-violence-3.html"],
		["Harold Ickes News","/harold-ickes-news-3.html"],
		["Update: Zoning and Affordable Housing","/update-zoning-and-affordable-housing.html"],
		["Residents: What People Want","/residents-what-people-want.html"],
		["Presidential Election Notebook","/presidential-election-notebook.html"],
		["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections.html"],
		["A Taylor-Made Election","/a-taylor-made-election.html"],
		["More CHA Residents Voting Woes","/more-cha-residents-voting-woes.html"],
		["Wipe Out","/wipe-out.html"],
		["Cabrini-Green Election","/cabrini-green-election.html"],
		["Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes.html"],
		["Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes.html"],
		["Positive People","/positive-people.html"],
		["Senior Rehab Update","/senior-rehab-update.html"],
		["Deadly Moves - an update","/deadly-moves-an-update.html"],
		["Closure Razes Resident Hopes","/closure-razes-resident-hopes.html"],
		["The Compassionate Blues","/the-compassionate-blues.html"],
		["Chaos at the Bank of Lawndale","/chaos-at-the-bank-of-lawndale.html"],
		["Positive People","/positive-people-2.html"],
		["CPS Violence","/cps-violence.html"],
		["Stop The Violence","/stop-the-violence-4.html"],
		["Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park.html"],
		["Archer Courts: A Model Rehab","/archer-courts-a-model-rehab.html"],
		["Harold Ickes News","/harold-ickes-news-4.html"],
		["You Have Been Served","/you-have-been-served.html"],
		["Bronzeville Community Alert","/bronzeville-community-alert.html"],
		["Deadly Moves: In Too Deep","/deadly-moves-in-too-deep.html"],
		["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force.html"],
		["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves.html"],
		["Stop The Violence","/stop-the-violence-5.html"],
		["Crystal Clear Views","/crystal-clear-views-7.html"],
		["Positive People","/positive-people-3.html"],
		["Harold Ickes News","/harold-ickes-news-5.html"],
		["A Championship Victory","/a-championship-victory.html"],
		["Oops, They Did It Again","/oops-they-did-it-again.html"],
		["Stop The Violence","/stop-the-violence-6.html"],
		["Harold Ickes News","/harold-ickes-news-6.html"],
		["Positive People","/positive-people-4.html"],
		["The Price of a Political Job","/the-price-of-a-political-job.html"],
		["Altgeld Gardens Lawsuit Settlement","/altgeld-gardens-lawsuit-settlement.html"],
		["Getting to Know Rockwell","/getting-to-know-rockwell.html"],
		["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing.html"],
		["Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha.html"],
		["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects.html"],
		["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas.html"],
		["Dear Resident","/dear-resident.html"],
		["Harold Ickes News","/harold-ickes-news-7.html"],
		["Debating Affordable Housing","/debating-affordable-housing.html"],
		["Lathrop Homes News","/lathrop-homes-news.html"],
		["Thomas Sullivan Report Update","/thomas-sullivan-report-update.html"],
		["The Shocking Truth about CHA","/the-shocking-truth-about-cha.html"],
		["Homeless Not Hopeless","/homeless-not-hopeless.html"],
		["Housing on State, City Agendas","/housing-on-state-city-agendas.html"],
		["Stop The Violence","/stop-the-violence-8.html"],
		["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations.html"],
		["Myths and Urban Legends","/myths-and-urban-legends.html"],
		["Seniors Graduate Police Class","/seniors-graduate-police-class.html"],
		["National Housing Crisis","/national-housing-crisis.html"],
		["Harold Ickes News","/harold-ickes-news-8.html"],
		["Choosing Between Food and Medicine","/choosing-between-food-and-medicine.html"],
		["Stop The Violence","/stop-the-violence-11.html"],
		["South Suburban Living","/south-suburban-living.html"],
		["Electrically Charged","/electrically-charged.html"],
		["Last Day in 4525","/last-day-in-4525.html"],
		["It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini.html"],
		["Harold Ickes News","/harold-ickes-news-9.html"],
		["Relocation Rights Contract","/relocation-rights-contract.html"],
		["Harold Ickes New School Update","/harold-ickes-new-school-update.html"],
		["Maintenance Defects at Ogden Courts","/maintenance-defects-at-ogden-courts.html"],
		["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents.html"],
		["Shocking Electric Bills Update","/shocking-electric-bills-update.html"],
		["Lathrop News","/lathrop-news.html"],
		["Harold Ickes News","/harold-ickes-news-10.html"],
		["Lathrop Homes Private Management","/lathrop-homes-private-management.html"],
		["Productive Men of the CHA","/productive-men-of-the-cha.html"],
		["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history.html"],
		["Ickes' Homes New Managers","/ickes-homes-new-managers.html"],
		["A 'One Strike' Battle Planned","/a-one-strike-battle-planned.html"],
		["Drug War Diagnosis","/drug-war-diagnosis.html"],
		["Residents Look to the Hills","/residents-look-to-the-hills.html"],
		["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8.html"],
		["New Vincennes Plaza","/new-vincennes-plaza.html"],
		["Squatters in CHA","/squatters-in-cha.html"],
		["ABLA News","/abla-news-2.html"],
		["Don't Rock The Boat","/dont-rock-the-boat.html"],
		["CHA Family Service Connectors","/cha-family-service-connectors.html"],
		["Harold Ickes Homes News","/harold-ickes-homes-news.html"],
		["SPECIAL FEATURE: City Gets CHA Funds Update","/special-feature-city-gets-cha-funds-update.html"],
		["Sinai Health Services","/sinai-health-services.html"],
		["Stop The Violence","/stop-the-violence-13.html"],
		["The State Of Section 8","/the-state-of-section-8.html"],
		["Ickes: Back To Square One","/ickes-back-to-square-one.html"],
		["Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place.html"],
		["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds.html"],
		["Second Chance Legislation","/second-chance-legislation.html"],
		["Stop The Violence","/stop-the-violence-14.html"],
		["Youths Rally For Summer Jobs","/youths-rally-for-summer-jobs.html"],
		["High Cost of Gas","/high-cost-of-gas.html"],
		["Project Based Section-8s Threatened","/project-based-section-8s-threatened.html"],
		["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management.html"],
		["The New Teachers Academy","/the-new-teachers-academy.html"],
		["Transforming CHA: Chewing Up Tobacco Road","/transforming-cha-chewing-up-tobacco-road.html"],
		["Transforming CHA: Senior Only Buildings","/transforming-cha-senior-only-buildings.html"],
		["Transforming CHA: Making Connections","/transforming-cha-making-connections.html"],
		["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan.html"],
		["Rappin' Tate The Great","/rappin-tate-the-great.html"],
		["Stop The Violence","/stop-the-violence-15.html"],
		["Transforming CHA: Flannery Homes Residents Keep Waiting","/transforming-cha-flannery-homes-residents-keep-waiting.html"],
		["Del Prado Residents Face Uncertainty","/del-prado-residents-face-uncertainty.html"],
		["Transforming CHA: How To Save On Rent","/transforming-cha-how-to-save-on-rent.html"],
		["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike.html"],
		["Transforming CHA: New Lights on Dark Passage","/transforming-cha-new-lights-on-dark-passage.html"],
		["Transforming CHA: Washington Park Wants Answers","/transforming-cha-washington-park-wants-answers.html"],
		["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting.html"],
		["Cold War Echoes","/cold-war-echoes.html"],
		["Ida B. Wells Reunion","/ida-b-wells-reunion.html"],
		["Hi Ho Dobbin Away","/hi-ho-dobbin-away.html"],
		["HUD Head: CHA Off Troubled List","/hud-head-cha-off-troubled-list.html"],
		["All Things Old and New at Harold Ickes Homes","/all-things-old-and-new.html"],
		["Dear Resident","/dear-resident-12.html"],
		["Lathrop Homes News","/lathrop-homes-news-2.html"],
		["Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update.html"],
		["Cabrini Cliffhanger","/cabrini-cliffhanger.html"],
		["New Facility for Scattered Sites","/new-facility-for-scattered-sites.html"],
		["Stop The Violence","/stop-the-violence-18.html"],
		["Access Report","/access-report-3.html"],
		["Altgeld Gardens Report","/altgeld-gardens-report.html"],
		["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man.html"],
		["Dear Resident","/dear-resident-9.html"],
		["Stop the Violence","/stop-the-violence-16.html"],
		["Altgeld Gardens News","/altgeld-gardens-news.html"],
		["CHA Announces First Clean Audit","/cha-announces-first-clean-audit.html"],
		["Flannery Homes Update","/flannery-homes-update.html"],
		["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation.html"],
		["REDI: A New Beginning?","/redi-a-new-beginning.html"],
		["ABLA Relocation Report","/abla-relocation-report.html"],
		["CHA to Buy Back Laundry Tokens","/cha-to-buy-back-laundry-tokens.html"],
		["Inspector General Nabs Employees","/inspector-general-nabs-employees.html"],
		["Access Report","/access-report.html"],
		["The Next CHA Chairman?","/the-next-cha-chairman.html"],
		["Farewell, Mr. Chairman","/farewell-mr-chairman.html"],
		["Altgeld Gardens News","/altgeld-gardens-news-2.html"],
		["Dear Resident","/dear-resident-11.html"],
		["Section 8 Update","/section-8-update.html"],
		["Chatting with Marie Billingsley","/chatting-with-marie-billingsley.html"],
		["Mothers Tackle Child Care Woes","/mothers-tackle-child-care-woes.html"],
		["Flannery Homes News","/flannery-homes-news.html"],
		["CHA and Latinos: Interview with Joe Shuldiner","/cha-and-latinos-interview-with-joe-shuldiner.html"],
		["Stop the Violence II","/stop-the-violence-ii.html"],
		["Schools March for Victims","/schools-march-for-victims.html"],
		["The Life of Artensa Randolph","/the-life-of-artensa-randolph.html"],
		["When Will It End?","/when-will-it-end.html"],
		["Inner-City Truths: A Book Review","/inner-city-truths-a-book-review.html"],
		["Access Report","/access-report-2.html"],
		["A Decree But to What Degree?","/a-decree-but-to-what-degree.html"],
		["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center.html"],
		["Residents Fight Vacate Orders","/residents-fight-vacate-orders.html"],
		["School Reform: Which Tax?","/school-reform-which-tax.html"],
		["Dear Resident","/dear-resident-10.html"],
		["Flannery Homes Update","/flannery-homes-update-2.html"],
		["Cabrini-Green Update","/cabrini-green-update.html"],
		["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph.html"],
		["Wells on the Rise","/wells-on-the-rise.html"],
		["Stop the Violence","/stop-the-violence-17.html"],
		["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments.html"],
		["Horner Annex Reborn","/horner-annex-reborn.html"],
		["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road.html"],
		["Replacement Housing or Replacing People","/replacement-housing-or-replacing-people.html"],
		["Safe Summer 97","/safe-summer-97.html"],
		["The Magnificent Maya Angelou","/the-magnificent-maya-angelou.html"],
		["Focus On Section 8","/focus-on-section-8.html"],
		["Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing.html"],
		["Dear Resident","/dear-resident-8.html"],
		["Last Harvest","/last-harvest.html"],
		["Seniors form new organization","/seniors-form-new-organization.html"],
		["A Short History of Ida B. Wells","/a-short-history-of-ida-b-wells.html"],
		["Your Neighborhood Policemen","/your-neighborhood-policemen.html"],
		["Washington Park: The Dying Hope","/washington-park-the-dying-hope.html"],
		["A Long Ride Home","/a-long-ride-home.html"],
		["Marion...Marion Stamps","/marion-marion-stamps.html"],
		["A History of Cabrini-Green","/a-history-of-cabrini-green.html"],
		["What's Happening in ABLA?","/whats-happening-in-abla.html"],
		["LeClaire Courts","/leclaire-courts.html"],
		["CHA Home Ownership: Wentworth Gardens","/cha-home-ownership-wentworth-gardens.html"],
		["Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington.html"],
		["Vote '96: Conventional Colors","/vote-96-conventional-colors-2.html"],
		["Vote '96: Conventional Colors","/vote-96-conventional-colors.html"]],
	"Chicago politics":[
		["We The People Media ED Guest Hosts Chicago Newsroom","/we-the-people-media-ed-guest-hosts-chicago-newsroom.html"],
		["We The People Media ED on Chicago Newsroom","/we-the-people-media-ed-on-chicago-newsroom.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news.html"],
		["New Mayor Emanuel’s Road Map for Chicago’s Future","/new-mayor-emanuel%e2%80%99s-road-map-for-chicago%e2%80%99s-future.html"]],
	"Blue Line":[
		["CTA Changes Keep Riders On Their Toes","/cta-changes-keep-riders-on-their-toes.html"]],
	"Chicago Transit Authority":[
		["CTA Changes Keep Riders On Their Toes","/cta-changes-keep-riders-on-their-toes.html"],
		["$1 Billion for CTA","/1-billion-for-cta.html"]],
	"City Colleges":[
		["CTA Changes Keep Riders On Their Toes","/cta-changes-keep-riders-on-their-toes.html"]],
	"Red Line":[
		["CTA Changes Keep Riders On Their Toes","/cta-changes-keep-riders-on-their-toes.html"],
		["Closing the CTA Red Line","/closing-the-cta-red-line.html"]],
	"Ventra":[
		["CTA Changes Keep Riders On Their Toes","/cta-changes-keep-riders-on-their-toes.html"]],
	"CAN TV":[
		["We The People Media In The News","/we-the-people-media-in-the-news-4.html"],
		["Should Liquor Stores Be Banned in Bronzeville?","/should-liquor-stores-be-banned-in-bronzeville.html"],
		["A new season of RJ TV","/a-new-season-of-rj-tv.html"],
		["CAN TV Devotes Entire Day Programming to “Stop the Violence” in the City of Chicago","/can-tv-devotes-entire-day-programming-to-stop-the-violence-in-the-city-of-chicago.html"],
		["Publisher's Box","/publishers-box-2.html"]],
	"Hillary Clinton":[
		["We The People Media In The News","/we-the-people-media-in-the-news-4.html"],
		["The Man Who Scared the Hell Out of Me","/the-man-who-scared-the-hell-out-of-me.html"]],
	"Rahm Emanuel":[
		["We The People Media In The News","/we-the-people-media-in-the-news-4.html"],
		["Inside the Teachers Strike","/inside-the-teachers-strike.html"],
		["CHA's New Plan?","/chas-new-plan.html"],
		["$1 Billion for CTA","/1-billion-for-cta.html"],
		["Mayor Emanuel Booed at Budget Town Hall","/mayor-emanuel-booed-at-budget-townhall-meeting.html"],
		["Commissioner Fails to Show at Mental Health Town Hall Meeting","/commissioner-fails-to-show-at-mental-health-town-hall.html"],
		["Mayor Continues Search for New CHA Head","/mayor-continues-search-for-new-cha-head.html"],
		["We The People Media's Coverage of the Chicago Mayor's Race","/we-the-people-medias-coverage-of-the-chicago-mayors-race.html"],
		["Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks.html"],
		["Emanuel Removed From Ballot, Candidates’ Education Plans","/emanuel-removed-from-ballot-candidates%e2%80%99-education-plans.html"],
		["Emanuel’s Anti-Crime Plan for Chicago if elected Mayor","/emanuel%e2%80%99s-anti-crime-plan-for-chicago-if-elected-mayor.html"]],
	"crime":[
		["A Truce in the War on Drugs? Part II.","/a-truce-in-the-war-on-drugs-part-ii.html"],
		["A Truce in the War on Drugs? Part I.","/5708.html"],
		["What Can Drive a Person to Murder?","/what-can-drive-a-person-to-murder.html"],
		["CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news-2.html"],
		["Meet the Real Robeson High School","/meet-the-real-robeson-high-school.html"],
		["We The People Media ED on Chicago Newsroom","/we-the-people-media-ed-on-chicago-newsroom.html"],
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["Winners from the Resident Survey!","/winners-from-the-resident-survey.html"],
		["Stray Dogs in Englewood","/stray-dogs-in-englewood.html"],
		["New Report: Homeless Being Criminalized","/new-report-homeless-being-criminalizing.html"],
		["Local Pastor Camps out on Motel Roof to Highlight Area Violence","/local-pastor-camps-out-on-motel-roof-to-highlight-area-violence.html"],
		["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha.html"],
		["Mayor Emanuel Booed at Budget Town Hall","/mayor-emanuel-booed-at-budget-townhall-meeting.html"],
		["CHA Launches Initiative to House Women Ex-Offenders","/cha-launches-initiative-to-house-women-ex-offenders.html"],
		["Youth Activists: Juvenile Inmates Treated Like Animals.","/youth-activists-juvenile-inmates-treated-like-animals.html"],
		["Residents' Journal Editor-in-chief talking about Summer Youth Employment","/residents-journal-editor-in-chief-talking-about-summer-youth-employment.html"],
		["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom.html"],
		["Where are CHA’s Residents?","/where-are-cha%e2%80%99s-residents.html"],
		["On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith.html"],
		["Cabrini-Green Residents Say Goodbye","/cabrini-green-residents-say-goodbye.html"],
		["Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street.html"],
		["Torture Victim Reflects on Burge Sentence","/torture-victim-reflects-on-burge-sentence.html"],
		["Emanuel’s Anti-Crime Plan for Chicago if elected Mayor","/emanuel%e2%80%99s-anti-crime-plan-for-chicago-if-elected-mayor.html"],
		["Residents' Journal Reporters Share Results of Youth Surveys","/residents-journal-reporters-share-results-of-youth-surveys.html"],
		["RJ Reporter talking about Youth Media Project","/rj-reporter-talking-about-youth-media-project.html"],
		["Deadly Moves II","/deadly-moves-ii.html"],
		["Drug War Diagnosis","/drug-war-diagnosis.html"],
		["Stop The Violence","/stop-the-violence-14.html"],
		["Stop The Violence","/stop-the-violence-15.html"],
		["Stop the Violence","/stop-the-violence-16.html"],
		["When Will It End?","/when-will-it-end.html"],
		["Stop the Violence","/stop-the-violence-17.html"]],
	"Gary Indiana":[
		["A Truce in the War on Drugs? Part II.","/a-truce-in-the-war-on-drugs-part-ii.html"],
		["There's H.O.P.E. for Gary Residents","/theres-h-o-p-e-for-gary-residents.html"]],
	"U S Attorney General Eric Holder":[
		["A Truce in the War on Drugs? Part II.","/a-truce-in-the-war-on-drugs-part-ii.html"]],
	"war on drugs":[
		["A Truce in the War on Drugs? Part II.","/a-truce-in-the-war-on-drugs-part-ii.html"],
		["A Truce in the War on Drugs? Part I.","/5708.html"],
		["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force.html"],
		["Deadly Moves: Troubling Development","/deadly-moves-troubling-development.html"],
		["Drug War Diagnosis","/drug-war-diagnosis.html"]],
	"federal courts":[
		["A Truce in the War on Drugs? Part I.","/5708.html"]],
	"U S Sen Dick Durbin":[
		["A Truce in the War on Drugs? Part I.","/5708.html"]],
	"wrongful imprisonment":[
		["A Truce in the War on Drugs? Part I.","/5708.html"],
		["Wrongfully Convicted Man Files New Petition for Justice","/wrongfully-convicted-man-files-new-petition-for-justice.html"]],
	"Paul Robeson High School":[
		["Am I Prepared for College?","/am-i-prepared-for-college.html"],
		["Louder Than a Bomb","/louder-than-a-bomb.html"],
		["Chicago Gangs and Violence: Beyond Downtown","/chicago-gangs-and-violence-beyond-downtown.html"],
		["Teenage Love: Is It Real?","/teenage-love-is-it-real.html"],
		["What's So Great about Football?","/whats-so-great-about-football.html"],
		["It's Time to Focus on Bullying","/its-time-to-focus-on-bullying.html"],
		["Meet the Real Robeson High School","/meet-the-real-robeson-high-school.html"],
		["Being emo","/being-emo.html"]],
	"Endless Words":[
		["Louder Than a Bomb","/louder-than-a-bomb.html"]],
	"Louder than a Bomb":[
		["Louder Than a Bomb","/louder-than-a-bomb.html"]],
	"athletes":[
		["Do Athletes Have Special Privileges?","/do-athletes-have-special-privileges.html"]],
	"school sports":[
		["Do Athletes Have Special Privileges?","/do-athletes-have-special-privileges.html"]],
	"Field Musuem":[
		["The Holocaust","/5671.html"]],
	"Dr Martin Luther King":[
		["One Of The Greatest Men In History","/one-of-the-greatest-men-in-history.html"],
		["Black History Section: A Celebrated Life","/black-history-section-a-celebrated-life.html"]],
	"I have a dream":[
		["One Of The Greatest Men In History","/one-of-the-greatest-men-in-history.html"]],
	"sports":[
		["Do What You Need To So You Can Do What You Want To","/do-what-you-need-to-so-you-can-do-what-you-want-to.html"]],
	"McCormick Foundation":[
		["The Holocaust and Propaganda","/the-holocaust-and-propaganda.html"],
		["Interview with an International Columnist","/5623.html"],
		["ECO Youth Training Session","/eco-youth.html"],
		["Success through Self Determination","/success-through-self-determination.html"],
		["Racism in America","/racism-in-america.html"],
		["Chicago Gangs and Violence: Beyond Downtown","/chicago-gangs-and-violence-beyond-downtown.html"],
		["Teenage Love: Is It Real?","/teenage-love-is-it-real.html"],
		["Eco Youth Reporters Visit Starved Rock","/eco-youth-reporters-visit-starved-rock.html"],
		["My First Kayaking Trip","/my-first-kayaking-trip.html"],
		["Asian Carp is a Man-Made Issue","/asian-carp-is-a-man-made-issue.html"],
		["Chasing the “Blue Whale of Freshwater”","/chasing-the-blue-whale-of-freshwater.html"],
		["Frack Attack in Illinois","/frack-attack-in-illinois.html"],
		["Pilsen Gets Environmental Justice","/pilsen-gets-environmental-justice.html"],
		["Preserving History and Ecology","/preserving-history-and-ecology.html"],
		["Chicagoans Will Fish, Contamination or Not","/chicagoans-will-fish-contamination-or-not.html"],
		["Making a college visit count","/making-a-college-visit-count.html"],
		["Residents' Journal Reporters talking about Current Youth Articles","/residents-journal-staff-member-talking-to-an-urban-youth-international-journalism-program-student-about-her-news-reports-this-summer.html"],
		["A Toxic Tour of Little Village","/little-village-story.html"],
		["A New Start for the Indiana Dunes","/a-new-start-for-the-indiana-dunes.html"],
		["Shedd Aquarium Showcases Invasive Species","/shedd-aquarium-showcases-invasive-species.html"],
		["The Fish of Lake Michigan","/the-fish-of-lake-michigan.html"],
		["Little Village Toxic Tour","/little-village-toxic-tour.html"],
		["The Health Effects of Pollution in Pilsen","/the-health-effects-of-pollution-in-pilsen.html"],
		["Lead and Coal Plants in Pilsen","/lead-and-coal-plants-in-pilsen.html"],
		["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery.html"],
		["Residents' Journal Publisher talking about an Environmental Project for Youth","/residents-journal-publisher-talking-about-an-environmental-project-for-youth.html"]],
	"Propaganda":[
		["The Holocaust and Propaganda","/the-holocaust-and-propaganda.html"]],
	"environmental issues":[
		["ECO Youth Training Session","/eco-youth.html"],
		["Eco Youth Reporters Visit Starved Rock","/eco-youth-reporters-visit-starved-rock.html"],
		["My First Kayaking Trip","/my-first-kayaking-trip.html"],
		["A River Adventure","/a-river-adventure.html"],
		["Asian Carp is a Man-Made Issue","/asian-carp-is-a-man-made-issue.html"],
		["Chasing the “Blue Whale of Freshwater”","/chasing-the-blue-whale-of-freshwater.html"],
		["Frack Attack in Illinois","/frack-attack-in-illinois.html"],
		["The Altgeld Gardens Farmers Market: A Personal Perspective","/the-altgeld-gardens-farmers-market-a-personal-perspective.html"],
		["Pilsen Gets Environmental Justice","/pilsen-gets-environmental-justice.html"],
		["Chicagoans Will Fish, Contamination or Not","/chicagoans-will-fish-contamination-or-not.html"],
		["A Toxic Tour of Little Village","/little-village-story.html"],
		["A New Start for the Indiana Dunes","/a-new-start-for-the-indiana-dunes.html"],
		["Shedd Aquarium Showcases Invasive Species","/shedd-aquarium-showcases-invasive-species.html"],
		["The Fish of Lake Michigan","/the-fish-of-lake-michigan.html"],
		["Little Village Toxic Tour","/little-village-toxic-tour.html"],
		["The Health Effects of Pollution in Pilsen","/the-health-effects-of-pollution-in-pilsen.html"],
		["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery.html"],
		["Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell.html"],
		["The Garden","/the-garden.html"],
		["Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks.html"],
		["Altgeld Gardens Lawsuit Settlement","/altgeld-gardens-lawsuit-settlement.html"],
		["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road.html"]],
	"McCormick Environmental Journalism Program":[
		["ECO Youth Training Session","/eco-youth.html"],
		["Eco Youth Reporters Visit Starved Rock","/eco-youth-reporters-visit-starved-rock.html"],
		["My First Kayaking Trip","/my-first-kayaking-trip.html"],
		["A River Adventure","/a-river-adventure.html"],
		["The Invasion of the Great Lakes","/the-invasion-of-the-great-lakes.html"],
		["Asian Carp is a Man-Made Issue","/asian-carp-is-a-man-made-issue.html"],
		["Pilsen Gets Environmental Justice","/pilsen-gets-environmental-justice.html"],
		["Preserving History and Ecology","/preserving-history-and-ecology.html"],
		["Chicagoans Will Fish, Contamination or Not","/chicagoans-will-fish-contamination-or-not.html"],
		["Making a college visit count","/making-a-college-visit-count.html"],
		["A Weekend of Firsts","/a-weekend-of-firsts.html"],
		["Residents' Journal Reporters talking about Current Youth Articles","/residents-journal-staff-member-talking-to-an-urban-youth-international-journalism-program-student-about-her-news-reports-this-summer.html"],
		["A Toxic Tour of Little Village","/little-village-story.html"],
		["A New Start for the Indiana Dunes","/a-new-start-for-the-indiana-dunes.html"],
		["Shedd Aquarium Showcases Invasive Species","/shedd-aquarium-showcases-invasive-species.html"],
		["The Fish of Lake Michigan","/the-fish-of-lake-michigan.html"],
		["Little Village Toxic Tour","/little-village-toxic-tour.html"],
		["The Health Effects of Pollution in Pilsen","/the-health-effects-of-pollution-in-pilsen.html"],
		["Lead and Coal Plants in Pilsen","/lead-and-coal-plants-in-pilsen.html"],
		["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery.html"],
		["Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell.html"]],
	"DCFS":[
		["Success through Self Determination","/success-through-self-determination.html"],
		["Residents' Journal Publisher talking about Deficiencies in DCFS System","/residents-journal-publisher-talking-about-deficiencies-in-dcfs-system.html"],
		["Grandparents Raising Grandchildren","/grandparents-raising-grandchildren.html"],
		["Drug Addicts: A Childhood Life with a Mother on Drugs Part Two","/drug-addicts-a-childhood-life-with-a-mother-on-drugs-part-two.html"]],
	"Englewood":[
		["Success through Self Determination","/success-through-self-determination.html"],
		["What's So Great about Football?","/whats-so-great-about-football.html"],
		["Hip Hop Star on the Rise","/hip-hop-star-on-the-rise.html"],
		["The Many Talents of Tony Erwin","/the-many-talents-of-tony-erwin.html"],
		["Closing the CTA Red Line","/closing-the-cta-red-line.html"],
		["Healthy Ways to Fight Lead Poisoning","/healthy-ways-to-fight-lead-poisoning.html"],
		["Local Pastor Camps out on Motel Roof to Highlight Area Violence","/local-pastor-camps-out-on-motel-roof-to-highlight-area-violence.html"],
		["Mayor Emanuel Booed at Budget Town Hall","/mayor-emanuel-booed-at-budget-townhall-meeting.html"],
		["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2.html"]],
	"Anne Frank":[
		["Racism in America","/racism-in-america.html"]],
	"racism":[
		["Racism in America","/racism-in-america.html"]],
	"violence":[
		["Chicago Gangs and Violence: Beyond Downtown","/chicago-gangs-and-violence-beyond-downtown.html"],
		["The Many Talents of Tony Erwin","/the-many-talents-of-tony-erwin.html"],
		["Stray Dogs in Englewood","/stray-dogs-in-englewood.html"],
		["Mayor Emanuel Booed at Budget Town Hall","/mayor-emanuel-booed-at-budget-townhall-meeting.html"],
		["CHA Launches Initiative to House Women Ex-Offenders","/cha-launches-initiative-to-house-women-ex-offenders.html"],
		["Commissioner Fails to Show at Mental Health Town Hall Meeting","/commissioner-fails-to-show-at-mental-health-town-hall.html"],
		["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom.html"],
		["The Bow Campaign","/the-bow-campaign.html"],
		["Where are CHA’s Residents?","/where-are-cha%e2%80%99s-residents.html"],
		["Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street.html"],
		["Torture Victim Reflects on Burge Sentence","/torture-victim-reflects-on-burge-sentence.html"],
		["Nuf Said: Will Violence Finally Stop?","/nuf-said-will-violence-finally-stop.html"],
		["Marching in Washington","/marching-in-washington.html"],
		["Deadly Moves II","/deadly-moves-ii.html"],
		["Stop The Violence","/stop-the-violence-3.html"],
		["Deadly Moves - an update","/deadly-moves-an-update.html"],
		["CPS Violence","/cps-violence.html"],
		["Stop The Violence","/stop-the-violence-4.html"],
		["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2.html"],
		["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves.html"],
		["Stop The Violence","/stop-the-violence-5.html"],
		["Stop The Violence","/stop-the-violence-6.html"],
		["Harold Ickes News","/harold-ickes-news-6.html"],
		["Harold Ickes News","/harold-ickes-news-7.html"],
		["Stop The Violence","/stop-the-violence-8.html"],
		["Stop The Violence","/stop-the-violence-11.html"],
		["Youth Violence Prevention","/youth-violence-prevention.html"],
		["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history.html"],
		["Drug War Diagnosis","/drug-war-diagnosis.html"],
		["Stop the Violence","/stop-the-violence-16.html"],
		["Stop the Violence II","/stop-the-violence-ii.html"],
		["Schools March for Victims","/schools-march-for-victims.html"],
		["Stop the Violence","/stop-the-violence-17.html"]],
	"stress":[
		["What Can Drive a Person to Murder?","/what-can-drive-a-person-to-murder.html"]],
	"Starved Rock State Park":[
		["Eco Youth Reporters Visit Starved Rock","/eco-youth-reporters-visit-starved-rock.html"]],
	"Altgeld Gardens":[
		["The New Resident Leadership","/the-new-resident-leadership.html"],
		["A Protest Success Story","/a-protest-success-story.html"],
		["The Altgeld Gardens Farmers Market: A Personal Perspective","/the-altgeld-gardens-farmers-market-a-personal-perspective.html"],
		["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1.html"],
		["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants.html"],
		["Altgeld Tenants: Police, Cameras Not Improving Security","/altgeld-tenants-police-cameras-not-improving-security.html"],
		["Parents Protest CPS Turn-Arounds","/parents-protest-cps-turn-arounds.html"],
		["Ex-Offenders Strive For Better","/ex-offenders-strive-for-better.html"],
		["Altgeld’s New Library","/altgeld%e2%80%99s-new-library.html"],
		["How to Deal with the Next Heat Wave","/how-to-deal-with-the-next-heat-wave.html"],
		["My trip to Paris","/my-trip-to-paris.html"],
		["A Dream Come True","/a-dream-come-true.html"],
		["Do Students Trust Authority?","/do-students-trust-authority.html"],
		["Recycling on the South Side","/recycling-on-the-south-side.html"],
		["What We Need Now","/what-we-need-now.html"],
		["Altgeld Gardens Dentist","/altgeld-garden%e2%80%99s-dentist.html"],
		["Altgeld Gardens News","/altgeld-garden-news.html"],
		["CHA Development News","/cha-development-news.html"],
		["If the Suit Fits, Who Wears It?","/if-the-suit-fits-who-wears-it.html"],
		["Altgeld Gardens Lawsuit Settlement","/altgeld-gardens-lawsuit-settlement.html"],
		["Altgeld Gardens Report","/altgeld-gardens-report.html"],
		["Altgeld Gardens News","/altgeld-gardens-news.html"],
		["Altgeld Gardens News","/altgeld-gardens-news-2.html"]],
	"Cabrini Green":[
		["The New Resident Leadership","/the-new-resident-leadership.html"],
		["Another CHA Chief Bows Out","/another-cha-chief-bows-out.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news-2.html"],
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["Winners from the Resident Survey!","/winners-from-the-resident-survey.html"],
		["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1.html"],
		["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer.html"],
		["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants.html"],
		["Occupiers, Officials Try to Help Homeowners","/occupiers-officials-try-to-help-homeowners.html"],
		["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha.html"],
		["Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives.html"],
		["Mayor Continues Search for New CHA Head","/mayor-continues-search-for-new-cha-head.html"],
		["An Afternoon of Good Times","/an-afternoon-of-good-times.html"],
		["Where are CHA’s Residents?","/where-are-cha%e2%80%99s-residents.html"],
		["Cabrini-Green Residents Say Goodbye","/cabrini-green-residents-say-goodbye.html"],
		["CHA Board Meeting Crashed with Concerns","/cha-board-meeting-crashed-with-concerns.html"],
		["Cabrini Rowhouses Update","/cabrini-rowhouses-update.html"],
		["Cabrini rowhouses’ fate in jeopardy","/cabrini-rowhouses%e2%80%99-fate-in-jeopardy.html"],
		["A Third Generation’s Take on Relocation from Last Cabrini Building","/a-third-generation%e2%80%99s-take-on-relocation-from-last-cabrini-building.html"],
		["Residents Blame CHA for School Closures","/residents-blame-cha-for-school-closures.html"],
		["CHA Goes on the Defensive about Child's Death","/cha-goes-on-the-defensive-about-childs-death.html"],
		["Cabrini-Green Election","/cabrini-green-election.html"],
		["You Have Been Served","/you-have-been-served.html"],
		["Positive People","/positive-people-4.html"],
		["Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha.html"],
		["Chicago's Hottest Elections","/chicagos-hottest-elections.html"],
		["It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini.html"],
		["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history.html"],
		["Dear Resident","/dear-resident-6.html"],
		["Stop The Violence","/stop-the-violence-14.html"],
		["Cabrini Cliffhanger","/cabrini-cliffhanger.html"],
		["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation.html"],
		["Schools March for Victims","/schools-march-for-victims.html"],
		["Cabrini-Green Update","/cabrini-green-update.html"],
		["Dear Resident","/dear-resident-8.html"],
		["A Long Ride Home","/a-long-ride-home.html"],
		["Marion...Marion Stamps","/marion-marion-stamps.html"],
		["A History of Cabrini-Green","/a-history-of-cabrini-green.html"]],
	"CHA":[
		["The New Resident Leadership","/the-new-resident-leadership.html"],
		["CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls.html"],
		["Remembering ABLA Homes' Deverra Beverly","/remembering-abla-homes-deverra-beverly.html"],
		["Another CHA Chief Bows Out","/another-cha-chief-bows-out.html"],
		["Oakwood Shores Update","/oakwood-shores-update.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news-2.html"],
		["A Protest Success Story","/a-protest-success-story.html"],
		["Tenants Protest CHA’s Plans for Lathrop","/tenants-protest-chas-plans-for-lathrop.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news.html"],
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["Winners from the Resident Survey!","/winners-from-the-resident-survey.html"],
		["CHA Opens Wait List in Lincoln Square","/cha-opens-wait-list-in-lincoln-square.html"],
		["CHA Opens Public Housing Wait List for South Side Neighborhoods","/cha-opens-public-housing-wait-list-for-specific-areas.html"],
		["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1.html"],
		["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer.html"],
		["A Message from the Resident President","/a-message-from-the-resident-president.html"],
		["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants.html"],
		["CHA's New Plan?","/chas-new-plan.html"],
		["Altgeld Tenants: Police, Cameras Not Improving Security","/altgeld-tenants-police-cameras-not-improving-security.html"],
		["Blackhawks Host CHA Kids","/blackhawks-host-cha-kids.html"],
		["Some Lathrop Kids Get a Bus, But Not All","/some-lathrop-kids-get-a-bus-but-not-all.html"],
		["Is CHA Holding Vacant Apartments?","/is-cha-holding-vacant-apartments.html"],
		["Ex-Offenders Strive For Better","/ex-offenders-strive-for-better.html"],
		["Special Investigation: CHA Still Wants Kids’ Report Cards","/special-investigation-cha-still-wants-kids%e2%80%99-report-cards.html"],
		["Ida B. Wells Revisited","/ida-b-wells-revisited-2.html"],
		["Charlotte Housing Authority Chief takes CHA Position","/charlotte-housing-authority-chief-takes-cha-position.html"],
		["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha.html"],
		["Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives.html"],
		["Residents' Journal Coverage of the Recent Demolition of the Last CHA Ida B. Wells Homes Buildings","/residents-journal-coverage-of-the-recent-demolition-of-the-last-cha-ida-b-wells-homes-buildings.html"],
		["Residents' Journal Reporters talking about Current Youth Articles","/residents-journal-staff-member-talking-to-an-urban-youth-international-journalism-program-student-about-her-news-reports-this-summer.html"],
		["Altgeld Gardens Tries to Stay Cool","/altgeld-gardens-tries-to-stay-cool.html"],
		["How to Deal with the Next Heat Wave","/how-to-deal-with-the-next-heat-wave.html"],
		["CHA Launches Initiative to House Women Ex-Offenders","/cha-launches-initiative-to-house-women-ex-offenders.html"],
		["After The Dust","/after-the-dust.html"],
		["Remembering Ms. Amey","/remembering-ms-amey.html"],
		["Residents' Journal's Coverage of CHA Featured in Rise Magazine","/residents-journals-coverage-of-cha-featured-in-rise-magazine.html"],
		["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom.html"],
		["CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo.html"],
		["My trip to Paris","/my-trip-to-paris.html"],
		["A Dream Come True","/a-dream-come-true.html"],
		["CHA Land Remains Vacant for Over a Decade (Commentary)","/cha-land-remains-vacant-for-over-a-decade-commentary.html"],
		["Special Investigation: CHA Wanted Kids’ Report Cards","/special-investigation-cha-wanted-kids%e2%80%99-report-cards.html"],
		["Tenants Protest CHA Drug Testing Plan","/public-hearing-on-cha-drug-test-proposal.html"],
		["Tenants Protest CHA Plans to Drug Test Them","/2644.html"],
		["Residents' Journal CAN TV Show on the Opening of the Chicago Housing Authority's Family Housing Wait List","/1396.html"],
		["At CHA Mixed-Income Sites, Owners Exempt from Smoke-Free Zones","/at-cha-mixed-income-sites-owners-exempt-from-smoke-free-zones.html"],
		["Ickes Homes News: The Final Curtain?","/ickes-homes-news-the-final-curtain.html"],
		["Relocation Rights Duel","/relocation-rights-duel.html"],
		["Tenants Protest New CHA School Reporting Policy","/tenants-protest-new-cha-school-reporting-policy.html"],
		["Robert Taylor On Line","/robert-taylor-on-line.html"],
		["An Inside Out Experience","/an-inside-out-experience.html"],
		["Ickes Leader Challenges CHA CEO","/ickes-leader-challenges-cha-ceo.html"],
		["CHA Seniors Keep Waiting to Return Home","/cha-seniors-keep-waiting-to-return-home.html"],
		["CHA Goes on the Defensive about Child's Death","/cha-goes-on-the-defensive-about-childs-death.html"],
		["Lathrop Residents Want Vacant Units Occupied","/lathrop-residents-want-vacant-units-occupied.html"],
		["CHA Report: Crime Rates Not Linked to CHA Relocatees","/cha-report-crime-rates-not-linked-to-cha-relocatees.html"],
		["Penalties","/penalties.html"],
		["Lathrop Homes Targeted for Redevelopment","/lathrop-homes-targeted-for-redevelopment.html"],
		["Seniors Protest Rent Rise","/seniors-protest-rent-rise.html"],
		["Tenants Council Battles To Represent Residents","/tenants-council-battles-to-represent-residents.html"],
		["CHA New Work Rule Questioned","/cha-new-work-rule-questioned.html"],
		["Who Could Miss The Hole?","/who-could-miss-the-hole.html"],
		["Altgeld Gardens News","/altgeld-garden-news.html"],
		["Ickes and Other CHA News","/ickes-and-other-cha-news.html"],
		["CHA Development News","/cha-development-news.html"],
		["CHA Contracting Woes","/cha-contracting-woes.html"],
		["Rush vs. Jackson","/rush-vs-jackson.html"],
		["Deadly Moves II","/deadly-moves-ii.html"],
		["Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle.html"],
		["Victory at Bridgeport Homes","/victory-at-bridgeport-homes.html"],
		["Utility Problems Persist for Residents","/utility-problems-persist-for-residents.html"],
		["A Questionable Connection","/a-questionable-connection.html"],
		["Residents: What People Want","/residents-what-people-want.html"],
		["Presidential Election Notebook","/presidential-election-notebook.html"],
		["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections.html"],
		["More CHA Residents Voting Woes","/more-cha-residents-voting-woes.html"],
		["Wipe Out","/wipe-out.html"],
		["Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes.html"],
		["Positive People","/positive-people.html"],
		["Senior Rehab Update","/senior-rehab-update.html"],
		["Deadly Moves - an update","/deadly-moves-an-update.html"],
		["Closure Razes Resident Hopes","/closure-razes-resident-hopes.html"],
		["Archer Courts: A Model Rehab","/archer-courts-a-model-rehab.html"],
		["You Have Been Served","/you-have-been-served.html"],
		["Bronzeville Community Alert","/bronzeville-community-alert.html"],
		["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change.html"],
		["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force.html"],
		["Deadly Moves: Troubling Development","/deadly-moves-troubling-development.html"],
		["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2.html"],
		["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves.html"],
		["Harold Ickes News","/harold-ickes-news-5.html"],
		["If the Suit Fits, Who Wears It?","/if-the-suit-fits-who-wears-it.html"],
		["A Championship Victory","/a-championship-victory.html"],
		["Oops, They Did It Again","/oops-they-did-it-again.html"],
		["Harold Ickes News","/harold-ickes-news-6.html"],
		["Altgeld Gardens Lawsuit Settlement","/altgeld-gardens-lawsuit-settlement.html"],
		["Getting to Know Rockwell","/getting-to-know-rockwell.html"],
		["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing.html"],
		["Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha.html"],
		["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects.html"],
		["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas.html"],
		["CHAC An Update: 2003","/chac-an-update-2003.html"],
		["Lathrop Homes News","/lathrop-homes-news.html"],
		["Thomas Sullivan Report Update","/thomas-sullivan-report-update.html"],
		["Making CHA Accessible","/making-cha-accessible.html"],
		["Homeless Not Hopeless","/homeless-not-hopeless.html"],
		["Residents Sue CHA","/residents-sue-cha.html"],
		["Seniors Complain About Renovations","/seniors-complain-about-renovations.html"],
		["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations.html"],
		["An Invasion of Privacy?","/an-invasion-of-privacy.html"],
		["Myths and Urban Legends","/myths-and-urban-legends.html"],
		["Positive Residents of the CHA","/positive-residents-of-the-cha.html"],
		["National Housing Crisis","/national-housing-crisis.html"],
		["HIV/AIDs Crisis","/hivaids-crisis.html"],
		["Operation ABLE","/operation-able.html"],
		["Harold Ickes Service Connectors","/harold-ickes-service-connectors.html"],
		["Harold Ickes News","/harold-ickes-news-8.html"],
		["Residents Deny Security Improvements","/residents-deny-security-improvements.html"],
		["CHA Puts Resident In Storage","/cha-puts-resident-in-storage.html"],
		["South Suburban Living","/south-suburban-living.html"],
		["Electrically Charged","/electrically-charged.html"],
		["Last Day in 4525","/last-day-in-4525.html"],
		["Housing Crisis in Highland Park","/housing-crisis-in-highland-park.html"],
		["It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini.html"],
		["Relocation Rights Contract","/relocation-rights-contract.html"],
		["Harold Ickes New School Update","/harold-ickes-new-school-update.html"],
		["Shocking Electric Bills Update","/shocking-electric-bills-update.html"],
		["Lathrop Homes Private Management","/lathrop-homes-private-management.html"],
		["Productive Men of the CHA","/productive-men-of-the-cha.html"],
		["CAC Prepares for Battle","/cac-prepares-for-battle.html"],
		["Squatters Worry About Homelessness","/squatters-worry-about-homelessness.html"],
		["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history.html"],
		["Shocking Electric Bills","/shocking-electric-bills.html"],
		["A 'One Strike' Battle Planned","/a-one-strike-battle-planned.html"],
		["Drug War Diagnosis","/drug-war-diagnosis.html"],
		["A Section 8 Recipient's Painful Reality","/a-section-8-recipients-painful-reality.html"],
		["A Savory Survey","/a-savory-survey.html"],
		["RMCs Aim to Please?","/rmcs-aim-to-please.html"],
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"],
		["The Terror Within","/the-terror-within.html"],
		["Stop the Violence","/stop-the-violence-12.html"],
		["Seniors Quality of Life On The Rise","/seniors-quality-of-life-on-the-rise.html"],
		["CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills.html"],
		["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing.html"],
		["Squatters in CHA","/squatters-in-cha.html"],
		["Don't Rock The Boat","/dont-rock-the-boat.html"],
		["CHA Family Service Connectors","/cha-family-service-connectors.html"],
		["SPECIAL FEATURE: City Gets CHA Funds Update","/special-feature-city-gets-cha-funds-update.html"],
		["Sinai Health Services","/sinai-health-services.html"],
		["Saluting Men of the CHA","/saluting-men-of-the-cha.html"],
		["The State Of Section 8","/the-state-of-section-8.html"],
		["Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place.html"],
		["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds.html"],
		["High Cost of Gas","/high-cost-of-gas.html"],
		["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management.html"],
		["Transforming CHA: Senior Only Buildings","/transforming-cha-senior-only-buildings.html"],
		["Transforming CHA: Making Connections","/transforming-cha-making-connections.html"],
		["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan.html"],
		["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues.html"],
		["Transforming CHA: Flannery Homes Residents Keep Waiting","/transforming-cha-flannery-homes-residents-keep-waiting.html"],
		["Transforming CHA: Federal Housing Voucher Woes","/transforming-cha-federal-housing-voucher-woes.html"],
		["Transforming CHA: How To Save On Rent","/transforming-cha-how-to-save-on-rent.html"],
		["Transforming CHA: One Strike Woes","/transforming-cha-one-strike-woes.html"],
		["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike.html"],
		["Transforming CHA: New Lights on Dark Passage","/transforming-cha-new-lights-on-dark-passage.html"],
		["Transforming CHA: Washington Park Wants Answers","/transforming-cha-washington-park-wants-answers.html"],
		["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting.html"],
		["Cold War Echoes","/cold-war-echoes.html"],
		["Ida B. Wells Reunion","/ida-b-wells-reunion.html"],
		["HUD Head: CHA Off Troubled List","/hud-head-cha-off-troubled-list.html"],
		["RJ Visits Miami/Dade Housing Authority","/rj-visits-miamidade-housing-authority.html"],
		["Stop The Violence","/stop-the-violence-18.html"],
		["Access Report","/access-report-3.html"],
		["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man.html"],
		["Stop the Violence","/stop-the-violence-16.html"],
		["CHA Announces First Clean Audit","/cha-announces-first-clean-audit.html"],
		["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation.html"],
		["REDI: A New Beginning?","/redi-a-new-beginning.html"],
		["CHA to Buy Back Laundry Tokens","/cha-to-buy-back-laundry-tokens.html"],
		["Inspector General Nabs Employees","/inspector-general-nabs-employees.html"],
		["Access Report","/access-report.html"],
		["The Million Woman March: One Woman's View","/the-million-woman-march-one-womans-view.html"],
		["The Next CHA Chairman?","/the-next-cha-chairman.html"],
		["Farewell, Mr. Chairman","/farewell-mr-chairman.html"],
		["Section 8 Update","/section-8-update.html"],
		["Flannery Homes News","/flannery-homes-news.html"],
		["Happy 60th, Lathrop Homes","/happy-60th-lathrop-homes.html"],
		["CHA and Latinos: Interview with Joe Shuldiner","/cha-and-latinos-interview-with-joe-shuldiner.html"],
		["Access Report","/access-report-2.html"],
		["A Decree But to What Degree?","/a-decree-but-to-what-degree.html"],
		["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center.html"],
		["Residents Fight Vacate Orders","/residents-fight-vacate-orders.html"],
		["Dear Resident","/dear-resident-10.html"],
		["Flannery Homes Update","/flannery-homes-update-2.html"],
		["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph.html"],
		["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments.html"],
		["Horner Annex Reborn","/horner-annex-reborn.html"],
		["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road.html"],
		["Safe Summer 97","/safe-summer-97.html"],
		["Focus On Section 8","/focus-on-section-8.html"],
		["Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing.html"],
		["Hope Has a Way","/hope-has-a-way.html"],
		["Last Harvest","/last-harvest.html"],
		["The Man Who Scared the Hell Out of Me","/the-man-who-scared-the-hell-out-of-me.html"],
		["Seniors form new organization","/seniors-form-new-organization.html"],
		["Washington Park: The Dying Hope","/washington-park-the-dying-hope.html"],
		["A Long Ride Home","/a-long-ride-home.html"],
		["Marion...Marion Stamps","/marion-marion-stamps.html"],
		["What's Happening in ABLA?","/whats-happening-in-abla.html"],
		["LeClaire Courts","/leclaire-courts.html"],
		["CHA Home Ownership: Wentworth Gardens","/cha-home-ownership-wentworth-gardens.html"],
		["Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington.html"]],
	"Plan for Transformation":[
		["The New Resident Leadership","/the-new-resident-leadership.html"],
		["CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls.html"],
		["Another CHA Chief Bows Out","/another-cha-chief-bows-out.html"],
		["Oakwood Shores Update","/oakwood-shores-update.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news-2.html"],
		["Tenants Protest CHA’s Plans for Lathrop","/tenants-protest-chas-plans-for-lathrop.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news.html"],
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["CHA Opens Wait List in Lincoln Square","/cha-opens-wait-list-in-lincoln-square.html"],
		["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1.html"],
		["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer.html"],
		["A Message from the Resident President","/a-message-from-the-resident-president.html"],
		["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants.html"],
		["CHA's New Plan?","/chas-new-plan.html"],
		["Charlotte Housing Authority Chief takes CHA Position","/charlotte-housing-authority-chief-takes-cha-position.html"],
		["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha.html"],
		["Relocation Rights Duel","/relocation-rights-duel.html"],
		["Robert Taylor On Line","/robert-taylor-on-line.html"],
		["CHA Report: Crime Rates Not Linked to CHA Relocatees","/cha-report-crime-rates-not-linked-to-cha-relocatees.html"],
		["Who Could Miss The Hole?","/who-could-miss-the-hole.html"],
		["CHA Contracting Woes","/cha-contracting-woes.html"],
		["Deadly Moves II","/deadly-moves-ii.html"],
		["Utility Problems Persist for Residents","/utility-problems-persist-for-residents.html"],
		["A Questionable Connection","/a-questionable-connection.html"],
		["Residents: What People Want","/residents-what-people-want.html"],
		["Presidential Election Notebook","/presidential-election-notebook.html"],
		["Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes.html"],
		["Deadly Moves - an update","/deadly-moves-an-update.html"],
		["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force.html"],
		["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2.html"],
		["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves.html"],
		["Oops, They Did It Again","/oops-they-did-it-again.html"],
		["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing.html"],
		["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas.html"],
		["Thomas Sullivan Report Update","/thomas-sullivan-report-update.html"],
		["Homeless Not Hopeless","/homeless-not-hopeless.html"],
		["Residents Sue CHA","/residents-sue-cha.html"],
		["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations.html"],
		["Myths and Urban Legends","/myths-and-urban-legends.html"],
		["National Housing Crisis","/national-housing-crisis.html"],
		["CHA Puts Resident In Storage","/cha-puts-resident-in-storage.html"],
		["South Suburban Living","/south-suburban-living.html"],
		["Electrically Charged","/electrically-charged.html"],
		["Housing Crisis in Highland Park","/housing-crisis-in-highland-park.html"],
		["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents.html"],
		["Shocking Electric Bills","/shocking-electric-bills.html"],
		["A 'One Strike' Battle Planned","/a-one-strike-battle-planned.html"],
		["Drug War Diagnosis","/drug-war-diagnosis.html"],
		["A Savory Survey","/a-savory-survey.html"],
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"],
		["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing.html"],
		["The State Of Section 8","/the-state-of-section-8.html"],
		["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management.html"],
		["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan.html"],
		["Cold War Echoes","/cold-war-echoes.html"]],
	"politics":[
		["The New Resident Leadership","/the-new-resident-leadership.html"],
		["CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls.html"],
		["Remembering ABLA Homes' Deverra Beverly","/remembering-abla-homes-deverra-beverly.html"],
		["Another CHA Chief Bows Out","/another-cha-chief-bows-out.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news-3.html"],
		["Oakwood Shores Update","/oakwood-shores-update.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news-2.html"],
		["We The People Media ED on Chicago Newsroom","/we-the-people-media-ed-on-chicago-newsroom.html"],
		["Tenants Protest CHA’s Plans for Lathrop","/tenants-protest-chas-plans-for-lathrop.html"],
		["Why It's So Hard to End Poverty","/why-its-so-hard-to-end-poverty.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news.html"],
		["Inside the Teachers Strike","/inside-the-teachers-strike.html"],
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["Rally against NATO, War and Poverty","/rally-against-nato-war-and-poverty.html"],
		["Altgeld Tenants: Police, Cameras Not Improving Security","/altgeld-tenants-police-cameras-not-improving-security.html"],
		["John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp.html"],
		["Group Carols to Save Mental Health Clinics","/group-carols-to-save-mental-health-clinics.html"],
		["Historical Gallery: Barack Obama","/historical-gallery-barack-obama.html"],
		["Residents' Journal Editor-in-chief talking about Summer Youth Employment","/residents-journal-editor-in-chief-talking-about-summer-youth-employment.html"],
		["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom.html"],
		["CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo.html"],
		["Board Squashes CHA Drug Testing Plan","/board-squashes-cha-drug-testing-plan.html"],
		["CHA Chief Steps Down","/cha-chief-steps-down-after-credit-card-fiasco.html"],
		["Tenants Protest CHA Plans to Drug Test Them","/2644.html"],
		["Mayoral Candidates Views about Chicago Public Housing","/mayoral-candidates-views-about-chicago-public-housing.html"],
		["The Obama Cave","/the-obama-cave.html"],
		["Jones vs. Tatum","/jones-vs-tatum.html"],
		["Rush vs. Jackson","/rush-vs-jackson.html"],
		["Cook County Presidential Race","/cook-county-presidential-race.html"],
		["Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle.html"],
		["Illinois Democrats Resist Social Security Privatization","/illinois-democrats-resist-social-security-privatization.html"],
		["A Questionable Connection","/a-questionable-connection.html"],
		["Update: Zoning and Affordable Housing","/update-zoning-and-affordable-housing.html"],
		["Presidential Election Notebook","/presidential-election-notebook.html"],
		["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections.html"],
		["A Taylor-Made Election","/a-taylor-made-election.html"],
		["More CHA Residents Voting Woes","/more-cha-residents-voting-woes.html"],
		["Wipe Out","/wipe-out.html"],
		["Cabrini-Green Election","/cabrini-green-election.html"],
		["Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes.html"],
		["2004 Election Focal Points","/2004-election-focal-points.html"],
		["Crystal Clear Views","/crystal-clear-views-7.html"],
		["Sixth District Race Makes History","/sixth-district-race-makes-history.html"],
		["2nd U.S. Congressional District Race","/2nd-u-s-congressional-district-race.html"],
		["U.S. Senate Candidate Joyce Washington","/u-s-senate-candidate-joyce-washington.html"],
		["U.S. Senate Candidate Gery Chico","/u-s-senate-candidate-gery-chico.html"],
		["U.S. Senate Candidate Daniel Hynes","/u-s-senate-candidate-daniel-hynes.html"],
		["U.S. Senate Candidate Blair Hull","/u-s-senate-candidate-blair-hull.html"],
		["The Sound of Silence","/the-sound-of-silence.html"],
		["The Price of a Political Job","/the-price-of-a-political-job.html"],
		["Representing Residents","/representing-residents.html"],
		["Chicago's Hottest Elections","/chicagos-hottest-elections.html"],
		["Myths and Urban Legends","/myths-and-urban-legends.html"],
		["Second Chance Legislation","/second-chance-legislation.html"],
		["Flannery Homes Update","/flannery-homes-update.html"],
		["The Next CHA Chairman?","/the-next-cha-chairman.html"],
		["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph.html"],
		["Vote '96: Conventional Colors","/vote-96-conventional-colors-2.html"],
		["Vote '96: Conventional Colors","/vote-96-conventional-colors.html"]],
	"public housing":[
		["The New Resident Leadership","/the-new-resident-leadership.html"],
		["CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls.html"],
		["Remembering ABLA Homes' Deverra Beverly","/remembering-abla-homes-deverra-beverly.html"],
		["Another CHA Chief Bows Out","/another-cha-chief-bows-out.html"],
		["Supreme Court Justice Sonia Sotomayor visits Chicago","/supreme-court-justice-sonia-sotomayor-visits-chicago.html"],
		["Honoring Dr. King's Legacy","/honoring-dr-kings-legacy.html"],
		["We The People Media ED on Chicago Newsroom","/we-the-people-media-ed-on-chicago-newsroom.html"],
		["Tenants Protest CHA’s Plans for Lathrop","/tenants-protest-chas-plans-for-lathrop.html"],
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["CHA Opens Wait List in Lincoln Square","/cha-opens-wait-list-in-lincoln-square.html"],
		["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1.html"],
		["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer.html"],
		["A Message from the Resident President","/a-message-from-the-resident-president.html"],
		["Charlotte Housing Authority Chief takes CHA Position","/charlotte-housing-authority-chief-takes-cha-position.html"],
		["Altgeld’s New Library","/altgeld%e2%80%99s-new-library.html"],
		["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha.html"],
		["Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives.html"],
		["Discussing the Oakwood Shores Mixed-Income Community","/residents-journal-reporter-talking-about-opportunities-for-public-housing-tenants-at-the-cha-oakwood-shores-mixed-income-community.html"],
		["After The Dust","/after-the-dust.html"],
		["Remembering Ms. Amey","/remembering-ms-amey.html"],
		["Residents' Journal's Coverage of CHA Featured in Rise Magazine","/residents-journals-coverage-of-cha-featured-in-rise-magazine.html"],
		["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom.html"],
		["CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo.html"],
		["Tenants Protest CHA Drug Testing Plan","/public-hearing-on-cha-drug-test-proposal.html"],
		["Tenants Protest CHA Plans to Drug Test Them","/2644.html"],
		["An Afternoon of Good Times","/an-afternoon-of-good-times.html"],
		["Where are CHA’s Residents?","/where-are-cha%e2%80%99s-residents.html"],
		["Mayoral Candidates Views about Chicago Public Housing","/mayoral-candidates-views-about-chicago-public-housing.html"],
		["A Third Generation’s Take on Relocation from Last Cabrini Building","/a-third-generation%e2%80%99s-take-on-relocation-from-last-cabrini-building.html"],
		["What We Need Now","/what-we-need-now.html"],
		["Ickes Homes News: The Final Curtain?","/ickes-homes-news-the-final-curtain.html"],
		["Relocation Rights Duel","/relocation-rights-duel.html"],
		["Tenants Protest New CHA School Reporting Policy","/tenants-protest-new-cha-school-reporting-policy.html"],
		["Robert Taylor On Line","/robert-taylor-on-line.html"],
		["An Inside Out Experience","/an-inside-out-experience.html"],
		["Memories of R. Taylor","/memories-of-r-taylor.html"],
		["CHA Seniors Keep Waiting to Return Home","/cha-seniors-keep-waiting-to-return-home.html"],
		["Who Could Miss The Hole?","/who-could-miss-the-hole.html"],
		["Publisher's Box","/publishers-box.html"],
		["CHA Development News","/cha-development-news.html"],
		["CHA Contracting Woes","/cha-contracting-woes.html"],
		["Jones vs. Tatum","/jones-vs-tatum.html"],
		["Troubling Development Update","/troubling-development-update.html"],
		["Deadly Moves II","/deadly-moves-ii.html"],
		["Victory at Bridgeport Homes","/victory-at-bridgeport-homes.html"],
		["Harold Ickes News","/harold-ickes-news-2.html"],
		["Tales of Lawndale Housing","/tales-of-lawndale-housing.html"],
		["Utility Problems Persist for Residents","/utility-problems-persist-for-residents.html"],
		["There's H.O.P.E. for Gary Residents","/theres-h-o-p-e-for-gary-residents.html"],
		["Harold Ickes News","/harold-ickes-news-3.html"],
		["Residents: What People Want","/residents-what-people-want.html"],
		["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections.html"],
		["A Taylor-Made Election","/a-taylor-made-election.html"],
		["More CHA Residents Voting Woes","/more-cha-residents-voting-woes.html"],
		["Wipe Out","/wipe-out.html"],
		["Positive People","/positive-people.html"],
		["Senior Rehab Update","/senior-rehab-update.html"],
		["Deadly Moves - an update","/deadly-moves-an-update.html"],
		["Closure Razes Resident Hopes","/closure-razes-resident-hopes.html"],
		["Positive People","/positive-people-2.html"],
		["Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park.html"],
		["Archer Courts: A Model Rehab","/archer-courts-a-model-rehab.html"],
		["Harold Ickes News","/harold-ickes-news-4.html"],
		["You Have Been Served","/you-have-been-served.html"],
		["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change.html"],
		["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force.html"],
		["Deadly Moves: Troubling Development","/deadly-moves-troubling-development.html"],
		["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2.html"],
		["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves.html"],
		["Positive People","/positive-people-3.html"],
		["Harold Ickes News","/harold-ickes-news-5.html"],
		["If the Suit Fits, Who Wears It?","/if-the-suit-fits-who-wears-it.html"],
		["A Championship Victory","/a-championship-victory.html"],
		["Oops, They Did It Again","/oops-they-did-it-again.html"],
		["The True Face of Poverty","/the-true-face-of-poverty.html"],
		["Getting to Know Rockwell","/getting-to-know-rockwell.html"],
		["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing.html"],
		["Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha.html"],
		["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects.html"],
		["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas.html"],
		["Dear Resident","/dear-resident.html"],
		["Harold Ickes News","/harold-ickes-news-7.html"],
		["Thomas Sullivan Report Update","/thomas-sullivan-report-update.html"],
		["Making CHA Accessible","/making-cha-accessible.html"],
		["The Shocking Truth about CHA","/the-shocking-truth-about-cha.html"],
		["Homeless Not Hopeless","/homeless-not-hopeless.html"],
		["Housing on State, City Agendas","/housing-on-state-city-agendas.html"],
		["Representing Residents","/representing-residents.html"],
		["Chicago's Hottest Elections","/chicagos-hottest-elections.html"],
		["Running Out of Gas","/running-out-of-gas.html"],
		["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations.html"],
		["Myths and Urban Legends","/myths-and-urban-legends.html"],
		["Operation ABLE","/operation-able.html"],
		["Harold Ickes Service Connectors","/harold-ickes-service-connectors.html"],
		["Stop The Violence","/stop-the-violence-11.html"],
		["South Suburban Living","/south-suburban-living.html"],
		["It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini.html"],
		["Welfare Reform: Lost In Space","/welfare-reform-lost-in-space.html"],
		["Maintenance Defects at Ogden Courts","/maintenance-defects-at-ogden-courts.html"],
		["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents.html"],
		["Shocking Electric Bills Update","/shocking-electric-bills-update.html"],
		["Lathrop News","/lathrop-news.html"],
		["ABLA News","/abla-news.html"],
		["Harold Ickes News","/harold-ickes-news-10.html"],
		["Lathrop Homes Private Management","/lathrop-homes-private-management.html"],
		["Productive Men of the CHA","/productive-men-of-the-cha.html"],
		["CAC Prepares for Battle","/cac-prepares-for-battle.html"],
		["Squatters Worry About Homelessness","/squatters-worry-about-homelessness.html"],
		["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history.html"],
		["Ickes' Homes New Managers","/ickes-homes-new-managers.html"],
		["Residents Look to the Hills","/residents-look-to-the-hills.html"],
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"],
		["The Terror Within","/the-terror-within.html"],
		["Squatters in CHA","/squatters-in-cha.html"],
		["ABLA News","/abla-news-2.html"],
		["The State Of Section 8","/the-state-of-section-8.html"],
		["Ickes: Back To Square One","/ickes-back-to-square-one.html"],
		["High Cost of Gas","/high-cost-of-gas.html"],
		["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management.html"],
		["Transforming CHA: Senior Only Buildings","/transforming-cha-senior-only-buildings.html"],
		["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan.html"],
		["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues.html"],
		["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike.html"],
		["Transforming CHA: New Lights on Dark Passage","/transforming-cha-new-lights-on-dark-passage.html"],
		["Transforming CHA: Washington Park Wants Answers","/transforming-cha-washington-park-wants-answers.html"],
		["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting.html"],
		["Cold War Echoes","/cold-war-echoes.html"],
		["ABLA Homes Update","/abla-homes-update.html"],
		["Ida B. Wells Reunion","/ida-b-wells-reunion.html"],
		["All Things Old and New at Harold Ickes Homes","/all-things-old-and-new.html"],
		["Lathrop Homes News","/lathrop-homes-news-2.html"],
		["Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update.html"],
		["Cabrini Cliffhanger","/cabrini-cliffhanger.html"],
		["RJ Visits Miami/Dade Housing Authority","/rj-visits-miamidade-housing-authority.html"],
		["Stop The Violence","/stop-the-violence-18.html"],
		["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man.html"],
		["Dear Resident","/dear-resident-9.html"],
		["Stop the Violence","/stop-the-violence-16.html"],
		["Altgeld Gardens News","/altgeld-gardens-news.html"],
		["CHA Announces First Clean Audit","/cha-announces-first-clean-audit.html"],
		["Flannery Homes Update","/flannery-homes-update.html"],
		["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation.html"],
		["REDI: A New Beginning?","/redi-a-new-beginning.html"],
		["ABLA Relocation Report","/abla-relocation-report.html"],
		["L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike.html"],
		["CHA to Buy Back Laundry Tokens","/cha-to-buy-back-laundry-tokens.html"],
		["The Next CHA Chairman?","/the-next-cha-chairman.html"],
		["Farewell, Mr. Chairman","/farewell-mr-chairman.html"],
		["The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath.html"],
		["Altgeld Gardens News","/altgeld-gardens-news-2.html"],
		["Flannery Homes News","/flannery-homes-news.html"],
		["CHA and Latinos: Interview with Joe Shuldiner","/cha-and-latinos-interview-with-joe-shuldiner.html"],
		["When Will It End?","/when-will-it-end.html"],
		["Inner-City Truths: A Book Review","/inner-city-truths-a-book-review.html"],
		["A Decree But to What Degree?","/a-decree-but-to-what-degree.html"],
		["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center.html"],
		["Residents Fight Vacate Orders","/residents-fight-vacate-orders.html"],
		["Dear Resident","/dear-resident-10.html"],
		["Flannery Homes Update","/flannery-homes-update-2.html"],
		["Cabrini-Green Update","/cabrini-green-update.html"],
		["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph.html"],
		["Horner Annex Reborn","/horner-annex-reborn.html"],
		["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road.html"],
		["Replacement Housing or Replacing People","/replacement-housing-or-replacing-people.html"],
		["The Magnificent Maya Angelou","/the-magnificent-maya-angelou.html"],
		["Focus On Section 8","/focus-on-section-8.html"],
		["Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing.html"],
		["Dear Resident","/dear-resident-8.html"],
		["Last Harvest","/last-harvest.html"],
		["A Short History of Ida B. Wells","/a-short-history-of-ida-b-wells.html"],
		["Washington Park: The Dying Hope","/washington-park-the-dying-hope.html"],
		["A Long Ride Home","/a-long-ride-home.html"],
		["Marion...Marion Stamps","/marion-marion-stamps.html"],
		["A History of Cabrini-Green","/a-history-of-cabrini-green.html"],
		["What's Happening in ABLA?","/whats-happening-in-abla.html"],
		["LeClaire Courts","/leclaire-courts.html"],
		["CHA Home Ownership: Wentworth Gardens","/cha-home-ownership-wentworth-gardens.html"],
		["Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington.html"]],
	"public housing residents":[
		["The New Resident Leadership","/the-new-resident-leadership.html"],
		["CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls.html"],
		["Remembering ABLA Homes' Deverra Beverly","/remembering-abla-homes-deverra-beverly.html"],
		["Oakwood Shores Update","/oakwood-shores-update.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news-2.html"],
		["The Altgeld Gardens Farmers Market: A Personal Perspective","/the-altgeld-gardens-farmers-market-a-personal-perspective.html"],
		["Supreme Court Justice Sonia Sotomayor visits Chicago","/supreme-court-justice-sonia-sotomayor-visits-chicago.html"],
		["Tenants Protest CHA’s Plans for Lathrop","/tenants-protest-chas-plans-for-lathrop.html"],
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1.html"],
		["A Message from the Resident President","/a-message-from-the-resident-president.html"],
		["Altgeld’s New Library","/altgeld%e2%80%99s-new-library.html"],
		["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha.html"],
		["After The Dust","/after-the-dust.html"],
		["Residents' Journal's Coverage of CHA Featured in Rise Magazine","/residents-journals-coverage-of-cha-featured-in-rise-magazine.html"],
		["Tenants Protest CHA Drug Testing Plan","/public-hearing-on-cha-drug-test-proposal.html"],
		["Tenants Protest CHA Plans to Drug Test Them","/2644.html"],
		["Relocation Rights Duel","/relocation-rights-duel.html"],
		["Who Could Miss The Hole?","/who-could-miss-the-hole.html"],
		["A Special Tribute","/a-special-tribute.html"],
		["CHA Development News","/cha-development-news.html"],
		["CHA Contracting Woes","/cha-contracting-woes.html"],
		["Victory at Bridgeport Homes","/victory-at-bridgeport-homes.html"],
		["Harold Ickes News","/harold-ickes-news-2.html"],
		["Tales of Lawndale Housing","/tales-of-lawndale-housing.html"],
		["Utility Problems Persist for Residents","/utility-problems-persist-for-residents.html"],
		["Stop The Violence","/stop-the-violence-3.html"],
		["Residents: What People Want","/residents-what-people-want.html"],
		["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections.html"],
		["More CHA Residents Voting Woes","/more-cha-residents-voting-woes.html"],
		["Wipe Out","/wipe-out.html"],
		["Cabrini-Green Election","/cabrini-green-election.html"],
		["Positive People","/positive-people.html"],
		["Deadly Moves - an update","/deadly-moves-an-update.html"],
		["Closure Razes Resident Hopes","/closure-razes-resident-hopes.html"],
		["Positive People","/positive-people-2.html"],
		["Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park.html"],
		["Archer Courts: A Model Rehab","/archer-courts-a-model-rehab.html"],
		["Harold Ickes News","/harold-ickes-news-4.html"],
		["You Have Been Served","/you-have-been-served.html"],
		["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change.html"],
		["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves.html"],
		["Harold Ickes News","/harold-ickes-news-5.html"],
		["If the Suit Fits, Who Wears It?","/if-the-suit-fits-who-wears-it.html"],
		["A Championship Victory","/a-championship-victory.html"],
		["Oops, They Did It Again","/oops-they-did-it-again.html"],
		["Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha.html"],
		["Dear Resident","/dear-resident.html"],
		["Representing Residents","/representing-residents.html"],
		["Residents Sue CHA","/residents-sue-cha.html"],
		["Running Out of Gas","/running-out-of-gas.html"],
		["An Invasion of Privacy?","/an-invasion-of-privacy.html"],
		["Positive Residents of the CHA","/positive-residents-of-the-cha.html"],
		["Last Day in 4525","/last-day-in-4525.html"],
		["Housing Crisis in Highland Park","/housing-crisis-in-highland-park.html"],
		["It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini.html"],
		["Harold Ickes News","/harold-ickes-news-9.html"],
		["Harold Ickes New School Update","/harold-ickes-new-school-update.html"],
		["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents.html"],
		["A 'One Strike' Battle Planned","/a-one-strike-battle-planned.html"],
		["Drug War Diagnosis","/drug-war-diagnosis.html"],
		["Dear Resident","/dear-resident-5.html"],
		["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing.html"],
		["Don't Rock The Boat","/dont-rock-the-boat.html"],
		["CHA Family Service Connectors","/cha-family-service-connectors.html"],
		["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds.html"],
		["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting.html"],
		["Cold War Echoes","/cold-war-echoes.html"],
		["ABLA Homes Update","/abla-homes-update.html"],
		["Ida B. Wells Reunion","/ida-b-wells-reunion.html"],
		["All Things Old and New at Harold Ickes Homes","/all-things-old-and-new.html"],
		["RJ Visits Miami/Dade Housing Authority","/rj-visits-miamidade-housing-authority.html"],
		["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man.html"],
		["Stop the Violence","/stop-the-violence-16.html"],
		["Altgeld Gardens News","/altgeld-gardens-news.html"],
		["CHA Announces First Clean Audit","/cha-announces-first-clean-audit.html"],
		["Flannery Homes Update","/flannery-homes-update.html"],
		["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation.html"],
		["REDI: A New Beginning?","/redi-a-new-beginning.html"],
		["ABLA Relocation Report","/abla-relocation-report.html"],
		["L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike.html"],
		["CHA to Buy Back Laundry Tokens","/cha-to-buy-back-laundry-tokens.html"],
		["Farewell, Mr. Chairman","/farewell-mr-chairman.html"],
		["The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath.html"],
		["Dear Resident","/dear-resident-11.html"],
		["Flannery Homes News","/flannery-homes-news.html"],
		["A Decree But to What Degree?","/a-decree-but-to-what-degree.html"],
		["Residents Fight Vacate Orders","/residents-fight-vacate-orders.html"],
		["Flannery Homes Update","/flannery-homes-update-2.html"],
		["Cabrini-Green Update","/cabrini-green-update.html"],
		["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph.html"],
		["Horner Annex Reborn","/horner-annex-reborn.html"],
		["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road.html"],
		["Safe Summer 97","/safe-summer-97.html"],
		["Focus On Section 8","/focus-on-section-8.html"],
		["Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing.html"],
		["Hope Has a Way","/hope-has-a-way.html"],
		["Dear Resident","/dear-resident-8.html"],
		["Last Harvest","/last-harvest.html"],
		["Washington Park: The Dying Hope","/washington-park-the-dying-hope.html"],
		["What's Happening in ABLA?","/whats-happening-in-abla.html"],
		["LeClaire Courts","/leclaire-courts.html"]],
	"Robert Taylor Homes":[
		["The New Resident Leadership","/the-new-resident-leadership.html"],
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1.html"],
		["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer.html"],
		["CHA's New Plan?","/chas-new-plan.html"],
		["Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives.html"],
		["After The Dust","/after-the-dust.html"],
		["Robert Taylor On Line","/robert-taylor-on-line.html"],
		["Memories of R. Taylor","/memories-of-r-taylor.html"],
		["The CHA Plan Is Dead","/the-cha-plan-is-dead.html"],
		["Who Could Miss The Hole?","/who-could-miss-the-hole.html"],
		["CHA Contracting Woes","/cha-contracting-woes.html"],
		["Utility Problems Persist for Residents","/utility-problems-persist-for-residents.html"],
		["A Taylor-Made Election","/a-taylor-made-election.html"],
		["Positive People","/positive-people.html"],
		["Positive People","/positive-people-2.html"],
		["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2.html"],
		["Positive People","/positive-people-3.html"],
		["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas.html"],
		["The Shocking Truth about CHA","/the-shocking-truth-about-cha.html"],
		["CHA Puts Resident In Storage","/cha-puts-resident-in-storage.html"],
		["Electrically Charged","/electrically-charged.html"],
		["Last Day in 4525","/last-day-in-4525.html"],
		["Shocking Electric Bills Update","/shocking-electric-bills-update.html"],
		["Shocking Electric Bills","/shocking-electric-bills.html"],
		["Remembering Leroy Watkins","/remembering-leroy-watkins.html"],
		["A Section 8 Recipient's Painful Reality","/a-section-8-recipients-painful-reality.html"],
		["A Trip To The Future","/a-trip-to-the-future.html"],
		["Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place.html"],
		["Stop The Violence","/stop-the-violence-15.html"],
		["Transforming CHA: Federal Housing Voucher Woes","/transforming-cha-federal-housing-voucher-woes.html"],
		["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting.html"],
		["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man.html"]],
	"Section 8":[
		["The New Resident Leadership","/the-new-resident-leadership.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news-2.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news.html"],
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1.html"],
		["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer.html"],
		["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants.html"],
		["CHA's New Plan?","/chas-new-plan.html"],
		["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha.html"],
		["Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives.html"],
		["After The Dust","/after-the-dust.html"],
		["Ickes Homes News: The Final Curtain?","/ickes-homes-news-the-final-curtain.html"],
		["Robert Taylor On Line","/robert-taylor-on-line.html"],
		["The CHA Plan Is Dead","/the-cha-plan-is-dead.html"],
		["Residents Blame CHA for School Closures","/residents-blame-cha-for-school-closures.html"],
		["Harold L. Ickes Homes News","/harold-l-ickes-homes-news.html"],
		["Congress Accuses HUD of Mismanagement","/congress-accuses-hud-of-mismanagement.html"],
		["Penalties","/penalties.html"],
		["Tales of Lawndale Housing","/tales-of-lawndale-housing.html"],
		["Utility Problems Persist for Residents","/utility-problems-persist-for-residents.html"],
		["More CHA Residents Voting Woes","/more-cha-residents-voting-woes.html"],
		["Closure Razes Resident Hopes","/closure-razes-resident-hopes.html"],
		["2004 Election Focal Points","/2004-election-focal-points.html"],
		["Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park.html"],
		["Harold Ickes News","/harold-ickes-news-4.html"],
		["You Have Been Served","/you-have-been-served.html"],
		["CHAC An Update: 2003","/chac-an-update-2003.html"],
		["Homeless Not Hopeless","/homeless-not-hopeless.html"],
		["Residents Sue CHA","/residents-sue-cha.html"],
		["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations.html"],
		["Myths and Urban Legends","/myths-and-urban-legends.html"],
		["Housing Crisis in Highland Park","/housing-crisis-in-highland-park.html"],
		["It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini.html"],
		["Relocation Rights Contract","/relocation-rights-contract.html"],
		["CAC Prepares for Battle","/cac-prepares-for-battle.html"],
		["Squatters Worry About Homelessness","/squatters-worry-about-homelessness.html"],
		["A Section 8 Recipient's Painful Reality","/a-section-8-recipients-painful-reality.html"],
		["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8.html"],
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"],
		["New Vincennes Plaza","/new-vincennes-plaza.html"],
		["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing.html"],
		["The State Of Section 8","/the-state-of-section-8.html"],
		["Razing the Brooks Extension","/razing-the-brooks-extension.html"],
		["Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place.html"],
		["Project Based Section-8s Threatened","/project-based-section-8s-threatened.html"],
		["Del Prado Residents Face Uncertainty","/del-prado-residents-face-uncertainty.html"],
		["Transforming CHA: Federal Housing Voucher Woes","/transforming-cha-federal-housing-voucher-woes.html"],
		["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation.html"],
		["Replacement Housing or Replacing People","/replacement-housing-or-replacing-people.html"],
		["Focus On Section 8","/focus-on-section-8.html"]],
	"senior citizens":[
		["The New Resident Leadership","/the-new-resident-leadership.html"],
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["Stopping Elder Abuse","/stopping-elder-abuse.html"],
		["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1.html"],
		["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer.html"],
		["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants.html"],
		["The White House Agenda for the Poor","/the-white-house-agenda-for-the-poor.html"],
		["CHA Seniors Keep Waiting to Return Home","/cha-seniors-keep-waiting-to-return-home.html"],
		["Senior Services 2005 and Beyond","/senior-services-2005-and-beyond.html"],
		["Senior Rehab Update","/senior-rehab-update.html"],
		["Medicare Prescription Drug Benefit","/medicare-prescription-drug-benefit.html"],
		["Seniors Complain About Renovations","/seniors-complain-about-renovations.html"],
		["Seniors Graduate Police Class","/seniors-graduate-police-class.html"],
		["Operation ABLE","/operation-able.html"],
		["The High Cost of Medicine","/the-high-cost-of-medicine.html"],
		["CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills.html"],
		["Sinai Health Services","/sinai-health-services.html"],
		["Transforming CHA: Senior Only Buildings","/transforming-cha-senior-only-buildings.html"],
		["Access Report","/access-report-3.html"],
		["CHA to Buy Back Laundry Tokens","/cha-to-buy-back-laundry-tokens.html"],
		["Access Report","/access-report.html"],
		["Access Report","/access-report-2.html"],
		["Flannery Homes Update","/flannery-homes-update-2.html"],
		["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments.html"],
		["Focus On Section 8","/focus-on-section-8.html"],
		["Last Harvest","/last-harvest.html"],
		["Seniors form new organization","/seniors-form-new-organization.html"]],
	"Chicago Housing Authority":[
		["CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls.html"],
		["Remembering ABLA Homes' Deverra Beverly","/remembering-abla-homes-deverra-beverly.html"],
		["Another CHA Chief Bows Out","/another-cha-chief-bows-out.html"],
		["Oakwood Shores Update","/oakwood-shores-update.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news-2.html"],
		["A Protest Success Story","/a-protest-success-story.html"],
		["The Altgeld Gardens Farmers Market: A Personal Perspective","/the-altgeld-gardens-farmers-market-a-personal-perspective.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news.html"],
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["Winners from the Resident Survey!","/winners-from-the-resident-survey.html"],
		["CHA Opens Wait List in Lincoln Square","/cha-opens-wait-list-in-lincoln-square.html"],
		["CHA Opens Public Housing Wait List for South Side Neighborhoods","/cha-opens-public-housing-wait-list-for-specific-areas.html"],
		["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1.html"],
		["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer.html"],
		["A Message from the Resident President","/a-message-from-the-resident-president.html"],
		["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants.html"],
		["CHA's New Plan?","/chas-new-plan.html"],
		["Altgeld Tenants: Police, Cameras Not Improving Security","/altgeld-tenants-police-cameras-not-improving-security.html"],
		["Blackhawks Host CHA Kids","/blackhawks-host-cha-kids.html"],
		["Tenants' Lawyer: CHA Drug Testing Policy Will End Up in Court","/tenants-lawyer-cha-drug-testing-policy-will-end-up-in-court.html"],
		["CHA Reopens Landmark Senior Building","/cha-reopens-landmark-senior-building.html"],
		["Some Lathrop Kids Get a Bus, But Not All","/some-lathrop-kids-get-a-bus-but-not-all.html"],
		["Is CHA Holding Vacant Apartments?","/is-cha-holding-vacant-apartments.html"],
		["Ex-Offenders Strive For Better","/ex-offenders-strive-for-better.html"],
		["Special Investigation: CHA Still Wants Kids’ Report Cards","/special-investigation-cha-still-wants-kids%e2%80%99-report-cards.html"],
		["Elementary School Students Suffer from CHA Relocations","/elementary-school-students-suffer-from-cha-relocations.html"],
		["Charlotte Housing Authority Chief takes CHA Position","/charlotte-housing-authority-chief-takes-cha-position.html"],
		["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha.html"],
		["Residents' Journal Coverage of the Recent Demolition of the Last CHA Ida B. Wells Homes Buildings","/residents-journal-coverage-of-the-recent-demolition-of-the-last-cha-ida-b-wells-homes-buildings.html"],
		["Residents' Journal Publisher and Editor Discussing Recent CHA Issues","/residents-journal-publisher-and-editor-discussing-recent-cha-issues.html"],
		["Residents' Journal Reporters talking about Current Youth Articles","/residents-journal-staff-member-talking-to-an-urban-youth-international-journalism-program-student-about-her-news-reports-this-summer.html"],
		["Discussing the Oakwood Shores Mixed-Income Community","/residents-journal-reporter-talking-about-opportunities-for-public-housing-tenants-at-the-cha-oakwood-shores-mixed-income-community.html"],
		["Altgeld Gardens Tries to Stay Cool","/altgeld-gardens-tries-to-stay-cool.html"],
		["How to Deal with the Next Heat Wave","/how-to-deal-with-the-next-heat-wave.html"],
		["CHA Launches Initiative to House Women Ex-Offenders","/cha-launches-initiative-to-house-women-ex-offenders.html"],
		["After The Dust","/after-the-dust.html"],
		["Mayor Continues Search for New CHA Head","/mayor-continues-search-for-new-cha-head.html"],
		["Residents' Journal Publisher on WBEZ","/residents-journal-publisher-on-wbez.html"],
		["Remembering Ms. Amey","/remembering-ms-amey.html"],
		["Residents' Journal's Coverage of CHA Featured in Rise Magazine","/residents-journals-coverage-of-cha-featured-in-rise-magazine.html"],
		["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom.html"],
		["CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo.html"],
		["My trip to Paris","/my-trip-to-paris.html"],
		["A Dream Come True","/a-dream-come-true.html"],
		["CHA Land Remains Vacant for Over a Decade (Commentary)","/cha-land-remains-vacant-for-over-a-decade-commentary.html"],
		["Board Squashes CHA Drug Testing Plan","/board-squashes-cha-drug-testing-plan.html"],
		["CHA Chief Steps Down","/cha-chief-steps-down-after-credit-card-fiasco.html"],
		["Tenants Protest CHA Drug Testing Plan","/public-hearing-on-cha-drug-test-proposal.html"],
		["Tenants Protest CHA Plans to Drug Test Them","/2644.html"],
		["An Afternoon of Good Times","/an-afternoon-of-good-times.html"],
		["Where are CHA’s Residents?","/where-are-cha%e2%80%99s-residents.html"],
		["Cabrini-Green Residents Say Goodbye","/cabrini-green-residents-say-goodbye.html"],
		["CHA Board Meeting Crashed with Concerns","/cha-board-meeting-crashed-with-concerns.html"],
		["Cabrini rowhouses’ fate in jeopardy","/cabrini-rowhouses%e2%80%99-fate-in-jeopardy.html"],
		["A Third Generation’s Take on Relocation from Last Cabrini Building","/a-third-generation%e2%80%99s-take-on-relocation-from-last-cabrini-building.html"],
		["CHA Youth Shopping Spree with Chicago Bears Player","/cha-youth-shopping-spree-with-chicago-bears-player.html"],
		["Where I Come From","/where-i-come-from.html"],
		["Ickes Homes News: The Final Curtain?","/ickes-homes-news-the-final-curtain.html"],
		["Relocation Rights Duel","/relocation-rights-duel.html"],
		["Tenants Protest New CHA School Reporting Policy","/tenants-protest-new-cha-school-reporting-policy.html"],
		["Robert Taylor On Line","/robert-taylor-on-line.html"],
		["Who Could Miss The Hole?","/who-could-miss-the-hole.html"],
		["Altgeld Gardens News","/altgeld-garden-news.html"],
		["CHA Development News","/cha-development-news.html"],
		["CHA Contracting Woes","/cha-contracting-woes.html"],
		["Rush vs. Jackson","/rush-vs-jackson.html"],
		["Deadly Moves II","/deadly-moves-ii.html"],
		["Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle.html"],
		["Utility Problems Persist for Residents","/utility-problems-persist-for-residents.html"],
		["A Questionable Connection","/a-questionable-connection.html"],
		["Residents: What People Want","/residents-what-people-want.html"],
		["More CHA Residents Voting Woes","/more-cha-residents-voting-woes.html"],
		["Wipe Out","/wipe-out.html"],
		["Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes.html"],
		["Positive People","/positive-people.html"],
		["Senior Rehab Update","/senior-rehab-update.html"],
		["Deadly Moves - an update","/deadly-moves-an-update.html"],
		["Closure Razes Resident Hopes","/closure-razes-resident-hopes.html"],
		["Archer Courts: A Model Rehab","/archer-courts-a-model-rehab.html"],
		["You Have Been Served","/you-have-been-served.html"],
		["Bronzeville Community Alert","/bronzeville-community-alert.html"],
		["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change.html"],
		["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force.html"],
		["Deadly Moves: Troubling Development","/deadly-moves-troubling-development.html"],
		["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2.html"],
		["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves.html"],
		["Harold Ickes News","/harold-ickes-news-5.html"],
		["If the Suit Fits, Who Wears It?","/if-the-suit-fits-who-wears-it.html"],
		["A Championship Victory","/a-championship-victory.html"],
		["Oops, They Did It Again","/oops-they-did-it-again.html"],
		["Harold Ickes News","/harold-ickes-news-6.html"],
		["Altgeld Gardens Lawsuit Settlement","/altgeld-gardens-lawsuit-settlement.html"],
		["Getting to Know Rockwell","/getting-to-know-rockwell.html"],
		["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing.html"],
		["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects.html"],
		["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas.html"],
		["CHAC An Update: 2003","/chac-an-update-2003.html"],
		["Lathrop Homes News","/lathrop-homes-news.html"],
		["Thomas Sullivan Report Update","/thomas-sullivan-report-update.html"],
		["Making CHA Accessible","/making-cha-accessible.html"],
		["The Shocking Truth about CHA","/the-shocking-truth-about-cha.html"],
		["Homeless Not Hopeless","/homeless-not-hopeless.html"],
		["Residents Sue CHA","/residents-sue-cha.html"],
		["Seniors Complain About Renovations","/seniors-complain-about-renovations.html"],
		["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations.html"],
		["An Invasion of Privacy?","/an-invasion-of-privacy.html"],
		["Myths and Urban Legends","/myths-and-urban-legends.html"],
		["Positive Residents of the CHA","/positive-residents-of-the-cha.html"],
		["National Housing Crisis","/national-housing-crisis.html"],
		["HIV/AIDs Crisis","/hivaids-crisis.html"],
		["Operation ABLE","/operation-able.html"],
		["Harold Ickes Service Connectors","/harold-ickes-service-connectors.html"],
		["Harold Ickes News","/harold-ickes-news-8.html"],
		["CHA Puts Resident In Storage","/cha-puts-resident-in-storage.html"],
		["South Suburban Living","/south-suburban-living.html"],
		["Electrically Charged","/electrically-charged.html"],
		["Last Day in 4525","/last-day-in-4525.html"],
		["Housing Crisis in Highland Park","/housing-crisis-in-highland-park.html"],
		["It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini.html"],
		["Relocation Rights Contract","/relocation-rights-contract.html"],
		["Harold Ickes New School Update","/harold-ickes-new-school-update.html"],
		["Shocking Electric Bills Update","/shocking-electric-bills-update.html"],
		["Lathrop Homes Private Management","/lathrop-homes-private-management.html"],
		["Productive Men of the CHA","/productive-men-of-the-cha.html"],
		["CAC Prepares for Battle","/cac-prepares-for-battle.html"],
		["Squatters Worry About Homelessness","/squatters-worry-about-homelessness.html"],
		["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history.html"],
		["Shocking Electric Bills","/shocking-electric-bills.html"],
		["Drug War Diagnosis","/drug-war-diagnosis.html"],
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"],
		["Seniors Quality of Life On The Rise","/seniors-quality-of-life-on-the-rise.html"],
		["CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills.html"],
		["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing.html"],
		["Squatters in CHA","/squatters-in-cha.html"],
		["Don't Rock The Boat","/dont-rock-the-boat.html"],
		["CHA Family Service Connectors","/cha-family-service-connectors.html"],
		["SPECIAL FEATURE: City Gets CHA Funds Update","/special-feature-city-gets-cha-funds-update.html"],
		["Sinai Health Services","/sinai-health-services.html"],
		["Saluting Men of the CHA","/saluting-men-of-the-cha.html"],
		["The State Of Section 8","/the-state-of-section-8.html"],
		["Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place.html"],
		["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds.html"],
		["High Cost of Gas","/high-cost-of-gas.html"],
		["Transforming CHA: Senior Only Buildings","/transforming-cha-senior-only-buildings.html"],
		["Transforming CHA: Making Connections","/transforming-cha-making-connections.html"],
		["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan.html"],
		["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues.html"],
		["Transforming CHA: Flannery Homes Residents Keep Waiting","/transforming-cha-flannery-homes-residents-keep-waiting.html"],
		["Transforming CHA: Federal Housing Voucher Woes","/transforming-cha-federal-housing-voucher-woes.html"],
		["Transforming CHA: How To Save On Rent","/transforming-cha-how-to-save-on-rent.html"],
		["Transforming CHA: One Strike Woes","/transforming-cha-one-strike-woes.html"],
		["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike.html"],
		["Transforming CHA: New Lights on Dark Passage","/transforming-cha-new-lights-on-dark-passage.html"],
		["Transforming CHA: Washington Park Wants Answers","/transforming-cha-washington-park-wants-answers.html"],
		["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting.html"],
		["Cold War Echoes","/cold-war-echoes.html"],
		["Ida B. Wells Reunion","/ida-b-wells-reunion.html"],
		["HUD Head: CHA Off Troubled List","/hud-head-cha-off-troubled-list.html"],
		["RJ Visits Miami/Dade Housing Authority","/rj-visits-miamidade-housing-authority.html"],
		["Stop The Violence","/stop-the-violence-18.html"],
		["Access Report","/access-report-3.html"],
		["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man.html"],
		["Stop the Violence","/stop-the-violence-16.html"],
		["CHA Announces First Clean Audit","/cha-announces-first-clean-audit.html"],
		["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation.html"],
		["REDI: A New Beginning?","/redi-a-new-beginning.html"],
		["CHA to Buy Back Laundry Tokens","/cha-to-buy-back-laundry-tokens.html"],
		["Inspector General Nabs Employees","/inspector-general-nabs-employees.html"],
		["Access Report","/access-report.html"],
		["The Million Woman March: One Woman's View","/the-million-woman-march-one-womans-view.html"],
		["The Next CHA Chairman?","/the-next-cha-chairman.html"],
		["Farewell, Mr. Chairman","/farewell-mr-chairman.html"],
		["Section 8 Update","/section-8-update.html"],
		["Flannery Homes News","/flannery-homes-news.html"],
		["Happy 60th, Lathrop Homes","/happy-60th-lathrop-homes.html"],
		["CHA and Latinos: Interview with Joe Shuldiner","/cha-and-latinos-interview-with-joe-shuldiner.html"],
		["Access Report","/access-report-2.html"],
		["A Decree But to What Degree?","/a-decree-but-to-what-degree.html"],
		["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center.html"],
		["Residents Fight Vacate Orders","/residents-fight-vacate-orders.html"],
		["Flannery Homes Update","/flannery-homes-update-2.html"],
		["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph.html"],
		["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments.html"],
		["Horner Annex Reborn","/horner-annex-reborn.html"],
		["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road.html"],
		["Safe Summer 97","/safe-summer-97.html"],
		["Focus On Section 8","/focus-on-section-8.html"],
		["Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing.html"],
		["Hope Has a Way","/hope-has-a-way.html"],
		["Dear Resident","/dear-resident-8.html"],
		["Seniors form new organization","/seniors-form-new-organization.html"],
		["Washington Park: The Dying Hope","/washington-park-the-dying-hope.html"],
		["A Long Ride Home","/a-long-ride-home.html"],
		["What's Happening in ABLA?","/whats-happening-in-abla.html"],
		["LeClaire Courts","/leclaire-courts.html"],
		["CHA Home Ownership: Wentworth Gardens","/cha-home-ownership-wentworth-gardens.html"],
		["Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington.html"]],
	"demolition":[
		["CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls.html"],
		["Another CHA Chief Bows Out","/another-cha-chief-bows-out.html"],
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["Winners from the Resident Survey!","/winners-from-the-resident-survey.html"],
		["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1.html"],
		["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants.html"],
		["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha.html"],
		["After The Dust","/after-the-dust.html"],
		["Ickes Homes News: The Final Curtain?","/ickes-homes-news-the-final-curtain.html"],
		["Memories of R. Taylor","/memories-of-r-taylor.html"],
		["Growing Up","/growing-up.html"],
		["Harold Ickes News","/harold-ickes-news-4.html"],
		["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2.html"],
		["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects.html"],
		["National Housing Crisis","/national-housing-crisis.html"],
		["Last Day in 4525","/last-day-in-4525.html"],
		["Housing Crisis in Highland Park","/housing-crisis-in-highland-park.html"],
		["Harold Ickes New School Update","/harold-ickes-new-school-update.html"],
		["Harold Ickes News","/harold-ickes-news-10.html"],
		["A Section 8 Recipient's Painful Reality","/a-section-8-recipients-painful-reality.html"],
		["A Savory Survey","/a-savory-survey.html"],
		["Don't Rock The Boat","/dont-rock-the-boat.html"],
		["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management.html"],
		["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues.html"],
		["Cold War Echoes","/cold-war-echoes.html"],
		["Cabrini Cliffhanger","/cabrini-cliffhanger.html"],
		["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man.html"],
		["Washington Park: The Dying Hope","/washington-park-the-dying-hope.html"]],
	"HUD":[
		["CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls.html"],
		["Another CHA Chief Bows Out","/another-cha-chief-bows-out.html"],
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["A Message from the Resident President","/a-message-from-the-resident-president.html"],
		["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants.html"],
		["Charlotte Housing Authority Chief takes CHA Position","/charlotte-housing-authority-chief-takes-cha-position.html"],
		["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha.html"],
		["Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives.html"],
		["After The Dust","/after-the-dust.html"],
		["Housing Activists Take Action: An Update","/housing-activists-take-action-an-update.html"],
		["HUD Renews 19 States’ HIV/AIDS Supportive Housing Programs","/hud-renews-19-states%e2%80%99-hivaids-supportive-housing-programs.html"],
		["Ickes Homes News: The Final Curtain?","/ickes-homes-news-the-final-curtain.html"],
		["An Inside Out Experience","/an-inside-out-experience.html"],
		["The White House Agenda for the Poor","/the-white-house-agenda-for-the-poor.html"],
		["Harold Ickes Homes Update","/harold-ickes-homes-update.html"],
		["CHA Seniors Keep Waiting to Return Home","/cha-seniors-keep-waiting-to-return-home.html"],
		["U.S. Reps Call For Moratorium On Public Housing Demolitions","/u-s-reps-call-for-moratorium-on-public-housing-demolitions.html"],
		["Congress Accuses HUD of Mismanagement","/congress-accuses-hud-of-mismanagement.html"],
		["Lathrop Residents Want Vacant Units Occupied","/lathrop-residents-want-vacant-units-occupied.html"],
		["Who Could Miss The Hole?","/who-could-miss-the-hole.html"],
		["CHA Contracting Woes","/cha-contracting-woes.html"],
		["Tales of Lawndale Housing","/tales-of-lawndale-housing.html"],
		["There's H.O.P.E. for Gary Residents","/theres-h-o-p-e-for-gary-residents.html"],
		["More CHA Residents Voting Woes","/more-cha-residents-voting-woes.html"],
		["Harold Ickes News","/harold-ickes-news-6.html"],
		["Getting to Know Rockwell","/getting-to-know-rockwell.html"],
		["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects.html"],
		["CHAC An Update: 2003","/chac-an-update-2003.html"],
		["Residents Sue CHA","/residents-sue-cha.html"],
		["National Housing Crisis","/national-housing-crisis.html"],
		["Relocation Rights Contract","/relocation-rights-contract.html"],
		["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents.html"],
		["CAC Prepares for Battle","/cac-prepares-for-battle.html"],
		["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history.html"],
		["A 'One Strike' Battle Planned","/a-one-strike-battle-planned.html"],
		["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8.html"],
		["The State Of Section 8","/the-state-of-section-8.html"],
		["Del Prado Residents Face Uncertainty","/del-prado-residents-face-uncertainty.html"],
		["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike.html"],
		["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting.html"],
		["Cold War Echoes","/cold-war-echoes.html"],
		["HUD Head: CHA Off Troubled List","/hud-head-cha-off-troubled-list.html"],
		["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man.html"],
		["CHA Announces First Clean Audit","/cha-announces-first-clean-audit.html"],
		["A Decree But to What Degree?","/a-decree-but-to-what-degree.html"],
		["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center.html"],
		["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments.html"],
		["Horner Annex Reborn","/horner-annex-reborn.html"],
		["Focus On Section 8","/focus-on-section-8.html"],
		["Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing.html"],
		["The Man Who Scared the Hell Out of Me","/the-man-who-scared-the-hell-out-of-me.html"],
		["A Long Ride Home","/a-long-ride-home.html"],
		["Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington.html"]],
	"Mayor Richard M Daley":[
		["CHA Chiefs Come and Go as Plan Stalls","/cha-chiefs-come-and-go-as-plan-stalls.html"],
		["Lawsuit Underway after Guilty Verdict in Burge Trial","/lawsuit-underway-after-guilty-verdict-in-burge-trial.html"],
		["The CHA Plan Is Dead","/the-cha-plan-is-dead.html"],
		["The Times They Are A’Changing","/the-times-they-are-achanging.html"],
		["Deadly Moves: Troubling Development","/deadly-moves-troubling-development.html"],
		["Debating Affordable Housing","/debating-affordable-housing.html"],
		["Housing on State, City Agendas","/housing-on-state-city-agendas.html"],
		["Chicago's Hottest Elections","/chicagos-hottest-elections.html"],
		["Cold War Echoes","/cold-war-echoes.html"]],
	"ABLA":[
		["Remembering ABLA Homes' Deverra Beverly","/remembering-abla-homes-deverra-beverly.html"],
		["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections.html"],
		["Operation ABLE","/operation-able.html"],
		["ABLA News","/abla-news.html"],
		["ABLA News","/abla-news-2.html"],
		["ABLA Homes Update","/abla-homes-update.html"],
		["ABLA Relocation Report","/abla-relocation-report.html"],
		["The Magnificent Maya Angelou","/the-magnificent-maya-angelou.html"],
		["What's Happening in ABLA?","/whats-happening-in-abla.html"]],
	"national public housing museum":[
		["Remembering ABLA Homes' Deverra Beverly","/remembering-abla-homes-deverra-beverly.html"],
		["Why It's So Hard to End Poverty","/why-its-so-hard-to-end-poverty.html"],
		["An Afternoon of Good Times","/an-afternoon-of-good-times.html"],
		["Three Chicago Mayoral Candidates' Take on Public Housing","/1803.html"],
		["An Inside Out Experience","/an-inside-out-experience.html"]],
	"Chicago River":[
		["My First Kayaking Trip","/my-first-kayaking-trip.html"],
		["A River Adventure","/a-river-adventure.html"]],
	"eviction":[
		["Another CHA Chief Bows Out","/another-cha-chief-bows-out.html"],
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["Winners from the Resident Survey!","/winners-from-the-resident-survey.html"],
		["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1.html"],
		["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants.html"],
		["Is Chase Bank a Slumlord?","/is-chase-bank-a-slumlord.html"],
		["Low-income Tenants Rally at Chase Bank","/low-income-tenants-rally-at-chase-bank.html"],
		["You Have Been Served","/you-have-been-served.html"],
		["Last Day in 4525","/last-day-in-4525.html"],
		["Harold Ickes New School Update","/harold-ickes-new-school-update.html"],
		["Squatters Worry About Homelessness","/squatters-worry-about-homelessness.html"],
		["A 'One Strike' Battle Planned","/a-one-strike-battle-planned.html"],
		["A Section 8 Recipient's Painful Reality","/a-section-8-recipients-painful-reality.html"],
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"],
		["Squatters in CHA","/squatters-in-cha.html"],
		["Don't Rock The Boat","/dont-rock-the-boat.html"],
		["Del Prado Residents Face Uncertainty","/del-prado-residents-face-uncertainty.html"],
		["Transforming CHA: One Strike Woes","/transforming-cha-one-strike-woes.html"],
		["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike.html"],
		["L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike.html"],
		["Flannery Homes News","/flannery-homes-news.html"]],
	"Democratic party":[
		["We The People Media in the News","/we-the-people-media-in-the-news-3.html"],
		["The Sound of Silence","/the-sound-of-silence.html"],
		["Vote '96: Conventional Colors","/vote-96-conventional-colors-2.html"]],
	"gang violence":[
		["We The People Media in the News","/we-the-people-media-in-the-news-3.html"],
		["Meet the Real Robeson High School","/meet-the-real-robeson-high-school.html"],
		["Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street.html"],
		["We The People Media's Coverage of the Chicago Mayor's Race","/we-the-people-medias-coverage-of-the-chicago-mayors-race.html"],
		["Torture Victim Reflects on Burge Sentence","/torture-victim-reflects-on-burge-sentence.html"],
		["Residents' Journal Reporters Share Results of Youth Surveys","/residents-journal-reporters-share-results-of-youth-surveys.html"],
		["What We Need Now","/what-we-need-now.html"]],
	"Metra":[
		["We The People Media in the News","/we-the-people-media-in-the-news-3.html"]],
	"Republican Party":[
		["We The People Media in the News","/we-the-people-media-in-the-news-3.html"]],
	"Asian Carp":[
		["The Invasion of the Great Lakes","/the-invasion-of-the-great-lakes.html"],
		["Asian Carp is a Man-Made Issue","/asian-carp-is-a-man-made-issue.html"],
		["Chasing the “Blue Whale of Freshwater”","/chasing-the-blue-whale-of-freshwater.html"],
		["Shedd Aquarium Showcases Invasive Species","/shedd-aquarium-showcases-invasive-species.html"]],
	"Great Lakes":[
		["The Invasion of the Great Lakes","/the-invasion-of-the-great-lakes.html"],
		["Asian Carp is a Man-Made Issue","/asian-carp-is-a-man-made-issue.html"],
		["Chasing the “Blue Whale of Freshwater”","/chasing-the-blue-whale-of-freshwater.html"],
		["Shedd Aquarium Showcases Invasive Species","/shedd-aquarium-showcases-invasive-species.html"]],
	"Knight Center for Environmental Journalism":[
		["The Invasion of the Great Lakes","/the-invasion-of-the-great-lakes.html"],
		["Shedd Aquarium Showcases Invasive Species","/shedd-aquarium-showcases-invasive-species.html"],
		["Little Village Toxic Tour","/little-village-toxic-tour.html"],
		["The Health Effects of Pollution in Pilsen","/the-health-effects-of-pollution-in-pilsen.html"],
		["Lead and Coal Plants in Pilsen","/lead-and-coal-plants-in-pilsen.html"],
		["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery.html"]],
	"the enviornment":[
		["The Invasion of the Great Lakes","/the-invasion-of-the-great-lakes.html"],
		["Preserving History and Ecology","/preserving-history-and-ecology.html"],
		["Chicagoans Will Fish, Contamination or Not","/chicagoans-will-fish-contamination-or-not.html"],
		["Residents' Journal Reporters Share Results of Youth Surveys","/residents-journal-reporters-share-results-of-youth-surveys.html"]],
	"Notre Dame":[
		["Chasing the “Blue Whale of Freshwater”","/chasing-the-blue-whale-of-freshwater.html"]],
	"Ida B Wells":[
		["Oakwood Shores Update","/oakwood-shores-update.html"],
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["Black Pioneers Honored","/black-pioneers-honored.html"],
		["Ida B. Wells Revisited","/ida-b-wells-revisited-2.html"],
		["Residents' Journal Coverage of the Recent Demolition of the Last CHA Ida B. Wells Homes Buildings","/residents-journal-coverage-of-the-recent-demolition-of-the-last-cha-ida-b-wells-homes-buildings.html"],
		["Everyday Life","/everyday-life.html"],
		["Stereotypes","/stereotypes.html"],
		["A Year Later","/a-year-later.html"],
		["Growing Up","/growing-up.html"],
		["This Ain't That","/this-aint-that.html"],
		["Me and My Hood","/me-and-my-hood.html"],
		["Troubling Development Update","/troubling-development-update.html"],
		["Positive People","/positive-people-2.html"],
		["Stop The Violence","/stop-the-violence-15.html"],
		["Ida B. Wells Reunion","/ida-b-wells-reunion.html"],
		["Inner-City Truths: A Book Review","/inner-city-truths-a-book-review.html"],
		["Wells on the Rise","/wells-on-the-rise.html"],
		["A Short History of Ida B. Wells","/a-short-history-of-ida-b-wells.html"]],
	"redevelopment":[
		["Oakwood Shores Update","/oakwood-shores-update.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news-2.html"],
		["Tenants Protest CHA’s Plans for Lathrop","/tenants-protest-chas-plans-for-lathrop.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news.html"],
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["Closing the CTA Red Line","/closing-the-cta-red-line.html"],
		["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1.html"],
		["Charlotte Housing Authority Chief takes CHA Position","/charlotte-housing-authority-chief-takes-cha-position.html"],
		["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha.html"],
		["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom.html"],
		["Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street.html"],
		["Robert Taylor On Line","/robert-taylor-on-line.html"],
		["Residents Blame CHA for School Closures","/residents-blame-cha-for-school-closures.html"],
		["Who Could Miss The Hole?","/who-could-miss-the-hole.html"],
		["Residents: What People Want","/residents-what-people-want.html"],
		["Deadly Moves - an update","/deadly-moves-an-update.html"],
		["Bronzeville Community Alert","/bronzeville-community-alert.html"],
		["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2.html"],
		["Oops, They Did It Again","/oops-they-did-it-again.html"],
		["Getting to Know Rockwell","/getting-to-know-rockwell.html"],
		["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing.html"],
		["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects.html"],
		["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas.html"],
		["Myths and Urban Legends","/myths-and-urban-legends.html"],
		["Stop The Violence","/stop-the-violence-11.html"],
		["Relocation Rights Contract","/relocation-rights-contract.html"],
		["CAC Prepares for Battle","/cac-prepares-for-battle.html"],
		["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history.html"],
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"],
		["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing.html"],
		["A Trip To The Future","/a-trip-to-the-future.html"],
		["Razing the Brooks Extension","/razing-the-brooks-extension.html"],
		["Ickes: Back To Square One","/ickes-back-to-square-one.html"],
		["Transforming CHA: Chewing Up Tobacco Road","/transforming-cha-chewing-up-tobacco-road.html"],
		["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan.html"],
		["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues.html"],
		["Transforming CHA: Washington Park Wants Answers","/transforming-cha-washington-park-wants-answers.html"],
		["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting.html"],
		["Cold War Echoes","/cold-war-echoes.html"],
		["Cabrini Cliffhanger","/cabrini-cliffhanger.html"],
		["CHA Announces First Clean Audit","/cha-announces-first-clean-audit.html"],
		["A Decree But to What Degree?","/a-decree-but-to-what-degree.html"],
		["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center.html"],
		["Dear Resident","/dear-resident-8.html"],
		["Washington Park: The Dying Hope","/washington-park-the-dying-hope.html"]],
	"relocation":[
		["Oakwood Shores Update","/oakwood-shores-update.html"],
		["We The People Media in the News","/we-the-people-media-in-the-news-2.html"],
		["Tenants Protest CHA’s Plans for Lathrop","/tenants-protest-chas-plans-for-lathrop.html"],
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["CHA Opens Wait List in Lincoln Square","/cha-opens-wait-list-in-lincoln-square.html"],
		["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1.html"],
		["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants.html"],
		["Charlotte Housing Authority Chief takes CHA Position","/charlotte-housing-authority-chief-takes-cha-position.html"],
		["Cabrini Row House Tenants Prepare to Fight CHA","/cabrini-row-house-tenants-prepare-to-fight-cha.html"],
		["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom.html"],
		["Relocation Rights Duel","/relocation-rights-duel.html"],
		["Robert Taylor On Line","/robert-taylor-on-line.html"],
		["CHA Seniors Keep Waiting to Return Home","/cha-seniors-keep-waiting-to-return-home.html"],
		["The Aftermath of Relocation","/the-aftermath-of-relocation.html"],
		["The Pros and Cons of Relocation","/pros-and-cons-of-relocation.html"],
		["Publisher's Box","/publishers-box-2.html"],
		["A Taylor-Made Election","/a-taylor-made-election.html"],
		["Wipe Out","/wipe-out.html"],
		["Deadly Moves - an update","/deadly-moves-an-update.html"],
		["Closure Razes Resident Hopes","/closure-razes-resident-hopes.html"],
		["Harold Ickes News","/harold-ickes-news-4.html"],
		["You Have Been Served","/you-have-been-served.html"],
		["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2.html"],
		["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves.html"],
		["Positive People","/positive-people-3.html"],
		["Harold Ickes News","/harold-ickes-news-6.html"],
		["Positive People","/positive-people-4.html"],
		["Getting to Know Rockwell","/getting-to-know-rockwell.html"],
		["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing.html"],
		["Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha.html"],
		["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas.html"],
		["A Report On Management at Ogden Courts","/a-report-on-management-at-ogden-courts.html"],
		["Thomas Sullivan Report Update","/thomas-sullivan-report-update.html"],
		["The Shocking Truth about CHA","/the-shocking-truth-about-cha.html"],
		["Homeless Not Hopeless","/homeless-not-hopeless.html"],
		["Residents Sue CHA","/residents-sue-cha.html"],
		["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations.html"],
		["National Housing Crisis","/national-housing-crisis.html"],
		["CHA Puts Resident In Storage","/cha-puts-resident-in-storage.html"],
		["South Suburban Living","/south-suburban-living.html"],
		["Electrically Charged","/electrically-charged.html"],
		["Last Day in 4525","/last-day-in-4525.html"],
		["Housing Crisis in Highland Park","/housing-crisis-in-highland-park.html"],
		["Relocation Rights Contract","/relocation-rights-contract.html"],
		["Maintenance Defects at Ogden Courts","/maintenance-defects-at-ogden-courts.html"],
		["Shocking Electric Bills Update","/shocking-electric-bills-update.html"],
		["CAC Prepares for Battle","/cac-prepares-for-battle.html"],
		["Shocking Electric Bills","/shocking-electric-bills.html"],
		["Drug War Diagnosis","/drug-war-diagnosis.html"],
		["A Savory Survey","/a-savory-survey.html"],
		["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8.html"],
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"],
		["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing.html"],
		["Squatters in CHA","/squatters-in-cha.html"],
		["Don't Rock The Boat","/dont-rock-the-boat.html"],
		["Razing the Brooks Extension","/razing-the-brooks-extension.html"],
		["Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place.html"],
		["Transforming CHA: Chewing Up Tobacco Road","/transforming-cha-chewing-up-tobacco-road.html"],
		["Transforming CHA: Making Connections","/transforming-cha-making-connections.html"],
		["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan.html"],
		["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation.html"],
		["Residents Fight Vacate Orders","/residents-fight-vacate-orders.html"],
		["Washington Park: The Dying Hope","/washington-park-the-dying-hope.html"],
		["What's Happening in ABLA?","/whats-happening-in-abla.html"]],
	"food deserts":[
		["A Protest Success Story","/a-protest-success-story.html"],
		["New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts.html"]],
	"Englewood community":[
		["What's So Great about Football?","/whats-so-great-about-football.html"],
		["It's Time to Focus on Bullying","/its-time-to-focus-on-bullying.html"],
		["Meet the Real Robeson High School","/meet-the-real-robeson-high-school.html"],
		["Healthy Ways to Fight Lead Poisoning","/healthy-ways-to-fight-lead-poisoning.html"],
		["Mayor Emanuel Booed at Budget Town Hall","/mayor-emanuel-booed-at-budget-townhall-meeting.html"],
		["On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith.html"],
		["Youths Speak Out on Violence","/youths-speak-out-on-violence.html"]],
	"football":[
		["What's So Great about Football?","/whats-so-great-about-football.html"]],
	"NFL":[
		["What's So Great about Football?","/whats-so-great-about-football.html"]],
	"Bullying":[
		["It's Time to Focus on Bullying","/its-time-to-focus-on-bullying.html"],
		["From the Inside Looking Out: Bullying","/from-the-inside-looking-out-bullying.html"]],
	"Chicago youth violence":[
		["Meet the Real Robeson High School","/meet-the-real-robeson-high-school.html"],
		["Do Students Trust Authority?","/do-students-trust-authority.html"]],
	"fracking":[
		["Frack Attack in Illinois","/frack-attack-in-illinois.html"]],
	"Governor Pat Quinn":[
		["Frack Attack in Illinois","/frack-attack-in-illinois.html"],
		["Illinois Governor Applauded for Abolishing Death Penalty","/illinois-governor-applauded-for-abolishing-death-penalty.html"]],
	"Michigan State University":[
		["Frack Attack in Illinois","/frack-attack-in-illinois.html"],
		["Making a college visit count","/making-a-college-visit-count.html"],
		["A Weekend of Firsts","/a-weekend-of-firsts.html"],
		["Shedd Aquarium Showcases Invasive Species","/shedd-aquarium-showcases-invasive-species.html"],
		["The Health Effects of Pollution in Pilsen","/the-health-effects-of-pollution-in-pilsen.html"],
		["Lead and Coal Plants in Pilsen","/lead-and-coal-plants-in-pilsen.html"],
		["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery.html"]],
	"farmers market":[
		["The Altgeld Gardens Farmers Market: A Personal Perspective","/the-altgeld-gardens-farmers-market-a-personal-perspective.html"]],
	"organic food":[
		["The Altgeld Gardens Farmers Market: A Personal Perspective","/the-altgeld-gardens-farmers-market-a-personal-perspective.html"]],
	"Sonia Sotomayor":[
		["Supreme Court Justice Sonia Sotomayor visits Chicago","/supreme-court-justice-sonia-sotomayor-visits-chicago.html"]],
	"U S Supreme Court":[
		["Supreme Court Justice Sonia Sotomayor visits Chicago","/supreme-court-justice-sonia-sotomayor-visits-chicago.html"]],
	"Chicago Freedom School":[
		["Honoring Dr. King's Legacy","/honoring-dr-kings-legacy.html"]],
	"Dr Martin Luther King Jr ":[
		["Honoring Dr. King's Legacy","/honoring-dr-kings-legacy.html"],
		["Remembering the Servitude of Dr. King","/remembering-the-servitude-of-dr-king.html"]],
	"Henry Moore":[
		["Chicago’s Nuclear History","/chicagos-nuclear-history.html"]],
	"nuclear power":[
		["Chicago’s Nuclear History","/chicagos-nuclear-history.html"],
		["Uranium: A Hidden Tragedy","/uranium-a-hidden-tragedy.html"]],
	"University of Chicago":[
		["Chicago’s Nuclear History","/chicagos-nuclear-history.html"],
		["Del Prado Residents Face Uncertainty","/del-prado-residents-face-uncertainty.html"]],
	"gun control":[
		["We The People Media ED on Chicago Newsroom","/we-the-people-media-ed-on-chicago-newsroom.html"],
		["Stop The Violence","/stop-the-violence-5.html"]],
	"environment":[
		["Pilsen Gets Environmental Justice","/pilsen-gets-environmental-justice.html"],
		["Little Village Toxic Tour","/little-village-toxic-tour.html"],
		["Residents' Journal Publisher talking about an Environmental Project for Youth","/residents-journal-publisher-talking-about-an-environmental-project-for-youth.html"],
		["Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks.html"],
		["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues.html"]],
	"poverty":[
		["Why It's So Hard to End Poverty","/why-its-so-hard-to-end-poverty.html"],
		["U.S. Senate Candidate Daniel Hynes","/u-s-senate-candidate-daniel-hynes.html"],
		["The True Face of Poverty","/the-true-face-of-poverty.html"],
		["Myths and Urban Legends","/myths-and-urban-legends.html"],
		["Welfare Reform: Lost In Space","/welfare-reform-lost-in-space.html"]],
	"President Barak Obama":[
		["Why It's So Hard to End Poverty","/why-its-so-hard-to-end-poverty.html"],
		["Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d.html"]],
	"President Clinton":[
		["Why It's So Hard to End Poverty","/why-its-so-hard-to-end-poverty.html"],
		["Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d.html"]],
	"welfare reform":[
		["Why It's So Hard to End Poverty","/why-its-so-hard-to-end-poverty.html"],
		["Welfare Reform: Lost In Space","/welfare-reform-lost-in-space.html"]],
	"Chicago Newsroom":[
		["We The People Media in the News","/we-the-people-media-in-the-news.html"]],
	"WBEZ":[
		["We The People Media in the News","/we-the-people-media-in-the-news.html"],
		["CHA's New Plan?","/chas-new-plan.html"],
		["Residents' Journal Publisher on WBEZ","/residents-journal-publisher-on-wbez.html"]],
	"television":[
		["Does TV Affect Children's Behavior?","/does-tv-affect-childrens-behavior.html"]],
	"youth violence":[
		["Does TV Affect Children's Behavior?","/does-tv-affect-childrens-behavior.html"],
		["Commissioner Fails to Show at Mental Health Town Hall Meeting","/commissioner-fails-to-show-at-mental-health-town-hall.html"],
		["Youth Activists: Juvenile Inmates Treated Like Animals.","/youth-activists-juvenile-inmates-treated-like-animals.html"],
		["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom.html"],
		["On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith.html"],
		["Youths Speak Out on Violence","/youths-speak-out-on-violence.html"],
		["Do Students Trust Authority?","/do-students-trust-authority.html"],
		["RJ Youth Instructor Discussing Teen Project with Youth Reporter","/rj-youth-instructor-discussing-teen-project-with-youth-reporter.html"],
		["A Teens View of a recent Chicago Youth Summit","/residents-journal-can-tv-show-on-a-recent-chicago-youth-summit.html"],
		["Residents' Journal Reporters Share Results of Youth Surveys","/residents-journal-reporters-share-results-of-youth-surveys.html"],
		["RJ Reporter talking about Youth Media Project","/rj-reporter-talking-about-youth-media-project.html"],
		["Where I Come From","/where-i-come-from.html"],
		["African-American Male Suicides","/african-american-male-suicides.html"],
		["Stop the Violence","/stop-the-violence-12.html"]],
	"Beyonce":[
		["Beyonce is My Role Model","/beyonce-is-my-role-model.html"]],
	"Jay Z":[
		["Beyonce is My Role Model","/beyonce-is-my-role-model.html"]],
	"Hip Hop":[
		["Hip Hop Star on the Rise","/hip-hop-star-on-the-rise.html"],
		["On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith.html"]],
	"music":[
		["Hip Hop Star on the Rise","/hip-hop-star-on-the-rise.html"],
		["The Compassionate Blues","/the-compassionate-blues.html"]],
	"Pilsen":[
		["Chicagoans Will Fish, Contamination or Not","/chicagoans-will-fish-contamination-or-not.html"],
		["Lead and Coal Plants in Pilsen","/lead-and-coal-plants-in-pilsen.html"],
		["Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell.html"],
		["Pilsen Guards Against Gentrifyers","/pilsen-guards-against-gentrifyers.html"],
		["Senior Rehab Update","/senior-rehab-update.html"]],
	"employment":[
		["CAC Releases Vision for the Future","/cac-releases-vision-for-the-future.html"],
		["Winners from the Resident Survey!","/winners-from-the-resident-survey.html"],
		["Residents' Journal Reporters Share Results of Youth Surveys","/residents-journal-reporters-share-results-of-youth-surveys.html"],
		["RJ Reporter talking about Youth Media Project","/rj-reporter-talking-about-youth-media-project.html"],
		["Stop the Violence","/stop-the-violence-2.html"],
		["Ex Marks The Spot","/ex-marks-the-spot.html"],
		["The Price of a Political Job","/the-price-of-a-political-job.html"],
		["War with Iraq: A Personal Perspective","/war-with-iraq-a-personal-perspective.html"],
		["Operation ABLE","/operation-able.html"],
		["Welfare Reform: Lost In Space","/welfare-reform-lost-in-space.html"],
		["Second Chance Legislation","/second-chance-legislation.html"],
		["Youths Rally For Summer Jobs","/youths-rally-for-summer-jobs.html"],
		["Transforming CHA: How To Save On Rent","/transforming-cha-how-to-save-on-rent.html"],
		["REDI: A New Beginning?","/redi-a-new-beginning.html"],
		["8,000 To Get Jobs Help","/8000-to-get-jobs-help.html"],
		["Stop the Violence II","/stop-the-violence-ii.html"],
		["Cabrini-Green Update","/cabrini-green-update.html"],
		["Safe Summer 97","/safe-summer-97.html"]],
	"jane adams senior caucus":[
		["Stopping Elder Abuse","/stopping-elder-abuse.html"]],
	"Ida B Wells Homes":[
		["Black Pioneers Honored","/black-pioneers-honored.html"],
		["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents.html"]],
	"affordable housing":[
		["CHA Opens Wait List in Lincoln Square","/cha-opens-wait-list-in-lincoln-square.html"],
		["CHA Opens Public Housing Wait List for South Side Neighborhoods","/cha-opens-public-housing-wait-list-for-specific-areas.html"],
		["State Passes Support for Renters","/state-passes-support-for-renters.html"],
		["Update: Zoning and Affordable Housing","/update-zoning-and-affordable-housing.html"],
		["2004 Election Focal Points","/2004-election-focal-points.html"],
		["Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park.html"],
		["U.S. Senate Candidate Barack Obama","/u-s-senate-candidate-barack-obama.html"],
		["Debating Affordable Housing","/debating-affordable-housing.html"],
		["Homeless Not Hopeless","/homeless-not-hopeless.html"],
		["Housing on State, City Agendas","/housing-on-state-city-agendas.html"],
		["National Housing Crisis","/national-housing-crisis.html"],
		["Housing Crisis in Highland Park","/housing-crisis-in-highland-park.html"],
		["Housing For The Disabled","/housing-for-the-disabled.html"],
		["The State Of Section 8","/the-state-of-section-8.html"]],
	"waiting list":[
		["CHA Opens Wait List in Lincoln Square","/cha-opens-wait-list-in-lincoln-square.html"],
		["CHA Opens Public Housing Wait List for South Side Neighborhoods","/cha-opens-public-housing-wait-list-for-specific-areas.html"],
		["Section 8 Update","/section-8-update.html"],
		["Focus On Section 8","/focus-on-section-8.html"]],
	"CTA":[
		["Closing the CTA Red Line","/closing-the-cta-red-line.html"],
		["$1 Billion for CTA","/1-billion-for-cta.html"]],
	"CTA President Forrest Claypool":[
		["Closing the CTA Red Line","/closing-the-cta-red-line.html"],
		["$1 Billion for CTA","/1-billion-for-cta.html"]],
	"Terry Peterson":[
		["Closing the CTA Red Line","/closing-the-cta-red-line.html"],
		["Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle.html"],
		["Victory at Bridgeport Homes","/victory-at-bridgeport-homes.html"],
		["A Questionable Connection","/a-questionable-connection.html"]],
	"dangerous dogs":[
		["Stray Dogs in Englewood","/stray-dogs-in-englewood.html"]],
	"Douglas":[
		["CHA Opens Public Housing Wait List for South Side Neighborhoods","/cha-opens-public-housing-wait-list-for-specific-areas.html"]],
	"Fuller Park":[
		["CHA Opens Public Housing Wait List for South Side Neighborhoods","/cha-opens-public-housing-wait-list-for-specific-areas.html"]],
	"Kenwood":[
		["CHA Opens Public Housing Wait List for South Side Neighborhoods","/cha-opens-public-housing-wait-list-for-specific-areas.html"]],
	"New City":[
		["CHA Opens Public Housing Wait List for South Side Neighborhoods","/cha-opens-public-housing-wait-list-for-specific-areas.html"]],
	"Oakland":[
		["CHA Opens Public Housing Wait List for South Side Neighborhoods","/cha-opens-public-housing-wait-list-for-specific-areas.html"]],
	"Dearborn Homes":[
		["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1.html"],
		["Ickes Leader Challenges CHA CEO","/ickes-leader-challenges-cha-ceo.html"],
		["Publisher's Box","/publishers-box.html"],
		["Troubling Development Update","/troubling-development-update.html"],
		["Positive People","/positive-people-2.html"],
		["Stop The Violence","/stop-the-violence-11.html"]],
	"Harold Ickes Homes":[
		["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1.html"],
		["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer.html"],
		["An Afternoon of Good Times","/an-afternoon-of-good-times.html"],
		["Ickes Homes News: The Final Curtain?","/ickes-homes-news-the-final-curtain.html"],
		["Harold Ickes Homes Update","/harold-ickes-homes-update.html"],
		["Ickes Leader Challenges CHA CEO","/ickes-leader-challenges-cha-ceo.html"],
		["Harold L. Ickes Homes News","/harold-l-ickes-homes-news.html"],
		["Harold Ickes News","/harold-ickes-news.html"],
		["Jackson Visits Ickes","/jackson-visits-ickes.html"],
		["Ickes and Other CHA News","/ickes-and-other-cha-news.html"],
		["CHA Development News","/cha-development-news.html"],
		["Troubling Development Update","/troubling-development-update.html"],
		["Harold Ickes News","/harold-ickes-news-2.html"],
		["Harold Ickes News","/harold-ickes-news-3.html"],
		["Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes.html"],
		["Harold Ickes News","/harold-ickes-news-4.html"],
		["Harold Ickes News","/harold-ickes-news-5.html"],
		["Harold Ickes News","/harold-ickes-news-6.html"],
		["Harold Ickes News","/harold-ickes-news-7.html"],
		["Harold Ickes Service Connectors","/harold-ickes-service-connectors.html"],
		["Harold Ickes News","/harold-ickes-news-8.html"],
		["Harold Ickes News","/harold-ickes-news-9.html"],
		["Harold Ickes New School Update","/harold-ickes-new-school-update.html"],
		["Harold Ickes News","/harold-ickes-news-10.html"],
		["Ickes' Homes New Managers","/ickes-homes-new-managers.html"],
		["Residents Look to the Hills","/residents-look-to-the-hills.html"],
		["Harold Ickes Homes News","/harold-ickes-homes-news.html"],
		["Ickes: Back To Square One","/ickes-back-to-square-one.html"],
		["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management.html"],
		["The New Teachers Academy","/the-new-teachers-academy.html"],
		["Transforming CHA: New Lights on Dark Passage","/transforming-cha-new-lights-on-dark-passage.html"],
		["All Things Old and New at Harold Ickes Homes","/all-things-old-and-new.html"]],
	"Hilliard Homes":[
		["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1.html"],
		["Transforming CHA: New Lights on Dark Passage","/transforming-cha-new-lights-on-dark-passage.html"]],
	"Stateway Gardens":[
		["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1.html"],
		["Who Could Miss The Hole?","/who-could-miss-the-hole.html"],
		["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force.html"],
		["A Championship Victory","/a-championship-victory.html"],
		["Positive Residents of the CHA","/positive-residents-of-the-cha.html"],
		["Residents Fight Vacate Orders","/residents-fight-vacate-orders.html"]],
	"Washington Park":[
		["Resident Survey Ends June 1!!! Click This Link Today!","/resident-survey-ends-june-1.html"],
		["Wipe Out","/wipe-out.html"],
		["Positive People","/positive-people.html"],
		["Washington Park: The Dying Hope","/washington-park-the-dying-hope.html"]],
	"Grassroots Collaborative":[
		["Rally against NATO, War and Poverty","/rally-against-nato-war-and-poverty.html"]],
	"NATO":[
		["Rally against NATO, War and Poverty","/rally-against-nato-war-and-poverty.html"]],
	"protests":[
		["Rally against NATO, War and Poverty","/rally-against-nato-war-and-poverty.html"],
		["Tenants Protest CHA Drug Testing Plan","/public-hearing-on-cha-drug-test-proposal.html"],
		["Tenants Protest CHA Plans to Drug Test Them","/2644.html"],
		["Chaos at the Bank of Lawndale","/chaos-at-the-bank-of-lawndale.html"]],
	"housing":[
		["Enter Survey, Win a Laptop Computer!","/enter-survey-win-a-laptop-computer.html"],
		["Altgeld Tenants: Police, Cameras Not Improving Security","/altgeld-tenants-police-cameras-not-improving-security.html"],
		["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom.html"],
		["Special Investigation: CHA Wanted Kids’ Report Cards","/special-investigation-cha-wanted-kids%e2%80%99-report-cards.html"],
		["Where are CHA’s Residents?","/where-are-cha%e2%80%99s-residents.html"],
		["Cabrini rowhouses’ fate in jeopardy","/cabrini-rowhouses%e2%80%99-fate-in-jeopardy.html"],
		["A Third Generation’s Take on Relocation from Last Cabrini Building","/a-third-generation%e2%80%99s-take-on-relocation-from-last-cabrini-building.html"],
		["Residents' Journal Reporters Share Results of Youth Surveys","/residents-journal-reporters-share-results-of-youth-surveys.html"],
		["RJ Reporter talking about Youth Media Project","/rj-reporter-talking-about-youth-media-project.html"],
		["Robert Taylor On Line","/robert-taylor-on-line.html"],
		["Crystal Clear Views","/crystal-clear-views-4.html"],
		["A Trip To The Future","/a-trip-to-the-future.html"],
		["Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place.html"],
		["Project Based Section-8s Threatened","/project-based-section-8s-threatened.html"],
		["Transforming CHA: One Strike Woes","/transforming-cha-one-strike-woes.html"],
		["Cold War Echoes","/cold-war-echoes.html"],
		["L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike.html"],
		["Access Report","/access-report-2.html"],
		["Replacement Housing or Replacing People","/replacement-housing-or-replacing-people.html"],
		["Seniors form new organization","/seniors-form-new-organization.html"]],
	"Illinois Teen Institute":[
		["Learning about the world on a youth retreat","/learning-about-the-world-on-a-youth-retreat.html"]],
	"Urban Youth International Journalism Program":[
		["Making a college visit count","/making-a-college-visit-count.html"],
		["A Dream Come True","/a-dream-come-true.html"],
		["The Garden","/the-garden.html"],
		["The Transformation of Jason Moy","/the-transformation-of-jason-moy.html"]],
	"Youth Journalism":[
		["Making a college visit count","/making-a-college-visit-count.html"],
		["The Fish of Lake Michigan","/the-fish-of-lake-michigan.html"],
		["The Health Effects of Pollution in Pilsen","/the-health-effects-of-pollution-in-pilsen.html"],
		["A Dream Come True","/a-dream-come-true.html"]],
	"leadership":[
		["New Calendar For Public Housing Tenants","/new-calendar-for-public-housing-tenants.html"],
		["Wipe Out","/wipe-out.html"],
		["Positive People","/positive-people-2.html"],
		["Deadly Moves: In Too Deep","/deadly-moves-in-too-deep.html"],
		["Positive People","/positive-people-4.html"],
		["Representing Residents","/representing-residents.html"],
		["Positive Residents of the CHA","/positive-residents-of-the-cha.html"],
		["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents.html"],
		["Productive Men of the CHA","/productive-men-of-the-cha.html"],
		["CAC Prepares for Battle","/cac-prepares-for-battle.html"],
		["The Next CHA Chairman?","/the-next-cha-chairman.html"],
		["Farewell, Mr. Chairman","/farewell-mr-chairman.html"],
		["Chatting with Marie Billingsley","/chatting-with-marie-billingsley.html"],
		["The Life of Artensa Randolph","/the-life-of-artensa-randolph.html"],
		["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center.html"],
		["Stop the Violence","/stop-the-violence-17.html"],
		["Marion...Marion Stamps","/marion-marion-stamps.html"]],
	"Ethan Michaeli":[
		["CHA's New Plan?","/chas-new-plan.html"]],
	"Imagine Englewood If":[
		["Healthy Ways to Fight Lead Poisoning","/healthy-ways-to-fight-lead-poisoning.html"],
		["Remembering the Servitude of Dr. King","/remembering-the-servitude-of-dr-king.html"],
		["Being emo","/being-emo.html"],
		["The Bow Campaign","/the-bow-campaign.html"],
		["Marching in Washington","/marching-in-washington.html"],
		["Youths Speak Out on Violence","/youths-speak-out-on-violence.html"]],
	"Lead poisoning":[
		["Healthy Ways to Fight Lead Poisoning","/healthy-ways-to-fight-lead-poisoning.html"]],
	"Black Heritage":[
		["John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp.html"]],
	"Ebony Magazine":[
		["John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp.html"]],
	"Emmett Louis Till":[
		["John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp.html"]],
	"Jesse Jackson Jr":[
		["John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp.html"]],
	"Jet Magazine":[
		["John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp.html"]],
	"John H Johnson":[
		["John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp.html"]],
	"Johnson Publishing Company":[
		["John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp.html"]],
	"U S Postal Service":[
		["John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp.html"]],
	"U S Rep ":[
		["John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp.html"]],
	"U S Rep Bobby L Rush":[
		["John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp.html"]],
	"U S Rep Danny K Davis":[
		["John H. Johnson Honored with Black Heritage Forever Stamp","/john-h-johnson-honored-with-black-heritage-forever-stamp.html"]],
	"Chicago Blackhawks":[
		["Blackhawks Host CHA Kids","/blackhawks-host-cha-kids.html"]],
	"hockey":[
		["Blackhawks Host CHA Kids","/blackhawks-host-cha-kids.html"]],
	"Sixth Grace Presbyterian Church":[
		["Remembering the Servitude of Dr. King","/remembering-the-servitude-of-dr-king.html"]],
	"WVON":[
		["Remembering the Servitude of Dr. King","/remembering-the-servitude-of-dr-king.html"],
		["Black History Through Performance","/black-history-through-performance.html"]],
	"Fair trade clothing":[
		["Fair Trade Clothing","/fair-trade-clothing.html"]],
	"Luke O Toole Elementary School":[
		["Fair Trade Clothing","/fair-trade-clothing.html"]],
	"Mata Traders":[
		["Fair Trade Clothing","/fair-trade-clothing.html"]],
	"Chicago City Council":[
		["Group Carols to Save Mental Health Clinics","/group-carols-to-save-mental-health-clinics.html"],
		["On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith.html"],
		["Debating Affordable Housing","/debating-affordable-housing.html"]],
	"Chicago Department of Public Health":[
		["Group Carols to Save Mental Health Clinics","/group-carols-to-save-mental-health-clinics.html"]],
	"Chicago Mental Health Movement":[
		["Group Carols to Save Mental Health Clinics","/group-carols-to-save-mental-health-clinics.html"]],
	"Mayor Rahm Emanuel":[
		["Group Carols to Save Mental Health Clinics","/group-carols-to-save-mental-health-clinics.html"],
		["$1 Billion for CTA","/1-billion-for-cta.html"],
		["New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts.html"],
		["Mayor Emanuel Booed at Budget Town Hall","/mayor-emanuel-booed-at-budget-townhall-meeting.html"],
		["Residents' Journal Publisher on WBEZ","/residents-journal-publisher-on-wbez.html"]],
	"news":[
		["Group Carols to Save Mental Health Clinics","/group-carols-to-save-mental-health-clinics.html"],
		["Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update.html"],
		["Altgeld Gardens Report","/altgeld-gardens-report.html"],
		["Flannery Homes News","/flannery-homes-news.html"]],
	"4 H Children’s Garden":[
		["A Weekend of Firsts","/a-weekend-of-firsts.html"]],
	"environmental journalism":[
		["A Weekend of Firsts","/a-weekend-of-firsts.html"]],
	"Union Station":[
		["A Weekend of Firsts","/a-weekend-of-firsts.html"]],
	"WKAR":[
		["A Weekend of Firsts","/a-weekend-of-firsts.html"]],
	"Emo":[
		["Being emo","/being-emo.html"]],
	"Three Days Grace":[
		["Being emo","/being-emo.html"]],
	"Bronzeville":[
		["Occupiers, Officials Try to Help Homeowners","/occupiers-officials-try-to-help-homeowners.html"],
		["Honoring Sam Cooke","/honoring-sam-cooke.html"],
		["Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks.html"],
		["Should Liquor Stores Be Banned in Bronzeville?","/should-liquor-stores-be-banned-in-bronzeville.html"],
		["Residents' Journal Senior Reporter Discussing a Bronzeville Family History Research Project","/residents-journal-senior-reporter-discussing-a-bronzeville-family-history-research-project.html"],
		["A Day in the Life of a JROTC Cadet","/a-day-in-the-life-of-a-jrotc-cadet.html"],
		["Youths Testify for Alternative Schools","/youths-testify-for-alternative-schools.html"],
		["Black Metropolis National Heritage Area Project","/black-metropolis-national-heritage-area-project.html"],
		["Bronzeville Community Alert","/bronzeville-community-alert.html"],
		["Chicago's Hottest Elections","/chicagos-hottest-elections.html"],
		["HIV/AIDs Crisis","/hivaids-crisis.html"]],
	"home foreclosure":[
		["Occupiers, Officials Try to Help Homeowners","/occupiers-officials-try-to-help-homeowners.html"]],
	"Illinois Attorney General s Office":[
		["Occupiers, Officials Try to Help Homeowners","/occupiers-officials-try-to-help-homeowners.html"]],
	"Illinois Institute of Technology":[
		["Occupiers, Officials Try to Help Homeowners","/occupiers-officials-try-to-help-homeowners.html"]],
	"Occupy Chicago":[
		["Occupiers, Officials Try to Help Homeowners","/occupiers-officials-try-to-help-homeowners.html"]],
	"Occupy Wall Street":[
		["Occupiers, Officials Try to Help Homeowners","/occupiers-officials-try-to-help-homeowners.html"]],
	"homelessness":[
		["New Report: Homeless Being Criminalized","/new-report-homeless-being-criminalizing.html"],
		["Residents' Journal Reporters Share Results of Youth Surveys","/residents-journal-reporters-share-results-of-youth-surveys.html"],
		["RJ Reporter talking about Youth Media Project","/rj-reporter-talking-about-youth-media-project.html"],
		["HUD Renews 19 States’ HIV/AIDS Supportive Housing Programs","/hud-renews-19-states%e2%80%99-hivaids-supportive-housing-programs.html"],
		["Homeless Vets Speak Out","/homeless-vets-speak-out.html"],
		["CHA New Work Rule Questioned","/cha-new-work-rule-questioned.html"],
		["State Passes Support for Renters","/state-passes-support-for-renters.html"],
		["2004 Election Focal Points","/2004-election-focal-points.html"],
		["Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park.html"],
		["Crystal Clear Views","/crystal-clear-views-9.html"],
		["National Housing Crisis","/national-housing-crisis.html"],
		["CHA Puts Resident In Storage","/cha-puts-resident-in-storage.html"],
		["Last Day in 4525","/last-day-in-4525.html"],
		["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8.html"]],
	"National Law Center on Homelessness and Poverty":[
		["New Report: Homeless Being Criminalized","/new-report-homeless-being-criminalizing.html"]],
	"CHA Altgeld Gardens":[
		["Parents Protest CPS Turn-Arounds","/parents-protest-cps-turn-arounds.html"],
		["Altgeld’s New Library","/altgeld%e2%80%99s-new-library.html"],
		["My trip to Paris","/my-trip-to-paris.html"],
		["Altgeld Youth Protest Lack of Library","/altgeld-youth-protest-lack-of-library.html"]],
	"Jean Claude Brizard":[
		["Parents Protest CPS Turn-Arounds","/parents-protest-cps-turn-arounds.html"]],
	"Kenwood Oakland Community Organization":[
		["Parents Protest CPS Turn-Arounds","/parents-protest-cps-turn-arounds.html"],
		["Is CHA Holding Vacant Apartments?","/is-cha-holding-vacant-apartments.html"],
		["Residents' Journal Editor-in-chief talking about Summer Youth Employment","/residents-journal-editor-in-chief-talking-about-summer-youth-employment.html"]],
	"Chicago violence":[
		["Local Pastor Camps out on Motel Roof to Highlight Area Violence","/local-pastor-camps-out-on-motel-roof-to-highlight-area-violence.html"],
		["CAN TV Devotes Entire Day Programming to “Stop the Violence” in the City of Chicago","/can-tv-devotes-entire-day-programming-to-stop-the-violence-in-the-city-of-chicago.html"],
		["CPS Fan Restrictions","/cps-fan-restrictions.html"],
		["Growing Up","/growing-up.html"],
		["Stop The Violence","/stop-the-violence-7.html"],
		["Stop The Violence","/stop-the-violence-9.html"],
		["Lathrop News","/lathrop-news.html"],
		["Stop The Violence","/stop-the-violence-10.html"],
		["Stop The Violence","/stop-the-violence-13.html"],
		["Stop The Violence","/stop-the-violence-14.html"]],
	"New Beginnings Church":[
		["Local Pastor Camps out on Motel Roof to Highlight Area Violence","/local-pastor-camps-out-on-motel-roof-to-highlight-area-violence.html"]],
	"Super Motel":[
		["Local Pastor Camps out on Motel Roof to Highlight Area Violence","/local-pastor-camps-out-on-motel-roof-to-highlight-area-violence.html"]],
	"Woodlawn":[
		["Local Pastor Camps out on Motel Roof to Highlight Area Violence","/local-pastor-camps-out-on-motel-roof-to-highlight-area-violence.html"],
		["On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith.html"],
		["Harold Ickes Service Connectors","/harold-ickes-service-connectors.html"]],
	"Central Advisory Council":[
		["Tenants' Lawyer: CHA Drug Testing Policy Will End Up in Court","/tenants-lawyer-cha-drug-testing-policy-will-end-up-in-court.html"],
		["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph.html"]],
	"CHA Lakefront Properties":[
		["Tenants' Lawyer: CHA Drug Testing Policy Will End Up in Court","/tenants-lawyer-cha-drug-testing-policy-will-end-up-in-court.html"]],
	"CHA mixed income communites":[
		["Tenants' Lawyer: CHA Drug Testing Policy Will End Up in Court","/tenants-lawyer-cha-drug-testing-policy-will-end-up-in-court.html"]],
	"drug testing residents":[
		["Tenants' Lawyer: CHA Drug Testing Policy Will End Up in Court","/tenants-lawyer-cha-drug-testing-policy-will-end-up-in-court.html"]],
	"Oakwood Shore":[
		["Tenants' Lawyer: CHA Drug Testing Policy Will End Up in Court","/tenants-lawyer-cha-drug-testing-policy-will-end-up-in-court.html"]],
	"Ald Pat Dowell":[
		["New Mandates for Chicago Public Schools","/new-mandates-for-chicago-public-schools.html"],
		["Pollution Affects Everyone","/pollution-affects-everyone.html"]],
	"Chicago Teachers Union":[
		["New Mandates for Chicago Public Schools","/new-mandates-for-chicago-public-schools.html"],
		["Parents File Discrimination Complaint against CPS Promotion Policy for Elementary Students","/parents-file-discrimination-complaint-against-cps-promotion-policy-for-elementary-students.html"],
		["Under Fire, Board Closes Schools Anyway","/under-fire-board-closes-schools-anyway.html"]],
	"Grand Boulevard Federation":[
		["New Mandates for Chicago Public Schools","/new-mandates-for-chicago-public-schools.html"]],
	"U S Sen Mattie Hunter":[
		["New Mandates for Chicago Public Schools","/new-mandates-for-chicago-public-schools.html"]],
	"Ald Harry Osterman":[
		["CHA Reopens Landmark Senior Building","/cha-reopens-landmark-senior-building.html"]],
	"CHA Plan for Transformation":[
		["CHA Reopens Landmark Senior Building","/cha-reopens-landmark-senior-building.html"],
		["The CHA Plan Is Dead","/the-cha-plan-is-dead.html"],
		["Harold Ickes Homes Update","/harold-ickes-homes-update.html"],
		["CHA’s Safe Harbor Gets Bigger","/chas-safe-harbor-gets-bigger.html"],
		["Residents Blame CHA for School Closures","/residents-blame-cha-for-school-closures.html"],
		["CHA Seniors Keep Waiting to Return Home","/cha-seniors-keep-waiting-to-return-home.html"]],
	"CHA Pomeroy Senior Apartments":[
		["CHA Reopens Landmark Senior Building","/cha-reopens-landmark-senior-building.html"]],
	"Illinois Office of Public Housing Director Steven Meiss":[
		["CHA Reopens Landmark Senior Building","/cha-reopens-landmark-senior-building.html"]],
	"Forrest Claypool":[
		["$1 Billion for CTA","/1-billion-for-cta.html"],
		["Cook County Presidential Race","/cook-county-presidential-race.html"]],
	"Gov Pat Quinn":[
		["$1 Billion for CTA","/1-billion-for-cta.html"],
		["Residents' Journal Editor-in-chief talking about Summer Youth Employment","/residents-journal-editor-in-chief-talking-about-summer-youth-employment.html"],
		["Disability Rights Advocates Protest, and Gov. Quinn Retreats","/disability-rights-advocates-protest-and-gov-quinn-retreats.html"],
		["Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d.html"]],
	"Illinois Department of Transportation":[
		["$1 Billion for CTA","/1-billion-for-cta.html"]],
	"Chicago public school students":[
		["Some Lathrop Kids Get a Bus, But Not All","/some-lathrop-kids-get-a-bus-but-not-all.html"],
		["Under Pressure: Students and Teachers on Stress","/under-pressure-students-and-teachers-on-stress.html"]],
	"Fredrick Jahn Elementary School":[
		["Some Lathrop Kids Get a Bus, But Not All","/some-lathrop-kids-get-a-bus-but-not-all.html"]],
	"Lathrop Homes":[
		["Some Lathrop Kids Get a Bus, But Not All","/some-lathrop-kids-get-a-bus-but-not-all.html"],
		["Is CHA Holding Vacant Apartments?","/is-cha-holding-vacant-apartments.html"],
		["CHA Board Meeting Crashed with Concerns","/cha-board-meeting-crashed-with-concerns.html"],
		["Lathrop Residents Want Vacant Units Occupied","/lathrop-residents-want-vacant-units-occupied.html"],
		["Lathrop Homes Targeted for Redevelopment","/lathrop-homes-targeted-for-redevelopment.html"],
		["Lathrop Homes News","/lathrop-homes-news.html"],
		["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents.html"],
		["Lathrop News","/lathrop-news.html"],
		["Lathrop Homes Private Management","/lathrop-homes-private-management.html"],
		["Productive Men of the CHA","/productive-men-of-the-cha.html"],
		["Lathrop Homes News","/lathrop-homes-news-2.html"],
		["Happy 60th, Lathrop Homes","/happy-60th-lathrop-homes.html"],
		["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road.html"]],
	"Prescott Elementary School":[
		["Some Lathrop Kids Get a Bus, But Not All","/some-lathrop-kids-get-a-bus-but-not-all.html"]],
	"Cabrini Rowhouses":[
		["Is CHA Holding Vacant Apartments?","/is-cha-holding-vacant-apartments.html"],
		["Cabrini-Green Residents Say Goodbye","/cabrini-green-residents-say-goodbye.html"],
		["CHA Board Meeting Crashed with Concerns","/cha-board-meeting-crashed-with-concerns.html"],
		["Cabrini Rowhouses Update","/cabrini-rowhouses-update.html"],
		["Cabrini rowhouses’ fate in jeopardy","/cabrini-rowhouses%e2%80%99-fate-in-jeopardy.html"],
		["A Third Generation’s Take on Relocation from Last Cabrini Building","/a-third-generation%e2%80%99s-take-on-relocation-from-last-cabrini-building.html"]],
	"Chicago Housing Initiative":[
		["Is CHA Holding Vacant Apartments?","/is-cha-holding-vacant-apartments.html"]],
	"KOCO":[
		["Is CHA Holding Vacant Apartments?","/is-cha-holding-vacant-apartments.html"]],
	"Lake Parc Place":[
		["Is CHA Holding Vacant Apartments?","/is-cha-holding-vacant-apartments.html"]],
	"North Lawndale":[
		["Is CHA Holding Vacant Apartments?","/is-cha-holding-vacant-apartments.html"],
		["New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts.html"]],
	"Aldi s":[
		["New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts.html"]],
	"Austin":[
		["New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts.html"]],
	"Calument":[
		["New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts.html"]],
	"Grand Boulevard":[
		["New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts.html"]],
	"Michelle Obama":[
		["New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts.html"]],
	"Near West Side":[
		["New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts.html"],
		["CHA Launches Initiative to House Women Ex-Offenders","/cha-launches-initiative-to-house-women-ex-offenders.html"]],
	"Norgan Park":[
		["New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts.html"]],
	"Roseland":[
		["New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts.html"]],
	"Roundy s Supermarket":[
		["New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts.html"]],
	"Sav a lot":[
		["New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts.html"]],
	"Wal Mart":[
		["New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts.html"]],
	"Walgreens":[
		["New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts.html"]],
	"West Publlman":[
		["New Grocery Stores to Open in Food Deserts","/new-grocery-stores-to-open-in-food-deserts.html"]],
	"exoffenders":[
		["Ex-Offenders Strive For Better","/ex-offenders-strive-for-better.html"]],
	"Chciago Housing Authority":[
		["Ida B. Wells Revisited","/ida-b-wells-revisited-2.html"]],
	"Oakwood Shores":[
		["Ida B. Wells Revisited","/ida-b-wells-revisited-2.html"],
		["Discussing the Oakwood Shores Mixed-Income Community","/residents-journal-reporter-talking-about-opportunities-for-public-housing-tenants-at-the-cha-oakwood-shores-mixed-income-community.html"],
		["A Year Later","/a-year-later.html"],
		["This Ain't That","/this-aint-that.html"],
		["Penalties","/penalties.html"]],
	"Bud Biliken Parade":[
		["THE BIG BAD BOLD BUD BILLIKEN PARADE","/the-big-bad-bold-bud-billiken-parade.html"]],
	"Chicago Bud Biliken Parade":[
		["THE BIG BAD BOLD BUD BILLIKEN PARADE","/the-big-bad-bold-bud-billiken-parade.html"]],
	"South Shore Drill Team":[
		["THE BIG BAD BOLD BUD BILLIKEN PARADE","/the-big-bad-bold-bud-billiken-parade.html"]],
	"Chicago public houisng":[
		["Elementary School Students Suffer from CHA Relocations","/elementary-school-students-suffer-from-cha-relocations.html"],
		["Residents' Journal Coverage of the Recent Demolition of the Last CHA Ida B. Wells Homes Buildings","/residents-journal-coverage-of-the-recent-demolition-of-the-last-cha-ida-b-wells-homes-buildings.html"]],
	"Latrhop Homes":[
		["Elementary School Students Suffer from CHA Relocations","/elementary-school-students-suffer-from-cha-relocations.html"]],
	"the CHA":[
		["Elementary School Students Suffer from CHA Relocations","/elementary-school-students-suffer-from-cha-relocations.html"]],
	"Access Living":[
		["Protestors Rally to Keep Medicaid Services","/protestors-rally-to-keep-medicaid-services.html"],
		["Disability Advocates Target Troubled Nursing Home","/disability-advocates-target-troubled-nursing-home.html"],
		["Senior Services 2005 and Beyond","/senior-services-2005-and-beyond.html"],
		["Making CHA Accessible","/making-cha-accessible.html"]],
	"Congressional Super Committee":[
		["Protestors Rally to Keep Medicaid Services","/protestors-rally-to-keep-medicaid-services.html"]],
	"Medicaid":[
		["Protestors Rally to Keep Medicaid Services","/protestors-rally-to-keep-medicaid-services.html"],
		["Choosing Between Food and Medicine","/choosing-between-food-and-medicine.html"],
		["The High Cost of Medicine","/the-high-cost-of-medicine.html"]],
	"medicare":[
		["Protestors Rally to Keep Medicaid Services","/protestors-rally-to-keep-medicaid-services.html"],
		["Medicare Prescription Drug Benefit","/medicare-prescription-drug-benefit.html"]],
	"people with disabilities":[
		["Protestors Rally to Keep Medicaid Services","/protestors-rally-to-keep-medicaid-services.html"],
		["Disability Rights Advocates Protest, and Gov. Quinn Retreats","/disability-rights-advocates-protest-and-gov-quinn-retreats.html"],
		["Changes to Federal Affirmative Action Law Underway","/changes-to-federal-affirmative-action-law-underway.html"],
		["Access Report","/access-report.html"]],
	"U S Senator Dick Durbin":[
		["Protestors Rally to Keep Medicaid Services","/protestors-rally-to-keep-medicaid-services.html"]],
	"U S Senator Mark Kirk":[
		["Protestors Rally to Keep Medicaid Services","/protestors-rally-to-keep-medicaid-services.html"]],
	"US Congress":[
		["Protestors Rally to Keep Medicaid Services","/protestors-rally-to-keep-medicaid-services.html"],
		["Obama Urges Delay in Digital TV Shift","/obama-urges-delay-in-digital-tv-shift.html"]],
	"Charles Woodyard":[
		["Charlotte Housing Authority Chief takes CHA Position","/charlotte-housing-authority-chief-takes-cha-position.html"]],
	"aviation":[
		["Forgotten History: Lecture on Black Aviators","/forgotten-history-lecture-on-black-aviators.html"]],
	"Bessie Coleman":[
		["Forgotten History: Lecture on Black Aviators","/forgotten-history-lecture-on-black-aviators.html"]],
	"DuSable Museum of African American History":[
		["Forgotten History: Lecture on Black Aviators","/forgotten-history-lecture-on-black-aviators.html"]],
	"Robbins":[
		["Forgotten History: Lecture on Black Aviators","/forgotten-history-lecture-on-black-aviators.html"]],
	"Tuskegee Airmen":[
		["Forgotten History: Lecture on Black Aviators","/forgotten-history-lecture-on-black-aviators.html"]],
	"Chicago Public Libraries":[
		["Altgeld’s New Library","/altgeld%e2%80%99s-new-library.html"]],
	"Phillis Wheatly Center":[
		["Altgeld’s New Library","/altgeld%e2%80%99s-new-library.html"]],
	"AUSA":[
		["Corporate Partnership Builds a Public School Playground","/corporate-partnership-builds-a-public-school-playground.html"]],
	"Coca Cola":[
		["Corporate Partnership Builds a Public School Playground","/corporate-partnership-builds-a-public-school-playground.html"]],
	"Howe Elementary School of Excellence":[
		["Corporate Partnership Builds a Public School Playground","/corporate-partnership-builds-a-public-school-playground.html"]],
	"playgrounds":[
		["Corporate Partnership Builds a Public School Playground","/corporate-partnership-builds-a-public-school-playground.html"]],
	"West Side":[
		["Corporate Partnership Builds a Public School Playground","/corporate-partnership-builds-a-public-school-playground.html"],
		["Stop the Violence","/stop-the-violence-2.html"],
		["Tales of Lawndale Housing","/tales-of-lawndale-housing.html"],
		["Stop The Violence","/stop-the-violence-3.html"],
		["Getting to Know Rockwell","/getting-to-know-rockwell.html"]],
	"Chicago Budget":[
		["Mayor Emanuel Booed at Budget Town Hall","/mayor-emanuel-booed-at-budget-townhall-meeting.html"]],
	"foreclosure":[
		["Mayor Emanuel Booed at Budget Town Hall","/mayor-emanuel-booed-at-budget-townhall-meeting.html"],
		["Is Chase Bank a Slumlord?","/is-chase-bank-a-slumlord.html"]],
	"townhall meeting":[
		["Mayor Emanuel Booed at Budget Town Hall","/mayor-emanuel-booed-at-budget-townhall-meeting.html"]],
	"CHA Youth":[
		["Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives.html"],
		["CHA Youth Shopping Spree with Chicago Bears Player","/cha-youth-shopping-spree-with-chicago-bears-player.html"]],
	"Residents Journal":[
		["Residents' Journal's Newly Accessible Online Archives","/residents-journals-newly-assessible-online-archives.html"],
		["Dear Resident","/dear-resident-10.html"]],
	"public houisng":[
		["Residents' Journal Publisher and Editor Discussing Recent CHA Issues","/residents-journal-publisher-and-editor-discussing-recent-cha-issues.html"]],
	"Shedd Aquarium":[
		["Residents' Journal Reporters talking about Current Youth Articles","/residents-journal-staff-member-talking-to-an-urban-youth-international-journalism-program-student-about-her-news-reports-this-summer.html"],
		["Shedd Aquarium Showcases Invasive Species","/shedd-aquarium-showcases-invasive-species.html"],
		["The Fish of Lake Michigan","/the-fish-of-lake-michigan.html"]],
	"mixed income":[
		["Discussing the Oakwood Shores Mixed-Income Community","/residents-journal-reporter-talking-about-opportunities-for-public-housing-tenants-at-the-cha-oakwood-shores-mixed-income-community.html"]],
	"Chicago Park District":[
		["Altgeld Gardens Tries to Stay Cool","/altgeld-gardens-tries-to-stay-cool.html"],
		["The Price of a Political Job","/the-price-of-a-political-job.html"],
		["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds.html"]],
	"Chicago Public Library":[
		["Altgeld Gardens Tries to Stay Cool","/altgeld-gardens-tries-to-stay-cool.html"]],
	"Cooling Centers":[
		["Altgeld Gardens Tries to Stay Cool","/altgeld-gardens-tries-to-stay-cool.html"]],
	"Heat Wave":[
		["Altgeld Gardens Tries to Stay Cool","/altgeld-gardens-tries-to-stay-cool.html"],
		["How to Deal with the Next Heat Wave","/how-to-deal-with-the-next-heat-wave.html"]],
	"ex offenders":[
		["CHA Launches Initiative to House Women Ex-Offenders","/cha-launches-initiative-to-house-women-ex-offenders.html"],
		["Stop the Violence","/stop-the-violence-2.html"],
		["Rush vs. Jackson","/rush-vs-jackson.html"],
		["Ex Marks The Spot","/ex-marks-the-spot.html"],
		["Sixth District Race Makes History","/sixth-district-race-makes-history.html"],
		["Second Chance Legislation","/second-chance-legislation.html"]],
	"James Reynolds":[
		["CHA Launches Initiative to House Women Ex-Offenders","/cha-launches-initiative-to-house-women-ex-offenders.html"],
		["CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo.html"]],
	"Tax Increment Financing":[
		["CHA Launches Initiative to House Women Ex-Offenders","/cha-launches-initiative-to-house-women-ex-offenders.html"]],
	"Mental Health":[
		["Commissioner Fails to Show at Mental Health Town Hall Meeting","/commissioner-fails-to-show-at-mental-health-town-hall.html"]],
	"privatization":[
		["Commissioner Fails to Show at Mental Health Town Hall Meeting","/commissioner-fails-to-show-at-mental-health-town-hall.html"],
		["Illinois Democrats Resist Social Security Privatization","/illinois-democrats-resist-social-security-privatization.html"]],
	"State Rep Mary Flowers":[
		["Commissioner Fails to Show at Mental Health Town Hall Meeting","/commissioner-fails-to-show-at-mental-health-town-hall.html"]],
	"STOP":[
		["Commissioner Fails to Show at Mental Health Town Hall Meeting","/commissioner-fails-to-show-at-mental-health-town-hall.html"],
		["Battle Rages on for South Side Trauma Center","/battle-rages-on-for-south-side-trauma-center.html"]],
	"Cabrini Green Rowhouses":[
		["Mayor Continues Search for New CHA Head","/mayor-continues-search-for-new-cha-head.html"]],
	"Chicago pubic housing":[
		["Mayor Continues Search for New CHA Head","/mayor-continues-search-for-new-cha-head.html"]],
	"Audy Home":[
		["Youth Activists: Juvenile Inmates Treated Like Animals.","/youth-activists-juvenile-inmates-treated-like-animals.html"]],
	"chicago crime":[
		["Youth Activists: Juvenile Inmates Treated Like Animals.","/youth-activists-juvenile-inmates-treated-like-animals.html"],
		["Emanuel’s Anti-Crime Plan for Chicago if elected Mayor","/emanuel%e2%80%99s-anti-crime-plan-for-chicago-if-elected-mayor.html"]],
	"Juvenile Court":[
		["Youth Activists: Juvenile Inmates Treated Like Animals.","/youth-activists-juvenile-inmates-treated-like-animals.html"],
		["Stop the Violence","/stop-the-violence-12.html"]],
	"Juvenile Justice":[
		["Youth Activists: Juvenile Inmates Treated Like Animals.","/youth-activists-juvenile-inmates-treated-like-animals.html"]],
	"Crawford Coal Plant":[
		["A Toxic Tour of Little Village","/little-village-story.html"],
		["Little Village Toxic Tour","/little-village-toxic-tour.html"]],
	"Little Village":[
		["A Toxic Tour of Little Village","/little-village-story.html"],
		["Little Village Toxic Tour","/little-village-toxic-tour.html"]],
	"Little Village Environmental Justice Organization":[
		["A Toxic Tour of Little Village","/little-village-story.html"]],
	"Toxic Tour":[
		["A Toxic Tour of Little Village","/little-village-story.html"]],
	"Indiana Dunes":[
		["A New Start for the Indiana Dunes","/a-new-start-for-the-indiana-dunes.html"]],
	"youth media":[
		["A New Start for the Indiana Dunes","/a-new-start-for-the-indiana-dunes.html"],
		["My trip to Paris","/my-trip-to-paris.html"],
		["Do Students Trust Authority?","/do-students-trust-authority.html"]],
	"Invasive Species":[
		["Shedd Aquarium Showcases Invasive Species","/shedd-aquarium-showcases-invasive-species.html"]],
	"Kari Lydersen":[
		["Shedd Aquarium Showcases Invasive Species","/shedd-aquarium-showcases-invasive-species.html"],
		["Little Village Toxic Tour","/little-village-toxic-tour.html"],
		["The Health Effects of Pollution in Pilsen","/the-health-effects-of-pollution-in-pilsen.html"],
		["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery.html"]],
	"journalism":[
		["Little Village Toxic Tour","/little-village-toxic-tour.html"],
		["The Health Effects of Pollution in Pilsen","/the-health-effects-of-pollution-in-pilsen.html"],
		["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery.html"],
		["Residents' Journal Publisher talking about an Environmental Project for Youth","/residents-journal-publisher-talking-about-an-environmental-project-for-youth.html"],
		["Youth Media Reporter","/youth-media-reporter.html"],
		["Publisher's Box","/publishers-box-2.html"],
		["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves.html"]],
	"We The People Media":[
		["Little Village Toxic Tour","/little-village-toxic-tour.html"],
		["The Health Effects of Pollution in Pilsen","/the-health-effects-of-pollution-in-pilsen.html"],
		["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery.html"],
		["We The People Media's New Video Site","/we-the-people-medias-new-video-site.html"],
		["A new season of RJ TV","/a-new-season-of-rj-tv.html"],
		["The Spring 2009 Issue of Residents' Journal is Now Online","/the-spring-2009-issue-of-residents-journal-is-now-online.html"]],
	"Chicago Public Radio":[
		["Residents' Journal Publisher on WBEZ","/residents-journal-publisher-on-wbez.html"]],
	"Chantell Suggs":[
		["Former Youth Reporter, Now an Author!","/former-youth-reporter-now-an-author.html"]],
	"Barack Obama":[
		["Historical Gallery: Barack Obama","/historical-gallery-barack-obama.html"],
		["The Obama Cave","/the-obama-cave.html"],
		["Youths Take Charge","/youths-take-charge.html"],
		["Inauguration","/inauguration.html"],
		["Homeless Vets Speak Out","/homeless-vets-speak-out.html"],
		["Obama Urges Delay in Digital TV Shift","/obama-urges-delay-in-digital-tv-shift.html"],
		["Obama: Bush Administration Automaker Plan a “Necessary Step.”","/obama-bush-administration-automaker-plan-a-necessary-step.html"],
		["President-Elect Obama Nominates Former Senator Secretary of Health and Human Services","/president-elect-obama-nominates-former-senator-secretary-of-health-and-human-services.html"],
		["Statement from President-elect Barack Obama on Human Rights Day","/statement-from-president-elect-barack-obama-on-human-rights-day.html"],
		["Illinois Democrats Resist Social Security Privatization","/illinois-democrats-resist-social-security-privatization.html"],
		["Obama's Visit to Howard Alternative High School","/obamas-visit-to-howard-alternative-high-school.html"],
		["U.S. Senate Candidate Barack Obama","/u-s-senate-candidate-barack-obama.html"]],
	"Illinois":[
		["Historical Gallery: Barack Obama","/historical-gallery-barack-obama.html"],
		["State Passes Support for Renters","/state-passes-support-for-renters.html"],
		["Jones vs. Tatum","/jones-vs-tatum.html"],
		["Rush vs. Jackson","/rush-vs-jackson.html"],
		["Healthcare Justice Act Raises Hopes","/healthcare-justice-act-raises-hopes.html"],
		["2004 Election Focal Points","/2004-election-focal-points.html"],
		["Sixth District Race Makes History","/sixth-district-race-makes-history.html"],
		["2nd U.S. Congressional District Race","/2nd-u-s-congressional-district-race.html"],
		["U.S. Senate Candidate Joyce Washington","/u-s-senate-candidate-joyce-washington.html"],
		["U.S. Senate Candidate Gery Chico","/u-s-senate-candidate-gery-chico.html"],
		["U.S. Senate Candidate Daniel Hynes","/u-s-senate-candidate-daniel-hynes.html"],
		["U.S. Senate Candidate Blair Hull","/u-s-senate-candidate-blair-hull.html"],
		["U.S. Senate Candidate Barack Obama","/u-s-senate-candidate-barack-obama.html"],
		["8,000 To Get Jobs Help","/8000-to-get-jobs-help.html"]],
	"Senate":[
		["Historical Gallery: Barack Obama","/historical-gallery-barack-obama.html"]],
	"Youth Coverage of Barack Obama":[
		["Historical Gallery: Barack Obama","/historical-gallery-barack-obama.html"],
		["The Obama Cave","/the-obama-cave.html"],
		["Inauguration","/inauguration.html"],
		["Obama's Visit to Howard Alternative High School","/obamas-visit-to-howard-alternative-high-school.html"]],
	"Eco Youth Reporters":[
		["The Health Effects of Pollution in Pilsen","/the-health-effects-of-pollution-in-pilsen.html"],
		["Lead and Coal Plants in Pilsen","/lead-and-coal-plants-in-pilsen.html"],
		["Environmental Journalism Program Image Gallery","/environmental-journalism-program-image-gallery.html"]],
	"Coal Fired Plants":[
		["Lead and Coal Plants in Pilsen","/lead-and-coal-plants-in-pilsen.html"]],
	"CHA Wentworth Gardens":[
		["Remembering Ms. Amey","/remembering-ms-amey.html"]],
	"Hallie Amey":[
		["Remembering Ms. Amey","/remembering-ms-amey.html"]],
	"Wentworth Gardens":[
		["Remembering Ms. Amey","/remembering-ms-amey.html"],
		["Food Deserts","/food-deserts.html"],
		["Positive People","/positive-people-3.html"],
		["CHA Home Ownership: Wentworth Gardens","/cha-home-ownership-wentworth-gardens.html"]],
	"drug testing":[
		["Residents' Journal's Coverage of CHA Featured in Rise Magazine","/residents-journals-coverage-of-cha-featured-in-rise-magazine.html"],
		["CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo.html"],
		["Board Squashes CHA Drug Testing Plan","/board-squashes-cha-drug-testing-plan.html"],
		["Special Investigation: CHA Wanted Kids’ Report Cards","/special-investigation-cha-wanted-kids%e2%80%99-report-cards.html"],
		["Tenants Protest CHA Drug Testing Plan","/public-hearing-on-cha-drug-test-proposal.html"],
		["Tenants Protest CHA Plans to Drug Test Them","/2644.html"],
		["The CHA Plan Is Dead","/the-cha-plan-is-dead.html"],
		["An Invasion of Privacy?","/an-invasion-of-privacy.html"]],
	"Foster Parents":[
		["Residents' Journal's Coverage of CHA Featured in Rise Magazine","/residents-journals-coverage-of-cha-featured-in-rise-magazine.html"]],
	"Lewis Jordan":[
		["Residents' Journal's Coverage of CHA Featured in Rise Magazine","/residents-journals-coverage-of-cha-featured-in-rise-magazine.html"],
		["CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo.html"],
		["Ickes Leader Challenges CHA CEO","/ickes-leader-challenges-cha-ceo.html"],
		["CHA Report: Crime Rates Not Linked to CHA Relocatees","/cha-report-crime-rates-not-linked-to-cha-relocatees.html"]],
	"Rise Magazine":[
		["Residents' Journal's Coverage of CHA Featured in Rise Magazine","/residents-journals-coverage-of-cha-featured-in-rise-magazine.html"]],
	"nutrition assistance programs":[
		["USDA Contest to Celebrate Success in the Summer Food Service Program","/usda-contest-to-celebrate-success-in-the-summer-food-service-program.html"]],
	"photo contest":[
		["USDA Contest to Celebrate Success in the Summer Food Service Program","/usda-contest-to-celebrate-success-in-the-summer-food-service-program.html"]],
	"Summer Food Service Program":[
		["USDA Contest to Celebrate Success in the Summer Food Service Program","/usda-contest-to-celebrate-success-in-the-summer-food-service-program.html"]],
	"USDA":[
		["USDA Contest to Celebrate Success in the Summer Food Service Program","/usda-contest-to-celebrate-success-in-the-summer-food-service-program.html"]],
	"summer jobs":[
		["Residents' Journal Editor-in-chief talking about Summer Youth Employment","/residents-journal-editor-in-chief-talking-about-summer-youth-employment.html"]],
	"Urban Youth International Journalism Youth Program":[
		["Residents' Journal Publisher talking about an Environmental Project for Youth","/residents-journal-publisher-talking-about-an-environmental-project-for-youth.html"]],
	"Clean Air":[
		["Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell.html"]],
	"Coal":[
		["Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell.html"]],
	"Fisk Coal Plant":[
		["Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell.html"]],
	"Greenpeace":[
		["Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell.html"]],
	"Kelly Mitchell":[
		["Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell.html"]],
	"Protesting":[
		["Protesting for Clean Air: An Interview with Greenpeace Activist Kelly Mitchell","/protesting-for-clean-air-an-interview-with-greenpeace-activist-kelly-mitchell.html"]],
	"Alderman Pat Dowell":[
		["Honoring Sam Cooke","/honoring-sam-cooke.html"]],
	"Alderman Will Burns":[
		["Honoring Sam Cooke","/honoring-sam-cooke.html"]],
	"Cook County Commissioner Jerry Ice Man Butler":[
		["Honoring Sam Cooke","/honoring-sam-cooke.html"]],
	"Doolittle Elementary":[
		["Honoring Sam Cooke","/honoring-sam-cooke.html"]],
	"Gospel":[
		["Honoring Sam Cooke","/honoring-sam-cooke.html"]],
	"Herb Kent The Cool Gent":[
		["Honoring Sam Cooke","/honoring-sam-cooke.html"]],
	"Sam Cooke":[
		["Honoring Sam Cooke","/honoring-sam-cooke.html"]],
	"Soul Music":[
		["Honoring Sam Cooke","/honoring-sam-cooke.html"]],
	"Toni Preckwinkle":[
		["Honoring Sam Cooke","/honoring-sam-cooke.html"],
		["Debating Affordable Housing","/debating-affordable-housing.html"],
		["Housing on State, City Agendas","/housing-on-state-city-agendas.html"],
		["Chicago's Hottest Elections","/chicagos-hottest-elections.html"]],
	"Taste of Chicago":[
		["RJ Publisher on Chicago Newsroom","/rj-publisher-on-chicago-newsroom.html"]],
	"Carlos Ponce":[
		["CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo.html"]],
	"CHA credit cards":[
		["CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo.html"]],
	"resident drug testing":[
		["CHA Board Appoints One of Their Own Interim CEO","/cha-board-appoints-one-of-their-own-interim-ceo.html"]],
	"France":[
		["My trip to Paris","/my-trip-to-paris.html"],
		["A Dream Come True","/a-dream-come-true.html"]],
	"Paris":[
		["My trip to Paris","/my-trip-to-paris.html"],
		["A Dream Come True","/a-dream-come-true.html"]],
	"People for Community Recovery":[
		["My trip to Paris","/my-trip-to-paris.html"],
		["A Dream Come True","/a-dream-come-true.html"],
		["Recycling on the South Side","/recycling-on-the-south-side.html"],
		["Altgeld Gardens Lawsuit Settlement","/altgeld-gardens-lawsuit-settlement.html"],
		["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues.html"]],
	"Youth Writers":[
		["A Dream Come True","/a-dream-come-true.html"]],
	"policits":[
		["CHA Land Remains Vacant for Over a Decade (Commentary)","/cha-land-remains-vacant-for-over-a-decade-commentary.html"]],
	"pulic housing":[
		["CHA Land Remains Vacant for Over a Decade (Commentary)","/cha-land-remains-vacant-for-over-a-decade-commentary.html"]],
	"civil rights":[
		["Board Squashes CHA Drug Testing Plan","/board-squashes-cha-drug-testing-plan.html"],
		["A Championship Victory","/a-championship-victory.html"],
		["A Decree But to What Degree?","/a-decree-but-to-what-degree.html"]],
	"public housing tenants":[
		["Board Squashes CHA Drug Testing Plan","/board-squashes-cha-drug-testing-plan.html"]],
	"Child Abuse":[
		["The Bow Campaign","/the-bow-campaign.html"],
		["Residents' Journal Publisher talking about Deficiencies in DCFS System","/residents-journal-publisher-talking-about-deficiencies-in-dcfs-system.html"]],
	"Parenting":[
		["The Bow Campaign","/the-bow-campaign.html"],
		["Mothers Tackle Child Care Woes","/mothers-tackle-child-care-woes.html"]],
	"CHA chief steps down":[
		["CHA Chief Steps Down","/cha-chief-steps-down-after-credit-card-fiasco.html"]],
	"CHA Chief steps down after Credit card fiasco":[
		["CHA Chief Steps Down","/cha-chief-steps-down-after-credit-card-fiasco.html"]],
	"privacy":[
		["Special Investigation: CHA Wanted Kids’ Report Cards","/special-investigation-cha-wanted-kids%e2%80%99-report-cards.html"]],
	"4th Amendment":[
		["Tenants Protest CHA Drug Testing Plan","/public-hearing-on-cha-drug-test-proposal.html"]],
	"CHA Tenants":[
		["Tenants Protest CHA Drug Testing Plan","/public-hearing-on-cha-drug-test-proposal.html"]],
	"housing conditions":[
		["Tenants Protest CHA Drug Testing Plan","/public-hearing-on-cha-drug-test-proposal.html"],
		["Crystal Clear Views","/crystal-clear-views-4.html"],
		["Stop The Violence","/stop-the-violence-3.html"],
		["Stop The Violence","/stop-the-violence-18.html"]],
	"One Strike":[
		["Tenants Protest CHA Drug Testing Plan","/public-hearing-on-cha-drug-test-proposal.html"],
		["Stop the Violence","/stop-the-violence-2.html"],
		["Last Day in 4525","/last-day-in-4525.html"],
		["Harold Ickes News","/harold-ickes-news-9.html"],
		["A 'One Strike' Battle Planned","/a-one-strike-battle-planned.html"],
		["Don't Rock The Boat","/dont-rock-the-boat.html"],
		["Transforming CHA: One Strike Woes","/transforming-cha-one-strike-woes.html"],
		["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike.html"],
		["L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike.html"],
		["Flannery Homes News","/flannery-homes-news.html"]],
	"rally":[
		["Tenants Protest CHA Plans to Drug Test Them","/2644.html"],
		["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice.html"],
		["Youths Rally For Summer Jobs","/youths-rally-for-summer-jobs.html"],
		["Schools March for Victims","/schools-march-for-victims.html"]],
	"vocalo 89 5 FM":[
		["Residents' Journal Editor Appearing on Vocalo Radio","/residents-journal-editor-appearing-on-vocalo-radio.html"]],
	"gardening":[
		["The Garden","/the-garden.html"]],
	"Growing Home":[
		["The Garden","/the-garden.html"]],
	"Kilbourn Organic Garden":[
		["The Garden","/the-garden.html"]],
	"South Side":[
		["The Garden","/the-garden.html"],
		["Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street.html"],
		["Victory at Bridgeport Homes","/victory-at-bridgeport-homes.html"],
		["Wipe Out","/wipe-out.html"],
		["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management.html"],
		["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues.html"],
		["Transforming CHA: Washington Park Wants Answers","/transforming-cha-washington-park-wants-answers.html"]],
	"UYIJP":[
		["The Garden","/the-garden.html"],
		["The Transformation of Jason Moy","/the-transformation-of-jason-moy.html"],
		["Youth Media Reporter","/youth-media-reporter.html"],
		["Obama's Visit to Howard Alternative High School","/obamas-visit-to-howard-alternative-high-school.html"]],
	"personal story":[
		["The Transformation of Jason Moy","/the-transformation-of-jason-moy.html"],
		["Crystal Clear Views","/crystal-clear-views-2.html"],
		["Positive People","/positive-people.html"],
		["Deadly Moves: In Too Deep","/deadly-moves-in-too-deep.html"],
		["Traveling: From Therapy to Art","/traveling-from-therapy-to-art.html"],
		["A Teen's Shattered Dreams","/a-teens-shattered-dreams.html"]],
	"transformation":[
		["The Transformation of Jason Moy","/the-transformation-of-jason-moy.html"]],
	"Boxing":[
		["Boxing Keeps Dad's Memory Alive","/boxing-keeps-dads-memory-alive.html"]],
	"Chicago Mayor":[
		["New Mayor Emanuel’s Road Map for Chicago’s Future","/new-mayor-emanuel%e2%80%99s-road-map-for-chicago%e2%80%99s-future.html"]],
	"Raham Emanuel":[
		["New Mayor Emanuel’s Road Map for Chicago’s Future","/new-mayor-emanuel%e2%80%99s-road-map-for-chicago%e2%80%99s-future.html"]],
	"Rahm Emauel Inaguration":[
		["New Mayor Emanuel’s Road Map for Chicago’s Future","/new-mayor-emanuel%e2%80%99s-road-map-for-chicago%e2%80%99s-future.html"]],
	"Fearless Leading by the Youth":[
		["Battle Rages on for South Side Trauma Center","/battle-rages-on-for-south-side-trauma-center.html"]],
	"healthcare":[
		["Battle Rages on for South Side Trauma Center","/battle-rages-on-for-south-side-trauma-center.html"],
		["Youths and Sex Ed","/youths-and-sex-ed.html"],
		["Altgeld Gardens Dentist","/altgeld-garden%e2%80%99s-dentist.html"],
		["Healthcare Justice Act Raises Hopes","/healthcare-justice-act-raises-hopes.html"],
		["Illinois Democrats Resist Social Security Privatization","/illinois-democrats-resist-social-security-privatization.html"],
		["The New Cook County Hospital","/the-new-cook-county-hospital.html"],
		["Choosing Between Food and Medicine","/choosing-between-food-and-medicine.html"],
		["Sinai Health Services","/sinai-health-services.html"]],
	"Southside Together Organizing for Power":[
		["Battle Rages on for South Side Trauma Center","/battle-rages-on-for-south-side-trauma-center.html"]],
	"Trauma Center":[
		["Battle Rages on for South Side Trauma Center","/battle-rages-on-for-south-side-trauma-center.html"]],
	"University of Chicago Medical Center":[
		["Battle Rages on for South Side Trauma Center","/battle-rages-on-for-south-side-trauma-center.html"]],
	"Bern Nadette Stanis":[
		["An Afternoon of Good Times","/an-afternoon-of-good-times.html"]],
	"Cabrini Green public housing":[
		["An Afternoon of Good Times","/an-afternoon-of-good-times.html"],
		["Cabrini-Green Residents Say Goodbye","/cabrini-green-residents-say-goodbye.html"],
		["Cabrini Rowhouses Update","/cabrini-rowhouses-update.html"],
		["Cabrini rowhouses’ fate in jeopardy","/cabrini-rowhouses%e2%80%99-fate-in-jeopardy.html"],
		["A Third Generation’s Take on Relocation from Last Cabrini Building","/a-third-generation%e2%80%99s-take-on-relocation-from-last-cabrini-building.html"]],
	"Good Times":[
		["An Afternoon of Good Times","/an-afternoon-of-good-times.html"]],
	"Rueben Cannon":[
		["An Afternoon of Good Times","/an-afternoon-of-good-times.html"]],
	"Sexually Transmitted Disease":[
		["Youths and Sex Ed","/youths-and-sex-ed.html"]],
	"STDs":[
		["Youths and Sex Ed","/youths-and-sex-ed.html"],
		["HIV/AIDs Crisis","/hivaids-crisis.html"]],
	"Chicago 2011 Aldermanic Election":[
		["On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith.html"]],
	"Chicago 2011 Mayoral Election":[
		["On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith.html"],
		["We The People Media's Coverage of the Chicago Mayor's Race","/we-the-people-medias-coverage-of-the-chicago-mayors-race.html"],
		["Chicago Mayoral Candidate Carol Moseley Braun on Low-income Issues","/chicago-mayoral-candidate-former-u-s-sen-carol-moseley-braun-on-low-income-issues.html"],
		["Residents' Journal Editor-in-Chief Discussing Chicago Mayoral Election and CPD Protest","/residents-journal-editor-in-chief-discussing-mayoral-election-and-cpd-protest.html"]],
	"Rhymefest":[
		["On the Campaign Trail with Che “Rhymefest” Smith","/on-the-campaign-trail-with-che-%e2%80%9crhymefest%e2%80%9d-smith.html"]],
	"Chicago Landlords and Tenants Ordinance":[
		["Housing Activists Take Action: An Update","/housing-activists-take-action-an-update.html"]],
	"Housing Activists Take Action An Update":[
		["Housing Activists Take Action: An Update","/housing-activists-take-action-an-update.html"]],
	"Metropolitian Tenants Organization":[
		["Housing Activists Take Action: An Update","/housing-activists-take-action-an-update.html"]],
	"Section 8 vouchers":[
		["Housing Activists Take Action: An Update","/housing-activists-take-action-an-update.html"],
		["Razing the Brooks Extension","/razing-the-brooks-extension.html"],
		["Section 8 Update","/section-8-update.html"]],
	"U S Department of Housiong and Urban Development":[
		["Housing Activists Take Action: An Update","/housing-activists-take-action-an-update.html"]],
	"Alden Villiage Nroth Nursing Home":[
		["Disability Advocates Target Troubled Nursing Home","/disability-advocates-target-troubled-nursing-home.html"]],
	"Chicago ADAPT":[
		["Disability Advocates Target Troubled Nursing Home","/disability-advocates-target-troubled-nursing-home.html"]],
	"disabilities":[
		["Disability Advocates Target Troubled Nursing Home","/disability-advocates-target-troubled-nursing-home.html"],
		["Access Report","/access-report-2.html"]],
	"Power to the People Coalition":[
		["Disability Advocates Target Troubled Nursing Home","/disability-advocates-target-troubled-nursing-home.html"]],
	"Progress Center for Independent Living":[
		["Disability Advocates Target Troubled Nursing Home","/disability-advocates-target-troubled-nursing-home.html"]],
	"the ajne Addams Senior Causuc":[
		["Disability Advocates Target Troubled Nursing Home","/disability-advocates-target-troubled-nursing-home.html"]],
	"the Community renewal Society":[
		["Disability Advocates Target Troubled Nursing Home","/disability-advocates-target-troubled-nursing-home.html"]],
	"Lathrop Leadership Team":[
		["CHA Board Meeting Crashed with Concerns","/cha-board-meeting-crashed-with-concerns.html"]],
	"Logan Square Neighborhood Association":[
		["CHA Board Meeting Crashed with Concerns","/cha-board-meeting-crashed-with-concerns.html"]],
	"Illinois Coalition to Abolish the Death Penalty":[
		["Illinois Governor Applauded for Abolishing Death Penalty","/illinois-governor-applauded-for-abolishing-death-penalty.html"]],
	"Illniois Death Penalty":[
		["Illinois Governor Applauded for Abolishing Death Penalty","/illinois-governor-applauded-for-abolishing-death-penalty.html"]],
	"Jewish Council on Urban Affairs":[
		["Illinois Governor Applauded for Abolishing Death Penalty","/illinois-governor-applauded-for-abolishing-death-penalty.html"]],
	"Chicago Bronzeville community":[
		["Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street.html"],
		["Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks.html"],
		["Torture Victim Reflects on Burge Sentence","/torture-victim-reflects-on-burge-sentence.html"],
		["A Salute to Women Veterans","/a-salute-to-women-veterans.html"],
		["Resident's Journal Senior Reporter talking about an Historical Chicago Bronzeville Monument Project","/residents-journal-senior-reporter-talking-about-an-historical-chicago-bronzeville-monument-project.html"],
		["Should Liquor Stores Be Banned in Bronzeville?","/should-liquor-stores-be-banned-in-bronzeville.html"]],
	"Chicago police":[
		["Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street.html"],
		["Your Neighborhood Policemen","/your-neighborhood-policemen.html"]],
	"Concerned citizens of Bronzeville":[
		["Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street.html"]],
	"improvement plan":[
		["Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street.html"]],
	"local businesses":[
		["Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street.html"],
		["Bronzeville Community Alert","/bronzeville-community-alert.html"]],
	"police substation":[
		["Bronzeville Residents Aim for Police Substation on 47th Street","/bronzeville-residents-aim-for-police-substation-on-47th-street.html"]],
	"Illinois Department of Health and Human Services":[
		["Disability Rights Advocates Protest, and Gov. Quinn Retreats","/disability-rights-advocates-protest-and-gov-quinn-retreats.html"]],
	"Carol Moseley Braun":[
		["We The People Media's Coverage of the Chicago Mayor's Race","/we-the-people-medias-coverage-of-the-chicago-mayors-race.html"],
		["Emanuel Removed From Ballot, Candidates’ Education Plans","/emanuel-removed-from-ballot-candidates%e2%80%99-education-plans.html"],
		["Chicago Mayoral Candidate Carol Moseley Braun on Low-income Issues","/chicago-mayoral-candidate-former-u-s-sen-carol-moseley-braun-on-low-income-issues.html"]],
	"Chicago Mayoral Candidates":[
		["We The People Media's Coverage of the Chicago Mayor's Race","/we-the-people-medias-coverage-of-the-chicago-mayors-race.html"],
		["Watkins Warns Transport Jobs May Be Lost","/watkins-warns-transport-jobs-may-be-lost.html"],
		["Mayoral Candidates Views about Chicago Public Housing","/mayoral-candidates-views-about-chicago-public-housing.html"],
		["Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks.html"],
		["Emanuel Removed From Ballot, Candidates’ Education Plans","/emanuel-removed-from-ballot-candidates%e2%80%99-education-plans.html"],
		["Mayoral Candidate’s Plans for Low-income people and Ex-offenders","/mayoral-candidate%e2%80%99s-plans-for-low-income-people-and-ex-offenders.html"],
		["Emanuel’s Anti-Crime Plan for Chicago if elected Mayor","/emanuel%e2%80%99s-anti-crime-plan-for-chicago-if-elected-mayor.html"],
		["Three Chicago Mayoral Candidates' Take on Public Housing","/1803.html"]],
	"Patriica Van Pelt Watkins":[
		["We The People Media's Coverage of the Chicago Mayor's Race","/we-the-people-medias-coverage-of-the-chicago-mayors-race.html"],
		["Watkins Warns Transport Jobs May Be Lost","/watkins-warns-transport-jobs-may-be-lost.html"],
		["Mayoral Candidate’s Plans for Low-income people and Ex-offenders","/mayoral-candidate%e2%80%99s-plans-for-low-income-people-and-ex-offenders.html"]],
	"chicago mayors race":[
		["Watkins Warns Transport Jobs May Be Lost","/watkins-warns-transport-jobs-may-be-lost.html"]],
	"transportation":[
		["Watkins Warns Transport Jobs May Be Lost","/watkins-warns-transport-jobs-may-be-lost.html"],
		["Access Report","/access-report-3.html"],
		["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments.html"]],
	"Chicago mayors election":[
		["Mayoral Candidates Views about Chicago Public Housing","/mayoral-candidates-views-about-chicago-public-housing.html"]],
	"mayoral candidates views about chicago public houisng":[
		["Mayoral Candidates Views about Chicago Public Housing","/mayoral-candidates-views-about-chicago-public-housing.html"]],
	"agriculture":[
		["Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks.html"]],
	"community gardens":[
		["Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks.html"]],
	"food industry":[
		["Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks.html"]],
	"food production":[
		["Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks.html"]],
	"health":[
		["Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks.html"],
		["Uranium: A Hidden Tragedy","/uranium-a-hidden-tragedy.html"],
		["Under Pressure: Students and Teachers on Stress","/under-pressure-students-and-teachers-on-stress.html"],
		["Residents' Journal Reporters Share Results of Youth Surveys","/residents-journal-reporters-share-results-of-youth-surveys.html"],
		["RJ Reporter talking about Youth Media Project","/rj-reporter-talking-about-youth-media-project.html"],
		["Cafeteria Food","/cafeteria-food.html"],
		["Crystal Clear Views","/crystal-clear-views-3.html"],
		["Dear Resident","/dear-resident-9.html"]],
	"health issues":[
		["Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks.html"],
		["Crystal Clear Views","/crystal-clear-views-2.html"],
		["Bird Flu Pandemic Expected","/bird-flu-pandemic-expected.html"],
		["Medicare Prescription Drug Benefit","/medicare-prescription-drug-benefit.html"],
		["The True Face of Poverty","/the-true-face-of-poverty.html"],
		["Stop The Violence","/stop-the-violence-8.html"],
		["Altgeld Gardens News","/altgeld-gardens-news.html"]],
	"low income communities":[
		["Rahm Wants Urban Farms, Mobile Food Trucks","/rahm-wants-urban-farms-mobile-food-trucks.html"],
		["Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes.html"],
		["The Compassionate Blues","/the-compassionate-blues.html"],
		["The Sound of Silence","/the-sound-of-silence.html"]],
	"John Burge":[
		["Torture Victim Reflects on Burge Sentence","/torture-victim-reflects-on-burge-sentence.html"]],
	"Torture":[
		["Torture Victim Reflects on Burge Sentence","/torture-victim-reflects-on-burge-sentence.html"],
		["Cong. Danny Davis proposes anti-police torture legislation","/cong-danny-davis-proposes-anti-police-torture-legislation.html"],
		["Lawsuit Underway after Guilty Verdict in Burge Trial","/lawsuit-underway-after-guilty-verdict-in-burge-trial.html"],
		["Burge Victims’ Attorneys Fight Transfers","/burge-victims-attorneys-fight-transfers.html"],
		["Cops Fight Their Own Over Burge","/cops-fight-their-own-over-burge.html"],
		["The Times They Are A’Changing","/the-times-they-are-achanging.html"],
		["House of Screams","/house-of-screams.html"]],
	"community programs":[
		["Nuf Said: Will Violence Finally Stop?","/nuf-said-will-violence-finally-stop.html"]],
	"dropout rate":[
		["Nuf Said: Will Violence Finally Stop?","/nuf-said-will-violence-finally-stop.html"],
		["Youths Testify for Alternative Schools","/youths-testify-for-alternative-schools.html"]],
	"Gery Chico":[
		["Emanuel Removed From Ballot, Candidates’ Education Plans","/emanuel-removed-from-ballot-candidates%e2%80%99-education-plans.html"],
		["U.S. Senate Candidate Gery Chico","/u-s-senate-candidate-gery-chico.html"]],
	"Mayoral Cadidates Education Plans":[
		["Emanuel Removed From Ballot, Candidates’ Education Plans","/emanuel-removed-from-ballot-candidates%e2%80%99-education-plans.html"]],
	"Mayoral Candidates":[
		["Emanuel Removed From Ballot, Candidates’ Education Plans","/emanuel-removed-from-ballot-candidates%e2%80%99-education-plans.html"]],
	"Mayoral Candidates on Education":[
		["Emanuel Removed From Ballot, Candidates’ Education Plans","/emanuel-removed-from-ballot-candidates%e2%80%99-education-plans.html"]],
	"Miguel Del Valle":[
		["Emanuel Removed From Ballot, Candidates’ Education Plans","/emanuel-removed-from-ballot-candidates%e2%80%99-education-plans.html"]],
	"Chicago 2011 Mayor s Race":[
		["Mayoral Candidate’s Plans for Low-income people and Ex-offenders","/mayoral-candidate%e2%80%99s-plans-for-low-income-people-and-ex-offenders.html"]],
	"Chicago mayoral candidate":[
		["Mayoral Candidate’s Plans for Low-income people and Ex-offenders","/mayoral-candidate%e2%80%99s-plans-for-low-income-people-and-ex-offenders.html"]],
	"Chicago Mayoral Election":[
		["Mayoral Candidate’s Plans for Low-income people and Ex-offenders","/mayoral-candidate%e2%80%99s-plans-for-low-income-people-and-ex-offenders.html"]],
	"low income issues":[
		["Mayoral Candidate’s Plans for Low-income people and Ex-offenders","/mayoral-candidate%e2%80%99s-plans-for-low-income-people-and-ex-offenders.html"],
		["Update: Zoning and Affordable Housing","/update-zoning-and-affordable-housing.html"],
		["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force.html"],
		["Sinai Health Services","/sinai-health-services.html"],
		["The State Of Section 8","/the-state-of-section-8.html"],
		["Cold War Echoes","/cold-war-echoes.html"]],
	"Mayor of Chicago Elections":[
		["Emanuel’s Anti-Crime Plan for Chicago if elected Mayor","/emanuel%e2%80%99s-anti-crime-plan-for-chicago-if-elected-mayor.html"]],
	"Center on Budget and Policy Priorites":[
		["Federal Housing Programs on the Chopping Block","/federal-housing-programs-on-the-chopping-block.html"]],
	"Federal Housing Programs":[
		["Federal Housing Programs on the Chopping Block","/federal-housing-programs-on-the-chopping-block.html"]],
	"documentary":[
		["Uranium: A Hidden Tragedy","/uranium-a-hidden-tragedy.html"]],
	"radiation poisoning":[
		["Uranium: A Hidden Tragedy","/uranium-a-hidden-tragedy.html"]],
	"Uranium":[
		["Uranium: A Hidden Tragedy","/uranium-a-hidden-tragedy.html"]],
	"Bowling":[
		["Bowling Excursion","/bowling-excursion.html"]],
	"students":[
		["Under Pressure: Students and Teachers on Stress","/under-pressure-students-and-teachers-on-stress.html"],
		["Whose School Is It?","/whose-school-is-it.html"],
		["Safe Summer 97","/safe-summer-97.html"]],
	"Teachers":[
		["Under Pressure: Students and Teachers on Stress","/under-pressure-students-and-teachers-on-stress.html"]],
	"Cabrini":[
		["Cabrini Rowhouses Update","/cabrini-rowhouses-update.html"]],
	"Cabrini Rowhouses Update":[
		["Cabrini Rowhouses Update","/cabrini-rowhouses-update.html"]],
	"Chicago mayoral candidate on public housing":[
		["Three Chicago Mayoral Candidates' Take on Public Housing","/1803.html"]],
	"Three mayoral candidates take on public housing":[
		["Three Chicago Mayoral Candidates' Take on Public Housing","/1803.html"]],
	"CPS lawsuits":[
		["Parents File Discrimination Complaint against CPS Promotion Policy for Elementary Students","/parents-file-discrimination-complaint-against-cps-promotion-policy-for-elementary-students.html"]],
	"PURE":[
		["Parents File Discrimination Complaint against CPS Promotion Policy for Elementary Students","/parents-file-discrimination-complaint-against-cps-promotion-policy-for-elementary-students.html"]],
	"JROTC":[
		["A Salute to Women Veterans","/a-salute-to-women-veterans.html"],
		["A Day in the Life of a JROTC Cadet","/a-day-in-the-life-of-a-jrotc-cadet.html"]],
	"Marching Bands":[
		["A Salute to Women Veterans","/a-salute-to-women-veterans.html"]],
	"Veterans Day Parade":[
		["A Salute to Women Veterans","/a-salute-to-women-veterans.html"]],
	"Women Soldiers":[
		["A Salute to Women Veterans","/a-salute-to-women-veterans.html"]],
	"Women Veterans":[
		["A Salute to Women Veterans","/a-salute-to-women-veterans.html"]],
	"Glenn Beck":[
		["Marching in Washington","/marching-in-washington.html"]],
	"immigration reform":[
		["Marching in Washington","/marching-in-washington.html"],
		["U. S. Citizens Decry Relatives’ Deportation","/u-s-citizens-decry-relatives-deportation.html"]],
	"Lincoln Memorial":[
		["Marching in Washington","/marching-in-washington.html"]],
	"One Nation Working Together Rally":[
		["Marching in Washington","/marching-in-washington.html"]],
	"Rev Jesse Jackson":[
		["Marching in Washington","/marching-in-washington.html"],
		["Jackson Visits Ickes","/jackson-visits-ickes.html"],
		["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center.html"],
		["Vote '96: Conventional Colors","/vote-96-conventional-colors-2.html"]],
	"Washington Memorial":[
		["Marching in Washington","/marching-in-washington.html"]],
	"Alexi Giannoulias":[
		["Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d.html"]],
	"Dan Seals":[
		["Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d.html"]],
	"Illinois 2010 candidates":[
		["Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d.html"]],
	"November 2010 Elections":[
		["Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d.html"]],
	"Rep Debbie Halvorson":[
		["Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d.html"]],
	"Rep Mark Kirk":[
		["Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d.html"]],
	"Robert Dold":[
		["Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d.html"]],
	"US Congressman Bill Foster":[
		["Clinton: “It’s all about the Money”","/clinton-%e2%80%9cit%e2%80%99s-all-about-the-money%e2%80%9d.html"]],
	"Facebook":[
		["Youths Speak Out on Violence","/youths-speak-out-on-violence.html"]],
	"Nuf Said":[
		["Youths Speak Out on Violence","/youths-speak-out-on-violence.html"]],
	"Nuff Said":[
		["Do Students Trust Authority?","/do-students-trust-authority.html"],
		["Pollution Affects Everyone","/pollution-affects-everyone.html"]],
	"flooding":[
		["Pollution Affects Everyone","/pollution-affects-everyone.html"]],
	"pollution":[
		["Pollution Affects Everyone","/pollution-affects-everyone.html"],
		["Residents' Journal Reporters Share Results of Youth Surveys","/residents-journal-reporters-share-results-of-youth-surveys.html"],
		["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues.html"]],
	"waste management":[
		["Pollution Affects Everyone","/pollution-affects-everyone.html"],
		["Recycling on the South Side","/recycling-on-the-south-side.html"]],
	"recycling":[
		["Recycling on the South Side","/recycling-on-the-south-side.html"],
		["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road.html"]],
	"the resource center":[
		["Recycling on the South Side","/recycling-on-the-south-side.html"]],
	"Chicago Bronzeville Merchants Association":[
		["Resident's Journal Senior Reporter talking about an Historical Chicago Bronzeville Monument Project","/residents-journal-senior-reporter-talking-about-an-historical-chicago-bronzeville-monument-project.html"]],
	"Chicago Historical Monuments":[
		["Resident's Journal Senior Reporter talking about an Historical Chicago Bronzeville Monument Project","/residents-journal-senior-reporter-talking-about-an-historical-chicago-bronzeville-monument-project.html"]],
	"Chicago Obelisks":[
		["Resident's Journal Senior Reporter talking about an Historical Chicago Bronzeville Monument Project","/residents-journal-senior-reporter-talking-about-an-historical-chicago-bronzeville-monument-project.html"]],
	"Chicago police union":[
		["Residents' Journal Editor-in-Chief Discussing Chicago Mayoral Election and CPD Protest","/residents-journal-editor-in-chief-discussing-mayoral-election-and-cpd-protest.html"]],
	"police rally":[
		["Residents' Journal Editor-in-Chief Discussing Chicago Mayoral Election and CPD Protest","/residents-journal-editor-in-chief-discussing-mayoral-election-and-cpd-protest.html"]],
	"Superintendant Jody Weis":[
		["Residents' Journal Editor-in-Chief Discussing Chicago Mayoral Election and CPD Protest","/residents-journal-editor-in-chief-discussing-mayoral-election-and-cpd-protest.html"]],
	"teen violence":[
		["RJ Youth Instructor Discussing Teen Project with Youth Reporter","/rj-youth-instructor-discussing-teen-project-with-youth-reporter.html"]],
	"youth jobs":[
		["RJ Youth Instructor Discussing Teen Project with Youth Reporter","/rj-youth-instructor-discussing-teen-project-with-youth-reporter.html"],
		["Youths Rally For Summer Jobs","/youths-rally-for-summer-jobs.html"]],
	"Family Defense Center":[
		["Residents' Journal Publisher talking about Deficiencies in DCFS System","/residents-journal-publisher-talking-about-deficiencies-in-dcfs-system.html"]],
	"Chicago Bears Football Player Devin Aromashodu":[
		["CHA Youth Shopping Spree with Chicago Bears Player","/cha-youth-shopping-spree-with-chicago-bears-player.html"]],
	"BRCC":[
		["Bronzeville Residents' Efforts to Ban Liquor Sales in their Community","/residents-journal-can-tv-show-about-bronzeville-residents-efforts-to-ban-liquor-sales-in-their-community.html"]],
	"the Bronzeville Movement":[
		["Bronzeville Residents' Efforts to Ban Liquor Sales in their Community","/residents-journal-can-tv-show-about-bronzeville-residents-efforts-to-ban-liquor-sales-in-their-community.html"]],
	"chicago youth summit":[
		["A Teens View of a recent Chicago Youth Summit","/residents-journal-can-tv-show-on-a-recent-chicago-youth-summit.html"]],
	"youth employment":[
		["A Teens View of a recent Chicago Youth Summit","/residents-journal-can-tv-show-on-a-recent-chicago-youth-summit.html"]],
	"Liquor Stores":[
		["Should Liquor Stores Be Banned in Bronzeville?","/should-liquor-stores-be-banned-in-bronzeville.html"]],
	"Affirmative Action":[
		["Changes to Federal Affirmative Action Law Underway","/changes-to-federal-affirmative-action-law-underway.html"]],
	"US Dept of Labor":[
		["Changes to Federal Affirmative Action Law Underway","/changes-to-federal-affirmative-action-law-underway.html"]],
	"Bronzeville Alliance":[
		["Residents' Journal Senior Reporter Discussing a Bronzeville Family History Research Project","/residents-journal-senior-reporter-discussing-a-bronzeville-family-history-research-project.html"]],
	"family history":[
		["Residents' Journal Senior Reporter Discussing a Bronzeville Family History Research Project","/residents-journal-senior-reporter-discussing-a-bronzeville-family-history-research-project.html"]],
	"Geneology research":[
		["Residents' Journal Senior Reporter Discussing a Bronzeville Family History Research Project","/residents-journal-senior-reporter-discussing-a-bronzeville-family-history-research-project.html"]],
	"history":[
		["Residents' Journal Senior Reporter Discussing a Bronzeville Family History Research Project","/residents-journal-senior-reporter-discussing-a-bronzeville-family-history-research-project.html"],
		["The Price of a Political Job","/the-price-of-a-political-job.html"],
		["Dear Resident","/dear-resident.html"],
		["Dear Resident","/dear-resident-2.html"],
		["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man.html"],
		["A Short History of Ida B. Wells","/a-short-history-of-ida-b-wells.html"],
		["Washington Park: The Dying Hope","/washington-park-the-dying-hope.html"],
		["A History of Cabrini-Green","/a-history-of-cabrini-green.html"],
		["LeClaire Courts","/leclaire-courts.html"]],
	"Pat Bearden":[
		["Residents' Journal Senior Reporter Discussing a Bronzeville Family History Research Project","/residents-journal-senior-reporter-discussing-a-bronzeville-family-history-research-project.html"]],
	"jobs":[
		["Residents' Journal Reporters Share Results of Youth Surveys","/residents-journal-reporters-share-results-of-youth-surveys.html"]],
	"library":[
		["Where I Come From","/where-i-come-from.html"],
		["Altgeld Youth Protest Lack of Library","/altgeld-youth-protest-lack-of-library.html"]],
	"youth programs":[
		["What We Need Now","/what-we-need-now.html"],
		["Youths Testify for Alternative Schools","/youths-testify-for-alternative-schools.html"]],
	"Acting":[
		["Stepping Onto the Stage","/stepping-onto-the-stage.html"]],
	"Drama Club":[
		["Stepping Onto the Stage","/stepping-onto-the-stage.html"]],
	"youth issues":[
		["From the Inside Looking Out: Bullying","/from-the-inside-looking-out-bullying.html"]],
	"Dental concerns":[
		["Altgeld Gardens Dentist","/altgeld-garden%e2%80%99s-dentist.html"]],
	"dental hygiene":[
		["Altgeld Gardens Dentist","/altgeld-garden%e2%80%99s-dentist.html"]],
	"Chase bank":[
		["Is Chase Bank a Slumlord?","/is-chase-bank-a-slumlord.html"],
		["Low-income Tenants Rally at Chase Bank","/low-income-tenants-rally-at-chase-bank.html"]],
	"Chicago homelessness":[
		["Is Chase Bank a Slumlord?","/is-chase-bank-a-slumlord.html"],
		["Homeless Not Hopeless","/homeless-not-hopeless.html"],
		["Squatters Worry About Homelessness","/squatters-worry-about-homelessness.html"],
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"]],
	"Chicago media":[
		["FCC Public Hearing on Comcast Merge with NBC","/fcc-public-hearing-on-comcast-merge-with-nbc.html"],
		["FCC Public Hearing on Comcast Merger with NBCU/GE","/fcc-public-hearing-on-comcast-merger-with-nbcuge.html"]],
	"Comcast":[
		["FCC Public Hearing on Comcast Merge with NBC","/fcc-public-hearing-on-comcast-merge-with-nbc.html"]],
	"FCC":[
		["FCC Public Hearing on Comcast Merge with NBC","/fcc-public-hearing-on-comcast-merge-with-nbc.html"],
		["FCC Public Hearing on Comcast Merger with NBCU/GE","/fcc-public-hearing-on-comcast-merger-with-nbcuge.html"]],
	"merger":[
		["FCC Public Hearing on Comcast Merge with NBC","/fcc-public-hearing-on-comcast-merge-with-nbc.html"],
		["FCC Public Hearing on Comcast Merger with NBCU/GE","/fcc-public-hearing-on-comcast-merger-with-nbcuge.html"]],
	"NBC":[
		["FCC Public Hearing on Comcast Merge with NBC","/fcc-public-hearing-on-comcast-merge-with-nbc.html"],
		["FCC Public Hearing on Comcast Merger with NBCU/GE","/fcc-public-hearing-on-comcast-merger-with-nbcuge.html"]],
	"protest":[
		["Low-income Tenants Rally at Chase Bank","/low-income-tenants-rally-at-chase-bank.html"],
		["Pilsen Guards Against Gentrifyers","/pilsen-guards-against-gentrifyers.html"]],
	"CANTV":[
		["Residents' Journal CAN TV Show on the Opening of the Chicago Housing Authority's Family Housing Wait List","/1396.html"],
		["A new season of RJ TV","/a-new-season-of-rj-tv-2.html"],
		["We The People Media's New Video Site","/we-the-people-medias-new-video-site.html"]],
	"CHA wait list":[
		["As CHA Wait List Closes, Are Low-Income Families Bridging the Digital Divide?","/as-cha-wait-list-closes-are-low-income-families-bridging-the-digital-divide.html"]],
	"digital divide":[
		["As CHA Wait List Closes, Are Low-Income Families Bridging the Digital Divide?","/as-cha-wait-list-closes-are-low-income-families-bridging-the-digital-divide.html"],
		["Robert Taylor On Line","/robert-taylor-on-line.html"]],
	"internet usage":[
		["As CHA Wait List Closes, Are Low-Income Families Bridging the Digital Divide?","/as-cha-wait-list-closes-are-low-income-families-bridging-the-digital-divide.html"]],
	"legislation":[
		["Cong. Danny Davis proposes anti-police torture legislation","/cong-danny-davis-proposes-anti-police-torture-legislation.html"],
		["Tenants Protest New CHA School Reporting Policy","/tenants-protest-new-cha-school-reporting-policy.html"],
		["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice.html"],
		["State Passes Support for Renters","/state-passes-support-for-renters.html"],
		["Healthcare Justice Act Raises Hopes","/healthcare-justice-act-raises-hopes.html"],
		["Ex Marks The Spot","/ex-marks-the-spot.html"],
		["2004 Election Focal Points","/2004-election-focal-points.html"],
		["Medicare Prescription Drug Benefit","/medicare-prescription-drug-benefit.html"],
		["Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park.html"],
		["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments.html"]],
	"lawsuit":[
		["Lawsuit Underway after Guilty Verdict in Burge Trial","/lawsuit-underway-after-guilty-verdict-in-burge-trial.html"],
		["The Times They Are A’Changing","/the-times-they-are-achanging.html"],
		["CHA Contracting Woes","/cha-contracting-woes.html"],
		["You Have Been Served","/you-have-been-served.html"],
		["Oops, They Did It Again","/oops-they-did-it-again.html"],
		["Residents Sue CHA","/residents-sue-cha.html"],
		["Dear Resident","/dear-resident-6.html"],
		["L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike.html"],
		["CHA and Latinos: Interview with Joe Shuldiner","/cha-and-latinos-interview-with-joe-shuldiner.html"],
		["Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing.html"]],
	"HIV AIDS":[
		["HUD Renews 19 States’ HIV/AIDS Supportive Housing Programs","/hud-renews-19-states%e2%80%99-hivaids-supportive-housing-programs.html"],
		["HIV/AIDs Crisis","/hivaids-crisis.html"]],
	"counseling":[
		["At CHA Mixed-Income Sites, Owners Exempt from Smoke-Free Zones","/at-cha-mixed-income-sites-owners-exempt-from-smoke-free-zones.html"]],
	"mixed income housing":[
		["At CHA Mixed-Income Sites, Owners Exempt from Smoke-Free Zones","/at-cha-mixed-income-sites-owners-exempt-from-smoke-free-zones.html"],
		["Last Harvest","/last-harvest.html"]],
	"smoke free zones":[
		["At CHA Mixed-Income Sites, Owners Exempt from Smoke-Free Zones","/at-cha-mixed-income-sites-owners-exempt-from-smoke-free-zones.html"]],
	"smoking":[
		["At CHA Mixed-Income Sites, Owners Exempt from Smoke-Free Zones","/at-cha-mixed-income-sites-owners-exempt-from-smoke-free-zones.html"]],
	"fall 2008 issue":[
		["Making It Harder for Students to Get a License","/making-it-harder-for-students-to-get-a-license.html"],
		["Who is Principal Martinez?","/who-is-principal-martinez.html"],
		["What people think about Little Village Lawndale High School?","/what-people-think-about-little-village-lawndale-high-school.html"],
		["Why is the Question I Ask","/why-is-the-question-i-ask.html"],
		["The Birth of Death","/the-birth-of-death.html"],
		["Truancy Fees","/truancy-fees.html"],
		["The Times We Hurt Most","/the-times-we-hurt-most.html"],
		["Teens Working In and Out of School","/teens-working-in-and-out-of-school.html"],
		["Are You Warm for the Holidays?","/are-you-warm-for-the-holidays.html"],
		["My Thoughts About Fatherhood","/my-thoughts-about-fatherhood.html"],
		["DCFS: Inside View","/dcfs-inside-view.html"],
		["Both Sides of Police Brutality","/both-sides-of-police-brutality.html"],
		["Phased Out","/phased-out.html"],
		["The Times They Are A’Changing","/the-times-they-are-achanging.html"],
		["‘Train Wreck’ Expected for TV Transition","/train-wreck-expected-for-tv-transition.html"],
		["CHA Seniors Keep Waiting to Return Home","/cha-seniors-keep-waiting-to-return-home.html"],
		["U.S. Reps Call For Moratorium On Public Housing Demolitions","/u-s-reps-call-for-moratorium-on-public-housing-demolitions.html"],
		["Harold L. Ickes Homes News","/harold-l-ickes-homes-news.html"],
		["CHA Goes on the Defensive about Child's Death","/cha-goes-on-the-defensive-about-childs-death.html"],
		["Congress Accuses HUD of Mismanagement","/congress-accuses-hud-of-mismanagement.html"],
		["New Funding for Chicago Rental Subsidies","/new-funding-for-chicago-rental-subsidies.html"],
		["Sisters Form a Brotherhood","/sisters-form-a-brotherhood.html"],
		["Lathrop Residents Want Vacant Units Occupied","/lathrop-residents-want-vacant-units-occupied.html"],
		["The Audacity of Forgiveness","/the-audacity-of-forgiveness.html"],
		["Reports Finds Child Care More Expensive than Rent","/reports-finds-child-care-more-expensive-than-rent.html"],
		["One Man Giving Back to the Community","/one-man-giving-back-to-the-community.html"],
		["Stop The Violence","/stop-the-violence.html"],
		["Crystal Clear Views","/crystal-clear-views.html"],
		["Reforms Needed at Tamms Supermax Prison","/reforms-needed-at-tamms-supermax-prison.html"],
		["Sheriff Gets Safeguards for Evicted Tenants","/sheriff-gets-safeguards-for-evicted-tenants.html"],
		["Increasing Numbers of Homeless Seniors","/increasing-numbers-of-homeless-seniors.html"],
		["Saving A Piece of History in Cabrini Green","/saving-a-piece-of-history-in-cabrini-green.html"],
		["My Life, My Story, My Song","/my-life-my-story-my-song.html"]],
	"spring 2010 issue":[
		["Dealing with the Digital Television Transition","/dealing-with-the-digital-television-transition.html"],
		["Are Illinois' Drug Laws Racially Biased?","/are-illinois-drug-laws-racially-biased.html"],
		["An Addiction to Self-Discovery","/an-addiction-to-self-discovery.html"],
		["Bronzeville Memorialized","/bronzeville-memorialized.html"],
		["Faith Leaders Call for School Reform","/faith-leaders-call-for-school-reform.html"],
		["Urban League Sues for School Equity","/urban-league-sues-for-school-equity.html"],
		["Budget Woes Nationwide","/budget-woes-nationwide.html"],
		["US Reps Issue New Call to Stop Demolitions","/us-reps-issue-new-call-to-stop-demolitions.html"],
		["Stepping Up","/stepping-up.html"],
		["Putting Animal Cruelty In Perspective","/putting-animal-cruelty-in-perspective.html"],
		["What's Love Got to Do With It?","/whats-love-got-to-do-with-it.html"],
		["Rethinking Abortion","/rethinking-abortion.html"],
		["A Facebook Addiction","/a-facebook-addiction.html"],
		["Danger Zone","/danger-zone.html"],
		["Mayor Daley Visits South Shore High School","/mayor-daley-visits-south-shore-high-school.html"],
		["Teen Pregnancy Hits Teens Hard","/teen-pregnancy-hits-teens-hard.html"],
		["Mohawks","/mohawks.html"],
		["Long John Shivers","/long-john-shivers.html"],
		["Germs","/germs.html"],
		["Personal Hygiene","/1114.html"],
		["A Tale of Two Cities","/a-tale-of-two-cities.html"],
		["After Katrina, New Orleans Still Turbulent","/after-katrina-new-orleans-still-turbulent.html"],
		["Invasion of the Bedbugs","/invasion-of-the-bedbugs.html"],
		["Off The Edge","/off-the-edge.html"],
		["LeClaire Courts' Demise","/leclaire-courts-demise.html"],
		["Lathrop Tenants Object to CHA's Plan","/lathrop-tenants-object-to-chas-plan.html"],
		["Atgeld Residents: New School Will Curb Violence","/atgeld-residents-new-school-will-curb-violence.html"],
		["Ickes Homes News: The Final Curtain?","/ickes-homes-news-the-final-curtain.html"],
		["Relocation Rights Duel","/relocation-rights-duel.html"],
		["Tenants Protest New CHA School Reporting Policy","/tenants-protest-new-cha-school-reporting-policy.html"],
		["Robert Taylor On Line","/robert-taylor-on-line.html"]],
	"American Recovery and Rehabilitation Act":[
		["Ickes Homes News: The Final Curtain?","/ickes-homes-news-the-final-curtain.html"]],
	"negligence":[
		["Relocation Rights Duel","/relocation-rights-duel.html"]],
	"Relocation Rights Contract":[
		["Relocation Rights Duel","/relocation-rights-duel.html"],
		["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing.html"],
		["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations.html"],
		["Electrically Charged","/electrically-charged.html"],
		["Relocation Rights Contract","/relocation-rights-contract.html"],
		["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan.html"]],
	"public hearing":[
		["Tenants Protest New CHA School Reporting Policy","/tenants-protest-new-cha-school-reporting-policy.html"]],
	"multimedia":[
		["We The People Media's New Video Site","/we-the-people-medias-new-video-site.html"]],
	"Youtube":[
		["We The People Media's New Video Site","/we-the-people-medias-new-video-site.html"]],
	"RJ TV":[
		["A new season of RJ TV","/a-new-season-of-rj-tv.html"],
		["Publisher's Box","/publishers-box-2.html"]],
	"Youth Media Reporter":[
		["Youth Media Reporter","/youth-media-reporter.html"]],
	"Youth Program":[
		["Youth Media Reporter","/youth-media-reporter.html"]],
	"exhibition":[
		["An Inside Out Experience","/an-inside-out-experience.html"]],
	"Illinois Humanities Council ":[
		["An Inside Out Experience","/an-inside-out-experience.html"]],
	"Jane Adams Homes":[
		["An Inside Out Experience","/an-inside-out-experience.html"]],
	"public funding":[
		["An Inside Out Experience","/an-inside-out-experience.html"]],
	"Stop the Violence":[
		["CAN TV Devotes Entire Day Programming to “Stop the Violence” in the City of Chicago","/can-tv-devotes-entire-day-programming-to-stop-the-violence-in-the-city-of-chicago.html"],
		["Stop The Violence","/stop-the-violence-9.html"]],
	"hunger strike":[
		["Born Out of Struggle (Part 1)","/born-out-of-struggle-part-1.html"]],
	"social justice":[
		["Born Out of Struggle (Part 1)","/born-out-of-struggle-part-1.html"],
		["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice.html"],
		["Dear Resident","/dear-resident-2.html"]],
	"spring 2009 issue":[
		["Born Out of Struggle (Part 1)","/born-out-of-struggle-part-1.html"],
		["The Obama Cave","/the-obama-cave.html"],
		["Youths Take Charge","/youths-take-charge.html"],
		["The Scene","/the-scene.html"],
		["Inauguration","/inauguration.html"],
		["Is South Shore Clean?","/is-south-shore-clean.html"],
		["Play Now, Pay Later","/play-now-pay-later.html"],
		["Cafeteria Food","/cafeteria-food.html"],
		["Teacher of the Month","/teacher-of-the-month.html"],
		["Memories of R. Taylor","/memories-of-r-taylor.html"],
		["Voice of the Voiceless","/voice-of-the-voiceless.html"],
		["Food Deserts","/food-deserts.html"],
		["Where I'm Coming From","/where-im-coming-from.html"],
		["A Day in the Life of a JROTC Cadet","/a-day-in-the-life-of-a-jrotc-cadet.html"],
		["CPS Fan Restrictions","/cps-fan-restrictions.html"],
		["A Stacked Deck","/a-stacked-deck.html"],
		["The CHA Plan Is Dead","/the-cha-plan-is-dead.html"],
		["Homeless Vets Speak Out","/homeless-vets-speak-out.html"],
		["The White House Agenda for the Poor","/the-white-house-agenda-for-the-poor.html"],
		["Harold Ickes Homes Update","/harold-ickes-homes-update.html"],
		["Ickes Leader Challenges CHA CEO","/ickes-leader-challenges-cha-ceo.html"],
		["CHA’s Safe Harbor Gets Bigger","/chas-safe-harbor-gets-bigger.html"],
		["Residents Blame CHA for School Closures","/residents-blame-cha-for-school-closures.html"],
		["Under Fire, Board Closes Schools Anyway","/under-fire-board-closes-schools-anyway.html"],
		["U. S. Citizens Decry Relatives’ Deportation","/u-s-citizens-decry-relatives-deportation.html"],
		["Immigration Concerns","/immigration-concerns.html"],
		["Burge Victims’ Attorneys Fight Transfers","/burge-victims-attorneys-fight-transfers.html"],
		["Wrongfully Convicted Man Files New Petition for Justice","/wrongfully-convicted-man-files-new-petition-for-justice.html"],
		["Cops Fight Their Own Over Burge","/cops-fight-their-own-over-burge.html"],
		["Grandparents Raising Grandchildren","/grandparents-raising-grandchildren.html"],
		["Child Sex Abuse: The Hidden Holocaust","/child-sex-abuse-the-hidden-holocaust.html"],
		["Protestors Target Clinic Closures","/protestors-target-clinic-closures.html"],
		["A Health Report on Aneurysm","/a-health-report-on-aneurysm.html"],
		["Black History Tour Marks Historical Undertaking","/black-history-tour-marks-historical-undertaking.html"],
		["Longest Living ABLA Homes Resident Dies","/longest-living-abla-homes-resident-dies.html"],
		["How Should Replacement U. S. Senators Be Chosen?","/how-should-replacement-u-s-senators-be-chosen.html"]],
	"election":[
		["The Obama Cave","/the-obama-cave.html"],
		["Cook County Presidential Race","/cook-county-presidential-race.html"],
		["Presidential Election Notebook","/presidential-election-notebook.html"],
		["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections.html"],
		["A Taylor-Made Election","/a-taylor-made-election.html"],
		["Wipe Out","/wipe-out.html"],
		["Cabrini-Green Election","/cabrini-green-election.html"],
		["Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes.html"],
		["2004 Election Focal Points","/2004-election-focal-points.html"],
		["Crystal Clear Views","/crystal-clear-views-7.html"],
		["Sixth District Race Makes History","/sixth-district-race-makes-history.html"],
		["2nd U.S. Congressional District Race","/2nd-u-s-congressional-district-race.html"],
		["U.S. Senate Candidate Joyce Washington","/u-s-senate-candidate-joyce-washington.html"],
		["Vote '96: Conventional Colors","/vote-96-conventional-colors-2.html"]],
	"political campaign":[
		["The Obama Cave","/the-obama-cave.html"],
		["Chicago's Hottest Elections","/chicagos-hottest-elections.html"]],
	"voting":[
		["The Obama Cave","/the-obama-cave.html"],
		["Presidential Election Notebook","/presidential-election-notebook.html"],
		["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections.html"],
		["A Taylor-Made Election","/a-taylor-made-election.html"],
		["More CHA Residents Voting Woes","/more-cha-residents-voting-woes.html"],
		["Wipe Out","/wipe-out.html"],
		["Cabrini-Green Election","/cabrini-green-election.html"],
		["Crystal Clear Views","/crystal-clear-views-7.html"]],
	"2008 presidential election":[
		["Youths Take Charge","/youths-take-charge.html"],
		["The Scene","/the-scene.html"],
		["Inauguration","/inauguration.html"]],
	"youth voting":[
		["Youths Take Charge","/youths-take-charge.html"]],
	"Early Voting":[
		["The Scene","/the-scene.html"]],
	"presidential inauguration":[
		["Inauguration","/inauguration.html"]],
	"littering":[
		["Is South Shore Clean?","/is-south-shore-clean.html"]],
	"public sanitation":[
		["Is South Shore Clean?","/is-south-shore-clean.html"]],
	"South Shore":[
		["Is South Shore Clean?","/is-south-shore-clean.html"]],
	"night school":[
		["Play Now, Pay Later","/play-now-pay-later.html"]],
	"truancy":[
		["Play Now, Pay Later","/play-now-pay-later.html"]],
	"child obesity":[
		["Cafeteria Food","/cafeteria-food.html"]],
	"South Shore High School":[
		["Cafeteria Food","/cafeteria-food.html"]],
	"teacher of the month":[
		["Teacher of the Month","/teacher-of-the-month.html"]],
	"in memoriam":[
		["Voice of the Voiceless","/voice-of-the-voiceless.html"]],
	"inspiration":[
		["Voice of the Voiceless","/voice-of-the-voiceless.html"],
		["Hope Has a Way","/hope-has-a-way.html"],
		["A Teen's Shattered Dreams","/a-teens-shattered-dreams.html"]],
	"obituary":[
		["Voice of the Voiceless","/voice-of-the-voiceless.html"]],
	"Food Desert":[
		["Food Deserts","/food-deserts.html"]],
	"food scarcity":[
		["Food Deserts","/food-deserts.html"]],
	"grocery shopping":[
		["Food Deserts","/food-deserts.html"]],
	"nutrition":[
		["Food Deserts","/food-deserts.html"]],
	"obesity":[
		["Food Deserts","/food-deserts.html"]],
	"Chicago teens":[
		["Where I'm Coming From","/where-im-coming-from.html"]],
	"teen issues":[
		["Where I'm Coming From","/where-im-coming-from.html"]],
	"Chicago Military Academy":[
		["A Day in the Life of a JROTC Cadet","/a-day-in-the-life-of-a-jrotc-cadet.html"]],
	"basketball":[
		["CPS Fan Restrictions","/cps-fan-restrictions.html"]],
	"sports administration":[
		["CPS Fan Restrictions","/cps-fan-restrictions.html"]],
	"circulation":[
		["The Spring 2009 Issue of Residents' Journal is Now Online","/the-spring-2009-issue-of-residents-journal-is-now-online.html"],
		["The Fall 2008 Issue of Residents' Journal is Now Online","/the-fall-2008-issue-of-residents-journal-is-now-online.html"]],
	"online journalism":[
		["The Spring 2009 Issue of Residents' Journal is Now Online","/the-spring-2009-issue-of-residents-journal-is-now-online.html"],
		["The Fall 2008 Issue of Residents' Journal is Now Online","/the-fall-2008-issue-of-residents-journal-is-now-online.html"]],
	"federal funding":[
		["The CHA Plan Is Dead","/the-cha-plan-is-dead.html"],
		["The White House Agenda for the Poor","/the-white-house-agenda-for-the-poor.html"]],
	"mixed income communities":[
		["The CHA Plan Is Dead","/the-cha-plan-is-dead.html"],
		["There's H.O.P.E. for Gary Residents","/theres-h-o-p-e-for-gary-residents.html"],
		["Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes.html"],
		["Bronzeville Community Alert","/bronzeville-community-alert.html"],
		["Oops, They Did It Again","/oops-they-did-it-again.html"],
		["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas.html"],
		["The Shocking Truth about CHA","/the-shocking-truth-about-cha.html"],
		["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations.html"],
		["National Housing Crisis","/national-housing-crisis.html"],
		["Relocation Rights Contract","/relocation-rights-contract.html"],
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"],
		["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man.html"]],
	"Project CHALENG":[
		["Homeless Vets Speak Out","/homeless-vets-speak-out.html"]],
	"Vetarans Administration":[
		["Homeless Vets Speak Out","/homeless-vets-speak-out.html"]],
	"veterans":[
		["Homeless Vets Speak Out","/homeless-vets-speak-out.html"]],
	"Volunteers of America":[
		["Homeless Vets Speak Out","/homeless-vets-speak-out.html"]],
	"federal policy":[
		["The White House Agenda for the Poor","/the-white-house-agenda-for-the-poor.html"]],
	"No Child Left Behind Program":[
		["The White House Agenda for the Poor","/the-white-house-agenda-for-the-poor.html"]],
	"President Barack Obama":[
		["The White House Agenda for the Poor","/the-white-house-agenda-for-the-poor.html"]],
	"social security":[
		["The White House Agenda for the Poor","/the-white-house-agenda-for-the-poor.html"],
		["Illinois Democrats Resist Social Security Privatization","/illinois-democrats-resist-social-security-privatization.html"]],
	"LAC":[
		["Ickes Leader Challenges CHA CEO","/ickes-leader-challenges-cha-ceo.html"],
		["Congress Accuses HUD of Mismanagement","/congress-accuses-hud-of-mismanagement.html"],
		["Stop The Violence","/stop-the-violence-3.html"],
		["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections.html"],
		["Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes.html"],
		["Harold Ickes News","/harold-ickes-news-5.html"],
		["Representing Residents","/representing-residents.html"],
		["Positive Residents of the CHA","/positive-residents-of-the-cha.html"],
		["Productive Men of the CHA","/productive-men-of-the-cha.html"],
		["ABLA News","/abla-news-2.html"],
		["Seniors form new organization","/seniors-form-new-organization.html"],
		["What's Happening in ABLA?","/whats-happening-in-abla.html"]],
	"CAC":[
		["CHA’s Safe Harbor Gets Bigger","/chas-safe-harbor-gets-bigger.html"],
		["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing.html"]],
	"Safe Harbor":[
		["CHA’s Safe Harbor Gets Bigger","/chas-safe-harbor-gets-bigger.html"]],
	"Chicago Board of Education":[
		["Under Fire, Board Closes Schools Anyway","/under-fire-board-closes-schools-anyway.html"]],
	"deportation":[
		["U. S. Citizens Decry Relatives’ Deportation","/u-s-citizens-decry-relatives-deportation.html"]],
	"immigration":[
		["Immigration Concerns","/immigration-concerns.html"],
		["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice.html"]],
	"Immigration and Customs Enforcement":[
		["Immigration Concerns","/immigration-concerns.html"]],
	"JCUA":[
		["Immigration Concerns","/immigration-concerns.html"]],
	"petition":[
		["Immigration Concerns","/immigration-concerns.html"],
		["CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills.html"]],
	"lawsuits":[
		["Burge Victims’ Attorneys Fight Transfers","/burge-victims-attorneys-fight-transfers.html"],
		["Cops Fight Their Own Over Burge","/cops-fight-their-own-over-burge.html"],
		["If the Suit Fits, Who Wears It?","/if-the-suit-fits-who-wears-it.html"],
		["A Championship Victory","/a-championship-victory.html"],
		["Altgeld Gardens Lawsuit Settlement","/altgeld-gardens-lawsuit-settlement.html"],
		["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history.html"],
		["Stop the Violence","/stop-the-violence-12.html"],
		["Stop The Violence","/stop-the-violence-13.html"],
		["Stop The Violence","/stop-the-violence-15.html"]],
	"Fraternal Order of the Police":[
		["Cops Fight Their Own Over Burge","/cops-fight-their-own-over-burge.html"]],
	"police funding":[
		["Cops Fight Their Own Over Burge","/cops-fight-their-own-over-burge.html"]],
	"fixed income":[
		["Grandparents Raising Grandchildren","/grandparents-raising-grandchildren.html"]],
	"Grandfamily Support Program":[
		["Grandparents Raising Grandchildren","/grandparents-raising-grandchildren.html"]],
	"grandparents":[
		["Grandparents Raising Grandchildren","/grandparents-raising-grandchildren.html"]],
	"digital television":[
		["House Passes Digital TV Delay","/house-passes-digital-tv-delay.html"],
		["Congress Still Trying for DTV Transition Delay","/congress-still-trying-for-dtv-transition-delay.html"],
		["Update: U. S. Senate Advances Digital TV Delay","/update-u-s-senate-advances-digital-tv-delay.html"],
		["Obama Urges Delay in Digital TV Shift","/obama-urges-delay-in-digital-tv-shift.html"]],
	"media policy":[
		["House Passes Digital TV Delay","/house-passes-digital-tv-delay.html"],
		["Congress Still Trying for DTV Transition Delay","/congress-still-trying-for-dtv-transition-delay.html"],
		["Update: U. S. Senate Advances Digital TV Delay","/update-u-s-senate-advances-digital-tv-delay.html"],
		["Obama Urges Delay in Digital TV Shift","/obama-urges-delay-in-digital-tv-shift.html"]],
	"national legislation":[
		["House Passes Digital TV Delay","/house-passes-digital-tv-delay.html"]],
	"The Nielsen Company":[
		["House Passes Digital TV Delay","/house-passes-digital-tv-delay.html"],
		["Update: U. S. Senate Advances Digital TV Delay","/update-u-s-senate-advances-digital-tv-delay.html"]],
	"US House of Representatives":[
		["House Passes Digital TV Delay","/house-passes-digital-tv-delay.html"],
		["Congress Still Trying for DTV Transition Delay","/congress-still-trying-for-dtv-transition-delay.html"]],
	"DTV transition":[
		["Update: U. S. Senate Advances Digital TV Delay","/update-u-s-senate-advances-digital-tv-delay.html"],
		["Obama Urges Delay in Digital TV Shift","/obama-urges-delay-in-digital-tv-shift.html"],
		["‘Train Wreck’ Expected for TV Transition","/train-wreck-expected-for-tv-transition.html"]],
	"Chicago Urban League":[
		["Youths Testify for Alternative Schools","/youths-testify-for-alternative-schools.html"]],
	"education funding":[
		["Youths Testify for Alternative Schools","/youths-testify-for-alternative-schools.html"]],
	"Governor Blagojevich":[
		["Roland Burris Tapped for Vacant U. S. Senate Seat","/roland-burris-tapped-for-vacant-u-s-senate-seat.html"]],
	"investigation":[
		["Roland Burris Tapped for Vacant U. S. Senate Seat","/roland-burris-tapped-for-vacant-u-s-senate-seat.html"],
		["Deadly Moves II","/deadly-moves-ii.html"],
		["Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle.html"],
		["A Questionable Connection","/a-questionable-connection.html"],
		["Deadly Moves - an update","/deadly-moves-an-update.html"],
		["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves.html"],
		["Stop The Violence","/stop-the-violence-14.html"]],
	"Roland Burris":[
		["Roland Burris Tapped for Vacant U. S. Senate Seat","/roland-burris-tapped-for-vacant-u-s-senate-seat.html"]],
	"US senate appointment":[
		["Roland Burris Tapped for Vacant U. S. Senate Seat","/roland-burris-tapped-for-vacant-u-s-senate-seat.html"]],
	"automotive industry":[
		["Obama: Bush Administration Automaker Plan a “Necessary Step.”","/obama-bush-administration-automaker-plan-a-necessary-step.html"]],
	"bipartisanship":[
		["Obama: Bush Administration Automaker Plan a “Necessary Step.”","/obama-bush-administration-automaker-plan-a-necessary-step.html"]],
	"financial crisis":[
		["Obama: Bush Administration Automaker Plan a “Necessary Step.”","/obama-bush-administration-automaker-plan-a-necessary-step.html"]],
	"President George W Bush":[
		["Obama: Bush Administration Automaker Plan a “Necessary Step.”","/obama-bush-administration-automaker-plan-a-necessary-step.html"]],
	"national healthcare":[
		["President-Elect Obama Nominates Former Senator Secretary of Health and Human Services","/president-elect-obama-nominates-former-senator-secretary-of-health-and-human-services.html"],
		["Medicare Prescription Drug Benefit","/medicare-prescription-drug-benefit.html"],
		["The High Cost of Medicine","/the-high-cost-of-medicine.html"]],
	"White House Office of Health Reform":[
		["President-Elect Obama Nominates Former Senator Secretary of Health and Human Services","/president-elect-obama-nominates-former-senator-secretary-of-health-and-human-services.html"]],
	"Human Rights Day":[
		["Statement from President-elect Barack Obama on Human Rights Day","/statement-from-president-elect-barack-obama-on-human-rights-day.html"]],
	"political reform":[
		["The Times They Are A’Changing","/the-times-they-are-achanging.html"]],
	"digital tv":[
		["‘Train Wreck’ Expected for TV Transition","/train-wreck-expected-for-tv-transition.html"]],
	"renovation":[
		["CHA Seniors Keep Waiting to Return Home","/cha-seniors-keep-waiting-to-return-home.html"],
		["Archer Courts: A Model Rehab","/archer-courts-a-model-rehab.html"],
		["The New Cook County Hospital","/the-new-cook-county-hospital.html"],
		["Seniors Complain About Renovations","/seniors-complain-about-renovations.html"],
		["Harold Ickes News","/harold-ickes-news-8.html"],
		["Harold Ickes News","/harold-ickes-news-10.html"],
		["Seniors Quality of Life On The Rise","/seniors-quality-of-life-on-the-rise.html"],
		["All Things Old and New at Harold Ickes Homes","/all-things-old-and-new.html"]],
	"public housing demolition":[
		["U.S. Reps Call For Moratorium On Public Housing Demolitions","/u-s-reps-call-for-moratorium-on-public-housing-demolitions.html"]],
	"police harassment":[
		["Harold L. Ickes Homes News","/harold-l-ickes-homes-news.html"]],
	"unsafe living conditions":[
		["CHA Goes on the Defensive about Child's Death","/cha-goes-on-the-defensive-about-childs-death.html"]],
	"youth danger":[
		["CHA Goes on the Defensive about Child's Death","/cha-goes-on-the-defensive-about-childs-death.html"]],
	"Low Income Housing Trust Fund":[
		["New Funding for Chicago Rental Subsidies","/new-funding-for-chicago-rental-subsidies.html"]],
	"non profits":[
		["Sisters Form a Brotherhood","/sisters-form-a-brotherhood.html"]],
	"Operation Brotherhood":[
		["Sisters Form a Brotherhood","/sisters-form-a-brotherhood.html"]],
	"Women s History Month":[
		["Sisters Form a Brotherhood","/sisters-form-a-brotherhood.html"]],
	"women s rights":[
		["Sisters Form a Brotherhood","/sisters-form-a-brotherhood.html"]],
	"One Strike Policy":[
		["Lathrop Residents Want Vacant Units Occupied","/lathrop-residents-want-vacant-units-occupied.html"],
		["Penalties","/penalties.html"],
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"]],
	"protestors":[
		["Lathrop Residents Want Vacant Units Occupied","/lathrop-residents-want-vacant-units-occupied.html"]],
	"poem":[
		["The Wells","/the-wells.html"]],
	"The Wells":[
		["The Wells","/the-wells.html"]],
	"winter 2008 issue":[
		["The Wells","/the-wells.html"],
		["Everyday Life","/everyday-life.html"],
		["Stereotypes","/stereotypes.html"],
		["A Year Later","/a-year-later.html"],
		["Growing Up","/growing-up.html"],
		["This Ain't That","/this-aint-that.html"],
		["Penalties","/penalties.html"],
		["Me and My Hood","/me-and-my-hood.html"],
		["I Ain't...","/i-aint.html"],
		["Haters","/haters.html"],
		["Bonnita's Autobiography","/bonnitas-autobiography.html"],
		["Drug Addicts: A Childhood Life with a Mother on Drugs Part Two","/drug-addicts-a-childhood-life-with-a-mother-on-drugs-part-two.html"],
		["Shop Talk","/shop-talk.html"],
		["Domestic Violence Awareness Report","/domestic-violence-awareness-report.html"],
		["Genetic Testing and Personal Responsibility","/genetic-testing-and-personal-responsibility.html"],
		["Crystal Clear Views","/homelessness-a-constant-american-tragedy.html"],
		["The Aftermath of Relocation","/the-aftermath-of-relocation.html"],
		["The Pros and Cons of Relocation","/pros-and-cons-of-relocation.html"],
		["Lathrop Homes Targeted for Redevelopment","/lathrop-homes-targeted-for-redevelopment.html"],
		["Harold Ickes News","/harold-ickes-news.html"],
		["Seniors Protest Rent Rise","/seniors-protest-rent-rise.html"],
		["Cook County Health Bureau News","/cook-county-health-bureau-news.html"],
		["A Katrina Victim's Personal Ordeal","/a-katrina-victims-personal-ordeal-2.html"],
		["Tenants Council Battles To Represent Residents","/tenants-council-battles-to-represent-residents.html"],
		["Jackson Visits Ickes","/jackson-visits-ickes.html"],
		["Are CPD Contact Cards Unconstitutional?","/are-cpd-contact-cards-unconstitutional.html"],
		["CHA New Work Rule Questioned","/cha-new-work-rule-questioned.html"],
		["Who Could Miss The Hole?","/who-could-miss-the-hole.html"]],
	"public housing stereotypes":[
		["Stereotypes","/stereotypes.html"],
		["ABLA News","/abla-news-2.html"]],
	"poetry":[
		["Me and My Hood","/me-and-my-hood.html"],
		["I Ain't...","/i-aint.html"]],
	"drug use":[
		["Drug Addicts: A Childhood Life with a Mother on Drugs Part Two","/drug-addicts-a-childhood-life-with-a-mother-on-drugs-part-two.html"],
		["It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini.html"],
		["A 'One Strike' Battle Planned","/a-one-strike-battle-planned.html"]],
	"rent prices":[
		["Seniors Protest Rent Rise","/seniors-protest-rent-rise.html"],
		["Transforming CHA: How To Save On Rent","/transforming-cha-how-to-save-on-rent.html"]],
	"Cook County":[
		["Cook County Health Bureau News","/cook-county-health-bureau-news.html"],
		["Sixth District Race Makes History","/sixth-district-race-makes-history.html"],
		["Stop The Violence","/stop-the-violence-7.html"],
		["Stop the Violence","/stop-the-violence-12.html"]],
	"health department":[
		["Cook County Health Bureau News","/cook-county-health-bureau-news.html"]],
	"Hurricane Katrina":[
		["A Katrina Victim's Personal Ordeal","/a-katrina-victims-personal-ordeal-2.html"]],
	"the Hole":[
		["Who Could Miss The Hole?","/who-could-miss-the-hole.html"]],
	"advocacy":[
		["A Special Tribute","/a-special-tribute.html"],
		["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice.html"],
		["Residents: What People Want","/residents-what-people-want.html"],
		["Oops, They Did It Again","/oops-they-did-it-again.html"],
		["Stop The Violence","/stop-the-violence-7.html"],
		["Making CHA Accessible","/making-cha-accessible.html"],
		["National Housing Crisis","/national-housing-crisis.html"],
		["Welfare Reform: Lost In Space","/welfare-reform-lost-in-space.html"],
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"],
		["CHA Family Service Connectors","/cha-family-service-connectors.html"]],
	"Izora Davis":[
		["A Special Tribute","/a-special-tribute.html"]],
	"january 2007 issue":[
		["A Special Tribute","/a-special-tribute.html"],
		["Crystal Clear Views","/crystal-clear-views-2.html"],
		["Whose School Is It?","/whose-school-is-it.html"],
		["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice.html"],
		["A Questionable Connection Update","/a-questionable-connection-update.html"],
		["Guard Recklessly Shoots CHA Youth","/guard-recklessly-shoots-cha-youth.html"],
		["Altgeld Gardens News","/altgeld-garden-news.html"],
		["Ickes and Other CHA News","/ickes-and-other-cha-news.html"],
		["Last Days At Ogden Courts","/last-days-at-ogden-courts.html"],
		["Security Problems Continue for Residents","/security-problems-continue-for-residents.html"],
		["Checking Chicago's War on Drugs","/checking-chicagos-war-on-drugs.html"],
		["House of Screams","/house-of-screams.html"],
		["Publisher's Box","/publishers-box.html"]],
	"living conditions":[
		["A Special Tribute","/a-special-tribute.html"],
		["Victory at Bridgeport Homes","/victory-at-bridgeport-homes.html"],
		["Harold Ickes News","/harold-ickes-news-2.html"],
		["Tales of Lawndale Housing","/tales-of-lawndale-housing.html"],
		["Utility Problems Persist for Residents","/utility-problems-persist-for-residents.html"],
		["Senior Rehab Update","/senior-rehab-update.html"],
		["Archer Courts: A Model Rehab","/archer-courts-a-model-rehab.html"],
		["Harold Ickes News","/harold-ickes-news-5.html"],
		["Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha.html"],
		["A Report On Management at Ogden Courts","/a-report-on-management-at-ogden-courts.html"],
		["Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update.html"],
		["ABLA Relocation Report","/abla-relocation-report.html"],
		["CHA to Buy Back Laundry Tokens","/cha-to-buy-back-laundry-tokens.html"],
		["The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath.html"],
		["Access Report","/access-report-2.html"],
		["Residents Fight Vacate Orders","/residents-fight-vacate-orders.html"],
		["Flannery Homes Update","/flannery-homes-update-2.html"],
		["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph.html"],
		["Horner Annex Reborn","/horner-annex-reborn.html"],
		["Washington Park: The Dying Hope","/washington-park-the-dying-hope.html"]],
	"McCormick Place":[
		["A Special Tribute","/a-special-tribute.html"]],
	"S Lake Park":[
		["A Special Tribute","/a-special-tribute.html"]],
	"tribute":[
		["A Special Tribute","/a-special-tribute.html"]],
	"advice":[
		["Crystal Clear Views","/crystal-clear-views-2.html"],
		["Crystal Clear Views","/crystal-clear-views-3.html"],
		["Crystal Clear Views","/crystal-clear-views-4.html"],
		["Crystal Clear Views","/crystal-clear-views-6.html"],
		["Crystal Clear Views","/crystal-clear-views-7.html"],
		["Crystal Clear Views","/crystal-clear-views-8.html"],
		["Dear Resident","/dear-resident.html"],
		["Crystal Clear Views","/crystal-clear-views-9.html"],
		["Dear Resident","/dear-resident-12.html"],
		["Dear Resident","/dear-resident-9.html"],
		["Dear Resident","/dear-resident-11.html"]],
	"asthma":[
		["Crystal Clear Views","/crystal-clear-views-2.html"]],
	"symptoms":[
		["Crystal Clear Views","/crystal-clear-views-2.html"]],
	"attendance":[
		["Whose School Is It?","/whose-school-is-it.html"]],
	"attendance boundaries":[
		["Whose School Is It?","/whose-school-is-it.html"]],
	"Chicago Latino community":[
		["Whose School Is It?","/whose-school-is-it.html"]],
	"Little Village High School":[
		["Whose School Is It?","/whose-school-is-it.html"]],
	"referendum":[
		["Whose School Is It?","/whose-school-is-it.html"]],
	"student population":[
		["Whose School Is It?","/whose-school-is-it.html"]],
	"citizenship":[
		["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice.html"]],
	"illegal immigration":[
		["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice.html"]],
	"Illinois Coalition for Immigrant and Refugee Rights":[
		["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice.html"]],
	"legalization":[
		["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice.html"]],
	"North American Free Trade Agreement":[
		["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice.html"]],
	"reform":[
		["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice.html"],
		["Illinois Democrats Resist Social Security Privatization","/illinois-democrats-resist-social-security-privatization.html"],
		["Update: Zoning and Affordable Housing","/update-zoning-and-affordable-housing.html"],
		["School Reform: Which Tax?","/school-reform-which-tax.html"]],
	"undocumented workers":[
		["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice.html"]],
	"VOTE":[
		["Illegal Immigration: Cries For Justice","/illegal-immigration-cries-for-justice.html"],
		["Tales of Lawndale Housing","/tales-of-lawndale-housing.html"],
		["Ex Marks The Spot","/ex-marks-the-spot.html"],
		["Horner Annex Reborn","/horner-annex-reborn.html"]],
	"CHA donations":[
		["A Questionable Connection Update","/a-questionable-connection-update.html"]],
	"questionable practices":[
		["A Questionable Connection Update","/a-questionable-connection-update.html"]],
	"gun violence":[
		["Guard Recklessly Shoots CHA Youth","/guard-recklessly-shoots-cha-youth.html"],
		["Stop The Violence","/stop-the-violence-5.html"],
		["Stop The Violence","/stop-the-violence-9.html"],
		["It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini.html"],
		["Harold Ickes News","/harold-ickes-news-9.html"],
		["African-American Male Suicides","/african-american-male-suicides.html"],
		["Stop The Violence","/stop-the-violence-13.html"],
		["Stop the Violence","/stop-the-violence-16.html"],
		["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation.html"],
		["When Will It End?","/when-will-it-end.html"],
		["Stop the Violence","/stop-the-violence-17.html"]],
	"remodeling":[
		["Altgeld Gardens News","/altgeld-garden-news.html"],
		["Harold Ickes News","/harold-ickes-news-6.html"],
		["Transforming CHA: New Lights on Dark Passage","/transforming-cha-new-lights-on-dark-passage.html"]],
	"ogden courts":[
		["Last Days At Ogden Courts","/last-days-at-ogden-courts.html"],
		["Stop The Violence","/stop-the-violence-3.html"],
		["A Report On Management at Ogden Courts","/a-report-on-management-at-ogden-courts.html"],
		["Stop The Violence","/stop-the-violence-8.html"],
		["Maintenance Defects at Ogden Courts","/maintenance-defects-at-ogden-courts.html"],
		["Stop The Violence","/stop-the-violence-10.html"]],
	"low income housing security":[
		["Security Problems Continue for Residents","/security-problems-continue-for-residents.html"]],
	"illegal drugs":[
		["Checking Chicago's War on Drugs","/checking-chicagos-war-on-drugs.html"],
		["Troubling Development Update","/troubling-development-update.html"]],
	"injustice":[
		["House of Screams","/house-of-screams.html"],
		["Stop The Violence","/stop-the-violence-7.html"]],
	"Jon Burge":[
		["House of Screams","/house-of-screams.html"]],
	"police brutality":[
		["House of Screams","/house-of-screams.html"],
		["Stop The Violence","/stop-the-violence-4.html"],
		["Stop The Violence","/stop-the-violence-13.html"],
		["Stop the Violence II","/stop-the-violence-ii.html"]],
	"Ulysses U S Floyd":[
		["House of Screams","/house-of-screams.html"],
		["Deadly Moves: In Too Deep","/deadly-moves-in-too-deep.html"]],
	"freedom of the press":[
		["Publisher's Box","/publishers-box.html"]],
	"police mistreatment":[
		["Publisher's Box","/publishers-box.html"]],
	"Apostolic Church Choir of Chicago":[
		["Black History Through Performance","/black-history-through-performance.html"]],
	"black history month":[
		["Black History Through Performance","/black-history-through-performance.html"],
		["Dear Resident","/dear-resident-2.html"],
		["Dear Resident","/dear-resident-7.html"],
		["Black History Section: A Celebrated Life","/black-history-section-a-celebrated-life.html"]],
	"Cliff Kelley":[
		["Black History Through Performance","/black-history-through-performance.html"]],
	"entertainment":[
		["Black History Through Performance","/black-history-through-performance.html"],
		["CHA Development News","/cha-development-news.html"],
		["The Compassionate Blues","/the-compassionate-blues.html"]],
	"February":[
		["Black History Through Performance","/black-history-through-performance.html"]],
	"february march 2006 issue":[
		["Black History Through Performance","/black-history-through-performance.html"],
		["Stop the Violence","/stop-the-violence-2.html"],
		["CHA Development News","/cha-development-news.html"],
		["Pilsen Guards Against Gentrifyers","/pilsen-guards-against-gentrifyers.html"],
		["CHA Contracting Woes","/cha-contracting-woes.html"],
		["State Passes Support for Renters","/state-passes-support-for-renters.html"],
		["Bird Flu Pandemic Expected","/bird-flu-pandemic-expected.html"],
		["Jones vs. Tatum","/jones-vs-tatum.html"],
		["Rush vs. Jackson","/rush-vs-jackson.html"],
		["Cook County Presidential Race","/cook-county-presidential-race.html"],
		["Troubling Development Update","/troubling-development-update.html"],
		["Deadly Moves II","/deadly-moves-ii.html"],
		["Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle.html"],
		["Victory at Bridgeport Homes","/victory-at-bridgeport-homes.html"],
		["Publisher's Box","/publishers-box-2.html"]],
	"Frederick Douglass":[
		["Black History Through Performance","/black-history-through-performance.html"]],
	"Harlan High School":[
		["Black History Through Performance","/black-history-through-performance.html"]],
	"Kevin McIlvaine":[
		["Black History Through Performance","/black-history-through-performance.html"]],
	"Positive Reinforcement through Identity Development and Education":[
		["Black History Through Performance","/black-history-through-performance.html"]],
	"pride":[
		["Black History Through Performance","/black-history-through-performance.html"],
		["Dear Resident","/dear-resident-5.html"]],
	"Michael Barlow Center":[
		["Stop the Violence","/stop-the-violence-2.html"]],
	"St Leanord s Ministries":[
		["Stop the Violence","/stop-the-violence-2.html"]],
	"Annual Low End Productions Basketball League":[
		["CHA Development News","/cha-development-news.html"]],
	"culture":[
		["CHA Development News","/cha-development-news.html"],
		["Black Metropolis National Heritage Area Project","/black-metropolis-national-heritage-area-project.html"],
		["The Compassionate Blues","/the-compassionate-blues.html"],
		["Traveling: From Therapy to Art","/traveling-from-therapy-to-art.html"]],
	"Sunday Night Steppers Set":[
		["CHA Development News","/cha-development-news.html"]],
	"Lipe Property Company":[
		["Pilsen Guards Against Gentrifyers","/pilsen-guards-against-gentrifyers.html"]],
	"neighborhood development":[
		["Pilsen Guards Against Gentrifyers","/pilsen-guards-against-gentrifyers.html"]],
	"press conference":[
		["Pilsen Guards Against Gentrifyers","/pilsen-guards-against-gentrifyers.html"],
		["Transforming CHA: New Lights on Dark Passage","/transforming-cha-new-lights-on-dark-passage.html"]],
	"William Moorehead and Associates":[
		["CHA Contracting Woes","/cha-contracting-woes.html"]],
	"funding":[
		["State Passes Support for Renters","/state-passes-support-for-renters.html"],
		["Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle.html"],
		["Publisher's Box","/publishers-box-2.html"],
		["There's H.O.P.E. for Gary Residents","/theres-h-o-p-e-for-gary-residents.html"],
		["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects.html"],
		["Myths and Urban Legends","/myths-and-urban-legends.html"],
		["The Terror Within","/the-terror-within.html"],
		["SPECIAL FEATURE: City Gets CHA Funds Update","/special-feature-city-gets-cha-funds-update.html"],
		["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds.html"],
		["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting.html"],
		["Cold War Echoes","/cold-war-echoes.html"],
		["School Reform: Which Tax?","/school-reform-which-tax.html"]],
	"Rental Housing Support Program":[
		["State Passes Support for Renters","/state-passes-support-for-renters.html"]],
	"bird flu":[
		["Bird Flu Pandemic Expected","/bird-flu-pandemic-expected.html"]],
	"Influenza Preparedness":[
		["Bird Flu Pandemic Expected","/bird-flu-pandemic-expected.html"]],
	"national health":[
		["Bird Flu Pandemic Expected","/bird-flu-pandemic-expected.html"]],
	"pandemic":[
		["Bird Flu Pandemic Expected","/bird-flu-pandemic-expected.html"]],
	"Senate Bill 2112":[
		["Bird Flu Pandemic Expected","/bird-flu-pandemic-expected.html"]],
	"vaccines":[
		["Bird Flu Pandemic Expected","/bird-flu-pandemic-expected.html"]],
	"campaign":[
		["Jones vs. Tatum","/jones-vs-tatum.html"],
		["Cook County Presidential Race","/cook-county-presidential-race.html"],
		["Presidential Election Notebook","/presidential-election-notebook.html"],
		["HIV/AIDs Crisis","/hivaids-crisis.html"]],
	"Lovanna Jones":[
		["Jones vs. Tatum","/jones-vs-tatum.html"]],
	"primary election":[
		["Jones vs. Tatum","/jones-vs-tatum.html"],
		["Rush vs. Jackson","/rush-vs-jackson.html"]],
	"Ranoule Tatum":[
		["Jones vs. Tatum","/jones-vs-tatum.html"]],
	"state representative":[
		["Jones vs. Tatum","/jones-vs-tatum.html"]],
	"Bobby Rush":[
		["Rush vs. Jackson","/rush-vs-jackson.html"]],
	"Phillip Jackson":[
		["Rush vs. Jackson","/rush-vs-jackson.html"]],
	"contributions":[
		["Cook County Presidential Race","/cook-county-presidential-race.html"]],
	"Cook County Board":[
		["Cook County Presidential Race","/cook-county-presidential-race.html"]],
	"John Stroger":[
		["Cook County Presidential Race","/cook-county-presidential-race.html"]],
	"primary race":[
		["Cook County Presidential Race","/cook-county-presidential-race.html"]],
	"drug activity":[
		["Troubling Development Update","/troubling-development-update.html"]],
	"drug issues":[
		["Troubling Development Update","/troubling-development-update.html"],
		["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2.html"]],
	"gang activity":[
		["Troubling Development Update","/troubling-development-update.html"],
		["Deadly Moves: In Too Deep","/deadly-moves-in-too-deep.html"],
		["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2.html"]],
	"Leclaire Courts":[
		["Troubling Development Update","/troubling-development-update.html"],
		["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections.html"],
		["Last Day in 4525","/last-day-in-4525.html"],
		["LeClaire Courts","/leclaire-courts.html"]],
	"police protection":[
		["Troubling Development Update","/troubling-development-update.html"],
		["Deadly Moves - an update","/deadly-moves-an-update.html"],
		["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force.html"]],
	"CPD":[
		["Deadly Moves II","/deadly-moves-ii.html"],
		["Deadly Moves - an update","/deadly-moves-an-update.html"],
		["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force.html"],
		["Deadly Moves: Troubling Development","/deadly-moves-troubling-development.html"],
		["If the Suit Fits, Who Wears It?","/if-the-suit-fits-who-wears-it.html"],
		["A Championship Victory","/a-championship-victory.html"],
		["Seniors Graduate Police Class","/seniors-graduate-police-class.html"],
		["Residents Deny Security Improvements","/residents-deny-security-improvements.html"],
		["Stop The Violence","/stop-the-violence-10.html"],
		["Stop The Violence","/stop-the-violence-15.html"],
		["Stop the Violence II","/stop-the-violence-ii.html"]],
	"murder rate":[
		["Deadly Moves II","/deadly-moves-ii.html"],
		["Drug War Diagnosis","/drug-war-diagnosis.html"]],
	"17th Ward Democratic Organization":[
		["Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle.html"]],
	"A Questionable Connection":[
		["Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle.html"],
		["Victory at Bridgeport Homes","/victory-at-bridgeport-homes.html"]],
	"donations":[
		["Update: Questions Linger, Contributions Dwindle","/update-questions-linger-contributions-dwindle.html"],
		["A Questionable Connection","/a-questionable-connection.html"]],
	"Bridgeport Homes":[
		["Victory at Bridgeport Homes","/victory-at-bridgeport-homes.html"]],
	"management":[
		["Victory at Bridgeport Homes","/victory-at-bridgeport-homes.html"],
		["Harold Ickes News","/harold-ickes-news-5.html"],
		["Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha.html"],
		["Stop The Violence","/stop-the-violence-8.html"],
		["Harold Ickes News","/harold-ickes-news-9.html"],
		["Maintenance Defects at Ogden Courts","/maintenance-defects-at-ogden-courts.html"],
		["Ickes' Homes New Managers","/ickes-homes-new-managers.html"],
		["Structural Justice","/structural-justice.html"],
		["HUD Head: CHA Off Troubled List","/hud-head-cha-off-troubled-list.html"],
		["Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update.html"],
		["Flannery Homes Update","/flannery-homes-update.html"],
		["The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath.html"],
		["CHA and Latinos: Interview with Joe Shuldiner","/cha-and-latinos-interview-with-joe-shuldiner.html"],
		["Flannery Homes Update","/flannery-homes-update-2.html"],
		["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph.html"],
		["LeClaire Courts","/leclaire-courts.html"]],
	"awards":[
		["Publisher's Box","/publishers-box-2.html"]],
	"Deadly Moves":[
		["Publisher's Box","/publishers-box-2.html"],
		["Deadly Moves - an update","/deadly-moves-an-update.html"]],
	"hiatus":[
		["Publisher's Box","/publishers-box-2.html"]],
	"Media Collaboration":[
		["Publisher's Box","/publishers-box-2.html"]],
	"Society of Professional Journalists":[
		["Publisher's Box","/publishers-box-2.html"]],
	"february march 2005 issue":[
		["Harold Ickes News","/harold-ickes-news-2.html"],
		["Crystal Clear Views","/crystal-clear-views-3.html"],
		["Black Metropolis National Heritage Area Project","/black-metropolis-national-heritage-area-project.html"],
		["Healthcare Justice Act Raises Hopes","/healthcare-justice-act-raises-hopes.html"],
		["Senior Services 2005 and Beyond","/senior-services-2005-and-beyond.html"],
		["Tales of Lawndale Housing","/tales-of-lawndale-housing.html"],
		["The John Howard Association","/the-john-howard-association.html"],
		["Illinois Democrats Resist Social Security Privatization","/illinois-democrats-resist-social-security-privatization.html"],
		["Utility Problems Persist for Residents","/utility-problems-persist-for-residents.html"],
		["There's H.O.P.E. for Gary Residents","/theres-h-o-p-e-for-gary-residents.html"],
		["A Questionable Connection","/a-questionable-connection.html"]],
	"National Teachers Academy":[
		["Harold Ickes News","/harold-ickes-news-2.html"],
		["Harold Ickes News","/harold-ickes-news-3.html"],
		["Harold Ickes News","/harold-ickes-news-5.html"]],
	"diet":[
		["Crystal Clear Views","/crystal-clear-views-3.html"]],
	"exercise":[
		["Crystal Clear Views","/crystal-clear-views-3.html"]],
	"lifestyle":[
		["Crystal Clear Views","/crystal-clear-views-3.html"]],
	"Black Metropolis":[
		["Black Metropolis National Heritage Area Project","/black-metropolis-national-heritage-area-project.html"]],
	"National Heritage Area":[
		["Black Metropolis National Heritage Area Project","/black-metropolis-national-heritage-area-project.html"]],
	"National Park Service":[
		["Black Metropolis National Heritage Area Project","/black-metropolis-national-heritage-area-project.html"]],
	"NHA":[
		["Black Metropolis National Heritage Area Project","/black-metropolis-national-heritage-area-project.html"]],
	"Campaign for Better Healthcare":[
		["Healthcare Justice Act Raises Hopes","/healthcare-justice-act-raises-hopes.html"]],
	"Healthcare Justice Act":[
		["Healthcare Justice Act Raises Hopes","/healthcare-justice-act-raises-hopes.html"]],
	"El Valor":[
		["Senior Services 2005 and Beyond","/senior-services-2005-and-beyond.html"]],
	"outreach":[
		["Senior Services 2005 and Beyond","/senior-services-2005-and-beyond.html"],
		["Harold Ickes News","/harold-ickes-news-3.html"],
		["Residents: What People Want","/residents-what-people-want.html"],
		["HIV/AIDs Crisis","/hivaids-crisis.html"],
		["Operation ABLE","/operation-able.html"],
		["Harold Ickes Service Connectors","/harold-ickes-service-connectors.html"],
		["Residents Look to the Hills","/residents-look-to-the-hills.html"],
		["Dear Resident","/dear-resident-10.html"]],
	"social services":[
		["Senior Services 2005 and Beyond","/senior-services-2005-and-beyond.html"],
		["African-American Male Suicides","/african-american-male-suicides.html"],
		["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds.html"],
		["8,000 To Get Jobs Help","/8000-to-get-jobs-help.html"]],
	"Lawndale Housing":[
		["Tales of Lawndale Housing","/tales-of-lawndale-housing.html"]],
	"maintenance":[
		["Tales of Lawndale Housing","/tales-of-lawndale-housing.html"],
		["Harold Ickes News","/harold-ickes-news-5.html"],
		["Lathrop Homes News","/lathrop-homes-news.html"],
		["Stop The Violence","/stop-the-violence-8.html"],
		["Lathrop Homes Private Management","/lathrop-homes-private-management.html"],
		["Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update.html"],
		["Flannery Homes Update","/flannery-homes-update.html"]],
	"Voices of the Ex Offenders":[
		["Tales of Lawndale Housing","/tales-of-lawndale-housing.html"],
		["Ex Marks The Spot","/ex-marks-the-spot.html"]],
	"Illinois prisons":[
		["The John Howard Association","/the-john-howard-association.html"]],
	"John Howard Association":[
		["The John Howard Association","/the-john-howard-association.html"]],
	"prison reform":[
		["The John Howard Association","/the-john-howard-association.html"]],
	"George W Bush":[
		["Illinois Democrats Resist Social Security Privatization","/illinois-democrats-resist-social-security-privatization.html"],
		["Medicare Prescription Drug Benefit","/medicare-prescription-drug-benefit.html"]],
	"CHANCE":[
		["Utility Problems Persist for Residents","/utility-problems-persist-for-residents.html"]],
	"electricity costs":[
		["Utility Problems Persist for Residents","/utility-problems-persist-for-residents.html"],
		["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change.html"],
		["Running Out of Gas","/running-out-of-gas.html"],
		["Shocking Electric Bills","/shocking-electric-bills.html"]],
	"energy issues":[
		["Utility Problems Persist for Residents","/utility-problems-persist-for-residents.html"],
		["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change.html"],
		["Lathrop Homes News","/lathrop-homes-news.html"],
		["The Shocking Truth about CHA","/the-shocking-truth-about-cha.html"],
		["Running Out of Gas","/running-out-of-gas.html"],
		["Electrically Charged","/electrically-charged.html"],
		["Shocking Electric Bills Update","/shocking-electric-bills-update.html"],
		["Shocking Electric Bills","/shocking-electric-bills.html"]],
	"Housing Choice Voucher":[
		["Utility Problems Persist for Residents","/utility-problems-persist-for-residents.html"],
		["Crystal Clear Views","/crystal-clear-views-4.html"],
		["Closure Razes Resident Hopes","/closure-razes-resident-hopes.html"],
		["Positive People","/positive-people-3.html"],
		["CHAC An Update: 2003","/chac-an-update-2003.html"],
		["The Shocking Truth about CHA","/the-shocking-truth-about-cha.html"],
		["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations.html"],
		["Myths and Urban Legends","/myths-and-urban-legends.html"],
		["CHA Puts Resident In Storage","/cha-puts-resident-in-storage.html"],
		["Housing Crisis in Highland Park","/housing-crisis-in-highland-park.html"],
		["Relocation Rights Contract","/relocation-rights-contract.html"],
		["Shocking Electric Bills Update","/shocking-electric-bills-update.html"],
		["Shocking Electric Bills","/shocking-electric-bills.html"],
		["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8.html"]],
	"Low Income Housing Energy Assistance Program":[
		["Utility Problems Persist for Residents","/utility-problems-persist-for-residents.html"],
		["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change.html"]],
	"utilities":[
		["Utility Problems Persist for Residents","/utility-problems-persist-for-residents.html"]],
	"Duneland Village":[
		["There's H.O.P.E. for Gary Residents","/theres-h-o-p-e-for-gary-residents.html"]],
	"HOPE VI":[
		["There's H.O.P.E. for Gary Residents","/theres-h-o-p-e-for-gary-residents.html"],
		["Oops, They Did It Again","/oops-they-did-it-again.html"],
		["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects.html"],
		["Operation ABLE","/operation-able.html"],
		["ABLA News","/abla-news.html"],
		["ABLA News","/abla-news-2.html"],
		["Dear Resident","/dear-resident-6.html"],
		["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting.html"],
		["What's Happening in ABLA?","/whats-happening-in-abla.html"]],
	"17th War Democratic Organization":[
		["A Questionable Connection","/a-questionable-connection.html"]],
	"Better Government Association":[
		["A Questionable Connection","/a-questionable-connection.html"]],
	"Hatch Act":[
		["A Questionable Connection","/a-questionable-connection.html"]],
	"Silver Shovel":[
		["A Questionable Connection","/a-questionable-connection.html"]],
	"conflict":[
		["Crystal Clear Views","/crystal-clear-views-4.html"]],
	"winter 2004 issue":[
		["Crystal Clear Views","/crystal-clear-views-4.html"],
		["Stop The Violence","/stop-the-violence-3.html"],
		["Harold Ickes News","/harold-ickes-news-3.html"],
		["Update: Zoning and Affordable Housing","/update-zoning-and-affordable-housing.html"],
		["Residents: What People Want","/residents-what-people-want.html"],
		["Presidential Election Notebook","/presidential-election-notebook.html"],
		["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections.html"],
		["A Taylor-Made Election","/a-taylor-made-election.html"],
		["More CHA Residents Voting Woes","/more-cha-residents-voting-woes.html"],
		["Wipe Out","/wipe-out.html"],
		["Cabrini-Green Election","/cabrini-green-election.html"],
		["Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes.html"],
		["Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes.html"],
		["Positive People","/positive-people.html"],
		["Senior Rehab Update","/senior-rehab-update.html"],
		["Deadly Moves - an update","/deadly-moves-an-update.html"],
		["Closure Razes Resident Hopes","/closure-razes-resident-hopes.html"],
		["The Compassionate Blues","/the-compassionate-blues.html"]],
	"Latresha Green":[
		["Stop The Violence","/stop-the-violence-3.html"]],
	"Gospel Fest":[
		["Harold Ickes News","/harold-ickes-news-3.html"]],
	"spirituality":[
		["Harold Ickes News","/harold-ickes-news-3.html"]],
	"Affordable Housing Ordinance":[
		["Update: Zoning and Affordable Housing","/update-zoning-and-affordable-housing.html"]],
	"inclusionary zoning":[
		["Update: Zoning and Affordable Housing","/update-zoning-and-affordable-housing.html"]],
	"zoning":[
		["Update: Zoning and Affordable Housing","/update-zoning-and-affordable-housing.html"],
		["Housing on State, City Agendas","/housing-on-state-city-agendas.html"]],
	"survey":[
		["Residents: What People Want","/residents-what-people-want.html"]],
	"apathy":[
		["Presidential Election Notebook","/presidential-election-notebook.html"]],
	"presidential election":[
		["Presidential Election Notebook","/presidential-election-notebook.html"],
		["The Sound of Silence","/the-sound-of-silence.html"],
		["The Price of a Political Job","/the-price-of-a-political-job.html"]],
	"United Power and Action!":[
		["Presidential Election Notebook","/presidential-election-notebook.html"]],
	"voter involvement":[
		["Presidential Election Notebook","/presidential-election-notebook.html"]],
	"college funding":[
		["Obama's Visit to Howard Alternative High School","/obamas-visit-to-howard-alternative-high-school.html"]],
	"Howard Area Alternative High School":[
		["Obama's Visit to Howard Alternative High School","/obamas-visit-to-howard-alternative-high-school.html"]],
	"U S senate":[
		["Obama's Visit to Howard Alternative High School","/obamas-visit-to-howard-alternative-high-school.html"]],
	"Rockwell Gardens":[
		["Rockwell, LeClaire, ABLA Elections","/rockwell-leclaire-abla-elections.html"],
		["Getting to Know Rockwell","/getting-to-know-rockwell.html"],
		["Residents Fight Vacate Orders","/residents-fight-vacate-orders.html"]],
	"voter participation":[
		["A Taylor-Made Election","/a-taylor-made-election.html"],
		["More CHA Residents Voting Woes","/more-cha-residents-voting-woes.html"],
		["Wipe Out","/wipe-out.html"],
		["Cabrini-Green Election","/cabrini-green-election.html"],
		["Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes.html"]],
	"Tenant Council Election":[
		["More CHA Residents Voting Woes","/more-cha-residents-voting-woes.html"],
		["Wipe Out","/wipe-out.html"]],
	"United States Housing Act":[
		["More CHA Residents Voting Woes","/more-cha-residents-voting-woes.html"]],
	"Madden Park Homes":[
		["Wipe Out","/wipe-out.html"]],
	"Carol Steele":[
		["Cabrini-Green Election","/cabrini-green-election.html"]],
	"Coalitiong to Protect Public Housing":[
		["Cabrini-Green Election","/cabrini-green-election.html"]],
	"Election Day":[
		["Cabrini-Green Election","/cabrini-green-election.html"]],
	"Kelvin Cannon":[
		["Cabrini-Green Election","/cabrini-green-election.html"]],
	"North Side":[
		["Cabrini-Green Election","/cabrini-green-election.html"],
		["It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini.html"]],
	"Black United Fund Institute":[
		["Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes.html"]],
	"Institute for Government Research":[
		["Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes.html"]],
	"Local Advisory Council":[
		["Election Report: Harold Ickes Homes","/election-report-harold-ickes-homes.html"],
		["Harold Ickes News","/harold-ickes-news-5.html"],
		["Representing Residents","/representing-residents.html"],
		["Positive Residents of the CHA","/positive-residents-of-the-cha.html"],
		["ABLA News","/abla-news.html"],
		["Productive Men of the CHA","/productive-men-of-the-cha.html"],
		["ABLA News","/abla-news-2.html"],
		["Seniors form new organization","/seniors-form-new-organization.html"],
		["What's Happening in ABLA?","/whats-happening-in-abla.html"]],
	"CPS":[
		["Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes.html"],
		["Harold Ickes New School Update","/harold-ickes-new-school-update.html"],
		["Youths Rally For Summer Jobs","/youths-rally-for-summer-jobs.html"],
		["Dear Resident","/dear-resident-12.html"],
		["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation.html"],
		["Schools March for Victims","/schools-march-for-victims.html"]],
	"Renaissance 2010":[
		["Renaissance 2010: Sweeping Changes","/renaissance-2010-sweeping-changes.html"]],
	"Parkway Gardens":[
		["Positive People","/positive-people.html"]],
	"Racine Apartments":[
		["Senior Rehab Update","/senior-rehab-update.html"],
		["Transforming CHA: Senior Only Buildings","/transforming-cha-senior-only-buildings.html"]],
	"restoration":[
		["Senior Rehab Update","/senior-rehab-update.html"]],
	"homicide":[
		["Deadly Moves - an update","/deadly-moves-an-update.html"],
		["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves.html"]],
	"murder":[
		["Deadly Moves - an update","/deadly-moves-an-update.html"]],
	"assistance":[
		["Closure Razes Resident Hopes","/closure-razes-resident-hopes.html"]],
	"Beauty Turner":[
		["The Compassionate Blues","/the-compassionate-blues.html"]],
	"blues":[
		["The Compassionate Blues","/the-compassionate-blues.html"]],
	"Clarence Scott":[
		["The Compassionate Blues","/the-compassionate-blues.html"]],
	"juke joints":[
		["The Compassionate Blues","/the-compassionate-blues.html"]],
	"Lee s Unleaded Blues":[
		["The Compassionate Blues","/the-compassionate-blues.html"]],
	"night life":[
		["The Compassionate Blues","/the-compassionate-blues.html"]],
	"august september 2004 issue":[
		["Chaos at the Bank of Lawndale","/chaos-at-the-bank-of-lawndale.html"],
		["Positive People","/positive-people-2.html"],
		["Crystal Clear Views","/crystal-clear-views-6.html"],
		["CPS Violence","/cps-violence.html"],
		["Stop The Violence","/stop-the-violence-4.html"],
		["Ex Marks The Spot","/ex-marks-the-spot.html"],
		["2004 Election Focal Points","/2004-election-focal-points.html"],
		["Medicare Prescription Drug Benefit","/medicare-prescription-drug-benefit.html"],
		["Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park.html"],
		["Archer Courts: A Model Rehab","/archer-courts-a-model-rehab.html"],
		["Harold Ickes News","/harold-ickes-news-4.html"],
		["You Have Been Served","/you-have-been-served.html"],
		["Bronzeville Community Alert","/bronzeville-community-alert.html"],
		["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change.html"],
		["Deadly Moves: In Too Deep","/deadly-moves-in-too-deep.html"],
		["Deadly Moves: Lack of Force","/deadly-moves-lack-of-force.html"],
		["Deadly Moves: Troubling Development","/deadly-moves-troubling-development.html"],
		["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2.html"],
		["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves.html"]],
	"business":[
		["Chaos at the Bank of Lawndale","/chaos-at-the-bank-of-lawndale.html"],
		["The Renowned Vernon Jordan","/the-renowned-vernon-jordan.html"],
		["Transforming CHA: Chewing Up Tobacco Road","/transforming-cha-chewing-up-tobacco-road.html"]],
	"Community Bank of Lawndale":[
		["Chaos at the Bank of Lawndale","/chaos-at-the-bank-of-lawndale.html"]],
	"controversy":[
		["Chaos at the Bank of Lawndale","/chaos-at-the-bank-of-lawndale.html"]],
	"International Bank of Chicago":[
		["Chaos at the Bank of Lawndale","/chaos-at-the-bank-of-lawndale.html"]],
	"Lawndale":[
		["Chaos at the Bank of Lawndale","/chaos-at-the-bank-of-lawndale.html"]],
	"ownership":[
		["Chaos at the Bank of Lawndale","/chaos-at-the-bank-of-lawndale.html"],
		["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history.html"],
		["Structural Justice","/structural-justice.html"],
		["REDI: A New Beginning?","/redi-a-new-beginning.html"]],
	"South West Side":[
		["Chaos at the Bank of Lawndale","/chaos-at-the-bank-of-lawndale.html"]],
	"appreciation":[
		["Positive People","/positive-people-2.html"],
		["Crystal Clear Views","/crystal-clear-views-6.html"]],
	"Youth Leadership Program":[
		["Positive People","/positive-people-2.html"]],
	"children":[
		["Crystal Clear Views","/crystal-clear-views-6.html"]],
	"family":[
		["Crystal Clear Views","/crystal-clear-views-6.html"],
		["Crystal Clear Views","/crystal-clear-views-9.html"]],
	"Mother s Day":[
		["Crystal Clear Views","/crystal-clear-views-6.html"]],
	"motherhood":[
		["Crystal Clear Views","/crystal-clear-views-6.html"],
		["Mothers Tackle Child Care Woes","/mothers-tackle-child-care-woes.html"]],
	"mothers":[
		["Crystal Clear Views","/crystal-clear-views-6.html"],
		["The Terror Within","/the-terror-within.html"]],
	"disciplinary issues":[
		["CPS Violence","/cps-violence.html"]],
	"security":[
		["CPS Violence","/cps-violence.html"],
		["Deadly Moves: Troubling Development","/deadly-moves-troubling-development.html"],
		["Stop The Violence","/stop-the-violence-11.html"],
		["Ickes: Back To Square One","/ickes-back-to-square-one.html"],
		["Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place.html"],
		["Cabrini-Green Update","/cabrini-green-update.html"],
		["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph.html"]],
	"Chicago prisons":[
		["Stop The Violence","/stop-the-violence-4.html"]],
	"Enough is Enough":[
		["Stop The Violence","/stop-the-violence-4.html"]],
	"Mayor Daley":[
		["Stop The Violence","/stop-the-violence-4.html"]],
	"Automatic Expungement Act":[
		["Ex Marks The Spot","/ex-marks-the-spot.html"]],
	"human rights":[
		["Ex Marks The Spot","/ex-marks-the-spot.html"],
		["A Trip To The Future","/a-trip-to-the-future.html"]],
	"job opportunities":[
		["Ex Marks The Spot","/ex-marks-the-spot.html"]],
	"Second Chance Act":[
		["Ex Marks The Spot","/ex-marks-the-spot.html"]],
	"activism":[
		["2004 Election Focal Points","/2004-election-focal-points.html"],
		["Positive People","/positive-people-4.html"],
		["Housing on State, City Agendas","/housing-on-state-city-agendas.html"],
		["The Renowned Vernon Jordan","/the-renowned-vernon-jordan.html"],
		["Housing For The Disabled","/housing-for-the-disabled.html"],
		["The State Of Section 8","/the-state-of-section-8.html"],
		["The Million Woman March: One Woman's View","/the-million-woman-march-one-womans-view.html"]],
	"Housing Choice Voucher Program":[
		["2004 Election Focal Points","/2004-election-focal-points.html"],
		["CHAC An Update: 2003","/chac-an-update-2003.html"]],
	"housing issues":[
		["2004 Election Focal Points","/2004-election-focal-points.html"],
		["The Sound of Silence","/the-sound-of-silence.html"]],
	"Illinois senator race":[
		["2004 Election Focal Points","/2004-election-focal-points.html"]],
	"political involvement":[
		["2004 Election Focal Points","/2004-election-focal-points.html"],
		["Crystal Clear Views","/crystal-clear-views-7.html"]],
	"voters":[
		["2004 Election Focal Points","/2004-election-focal-points.html"]],
	"health care":[
		["Medicare Prescription Drug Benefit","/medicare-prescription-drug-benefit.html"],
		["U.S. Senate Candidate Joyce Washington","/u-s-senate-candidate-joyce-washington.html"],
		["HIV/AIDs Crisis","/hivaids-crisis.html"]],
	"Medicare Modernization Act":[
		["Medicare Prescription Drug Benefit","/medicare-prescription-drug-benefit.html"]],
	"prescriptions":[
		["Medicare Prescription Drug Benefit","/medicare-prescription-drug-benefit.html"],
		["The High Cost of Medicine","/the-high-cost-of-medicine.html"]],
	"Federally Assisted Housing Preservation Act":[
		["Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park.html"]],
	"Humboldt Park":[
		["Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park.html"]],
	"IHDA":[
		["Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park.html"]],
	"Illinois Housing Development Authority":[
		["Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park.html"]],
	"Latino community":[
		["Affordable Housing for Humboldt Park","/affordable-housing-for-humboldt-park.html"],
		["RJ Visits Miami/Dade Housing Authority","/rj-visits-miamidade-housing-authority.html"],
		["New Facility for Scattered Sites","/new-facility-for-scattered-sites.html"],
		["CHA and Latinos: Interview with Joe Shuldiner","/cha-and-latinos-interview-with-joe-shuldiner.html"],
		["Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing.html"]],
	"city state development":[
		["Archer Courts: A Model Rehab","/archer-courts-a-model-rehab.html"]],
	"Archer Courts":[
		["Archer Courts: A Model Rehab","/archer-courts-a-model-rehab.html"]],
	"rehabilitation":[
		["Archer Courts: A Model Rehab","/archer-courts-a-model-rehab.html"],
		["ABLA Relocation Report","/abla-relocation-report.html"],
		["Cabrini-Green Update","/cabrini-green-update.html"]],
	"centenarian":[
		["Harold Ickes News","/harold-ickes-news-4.html"],
		["Black History Section: A Celebrated Life","/black-history-section-a-celebrated-life.html"]],
	"communtiy involvement":[
		["Harold Ickes News","/harold-ickes-news-4.html"]],
	"gentrification":[
		["Bronzeville Community Alert","/bronzeville-community-alert.html"],
		["Dear Resident","/dear-resident-6.html"]],
	"new housing":[
		["Bronzeville Community Alert","/bronzeville-community-alert.html"]],
	"public meeting":[
		["Bronzeville Community Alert","/bronzeville-community-alert.html"]],
	"Renaissance Apartments":[
		["Bronzeville Community Alert","/bronzeville-community-alert.html"]],
	"C H A N C E ":[
		["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change.html"]],
	"CEDA":[
		["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change.html"],
		["CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills.html"]],
	"Commonwealth Edison":[
		["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change.html"],
		["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas.html"],
		["The Shocking Truth about CHA","/the-shocking-truth-about-cha.html"],
		["Shocking Electric Bills Update","/shocking-electric-bills-update.html"]],
	"Community Economic Development Agency":[
		["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change.html"]],
	"electric bills":[
		["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change.html"],
		["Shocking Electric Bills Update","/shocking-electric-bills-update.html"]],
	"LIHEAP":[
		["No C.H.A.N.C.E. For Change?","/no-c-h-a-n-c-e-for-change.html"],
		["Running Out of Gas","/running-out-of-gas.html"]],
	"Black Stone Rangers":[
		["Deadly Moves: In Too Deep","/deadly-moves-in-too-deep.html"]],
	"street gangs":[
		["Deadly Moves: In Too Deep","/deadly-moves-in-too-deep.html"]],
	"mixed income neighborhoods":[
		["Deadly Moves: Troubling Development","/deadly-moves-troubling-development.html"],
		["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves.html"],
		["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing.html"],
		["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects.html"],
		["Housing Crisis in Highland Park","/housing-crisis-in-highland-park.html"],
		["ABLA News","/abla-news.html"],
		["A Savory Survey","/a-savory-survey.html"]],
	"displacement":[
		["Deadly Moves: Moving at Their Own Risk","/deadly-moves-moving-at-their-own-risk-2.html"],
		["Residents Sue CHA","/residents-sue-cha.html"],
		["Harold Ickes News","/harold-ickes-news-8.html"],
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"],
		["The State Of Section 8","/the-state-of-section-8.html"],
		["Transforming CHA: Chewing Up Tobacco Road","/transforming-cha-chewing-up-tobacco-road.html"],
		["Cabrini-Green Update","/cabrini-green-update.html"]],
	"The chicago Reporter":[
		["Publishers' Introduction: Deadly Moves","/publishers-introduction-deadly-moves.html"]],
	"Aaron Patterson":[
		["Stop The Violence","/stop-the-violence-5.html"],
		["Sixth District Race Makes History","/sixth-district-race-makes-history.html"]],
	"Fred Hampton":[
		["Stop The Violence","/stop-the-violence-5.html"]],
	"march april 2004 issue":[
		["Stop The Violence","/stop-the-violence-5.html"],
		["Crystal Clear Views","/crystal-clear-views-7.html"],
		["Positive People","/positive-people-3.html"],
		["Harold Ickes News","/harold-ickes-news-5.html"],
		["If the Suit Fits, Who Wears It?","/if-the-suit-fits-who-wears-it.html"],
		["A Championship Victory","/a-championship-victory.html"],
		["Sixth District Race Makes History","/sixth-district-race-makes-history.html"],
		["2nd U.S. Congressional District Race","/2nd-u-s-congressional-district-race.html"],
		["U.S. Senate Candidate Joyce Washington","/u-s-senate-candidate-joyce-washington.html"],
		["U.S. Senate Candidate Gery Chico","/u-s-senate-candidate-gery-chico.html"],
		["U.S. Senate Candidate Daniel Hynes","/u-s-senate-candidate-daniel-hynes.html"],
		["U.S. Senate Candidate Blair Hull","/u-s-senate-candidate-blair-hull.html"],
		["U.S. Senate Candidate Barack Obama","/u-s-senate-candidate-barack-obama.html"],
		["The Sound of Silence","/the-sound-of-silence.html"],
		["Oops, They Did It Again","/oops-they-did-it-again.html"]],
	"POCC":[
		["Stop The Violence","/stop-the-violence-5.html"]],
	"Prisoners of Consciousness Committee":[
		["Stop The Violence","/stop-the-violence-5.html"]],
	"ignorance":[
		["Crystal Clear Views","/crystal-clear-views-7.html"]],
	"voting process":[
		["Crystal Clear Views","/crystal-clear-views-7.html"]],
	"reconstruction":[
		["Positive People","/positive-people-3.html"],
		["Seniors Quality of Life On The Rise","/seniors-quality-of-life-on-the-rise.html"]],
	"Gloria Williams":[
		["Harold Ickes News","/harold-ickes-news-5.html"]],
	"legal issues":[
		["If the Suit Fits, Who Wears It?","/if-the-suit-fits-who-wears-it.html"],
		["Oops, They Did It Again","/oops-they-did-it-again.html"]],
	"Williams v Brown":[
		["A Championship Victory","/a-championship-victory.html"]],
	"Bridgeport":[
		["Sixth District Race Makes History","/sixth-district-race-makes-history.html"]],
	"death row":[
		["Sixth District Race Makes History","/sixth-district-race-makes-history.html"]],
	"Illinois state Representative":[
		["Sixth District Race Makes History","/sixth-district-race-makes-history.html"]],
	"incarceration":[
		["Sixth District Race Makes History","/sixth-district-race-makes-history.html"]],
	"Patricia Bailey":[
		["Sixth District Race Makes History","/sixth-district-race-makes-history.html"]],
	"political platform":[
		["Sixth District Race Makes History","/sixth-district-race-makes-history.html"],
		["U.S. Senate Candidate Joyce Washington","/u-s-senate-candidate-joyce-washington.html"],
		["U.S. Senate Candidate Gery Chico","/u-s-senate-candidate-gery-chico.html"],
		["U.S. Senate Candidate Daniel Hynes","/u-s-senate-candidate-daniel-hynes.html"]],
	"candidates":[
		["2nd U.S. Congressional District Race","/2nd-u-s-congressional-district-race.html"]],
	"Everett Shumpert":[
		["2nd U.S. Congressional District Race","/2nd-u-s-congressional-district-race.html"]],
	"Jesse Jackson":[
		["2nd U.S. Congressional District Race","/2nd-u-s-congressional-district-race.html"]],
	"Jr ":[
		["2nd U.S. Congressional District Race","/2nd-u-s-congressional-district-race.html"]],
	"Mel Reynolds":[
		["2nd U.S. Congressional District Race","/2nd-u-s-congressional-district-race.html"]],
	"Rev Anthony William":[
		["2nd U.S. Congressional District Race","/2nd-u-s-congressional-district-race.html"]],
	"candidate":[
		["U.S. Senate Candidate Joyce Washington","/u-s-senate-candidate-joyce-washington.html"],
		["U.S. Senate Candidate Gery Chico","/u-s-senate-candidate-gery-chico.html"],
		["U.S. Senate Candidate Daniel Hynes","/u-s-senate-candidate-daniel-hynes.html"],
		["U.S. Senate Candidate Blair Hull","/u-s-senate-candidate-blair-hull.html"],
		["U.S. Senate Candidate Barack Obama","/u-s-senate-candidate-barack-obama.html"]],
	"Joyce Washington":[
		["U.S. Senate Candidate Joyce Washington","/u-s-senate-candidate-joyce-washington.html"]],
	"political issues":[
		["U.S. Senate Candidate Joyce Washington","/u-s-senate-candidate-joyce-washington.html"],
		["U.S. Senate Candidate Gery Chico","/u-s-senate-candidate-gery-chico.html"],
		["U.S. Senate Candidate Daniel Hynes","/u-s-senate-candidate-daniel-hynes.html"],
		["U.S. Senate Candidate Blair Hull","/u-s-senate-candidate-blair-hull.html"]],
	"Board of Education":[
		["U.S. Senate Candidate Gery Chico","/u-s-senate-candidate-gery-chico.html"]],
	"U S senate election":[
		["U.S. Senate Candidate Gery Chico","/u-s-senate-candidate-gery-chico.html"],
		["U.S. Senate Candidate Daniel Hynes","/u-s-senate-candidate-daniel-hynes.html"],
		["U.S. Senate Candidate Blair Hull","/u-s-senate-candidate-blair-hull.html"],
		["U.S. Senate Candidate Barack Obama","/u-s-senate-candidate-barack-obama.html"]],
	"comptroller":[
		["U.S. Senate Candidate Daniel Hynes","/u-s-senate-candidate-daniel-hynes.html"]],
	"Dan Hynes":[
		["U.S. Senate Candidate Daniel Hynes","/u-s-senate-candidate-daniel-hynes.html"]],
	"Blair Hull":[
		["U.S. Senate Candidate Blair Hull","/u-s-senate-candidate-blair-hull.html"]],
	"platforms":[
		["U.S. Senate Candidate Blair Hull","/u-s-senate-candidate-blair-hull.html"]],
	"insurance":[
		["U.S. Senate Candidate Barack Obama","/u-s-senate-candidate-barack-obama.html"],
		["Transforming CHA: Flannery Homes Residents Keep Waiting","/transforming-cha-flannery-homes-residents-keep-waiting.html"]],
	"welfare":[
		["U.S. Senate Candidate Barack Obama","/u-s-senate-candidate-barack-obama.html"],
		["War with Iraq: A Personal Perspective","/war-with-iraq-a-personal-perspective.html"],
		["SPECIAL FEATURE: City Gets CHA Funds Update","/special-feature-city-gets-cha-funds-update.html"],
		["8,000 To Get Jobs Help","/8000-to-get-jobs-help.html"]],
	"2004 presidential election":[
		["The Sound of Silence","/the-sound-of-silence.html"]],
	"John Edwards":[
		["The Sound of Silence","/the-sound-of-silence.html"]],
	"John Kerry":[
		["The Sound of Silence","/the-sound-of-silence.html"]],
	"presidential candidates":[
		["The Sound of Silence","/the-sound-of-silence.html"]],
	"Henry Horner Homes":[
		["Oops, They Did It Again","/oops-they-did-it-again.html"],
		["Making CHA Accessible","/making-cha-accessible.html"],
		["Mothers Tackle Child Care Woes","/mothers-tackle-child-care-woes.html"],
		["Horner Annex Reborn","/horner-annex-reborn.html"],
		["Replacement Housing or Replacing People","/replacement-housing-or-replacing-people.html"]],
	"Right to Return":[
		["Oops, They Did It Again","/oops-they-did-it-again.html"]],
	"Service Connectors":[
		["Oops, They Did It Again","/oops-they-did-it-again.html"]],
	"Supportive Services":[
		["Oops, They Did It Again","/oops-they-did-it-again.html"]],
	"happiness":[
		["Crystal Clear Views","/crystal-clear-views-8.html"]],
	"january february 2004 issue":[
		["Crystal Clear Views","/crystal-clear-views-8.html"],
		["Stop The Violence","/stop-the-violence-6.html"],
		["Harold Ickes News","/harold-ickes-news-6.html"],
		["Positive People","/positive-people-4.html"],
		["The Price of a Political Job","/the-price-of-a-political-job.html"],
		["Altgeld Gardens Lawsuit Settlement","/altgeld-gardens-lawsuit-settlement.html"],
		["The True Face of Poverty","/the-true-face-of-poverty.html"],
		["Getting to Know Rockwell","/getting-to-know-rockwell.html"],
		["Is It Doomsday For Public Housing?","/is-it-doomsday-for-public-housing.html"],
		["Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha.html"],
		["Clock Ticking for HOPE VI Projects","/clock-ticking-for-hope-vi-projects.html"],
		["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas.html"]],
	"life lessons":[
		["Crystal Clear Views","/crystal-clear-views-8.html"]],
	"new year resolutions":[
		["Crystal Clear Views","/crystal-clear-views-8.html"]],
	"psychology":[
		["Stop The Violence","/stop-the-violence-6.html"]],
	"RAINN":[
		["Stop The Violence","/stop-the-violence-6.html"]],
	"rape":[
		["Stop The Violence","/stop-the-violence-6.html"]],
	"sexual assault":[
		["Stop The Violence","/stop-the-violence-6.html"],
		["Stop The Violence","/stop-the-violence-14.html"]],
	"low income housing":[
		["Positive People","/positive-people-4.html"],
		["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8.html"],
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"],
		["New Vincennes Plaza","/new-vincennes-plaza.html"],
		["The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath.html"]],
	"politicians":[
		["The Price of a Political Job","/the-price-of-a-political-job.html"]],
	"PCR":[
		["Altgeld Gardens Lawsuit Settlement","/altgeld-gardens-lawsuit-settlement.html"]],
	"settlement":[
		["Altgeld Gardens Lawsuit Settlement","/altgeld-gardens-lawsuit-settlement.html"],
		["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history.html"]],
	"economy":[
		["The True Face of Poverty","/the-true-face-of-poverty.html"]],
	"transitional living":[
		["The True Face of Poverty","/the-true-face-of-poverty.html"]],
	"unemployment":[
		["The True Face of Poverty","/the-true-face-of-poverty.html"],
		["National Housing Crisis","/national-housing-crisis.html"],
		["Squatters Worry About Homelessness","/squatters-worry-about-homelessness.html"]],
	"Housing Choice Vouchers":[
		["Getting to Know Rockwell","/getting-to-know-rockwell.html"],
		["Thomas Sullivan Report Update","/thomas-sullivan-report-update.html"],
		["Homeless Not Hopeless","/homeless-not-hopeless.html"]],
	"H J Russell":[
		["Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha.html"]],
	"heating":[
		["Residents Turn up the Heat on CHA","/residents-turn-up-the-heat-on-cha.html"]],
	"American Project":[
		["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas.html"]],
	"Gautreaux":[
		["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas.html"],
		["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing.html"],
		["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan.html"]],
	"low income residents":[
		["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas.html"],
		["Electrically Charged","/electrically-charged.html"],
		["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8.html"]],
	"Venkatesh":[
		["Report: Residents Steered to Poor Areas","/report-residents-steered-to-poor-areas.html"]],
	"evolution":[
		["Dear Resident","/dear-resident.html"]],
	"may june 2003 issue":[
		["Dear Resident","/dear-resident.html"],
		["Stop The Violence","/stop-the-violence-7.html"],
		["A Report On Management at Ogden Courts","/a-report-on-management-at-ogden-courts.html"],
		["CHAC An Update: 2003","/chac-an-update-2003.html"],
		["War with Iraq: A Personal Perspective","/war-with-iraq-a-personal-perspective.html"],
		["Harold Ickes News","/harold-ickes-news-7.html"],
		["Debating Affordable Housing","/debating-affordable-housing.html"],
		["Lathrop Homes News","/lathrop-homes-news.html"],
		["Thomas Sullivan Report Update","/thomas-sullivan-report-update.html"],
		["Making CHA Accessible","/making-cha-accessible.html"],
		["The Shocking Truth about CHA","/the-shocking-truth-about-cha.html"],
		["Homeless Not Hopeless","/homeless-not-hopeless.html"]],
	"Beyond media":[
		["Stop The Violence","/stop-the-violence-7.html"]],
	"Chicago Legal Advocacy for Incercerated Mothers":[
		["Stop The Violence","/stop-the-violence-7.html"]],
	"CLAIM":[
		["Stop The Violence","/stop-the-violence-7.html"]],
	"Cook County Jail Town Hall Meeting":[
		["Stop The Violence","/stop-the-violence-7.html"]],
	"incarcerated mothers":[
		["Stop The Violence","/stop-the-violence-7.html"]],
	"Operation PUSH":[
		["Stop The Violence","/stop-the-violence-7.html"],
		["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center.html"]],
	"prison system":[
		["Stop The Violence","/stop-the-violence-7.html"]],
	"prison violence":[
		["Stop The Violence","/stop-the-violence-7.html"]],
	"damages":[
		["A Report On Management at Ogden Courts","/a-report-on-management-at-ogden-courts.html"],
		["Maintenance Defects at Ogden Courts","/maintenance-defects-at-ogden-courts.html"]],
	"Good Neighbor Workshop":[
		["A Report On Management at Ogden Courts","/a-report-on-management-at-ogden-courts.html"]],
	"home management":[
		["A Report On Management at Ogden Courts","/a-report-on-management-at-ogden-courts.html"]],
	"repairs":[
		["A Report On Management at Ogden Courts","/a-report-on-management-at-ogden-courts.html"]],
	"seminar":[
		["A Report On Management at Ogden Courts","/a-report-on-management-at-ogden-courts.html"]],
	"Certificate Program":[
		["CHAC An Update: 2003","/chac-an-update-2003.html"]],
	"CHAC":[
		["CHAC An Update: 2003","/chac-an-update-2003.html"],
		["A Section 8 Recipient's Painful Reality","/a-section-8-recipients-painful-reality.html"],
		["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8.html"],
		["The State Of Section 8","/the-state-of-section-8.html"],
		["Transforming CHA: Federal Housing Voucher Woes","/transforming-cha-federal-housing-voucher-woes.html"]],
	"eligibility":[
		["CHAC An Update: 2003","/chac-an-update-2003.html"]],
	"Family Self Sufficieny Program":[
		["CHAC An Update: 2003","/chac-an-update-2003.html"]],
	"FSS":[
		["CHAC An Update: 2003","/chac-an-update-2003.html"]],
	"home ownership":[
		["CHAC An Update: 2003","/chac-an-update-2003.html"],
		["CHA Home Ownership: Wentworth Gardens","/cha-home-ownership-wentworth-gardens.html"]],
	"Home Ownership Program":[
		["CHAC An Update: 2003","/chac-an-update-2003.html"],
		["CHA Home Ownership: Wentworth Gardens","/cha-home-ownership-wentworth-gardens.html"]],
	"re structuring":[
		["CHAC An Update: 2003","/chac-an-update-2003.html"]],
	"regulations":[
		["CHAC An Update: 2003","/chac-an-update-2003.html"],
		["Flannery Homes Update","/flannery-homes-update.html"],
		["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments.html"]],
	"Voucher Program":[
		["CHAC An Update: 2003","/chac-an-update-2003.html"]],
	"Armed Forces":[
		["War with Iraq: A Personal Perspective","/war-with-iraq-a-personal-perspective.html"]],
	"Iraq War":[
		["War with Iraq: A Personal Perspective","/war-with-iraq-a-personal-perspective.html"]],
	"military service":[
		["War with Iraq: A Personal Perspective","/war-with-iraq-a-personal-perspective.html"],
		["The Terror Within","/the-terror-within.html"]],
	"ROTC":[
		["War with Iraq: A Personal Perspective","/war-with-iraq-a-personal-perspective.html"],
		["The Renowned Vernon Jordan","/the-renowned-vernon-jordan.html"]],
	"U S Navy":[
		["War with Iraq: A Personal Perspective","/war-with-iraq-a-personal-perspective.html"]],
	"warfare":[
		["War with Iraq: A Personal Perspective","/war-with-iraq-a-personal-perspective.html"]],
	"E2":[
		["Harold Ickes News","/harold-ickes-news-7.html"]],
	"blackout":[
		["Lathrop Homes News","/lathrop-homes-news.html"]],
	"recommendations":[
		["Thomas Sullivan Report Update","/thomas-sullivan-report-update.html"]],
	"Thomas Sullivan":[
		["Thomas Sullivan Report Update","/thomas-sullivan-report-update.html"]],
	"accessibility":[
		["Making CHA Accessible","/making-cha-accessible.html"],
		["Access Report","/access-report-3.html"],
		["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments.html"]],
	"Chicago disabled":[
		["Making CHA Accessible","/making-cha-accessible.html"],
		["Operation ABLE","/operation-able.html"],
		["Residents Deny Security Improvements","/residents-deny-security-improvements.html"],
		["Housing For The Disabled","/housing-for-the-disabled.html"],
		["Transforming CHA: Senior Only Buildings","/transforming-cha-senior-only-buildings.html"]],
	"empowerment":[
		["Making CHA Accessible","/making-cha-accessible.html"],
		["REDI: A New Beginning?","/redi-a-new-beginning.html"],
		["The Million Woman March: One Woman's View","/the-million-woman-march-one-womans-view.html"]],
	"fair housing act":[
		["Making CHA Accessible","/making-cha-accessible.html"]],
	"housing requirements":[
		["Making CHA Accessible","/making-cha-accessible.html"]],
	"CHA electricty":[
		["The Shocking Truth about CHA","/the-shocking-truth-about-cha.html"]],
	"non lease compliant":[
		["The Shocking Truth about CHA","/the-shocking-truth-about-cha.html"],
		["Shocking Electric Bills","/shocking-electric-bills.html"]],
	"unsubsidized tenants":[
		["Homeless Not Hopeless","/homeless-not-hopeless.html"]],
	"january february 2003 issue":[
		["Dear Resident","/dear-resident-2.html"],
		["Crystal Clear Views","/crystal-clear-views-9.html"],
		["Housing on State, City Agendas","/housing-on-state-city-agendas.html"],
		["Stop The Violence","/stop-the-violence-8.html"],
		["The New Cook County Hospital","/the-new-cook-county-hospital.html"],
		["Traveling: From Therapy to Art","/traveling-from-therapy-to-art.html"],
		["Representing Residents","/representing-residents.html"],
		["Chicago's Hottest Elections","/chicagos-hottest-elections.html"],
		["Residents Sue CHA","/residents-sue-cha.html"],
		["Running Out of Gas","/running-out-of-gas.html"],
		["Seniors Complain About Renovations","/seniors-complain-about-renovations.html"],
		["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations.html"],
		["An Invasion of Privacy?","/an-invasion-of-privacy.html"],
		["Myths and Urban Legends","/myths-and-urban-legends.html"]],
	"relationships":[
		["Dear Resident","/dear-resident-2.html"],
		["Crystal Clear Views","/crystal-clear-views-9.html"],
		["Representing Residents","/representing-residents.html"],
		["Dear Resident","/dear-resident-4.html"]],
	"slavery":[
		["Dear Resident","/dear-resident-2.html"]],
	"Q&A":[
		["Crystal Clear Views","/crystal-clear-views-9.html"],
		["Your Neighborhood Policemen","/your-neighborhood-policemen.html"]],
	"runaway":[
		["Crystal Clear Views","/crystal-clear-views-9.html"]],
	"Affordable Rents for Chicago":[
		["Housing on State, City Agendas","/housing-on-state-city-agendas.html"]],
	"ARC":[
		["Housing on State, City Agendas","/housing-on-state-city-agendas.html"]],
	"Mt sinai Hospital":[
		["Stop The Violence","/stop-the-violence-8.html"]],
	"renovations":[
		["Stop The Violence","/stop-the-violence-8.html"]],
	"Cook County Hospital":[
		["The New Cook County Hospital","/the-new-cook-county-hospital.html"]],
	"John H Stroger Jr ":[
		["The New Cook County Hospital","/the-new-cook-county-hospital.html"]],
	"new hospital":[
		["The New Cook County Hospital","/the-new-cook-county-hospital.html"]],
	"technology":[
		["The New Cook County Hospital","/the-new-cook-county-hospital.html"]],
	"transition":[
		["The New Cook County Hospital","/the-new-cook-county-hospital.html"],
		["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8.html"],
		["Farewell, Mr. Chairman","/farewell-mr-chairman.html"]],
	"art":[
		["Traveling: From Therapy to Art","/traveling-from-therapy-to-art.html"]],
	"Asia":[
		["Traveling: From Therapy to Art","/traveling-from-therapy-to-art.html"]],
	"filmmaking":[
		["Traveling: From Therapy to Art","/traveling-from-therapy-to-art.html"]],
	"Kathmandu":[
		["Traveling: From Therapy to Art","/traveling-from-therapy-to-art.html"]],
	"religious experience":[
		["Traveling: From Therapy to Art","/traveling-from-therapy-to-art.html"]],
	"travel":[
		["Traveling: From Therapy to Art","/traveling-from-therapy-to-art.html"],
		["Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington.html"]],
	"feedback":[
		["Representing Residents","/representing-residents.html"]],
	"Dorothy Tillman":[
		["Chicago's Hottest Elections","/chicagos-hottest-elections.html"]],
	"Fourth Ward":[
		["Chicago's Hottest Elections","/chicagos-hottest-elections.html"]],
	"mayoral election":[
		["Chicago's Hottest Elections","/chicagos-hottest-elections.html"]],
	"Norman Bolden":[
		["Chicago's Hottest Elections","/chicagos-hottest-elections.html"]],
	"Pat Dowell":[
		["Chicago's Hottest Elections","/chicagos-hottest-elections.html"]],
	"platform":[
		["Chicago's Hottest Elections","/chicagos-hottest-elections.html"]],
	"Rev Paul L Jakes":[
		["Chicago's Hottest Elections","/chicagos-hottest-elections.html"]],
	"Third Ward alderman":[
		["Chicago's Hottest Elections","/chicagos-hottest-elections.html"]],
	"Civil Rights Act":[
		["Residents Sue CHA","/residents-sue-cha.html"]],
	"budget":[
		["Running Out of Gas","/running-out-of-gas.html"]],
	"Low Income Energy Home Assistance Program":[
		["Running Out of Gas","/running-out-of-gas.html"]],
	"community disturbance":[
		["Seniors Complain About Renovations","/seniors-complain-about-renovations.html"]],
	"construction":[
		["Seniors Complain About Renovations","/seniors-complain-about-renovations.html"],
		["Harold Ickes News","/harold-ickes-news-8.html"],
		["Razing the Brooks Extension","/razing-the-brooks-extension.html"],
		["Lathrop Homes News","/lathrop-homes-news-2.html"],
		["Section 8 Update","/section-8-update.html"],
		["Horner Annex Reborn","/horner-annex-reborn.html"],
		["Last Harvest","/last-harvest.html"],
		["Washington Park: The Dying Hope","/washington-park-the-dying-hope.html"],
		["A History of Cabrini-Green","/a-history-of-cabrini-green.html"]],
	"dissatisfaction":[
		["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations.html"],
		["Harold Ickes News","/harold-ickes-news-9.html"],
		["Welfare Reform: Lost In Space","/welfare-reform-lost-in-space.html"],
		["Maintenance Defects at Ogden Courts","/maintenance-defects-at-ogden-courts.html"],
		["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents.html"]],
	"Service Connector Program":[
		["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations.html"],
		["Harold Ickes Service Connectors","/harold-ickes-service-connectors.html"],
		["Ickes' Homes New Managers","/ickes-homes-new-managers.html"],
		["Residents Look to the Hills","/residents-look-to-the-hills.html"]],
	"social service":[
		["Report Criticizes CHA Relocations","/report-criticizes-cha-relocations.html"],
		["Operation ABLE","/operation-able.html"]],
	"Fourth Amendment violation":[
		["An Invasion of Privacy?","/an-invasion-of-privacy.html"]],
	"Holston Realty":[
		["An Invasion of Privacy?","/an-invasion-of-privacy.html"]],
	"invasion of privacy":[
		["An Invasion of Privacy?","/an-invasion-of-privacy.html"]],
	"Raymond Hilliard Homes":[
		["An Invasion of Privacy?","/an-invasion-of-privacy.html"]],
	"myths":[
		["Myths and Urban Legends","/myths-and-urban-legends.html"]],
	"domestic abuse":[
		["Dear Resident","/dear-resident-3.html"]],
	"domestic violence":[
		["Dear Resident","/dear-resident-3.html"]],
	"familial issues":[
		["Dear Resident","/dear-resident-3.html"]],
	"november december 2002 issue":[
		["Dear Resident","/dear-resident-3.html"],
		["Positive Residents of the CHA","/positive-residents-of-the-cha.html"],
		["Stop The Violence","/stop-the-violence-9.html"],
		["Seniors Graduate Police Class","/seniors-graduate-police-class.html"],
		["National Housing Crisis","/national-housing-crisis.html"],
		["HIV/AIDs Crisis","/hivaids-crisis.html"],
		["Harold Ickes Service Connectors","/harold-ickes-service-connectors.html"],
		["Harold Ickes News","/harold-ickes-news-8.html"],
		["Residents Deny Security Improvements","/residents-deny-security-improvements.html"],
		["CHA Puts Resident In Storage","/cha-puts-resident-in-storage.html"],
		["South Suburban Living","/south-suburban-living.html"],
		["Electrically Charged","/electrically-charged.html"],
		["Last Day in 4525","/last-day-in-4525.html"],
		["Housing Crisis in Highland Park","/housing-crisis-in-highland-park.html"]],
	"victimization":[
		["Dear Resident","/dear-resident-3.html"]],
	"law enforcement":[
		["Stop The Violence","/stop-the-violence-9.html"],
		["Seniors Graduate Police Class","/seniors-graduate-police-class.html"],
		["Your Neighborhood Policemen","/your-neighborhood-policemen.html"]],
	"police violence":[
		["Stop The Violence","/stop-the-violence-9.html"]],
	"CAPS":[
		["Seniors Graduate Police Class","/seniors-graduate-police-class.html"],
		["Stop The Violence","/stop-the-violence-18.html"]],
	"graduation ceremony":[
		["Seniors Graduate Police Class","/seniors-graduate-police-class.html"]],
	"safety":[
		["Seniors Graduate Police Class","/seniors-graduate-police-class.html"],
		["Harold Ickes News","/harold-ickes-news-9.html"],
		["Drug War Diagnosis","/drug-war-diagnosis.html"]],
	"Sinai Health System":[
		["Seniors Graduate Police Class","/seniors-graduate-police-class.html"],
		["Sinai Health Services","/sinai-health-services.html"]],
	"Center for Housing Policy":[
		["National Housing Crisis","/national-housing-crisis.html"]],
	"housing shortage":[
		["National Housing Crisis","/national-housing-crisis.html"]],
	"National Alliance of HUD Tenants":[
		["National Housing Crisis","/national-housing-crisis.html"]],
	"national housing":[
		["National Housing Crisis","/national-housing-crisis.html"]],
	"public housing shortage":[
		["National Housing Crisis","/national-housing-crisis.html"]],
	"voucher":[
		["National Housing Crisis","/national-housing-crisis.html"],
		["A Section 8 Recipient's Painful Reality","/a-section-8-recipients-painful-reality.html"],
		["New Vincennes Plaza","/new-vincennes-plaza.html"]],
	"African Americans":[
		["HIV/AIDs Crisis","/hivaids-crisis.html"]],
	"awareness":[
		["HIV/AIDs Crisis","/hivaids-crisis.html"]],
	"BET":[
		["HIV/AIDs Crisis","/hivaids-crisis.html"]],
	"medical issues":[
		["HIV/AIDs Crisis","/hivaids-crisis.html"]],
	"sexual health":[
		["HIV/AIDs Crisis","/hivaids-crisis.html"]],
	"ABLA Transitional Job Center":[
		["Operation ABLE","/operation-able.html"]],
	"non profit organization":[
		["Operation ABLE","/operation-able.html"]],
	"october november 2001 issue":[
		["Operation ABLE","/operation-able.html"],
		["Choosing Between Food and Medicine","/choosing-between-food-and-medicine.html"],
		["Stop The Violence","/stop-the-violence-11.html"],
		["Remembering Leroy Watkins","/remembering-leroy-watkins.html"],
		["A Section 8 Recipient's Painful Reality","/a-section-8-recipients-painful-reality.html"],
		["Residents Look to the Hills","/residents-look-to-the-hills.html"],
		["A Savory Survey","/a-savory-survey.html"],
		["RMCs Aim to Please?","/rmcs-aim-to-please.html"],
		["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8.html"],
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"]],
	"One Stop Center":[
		["Operation ABLE","/operation-able.html"]],
	"Operation ABLE":[
		["Operation ABLE","/operation-able.html"]],
	"Senior Community Service Employment program":[
		["Operation ABLE","/operation-able.html"]],
	"celebration":[
		["Harold Ickes News","/harold-ickes-news-8.html"],
		["Ida B. Wells Reunion","/ida-b-wells-reunion.html"],
		["Wells on the Rise","/wells-on-the-rise.html"]],
	"National Teaching Academy of Chicago":[
		["Harold Ickes News","/harold-ickes-news-8.html"],
		["Harold Ickes New School Update","/harold-ickes-new-school-update.html"]],
	"new school":[
		["Harold Ickes News","/harold-ickes-news-8.html"],
		["The New Teachers Academy","/the-new-teachers-academy.html"]],
	"water problem":[
		["Harold Ickes News","/harold-ickes-news-8.html"]],
	"Legal Assistance Foundation":[
		["Choosing Between Food and Medicine","/choosing-between-food-and-medicine.html"]],
	"medication":[
		["Choosing Between Food and Medicine","/choosing-between-food-and-medicine.html"]],
	"public housing security":[
		["Residents Deny Security Improvements","/residents-deny-security-improvements.html"],
		["Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place.html"]],
	"September 11":[
		["Stop The Violence","/stop-the-violence-11.html"],
		["Dear Resident","/dear-resident-5.html"],
		["The Terror Within","/the-terror-within.html"]],
	"terrorism":[
		["Stop The Violence","/stop-the-violence-11.html"],
		["The Terror Within","/the-terror-within.html"]],
	"suburban":[
		["South Suburban Living","/south-suburban-living.html"]],
	"CHA electricity":[
		["Electrically Charged","/electrically-charged.html"],
		["Shocking Electric Bills Update","/shocking-electric-bills-update.html"],
		["Shocking Electric Bills","/shocking-electric-bills.html"],
		["CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills.html"],
		["High Cost of Gas","/high-cost-of-gas.html"]],
	"Highland Park":[
		["Housing Crisis in Highland Park","/housing-crisis-in-highland-park.html"]],
	"housing crisis":[
		["Housing Crisis in Highland Park","/housing-crisis-in-highland-park.html"],
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"]],
	"low income families":[
		["Housing Crisis in Highland Park","/housing-crisis-in-highland-park.html"],
		["Welfare Reform: Lost In Space","/welfare-reform-lost-in-space.html"]],
	"june july 2002 issue":[
		["It's Not OK to Corral at Cabrini","/its-not-ok-to-corral-at-cabrini.html"],
		["Youth Violence Prevention","/youth-violence-prevention.html"],
		["Harold Ickes News","/harold-ickes-news-9.html"],
		["The High Cost of Medicine","/the-high-cost-of-medicine.html"],
		["Relocation Rights Contract","/relocation-rights-contract.html"],
		["Welfare Reform: Lost In Space","/welfare-reform-lost-in-space.html"],
		["Harold Ickes New School Update","/harold-ickes-new-school-update.html"],
		["Maintenance Defects at Ogden Courts","/maintenance-defects-at-ogden-courts.html"],
		["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents.html"],
		["Shocking Electric Bills Update","/shocking-electric-bills-update.html"]],
	"YouthPeace":[
		["Youth Violence Prevention","/youth-violence-prevention.html"]],
	"leaseholder":[
		["Harold Ickes News","/harold-ickes-news-9.html"]],
	"health care plan":[
		["The High Cost of Medicine","/the-high-cost-of-medicine.html"]],
	"inflation":[
		["The High Cost of Medicine","/the-high-cost-of-medicine.html"]],
	"1996 Welfare Reform Act":[
		["Welfare Reform: Lost In Space","/welfare-reform-lost-in-space.html"]],
	"failure":[
		["Welfare Reform: Lost In Space","/welfare-reform-lost-in-space.html"]],
	"Joyce Foundation":[
		["Welfare Reform: Lost In Space","/welfare-reform-lost-in-space.html"]],
	"national welfare":[
		["Welfare Reform: Lost In Space","/welfare-reform-lost-in-space.html"]],
	"curriculum":[
		["Harold Ickes New School Update","/harold-ickes-new-school-update.html"]],
	"public housing maintenance":[
		["Maintenance Defects at Ogden Courts","/maintenance-defects-at-ogden-courts.html"],
		["Drug War Diagnosis","/drug-war-diagnosis.html"]],
	"tenant meeting":[
		["Maintenance Defects at Ogden Courts","/maintenance-defects-at-ogden-courts.html"]],
	"Coalition to Protect Public Housing":[
		["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents.html"]],
	"Juneteenth":[
		["Who Speaks for Public Housing Residents?","/who-speaks-for-public-housing-residents.html"],
		["Stop the Violence","/stop-the-violence-12.html"]],
	"lease non compliance":[
		["Shocking Electric Bills Update","/shocking-electric-bills-update.html"]],
	"communication":[
		["Dear Resident","/dear-resident-4.html"]],
	"community language":[
		["Dear Resident","/dear-resident-4.html"]],
	"interaction":[
		["Dear Resident","/dear-resident-4.html"]],
	"letter":[
		["Dear Resident","/dear-resident-4.html"],
		["Dear Resident","/dear-resident-9.html"],
		["Dear Resident","/dear-resident-11.html"]],
	"march april 2002 issue":[
		["Dear Resident","/dear-resident-4.html"],
		["Lathrop News","/lathrop-news.html"],
		["ABLA News","/abla-news.html"],
		["Stop The Violence","/stop-the-violence-10.html"],
		["The Renowned Vernon Jordan","/the-renowned-vernon-jordan.html"],
		["Harold Ickes News","/harold-ickes-news-10.html"],
		["Child of the Pack Saddle IX","/child-of-the-pack-saddle-ix.html"],
		["African-American Male Suicides","/african-american-male-suicides.html"],
		["Lathrop Homes Private Management","/lathrop-homes-private-management.html"],
		["Productive Men of the CHA","/productive-men-of-the-cha.html"],
		["CAC Prepares for Battle","/cac-prepares-for-battle.html"],
		["Squatters Worry About Homelessness","/squatters-worry-about-homelessness.html"],
		["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history.html"],
		["Ickes' Homes New Managers","/ickes-homes-new-managers.html"],
		["Shocking Electric Bills","/shocking-electric-bills.html"],
		["A 'One Strike' Battle Planned","/a-one-strike-battle-planned.html"],
		["Drug War Diagnosis","/drug-war-diagnosis.html"]],
	"power of words":[
		["Dear Resident","/dear-resident-4.html"]],
	"speech":[
		["Dear Resident","/dear-resident-4.html"],
		["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center.html"]],
	"word usage":[
		["Dear Resident","/dear-resident-4.html"]],
	"anti violence":[
		["Lathrop News","/lathrop-news.html"],
		["Rappin' Tate The Great","/rappin-tate-the-great.html"]],
	"Clean Day":[
		["Lathrop News","/lathrop-news.html"]],
	"community update":[
		["Lathrop News","/lathrop-news.html"]],
	"march":[
		["Lathrop News","/lathrop-news.html"],
		["Cabrini-Green Update","/cabrini-green-update.html"]],
	"CDHS":[
		["ABLA News","/abla-news.html"]],
	"Revitalization Plan":[
		["ABLA News","/abla-news.html"]],
	"reinvestigation":[
		["Stop The Violence","/stop-the-violence-10.html"]],
	"trials":[
		["Stop The Violence","/stop-the-violence-10.html"]],
	"wrongful conviction":[
		["Stop The Violence","/stop-the-violence-10.html"]],
	"accomplishment":[
		["The Renowned Vernon Jordan","/the-renowned-vernon-jordan.html"]],
	"National Urban League":[
		["The Renowned Vernon Jordan","/the-renowned-vernon-jordan.html"]],
	"Vernon Jordan":[
		["The Renowned Vernon Jordan","/the-renowned-vernon-jordan.html"]],
	"parking":[
		["Harold Ickes News","/harold-ickes-news-10.html"]],
	"State Street":[
		["Harold Ickes News","/harold-ickes-news-10.html"]],
	"vacated land":[
		["Harold Ickes News","/harold-ickes-news-10.html"]],
	"African American communities":[
		["African-American Male Suicides","/african-american-male-suicides.html"]],
	"community support":[
		["African-American Male Suicides","/african-american-male-suicides.html"]],
	"development":[
		["African-American Male Suicides","/african-american-male-suicides.html"],
		["A History of Cabrini-Green","/a-history-of-cabrini-green.html"]],
	"suicide":[
		["African-American Male Suicides","/african-american-male-suicides.html"]],
	"private management":[
		["Lathrop Homes Private Management","/lathrop-homes-private-management.html"],
		["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management.html"],
		["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike.html"]],
	"resident feedback":[
		["Lathrop Homes Private Management","/lathrop-homes-private-management.html"]],
	"recognition":[
		["Productive Men of the CHA","/productive-men-of-the-cha.html"]],
	"replacement housing":[
		["CAC Prepares for Battle","/cac-prepares-for-battle.html"]],
	"Department of Human Services":[
		["Squatters Worry About Homelessness","/squatters-worry-about-homelessness.html"],
		["8,000 To Get Jobs Help","/8000-to-get-jobs-help.html"]],
	"DHS":[
		["Squatters Worry About Homelessness","/squatters-worry-about-homelessness.html"]],
	"squatting":[
		["Squatters Worry About Homelessness","/squatters-worry-about-homelessness.html"],
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"]],
	"vouchers":[
		["Squatters Worry About Homelessness","/squatters-worry-about-homelessness.html"],
		["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8.html"],
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"],
		["Squatters in CHA","/squatters-in-cha.html"],
		["The State Of Section 8","/the-state-of-section-8.html"]],
	"accountability":[
		["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history.html"]],
	"assault":[
		["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history.html"]],
	"Girl X":[
		["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history.html"],
		["Stop The Violence","/stop-the-violence-14.html"],
		["Schools March for Victims","/schools-march-for-victims.html"],
		["Cabrini-Green Update","/cabrini-green-update.html"]],
	"liability":[
		["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history.html"]],
	"public housing resodents":[
		["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history.html"]],
	"security services":[
		["Girl X Reveals Tragic History","/girl-x-reveals-tragic-history.html"]],
	"financial security":[
		["Ickes' Homes New Managers","/ickes-homes-new-managers.html"]],
	"integration activity":[
		["Ickes' Homes New Managers","/ickes-homes-new-managers.html"]],
	"public services":[
		["Ickes' Homes New Managers","/ickes-homes-new-managers.html"],
		["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management.html"]],
	"The Woodlawn Organization":[
		["Ickes' Homes New Managers","/ickes-homes-new-managers.html"]],
	"TWO":[
		["Ickes' Homes New Managers","/ickes-homes-new-managers.html"]],
	"Anti Drug Abuse Act":[
		["A 'One Strike' Battle Planned","/a-one-strike-battle-planned.html"]],
	"cases":[
		["A 'One Strike' Battle Planned","/a-one-strike-battle-planned.html"]],
	"civil forfeiture statute":[
		["A 'One Strike' Battle Planned","/a-one-strike-battle-planned.html"]],
	"innocent tenant defense":[
		["A 'One Strike' Battle Planned","/a-one-strike-battle-planned.html"]],
	"public housing policy":[
		["A 'One Strike' Battle Planned","/a-one-strike-battle-planned.html"]],
	"brutalization":[
		["Drug War Diagnosis","/drug-war-diagnosis.html"]],
	"Chicago drug use":[
		["Drug War Diagnosis","/drug-war-diagnosis.html"]],
	"Community Alternative Policing Strategy":[
		["Drug War Diagnosis","/drug-war-diagnosis.html"]],
	"drug economy":[
		["Drug War Diagnosis","/drug-war-diagnosis.html"]],
	"public health":[
		["Drug War Diagnosis","/drug-war-diagnosis.html"]],
	"solution":[
		["Drug War Diagnosis","/drug-war-diagnosis.html"]],
	"treatment":[
		["Drug War Diagnosis","/drug-war-diagnosis.html"]],
	"Leroy Watkins Day":[
		["Remembering Leroy Watkins","/remembering-leroy-watkins.html"]],
	"rememberance":[
		["Remembering Leroy Watkins","/remembering-leroy-watkins.html"],
		["The Life of Artensa Randolph","/the-life-of-artensa-randolph.html"]],
	"reevaluation":[
		["A Section 8 Recipient's Painful Reality","/a-section-8-recipients-painful-reality.html"]],
	"rent increase":[
		["A Section 8 Recipient's Painful Reality","/a-section-8-recipients-painful-reality.html"]],
	"housing permanence":[
		["Residents Look to the Hills","/residents-look-to-the-hills.html"]],
	"infestation":[
		["Residents Look to the Hills","/residents-look-to-the-hills.html"]],
	"instability":[
		["Residents Look to the Hills","/residents-look-to-the-hills.html"]],
	"sewer department":[
		["Residents Look to the Hills","/residents-look-to-the-hills.html"]],
	"Woodlawn Organization":[
		["Residents Look to the Hills","/residents-look-to-the-hills.html"]],
	"informative":[
		["A Savory Survey","/a-savory-survey.html"]],
	"study":[
		["A Savory Survey","/a-savory-survey.html"]],
	"Urban Institute":[
		["A Savory Survey","/a-savory-survey.html"]],
	"improvement":[
		["RMCs Aim to Please?","/rmcs-aim-to-please.html"],
		["New Vincennes Plaza","/new-vincennes-plaza.html"]],
	"resident management":[
		["RMCs Aim to Please?","/rmcs-aim-to-please.html"]],
	"Resident Management Corporations":[
		["RMCs Aim to Please?","/rmcs-aim-to-please.html"]],
	"RMC":[
		["RMCs Aim to Please?","/rmcs-aim-to-please.html"]],
	"federal assissted housing":[
		["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8.html"]],
	"housing options":[
		["A Smooth Transition For Section 8?","/a-smooth-transition-for-section-8.html"]],
	"condominiums":[
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"]],
	"conversions":[
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"]],
	"experiment":[
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"]],
	"homeless shelters":[
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"]],
	"surge":[
		["Homelessness: A Constant American Tragedy","/homelessness-a-constant-american-tragedy-2.html"]],
	"American unity":[
		["Dear Resident","/dear-resident-5.html"]],
	"august september 2001 issue":[
		["Dear Resident","/dear-resident-5.html"],
		["The Terror Within","/the-terror-within.html"],
		["Child of the Pack Saddle Part VI","/child-of-the-pack-saddle-part-vi.html"],
		["Stop the Violence","/stop-the-violence-12.html"],
		["New Vincennes Plaza","/new-vincennes-plaza.html"],
		["Housing For The Disabled","/housing-for-the-disabled.html"],
		["Structural Justice","/structural-justice.html"],
		["Seniors Quality of Life On The Rise","/seniors-quality-of-life-on-the-rise.html"],
		["CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills.html"],
		["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing.html"],
		["Squatters in CHA","/squatters-in-cha.html"],
		["ABLA News","/abla-news-2.html"],
		["Don't Rock The Boat","/dont-rock-the-boat.html"],
		["CHA Family Service Connectors","/cha-family-service-connectors.html"],
		["Harold Ickes Homes News","/harold-ickes-homes-news.html"],
		["SPECIAL FEATURE: City Gets CHA Funds Update","/special-feature-city-gets-cha-funds-update.html"]],
	"disunity":[
		["Dear Resident","/dear-resident-5.html"]],
	"low income representation":[
		["Dear Resident","/dear-resident-5.html"]],
	"retribution":[
		["Dear Resident","/dear-resident-5.html"]],
	"vulnerability":[
		["Dear Resident","/dear-resident-5.html"]],
	"aftermath":[
		["The Terror Within","/the-terror-within.html"]],
	"families":[
		["The Terror Within","/the-terror-within.html"]],
	"safe communities":[
		["The Terror Within","/the-terror-within.html"]],
	"sympathy":[
		["The Terror Within","/the-terror-within.html"]],
	"U S Military":[
		["The Terror Within","/the-terror-within.html"]],
	"War on Terrorism":[
		["The Terror Within","/the-terror-within.html"]],
	"freedom march":[
		["Stop the Violence","/stop-the-violence-12.html"]],
	"testimony":[
		["Stop the Violence","/stop-the-violence-12.html"]],
	"trial":[
		["Stop the Violence","/stop-the-violence-12.html"],
		["Stop The Violence","/stop-the-violence-13.html"]],
	"47th Street":[
		["New Vincennes Plaza","/new-vincennes-plaza.html"],
		["Transforming CHA: Chewing Up Tobacco Road","/transforming-cha-chewing-up-tobacco-road.html"]],
	"Creative Desgisn":[
		["New Vincennes Plaza","/new-vincennes-plaza.html"]],
	"landmark":[
		["New Vincennes Plaza","/new-vincennes-plaza.html"]],
	"Vincennes Plaza":[
		["New Vincennes Plaza","/new-vincennes-plaza.html"]],
	"Disability Rights Actions Coalition for Housing":[
		["Housing For The Disabled","/housing-for-the-disabled.html"]],
	"DRACH":[
		["Housing For The Disabled","/housing-for-the-disabled.html"]],
	"fair housing":[
		["Housing For The Disabled","/housing-for-the-disabled.html"]],
	"Fair Housing Amendments Act":[
		["Housing For The Disabled","/housing-for-the-disabled.html"]],
	"housing programs":[
		["Housing For The Disabled","/housing-for-the-disabled.html"]],
	"local housing boards":[
		["Housing For The Disabled","/housing-for-the-disabled.html"]],
	"affordable public housing":[
		["Structural Justice","/structural-justice.html"]],
	"Chicago Rehab Network":[
		["Structural Justice","/structural-justice.html"]],
	"Chicago workshops":[
		["Structural Justice","/structural-justice.html"]],
	"conference":[
		["Structural Justice","/structural-justice.html"],
		["The State Of Section 8","/the-state-of-section-8.html"],
		["Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington.html"]],
	"property":[
		["Structural Justice","/structural-justice.html"]],
	"real estate":[
		["Structural Justice","/structural-justice.html"]],
	"Valuing Affordability":[
		["Structural Justice","/structural-justice.html"]],
	"Chicago senior citizens":[
		["Seniors Quality of Life On The Rise","/seniors-quality-of-life-on-the-rise.html"]],
	"Affordable Power to the People":[
		["CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills.html"]],
	"energy":[
		["CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills.html"],
		["High Cost of Gas","/high-cost-of-gas.html"]],
	"energy bills":[
		["CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills.html"]],
	"protest marches":[
		["CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills.html"]],
	"summer cooling program":[
		["CHA Seniors Protest Electric Bills","/cha-seniors-protest-electric-bills.html"]],
	"Housing Choice Survey":[
		["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing.html"]],
	"scattered site units":[
		["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing.html"]],
	"temporary relocation":[
		["In Search Of Scattered Site Housing","/in-search-of-scattered-site-housing.html"]],
	"CHA squatters":[
		["Squatters in CHA","/squatters-in-cha.html"]],
	"lease compliance":[
		["Squatters in CHA","/squatters-in-cha.html"]],
	"festival":[
		["ABLA News","/abla-news-2.html"]],
	"resident meetings":[
		["ABLA News","/abla-news-2.html"]],
	"Bill Clinton":[
		["Don't Rock The Boat","/dont-rock-the-boat.html"],
		["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike.html"],
		["L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike.html"],
		["The Man Who Scared the Hell Out of Me","/the-man-who-scared-the-hell-out-of-me.html"]],
	"Lakefront Community Organization":[
		["Don't Rock The Boat","/dont-rock-the-boat.html"]],
	"LCO":[
		["Don't Rock The Boat","/dont-rock-the-boat.html"]],
	"Chicago public service":[
		["CHA Family Service Connectors","/cha-family-service-connectors.html"],
		["Transforming CHA: Making Connections","/transforming-cha-making-connections.html"]],
	"Service Connector":[
		["CHA Family Service Connectors","/cha-family-service-connectors.html"],
		["Transforming CHA: Making Connections","/transforming-cha-making-connections.html"]],
	"services":[
		["CHA Family Service Connectors","/cha-family-service-connectors.html"]],
	"fire devastation":[
		["Harold Ickes Homes News","/harold-ickes-homes-news.html"],
		["Transforming CHA: Flannery Homes Residents Keep Waiting","/transforming-cha-flannery-homes-residents-keep-waiting.html"]],
	"contract extension":[
		["SPECIAL FEATURE: City Gets CHA Funds Update","/special-feature-city-gets-cha-funds-update.html"]],
	"federal assistance program":[
		["SPECIAL FEATURE: City Gets CHA Funds Update","/special-feature-city-gets-cha-funds-update.html"]],
	"grant":[
		["SPECIAL FEATURE: City Gets CHA Funds Update","/special-feature-city-gets-cha-funds-update.html"],
		["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting.html"]],
	"CHA Chicago Housing Authority":[
		["Dear Resident","/dear-resident-6.html"]],
	"june july 2001 issue":[
		["Dear Resident","/dear-resident-6.html"],
		["Sinai Health Services","/sinai-health-services.html"],
		["Stop The Violence","/stop-the-violence-13.html"],
		["Saluting Men of the CHA","/saluting-men-of-the-cha.html"],
		["Child of The Pack Saddle: Part V","/child-of-the-pack-saddle-part-v.html"],
		["The State Of Section 8","/the-state-of-section-8.html"],
		["A Trip To The Future","/a-trip-to-the-future.html"],
		["Razing the Brooks Extension","/razing-the-brooks-extension.html"],
		["Ickes: Back To Square One","/ickes-back-to-square-one.html"],
		["Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place.html"],
		["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds.html"]],
	"public housing redevelopment":[
		["Dear Resident","/dear-resident-6.html"],
		["Transforming CHA: Washington Park Wants Answers","/transforming-cha-washington-park-wants-answers.html"]],
	"urban development":[
		["Dear Resident","/dear-resident-6.html"]],
	"health services":[
		["Sinai Health Services","/sinai-health-services.html"]],
	"medical resources":[
		["Sinai Health Services","/sinai-health-services.html"]],
	"Sinair Senior services":[
		["Sinai Health Services","/sinai-health-services.html"]],
	"advocate":[
		["Saluting Men of the CHA","/saluting-men-of-the-cha.html"]],
	"honor":[
		["Saluting Men of the CHA","/saluting-men-of-the-cha.html"]],
	"leaders":[
		["Saluting Men of the CHA","/saluting-men-of-the-cha.html"]],
	"profile":[
		["Saluting Men of the CHA","/saluting-men-of-the-cha.html"]],
	"conflict resolution":[
		["The State Of Section 8","/the-state-of-section-8.html"]],
	"interactive":[
		["The State Of Section 8","/the-state-of-section-8.html"]],
	"subsidized housing":[
		["The State Of Section 8","/the-state-of-section-8.html"]],
	"Tenants United For Housing":[
		["The State Of Section 8","/the-state-of-section-8.html"],
		["Del Prado Residents Face Uncertainty","/del-prado-residents-face-uncertainty.html"]],
	"workshops":[
		["The State Of Section 8","/the-state-of-section-8.html"]],
	"Brinshore Michaels":[
		["A Trip To The Future","/a-trip-to-the-future.html"]],
	"developer":[
		["A Trip To The Future","/a-trip-to-the-future.html"]],
	"John Hay Homes":[
		["A Trip To The Future","/a-trip-to-the-future.html"]],
	"lease compliant":[
		["A Trip To The Future","/a-trip-to-the-future.html"]],
	"Madison Park Place Homes":[
		["A Trip To The Future","/a-trip-to-the-future.html"]],
	"mistreatment":[
		["A Trip To The Future","/a-trip-to-the-future.html"],
		["Stop the Violence II","/stop-the-violence-ii.html"]],
	"new development":[
		["A Trip To The Future","/a-trip-to-the-future.html"]],
	"resident involvement":[
		["A Trip To The Future","/a-trip-to-the-future.html"]],
	"Springfield":[
		["A Trip To The Future","/a-trip-to-the-future.html"]],
	"transparency":[
		["A Trip To The Future","/a-trip-to-the-future.html"]],
	"high rise":[
		["Razing the Brooks Extension","/razing-the-brooks-extension.html"]],
	"Robert Brooks Extensions":[
		["Razing the Brooks Extension","/razing-the-brooks-extension.html"]],
	"vandalism":[
		["Ickes: Back To Square One","/ickes-back-to-square-one.html"]],
	"inspection":[
		["Between A Rock and a Hard Place","/between-a-rock-and-a-hard-place.html"],
		["Residents Fight Vacate Orders","/residents-fight-vacate-orders.html"],
		["Focus On Section 8","/focus-on-section-8.html"]],
	"Chicago residents":[
		["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds.html"]],
	"programs":[
		["SPECIAL FEATURE: City Gets CHA Funds","/special-feature-city-gets-cha-funds.html"]],
	"april 2001 issue":[
		["Second Chance Legislation","/second-chance-legislation.html"],
		["Stop The Violence","/stop-the-violence-14.html"],
		["Youths Rally For Summer Jobs","/youths-rally-for-summer-jobs.html"],
		["Child of the Pack Saddle: Part IV","/child-of-the-pack-saddle-part-iv.html"],
		["High Cost of Gas","/high-cost-of-gas.html"],
		["Project Based Section-8s Threatened","/project-based-section-8s-threatened.html"],
		["Transforming CHA: Ickes New Management","/transforming-cha-ickes-new-management.html"],
		["The New Teachers Academy","/the-new-teachers-academy.html"],
		["Transforming CHA: Chewing Up Tobacco Road","/transforming-cha-chewing-up-tobacco-road.html"],
		["Transforming CHA: Senior Only Buildings","/transforming-cha-senior-only-buildings.html"],
		["Transforming CHA: Making Connections","/transforming-cha-making-connections.html"],
		["Transforming CHA: Leaders Demand Changes to CHA Plan","/transforming-cha-leaders-demand-changes-to-cha-plan.html"]],
	"criminal history":[
		["Second Chance Legislation","/second-chance-legislation.html"]],
	"criminal record":[
		["Second Chance Legislation","/second-chance-legislation.html"]],
	"ex convicts":[
		["Second Chance Legislation","/second-chance-legislation.html"]],
	"expungement":[
		["Second Chance Legislation","/second-chance-legislation.html"]],
	"Illinois legislation":[
		["Second Chance Legislation","/second-chance-legislation.html"]],
	"second chance":[
		["Second Chance Legislation","/second-chance-legislation.html"]],
	"David Protess":[
		["Stop The Violence","/stop-the-violence-14.html"]],
	"Northwestern University":[
		["Stop The Violence","/stop-the-violence-14.html"]],
	"demonstrations":[
		["Youths Rally For Summer Jobs","/youths-rally-for-summer-jobs.html"]],
	"Cermak Teachers Training Academy":[
		["The New Teachers Academy","/the-new-teachers-academy.html"]],
	"Rosenwald":[
		["Transforming CHA: Chewing Up Tobacco Road","/transforming-cha-chewing-up-tobacco-road.html"]],
	"small business":[
		["Transforming CHA: Chewing Up Tobacco Road","/transforming-cha-chewing-up-tobacco-road.html"]],
	"senior residents":[
		["Transforming CHA: Senior Only Buildings","/transforming-cha-senior-only-buildings.html"]],
	"AmeriCorps":[
		["Transforming CHA: Making Connections","/transforming-cha-making-connections.html"]],
	"City Department of Human Services":[
		["Transforming CHA: Making Connections","/transforming-cha-making-connections.html"]],
	"february 2001 issue":[
		["Dear Resident","/dear-resident-7.html"],
		["Black History Section: A Celebrated Life","/black-history-section-a-celebrated-life.html"],
		["Child of the Pack Saddle Part III","/child-of-the-pack-saddle-part-iii.html"],
		["Rappin' Tate The Great","/rappin-tate-the-great.html"],
		["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues.html"],
		["Stop The Violence","/stop-the-violence-15.html"],
		["Transforming CHA: Flannery Homes Residents Keep Waiting","/transforming-cha-flannery-homes-residents-keep-waiting.html"],
		["Del Prado Residents Face Uncertainty","/del-prado-residents-face-uncertainty.html"],
		["Transforming CHA: Federal Housing Voucher Woes","/transforming-cha-federal-housing-voucher-woes.html"],
		["Transforming CHA: How To Save On Rent","/transforming-cha-how-to-save-on-rent.html"],
		["Transforming CHA: One Strike Woes","/transforming-cha-one-strike-woes.html"],
		["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike.html"],
		["Transforming CHA: New Lights on Dark Passage","/transforming-cha-new-lights-on-dark-passage.html"],
		["Transforming CHA: Washington Park Wants Answers","/transforming-cha-washington-park-wants-answers.html"],
		["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting.html"],
		["Cold War Echoes","/cold-war-echoes.html"]],
	"millenium":[
		["Dear Resident","/dear-resident-7.html"]],
	"social progress":[
		["Dear Resident","/dear-resident-7.html"]],
	"Y2K":[
		["Dear Resident","/dear-resident-7.html"]],
	"Gertrude Fredd":[
		["Black History Section: A Celebrated Life","/black-history-section-a-celebrated-life.html"]],
	"Chicago music":[
		["Rappin' Tate The Great","/rappin-tate-the-great.html"]],
	"rap":[
		["Rappin' Tate The Great","/rappin-tate-the-great.html"]],
	"Rappn Tate da Great":[
		["Rappin' Tate The Great","/rappin-tate-the-great.html"]],
	"Tate":[
		["Rappin' Tate The Great","/rappin-tate-the-great.html"]],
	"Atgeld Gardens":[
		["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues.html"]],
	"health hazards":[
		["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues.html"]],
	"industrial waste":[
		["Altgeld Gardens' Environmental Issues","/altgeld-gardens-environmental-issues.html"]],
	"corruption":[
		["Stop The Violence","/stop-the-violence-15.html"],
		["Inspector General Nabs Employees","/inspector-general-nabs-employees.html"]],
	"drug offenses":[
		["Stop The Violence","/stop-the-violence-15.html"]],
	"fire":[
		["Transforming CHA: Flannery Homes Residents Keep Waiting","/transforming-cha-flannery-homes-residents-keep-waiting.html"]],
	"Flannery Homes":[
		["Transforming CHA: Flannery Homes Residents Keep Waiting","/transforming-cha-flannery-homes-residents-keep-waiting.html"],
		["Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update.html"],
		["Flannery Homes Update","/flannery-homes-update.html"],
		["Flannery Homes News","/flannery-homes-news.html"],
		["Flannery Homes Update","/flannery-homes-update-2.html"],
		["Last Harvest","/last-harvest.html"]],
	"Del Prado":[
		["Del Prado Residents Face Uncertainty","/del-prado-residents-face-uncertainty.html"]],
	"housing subsidies":[
		["Del Prado Residents Face Uncertainty","/del-prado-residents-face-uncertainty.html"]],
	"Hyde Park":[
		["Del Prado Residents Face Uncertainty","/del-prado-residents-face-uncertainty.html"]],
	"federal housing vouchers":[
		["Transforming CHA: Federal Housing Voucher Woes","/transforming-cha-federal-housing-voucher-woes.html"]],
	"Admissions and Occupancy policy":[
		["Transforming CHA: How To Save On Rent","/transforming-cha-how-to-save-on-rent.html"]],
	"Income Disregard":[
		["Transforming CHA: How To Save On Rent","/transforming-cha-how-to-save-on-rent.html"]],
	"9th Circuit Court":[
		["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike.html"]],
	"drug possession":[
		["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike.html"]],
	"Housing Opportunities Extension Act":[
		["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike.html"],
		["L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike.html"]],
	"lease":[
		["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike.html"],
		["Focus On Section 8","/focus-on-section-8.html"]],
	"Oakland Housing Authority":[
		["Transforming CHA: Court Slam Dunks One Strike","/transforming-cha-court-slam-dunks-one-strike.html"]],
	"NOFA":[
		["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting.html"]],
	"Notices for Funding Availability":[
		["Transforming CHA: Bush Team Keeps CHA Waiting","/transforming-cha-bush-team-keeps-cha-waiting.html"]],
	"grants":[
		["Cold War Echoes","/cold-war-echoes.html"]],
	"U S Department of Housing and Urban Development":[
		["Cold War Echoes","/cold-war-echoes.html"],
		["The Man Who Scared the Hell Out of Me","/the-man-who-scared-the-hell-out-of-me.html"]],
	"August 1998 Issue":[
		["ABLA Homes Update","/abla-homes-update.html"],
		["Ida B. Wells Reunion","/ida-b-wells-reunion.html"],
		["Hi Ho Dobbin Away","/hi-ho-dobbin-away.html"],
		["HUD Head: CHA Off Troubled List","/hud-head-cha-off-troubled-list.html"],
		["All Things Old and New at Harold Ickes Homes","/all-things-old-and-new.html"],
		["Dear Resident","/dear-resident-12.html"],
		["Lathrop Homes News","/lathrop-homes-news-2.html"],
		["Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update.html"],
		["Cabrini Cliffhanger","/cabrini-cliffhanger.html"],
		["RJ Visits Miami/Dade Housing Authority","/rj-visits-miamidade-housing-authority.html"],
		["New Facility for Scattered Sites","/new-facility-for-scattered-sites.html"],
		["Stop The Violence","/stop-the-violence-18.html"],
		["Access Report","/access-report-3.html"],
		["Altgeld Gardens Report","/altgeld-gardens-report.html"],
		["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man.html"]],
	"current events":[
		["ABLA Homes Update","/abla-homes-update.html"],
		["Lathrop Homes News","/lathrop-homes-news-2.html"],
		["Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update.html"],
		["Altgeld Gardens Report","/altgeld-gardens-report.html"]],
	"Joseph Medill":[
		["ABLA Homes Update","/abla-homes-update.html"]],
	"Joseph Medill Intermediate and Upper Grade Center":[
		["ABLA Homes Update","/abla-homes-update.html"]],
	"local news":[
		["ABLA Homes Update","/abla-homes-update.html"]],
	"CHA Alumni Association":[
		["Ida B. Wells Reunion","/ida-b-wells-reunion.html"]],
	"reunion":[
		["Ida B. Wells Reunion","/ida-b-wells-reunion.html"]],
	"anecdote":[
		["Hi Ho Dobbin Away","/hi-ho-dobbin-away.html"]],
	"Levy Center":[
		["Hi Ho Dobbin Away","/hi-ho-dobbin-away.html"]],
	"control":[
		["HUD Head: CHA Off Troubled List","/hud-head-cha-off-troubled-list.html"]],
	"Public Housing Management Assessment Program":[
		["HUD Head: CHA Off Troubled List","/hud-head-cha-off-troubled-list.html"]],
	"rating":[
		["HUD Head: CHA Off Troubled List","/hud-head-cha-off-troubled-list.html"]],
	"Troubled Housing Authorities":[
		["HUD Head: CHA Off Troubled List","/hud-head-cha-off-troubled-list.html"]],
	"change":[
		["All Things Old and New at Harold Ickes Homes","/all-things-old-and-new.html"]],
	"revitalization":[
		["All Things Old and New at Harold Ickes Homes","/all-things-old-and-new.html"]],
	"athletics":[
		["Dear Resident","/dear-resident-12.html"]],
	"Options for Knowledge Program":[
		["Dear Resident","/dear-resident-12.html"]],
	"priorities":[
		["Dear Resident","/dear-resident-12.html"]],
	"community news":[
		["Lathrop Homes News","/lathrop-homes-news-2.html"],
		["Altgeld Gardens News","/altgeld-gardens-news-2.html"]],
	"Resident Organizations":[
		["Lathrop Homes News","/lathrop-homes-news-2.html"]],
	"Orchard Park":[
		["Flannery Homes/Orchard Park Update","/flannery-homesorchard-park-update.html"],
		["Last Harvest","/last-harvest.html"]],
	"Habitat Company":[
		["Cabrini Cliffhanger","/cabrini-cliffhanger.html"],
		["Section 8 Update","/section-8-update.html"]],
	"Halsted":[
		["Cabrini Cliffhanger","/cabrini-cliffhanger.html"]],
	"Near North":[
		["Cabrini Cliffhanger","/cabrini-cliffhanger.html"]],
	"diversity":[
		["RJ Visits Miami/Dade Housing Authority","/rj-visits-miamidade-housing-authority.html"]],
	"Haley Sofge":[
		["RJ Visits Miami/Dade Housing Authority","/rj-visits-miamidade-housing-authority.html"]],
	"Latino residents":[
		["RJ Visits Miami/Dade Housing Authority","/rj-visits-miamidade-housing-authority.html"]],
	"Miami Dade Housing Agency":[
		["RJ Visits Miami/Dade Housing Authority","/rj-visits-miamidade-housing-authority.html"]],
	"Hispanic Housing Development Corporation":[
		["New Facility for Scattered Sites","/new-facility-for-scattered-sites.html"],
		["Access Report","/access-report.html"]],
	"Scattered Sites North Central program":[
		["New Facility for Scattered Sites","/new-facility-for-scattered-sites.html"]],
	"CHA Police Department":[
		["Stop The Violence","/stop-the-violence-18.html"]],
	"Community Alternative Policing Strategies":[
		["Stop The Violence","/stop-the-violence-18.html"]],
	"lock down":[
		["Stop The Violence","/stop-the-violence-18.html"]],
	"Cook Dupage Transportation":[
		["Access Report","/access-report-3.html"]],
	"CTA Paratransit Operations":[
		["Access Report","/access-report-3.html"]],
	"disabled community":[
		["Access Report","/access-report-3.html"],
		["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments.html"]],
	"racial issues":[
		["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man.html"]],
	"Robert Rochan Taylor":[
		["Robert Taylor: The Homes/The Man","/robert-taylor-the-homesthe-man.html"]],
	"Dear Resident":[
		["Dear Resident","/dear-resident-9.html"]],
	"January 1998 Issue":[
		["Dear Resident","/dear-resident-9.html"],
		["Stop the Violence","/stop-the-violence-16.html"],
		["Altgeld Gardens News","/altgeld-gardens-news.html"],
		["CHA Announces First Clean Audit","/cha-announces-first-clean-audit.html"],
		["Flannery Homes Update","/flannery-homes-update.html"],
		["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation.html"],
		["REDI: A New Beginning?","/redi-a-new-beginning.html"],
		["ABLA Relocation Report","/abla-relocation-report.html"],
		["L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike.html"],
		["CHA to Buy Back Laundry Tokens","/cha-to-buy-back-laundry-tokens.html"],
		["Inspector General Nabs Employees","/inspector-general-nabs-employees.html"],
		["Access Report","/access-report.html"],
		["The Million Woman March: One Woman's View","/the-million-woman-march-one-womans-view.html"],
		["The Next CHA Chairman?","/the-next-cha-chairman.html"],
		["Farewell, Mr. Chairman","/farewell-mr-chairman.html"],
		["The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath.html"]],
	"perseverence":[
		["Dear Resident","/dear-resident-9.html"]],
	"Citizens Review Board":[
		["Stop the Violence","/stop-the-violence-16.html"]],
	"Crime Victims Bureau":[
		["Stop the Violence","/stop-the-violence-16.html"]],
	"Aldridge":[
		["Altgeld Gardens News","/altgeld-gardens-news.html"]],
	"Altgeld Health Center":[
		["Altgeld Gardens News","/altgeld-gardens-news.html"]],
	"condolences":[
		["Altgeld Gardens News","/altgeld-gardens-news.html"]],
	"Thanksgiving":[
		["Altgeld Gardens News","/altgeld-gardens-news.html"]],
	"audit":[
		["CHA Announces First Clean Audit","/cha-announces-first-clean-audit.html"]],
	"finances":[
		["CHA Announces First Clean Audit","/cha-announces-first-clean-audit.html"]],
	"financial issues":[
		["CHA Announces First Clean Audit","/cha-announces-first-clean-audit.html"],
		["CHA to Buy Back Laundry Tokens","/cha-to-buy-back-laundry-tokens.html"]],
	"festivities":[
		["Flannery Homes Update","/flannery-homes-update.html"],
		["Altgeld Gardens News","/altgeld-gardens-news-2.html"],
		["Happy 60th, Lathrop Homes","/happy-60th-lathrop-homes.html"]],
	"holiday":[
		["Flannery Homes Update","/flannery-homes-update.html"]],
	"Jenner Elementary School":[
		["Cabrini-Green: Changes and Relocation","/cabrini-green-changes-and-relocation.html"]],
	"entrepreneurs":[
		["REDI: A New Beginning?","/redi-a-new-beginning.html"]],
	"REDI":[
		["REDI: A New Beginning?","/redi-a-new-beginning.html"]],
	"Resident Employment Development Initiative":[
		["REDI: A New Beginning?","/redi-a-new-beginning.html"]],
	"Brooks Homes":[
		["ABLA Relocation Report","/abla-relocation-report.html"]],
	"Memorandum of Agreement":[
		["ABLA Relocation Report","/abla-relocation-report.html"]],
	"ACLU":[
		["L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike.html"]],
	"American Civil Liberties Union":[
		["L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike.html"]],
	"constitutionality":[
		["L.A. Tenants Challenge One-Strike","/l-a-tenants-challenge-one-strike.html"]],
	"refunds":[
		["CHA to Buy Back Laundry Tokens","/cha-to-buy-back-laundry-tokens.html"]],
	"employees":[
		["Inspector General Nabs Employees","/inspector-general-nabs-employees.html"]],
	"identification":[
		["Inspector General Nabs Employees","/inspector-general-nabs-employees.html"]],
	"Leonard Odom":[
		["Inspector General Nabs Employees","/inspector-general-nabs-employees.html"]],
	"recovery of materials":[
		["Inspector General Nabs Employees","/inspector-general-nabs-employees.html"]],
	"theft":[
		["Inspector General Nabs Employees","/inspector-general-nabs-employees.html"]],
	"ADA":[
		["Access Report","/access-report.html"]],
	"Americans with Disabilities Act":[
		["Access Report","/access-report.html"],
		["Access Report","/access-report-2.html"],
		["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments.html"]],
	"Million Woman March":[
		["The Million Woman March: One Woman's View","/the-million-woman-march-one-womans-view.html"]],
	"Philadelphia":[
		["The Million Woman March: One Woman's View","/the-million-woman-march-one-womans-view.html"]],
	"women s issues":[
		["The Million Woman March: One Woman's View","/the-million-woman-march-one-womans-view.html"]],
	"chairman":[
		["The Next CHA Chairman?","/the-next-cha-chairman.html"]],
	"Boston":[
		["The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath.html"]],
	"Bromley Heath":[
		["The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath.html"]],
	"Bromley Heath Tenant Management Corporation":[
		["The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath.html"]],
	"CLPHA":[
		["The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath.html"]],
	"Conference of Large Public Housing Authorities":[
		["The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath.html"]],
	"NAHRO":[
		["The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath.html"]],
	"National Association of Housing and Redevelopment Officials":[
		["The Mighty Residents of Bromley-Heath","/the-mighty-residents-of-bromley-heath.html"]],
	"events":[
		["Altgeld Gardens News","/altgeld-gardens-news-2.html"]],
	"Fall 1997 Issue":[
		["Altgeld Gardens News","/altgeld-gardens-news-2.html"],
		["Dear Resident","/dear-resident-11.html"],
		["Section 8 Update","/section-8-update.html"],
		["Chatting with Marie Billingsley","/chatting-with-marie-billingsley.html"],
		["8,000 To Get Jobs Help","/8000-to-get-jobs-help.html"],
		["Mothers Tackle Child Care Woes","/mothers-tackle-child-care-woes.html"],
		["Flannery Homes News","/flannery-homes-news.html"],
		["Happy 60th, Lathrop Homes","/happy-60th-lathrop-homes.html"],
		["CHA and Latinos: Interview with Joe Shuldiner","/cha-and-latinos-interview-with-joe-shuldiner.html"],
		["Stop the Violence II","/stop-the-violence-ii.html"],
		["Schools March for Victims","/schools-march-for-victims.html"],
		["The Life of Artensa Randolph","/the-life-of-artensa-randolph.html"],
		["When Will It End?","/when-will-it-end.html"],
		["Inner-City Truths: A Book Review","/inner-city-truths-a-book-review.html"],
		["Access Report","/access-report-2.html"],
		["A Decree But to What Degree?","/a-decree-but-to-what-degree.html"],
		["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center.html"],
		["Residents Fight Vacate Orders","/residents-fight-vacate-orders.html"]],
	"Youthnet Fun Day":[
		["Altgeld Gardens News","/altgeld-gardens-news-2.html"]],
	"beauty":[
		["Dear Resident","/dear-resident-11.html"]],
	"black women":[
		["Dear Resident","/dear-resident-11.html"]],
	"Million Man March":[
		["Dear Resident","/dear-resident-11.html"]],
	"respect":[
		["Dear Resident","/dear-resident-11.html"]],
	"applicants":[
		["Section 8 Update","/section-8-update.html"]],
	"Marie Billingsley":[
		["Chatting with Marie Billingsley","/chatting-with-marie-billingsley.html"]],
	"Senior south Local Advisory Council":[
		["Chatting with Marie Billingsley","/chatting-with-marie-billingsley.html"]],
	"Walter Russell":[
		["Chatting with Marie Billingsley","/chatting-with-marie-billingsley.html"]],
	"Illinois Job Advantage":[
		["8,000 To Get Jobs Help","/8000-to-get-jobs-help.html"]],
	"TANF":[
		["8,000 To Get Jobs Help","/8000-to-get-jobs-help.html"]],
	"Temporary Assistance to Needy Families":[
		["8,000 To Get Jobs Help","/8000-to-get-jobs-help.html"]],
	"training":[
		["8,000 To Get Jobs Help","/8000-to-get-jobs-help.html"]],
	"child care":[
		["Mothers Tackle Child Care Woes","/mothers-tackle-child-care-woes.html"]],
	"Daycare Action Council":[
		["Mothers Tackle Child Care Woes","/mothers-tackle-child-care-woes.html"]],
	"walfare":[
		["Mothers Tackle Child Care Woes","/mothers-tackle-child-care-woes.html"]],
	"West Haven":[
		["Mothers Tackle Child Care Woes","/mothers-tackle-child-care-woes.html"],
		["Replacement Housing or Replacing People","/replacement-housing-or-replacing-people.html"]],
	"working mothers":[
		["Mothers Tackle Child Care Woes","/mothers-tackle-child-care-woes.html"]],
	"4 H Club":[
		["Happy 60th, Lathrop Homes","/happy-60th-lathrop-homes.html"]],
	"Latinos United":[
		["CHA and Latinos: Interview with Joe Shuldiner","/cha-and-latinos-interview-with-joe-shuldiner.html"],
		["Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing.html"]],
	"injuries":[
		["Stop the Violence II","/stop-the-violence-ii.html"]],
	"resources":[
		["Stop the Violence II","/stop-the-violence-ii.html"]],
	"active participation":[
		["Schools March for Victims","/schools-march-for-victims.html"]],
	"Children First Fund":[
		["Schools March for Victims","/schools-march-for-victims.html"]],
	"Crisis Support Fund":[
		["Schools March for Victims","/schools-march-for-victims.html"]],
	"fundraiser":[
		["Schools March for Victims","/schools-march-for-victims.html"]],
	"volunteers":[
		["Schools March for Victims","/schools-march-for-victims.html"]],
	"Artensa Randolph":[
		["The Life of Artensa Randolph","/the-life-of-artensa-randolph.html"],
		["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph.html"]],
	"death":[
		["The Life of Artensa Randolph","/the-life-of-artensa-randolph.html"]],
	"eulogy":[
		["The Life of Artensa Randolph","/the-life-of-artensa-randolph.html"]],
	"Mamie Bone":[
		["The Life of Artensa Randolph","/the-life-of-artensa-randolph.html"]],
	"danger":[
		["When Will It End?","/when-will-it-end.html"]],
	"destruction":[
		["When Will It End?","/when-will-it-end.html"]],
	"book review":[
		["Inner-City Truths: A Book Review","/inner-city-truths-a-book-review.html"]],
	"David Isay":[
		["Inner-City Truths: A Book Review","/inner-city-truths-a-book-review.html"]],
	"LeAlan Jones":[
		["Inner-City Truths: A Book Review","/inner-city-truths-a-book-review.html"]],
	"literature":[
		["Inner-City Truths: A Book Review","/inner-city-truths-a-book-review.html"]],
	"Lloyd Newman":[
		["Inner-City Truths: A Book Review","/inner-city-truths-a-book-review.html"]],
	"Our America":[
		["Inner-City Truths: A Book Review","/inner-city-truths-a-book-review.html"]],
	"reality":[
		["Inner-City Truths: A Book Review","/inner-city-truths-a-book-review.html"]],
	"Eckhart Park Greenview":[
		["Access Report","/access-report-2.html"]],
	"residents":[
		["Access Report","/access-report-2.html"]],
	"Gautreaux Decree":[
		["A Decree But to What Degree?","/a-decree-but-to-what-degree.html"]],
	"Andrew Cuomo":[
		["Andrew Cuomo: Front and Center","/andrew-cuomo-front-and-center.html"]],
	"building maintenance":[
		["Residents Fight Vacate Orders","/residents-fight-vacate-orders.html"],
		["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph.html"]],
	"vacancy":[
		["Residents Fight Vacate Orders","/residents-fight-vacate-orders.html"]],
	"COSEC":[
		["School Reform: Which Tax?","/school-reform-which-tax.html"]],
	"Council on Standards in Education and the Community":[
		["School Reform: Which Tax?","/school-reform-which-tax.html"]],
	"propety tax":[
		["School Reform: Which Tax?","/school-reform-which-tax.html"]],
	"Public School Reform":[
		["School Reform: Which Tax?","/school-reform-which-tax.html"]],
	"School Improvement Plan":[
		["School Reform: Which Tax?","/school-reform-which-tax.html"]],
	"Summer 1997 Issue":[
		["School Reform: Which Tax?","/school-reform-which-tax.html"],
		["Dear Resident","/dear-resident-10.html"],
		["Flannery Homes Update","/flannery-homes-update-2.html"],
		["Cabrini-Green Update","/cabrini-green-update.html"],
		["Protecting CHA Residents: An Interview with Artensa Randolph","/protecting-cha-residents-an-interview-with-artensa-randolph.html"],
		["Wells on the Rise","/wells-on-the-rise.html"],
		["Stop the Violence","/stop-the-violence-17.html"],
		["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments.html"],
		["Horner Annex Reborn","/horner-annex-reborn.html"],
		["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road.html"],
		["Replacement Housing or Replacing People","/replacement-housing-or-replacing-people.html"],
		["Safe Summer 97","/safe-summer-97.html"],
		["The Magnificent Maya Angelou","/the-magnificent-maya-angelou.html"],
		["Focus On Section 8","/focus-on-section-8.html"],
		["Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing.html"],
		["Hope Has a Way","/hope-has-a-way.html"]],
	"taxes":[
		["School Reform: Which Tax?","/school-reform-which-tax.html"]],
	"readership":[
		["Dear Resident","/dear-resident-10.html"]],
	"improvements":[
		["Flannery Homes Update","/flannery-homes-update-2.html"]],
	"mural":[
		["Cabrini-Green Update","/cabrini-green-update.html"]],
	"Patrick Sykes":[
		["Cabrini-Green Update","/cabrini-green-update.html"]],
	"St Joseph s School":[
		["Cabrini-Green Update","/cabrini-green-update.html"]],
	"Wells Day":[
		["Wells on the Rise","/wells-on-the-rise.html"]],
	"Chicago Black United Communities":[
		["Stop the Violence","/stop-the-violence-17.html"]],
	"Committee Against Racism and Violence":[
		["Stop the Violence","/stop-the-violence-17.html"]],
	"victims":[
		["Stop the Violence","/stop-the-violence-17.html"]],
	"Chicago Department on Aging":[
		["Inaccessibility of CHA Developments","/inaccessibility-of-cha-developments.html"]],
	"the Annex":[
		["Horner Annex Reborn","/horner-annex-reborn.html"]],
	"Buy Back Recycling Program":[
		["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road.html"]],
	"Clean Up Day":[
		["Cleaning Day on Recycling Road","/cleaning-day-on-recycling-road.html"]],
	"lottery":[
		["Replacement Housing or Replacing People","/replacement-housing-or-replacing-people.html"]],
	"economic development":[
		["Safe Summer 97","/safe-summer-97.html"]],
	"Reach for Tomorrow":[
		["Safe Summer 97","/safe-summer-97.html"]],
	"summer":[
		["Safe Summer 97","/safe-summer-97.html"]],
	"Maya Angelou":[
		["The Magnificent Maya Angelou","/the-magnificent-maya-angelou.html"]],
	"New Rosemont Theater":[
		["The Magnificent Maya Angelou","/the-magnificent-maya-angelou.html"]],
	"CHAC Inc ":[
		["Focus On Section 8","/focus-on-section-8.html"]],
	"discrimination":[
		["Latinos Gain Access to Public Housing","/latinos-gain-access-to-public-housing.html"],
		["Vote '96: Conventional Colors","/vote-96-conventional-colors.html"]],
	"hope":[
		["Hope Has a Way","/hope-has-a-way.html"]],
	"Fall 1996 Issue":[
		["Dear Resident","/dear-resident-8.html"],
		["Last Harvest","/last-harvest.html"],
		["The Man Who Scared the Hell Out of Me","/the-man-who-scared-the-hell-out-of-me.html"],
		["A Teen's Shattered Dreams","/a-teens-shattered-dreams.html"],
		["Seniors form new organization","/seniors-form-new-organization.html"],
		["A Short History of Ida B. Wells","/a-short-history-of-ida-b-wells.html"],
		["Your Neighborhood Policemen","/your-neighborhood-policemen.html"],
		["Washington Park: The Dying Hope","/washington-park-the-dying-hope.html"],
		["A Long Ride Home","/a-long-ride-home.html"],
		["Marion...Marion Stamps","/marion-marion-stamps.html"],
		["A History of Cabrini-Green","/a-history-of-cabrini-green.html"],
		["What's Happening in ABLA?","/whats-happening-in-abla.html"],
		["LeClaire Courts","/leclaire-courts.html"],
		["CHA Home Ownership: Wentworth Gardens","/cha-home-ownership-wentworth-gardens.html"],
		["Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington.html"],
		["Vote '96: Conventional Colors","/vote-96-conventional-colors-2.html"],
		["Vote '96: Conventional Colors","/vote-96-conventional-colors.html"]],
	"Building Development Plan":[
		["Last Harvest","/last-harvest.html"]],
	"injury":[
		["A Teen's Shattered Dreams","/a-teens-shattered-dreams.html"]],
	"housing development":[
		["A Short History of Ida B. Wells","/a-short-history-of-ida-b-wells.html"]],
	"origins":[
		["A Short History of Ida B. Wells","/a-short-history-of-ida-b-wells.html"]],
	"interview":[
		["Your Neighborhood Policemen","/your-neighborhood-policemen.html"]],
	"Lake Front Community Organization":[
		["Washington Park: The Dying Hope","/washington-park-the-dying-hope.html"]],
	"Lake Front Properties":[
		["Washington Park: The Dying Hope","/washington-park-the-dying-hope.html"]],
	"Lake Michigan Homes":[
		["Washington Park: The Dying Hope","/washington-park-the-dying-hope.html"]],
	"Sphinx Kiosk":[
		["Washington Park: The Dying Hope","/washington-park-the-dying-hope.html"]],
	"Marion Stamps":[
		["Marion...Marion Stamps","/marion-marion-stamps.html"]],
	"Cabrini Homes":[
		["A History of Cabrini-Green","/a-history-of-cabrini-green.html"]],
	"row houses":[
		["A History of Cabrini-Green","/a-history-of-cabrini-green.html"]],
	"William Green Homes":[
		["A History of Cabrini-Green","/a-history-of-cabrini-green.html"]],
	"consolidation":[
		["What's Happening in ABLA?","/whats-happening-in-abla.html"]],
	"Food Program":[
		["What's Happening in ABLA?","/whats-happening-in-abla.html"]],
	"Dominium":[
		["Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington.html"]],
	"Kevin Marchman":[
		["Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington.html"]],
	"Welfare Bill":[
		["Mr. Robinson Goes to Washington","/mr-robinson-goes-to-washington.html"]],
	"Democratic National Convention":[
		["Vote '96: Conventional Colors","/vote-96-conventional-colors-2.html"],
		["Vote '96: Conventional Colors","/vote-96-conventional-colors.html"]],
	"political parties":[
		["Vote '96: Conventional Colors","/vote-96-conventional-colors-2.html"]]
	}