export const jsonHouse = {
	title: "Design Requirements Checklist",
	description: "CMD Design Form 001",
	logo:
		"https://surveyjs.io/api/MySurveys/files?name=69cd121b-bb63-41d4-b0f0-7ce9eb0423ee",
	logoWidth: 200,
	logoHeight: 100,
	completedHtml:
		"Thank you for choosing CMD Pioneer. We will get back to you shortly. Let's start building your dream.",
	pages: [
		{
			name: "page1",
			elements: [
				{
					type: "text",
					name: "name",
					title: "Name",
					isRequired: true,
					placeHolder: "Your answer",
				},
				{
					type: "text",
					name: "contactInfo",
					title: "Contact Information",
					isRequired: true,
					placeHolder: "Your answer",
				},
				{
					type: "text",
					name: "projectAddress",
					title: "Project Address",
					isRequired: true,
					placeHolder: "Your answer",
				},
				{
					type: "text",
					name: "lotArea",
					title: "Lot Area",
					isRequired: true,
					placeHolder: "Your answer",
				},
				{
					type: "text",
					name: "targetDate",
					title: "Approximate target month & year to start",
					placeHolder: "Your answer",
				},
				{
					type: "text",
					name: "floorArea",
					title: "How many SQM for ground floor (including garage if any)",
					isRequired: false,
					placeHolder: "sqm",
				},
				{
					type: "radiogroup",
					name: "purpose",
					title: "What is the purpose of this house?",
					isRequired: true,
					choices: [
						{
							value: "personal",
							text: "For personal use",
						},
						{
							value: "rental",
							text: "For rental",
						},
						{
							value: "build & sell",
							text: "For build and sell",
						},
						{
							value: "retirement",
							text: "Retirement Home",
						},
					],
				},
				{
					type: "text",
					name: "budget",
					title: "How much is your approximate budget for this project?",
					isRequired: true,
					placeHolder: "Enter approx. budget",
				},
				{
					type: "checkbox",
					name: "groundFloorRooms",
					title: "Ground floor room requirements",
					isRequired: false,
					choices: [
						{
							value: "Garage",
							text: "Garage",
						},
						{
							value: "Living Room",
							text: "Living Room",
						},
						{
							value: "Dining Room",
							text: "Dining Room",
						},
						{
							value: "Show Kitchen",
							text: "Show Kitchen",
						},
						{
							value: "Dirty Kitchen",
							text: "Dirty Kitchen",
						},
						{
							value: "Maid's Quarters",
							text: "Maid's Quarters",
						},
						{
							value: "Laundry Area",
							text: "Laundry Area",
						},
						{
							value: "Bedroom/s",
							text: "Bedroom/s",
						},
						{
							value: "Storage Room",
							text: "Storage Room",
						},
						{
							value: "Toilet and Bath",
							text: "Toilet and Bath",
						},
					],
					hasOther: true,
					hasSelectAll: true,
				},
				{
					type: "text",
					name: "floorArea2nd",
					title: "How many sqm for second floor?",
					placeHolder: "Your answer",
				},
				{
					type: "checkbox",
					name: "secondFloorRooms",
					title: "Second floor requirements",
					choices: [
						{
							value: "Family Room",
							text: "Family Room",
						},
						{
							value: "Alfresco",
							text: "Alfresco",
						},
						{
							value: "Bedroom/s",
							text: "Bedroom/s",
						},
						{
							value: "Toilet and Bath",
							text: "Toilet and Bath",
						},
						{
							value: "Bar Kitchen",
							text: "Bar Kitchen",
						},
						{
							value: "Maid's Quarters",
							text: "Maid's Quarters",
						},
						{
							value: "Balcony",
							text: "Balcony",
						},
						{
							value: "Storage Room",
							text: "Storage Room",
						},
						{
							value: "Laundry Area",
							text: "Laundry Area",
						},
					],
					hasOther: true,
					hasSelectAll: true,
				},
				{
					type: "checkbox",
					name: "thirdFloorRooms",
					title: "Third floor requirements",
					choices: [
						{
							value: "Roof Deck",
							text: "Roof Deck",
						},
					],
					hasOther: true,
					otherText: "Other: please specify",
				},
				{
					type: "radiogroup",
					name: "landTitle",
					title: "Do you already have a land title?",
					isRequired: true,
					choices: [
						{
							value: "Yes",
							text: "Yes, I have.",
						},
						{
							value: "No",
							text: "No, I don't.",
						},
					],
				},
				{
					type: "radiogroup",
					name: "garageRequirements",
					title: "Garage requirements",
					choices: [
						{
							value: "1 Car Garage",
							text: "1 Car Garage",
						},
						{
							value: "2 Car Garage",
							text: "2 Car Garage",
						},
						{
							value: "Open Parking",
							text: "Open Parking",
						},
						{
							value: "Closed Garage",
							text: "Closed Garage",
						},
					],
					hasOther: true,
					otherText: "Other: please specify",
				},
				{
					type: "radiogroup",
					name: "livingAreaLayout",
					title: "Living area layout",
					choices: [
						{
							value: "Open planning",
							text:
								"Open planning (Living room, Dining and Kitchen are directly accessible from each other)",
						},
						{
							value: "Semi open planning 1",
							text:
								"Semi open planning 1 (Living and Dining are directly accessible with separate room for kitchen)",
						},
						{
							value: "Semi open planning 2",
							text:
								"Semi open planning 2 (Dining and kitchen directly accessible separated from Living room)",
						},
						{
							value: "Closed planning",
							text: "Closed planning (all living areas are separated)",
						},
					],
					hasOther: true,
					otherText: "Other: please specify",
				},
				{
					type: "dropdown",
					name: "totalBedroomCount",
					title: "Number of Bedrooms",
					choices: [
						{
							value: "1",
							text: "1",
						},
						{
							value: "2",
							text: "2",
						},
						{
							value: "3",
							text: "3",
						},
						{
							value: "4",
							text: "4",
						},
						{
							value: "5",
							text: "5",
						},
						{
							value: "6",
							text: "6",
						},
					],
					hasOther: true,
					otherText: "7 and above (indicate)",
				},
				{
					type: "checkbox",
					name: "toiletAndBath",
					title: "Toilet and Bath requirements",
					choices: [
						{
							value: "Powder Room",
							text: "Powder Room",
						},
						{
							value: "Ground floor Full common T&B",
							text: "Ground floor Full common T&B",
						},
						{
							value: "Second floor Full common T&B",
							text: "Second floor Full common T&B",
						},
						{
							value: "Master's private T&B",
							text: "Master's private T&B",
						},
						{
							value: "Bedroom private T&B",
							text: "Bedroom private T&B",
						},
					],
					hasOther: true,
					otherText: "Other: please specify",
					hasSelectAll: true,
				},
				{
					type: "imagepicker",
					name: "houseStyle",
					title:
						"Style-Images below are style references only. Choose the style that best suits you and your budget.",
					isRequired: false,
					hasComment: true,
					choices: [
						{
							value: "Modern Contemporary",
							text: "Modern Contemporary",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=1fc82a88-385a-42d4-90a2-7bcdd10e75e3",
						},
						{
							value: "Zen Type",
							text: "Zen Type",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=ddda4512-64b1-4496-95fa-47817e3bce32",
						},
						{
							value: "Mediterranean",
							text: "Mediterranean",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=fd21e241-c618-44a6-9ee8-448708e051ce",
						},
						{
							value: "Industrial",
							text: "Industrial",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=bbc29088-4998-494d-b22d-406d85e8f2ad",
						},
					],
					imageFit: "cover",
					showLabel: true,
				},
				{
					type: "radiogroup",
					name: "wallFinish",
					title: "Wall finish",
					isRequired: false,
					choices: [
						{
							value: "With Paint.",
							text: "With Paint.",
						},
						{
							value: "Working on my budget.",
							text: "Working on my budget.",
						},
					],
					hasOther: true,
					otherText: "Other: please specify",
				},
				{
					type: "radiogroup",
					name: "flooring",
					title: "Flooring",
					isRequired: false,
					choices: [
						{
							value: "Tiles",
							text: "Tiles",
						},
						{
							value: "Vinyl",
							text: "Vinyl",
						},
						{
							value: "Wood Plank",
							text: "Wood Plank",
						},
						{
							value: "Own Material.",
							text: "I have my own materials/supplies.",
						},
						{
							value: "Working on my budget.",
							text: "Working on my budget.",
						},
					],
					hasOther: true,
					otherText: "Other: please specify",
				},
				{
					type: "file",
					name: "fileUpload",
					title:
						"Please upload the lot survey or title or email it to us at sales@cmdcorpph.com",
					maxSize: 0,
				},
			],
			title: "*Required",
		},
	],
};
