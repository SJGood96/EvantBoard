import React, {Component} from 'react';

import TextArea from "./inputs/TextArea";
import Input from "./inputs/Input";
import DropDownItem from "./inputs/DropDownItem";
import Button from "./inputs/Button";

import "../styles/form.css"


class CreateEventForm extends Component {
    state = {
        submission: {
            category: "",
            name: "",
            title: "",
            date: "",
            address: "",
            zipCode: "",
            preview: "",
            eventInfo: ""
        }, 
        allCategories: ["Outdoor", "Gaming", "Educational", "Celebration", "Other"]
    };

    constructor(props) {
        super(props);
        this.handleSubmissionChange = this.handleSubmissionChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }


    handleSubmissionChange(event) {
        let name = event.target.name;
        let value = event.target.value;
     
        this.setState(
          prevState => {
            return { submission: { ...prevState.submission, [name]: value } };
          },
          () =>
            console.log("changed " + name + " to: " + this.state.submission[name])
        );
      }

    handleClear(event) {
        if (event) event.preventDefault();
        this.setState({
            submission: {
                category: "",
                name: "",
                title: "",
                date: "",
                address: "",
                zipCode: "",
                preview: "",
                eventInfo: "" 
            }
        });
        console.log("Event form cleared");
    }

    render() {
        let {submission, allCategories} = this.state;

        return (
            <form>
                <div className="category">
                    {"Category: "}
                </div>

                <div className="dropdownitem">
                <DropDownItem
                    value={submission.category}
                    onChange={this.handleSubmissionChange}
                    placeholder={"Select Category..."}
                    options={allCategories}
                />
                </div>


                <div ClassName="name">
                    {"Name:"}
                </div>

                <div classname="entername">
                <Input
                    value={submission.category}
                    onChange={this.handleSubmissionChange}
                    placeholder={"Enter Name..."}
                />
                </div>

                <Input
                    title={"Event Title:"}
                    name={"title"}
                    value={submission.title}
                    onChange={this.handleSubmissionChange}
                    type={"text"}
                    placeholder={"Enter Title..."}
                />

                <Input
                    title={"Date:"}
                    name={"date"}
                    value={submission.date}
                    onChange={this.handleSubmissionChange}
                    type={"date"}
                    />

                <Input
                    title={"Address:"}
                    name={"address"}
                    value={submission.address}
                    onChange={this.handleSubmissionChange}
                    type={"text"}
                    placeholder={"(ex) Arrowhead Park"}
                />

                <Input
                    title={"Zip Code: "}
                    name={"zipCode"}
                    value={submission.zipCode}
                    onChange={this.handleSubmissionChange}
                    type={"number"}
                />

                <Input
                    title={"Event Preview: "}
                    name={"preview"}
                    value={submission.preview}
                    onChange={this.handleSubmissionChange}
                    type={"text"}
                />

                <TextArea
                    title={"Event Info:"}
                    name={"eventInfo"}
                    value={submission.eventInfo}
                    onChange={this.handleSubmissionChange}
                    cols={30}
                    rows={8}
                />
                <br />

                <Button type="reset" action={this.handleClear} title={"Clear"} />
                <Button type="reset" action={this.handleClear} title={"Sumbit"} />
            </form>
        )
    }
}

export default CreateEventForm;