import { inject, observer } from 'mobx-react'
import { useState, useEffect, useCallback } from 'react'
import CreateItemCard from './components/CreateItemCard'
import ListItemCard from './components/ListItemCard'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import ActiveListCard from './components/PendingListCard'
import './styles.css'

function App(props) {
	const types = ['active', 'complete']
	const [activeTab, setActiveTab] = useState(types[0])

	const [activeTodos, setActiveTodos] = useState([])
	const [completedTodos, setCompletedTodos] = useState([])
	const { todoStore } = props.rootStore

	useEffect(() => {
		loadTasks()
	}, [])

	const loadTasks = async () => {
		await todoStore.loadTodos()
		setActiveTodos(todoStore.getActive())
		setCompletedTodos(todoStore.getComplete())
	}

	const createTask = async title => {
		await todoStore.createTask({ title: title })
		loadTasks()
	}

	const completeTask = async task => {
		await todoStore.completeATask({ id: task._id })
		loadTasks()
	}

	// const isActiveTabClass = (isActive) => {
	// 	return isActive ? "border-x-2 border-x-primary border-t-2 border-t-primary border-solid" : "hover:text-primary"
	// }

	//className={`inline-block py-1 px-10 rounded-t focus:outline-0 cursor-pointer ${isActiveTabClass(activeTab === type)}`}

	const tabPanel = () => {
		return (
			<Tabs>
				<TabList>
					{types.map(type => (
						<Tab
							key={type}
							active={activeTab === type}
							onClick={() => {
								setActiveTab(type)
							}}
						>
							{type}
						</Tab>
					))}
				</TabList>

				<TabPanel>
					<ActiveListCard
						title="Active Tasks"
						cardData={activeTodos}
						completeTaskInParent={task => completeTask(task)}
					/>
				</TabPanel>
				<TabPanel>
					<ListItemCard title="Completed Tasks" cardData={completedTodos} />
				</TabPanel>
			</Tabs>
		)
	}

	return (
		<div className="container">
			{todoStore.isLoading && <h1> is Loading... </h1>}
			<CreateItemCard title="Add Tasks" createTaskInParent={title => createTask(title)} />
			<h2>A Simple ToDo List App</h2>
			<div>{tabPanel()}</div>
		</div>
	)
}

export default inject('rootStore')(observer(App))


//** className="w-full md:w-3/5 mx-auto my-0" */

//** Divider */
// <div className="w-full border border-primary border-solid"></div>