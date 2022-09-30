import React, { Fragment, useState, useEffect } from 'react';
import { FloppyDisk, FileSearch, Rocket } from 'phosphor-react';
import axios from 'axios';
import Social from './Social';

const Api = ({ userInput }) => {
	const [apiResults, setRes] = useState({
		dictResponse: {},
		thesResponse: {},
		thesArray: [],
		synsArray: [],
	});
	const { thesArray, synsArray } = apiResults;
	const inputUpper = userInput.toUpperCase();
	const badForYou = [
		`Implementing ${inputUpper} will dramatically downsize cost initiatives while pairing substantial velocity with core values.`,
		`${inputUpper} is a more than a brand statement - it positions us to be more agile and averse to the adversarial.`,
		`${inputUpper} allows us to think outside the box to empower our niche and utilize best practices.`,
		`We need to shift the paradigm and ${inputUpper} will allow us to do that, action items are forthcoming.`,
		`Flexing our human capital will be easier if we used ${inputUpper}, allowing us to drill down and identify risk.`,
		`${inputUpper} is a game changer that will revolutionize our decruitment agendas and policies.`,
		`We strongly believe that ${inputUpper} will allow us to synergize and homogenize earnings across our business vectors.`,
		`Operationalizing ${inputUpper} will engender greater blue-sky thinking, and we anticipate marginalized net-net gain.`,
		`Before ${inputUpper}, we had a siloed approach to encapsulation - ${inputUpper} gives us more of bleeding and leading edge.`,
		`Let's recontextualize ${inputUpper}, we need to initiate a Tiger Team to evaluate and value add to the proposition.`,
		`${inputUpper} allows us to ladder up to our framework and optimizes our social and moral consciousness.`,
		`${inputUpper} will allow for greater actualization of our systematic and overarching deliverables towards sustainablity.`,
		`The 30,000 foot view is that ${inputUpper} will foster output of 110% within core competencies and derivative actionables.`,
		`${inputUpper} might feel like a big ask initially - reference the scope document and let's take any concerns offline.`,
		`${inputUpper} will ultimately add value and operationally open a dialog with our points of contact, so we can be same page.`,
		`Reducing bottlenecks with ${inputUpper} is our proactive stance to address more with less.`,
		`We can seamlessly integrate ${inputUpper} into our value-add props which should give our change agents more bandwidth.`,
	];
	// MAKE RIDICULOUS ARRAY FOR FINAL PANEL
	let outputArr = [];
	const badOutput = () => {
		for (let i = 0; outputArr.length < 6; i++) {
			let rand = Math.floor(Math.random() * badForYou.length);
			if (!outputArr.includes(badForYou[rand])) {
				outputArr.push(badForYou[rand]);
			}
		}
	};
	badOutput();
	useEffect(() => {
		const dictKey = process.env.REACT_APP_DICT_API;
		const thesKey = process.env.REACT_APP_THES_API;
		let thesDefs = [];
		let thesSyns = [];
		const thesApi = `https://dictionaryapi.com/api/v3/references/thesaurus/json/${userInput}?key=${thesKey}`;
		const colDictApi = `https://dictionaryapi.com/api/v3/references/collegiate/json/${userInput}?key=${dictKey}`;
		const fetchData = async () => {
			try {
				// CALL API
				const dictResult = await axios(colDictApi);
				const thesResult = await axios(thesApi);
				console.log(dictResult, thesResult);
				// ERROR HANDLING - POPULATE ARRAYS WITH GOOD DYNAMICS OR BAD STATICS
				if (
					thesResult.data[0]['meta'] === undefined ||
					thesResult.data[0]['shortdef'] === undefined
				) {
					if (thesResult.data.length > 0) {
						thesResult.data.map((el) => thesSyns.push(el));
					} else {
						thesSyns.push(
							`The robot databases really could not find any words similar to ${userInput}.`
						);
					}
				} else {
					thesResult.data[0]['meta']['syns'].map((arr) =>
						arr.map((val) => thesSyns.push(val))
					);
					thesResult.data.map((arr) =>
						arr['shortdef'].map((el) => thesDefs.push(el))
					);
					dictResult.data.map((arr) =>
						arr['shortdef'].map((el) => thesDefs.push(el))
					);
				}
				// SET STATES
				setRes({
					dictResponse: dictResult,
					thesResponse: thesResult,
					thesArray: thesDefs.slice(0, 15),
					synsArray: thesSyns.slice(0, 15),
				});
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);
	return (
		<Fragment>
			<div className='container-lead'>
				<div className='lead-line'>
					<p>Let's incorporate this into your corporates.</p>
					<p>I don't know what that means either.</p>
				</div>
			</div>
			<div className='container-defined'>
				<div className='defined-margin'>
					<p className='defined-lead'>
						<FloppyDisk style={{ verticalAlign: 'bottom' }} size={30} /> YOUR
						CULCHR DEFINED - WHAT DOES {userInput.toUpperCase()} MEAN?
					</p>
					{thesArray.length > 0 ? (
						<ul className='defined-ul'>
							{thesArray.map((val, index) => (
								<li className='defined-li' key={index}>
									{val}
								</li>
							))}
						</ul>
					) : (
						<Fragment>
							<p className='defined-ul'>
								Sorry, the robot databases could not match any definitions to{' '}
								{userInput}. If we found anything similar, it will be below. If
								available, try using one of these suggestions for a full Culchr
								experience. Apologies for not matching your word...
							</p>
						</Fragment>
					)}
				</div>
				<div className='defined-margin'>
					<p className='defined-lead'>
						<FileSearch style={{ verticalAlign: 'bottom' }} size={30} /> YOUR
						CULCHR EXPANDED - WORDS SIMILAR TO {userInput.toUpperCase()}
					</p>
					<ul className='defined-ul'>
						{synsArray.map((val, index) => (
							<li className='defined-li' key={index}>
								{val}
							</li>
						))}
					</ul>
				</div>
				<div className='defined-margin'>
					<p className='defined-lead'>
						<Rocket style={{ verticalAlign: 'bottom' }} size={30} /> CULCHR'IZED
						CORPORATE SPEAK - COPY/PASTE MEANINGLESS POWER PHRASES FOR EMAILS!
					</p>
					<ul className='defined-ul'>
						{outputArr.map((val, index) => (
							<li className='defined-li' key={index}>
								{val}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div>
				<p className='goodbyeSwine'>Thank you for using Culchr</p>
				<p className='goodbyeSwine'>Share Culchr</p>
			</div>
			<Social />
		</Fragment>
	);
};

export default Api;
