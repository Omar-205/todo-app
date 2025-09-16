import type { ITodo } from "../App";

interface IProps{
    todos: ITodo[] 
    selectedTab: string, 
    setSelectedTab: (i: string)=>void

}
export function Tabs({todos, selectedTab, setSelectedTab}: Readonly<IProps>){

    const tabs: string[] = ['All', 'Open', 'Completed'];
    return(
        <nav className="tab-container">
            {tabs.map((tab, tabIndex)=>{
                const numberOfTasks = (tab == "All"?
                (todos ?? 0).length:
                (tab == "Open"?
                (todos ?? 0).filter(val=> !val?.complete).length:
                (todos ?? 0).filter(val=> val.complete).length
                ))
                return (
                    <button 
                    className={"tab-button "+(tab == selectedTab?"tab-selected":"")} 
                    style={{marginRight: 4}} 
                    key={tabIndex+1}
                    onClick={() => {
                        setSelectedTab(tab)
                    }}
                    >
                        <h4>{tab} (<span>{numberOfTasks}</span>)</h4>
                    </button>
                )
            })}
            <hr />
        </nav>    
    )
}