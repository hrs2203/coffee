import React from 'react'

export class UserDetailComp extends React.Component {
  render() {
    return (
      <div className="col p-2">
        <div className="">
          <div className="card-body">

            <ul class="col-9 list-group">
              <li class="list-group-item">
                <div className="row">
                  <div className='col-4'>UserName</div>
                  <div className='col'>
                    {this.props.userDetail.userName}
                  </div>
                </div>
              </li>
              <li class="list-group-item">
                <div className="row">
                  <div className='col-4'>Email</div>
                  <div className='col'>
                    {this.props.userDetail.email}
                  </div>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </div>
    )
  }
}