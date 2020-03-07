import React from "react";

const ReCaptcha = () => {
  return (
    <div className="form-group">
      <script src="https://www.google.com/recaptcha/api.js" async="" defer="" />
      <div
        className="g-recaptcha"
        data-sitekey="6LdJRhgUAAAAAFE0hyvJzsu_BpUeAiBQ0Lrq6xvV"
      >
        <div style={{ width: "304px", height: "78px" }}>
          <div>
            <iframe
              title="reCaptcha"
              src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdJRhgUAAAAAFE0hyvJzsu_BpUeAiBQ0Lrq6xvV&amp;co=aHR0cHM6Ly81eHJ1YnkudHc6NDQz&amp;hl=zh-CN&amp;v=61bII03-TtCmSUR7dw9MJF9q&amp;size=normal&amp;cb=wbyikwbfcaq7"
              width="304"
              height="78"
              role="presentation"
              name="a-m0kv31b4mhft"
              frameBorder="0"
              scrolling="no"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
            />
          </div>
          <textarea
            id="g-recaptcha-response"
            name="g-recaptcha-response"
            className="g-recaptcha-response"
            style={{
              width: "250px",
              height: "40px",
              border: "1px solid rgb(193, 193, 193)",
              margin: "10px 25px, padding: 0px",
              resize: "none",
              display: "none"
            }}
          />
        </div>
        <iframe title="none" style={{ display: "none" }} />
      </div>
      <div className="has-error" />
    </div>
  );
};

export default ReCaptcha;
