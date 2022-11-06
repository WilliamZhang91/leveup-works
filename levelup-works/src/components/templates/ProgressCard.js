import "../../styles/template/template.css";

export const ProgressCard = ({ el }) => {

    let array = [];

    if (el.projectID.length === undefined) {
        el.projectID = [el.projectID];
    }

    for (let i = 1; i < 16; i++) {
        array.push({
            id: i,
            completed: false
        });
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < el.projectID.length; j++) {
            if (array[i].id === el.projectID[j]) {
                array[i].completed = true;
            }
        }
    }

    const render = () => array.map((a) => {
        if (a.completed === true) {
            return <div
                className="projectNumber"
                style={{ backgroundColor: "#00c2ff" }}
                data-testid={`progress-tracker-completed`}
            >{a.id}
            </div>
        } else {
            return <div className="projectNumber">{a.id}</div>
        }
    });

    return <>
        <div className="progress-tracker-card">
            <div>{el.name}</div>
            <div style={{ display: "flex" }}>{render()}</div>
        </div>
    </>
}