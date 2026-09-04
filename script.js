// Resume Data & Interactive Script Logic

// --- Profile Data Definition ---
const profiles = {
  muskan: {
    name: "Muskan Isarani",
    role: "Full Stack Developer",
    summary: "B.Tech Information Technology student with hands-on experience developing robust full-stack web solutions, optimizing API latencies, and designing scalable SQL/NoSQL schemas. Proven ability to build secure authentication systems, integrate third-party payment gateways, and develop responsive frontend interfaces. Strong foundation in Object-Oriented Programming (OOP) principles, rapid prototyping, and version-controlled collaboration.",
    gpa: "CGPA: 7.72",
    resumeLink: "resume.html", // Points to the copied local HTML resume file
    socials: {
      linkedin: "https://www.linkedin.com/in/muskan-isarani-6598b2292",
      github: "https://github.com/muskanisarani",
      email: "mailto:isaranimuskan12@gmail.com",
      figma: "https://figma.com/@muskanisarani"
    },
    skills: {
      dataEng: ["SQL Schema Design", "NoSQL (MongoDB)", "Prisma ORM", "Query Optimization", "Tableau & Power BI"], // database
      aiMl: ["Google Gemini API", "Razorpay Gateway", "Google OAuth 2.0", "WebSockets Streaming", "RESTful API Integrations"], // integrations
      backend: ["Node.js & Express.js", "FastAPI (Python)", "Asynchronous Route Handlers", "JWT Session Management", "HttpOnly Cookies"],
      frontend: ["React.js", "Next.js (App Router)", "Responsive UI Design", "Figma Prototyping", "Vanilla CSS & HTML5"]
    },
    experience: {
      role: "Software Engineering Intern",
      company: "CodSoft",
      date: "June 2026 - June 2026",
      certLink: "https://drive.google.com/file/d/11BqwHcgQ6xSdrGNq6m_fzg6-Cg9ao299/view?usp=drive_link",
      tech: ["FastAPI", "PyTorch", "OpenCV", "SQLite", "Hugging Face"],
      bullets: [
        "<strong>Engineered</strong> low-latency web video streaming route endpoints in FastAPI and implemented minimax-based AI routing workflows.",
        "<strong>Built</strong> a content-based recommendation backend service in Node.js/Express by executing Cosine Similarity and Jaccard overlap algorithms.",
        "<strong>Optimized</strong> API memory profiles: programmatically cached model files (~1GB+ chunk buffers) to prevent server-side memory bounds."
      ]
    },
    credentials: [
      "<strong>Finalist (Top 10%)</strong> – WIE HackX 2025 Hackathon (IEEE, Nirma University) <a href='https://drive.google.com/file/d/1sWoZy0iqPy7rMLduyPLe1GUw33VlidmS/view?usp=drive_link' target='_blank' class='text-link' style='font-size:0.75rem; margin-left:4px;'>View Cert 🔗</a>",
      "<strong>Participant</strong> – CanHack 2026 Cybersecurity Competition (University of Canberra & IoES) <a href='https://drive.google.com/file/d/1J5R0LzPWki7Vxp1uyw0KOpNTyVMEapX8/view?usp=drive_link' target='_blank' class='text-link' style='font-size:0.75rem; margin-left:4px;'>View Cert 🔗</a>"
    ],
    tripwellTech: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay"],
    civivisionTech: ["Next.js", "SQLite", "Prisma ORM", "Gemini API"]
  }
};

// Start with Muskan as default
let currentProfile = "muskan";

