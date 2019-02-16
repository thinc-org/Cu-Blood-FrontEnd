import React, { Component } from 'react';

const select = {
    background: "url(../../static/icons/arrow-down.svg) right 5px center / 12px 15px no-repeat #efefef",
    height: "40px",
    lineHeight: "40px"
}

export default class extends Component {
    render() {
        const { children, text, width = "auto", smWidth = "auto" } = this.props
        return (
            <div className={`w-${width} sm:w-${smWidth} mb-6`}>
                <div className="font-cu-body font-bold text-grey-darker">{text}</div>
                {children}
            </div>
        );
    }
}

export const Selector = ({ choices = [], value, name, onChange, disabled = false }) => {
    const options = choices.map((choice, index) => {
        return (
            <option required key={index} value={index}>{choice}</option>
        )
    })
    return (
        <React.Fragment>
            <select disabled={disabled} value={value} name={name} onChange={onChange} required className="rounded-lg mt-2 px-4 w-full font-cu-body" style={select} >
                <option value=""></option>
                {options}
            </select>
        </React.Fragment>
    );
}

export const Input = ({ type, notRequired, value, name, onChange, error, disabled = false }) => {
    return type === 'date' ?
        (
            <React.Fragment>
                <input value={value} autoComplete={type === "password" ? "new-password" : "on"} name={name} onChange={onChange} disabled={disabled} className="bg-cb-grey-light rounded-lg mt-2 px-4 font-cu-body w-full" style={select} type={type} required={notRequired ? null : true} />
                <span className="font-cu-body font-medium text-cb-red">{error}</span>
            </React.Fragment>

        ) :
        (
            <React.Fragment>
                <input value={value} autoComplete={type === "password" ? "new-password" : "on"} name={name} onChange={onChange} disabled={disabled} className="bg-cb-grey-light rounded-lg mt-2 px-4 font-cu-body w-full" style={{ height: "40px" }} type={type} required={notRequired ? null : true} />
                <span className="font-cu-body font-medium text-cb-red">{error}</span>
            </React.Fragment>
        )
}

export class FormGroup extends Component {
    render() {
        const titleClassName = "w-full md:w-64 border-cb-grey-border md:border-r font-cu-heading text-2xl";
        const borderOnSmall = "border-cb-grey-border w-full border md:hidden my-2";
        const inputContainer = "w-full flex flex-col items-center md:items-start";
        const maxWidth = { maxWidth: "26.5rem" };
        const { children, text } = this.props
        return (
            <div className="flex flex-col md:flex-row">
                <div className={titleClassName}>{text}</div>
                <hr className={borderOnSmall} />
                <div className={inputContainer}>
                    <div className="w-full flex flex-row justify-between flex-wrap sm:flex-row mb-6 md:ml-10" style={maxWidth}>
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

export class SmallCheckbox extends Component {
    render() {
        const {text ,name, checked, onChange} = this.props
        return (
            <label className="flex font-cu-heading text-normal cursor-pointer check-box" >
                <input checked={checked} onChange={onChange} name={name} type="checkbox" />
                <div className="check-text text-sm text-left inline-flex" style={{display: "-webkit-box"}}><div>{text}</div></div>
            </label>
        )
    }
}