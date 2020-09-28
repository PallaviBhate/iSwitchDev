import React, { useContext } from 'react';
import ApiServicesOrgCandidate from '../../../../Services/ApiServicesOrgCandidate';
import { Context } from '../../../../Context/ProfileContext';

const Skill = ({dataAttributes}) => {
  const [inputData, setFormInputData] = React.useState({ experienceInYear: '', experienceInMonth: '', proficiency: '', skillName: '', version: '' })
  const [skillInfo, setSkillInfo] = React.useState('');
  const { state } = useContext(Context);
  const skillId = dataAttributes && dataAttributes.skillId;
  React.useEffect(() => {
    state.then((response) => {
      if (response && response.skillList) {
        const skillInfoObject = response.skillList.filter(skill => {
          return skill.skillId === skillId
        })[0]
        console.log(skillInfoObject)
        setSkillInfo(skillInfoObject)
      }
    })
  }, []);
  React.useEffect(() => {
    if (skillId && skillInfo) {
      const { experience, proficiency, skillName, version } = skillInfo;
      console.log(skillId)
      setFormInputData({
        experienceInYear: experience && parseFloat(experience).toFixed(2).split('.')[0],
        experienceInMonth: experience && parseFloat(experience).toFixed(2).split('.')[1],
        proficiency: proficiency,
        skillName: skillName,
        version: version,
      });
    }
  }, [skillInfo]);
  const handleFormInputData = (e) => {
    return (
      setFormInputData({
        ...inputData,
        [e.target.name]: e.target.value
      })
    )
  }
  const handleSubmit = (e) => {
    // e.preventDefault();
    let data = {
      "experience": `${inputData.experienceInYear}.${inputData.experienceInMonth}`,
      "proficiency": inputData.proficiency,
      "skillName": inputData.skillName,
      "version": inputData.version
    }
    if (skillId) {
      ApiServicesOrgCandidate.updateSkill({...data, skillId: skillId});
    } else {
      ApiServicesOrgCandidate.addSkill(data);
    }
  }

  return (
    <>
      <form>
        <div class="mb-4">
          <div className="form-group">
            <label htmlFor="skillName">Skill</label>
            <input class="form-control" type="text" 
              name="skillName"
              value={inputData.skillName}
              onChange={(e) => handleFormInputData(e)} placeholder="Enter Skill" />
          </div>
          <div className="form-group">
            <label htmlFor="version">Version</label>
            <input class="form-control" type="text" name="version"
            value={inputData.version}
            onChange={(e) => handleFormInputData(e)} placeholder="Enter Version" />
          </div>
          <label htmlFor="University">Experience</label>
          <div class="form-group">
            <div class="form-row">
              <div className="col mr-3">
                <select id="experienceInYear" className="form-control" name="experienceInYear" value={inputData.experienceInYear} onChange={(e) => handleFormInputData(e)}>
                  {Array(31).fill().map((_, i) => (
                    <option value={i} key={`${i}_years`}>{i} {i === 1 ? 'Year' : 'Years'} </option>
                  ))}
                </select>
              </div>
              <div className="col ml-3">
              <select id="experienceInMonth" className="form-control" name="experienceInMonth" value={inputData.experienceInMonth} onChange={(e) => handleFormInputData(e)}>
                  {Array(12).fill().map((_, i) => (
                    <option value={i < 10 ? `0${i}` : i} key={`${i}_months`}>{i} {i === 1 ? 'Month' : 'Months'} </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="proficiency">Proficiency</label>
            <select id="proficiency" className="form-control"  name="proficiency" value={inputData.proficiency} onChange={(e) => handleFormInputData(e)}>
              <option>Select Proficiency</option>
              <option>Beginner</option>
              <option>Proficient</option>
              <option>Expert</option>
            </select>
          </div>
        </div>
        <button class="btn lightBlue float-right px-5" onClick={handleSubmit}>Save</button>
      </form>
    </>
  );
}
export default Skill