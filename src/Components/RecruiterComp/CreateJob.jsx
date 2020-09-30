import React, { Component } from "react";

import Select from "react-select";
import HeaderAll from "../CommonComp/HeaderAll";
import Footer from "../CommonComp/Footer";
import LeftNavProvider from "../CommonComp/LeftNavProvider";

const primaryskilloptions = [
{ value: "java", label: "java" },
{ value: "php", label: "php" },
{ value: "python", label: "python" },
];

const employmenttypeoption = [
{ value: "part time", label: "part time" },
{ value: "full time", label: "full time" },
];

const jobcategoryoption = [
{ value: "Developer", label: "Developer" },
{ value: "Tester", label: "Tester" },
{ value: "Support", label: "Support" },
];
const numberofpositionoption = [
{ value: "1", label: "1" },
{ value: "2", label: "2" },
{ value: "3", label: "3" },
{ value: "4", label: "4" },
{ value: "5", label: "5" },
];

const hours = [
{ value: "1", label: "1" },{ value: "2", label: "2" },
{ value: "3", label: "3" },
{ value: "4", label: "4" },
{ value: "5", label: "5" },
{ value: "6", label: "6" },
{ value: "7", label: "7" },
{ value: "8", label: "8" },
{ value: "9", label: "9" },
{ value: "10", label: "10" },
{ value: "11", label: "11" },
{ value: "12", label: "12" },
{ value: "13", label: "13" },
{ value: "14", label: "14" },
{ value: "15", label: "15" },
{ value: "16", label: "16" },
{ value: "17", label: "17" },
{ value: "18", label: "18" },
{ value: "19", label: "19" },
{ value: "20", label: "20" },
{ value: "21", label: "21" },
{ value: "22", label: "22" },
{ value: "23", label: "23" },
{ value: "24", label: "24" },
];
const min = [
{ value: "1", label: "1" },
{ value: "2", label: "2" },
{ value: "3", label: "3" },
{ value: "4", label: "4" },
{ value: "5", label: "5" },
{ value: "6", label: "6" },
{ value: "7", label: "7" },
{ value: "8", label: "8" },
{ value: "9", label: "9" },
{ value: "10", label: "10" },
{ value: "11", label: "11" },
{ value: "12", label: "12" },
{ value: "13", label: "13" },
{ value: "14", label: "14" },
{ value: "15", label: "15" },
{ value: "16", label: "16" },
{ value: "17", label: "17" },
{ value: "18", label: "18" },
{ value: "19", label: "19" },
{ value: "20", label: "20" },
{ value: "21", label: "21" },
{ value: "22", label: "22" },
{ value: "23", label: "23" },
{ value: "24", label: "24" },
{ value: "25", label: "25" },
{ value: "26", label: "26" },
{ value: "27", label: "27" },
{ value: "28", label: "28" },
{ value: "29", label: "29" },
{ value: "30", label: "30" },
{ value: "31", label: "31" },
{ value: "32", label: "32" },
{ value: "33", label: "33" },
{ value: "34", label: "34" },
{ value: "35", label: "35" },
{ value: "36", label: "36" },
{ value: "37", label: "37" },
{ value: "38", label: "38" },
{ value: "39", label: "39" },
{ value: "40", label: "40" },
{ value: "41", label: "41" },
{ value: "42", label: "42" },
{ value: "43", label: "43" },
{ value: "44", label: "44" },
{ value: "45", label: "45" },
{ value: "46", label: "46" },
{ value: "47", label: "47" },
{ value: "48", label: "48" },
{ value: "49", label: "49" },
{ value: "50", label: "50" },
{ value: "51", label: "51" },
{ value: "52", label: "52" },
{ value: "53", label: "53" },
{ value: "54", label: "54" },
{ value: "55", label: "55" },
{ value: "56", label: "56" },
{ value: "57", label: "57" },
{ value: "58", label: "58" },
{ value: "59", label: "59" },
{ value: "60", label: "60" },
];
const meridianoption = [
{ value: "am", label: "am" },
{ value: "pm", label: "pm" },
];

const starting_Salary = [
{ value: "1", label: "1" },
{ value: "2", label: "2" },
{ value: "3", label: "3" },
{ value: "4", label: "4" },
{ value: "5", label: "5" },
{ value: "6", label: "6" },
{ value: "7", label: "7" },
{ value: "8", label: "8" },
{ value: "9", label: "9" },
{ value: "10", label: "10" },
{ value: "11", label: "11" },
{ value: "12", label: "12" },
{ value: "13", label: "13" },
{ value: "14", label: "14" },
{ value: "15", label: "15" },
];

