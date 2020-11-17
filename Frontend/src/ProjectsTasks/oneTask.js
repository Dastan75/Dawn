import React from 'react'
import { PriorityUrgent, PriorityHigh, PriorityMedium, PriorityLow } from './SvgIcons/Priority';

function oneTask({ item, provided, openTaskDetails, snapshot }) {
    return (
        <div
            onClick={() => openTaskDetails(item)}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`task ${snapshot.isDragging ? 'isDragging' : ''}`}>
            <div className={`progressBar ${item.choosedColor ? 'BG' + item.choosedColor : 'BGcolor1'}`} style={{ width: `${item.percent}%` }}/>
            <div className='contentTask'>
                {item.title}
                {item.priority === 'urgent' && <PriorityUrgent />}
                {item.priority === 'high' && <PriorityHigh />}
                {item.priority === 'medium' && <PriorityMedium />}
                {item.priority === 'low' && <PriorityLow />}
                {!item.priority && <PriorityMedium/>}
            </div>
        </div>
    )
}

export default React.memo(oneTask)
