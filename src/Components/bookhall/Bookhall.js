import React from 'react';

function Bookhall(props) {
    return (
        <div>
          <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>ASSOCIATE REGISTRATION</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Validation</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        {/* left column */}
        <div className="col-md-12">
          {/* jquery validation */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Register here <small>(Associates )</small></h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form id="quickForm">
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">ICTAK ID</label>
                  <input type="text" name="email" className="form-control" id="exampleInputEmail1" placeholder="Enter ICTAK ID" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Associate Name</label>
                  <input type="text" name="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Associate Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Username</label>
                  <input type="text" name="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Course</label>
                  <input type="text" name="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Course details" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Email</label>
                  <input type="text" name="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Contact Number</label>
                  <input type="text" name="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Contact Number" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Address</label>
                  <input type="text" name="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Address " />
                </div>
                <div className="form-group mb-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" name="terms" className="custom-control-input" id="exampleCheck1" />
                    <label className="custom-control-label" htmlFor="exampleCheck1">I agree to the <a href="#">terms of service</a>.</label>
                  </div>
                </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
          {/* /.card */}
        </div>
        {/*/.col (left) */}
        {/* right column */}
        <div className="col-md-6">
        </div>
        {/*/.col (right) */}
      </div>
      {/* /.row */}
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>

        </div>
    );
}

export default Bookhall;
