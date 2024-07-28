import React from "react";
import { myData } from "../utils/portoData";
function ListComp({ skills , lightMode}){
    function SkillSet() {
        return (
          <>
            {skills.map((skill,index) => (
              <li
                key={`${index}-${skill.id}`}
                className={`text Phone:px-[10px] text-[11px] Phone:py-[4px] desktop:px-[12px] dekstop:py-[5px] rounded-md mx-[2px] my-[3px] ${
                  lightMode
                    ? "bg-Onyx text-Pink100"
                    : "bg-Platinum text-DarkBlueText"
                }`}
              >
                {skill.name}
              </li>
            ))}
          </>
        );
      }
      return <SkillSet/>
}

export default ListComp