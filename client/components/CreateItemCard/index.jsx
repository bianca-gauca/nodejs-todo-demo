import { useEffect, useState } from 'react'
import Button from "../Button/Button";

function CreateItemCard(props) {
	const [title, setTitle] = useState([])

	const completeTask = title => {
		props.createTaskInParent(title)
		setTitle('')
	}

	return (
		<div>
			<h2>{props.title}</h2>
			<div>
				<input
					type="text"
					value={title}
					name="title"
					onChange={e => setTitle(e.target.value)}
					placeholder="add new task"
				/>
				<button onClick={() => completeTask(title)}>Add Task</button>{' '}
			</div>
		</div>
	)
}

export default CreateItemCard


{/*<button className="text-success btn_custom" onClick={() => completeTask(title)}>Add Task</button>{' '}*/}
{/*<button className="text-danger btn_custom" onClick={() => completeTask(title)}>Add Task</button>{' '}*/}
{/*<button className="text-default btn_custom" onClick={() => completeTask(title)}>Add Task</button>{' '}*/}
{/*<Button variant={"success"} />*/}
{/*<Button variant={"danger"} />*/}