const tasks = [
  { label: "Requirement Analysis", week: 1, color: "skyblue" },
  { label: "Project Kickoff", week: 1, color: "skyblue" },
  { label: "Stakeholder Interviews", week: 1, color: "skyblue" },
  { label: "Requirements Workshop", week: 1, color: "skyblue" },
  { label: "User Story Documentation", week: 2, color: "steelblue" },
  { label: "Requirements Sign-off", week: 2, color: "steelblue" },
  { label: "Database Design", week: 2, color: "steelblue" },
  { label: "CSV Schema Design", week: 2, color: "steelblue" },
  { label: "Database Implementation", week: 3, color: "lightgreen" },
  { label: "Database Structure Complete", week: 3, color: "lightgreen" },
  { label: "Core Functionality", week: 3, color: "lightgreen" },
  { label: "Review Due Date Calculator", week: 4, color: "mediumseagreen" },
  { label: "Reviewer Assignment Algorithm", week: 4, color: "mediumseagreen" },
  { label: "Email Notification System", week: 4, color: "mediumseagreen" },
  { label: "Core Functionality Complete", week: 4, color: "mediumseagreen" },
  { label: "Reporting & UI", week: 5, color: "orchid" },
  { label: "Monthly Review Reports", week: 5, color: "orchid" },
  { label: "User Interface Integration", week: 5, color: "orchid" },
  { label: "Reporting and UI Complete", week: 5, color: "orchid" },
  { label: "Testing & Deployment", week: 6, color: "salmon" },
  { label: "Testing", week: 6, color: "salmon" },
  { label: "Bug Fixes and Refinements", week: 6, color: "salmon" },
  { label: "System Ready for Deployment", week: 6, color: "salmon" },
  { label: "Training & Transition", week: 7, color: "gold" },
  { label: "Training", week: 7, color: "gold" },
  { label: "Parallel Run", week: 8, color: "tomato" },
  { label: "Project Complete", week: 8, color: "tomato" }
];

// Create bar traces
const data = tasks.map(task => ({
  type: "bar",
  x: [1],
  y: [task.label],
  base: [task.week - 1],
  orientation: "h",
  marker: { color: task.color },
  hovertemplate: `Task: ${task.label}<br>Week: ${task.week}<extra></extra>`,
  customdata: [task.week]
}));

// Enhanced layout with styles
const layout = {
  title: {
    text: "Project Gantt Chart by Week",
    font: {
      family: "Segoe UI, sans-serif",
      size: 28,
      color: "#222"
    },
    xanchor: "center",
    x: 0.5,
    y: 0.95
  },
  paper_bgcolor: "#f9f9f9",
  plot_bgcolor: "#ffffff",
  font: {
    family: "Segoe UI, sans-serif",
    size: 14,
    color: "#333"
  },
  margin: {
    l: 250,
    r: 30,
    t: 80,
    b: 60
  },
  barmode: "stack",
  xaxis: {
    title: "Week",
    tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    ticktext: ["", "Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"],
    range: [0, 8.5],
    showgrid: true,
    gridcolor: "#eee"
  },
  yaxis: {
    title: "Tasks",
    automargin: true,
    autorange: "reversed"
  },
  showlegend: false,
  height: 850
};

// Draw chart
Plotly.newPlot("gantt", data, layout);

// Week-based interactivity
const weekToTasks = {};
tasks.forEach(task => {
  if (!weekToTasks[task.week]) weekToTasks[task.week] = [];
  weekToTasks[task.week].push(task.label);
});

document.getElementById("gantt").on("plotly_click", function(data) {
  const week = data.points[0].customdata;
  const list = weekToTasks[week].join("\n- ");
  alert(`Tasks in Week ${week}:\n\n- ${list}`);
});