// --- DOM Updating Engine ---
function updateProfileUI(profileKey) {
  const data = profiles[profileKey];
  if (!data) return;
  
  currentProfile = profileKey;

  // Simple text fields
  document.getElementById("nav-logo-name").textContent = data.name;
  document.getElementById("profile-name").textContent = data.name;
  document.getElementById("profile-role-badge").textContent = data.role;
  document.getElementById("profile-summary").textContent = data.summary;
  document.getElementById("edu-gpa").textContent = data.gpa;

  // Resume Download Button Link
  document.getElementById("resume-download-btn").href = data.resumeLink;

  // Social Links
  document.getElementById("social-linkedin").href = data.socials.linkedin;
  document.getElementById("social-github").href = data.socials.github;
  document.getElementById("social-email").href = data.socials.email;
  
  const figmaBtn = document.getElementById("social-figma");
  const figmaDivider = document.getElementById("figma-divider");
  if (data.socials.figma) {
    figmaBtn.href = data.socials.figma;
    figmaBtn.style.display = "inline-block";
    if (figmaDivider) figmaDivider.style.display = "inline-block";
  } else {
    figmaBtn.style.display = "none";
    if (figmaDivider) figmaDivider.style.display = "none";
  }

  // Skills Lists
  loadSkillCategory("skills-data-eng", data.skills.dataEng);
  loadSkillCategory("skills-ai-ml", data.skills.aiMl);
  loadSkillCategory("skills-backend", data.skills.backend);
  loadSkillCategory("skills-frontend", data.skills.frontend);

  // Experience Card
  const expBadges = document.getElementById("experience-badges");
  expBadges.innerHTML = "";
  data.experience.tech.forEach(tech => {
    const badge = document.createElement("span");
    badge.className = "timeline-badge";
    badge.textContent = tech;
    expBadges.appendChild(badge);
  });

  const expBullets = document.getElementById("experience-bullets-list");
  expBullets.innerHTML = "";
  data.experience.bullets.forEach(bulletText => {
    const li = document.createElement("li");
    li.innerHTML = bulletText;
    expBullets.appendChild(li);
  });

  document.getElementById("experience-cert-link").href = data.experience.certLink;

  // Credentials / Hackathons
  const credsList = document.getElementById("credentials-list");
  credsList.innerHTML = "";
  data.credentials.forEach(cred => {
    const li = document.createElement("li");
    li.innerHTML = cred;
    credsList.appendChild(li);
  });

  // Project Tech Tags
  loadTechTags("tripwell-tech-tags", data.tripwellTech);
  loadTechTags("civivision-tech-tags", data.civivisionTech);
  loadTechTags("experience-badges-project", data.experience.tech);
  document.getElementById("experience-cert-link-project").href = data.experience.certLink;

  // Restart SQL sandbox so it reflects the new user DB data
  runSQLQuery();
}

function loadSkillCategory(elementId, skillArray) {
  const container = document.getElementById(elementId);
  container.innerHTML = "";
  skillArray.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    container.appendChild(li);
  });
}

function loadTechTags(elementId, tagArray) {
  const container = document.getElementById(elementId);
  container.innerHTML = "";
  tagArray.forEach(tag => {
    const span = document.createElement("span");
    span.className = "tech-tag";
    span.textContent = tag;
    container.appendChild(span);
  });
}

// --- Theme Switcher System ---
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  const activeTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = activeTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("portfolio-theme", newTheme);
});

// Load stored theme on load
const storedTheme = localStorage.getItem("portfolio-theme") || "light";
document.documentElement.setAttribute("data-theme", storedTheme);

// Dropdown selector logic removed - Portfolio dedicated solely to Muskan Isarani

// --- Schema Code Drawer Toggles ---
document.querySelectorAll(".schema-toggle-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const targetId = btn.getAttribute("data-target");
    const codeBox = document.getElementById(targetId);
    codeBox.classList.toggle("show");
    
    const isShow = codeBox.classList.contains("show");
    btn.querySelector("svg").style.transform = isShow ? "rotate(45deg)" : "rotate(0deg)";
    btn.querySelector("span").textContent = isShow ? "Hide DB Schema" : "View DB Schema";
  });
});

// --- SQL Console Sandbox Simulated Database ---
const sqlPresets = document.querySelectorAll(".sql-preset-btn");
const sqlInput = document.getElementById("sql-input");
const runSqlBtn = document.getElementById("run-sql-btn");
const sqlOutputContainer = document.getElementById("sql-table-output");

sqlPresets.forEach(btn => {
  btn.addEventListener("click", () => {
    sqlPresets.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    sqlInput.value = btn.getAttribute("data-query");
    runSQLQuery();
  });
});

runSqlBtn.addEventListener("click", runSQLQuery);

