am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("force-directed-network", am4plugins_forceDirected.ForceDirectedTree);

var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())
networkSeries.dataFields.linkWith = "linkWith";
networkSeries.dataFields.name = "name";
networkSeries.dataFields.id = "name";
networkSeries.dataFields.value = "value";
networkSeries.dataFields.children = "children";

networkSeries.nodes.template.label.text = "{name}"
networkSeries.fontSize = 8;

var nodeTemplate = networkSeries.nodes.template;
nodeTemplate.tooltipText = "{name}";
nodeTemplate.fillOpacity = 1;
nodeTemplate.label.hideOversized = true;
nodeTemplate.label.truncate = true;

var linkTemplate = networkSeries.links.template;
linkTemplate.strokeWidth = 1;
var linkHoverState = linkTemplate.states.create("hover");
linkHoverState.properties.strokeOpacity = 1;
linkHoverState.properties.strokeWidth = 2;

nodeTemplate.events.on("over", function (event) {
    var dataItem = event.target.dataItem;
    dataItem.childLinks.each(function (link) {
        link.isHover = true;
    })
})

nodeTemplate.events.on("out", function (event) {
    var dataItem = event.target.dataItem;
    dataItem.childLinks.each(function (link) {
        link.isHover = false;
    })
})

networkSeries.data = [
   {
      "name":"Phoebe",
      "value":102,
      "linkWith":[
         "Barry"
      ],
      "children":[
         {
            "name":"David",
            "value":14
         },
         {
            "name":"Roger",
            "value":1
         },
         {
            "name":"Mike",
            "value":18,
            "linkWith": [
                "Paul the wine guy"
            ]
         }
      ]
   },
   {
      "name":"Monica",
      "value":204,
      "linkWith":[
         "Rachel",
         "Chandler",
         "Ross",
         "Barry"
      ],
      "children":[
         {
            "name":"Paul the wine guy",
            "value":1,
            "linkWith": [
                "Mike",
                "Eric",
            ]
         },
         {
            "name":"Mr Geller",
            "value":8
         },
         {
            "name":"Mrs Geller",
            "value":14
         },
         {
            "name":"Aunt Lilian",
            "value":2
         },
      ]
   },
   {
      "name":"Ross",
      "value":216,
      "linkWith":[
         "Joey",
         "Phoebe",
      ],
      "children":[
         {
            "name":"Carol",
            "value":10
         },
         {
            "name":"Celia",
            "value":2
         },
      ]
   },
   {
      "name":"Chandler",
      "value":167,
      "linkWith":[
         "Joey",
         "Phoebe"
      ],
      "children":[
         {
            "name":"Aurora",
            "value":2
         },
         {
            "name":"Jill Goodacre",
            "value":1
         },
         {
            "name":"Janice",
            "value":12
         },
         {
            "name":"Mrs Bing",
            "value":6
         },
         {
            "name":"Nina",
            "value":1
         },
         {
            "name":"Susie",
            "value":5
         },
         {
            "name":"Mary Theresa",
            "value":1
         },
      ]
   },
   {
      "name":"Rachel",
      "value":158,
      "linkWith":[
         "Chandler",
         "Ross",
         "Joey",
         "Celia"
      ],
      "children":[
         {
            "name":"Paolo",
            "value":5
         },
         {
            "name":"Barry",
            "value":1
         },
      ]
   },
   {
      "name":"Joey",
      "value":88,
      "linkWith":[
         "Phoebe",
         "Janice",
      ],
      "children":[
         {
            "name":"Lorraine",
            "value":2
         },
         {
            "name":"Melanie",
            "value":2
         },
         {
            "name":"Erica",
            "value":2
         },
      ]
   }
];
})
