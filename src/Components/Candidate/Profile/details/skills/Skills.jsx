import React, { useContext } from 'react'
import { ADD_NEW_SKILL, EDIT_SKILL } from '../../../../../Utils/AppConst'
import { Context } from '../../../../../Context/ProfileContext';

export const Skills = ({ showPopup }) => {
  const { state } = useContext(Context);
  const [skill, setSkill] = React.useState('');
  state.then((data) => {
    setSkill(data);
    localStorage.setItem('candidateId', JSON.stringify(data.candidateInfo.candidateId));
  })
  return (
    <div class="bg-white px-4 py-4 section-divider align-items-center">
      <div class="col">
        <div class="mb-4 align-items-center">
          <img src="/images/Dashboard-assets/skills-icon.svg" alt="Cinque Terre" class="mr-2" />
          <span class="subtitle-semi-bold">Skills</span>
        </div>
        <div class="ml-2">
          <div class="col-9 ml-n3">
            <table class="table mb-3">
              <thead class="table-thead">
                <tr>
                  <th class="normal-text-medium-bold">Skills</th>
                  <th class="normal-text-medium-bold">Version</th>
                  <th class="normal-text-medium-bold">Experience</th>
                  <th class="normal-text-medium-bold">Proficiency</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>

                {(skill.skillList) ? skill.skillList.map((skill, i) => (
                  <tr>
                    <td>{skill.skillName}</td>
                    <td>{skill.version}</td>
                    <td>{skill.experience}</td>
                    <td>{skill.proficiency}</td>
                    <td class="edit-icon-column">
                      <img src="/images/Dashboard-assets/iconfinder_edit.svg" class="edit-icon" alt="Cinque Terre" onClick={() => showPopup(EDIT_SKILL, true, {skillId: skill.skillId})} />
                      <img src="/images/Dashboard-assets/delete.svg" class="edit-icon" alt="Cinque Terre" />
                    </td>
                  </tr>
                )) : null}
              </tbody>
            </table>
          </div>
          <div class="d-flex flex-row-reverse">
            <button class="btn btn-outline-info btn-add" onClick={() => showPopup(ADD_NEW_SKILL, true)}>Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}