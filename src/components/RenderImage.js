import React from 'react'

import {
    Female01, Female02, Female03, Female04, Female05, Female06, Female07, Female08,
    Female09, Female10, Female11, Female12, Female13, Female14, Female15, Female16, Female17,
    Female18, Female19, Female20, Female21, Female22, Female23, Female24, Female25, Male01,
    Male02, Male03, Male04, Male05, Male06, Male07, Male08, Male09, Male10, Male11, Male12,
    Male13, Male14, Male15, Male16, Male17, Male18, Male19, Male20, Male21, Male22, Male23, Male24, Male25
} from "../assets/images/personImages"

const RenderImage = (props) => {
    
    let showImage = () => {


        switch (props.name) {
            case "Female01":
                return <img src={Female01} alt="Female01" />
            case "Female02":
                return <img src={Female02} alt="Female02" />
            case "Female03":
                return <img src={Female03} alt="Female03" />
            case "Female04":
                return <img src={Female04} alt="Female04" />
            case "Female05":
                return <img src={Female05} alt="Female05" />
            case "Female06":
                return <img src={Female06} alt="Female06" />
            case "Female07":
                return <img src={Female07} alt="Female07" />
            case "Female08":
                return <img src={Female08} alt="Female08" />
            case "Female09":
                return <img src={Female09} alt="Female09" />
            case "Female10":
                return <img src={Female10} alt="Female10" />
            case "Female11":
                return <img src={Female11} alt="Female11" />
            case "Female12":
                return <img src={Female12} alt="Female12" />
            case "Female13":
                return <img src={Female13} alt="Female13" />
            case "Female14":
                return <img src={Female14} alt="Female14" />
            case "Female15":
                return <img src={Female15} alt="Female15" />
            case "Female16":
                return <img src={Female16} alt="Female16" />
            case "Female17":
                return <img src={Female17} alt="Female17" />
            case "Female18":
                return <img src={Female18} alt="Female18" />
            case "Female19":
                return <img src={Female19} alt="Female19" />
            case "Female20":
                return <img src={Female20} alt="Female20" />
            case "Female21":
                return <img src={Female21} alt="Female21" />
            case "Female22":
                return <img src={Female22} alt="Female22" />
            case "Female23":
                return <img src={Female23} alt="Female23" />
            case "Female24":
                return <img src={Female24} alt="Female24" />
            case "Female25":
                return <img src={Female25} alt="Female25" />

            case "Male01":
                return <img src={Male01} alt="Male01" />
            case "Male02":
                return <img src={Male02} alt="Male02" />
            case "Male03":
                return <img src={Male03} alt="Male03" />
            case "Male04":
                return <img src={Male04} alt="Male04" />
            case "Male05":
                return <img src={Male05} alt="Male05" />
            case "Male06":
                return <img src={Male06} alt="Male06" />
            case "Male07":
                return <img src={Male07} alt="Male07" />
            case "Male08":
                return <img src={Male08} alt="Male08" />
            case "Male09":
                return <img src={Male09} alt="Male09" />
            case "Male10":
                return <img src={Male10} alt="Male10" />
            case "Male11":
                return <img src={Male11} alt="Male11" />
            case "Male12":
                return <img src={Male12} alt="Male12" />
            case "Male13":
                return <img src={Male13} alt="Male13" />
            case "Male14":
                return <img src={Male14} alt="Male14" />
            case "Male15":
                return <img src={Male15} alt="Male15" />
            case "Male16":
                return <img src={Male16} alt="Male16" />
            case "Male17":
                return <img src={Male17} alt="Male17" />
            case "Male18":
                return <img src={Male18} alt="Male18" />
            case "Male19":
                return <img src={Male19} alt="Male19" />
            case "Male20":
                return <img src={Male20} alt="Male20" />
            case "Male21":
                return <img src={Male21} alt="Male21" />
            case "Male22":
                return <img src={Male22} alt="Male22" />
            case "Male23":
                return <img src={Male23} alt="Male23" />
            case "Male24":
                return <img src={Male24} alt="Male24" />
            case "Male25":
                return <img src={Male25} alt="Male25" />



            default:
                break;
        }
    }
    return (
        <>
            {showImage()}
        </>

    )
}

export default RenderImage
