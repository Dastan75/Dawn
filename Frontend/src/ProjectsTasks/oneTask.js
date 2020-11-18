import React from 'react'
import { PriorityUrgent, PriorityHigh, PriorityMedium, PriorityLow } from './SvgIcons/Priority';
import moment from 'moment';

function oneTask({ item, provided, openTaskDetails, snapshot }) {
    return (
        <div
            onClick={() => openTaskDetails(item)}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`task ${snapshot.isDragging ? 'isDragging' : ''}`}>
            { console.log("TASK", item)}
            <div className={`progressBar ${item.choosedColor ? 'BG' + item.choosedColor : 'BGcolor1'}`} style={{ width: `${item.percent}%` }}/>
            <div className='contentTask'>
                <div className='title'>
                    {item.title}
                </div>
                <div className='priority'>
                    {item.priority === 'urgent' && <PriorityUrgent />}
                    {item.priority === 'high' && <PriorityHigh />}
                    {item.priority === 'medium' && <PriorityMedium />}
                    {item.priority === 'low' && <PriorityLow />}
                    {!item.priority && <PriorityMedium/>}
                </div>
                <div className="subContent">
                    <div className="estTime">
                        { item.dueDate ? moment(item.dueDate).calendar(null, {
                            sameDay: '[Today]',
                            nextDay: '[Tomorrow]',
                            nextWeek: 'dddd',
                            lastDay: '[Yesterday]',
                            lastWeek: '[Last] dddd',
                            sameElse: 'DD/MM/YYYY'
                        }) : 'No due date' }
                    </div>
                    {
                        item.ownerName && 
                        <div className="owner">
                            {item.ownerName[0]}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default React.memo(oneTask)
