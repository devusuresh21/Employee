import React from 'react'
import Nav from './Nav'

const AddEmployee = () => {
  return (
    <div>
        <Nav/>
        <div class="container">
        <div class="row">
            <h2>Add Employee</h2>
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="row g-3">
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="label-form">empid</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="label-form">Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="label-form">phone NUmber</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="label-form">email</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="label-form">adress</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="label-form">password</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" class="label-form">confirm password</label>
                        <input type="text" className="form-control" />
                        <button class="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AddEmployee