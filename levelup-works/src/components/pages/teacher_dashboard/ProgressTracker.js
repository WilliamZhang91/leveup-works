import { ProgressCard } from "../../templates/ProgressCard"

export const ProgressTracker = ({ tabSelected }) => {

    return <>
        <div style={{
            display: tabSelected === 1 ? "block" : "none",
            width: "70%",
            height: "50%",
            paddingTop: "50px",
            margin: "auto"
        }}>
            <ProgressCard />
        </div>
    </>
}