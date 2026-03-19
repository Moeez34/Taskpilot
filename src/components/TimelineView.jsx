const dates = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22]

const timelineTasks = [
    { title: 'UI Research & Method', startCol: 1, span: 5, status: 'In Design', assignees: ['JD', 'SM'] },
    { title: 'Create Foundation Color', startCol: 5, span: 3, status: 'In Design', assignees: ['RB'] },
    { title: 'Update Sidebar', startCol: 0, span: 2, status: 'Todo', assignees: ['AK'] },
    { title: 'Create Design System and Tokens', startCol: 2, span: 6, status: 'In Development', assignees: ['JD'] },
    { title: 'Pricing Card', startCol: 1, span: 4, status: 'In Review', assignees: ['SM'] },
]

const badgeClass = {
    'In Design': 'badge-design',
    'In Development': 'badge-dev',
    'In Review': 'badge-review',
    'Done': 'badge-done',
    'Todo': 'badge-todo',
}

function TimelineView() {
    return (
        <div className="timeline-view">
            {/* Date header */}
            <div className="timeline-header">
                <div className="timeline-row-label" />
                {dates.map(d => (
                    <div key={d} className={`timeline-date-cell ${d === 15 ? 'today' : ''}`}>
                        {d}
                        {d === 15 && <div className="today-indicator" />}
                    </div>
                ))}
            </div>

            {/* Task rows */}
            {timelineTasks.map((task, i) => (
                <div key={i} className="timeline-row">
                    <div className="timeline-row-label" />
                    <div className="timeline-grid" style={{ gridTemplateColumns: `repeat(${dates.length}, 1fr)` }}>
                        <div
                            className="timeline-task-bar glass"
                            style={{
                                gridColumn: `${task.startCol + 1} / span ${task.span}`,
                            }}
                        >
                            <span className={`badge ${badgeClass[task.status]}`}>{task.status}</span>
                            <span className="timeline-task-title">{task.title}</span>
                            <div className="timeline-avatars">
                                {task.assignees.map((a, j) => (
                                    <div key={j} className="task-avatar small">{a}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TimelineView