const end_Salary = [
{ value: "1", label: "1" },
{ value: "2", label: "2" },
{ value: "3", label: "3" },
{ value: "4", label: "4" },
{ value: "5", label: "5" },
{ value: "6", label: "6" },
{ value: "7", label: "7" },
{ value: "8", label: "8" },
{ value: "9", label: "9" },
{ value: "10", label: "10" },
{ value: "11", label: "11" },
{ value: "12", label: "12" },
{ value: "13", label: "13" },
{ value: "14", label: "14" },
{ value: "15", label: "15" },
];
const jobTitle = RegExp(
/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/i
);

export default class CreateJob extends Component {
constructor(props, any, context) {
super(props, any, context);

this.state = {
job_title: "",
secondaryskill: "",
experiencerequired: "",
jobdescriptiontext: "",
resposibilitiestext: "",
visa: "",
visaAvailable: "",
country: "",
region: "",
selectedprimaryjob: null,
selectedemploymenttype: null,
selectedcategorytype: null,
selectednoofposition: null,
selecthoursfrom: null,
selectminutefrom: null,
selecthoursto: null,
selectminuteto: null,
selectfrommeridian: null,
selecttomeridian: null,
chars_left: 4000,
chars_lefts: 4000,
salary_demand: "",
starting_salary: null,
end_salary: null,
errors: {
        job_title: "",
},
};
this.handleOnChange = this.handleOnChange.bind(this);
}

handleOnChange(event) {
event.preventDefault();
const { name, value } = event.target;
let errors = this.state.errors;
console.log(errors);
console.log(name, value);

switch (name) {
case "job_title":
        errors.job_title = jobTitle.test(value)
        ? ""
        : "Enter full Job Title (Ex: Software Engineer)";
        break;
default:
        break;
}

this.setState({ errors, [name]: value });
}

onChangeValue(event) {
const value = event.target.value;
this.setState({ salary_demand: value });
}
handleChangeprimaryjob = (selectedprimaryjob) => {
const value = selectedprimaryjob.value;
this.setState({ selectedprimaryjob: value });
};

handleChangeemploymenttype = (selectedemploymenttype) => {
// this.setState({ selectedett });
const value = selectedemploymenttype.value;
this.setState({ selectedemploymenttype });
console.log(`Option selected:`, selectedemploymenttype);
};

handleStartingSalary = (starting_salary) => {
const value = starting_salary.value;
this.setState({ starting_salary });
// this.setState({ starting_salary });
};

handleEndSalary = (end_salary) => {
const value = end_salary.value;
this.setState({ end_salary });
};

handleChangecategorytype = (selectedcategorytype) => {
const value = selectedcategorytype.value;
this.setState({ selectedcategorytype });
};
noofposition = (selectednoofposition) => {
const value = selectednoofposition.value;
this.setState({ selectednoofposition });
};
choosesalone = (selectedsalone) => {
const value = selectedsalone.value;
this.setState({ selectedsalone });
// this.setState({ selectedsalone });
console.log(`Option selected:`, selectedsalone);
};

choosesaltwo = (selectedsaltwo) => {
const value = selectedsaltwo.value;
this.setState({ selectedsaltwo });
};

choosefromhours = (selecthoursfrom) => {
const value = selecthoursfrom.value;
this.setState({ selecthoursfrom });
};
choosefromminute = (selectminutefrom) => {
const value = selectminutefrom.value;
this.setState({ selectminutefrom });
};
choosetohours = (selecthoursto) => {
const value = selecthoursto.value;
this.setState({ selecthoursto });
};

choosetominute = (selectminuteto) => {
const value = selectminuteto.value;
this.setState({ selectminuteto });
};

choosemeridianfrom = (selectfrommeridian) => {
const value = selectfrommeridian.value;
this.setState({ selectfrommeridian });
};
choosemeridianto = (selecttomeridian) => {
const value = selecttomeridian.value;
this.setState({ selecttomeridian });
};

selectCountry(val) {
this.setState({ country: val });
}

selectRegion(val) {
this.setState({ region: val });
}

handlechange = (event) => {
this.setState({ [event.target.name]: event.target.value });
};

handleWordCount = (event) => {
const charCount = event.target.value.length;
const charLeft = 4000 - charCount;
this.setState({ chars_left: charLeft });
};

handleWordCountResponsible = (event) => {
const charCounts = event.target.value.length;
const charLefts = 4000 - charCounts;
this.setState({ chars_lefts: charLefts });
};

getChckeboxValue(event) {
console.log("dfghjk");
const value = event.target.value;
this.setState({ visaAvailable: value });
console.log(value);
}

handlesubmit = (event) => {
// const options = {
//   headers: {
//   'Content-Type': 'application/json',
//   }
//   };
// axios
// .post("", this.state, options)
// .then(Response=>{console.log("Success..",Response)
//                   })
// .catch(error=>{})

alert(JSON.stringify(this.state));
event.preventDefault();
};
refreshPage = () => {
window.location.reload(false, this.context);
};

render() {
const { country, region } = this.state;
const {
selectedprimaryjob,
selectedemploymenttype,
selectedcategorytype,
selectednoofposition,
selecthoursfrom,
selecthoursto,
selectminutefrom,
selectminuteto,
selectfrommeridian,
selecttomeridian,
starting_salary,
end_salary,
countLimit,
} = this.state;
const { errors } = this.state;

return (
<div>
        <LeftNavProvider></LeftNavProvider>
        <div className="maincontent toggled">
                <div className="">
        <HeaderAll></HeaderAll>

                </div>
        <div className="fullscreen">

                 <p> &emsp; </p>
        <h4>  &ensp; &nbsp; &nbsp; <span className="font-weight-light">Active Job</span>  &nbsp; &gt; <span className="font-weight-bold ">&nbsp;CreateJob</span></h4>
                    
        
        <form className="first">
        <div className="borderone  ">
                <div className="first">
                <h5 className="mb-4  font-weight-light">Basic Information</h5>
                <div className="left ">
                <div className="">
                <label>Job Title</label>
                </div>
                <div className="">
                <input
                className="input placeholder"
                        type="text"
                        name="job_title"
                        value={this.state.job_title}
                        onChange={this.handlechange}
                        onKeyUp={this.handleOnChange}
                        placeholder="Job Title"
                />
                {errors.job_title.length > 0 && (
                        <span className="error">{errors.job_title}</span>
                )}
                <br />
                </div>
                </div>
                </div>
                <div className="right">
                <label>Employment Type</label>
                <div className="">
                <Select
                className="selectone placeholder"
                value={selectedemploymenttype}
                onChange={this.handleChangeemploymenttype}
                options={employmenttypeoption}
                placeholder="Select Employment type"
                ></Select>
                </div>
                </div>

                <div className="left second ">
                <label>Category</label>
                <div className="">
                <Select
                className="selectone placeholder"
                value={selectedcategorytype}
                onChange={this.handleChangecategorytype}
                options={jobcategoryoption}
                placeholder="Select  Category"
                />
                </div>
                </div>
        </div>

        <div className="bordertwo">
                <div className="first">
                <h5>Skill and Experience</h5>
                </div>
                <div className="left first">
                <label>Primary skill</label>

                <Select
                isMulti={true}
                value={selectedprimaryjob}
                onChange={this.handleChangeprimaryjob}
                options={primaryskilloptions}
                />
                </div>
                <div className="right4">
                <label>Secondary skill</label>
                <div>
                <input
                className="input placeholder"
                type="text"
                name="secondaryskill"
                value={this.state.secondaryskill}
                onChange={this.handlechange}
                placeholder="Enter secondary skill"
                />
                <br />
                </div>
                </div>

                <div className="left second2">
                <label>Experience Required</label>
                <div>
                <input
                className="input placeholder"
                accept="number"
                name="experiencerequired"
                value={this.state.experiencerequired}
                onChange={this.handlechange}
                placeholder="Enter experience required"
                />
                <br />
                </div>
                </div>
        </div>

        <div className="borderthree">
                <div className="first">
                <h5 className="mb-4">Others</h5>

     <label>Expected Working Hours</label>
                </div>
                <div className="flex">
                <Select
                className="select1 placeholder"
                value={selecthoursfrom}
                onChange={this.choosefromhours}
                options={hours}
                placeholder="Hrs "
                />
                <Select
                className="select1 placeholder"
                value={selectminutefrom}
                onChange={this.choosefromminute}
                options={min}
                placeholder="Min"
                />
                <Select
                className="select1 placeholder"
                value={selectfrommeridian}
                onChange={this.choosemeridianfrom}
                options={meridianoption}
                placeholder="am"
                />

                <p className="mt-2 mr-3">To</p>

                <Select
                className="select1 placeholder"
                value={selecthoursto}
                onChange={this.choosetohours}
                options={hours}
                placeholder="Hrs"
                />
                <Select
                className="select1 placeholder"
                value={selectminuteto}
                onChange={this.choosetominute}
                options={min}
                placeholder="Min"
                />
                <Select
                className="select1 placeholder"
                value={selecttomeridian}
                onChange={this.choosemeridianto}
                options={meridianoption}
                placeholder="pm"
                />
                </div>
                <div className="first5">
                <label>Number of position available</label>
                </div>
                <div className="left first5">
                <Select
                className="placeholder"
                value={selectednoofposition}
                onChange={this.noofposition}
                options={numberofpositionoption}
                placeholder="Number of position available"
                />
                </div>
                <div className="right5">
                <label className="mb-3">Annual Salary</label>
                <div onClick={this.onChangeValue.bind(this)}>
                <input  className="mb-3"type="radio" value="Lakhs" name="salary_demand" />{" "}
                ISD
                <input className="mb-3 "
                type="radio"
                className="margin-left "
                value="Thousand"
                name="salary_demand"
                />{" "}
                USD
                </div>
                <div className="flex1 ">
                {/* <label>From</label> */}
                <Select
                className="select2 placeholder"
                value={starting_salary}
                onChange={this.handleStartingSalary}
                options={starting_Salary}
                placeholder="select "
                />
                <div>
                </div>

                <label className="mt-2 mr-3">To</label>
                <Select
                className="select2 placeholder"
                value={end_salary}
                onChange={this.handleEndSalary}
                options={end_Salary}
                placeholder="select"
                />
                </div>
                <div className="flex3">

                <div className="flex4">

                <p className="">{this.state.salary_demand}</p>
                </div>
                <div>

                <p>{this.state.salary_demand}</p>
                </div>
                </div>
                </div>

                <div className="left second">
                <label> Visa </label>
                <div className="">
                <input 
                className="input placeholder"
                type="text"
                name="visa"
                value={this.state.visa}
                onChange={this.handlechange}
                placeholder="Visa(Optional)"
                />
                <br />
                </div>
                <div className="third">
                <input 
                type="checkbox"
                onClick={this.getChckeboxValue.bind(this)}
                value="Must have Passport"
                required
                />
                <label>Must have passport</label>
                </div>
                </div>
        </div>

        <div className="borderfour">
                <div className="first">
                <h5 clasName="mb-14">Hiring Location</h5>
                <div className="left1">
                <div className="">
                <label>Country</label>
                </div>
                <select className="placeholder" name="country" class="countries location" id="countryId">
                <option value="">Select </option>
                </select>
                </div>
                </div>
                <div className="right1">
                <label>State</label>
                <div className=""></div>
                <select  className="placeholder" name="state" class="states location" id="stateId">
                <option value="">Select </option>
                </select>
                </div>
                <div className="left1 second1">
                <div className="">
                <label>City</label>
                </div>
                <select className="placeholder" name="city" class="cities location" id="cityId">
                <option value="">Select </option>
                </select>
                {/* <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
                <script src="http://geodata.solutions/includes/countrystatecity.js"></script> */}
                </div>
        </div>

        {/* <div>
                                                <CountryDropdown value={country} onChange={(val) => this.selectCountry(val)} />
                                                <RegionDropdown country={country} value={region} onChange={(val) => this.selectRegion(val)} />
                                        </div> */}

        <div className="borderfive">
                <div className="second">
                <label className="display-big">Job Description</label>
                <div>
                <textarea className="placeholder"
                rows={7}
                cols={120}
                type="text"
                name="jobdescriptiontext"
                maxLength="4000"
                value={this.state.jobdescriptiontext}
                required
                onKeyUp={this.handleWordCount}
                onChange={this.handlechange}
                placeholder="Describe your Job Profile"
                />
                <p className="character-left">{this.state.chars_left}Characters Left</p>
                </div>

                <label className="display-big">Responsibilities</label>
                <div>
                <textarea className="placeholder"
                rows={7}
                cols={120}
                name="resposibilitiestext"
                maxLength="4000"
                value={this.state.resposibilitiestext}
                onChange={this.handlechange}
                onKeyUp={this.handleWordCountResponsible}
                placeholder="Describe your Responsibilities"
                />
                <p className="character-left">{this.state.chars_lefts}Characters Left</p>
                </div>
                </div>
        </div>

        <div className="right2">
                <button
                className=" btn btn-light float-right   border border-primary"
                onClick={this.refreshPage}
                >
                Cancel
                </button>
                <button
                className="btn btn-primary float-right right3 "
                onClick={this.handlesubmit}
                >
                Post
                </button>

        </div>
        </form>
        </div>
        <Footer></Footer>
        </div>
</div>
);
}
}
