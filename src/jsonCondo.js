export const jsonCondo = {
	title: "Personalized Condo Fit Outs Design Requirements",
	description: "CMD Design Form 002",
	logo:
		"https://surveyjs.io/api/MySurveys/files?name=9a3fe66f-2997-4c6c-be4e-03073242b50e",
	logoWidth: 199,
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
					title: "Name of the condo and address",
					isRequired: true,
					placeHolder: "Your answer",
				},
				{
					type: "radiogroup",
					name: "purpose",
					title: "What is your plan for your condo unit? ",
					isRequired: true,
					choices: [
						{
							value: "For rent",
							text: "For rent",
						},
						{
							value: "Personal use",
							text: "Personal use",
						},
						{
							value: "I haven't decided yet.",
							text: "I haven't decided yet.",
						},
					],
					hasOther: true,
				},
				{
					type: "text",
					name: "targetDate",
					title: "Approximate target month & year to start",
					isRequired: true,
					placeHolder: "Your answer",
				},
				{
					type: "text",
					name: "floorArea",
					title: "How many sqm?",
					isRequired: true,
					placeHolder: "sqm",
				},
				{
					type: "imagepicker",
					name: "ceiling",
					title: "CEILING OF CHOICE",
					hasComment: true,
					commentText: "Other: please specify",
					choices: [
						{
							value: "Flat Ceiling",
							text: "Flat Ceiling",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=37bbe52e-6b9a-4d72-b864-03bf6be077fa",
						},
						{
							value: "Cove Lights",
							text: "Cove Lights",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=525a1ac4-def9-43e3-a593-4f0eeaad8c28",
						},
					],
					imageFit: "fill",
					showLabel: true,
				},
				{
					type: "imagepicker",
					name: "flooring",
					title:
						"FLOORING OF CHOICE (For living, dining, kitchen and bedroom) ",
					hasComment: true,
					commentText: "other: please specify",
					choices: [
						{
							value: "Ceramic",
							text: "Ceramic",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=d1515a76-9680-4b15-a71e-410d88d6e65c",
						},
						{
							value: "Porcelain",
							text: "Porcelain Tiles",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=18011ec6-f5d7-4d26-98b3-0d1c15ec0245",
						},
						{
							value: "Granite",
							text: "Granite Tiles",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=417e6417-1080-49ca-b68b-c232147a44e6",
						},
						{
							value: "Wood",
							text: "Wood Plank",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=c58d6b09-ae84-43fc-a007-aeed558691cc",
						},
						{
							value: "Vinyl",
							text: "Vinyl",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=1dd6e724-0e18-4001-abd7-36618943e3f7",
						},
					],
					imageFit: "fill",
					showLabel: true,
				},
				{
					type: "imagepicker",
					name: "bathroomWallTiles",
					title: "Toilet area - WALL TILES",
					hasComment: true,
					commentText: "Other: please specify",
					choices: [
						{
							value: "Full bathroom tiles",
							text: "Full bathroom tiles",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=1714d3e4-c162-49eb-8224-a8669d0633c1",
						},
						{
							value: "Not fully tiled",
							text: "Not fully tiled",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=7da6fc50-517e-4a45-b3de-b7bd03d6d2a0",
						},
					],
					imageWidth: 199,
					showLabel: true,
				},
				{
					type: "imagepicker",
					name: "lavatory",
					title: "LAVATORY",
					hasComment: true,
					commentText: "Other: please specify",
					choices: [
						{
							value: "Lavatory with cabinet",
							text: "Lavatory with cabinet",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=aec1bfbd-9f55-48ce-bfa0-7d7da2620e74",
						},
						{
							value: "Wall mounted lavatory",
							text: "Wall mounted, no cabinet",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=38136616-df5c-4fbc-8a22-c9990afcc733",
						},
					],
					showLabel: true,
				},
				{
					type: "imagepicker",
					name: "showerArea",
					title: "SHOWER AREA",
					hasComment: true,
					commentText: "Other: please specify",
					choices: [
						{
							value: "With glass enclosure",
							text: "With glass enclosure",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=e0ed3278-1570-424c-8fcc-a95e0fcee401",
						},
						{
							value: "Without glass enclosure",
							text: "Without glass enclosure",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=d53115bb-3d7a-4f02-9031-4593beed8e77",
						},
					],
					showLabel: true,
				},
				{
					type: "imagepicker",
					name: "kitchenCabinets",
					title: "KITCHEN AREA-HANGING CABINETS",
					hasComment: true,
					commentText: "Other: please specify",
					choices: [
						{
							value: "Enamel Paint Finish",
							text: "Enamel Paint Finish",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=5542a0f4-7a35-4397-85fd-3f47679640ad",
						},
						{
							value: "Laminated Finish",
							text: "Laminated Finish",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=2e93e398-3cf5-4d1f-baa3-5d4617c3f279",
						},
						{
							value: "Automotive spray / Duco Finish ",
							text: "Automotive Spray / Duco Finish",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=9fdcc657-05ad-42e0-a9ec-c684885bd33f",
						},
					],
					imageFit: "cover",
					showLabel: true,
				},
				{
					type: "imagepicker",
					name: "kitchenTop",
					title: "KITCHEN TOP FINISH",
					hasComment: true,
					commentText: "Other: please specify",
					choices: [
						{
							value: "Tiles",
							text: "Tiles",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=aad38385-da0b-41ab-80c8-d4679e963ff8",
						},
						{
							value: "Solid Countertops",
							text: "Solid Countertops",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=df4e1d4d-60f9-4a0d-8abb-6e720eaee4be",
						},
						{
							value: "Granite/Natural Stones",
							text: "Granite/Natural Stones",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=1bac574c-acad-4fbb-aaa9-7b12301913c5",
						},
					],
					imageFit: "cover",
					showLabel: true,
				},
				{
					type: "radiogroup",
					name: "kitchenSink",
					title: "Kitchen sink cabinet finish",
					choices: [
						{
							value: "Enamel paint finish",
							text: "Enamel paint finish",
						},
						{
							value: "Laminated finish",
							text: "Laminated finish",
						},
						{
							value: "Automotive or Duco Paint Finish",
							text: "Automotive or Duco Paint Finish",
						},
					],
					hasOther: true,
				},
				{
					type: "imagepicker",
					name: "kitchenSplashBoard",
					title: "KITCHEN SPLASH BOARD",
					hasComment: true,
					commentText: "Other: please specify",
					choices: [
						{
							value: "Tiles",
							text: "Tiles",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=2c5cd603-72d3-40b7-827f-bed2b49d556e",
						},
						{
							value: "Paint only",
							text: "Paint only",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=55597a57-3e2c-4e2a-a123-6ec100b05f38",
						},
					],
					imageFit: "fill",
					showLabel: true,
				},
				{
					type: "imagepicker",
					name: "livingDiningArea",
					title: "LIVING OR DINING AREA",
					hasComment: true,
					commentText: "Other: please specify",
					choices: [
						{
							value: "With TV console",
							text: "With TV console",
							imageLink:
								"https://surveyjs.io/api/MySurveys/files?name=d9c53a71-255b-4734-beb6-37fa801b637f",
						},
					],
					imageFit: "cover",
					showLabel: true,
				},
				{
					type: "radiogroup",
					name: "tvConsoleFinish",
					visibleIf: "{livingDiningArea} = 'With TV console'",
					title: "If with TV console, what will be the finish?",
					choices: [
						{
							value: "Enamel Paint Finish",
							text: "Enamel Paint Finish",
						},
						{
							value: "Laminated Finish",
							text: "Laminated Finish",
						},
						{
							value: "Automotive/Duco paint finish",
							text: "Automotive/Duco Paint Finish",
						},
					],
				},
				{
					type: "radiogroup",
					name: "studyTable",
					title: "Study table",
					choices: [
						{
							value: "With",
							text: "With",
						},
						{
							value: "Without",
							text: "Without",
						},
					],
				},
				{
					type: "checkbox",
					name: "storage",
					title: "Storage",
					choices: [
						{
							value: "Wardrobe",
							text: "Wardrobe",
						},
						{
							value: "Utility Cabinet",
							text: "Utility Cabinet",
						},
						{
							value: "None",
							text: "None",
						},
					],
					hasOther: true,
					otherText: "Other: please specify",
				},
				{
					type: "radiogroup",
					name: "storageFinish",
					title: "Storage Finish",
					choices: [
						{
							value: "Enamel Paint Finish",
							text: "Enamel Paint Finish",
						},
						{
							value: "Laminated Finish",
							text: "Laminated Finish",
						},
						{
							value: "Automotive / Duco Paint Finish",
							text: "Automotive / Duco Paint Finish",
						},
					],
				},
				{
					type: "radiogroup",
					name: "bedroomDoor",
					title: "Bedroom Door Type",
					choices: [
						{
							value: "Swing",
							text: "Swing",
						},
						{
							value: "Sliding",
							text: "Sliding",
						},
					],
					hasOther: true,
					otherText: "Other: please specify",
				},
				{
					type: "radiogroup",
					name: "wardrobeDesign",
					title: "For Wardrobe design",
					choices: [
						{
							value: "Hanging",
							text: "Hanging",
						},
						{
							value: "Full Height",
							text: "Full Height",
						},
					],
					hasOther: true,
					otherText: "Other: please specify",
				},
				{
					type: "radiogroup",
					name: "partition",
					title: "Partition?",
					choices: [
						{
							value: "Yes.",
							text: "Yes.",
						},
						{
							value: "No.",
							text: "No.",
						},
					],
				},
				{
					type: "text",
					name: "requests",
					title: "Additional comments/requests?",
					placeHolder: "Your answer",
				},
				{
					type: "file",
					name: "fileUpload",
					title:
						"Please upload the floor plan the pictures of the current state of your condo or email at sales@cmdcorpph.com",
					maxSize: 0,
				},
				{
					type: "file",
					name: "fileUploadTwo",
					title:
						"Please upload the floor plan or email it to us at sales@cmdcorpph.com",
					maxSize: 0,
				},
			],
			title: "*Required",
		},
	],
};
