import { TeacherDashboard } from "../TeacherDashboard";
import { useTab } from "../../../Hooks/useTab"
import { render, renderHook, act, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from 'react-router-dom';
import { useStudentProfiles } from "../../../Hooks/useStudentProfiles";
import Axios from "axios";
import mockResponse from "../__mock__/useStudentProfiles"
//import mockAxios from "../__mock__/useStudentProfiles";

jest.mock("Axios");

describe("Teacher Dashboard", () => {
    let mockFunction;
    let teacherDashboardComponent;

    beforeEach(() => {
        mockFunction = () => { return true }
        teacherDashboardComponent = render(
            <BrowserRouter>
                <TeacherDashboard setIsDashboardOpen={mockFunction} />
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
        jest.clearAllMocks;
    });

    test("Renders the first tab", () => {
        const firstTab = teacherDashboardComponent.getByTestId("progress-tracker");
        expect(firstTab.textContent).toBe("PROGRESS TRACKER");
    });

    test("Tab should be set to an initial state of 1", () => {
        const { result } = renderHook(useTab);
        // result: { current: { tabSelected: 1, toggleTab: [Function: toggleTab] } }
        expect(result.current.tabSelected).toBe(1);
    });

    test("Tab should be set to 2 when passed into toggleTab", () => {
        const { result } = renderHook(useTab);
        act(() => {
            result.current.toggleTab(2);
        });
        expect(result.current.tabSelected).toBe(2);
    });

    test("Fetch student data", async () => {
        // const { result } = renderHook(useStudentProfile);
        // await act(async () => {
        //     result.current.fetchStudentProfile(1);
        // });
        //const { result } = renderHook(useStudentProfile);
        //axios.get = jest.fn().mockResolvedValue(mockResponse);
        //const fetchedData = await fetchStudentProfile(1);

        //expect(mockAxios.get).toHaveBeenCalledTimes(1);
        const students = "Person1";
        const response = { data: students }
        Axios.get.mockImplementation(() => Promise.resolve(response));
        return useStudentProfiles.fetchStudentProfiles().then(res => expect(res).toEqual(response));
    });

});