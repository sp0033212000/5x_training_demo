import React from "react";

const ContactInfo = () => {
	return (
		<div className="col-12 col-sm-12 col-md-6 col-lg-6">
			<div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-3">
				<h3 className="mb-1">五倍紅寶石股份有限公司</h3>
				10046 台北市中正區衡陽路 7 號 5 樓
			</div>
			<div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex pl-0 mb-3">
				<div className="cml-12 col-sm-6 col-md-6 col-lg-6 pr-0">
					Tel：02-2331-5247
					<br />
					Mobile：0928-617-687
					<br />
					E-mail：
					<a href="mailto:hi@5xruby.tw">hi@5xruby.tw</a>
				</div>
				<div className="col-6 col-sm-6 col-md-6 col-lg-6 pl-03 pr-0">
					Fax：02-2331-8717
					<br />
					統編：24536806
				</div>
			</div>
			<div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-10">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14459.016266311726!2d121.513862!3d25.0424189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa8402e622aa7b148!2z5LqU5YCN57SF5a-255-z!5e0!3m2!1szh-TW!2stw!4v1482991564796"
					width="100%"
					height="450"
					frameBorder="0"
					style={{ border: 0 }}
					allowFullScreen=""
				></iframe>
			</div>
		</div>
	);
};

export default ContactInfo;
