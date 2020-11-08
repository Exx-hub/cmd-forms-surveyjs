import { useEffect, useState } from "react";
import "./App.css";

import "survey-react/survey.css";
import * as Survey from "survey-react";

import emailjs from "emailjs-com";

import { jsonCondo } from "./jsonCondo";
import { jsonHouse } from "./jsonHouse";

Survey.StylesManager.applyTheme("bootstrap");

function App() {
	const [showHouse, setShowHouse] = useState(false);
	const [responses, setResponses] = useState(null);
	const [showCondo, setShowCondo] = useState(false);
	const [responsesCondo, setResponsesCondo] = useState(null);

	// console.log(responses);
	// console.log(responsesCondo);

	const sendHouseData = (survey) => {
		console.log(survey.data);
		setResponses(survey.data);
	};

	const sendCondoData = (survey) => {
		console.log(survey.data);
		setResponsesCondo(survey.data);
	};

	const showHousePlan = () => {
		setShowHouse(true);
		setShowCondo(false);
	};

	const showCondoPlan = () => {
		setShowCondo(true);
		setShowHouse(false);
	};

	useEffect(() => {
		const sendHouseDataToEmail = () => {
			const templateParams = {
				name: responses.name,
				contact_info: responses.contactInfo,
				project_address: responses.projectAddress,
				lot_area: responses.lotArea,
				target_date: responses.targetDate,
				floor_area: responses.floorArea,
				purpose: responses.purpose,
				budget: responses.budget,
				ground_floor: responses.groundFloorRooms,
				floor_area_second: responses.floorArea2nd,
				second_floor: responses.secondFloorRooms,
				third_floor: responses.thirdFloorRooms,
				land_title: responses.landTitle,
				garage_requirements: responses.garageRequirements,
				living_area_layout: responses.livingAreaLayout,
				total_bedroom_count: responses.totalBedroomCount,
				toilet_and_bath: responses.toiletAndBath,
				house_style: responses.houseStyle,
				wall_finish: responses.wallFinish,
				flooring: responses.flooring,
				file: responses.fileUpload,
			};

			emailjs
				.send(
					"cmd forms",
					"cmdhomeform",
					templateParams,
					"user_Tl5MI9L2KzofnSmBc6uCL"
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);
		};
		if (responses) {
			sendHouseDataToEmail();
		}
	}, [responses]);

	useEffect(() => {
		const sendCondoDataToEmail = () => {
			const templateParams = {
				name: responsesCondo.name,
				contact_info: responsesCondo.contactInfo,
				project_address: responsesCondo.projectAddress,
				purpose: responsesCondo.purpose,
				target_date: responsesCondo.targetDate,
				floor_area: responsesCondo.floorArea,
				ceiling: responsesCondo.ceiling,
				flooring: responsesCondo.floooring,
				bathroom_wall_tiles: responsesCondo.bathroomWallTiles,
				lavatory: responsesCondo.lavatory,
				shower_area: responsesCondo.showerArea,
				kitchen_cabinets: responsesCondo.kitchenCabinets,
				kitchen_top: responsesCondo.kitchenTop,
				kitchen_sink: responsesCondo.kitchenSink,
				kitchen_splash_board: responsesCondo.kitchenSplashBoard,
				living_dining_area: responsesCondo.livingDiningArea,
				tv_console_finish: responsesCondo.tvConsoleFinish,
				study_table: responsesCondo.studyTable,
				storage: responsesCondo.storage,
				storage_finish: responsesCondo.storageFinish,
				bedroom_door: responsesCondo.bedroomDoor,
				wardrobe_design: responsesCondo.wardrobeDesign,
				partition: responsesCondo.partition,
				requests: responsesCondo.requests,
				file_upload: responsesCondo.fileUpload,
				file_upload_two: responsesCondo.fileUploadTwo,
			};

			emailjs
				.send(
					"cmd forms",
					"cmdcondoform",
					templateParams,
					"user_Tl5MI9L2KzofnSmBc6uCL"
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);
		};
		if (responsesCondo) {
			sendCondoDataToEmail();
		}
	}, [responsesCondo]);

	return (
		<div className="App">
			<button onClick={showHousePlan}>House plan</button>
			<button onClick={showCondoPlan}>Condo plan</button>
			{showHouse && (
				<Survey.Survey json={jsonHouse} onComplete={sendHouseData} />
			)}
			{showCondo && (
				<Survey.Survey json={jsonCondo} onComplete={sendCondoData} />
			)}
		</div>
	);
}

export default App;
