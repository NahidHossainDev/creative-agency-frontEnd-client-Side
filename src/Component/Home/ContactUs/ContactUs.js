import React from 'react';

const ContactUs = () => {
    return (
      <section className="contactUs">
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
              <h1>Let us handle your project, professionally.</h1>
              <p>
                With well written codes, we build amazing apps for all
                platforms, mobile and web apps in general.
              </p>
            </div>
            <div className="col-md-6">
              <form action="">
                <div class="input-group input-group-lg">
                  <input
                    type="text"
                    class="form-control mb-3"
                    placeholder="Your Name"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  ></input>
                </div>

                <div class="input-group input-group-lg">
                  <input
                    type="text"
                    class="form-control mb-3"
                    placeholder="Your Email"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  ></input>
                </div>
                <div class="input-group input-group-lg">
                  <textarea
                    cols="10"
                    rows="10"
                    class="form-control mb-3"
                    placeholder="Your Message"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  ></textarea>
                </div>
                <button className="btn btn-dark">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ContactUs;