import TaskCard from './TaskCard'

const columns = [
    {
        title: 'Todo',
        statusKey: 'badge-todo',
        tasks: [
            { title: 'Update Sidebar', dateRange: '12-14 Dec', status: 'Todo', assignees: ['AK'] },
        ],
    },
    {
        title: 'In Design',
        statusKey: 'badge-design',
        tasks: [
            { title: 'UI Research & Method', dateRange: '11 Dec - 18 Dec', status: 'In Design', assignees: ['JD', 'SM'] },
            { title: 'Create Foundation Color', dateRange: '18 Dec - 18 Dec', status: 'In Design', assignees: ['RB'] },
        ],
    },
    {
        title: 'In Development',
        statusKey: 'badge-dev',
        tasks: [
            { title: 'Create Design System and Tokens', dateRange: '9-18 Dec', status: 'In Development', assignees: ['JD', 'AK'] },
        ],
    },
    {
        title: 'In Review',
        statusKey: 'badge-review',
        tasks: [
            { title: 'Pricing Card', dateRange: '14 Dec - 18 Dec', status: 'In Review', assignees: ['SM'] },
        ],
    },
    {
        title: 'Done',
        statusKey: 'badge-done',
        tasks: [],
    },
]

const statusDotClass = {
    'In Design': 'dot-design',
    'In Development': 'dot-dev',
    'In Review': 'dot-review',
    'Done': 'dot-done',
    'Todo': 'dot-todo',
}

function BoardView() {
    return (
        <div className="board-view">
            {columns.map(col => (
                <div key={col.title} className="board-column">
                    <div className="board-col-header glass">
                        <span className={`col-dot ${statusDotClass[col.title] || 'dot-todo'}`} />
                        <span className="col-title">{col.title}</span>
                        <span className="col-count">{col.tasks.length}</span>
                        <button className="col-add">+</button>
                    </div>
                    <div className="board-col-tasks">
                        {col.tasks.map((task, i) => (
                            <TaskCard key={i} {...task} />
                        ))}
                        <button className="add-task-row">
                            <span>+</span> Add task
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BoardView
