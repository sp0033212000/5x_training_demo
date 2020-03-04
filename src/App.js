import React from "react";
import { Provider as FormProvider } from "./context/FormContext";
import Header from "./components/header/Header";
import "./css/app.css";
import Main from "./components/main/Main";

import Footer from "./components/main/Footer";
import Contacts from "./components/contacts/Contacts";

function App() {
	return (
		<React.Fragment>
			<Header />
			<div className="main_content">
				<Main />
				{/* <FormProvider>
					<Contacts />
				</FormProvider> */}
			</div>
			<Footer />
		</React.Fragment>
	);
}

export default App;
