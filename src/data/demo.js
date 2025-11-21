// Demo dataset for the dashboard prototype
export const currentUser = {
  name: 'Alex Carter',
  role: 'Product Manager',
};

export const metrics = [
  { id: 'users', label: 'Total Users', value: 1284, delta: '+4.2%', icon: 'Users' },
  { id: 'projects', label: 'Active Projects', value: 28, delta: '+2', icon: 'Folders' },
  { id: 'sales', label: 'Monthly Revenue', value: 58240, delta: '+8.1%', icon: 'CircleDollarSign' },
  { id: 'alerts', label: 'System Alerts', value: 3, delta: '-1', icon: 'Bell' },
  { id: 'satisfaction', label: 'Satisfaction', value: 92, delta: '+1.3%', icon: 'Star' },
];

export const users = [
  { id: 1, name: 'Jordan Lee', role: 'Engineer', status: 'Active', monthlySales: 12400, tasksCompleted: 42 },
  { id: 2, name: 'Taylor Kim', role: 'Designer', status: 'Active', monthlySales: 9800, tasksCompleted: 35 },
  { id: 3, name: 'Sam Patel', role: 'Analyst', status: 'Away', monthlySales: 7400, tasksCompleted: 28 },
  { id: 4, name: 'Morgan Yu', role: 'Engineer', status: 'Active', monthlySales: 15050, tasksCompleted: 53 },
  { id: 5, name: 'Avery Chen', role: 'Manager', status: 'Active', monthlySales: 21200, tasksCompleted: 61 },
  { id: 6, name: 'Riley Smith', role: 'Support', status: 'Active', monthlySales: 4200, tasksCompleted: 19 },
  { id: 7, name: 'Casey Jones', role: 'Engineer', status: 'Offline', monthlySales: 5600, tasksCompleted: 24 },
  { id: 8, name: 'Jamie Fox', role: 'Engineer', status: 'Active', monthlySales: 13100, tasksCompleted: 44 },
  { id: 9, name: 'Kendall Rao', role: 'Analyst', status: 'Active', monthlySales: 8600, tasksCompleted: 31 },
  { id: 10, name: 'Parker Hill', role: 'Designer', status: 'Away', monthlySales: 6900, tasksCompleted: 26 },
  { id: 11, name: 'Quinn Hart', role: 'Support', status: 'Active', monthlySales: 3500, tasksCompleted: 17 },
  { id: 12, name: 'Reese Nolan', role: 'Manager', status: 'Active', monthlySales: 19800, tasksCompleted: 55 },
];

export const salesTrend = [
  { month: 'Jan', value: 12000 },
  { month: 'Feb', value: 13800 },
  { month: 'Mar', value: 15200 },
  { month: 'Apr', value: 14700 },
  { month: 'May', value: 16400 },
  { month: 'Jun', value: 18200 },
  { month: 'Jul', value: 17500 },
  { month: 'Aug', value: 19100 },
  { month: 'Sep', value: 20500 },
  { month: 'Oct', value: 21800 },
  { month: 'Nov', value: 23400 },
  { month: 'Dec', value: 24750 },
];

export const roleBreakdown = [
  { label: 'Engineer', value: 46, color: '#60a5fa' },
  { label: 'Designer', value: 18, color: '#34d399' },
  { label: 'Analyst', value: 14, color: '#fbbf24' },
  { label: 'Manager', value: 12, color: '#f472b6' },
  { label: 'Support', value: 10, color: '#a78bfa' },
];

export const activities = [
  { id: 1, user: 'Jordan', action: 'pushed new commits to repo', time: '2m ago' },
  { id: 2, user: 'Avery', action: 'created a new project “Aurora”', time: '15m ago' },
  { id: 3, user: 'Taylor', action: 'updated Figma designs', time: '1h ago' },
  { id: 4, user: 'Sam', action: 'commented on task #204', time: '3h ago' },
  { id: 5, user: 'Morgan', action: 'closed issue #87', time: 'yesterday' },
];

export const tasks = [
  { id: 101, title: 'Prepare Q4 sales report', due: 'Tomorrow', priority: 'High' },
  { id: 102, title: 'Fix onboarding bug', due: 'Today', priority: 'Medium' },
  { id: 103, title: 'Plan team offsite', due: 'Next Week', priority: 'Low' },
  { id: 104, title: 'Review PRs', due: 'Today', priority: 'Medium' },
];
