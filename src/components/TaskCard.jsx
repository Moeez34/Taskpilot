function TaskCard({ title, dateRange, status, assignees = [], description }) {
    const badgeClass = {
        'In Design': 'badge-design',
        'In Development': 'badge-dev',
        'In Review': 'badge-review',
        'Done': 'badge-done',
        'Todo': 'badge-todo',
    }[status] || 'badge-todo'

    return (
        <div className="task-card glass">
            <div className="task-card-header">
                <span className="task-date">{dateRange}</span>
                <button className="task-menu">···</button>
            </div>
            <p className="task-title">{title}</p>
            {description && <p className="task-desc">{description}</p>}
            <div className="task-card-footer">
                <span className={`badge ${badgeClass}`}>{status}</span>
                <div className="task-assignees">
                    {assignees.map((a, i) => (
                        <div key={i} className="task-avatar">{a}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TaskCard