function runSQLQuery() {
  const query = sqlInput.value.trim().replace(/;$/, "");
  let columns = [];
  let rows = [];

  // Simple query processor mock
  if (query.toUpperCase().includes("SELECT * FROM PROJECTS WHERE COMPLEXITY = 'HIGH'")) {
    columns = ["id", "project_name", "tech_stack", "backend_focus", "complexity"];
    rows = [
      ["1", "TripWell", "React, Node, MongoDB, Razorpay", "35+ REST endpoints, Google OAuth, validation", "High"],
      ["2", "CiviVision", "Next.js, SQLite, Prisma ORM, Gemini API", "Serverless endpoints, secure HttpOnly cookie session", "High"],
      ["3", "Streaming Backend", "FastAPI, PyTorch, OpenCV, WebSockets", "Async WebSocket connection frame backpressure", "High"]
    ];
  } else if (query.toUpperCase().includes("SELECT SKILL_NAME, CATEGORY FROM SKILLS")) {
    columns = ["skill_name", "category"];
    const skillData = profiles[currentProfile].skills;
    const filterByIn = query.toUpperCase().includes("IN (");
    
    // Flatten skills for querying
    Object.keys(skillData).forEach(catKey => {
      let catName = "Database Architecture";
      if (catKey === "aiMl") catName = "Software Integrations";
      else if (catKey === "backend") catName = "Backend Engineering";
      else if (catKey === "frontend") catName = "Frontend Engineering";

      if (!filterByIn || catName === "Backend Engineering" || catName === "Database Architecture") {
        skillData[catKey].forEach(skill => {
          rows.push([skill, catName]);
        });
      }
    });
  } else if (query.toUpperCase().includes("SELECT TITLE, ORGANIZATION, DATE_RECEIVED FROM CREDENTIALS")) {
    columns = ["title", "organization_or_issuer", "academic_score"];
    if (currentProfile === "muskan") {
      rows = [
        ["B.Tech Information Technology", "Ganpat University", "CGPA 7.72"],
        ["WIE HackX Hackathon Finalist (Top 10%)", "IEEE, Nirma University", "N/A"],
        ["CanHack Cybersecurity Participant", "University of Canberra & IoES", "N/A"]
      ];
    } else {
      rows = [
        ["B.Tech Information Technology", "Ganpat University", "CGPA 7.09"],
        ["CanHack Cybersecurity Participant", "University of Canberra & IoES", "N/A"]
      ];
    }
  } else if (query.toUpperCase().includes("SELECT * FROM BIO_SUMMARY")) {
    columns = ["engineer_name", "profile_gpa", "internship_role", "duration"];
    const p = profiles[currentProfile];
    rows = [
      [p.name, p.gpa.split(": ")[1], p.experience.role, p.experience.date.split(" (")[0]]
    ];
  } else {
    // Error fallback
    sqlOutputContainer.innerHTML = `<div style="padding: 16px; color: #ef4444; font-family: var(--font-mono); font-size: 0.8rem;">
      Error: SQL execution failed. Table not found or syntax mismatch near "${query.substring(0, 10)}..."
    </div>`;
    return;
  }

  // Render Table output
  let tableHTML = `<table class="sql-result-table"><thead><tr>`;
  columns.forEach(col => {
    tableHTML += `<th>${col.toUpperCase()}</th>`;
  });
  tableHTML += `</tr></thead><tbody>`;

  rows.forEach(row => {
    tableHTML += `<tr>`;
    row.forEach(val => {
      tableHTML += `<td>${val}</td>`;
    });
    tableHTML += `</tr>`;
  });
  tableHTML += `</tbody></table>`;
  sqlOutputContainer.innerHTML = tableHTML;
}

// --- Interactive Data Pipeline Simulation ---
const runPipelineBtn = document.getElementById("run-pipeline-btn");
const pipelineStatusText = document.getElementById("pipeline-status-text");
const ingestConsole = document.getElementById("ingest-console");
const aiConsole = document.getElementById("ai-console");

// Metric DOMs
const metricLatency = document.getElementById("metric-latency");
const metricSuccess = document.getElementById("metric-success");
const metricCount = document.getElementById("metric-count");

const nodes = ["ingest", "transform", "ai", "load", "bi"];
let streamCount = 0;

runPipelineBtn.addEventListener("click", () => {
  if (runPipelineBtn.disabled) return;
  runPipelineBtn.disabled = true;
  
  // Reset statuses
  pipelineStatusText.className = "status-running";
  pipelineStatusText.textContent = "Running";
  ingestConsole.innerHTML = "";
  aiConsole.innerHTML = "";
  
  // Reset flows and node highlights
  nodes.forEach(node => document.getElementById(`node-${node}`).classList.remove("active"));
  for (let i = 1; i <= 4; i++) document.getElementById(`flow-${i}`).classList.remove("active");
  
  runNodeStep(0);
});

