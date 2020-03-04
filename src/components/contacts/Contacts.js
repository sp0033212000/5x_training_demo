import React from "react";

import "../../css/contacts.css";
import ContactsHeader from "./ContactsHeader";
import ContactInfo from "./ContactInfo";
import ContactsForm from "./ContactsForm";

const Contacts = () => {
	return (
		<React.Fragment>
			<ContactsHeader />
			<div className="mt-5 mb-5 pb-5 overwrite-contacts">
				<div className="container">
					<div className="row">
						<ContactInfo />
						<div className="col-12 col-sm-12 col-md-6 col-lg-6">
							<div className="mb-3">
								任何問題都歡迎您透過以下表單詢問，我們會盡快回覆您！
							</div>
							<ContactsForm />
						</div>
					</div>
				</div>
			</div>

			{/* <iframe name="processForm" style="display: none"></iframe>
<script type="text/javascript">
  $(function() {
    $('#new_contact').submit(function() {
      alert('感謝您的來信，我們會儘快與您聯繫!');
      window.location = "/";
    });
  });
</script> */}
		</React.Fragment>
	);
};

export default Contacts;
