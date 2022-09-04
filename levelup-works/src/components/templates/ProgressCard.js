import React, { useEffect } from "react";
import "../../styles/template/template.css";
import { ProjectNode } from "./ProjectNode";
import { useProjectLibrary } from "../Hooks/useProjectLibrary";
import { useStudentProfiles } from "../Hooks/useStudentProfiles";
import { Loading } from "./Loading";

export const ProgressCard = () => {

    let array = [];
    for (let i = 1; i < 16; i++) {
        array.push(i)
    }

    const {
        fetchProjectLibrary,
        projectLibrary,
        fetchProgressHistory,
        progressHistory,
    } = useProjectLibrary();

    const {
        fetchStudentProfiles,
        studentProfiles,
    } = useStudentProfiles();

    useEffect(() => {
        fetchProjectLibrary();
        fetchStudentProfiles();
        fetchProgressHistory();
    }, []);

    const newProgressHistory = progressHistory && progressHistory.map((el) => {
        return {
            name: el.student,
            arr: el.projectID,
            completed: true
        };
    });

    const newProgressHistory2 = progressHistory && progressHistory.map((el) => {
        return {
            name: el.student,
            projectID: el.projectID,
            completed: true
        };
    });

    console.log({ newProgressHistory2: newProgressHistory2 })

    // const progress = Object.values(progressHistory && newProgressHistory.reduce((a, { name, arr }) => {
    //     a[name] = a[name] || { name, arr: new Set() };
    //     a[name].arr.add(arr);
    //     return a;
    // }, {})).map(({ name, arr }) => ({ name, arr: [...arr] }));

    // console.log(progress)

    // progress.map((p) => {
    //     let newArr = []
    //     p.arr.map((i) => {
    //         return array.map(a => {
    //             if (i !== a) {
    //                 newArr.push(a)
    //             }
    //         })
    //     })
    //     console.log({newArr:newArr})
    // })

    // const progress2 = (data, key) => Object.values(
    //     data.reduce((res, item) => {
    //         const student = item[key]
    //         // const projectID = item[key2] //e.g. item["projectID"] = 1
    //         // console.log(student)
    //         // console.log(projectID)
    //         //console.log({res: res})
    //         const existing = res[student] || { [key]: student, data: [] }
    //         //console.log(existing)
    //         return {
    //             ...res,
    //             [student]: {
    //                 ...existing,
    //                 data: [...existing.data, item]
    //             }
    //         }
    //     }, {})
    // );

    let obj = {}
    obj["name"] = "hello"
    obj["name2"] = "goodbye"
    obj["name3"] = {}
    obj["name3"]["innername"] = "feet"
    console.log(obj)

    const progress2 = newProgressHistory2.reduce(function (r, a) {
        //a = newProgressHistory2[1][2][3] etc
        r[a.name] = r[a.name] || [];
        r[a.name]["completed"] = r[a.name]["completed"] || [];
        r[a.name]["completed"].push(a);
        return r;
    }, Object.create(null));


    //console.log({ progress: progress })
    //console.log(progress2(newProgressHistory2, "name"))

    // const myArray = new Object();
    // for (let i = 1; i < 16; i++) {
    //     myArray["projectID"] = i
    // }

    // console.log({myArray: myArray})


    // const progress2 = Object.entries(
    //     // What you have done
    //     newProgressHistory2.reduce((acc, { name, projectID, incomplete }) => {
    //         // Group initialization
    //         console.log({ acc: acc })
    //         if (!acc[name]) acc[name] = {};
    //         if (!acc[name]["complete"]) acc[name]["complete"] = {}
    //         if (!acc[name]["incomplete"]) acc[name]["incomplete"] = {}

    //         acc[name]["complete"] = { projectID }
    //         // for (let i = 0; i < array.length; i++) {
    //         //     return {

    //         //     }
    //         // }
    //         return acc;
    //     }, {})
    // )

    console.log(studentProfiles)
    console.log({progress2: progress2})
    console.log(newProgressHistory)


    console.log(progress2)

    return <>
        <div className="progress-tracker-card">
           
        </div>
    </>
};

{/* // progress.length === 0 ? null
            //     :
            //     progress.map((p) => {
            //         return <>
            //             <div className="progress-tracker-card">
            //                 <div style={{ width: "15%" }}>{p.name}</div>
            //                 {
            //                     p.arr.map((id) => {
            //                         return array.map((value) => {
            //                             if (id === value) {
            //                                 return <span className="project-number highlight">{id}</span>
            //                             }
            //                         })
            //                     })
            //                 }
            //             </div>
            //         </>
            //     }) */}