function highlightJSON(obj) {
  let str = JSON.stringify(obj, null, 2);
  // Simple JSON syntax highlighters
  return str.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
    var cls = 'val-num';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'val-key';
      } else {
        cls = 'val-str';
      }
    } else if (/true|false/.test(match)) {
      cls = 'val-bool';
    } else if (/null/.test(match)) {
      cls = 'val-null';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
}

function runNodeStep(stepIndex) {
  if (stepIndex >= nodes.length) {
    // Complete
    pipelineStatusText.className = "status-completed";
    pipelineStatusText.textContent = "Completed";
    
    // Update metric dashboard values with a nice animation feel
    metricLatency.textContent = (110 + Math.floor(Math.random() * 30)) + "ms";
    metricSuccess.textContent = "100%";
    streamCount += 5;
    metricCount.textContent = streamCount;
    
    runPipelineBtn.disabled = false;
    showToast("Pipeline Execution Succeeded! Data loaded.");
    return;
  }

  // Active node highlight
  const currentNodeId = nodes[stepIndex];
  document.getElementById(`node-${currentNodeId}`).classList.add("active");
  
  // Pipeline logs trigger
  if (currentNodeId === "ingest") {
    // Print logs
    let requestPayload = {
      method: "POST",
      endpoint: "/api/v1/bookings",
      headers: { authorization: "Bearer eyJhbGci...", "content-type": "application/json" },
      body: { itineraryId: "itn_9812a", gateway: "razorpay", amount: 1499.00 }
    };
    ingestConsole.innerHTML = `[HTTP Request Ingress...]\n` + highlightJSON(requestPayload);
  }
  
  else if (currentNodeId === "transform") {
    // Update logs showing validation & middleware
    ingestConsole.innerHTML += `\n\n[Auth & Validation Middleware...]\n` + 
      `JWT decoded: Signature valid\n` + 
      `User ID: usr_2291 verified\n` + 
      `Request body validated: schema check OK.`;
  }
  
  else if (currentNodeId === "ai") {
    // Run controller log
    aiConsole.innerHTML = `[Service Controller Initializing...]\n` + 
      `Calling external payment gateway API...\n` +
      `Response received:\n` + 
      highlightJSON({
        orderId: "order_K2j189Ah",
        status: "authenticated",
        signature_check: "SHA-256 match OK",
        payment_processed: true
      });
  }
  
  else if (currentNodeId === "load") {
    aiConsole.innerHTML += `\n\n[Database Transaction...]\n` + 
      `Prisma write OK (inserted 1 booking row in mongodb)\n` +
      `Active session keys TTL updated.`;
  }
  
  else if (currentNodeId === "bi") {
    // Updates dashboard representation metrics
    metricLatency.textContent = "124ms";
    metricSuccess.textContent = "98%";
    metricCount.textContent = streamCount + 5;
  }

  // Trigger Connector Line Animations
  if (stepIndex < nodes.length - 1) {
    const connectorFlow = document.getElementById(`flow-${stepIndex + 1}`);
    connectorFlow.classList.add("active");
    
    // Timeout matches CSS transitions
    setTimeout(() => {
      runNodeStep(stepIndex + 1);
    }, 1200);
  } else {
    // Last element
    setTimeout(() => {
      runNodeStep(stepIndex + 1);
    }, 800);
  }
}

// --- Toast System UI ---
function showToast(message) {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast toast-success";
  
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  // Slide out after 3 seconds
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// --- Contact Form Submission Handler Removed (Replaced with direct mailto) ---

// --- Project Card Detail Tabs Listener ---
document.querySelectorAll(".detail-tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".project-card");
    const tabTarget = btn.getAttribute("data-tab");
    
    // Toggle active state on headers
    card.querySelectorAll(".detail-tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    // Show corresponding tab content
    card.querySelectorAll(".detail-tab-content").forEach(content => {
      content.classList.remove("active");
      if (content.id === tabTarget) {
        content.classList.add("active");
      }
    });
  });
});

// Initialize first load
updateProfileUI("muskan");
