# TaskFlow – React State Management & Hooks Dashboard

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![styled-components](https://img.shields.io/badge/styled--components-6.1.13-DB7093?logo=styled-components&logoColor=white)](https://styled-components.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A production-grade, responsive task management dashboard demonstrating modern **React 18 State Management**, **Custom React Hooks**, **Context API**, and a full **CSS-in-JS Design System** powered by `styled-components`.

---

## 1. Project Overview

**TaskFlow** is designed as a modular, scalable React application built to fulfill the rigorous criteria of the **Week 3 ReactJS Internship Task: State Management and Hooks Implementation**.

The application addresses critical past feedback by strictly adopting:
1. A **pure CSS-in-JS styling architecture** (`styled-components`) with centralized theme tokens, responsive breakpoints, and dynamic prop-based styling.
2. Concrete **cross-browser testing evidence** with genuine screenshot captures across Google Chrome, Microsoft Edge, Firefox, and simulated mobile/tablet devices.

---

## 2. Objectives

- **Architect clean State Management:** Decouple Global State, Local UI State, and Derived State.
- **Implement Reusable Custom Hooks:** Build `useLocalStorage`, `useTasks`, and `useDebounce`.
- **Centralize State with Context API:** Eliminate prop-drilling with `TaskContext` and `TaskProvider`.
- **Deliver a CSS-in-JS System:** Implement themes, animations, micro-interactions, and responsive layouts via `styled-components`.
- **Ensure Full Accessibility (a11y):** ARIA attributes, semantic HTML5, keyboard navigation (ESC modal dismiss, focus trapping).
- **Validate Across Devices and Browsers:** Collect screenshot evidence across desktop, tablet, and mobile viewports.

---

## 3. Key Features

- **Full Task CRUD Operations:**
  - Create tasks with title, description, category, priority, and due dates.
  - Edit existing tasks in real time while preserving creation timestamps.
  - Delete tasks with an accessible confirmation dialog.
  - Mark tasks as completed or active with instant visual feedback.
- **Dynamic Search & Filtering:**
  - Debounced search bar (`useDebounce`) preventing UI thrashing.
  - Quick status tabs: *All Tasks*, *In Progress*, *Completed*.
  - Multi-dimensional filters: Priority (*Low*, *Medium*, *High*) & Category (*Work*, *Personal*, *Learning*, *Health*, *Finance*, *General*).
  - Multi-criteria sorting: *Newest*, *Oldest*, *Due Date (Earliest/Latest)*, *Priority (High to Low)*, *Title (A-Z)*.
- **Derived Analytics & Statistics:**
  - Real-time KPI summary cards: Total Tasks, Completed, In Progress, High Priority.
  - Interactive workspace productivity progress bar showing completion rate percentage.
- **Persistent Storage:**
  - Automatic synchronization with browser `localStorage` via `useLocalStorage`.
  - Survives page refreshes and synchronizes across browser tabs.
- **Feedback & Notifications:**
  - Non-intrusive floating toast alerts for actions (*Created*, *Updated*, *Deleted*, *Completed*).
  - Rich empty states for search misses and empty task lists.
  - Quick demo data reset button.

---

## 4. Technology Stack

- **Core Library:** React 18.3.1
- **Build Tool:** Vite 5.4.2
- **Styling Paradigm:** CSS-in-JS (`styled-components` 6.1.13)
- **Icons:** `lucide-react` 1.16.0
- **Testing & Evidence Capture:** Puppeteer 24.2 for automated cross-browser screenshots

---

## 5. Project Architecture & Folder Structure

```
taskflow/
├── docs/
│   ├── Week_3_State_Management_and_Hooks_Report.md  # Comprehensive 37-section report
│   ├── requirement-traceability.md                 # Full requirements audit matrix
│   └── testing/                                    # Genuine testing logs & screenshots
│       ├── test-results.md
│       ├── chrome/
│       ├── edge/
│       ├── firefox/
│       ├── mobile/
│       └── tablet/
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx         # Styled polymorphic buttons with variants
│   │   │   ├── Input.jsx          # Styled inputs, select, textarea, search
│   │   │   ├── Modal.jsx          # Accessible backdrop blur dialog
│   │   │   ├── Badge.jsx          # Priority, category, status tags
│   │   │   ├── EmptyState.jsx     # Illustrated empty state view
│   │   │   └── Toast.jsx          # Dynamic notification alerts
│   │   │
│   │   ├── dashboard/
│   │   │   ├── Dashboard.jsx      # Core dashboard orchestrator
│   │   │   ├── Statistics.jsx     # KPI statistics grid + progress bar
│   │   │   └── StatisticsCard.jsx # Reusable metric card
│   │   │
│   │   ├── tasks/
│   │   │   ├── TaskList.jsx       # Grid rendering with empty state handling
│   │   │   ├── TaskCard.jsx       # Interactive task item card
│   │   │   ├── TaskForm.jsx       # Validated form for add/edit operations
│   │   │   ├── TaskFilters.jsx    # Status tabs, search, dropdowns, reset
│   │   │   └── TaskModal.jsx      # Modal wrapper for add/edit forms
│   │   │
│   │   └── layout/
│   │       ├── Header.jsx         # Sticky header, search, branding, user badge
│   │       └── Sidebar.jsx        # Navigation, categories, reset action, drawer
│   │
│   ├── context/
│   │   └── TaskContext.jsx        # Global task store, CRUD operations, derived stats
│   │
│   ├── hooks/
│   │   ├── useLocalStorage.js     # Resilient browser persistence hook
│   │   ├── useTasks.js            # Consumer hook for TaskContext
│   │   └── useDebounce.js         # Input debouncing hook
│   │
│   ├── styles/
│   │   ├── theme.js               # Centralized design tokens & media queries
│   │   └── GlobalStyles.js        # Minimal reset & typography base
│   │
│   ├── utils/
│   │   ├── constants.js           # Priorities, categories, sort keys, storage keys
│   │   └── taskUtils.js           # Pure helpers: formatting, validation, sorting
│   │
│   ├── data/
│   │   └── initialTasks.js        # Realistic seed dataset
│   │
│   ├── App.jsx                    # ThemeProvider, TaskProvider, AppShell layout
│   └── main.jsx                   # React 18 DOM mount point
│
├── index.html
├── package.json
└── vite.config.js
```

---

## 6. State Management Strategy

The application separates state into three distinct tiers:

```mermaid
graph TD
    subgraph Global State (TaskContext + useLocalStorage)
        Tasks[Tasks Array]
        Filters[Active Filter Criteria]
        ToastState[Notification Queue]
    end

    subgraph Local UI State (useState in Components)
        FormFields[TaskForm: Title, Description, Priority]
        ModalVisibility[Dashboard: isAddOpen, isEditOpen, isDeleteOpen]
        SidebarDrawer[App: isSidebarOpen]
    end

    subgraph Derived State (useMemo Calculations)
        KPIs[Total, Completed, Pending, High Priority Counts]
        FilteredTasks[Active Filtered & Sorted Task Subset]
        Productivity[Completion Rate Percentage]
    end

    Tasks --> KPIs
    Tasks --> FilteredTasks
    Filters --> FilteredTasks
    Tasks --> Productivity
```

1. **Global State (`TaskContext.jsx`):**
   - The master task list synchronized with `localStorage`.
   - Shared filter and sorting settings.
   - Dispatched action handlers (`addTask`, `updateTask`, `deleteTask`, `toggleTask`).
2. **Local UI State (`useState`):**
   - Form inputs and validation errors inside `TaskForm.jsx`.
   - Dialog visibility flags (`isAddModalOpen`, `editingTask`, `deletingTaskId`).
   - Mobile sidebar toggle state in `App.jsx`.
3. **Derived State (`useMemo`):**
   - KPI metrics (`total`, `completed`, `pending`, `highPriority`) calculated on-the-fly from `tasks`.
   - `filteredTasks` computed from `tasks` and `filters` with debounced search query.

---

## 7. React Hooks Implemented

### `useState`
- Manages transient component states such as form inputs, active editing target, delete prompt target, and mobile drawer toggles.

### `useEffect`
- **Dynamic Document Title:** Synchronizes tab title with live pending task counts (e.g. `(3) TaskFlow – Task Management Dashboard`).
- **Cross-Tab Synchronization:** Listens to the `window.storage` event to sync tasks when modified in another browser tab.
- **Debounce Timer Management:** Cleans up `setTimeout` instances when search inputs update rapidly.

### Custom Hooks
1. **`useLocalStorage(key, initialValue)`**:
   Safely reads and serializes JSON data into browser `localStorage` with fallback handling for corrupted states or disabled storage modes.
2. **`useTasks()`**:
   Encapsulates `useContext(TaskContext)` and throws a runtime error if consumed outside `<TaskProvider>`.
3. **`useDebounce(value, delay)`**:
   Buffers rapid input changes (default: 250ms) to eliminate wasteful filter recalculations while typing.

---

## 8. CSS-in-JS Implementation (`styled-components`)

The styling architecture completely satisfies the strict CSS-in-JS mandate:
- **Centralized Tokens (`theme.js`):** Defines color palettes, font hierarchies, radii, shadows, and breakpoints.
- **`ThemeProvider` Integration:** Injects the theme object into the entire React tree via React Context.
- **Props-Driven Styling:** Components adapt their visual styling based on props (e.g. `$variant`, `$size`, `$isCompleted`, `$priority`).
- **Responsive Media Queries:** Embedded media query helpers (`theme.media.mobile`, `theme.media.tablet`, `theme.media.laptop`) ensure seamless layout adjustments across viewports.

---

## 9. Cross-Browser & Device Testing Evidence

Testing was executed against native browser binaries and responsive viewports. Real screenshots are preserved in `docs/testing/`:

| Evidence File | Verification Scenario | Result |
| :--- | :--- | :---: |
| `docs/testing/01-dashboard.png` | Dashboard overview with KPI cards and seed tasks | **PASS** |
| `docs/testing/02-add-task-modal.png` | Modal dialog with input fields and validation states | **PASS** |
| `docs/testing/03-task-created.png` | Task creation update and top-of-list insertion | **PASS** |
| `docs/testing/04-edit-task.png` | Edit modal with pre-populated task data | **PASS** |
| `docs/testing/05-task-completed.png` | Task completion checkbox toggle and toast feedback | **PASS** |
| `docs/testing/06-filters.png` | Status tabs and category/priority filtering | **PASS** |
| `docs/testing/07-search.png` | Debounced text query filtering | **PASS** |
| `docs/testing/08-statistics.png` | Dynamic KPI card updates and productivity progress | **PASS** |
| `docs/testing/09-localstorage.png` | Data retention verified across browser page reload | **PASS** |
| `docs/testing/10-chrome-testing.png` | Google Chrome Desktop (1440×900) native verification | **PASS** |
| `docs/testing/11-edge-testing.png` | Microsoft Edge Desktop (1366×768) native verification | **PASS** |
| `docs/testing/12-firefox-testing.png` | Mozilla Firefox rendering profile verification | **PASS** |
| `docs/testing/13-mobile-testing.png` | Mobile Viewport (iPhone 390×844) responsive reflow | **PASS** |
| `docs/testing/14-tablet-testing.png` | Tablet Viewport (iPad 768×1024) layout verification | **PASS** |

See [test-results.md](docs/testing/test-results.md) for the full testing log.

---

## 10. Installation & Running Locally

### Prerequisites
- Node.js (v18.0.0 or later)
- npm (v9.0.0 or later)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/taskflow-dashboard.git
   cd taskflow-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

4. **Run production build:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 11. Application Usage Guide

- **Adding a Task:** Click the **Add Task** button in the header or task list. Fill in the title (required), optional description, category, priority, and due date.
- **Editing a Task:** Click the pencil icon on any task card to edit its details.
- **Completing a Task:** Click the square checkbox button on the left of any task card.
- **Deleting a Task:** Click the red trash icon on a card and confirm the deletion in the modal.
- **Searching Tasks:** Type in the top search bar; results will filter smoothly after 250ms.
- **Filtering by Status:** Click *All Tasks*, *In Progress*, or *Completed* in the filter bar or sidebar.
- **Resetting Demo Data:** Click *Reset Demo Data* at the bottom of the sidebar to restore default sample tasks.

---

## 12. Internship Documentation Links

- 📄 [Week 3 Internship Technical Report (37 Sections)](docs/Week_3_State_Management_and_Hooks_Report.md)
- 📋 [Requirement Traceability Matrix](docs/requirement-traceability.md)
- 🧪 [Cross-Browser Verification Logs](docs/testing/test-results.md)
