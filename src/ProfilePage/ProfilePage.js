import "./ProfilePage.css";

export default function Profile() {
  return (
    <section className="yourProfile">
      <div className="container">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="">
                      <h4>John Doe</h4>
                      <p className="">Full Stack Developer</p>
                      <p className="">Bay Area, San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="">
                      <h6 className="">Full Name</h6>
                    </div>
                    <div className="c">Kenneth Valdez</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="">
                      <h6 className="">Email</h6>
                    </div>
                    <div className="">fip@jukmuh.al</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="">
                      <h6 className="">Phone</h6>
                    </div>
                    <div className="">(239) 816-9029</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="">
                      <h6 className="">Mobile</h6>
                    </div>
                    <div className="">(320) 380-4539</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="text-secondary">
                      Bay Area, San Francisco, CA
                    </div>
                  </div>
                  <hr />
                  <div className="">
                    <div className="">
                      <a className="">Edit</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
