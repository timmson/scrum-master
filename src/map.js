module.exports = {
	nodes: [
		{key: 1, text: "Scrum Master", color: "white", link: "https://www.scrum.org/pathway/scrum-master"},
		{key: 2, text: "Coaching", color: "lightgrey", link: "https://icf-russia.ru/"},
		{key: 3, text: "Mentoring", color: "lightgrey", link: ""},
		{key: 4, text: "Teaching", color: "lightgrey", link: ""},
		{key: 5, text: "Mentoring", color: "lightgrey", link: ""},
		{
			key: 6,
			text: "Product Mastery",
			color: "lightgreen",
			link: "https://www.scrum.org/pathway/product-owner-learning-path"
		},
		{key: 7, text: "Transformation Mastery", color: "lightblue"},
		{
			key: 8,
			text: "Technical Mastery",
			color: "orange",
			link: "https://www.scrum.org/pathway/team-member-learning-path"
		},
		{key: 9, text: "Agile & Lean Mastery", color: "pink", link: "/transformation-mastery.md"}

	],
	links: [
		{from: 1, to: 2},
		{from: 1, to: 3},
		{from: 1, to: 4},
		{from: 1, to: 5},
		{from: 1, to: 6},
		{from: 1, to: 7},
		{from: 1, to: 8},
		{from: 1, to: 9}
	]
};