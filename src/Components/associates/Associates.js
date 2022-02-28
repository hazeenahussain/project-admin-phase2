import React from 'react';
import { Link } from 'react-router-dom';

function Associates(props) {
    return (
        <div>
         <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>ASSOCIATES</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/Associates" className="nav-link">Associates</Link>
            {/* <li className="breadcrumb-item"><a href="#">Home</a></li> */}
            {/* <li className="breadcrumb-item active">Projects</li> */}
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    {/* Default box */}
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">List of Associates</h3>
        <div className="card-tools">
          <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
            <i className="fas fa-minus" />
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
      <div className="card-body p-0">
        <table className="table table-striped projects">
          <thead>
            <tr>
              <th style={{width: '1%'}}>
                SL NO.
              </th>
              <th style={{width: '20%'}}>
                 Name & Course 
              </th>
              <th style={{width: '30%'}}>
                Details
              </th>
              <th>
                Contact Number
              </th>
              {/* <th style={{width: '8%'}} className="text-center">
                Status
              </th> */}
              <th style={{width: '20%'}}>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>
                1
              </td>
              <td>
                <a>
                 Anu
                </a>
                <br />
                <small>
                  MERN
                </small>
              </td>
              <td>
                anu234@gmail.com
                <br></br>
                <small>
                  Username:anu234
                </small>
              </td>
              <td className="project_progress">
                 8767876545
              </td>
              
              <td className="project-actions text-right">
                {/* <a className="btn btn-primary btn-sm" href="#">
                  <i className="fas fa-folder">
                  </i>
                  View
                </a> */}
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Cancel
                </a>
              </td>
            </tr>
            <tr>
            <td>
                2
              </td>
              <td>
                <a>
                 Priya
                </a>
                <br />
                <small>
                  FSD
                </small>
              </td>
              <td>
                priya123@gmail.com
                <br></br>
                <small>
                  Username:priya123
                </small>
              </td>
              <td className="project_progress">
                
                    9567843567                              
              </td>
                            <td className="project-actions text-right">
                {/* <a className="btn btn-primary btn-sm" href="#">
                  <i className="fas fa-folder">
                  </i>
                  View
                </a> */}
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Cancel
                </a>
              </td>
            </tr>
            <tr>
            <td>
                3
              </td>
              <td>
                <a>
                 Sitara
                </a>
                <br />
                <small>
                  Cloud Computing
                </small>
              </td>
              <td>
                sitharajay@gmail.com
                <br></br>
                <small>
                  Usename:sitharajay
                </small>
              </td>
              <td className="project_progress">
                
                9784562712               
              </td>
              
              <td className="project-actions text-right">
                {/* <a className="btn btn-primary btn-sm" href="#">
                  <i className="fas fa-folder">
                  </i>
                  View
                </a> */}
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Cancel
                </a>
              </td>
            </tr>
            <tr>
            <td>
                4
              </td>
              <td>
                <a>
                 Rimi
                </a>
                <br />
                <small>
                  Testing
                </small>
              </td>
              <td>
                rimistar@gmail.com
                <br></br>
                <small>
                  Username:rimistar
                </small>
              </td>
              <td className="project_progress">
                
                9456783456                           
              </td>
              
              <td className="project-actions text-right">
                {/* <a className="btn btn-primary btn-sm" href="#">
                  <i className="fas fa-folder">
                  </i>
                  View
                </a> */}
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Cancel
                </a>
              </td>
            </tr>
            <tr>
            <td>
                5
              </td>
              <td>
                <a>
                 Manu
                </a>
                <br />
                <small>
                  MEAN
                </small>
              </td>
              <td>
                manu875@gmail.com
                <br></br>
                <small>
                  Username:manu765
                </small>
              </td>
              <td className="project_progress">
                
                9786556786              
              </td>
              
              <td className="project-actions text-right">
                {/* <a className="btn btn-primary btn-sm" href="#">
                  <i className="fas fa-folder">
                  </i>
                  View
                </a> */}
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Cancel
                </a>
              </td>
            </tr>
            <tr>
            <td>
                6
              </td>
              <td>
                <a>
                 Krishna
                </a>
                <br />
                <small>
                  AI
                </small>
              </td>
              <td>
                krishnakumar@gmail.com
                <br></br>
                <small>
                 Username:krishna123
                </small>
              </td>
              <td className="project_progress">
                
                98767676543                
              </td>
              
              <td className="project-actions text-right">
                {/* <a className="btn btn-primary btn-sm" href="#">
                  <i className="fas fa-folder">
                  </i>
                  View
                </a> */}
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Cancel
                </a>
              </td>
            </tr>
            <tr>
            <td>
                7
              </td>
              <td>
                <a>
                 Fathima
                </a>
                <br />
                <small>
                  MEAN
                </small>
              </td>
              <td>
                fathimabeevi@gmail.com
                <br></br>
                <small>
                  Username:fathima123
                </small>
              </td>
              <td className="project_progress">
                
                9456783421                                  
              </td>
              
              <td className="project-actions text-right">
                {/* <a className="btn btn-primary btn-sm" href="#">
                  <i className="fas fa-folder">
                  </i>
                  View
                </a> */}
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Cancel
                </a>
              </td>
            </tr>
            <tr>
            <td>
                8
              </td>
              <td>
                <a>
                 Alex
                </a>
                <br />
                <small>
                  Cyber Security
                </small>
              </td>
              <td>
                alexmv@gmail.com
                <br></br>
                <small>
                  Username:alexmv
                </small>
              </td>
              <td className="project_progress">
                
                9345678234               
              </td>
              
              <td className="project-actions text-right">
                {/* <a className="btn btn-primary btn-sm" href="#">
                  <i className="fas fa-folder">
                  </i>
                  View
                </a> */}
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Cancel
                </a>
              </td>
            </tr>
            <tr>
            <td>
                9
              </td>
              <td>
                <a>
                 Muhammed
                </a>
                <br />
                <small>
                  FSD
                </small>
              </td>
              <td>
                muhammed123@gmail.com
                <br></br>
                <small>
                  Username:muhammed123
                </small>
              </td>
              <td className="project_progress">
                             
                  9123456789                
              </td>
              
              <td className="project-actions text-right">
                {/* <a className="btn btn-primary btn-sm" href="#">
                  <i className="fas fa-folder">
                  </i>
                  View
                </a> */}
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Cancel
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
  </section>
  {/* /.content */}
</div>
  
        </div>
    );
}

export default Associates;
