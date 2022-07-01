import React, { Component } from "react";
import ReactDOM from 'react-dom' ;
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { CHeader, CHeaderText, CCol, CRow, CButton, CForm, CInputGroup, CFormInput, CInputGroupText, CFormLabel, CFormTextarea, CFormCheck, CFormSelect, CFormFloating  } from '@coreui/react'

class Form extends Component {
    render() {
        return (
                <CForm  class="form-34">
                    <CHeader>
                        <CHeaderText>
                            Reserve A Pet Sitter
                        </CHeaderText>
                    </CHeader>

                    <CRow className="mb-3">

                        <CCol sm={10} >
                            <CFormFloating>

                            <CFormSelect
                                id="floatingSelect"
                                floatingLabel="For how many pets do you need a sitter?"
                                aria-label="Floating label select example"
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </CFormSelect>
                            </CFormFloating>

                        </CCol>

                    </CRow>

                    <CRow className="mb-3">

                        <CCol sm={10} >

                            <CFormFloating>
                                <CFormInput type="text" id="floatingText" placeholder="Text" />
                                <CFormLabel htmlFor="exampleFormControlTextarea1">What breed is your pet?</CFormLabel>

                            </CFormFloating>

                        </CCol>

                    </CRow>
                    <CCol sm={10}>
                    <fieldset className="row mb-3 fs">

                        <legend className="col-form-label col-sm-2 pt-0">What is the size of your pet?</legend>


                            <CInputGroup class="form-check">
                                <CFormCheck id="flexCheckDefault" label="1-5 kg"/>
                                <CFormCheck id="flexCheckDefault" label="5-10 kg"/>
                                <CFormCheck id="flexCheckChecked" label="10-20 kg" />
                                <CFormCheck id="flexCheckChecked" label="20-40 kg" />
                                <CFormCheck id="flexCheckChecked" label="40+ kg" />
                            </CInputGroup>
                    </fieldset>
                    </CCol>



                    <CRow className="mb-3">
                    <CFormFloating>
                        <CFormTextarea

                            placeholder="Anything else the pet sitter would need to know?"

                            id="floatingTextarea2"

                            floatingLabel="Anything else the pet sitter would need to know?"

                            style={{ height: '100px' }}

                        >

                        </CFormTextarea>
                    </CFormFloating>
                    </CRow>

                    <CButton type="submit" class="button-34">Reserve</CButton>

                </CForm>

    );
    }
}
export default Form;