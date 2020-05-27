import "bootstrap";
import "./index.scss";

import GoJs from "gojs";
import Vue from "vue";
import Map from "./map";

const goJs = GoJs.GraphObject.make;

/*let nodeDataArray = [
	{key: 1, text: "Alpha", color: "lightblue", link: "http://yandex.ru"},
	{key: 2, text: "Beta", color: "orange"},
	{key: 3, text: "Gamma", color: "lightgreen", group: 5},
	{key: 4, text: "Delta", color: "pink", group: 5},
	{key: 5, text: "Epsilon", color: "green", isGroup: true}
];

let linkDataArray = [
	{from: 1, to: 2, color: "blue"},
	{from: 2, to: 2},
	{from: 3, to: 4, color: "green"},
	{from: 3, to: 1, color: "purple"}
];*/

let nodeTemplate =
	goJs(GoJs.Node, "Auto", {
		locationSpot: GoJs.Spot.Center
	},

	goJs(GoJs.Shape, "RoundedRectangle",
		{
			fill: "white",
			portId: "",
			cursor: "pointer",
			fromLinkable: true,
			fromLinkableSelfNode: true,
			fromLinkableDuplicates: true,
			toLinkable: true,
			toLinkableSelfNode: true,
			toLinkableDuplicates: true
		},
		new GoJs.Binding("fill", "color")
	),

	goJs(GoJs.TextBlock,
		{
			font: "bold 14px sans-serif",
			cursor: "pointer",
			stroke: "#333",
			margin: 6,  // make some extra space for the shape around the text
			isMultiline: false,  // don't allow newlines in text
			editable: false  // allow in-place editing by user
		},
		new GoJs.Binding("text", "text").makeTwoWay()
	)
	);


Vue.component("diagram", {
	template: "<div class=\"diagram\"></div>",
	//props:,
	mounted() {
		const myDiagram = goJs(GoJs.Diagram, this.$el, {
			layout: goJs(GoJs.ForceDirectedLayout)
		});
		myDiagram.addDiagramListener("ObjectSingleClicked",
			function (e) {
				if (e.subject.part.ib.link !== undefined) {
					//console.log(e.subject.part.ib.link);
					window.open(e.subject.part.ib.link);
				}
			});
		myDiagram.model = new GoJs.GraphLinksModel(Map.nodes, Map.links);
		myDiagram.nodeTemplate = nodeTemplate;
		//myDiagram.isEnabled = false;
	}
});


new Vue({
	el: "#app",
	data: {
		modelData: {},
		hash: ""
	},
	mounted() {

	}
});
