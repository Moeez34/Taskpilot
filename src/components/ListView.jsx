const tasks = [
    { title: 'UI Research & Method', status: 'In Design', start: 'Dec 11', end: 'Dec 18', assignees: ['JD', 'SM'] },
    { title: 'Create Foundation Color', status: 'In Design', start: 'Dec 18', end: 'Dec 18', assignees: ['RB'] },
    { title: 'Create Design System and Tokens', status: 'In Development', start: 'Dec 9', end: 'Dec 18', assignees: ['JD', 'AK'] },
    { title: 'Update Sidebar', status: 'Todo', start: 'Dec 12', end: 'Dec 14', assignees: ['AK'] },
    { title: 'Pricing Card', status: 'In Review', start: 'Dec 14', end: 'Dec 18', assignees: ['SM'] },
]

const badgeClass = {
    'In Design': 'badge-design',
    'In Development': 'badge-dev',
    'In Review': 'badge-review',
    'Done': 'badge-done',
    'Todo': 'badge-todo',
}

function ListView() {
    return (
        <div className="list-view">
            <table className="list-table">
                <thead>
                    <tr className="list-header">
                        <th>Task</th>
                        <th>Status</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Assignees</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, i) => (
                        <tr key={i} className="list-row glass">
                            <td className="list-task-title">{task.title}</td>
                            <td><span className={`badge ${badgeClass[task.status]}`}>{task.status}</span></td>
                            <td className="list-date">{task.start}</td>
                            <td className="list-date">{task.end}</td>
                            <td>
                                <div className="task-assignees">
                                    {task.assignees.map((a, j) => (
                                        <div key={j} className="task-avatar">{a}</div>
                                    ))}
                                </div>
                            </td>
                            <td><button className="task-menu">···</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListView
